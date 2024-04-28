import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Action, Actions, PageServerLoad } from './$types';

import { db } from '$lib/database';

export const load: PageServerLoad = async (session) => {
	var sessionData = session.cookies.get('session');
	if (sessionData) {
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

	username?.toString();
	password?.toString();

	const user = await db.user.findUnique({ where: { username } });

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

	const authenticatedUser = await db.user.update({
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

	redirect(302, '/');
};

export const actions: Actions = { login };
