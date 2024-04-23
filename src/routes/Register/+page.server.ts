import { error, fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcryptjs';

import { db } from '$lib/database';

// using an enum for user roles to avoid typos
// if you're not using TypeScript use an object
enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const load: PageServerLoad = async () => {
	// todo
};

const adminHash = '$2y$10$.oEQNqr4lcgoTO5X53FsZeiSxzTlY0yFh3pCIs.qrCdnDWr6ot4a.';

const register: Action = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');
	const admin = data.get('admin');
	let adminPrivileges = admin == 'on' ? true : false;
	console.log('admin', admin);

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		error(400, 'Username and Password must be a string');
	}

	const roleName =
		adminPrivileges && bcrypt.compareSync(password.toString(), adminHash) ? 'ADMIN' : 'USER';
	const isAdmin = admin == 'on' && bcrypt.compareSync(password, adminHash);
	if (username && password) {
		try {
			const existingUser = await db.user.findUnique({
				where: { username }
			});
			if (existingUser) {
				return fail(400, { user: true });
			}
			console.log('isAdmin', isAdmin);

			await createUser(username, password, isAdmin);
		} catch (error) {
			console.error('Error during user registration:', error);
			return fail(500, { error: 'Internal server error' });
		}
	}

	async function createRoleIfNotExists(roleName: string, isAdmin: boolean) {
		const existingRole = await db.roles.findUnique({
			where: { name: roleName }
		});
		console.log(existingRole);
		if (!existingRole) {
			await db.roles.create({
				data: { name: roleName, isAdmin }
			});
		}
	}

	async function createUser(username: string, password: string, isAdmin: boolean) {
		const passwordHash = isAdmin ? adminHash : await bcrypt.hash(password, 10);

		let role = await db.roles.findUnique({
			where: { name: roleName }
		});
		console.log('before', role);

		if (!role) {
			await createRoleIfNotExists(roleName, isAdmin);
			role = await db.roles.findUnique({
				where: { name: roleName }
			});
			console.log('After', role);
		}

		await db.user.create({
			data: {
				username,
				passwordHash,
				isAdmin,
				userAuthToken: crypto.randomUUID(),
				role: { connect: { id: role?.id } }
			}
		});
	}

	redirect(303, '/Login');
};

export const actions: Actions = { register };
