import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Action, Actions, PageServerLoad } from './$types';

import { getDbInstance } from '$lib/database';

const db = getDbInstance(); // Get the Prisma client instance

export const load: PageServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const session = await event.locals.getSession();
	if (sessionID || session) {
		return redirect(303, '/Profile');
	}
	return {};
};

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true });
	}

	const user = await db.userDB.findUnique({ where: { username } });

	if (!user) {
		return fail(400, { username, credentials: true });
	}

	if (user.passwordHash) {
		const userPassword = bcrypt.compareSync(password, user.passwordHash);
		if (!userPassword) {
			return fail(400, { username, credentials: true });
		}
	} else {
		return fail(400, { username, credentials: true });
	}

	const authenticatedUser = await db.userDB.update({
		where: { username: user.username },
		data: { userAuthToken: crypto.randomUUID() }
	});

	cookies.set('session', authenticatedUser.userAuthToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 30
	});

	return redirect(302, '/Profile');
};

export const actions: Actions = { login };
