import { error, fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcryptjs';
import { db } from '$lib/database';

enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const load: PageServerLoad = async (session) => {
	var sessionData = session.cookies.get('session');
	if (sessionData) {
		return redirect(303, '/');
	}
	return {};
};

const adminHash = '$2y$10$.oEQNqr4lcgoTO5X53FsZeiSxzTlY0yFh3pCIs.qrCdnDWr6ot4a.';

const register: Action = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');
	const admin = data.get('admin');
	let shouldRedirect = false;

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return error(400, 'Username and Password must be a string');
	}

	const isAdmin = admin === 'on' && bcrypt.compareSync(password.toString(), adminHash);

	try {
		const existingUser = await db.user.findUnique({
			where: { username }
		});

		if (existingUser) {
			return fail(400, { user: true });
		}

		await createUser(username, password, isAdmin);
		// Check if admin === 'on' and isAdmin is false after user creation
		if (admin === 'on' && !isAdmin) {
			shouldRedirect = true;
		}
	} catch (error) {
		console.error('Error during user registration:', error);
		return fail(500, { error: 'Internal server error' });
	}
	if (shouldRedirect) {
		return redirect(303, '/Login');
	}

	return redirect(303, '/Login');
};

async function createRoleIfNotExists(roleName: string) {
	const existingRole = await db.roles.findUnique({
		where: { name: roleName }
	});

	if (!existingRole) {
		await db.roles.create({
			data: { name: roleName }
		});
	}
}

async function createUser(username: string, password: string, isAdmin: boolean) {
	const passwordHash = isAdmin ? adminHash : await bcrypt.hash(password, 10);
	const roleName = isAdmin ? Roles.ADMIN : Roles.USER;

	let role = await db.roles.findUnique({
		where: { name: roleName }
	});

	if (!role) {
		await createRoleIfNotExists(roleName);
		role = await db.roles.findUnique({
			where: { name: roleName }
		});
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

export const actions: Actions = { register };
