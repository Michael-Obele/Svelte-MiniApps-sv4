import { error, fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcryptjs';
import { db } from '$lib/database';
import { isPrismaClientKnownRequestError, enhance } from '@zenstackhq/runtime';
import { Admin_PW } from '$env/static/private';

enum Roles {
	ADMIN = 'ADMIN',
	USERDB = 'USERDB'
}

export const load: PageServerLoad = async (session) => {
	var sessionData = session.cookies.get('session');
	if (sessionData) {
		return redirect(303, '/');
	}
	return {};
};
const adminHash = Admin_PW;

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
		const existingUser = await db.userDB.findUnique({
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
	} catch (err) {
		if (isPrismaClientKnownRequestError(err) && err.code === 'P2002') {
			// duplicated Username
			return fail(400, {
				username,
				password,
				error: 'Username already registered! Try Logging in'
			});
		} else {
			return fail(400, { error: 'Something Unexpected happened!' });
		}
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
		const newRole = await db.roles.create({
			data: { name: roleName }
		});
		console.log('Created role:', newRole);
		if (!newRole.id) {
			throw new Error('Role ID was not created');
		}
	}
}

async function createUser(username: string, password: string, isAdmin: boolean) {
	const passwordHash = isAdmin ? adminHash : await bcrypt.hash(password, 10);
	const roleName = isAdmin ? Roles.ADMIN : Roles.USERDB;

	let role = await db.roles.findUnique({
		where: { name: roleName }
	});

	if (!role) {
		await createRoleIfNotExists(roleName);
		// After creating the role, fetch it again to ensure we have the correct ID
		role = await db.roles.findUnique({
			where: { name: roleName }
		});
		if (!role) {
			throw new Error('Failed to create role');
		}
	}

	await db.userDB.create({
		data: {
			username,
			passwordHash,
			isAdmin,
			userAuthToken: crypto.randomUUID(),
			role: { connect: { id: role.id } } // Ensure role.id is used here
		}
	});
}

export const actions: Actions = { register };
