import { error, fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcryptjs';
import { getDbInstance } from '$lib/database';

import { isPrismaClientKnownRequestError, enhance } from '@zenstackhq/runtime';
import { Admin_PW } from '$env/static/private';

const db = getDbInstance(); // Get the Prisma client instance

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

	let isAdmin = admin === 'on' && bcrypt.compareSync(password.toString(), adminHash);

	try {
		const existingUser = await db.user.findUnique({
			where: { username }
		});

		if (existingUser) {
			return fail(400, { username, user: true });
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

				error: 'Username already registered! Try Logging in'
			});
		} else {
			console.error('Error:', err);
			return fail(400, { error: 'Something Unexpected happened!' });
		}
	}
	if (shouldRedirect) {
		return redirect(303, '/Login');
	}
	return redirect(303, '/Login');
};

async function createUser(username: string, password: string, isAdmin: boolean) {
	const passwordHash = isAdmin ? adminHash : await bcrypt.hash(password, 10);
	console.log('isAdmin:', isAdmin);

	await db.user.create({
		data: {
			username,
			passwordHash,
			isAdmin: isAdmin,
			userAuthToken: crypto.randomUUID()
		}
	});
}

export const actions: Actions = { register };
