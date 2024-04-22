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
	const roleName = adminPrivileges ? 'ADMIN' : 'USER';

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		error(400, 'Username and Password must be a string');
	}

	async function createRoleIfNotExists(roleName: string, isAdmin: boolean) {
		const existingRole = await db.roles.findUnique({
			where: { name: roleName }
		});

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

		if (!role) {
			await createRoleIfNotExists(roleName, isAdmin);
			role = await db.roles.findUnique({
				where: { name: roleName }
			});
		}

		await db.user.create({
			data: {
				username,
				passwordHash,
				userAuthToken: crypto.randomUUID(),
				isAdmin,
				role: { connect: { id: role?.id } }
			}
		});
	}

	if (username && password) {
		try {
			const existingUser = await db.user.findUnique({
				where: { username }
			});
			console.log(roleName);
			if (existingUser) {
				return fail(400, { user: true });
			}

			const isAdmin = admin === 'on' && bcrypt.compareSync(password, adminHash);
			await createUser(username, password, isAdmin);
		} catch (error) {
			console.error('Error during user registration:', error);
			return fail(500, { error: 'Internal server error' });
		}
	}
	redirect(303, '/Login');
};

export const actions: Actions = { register };
