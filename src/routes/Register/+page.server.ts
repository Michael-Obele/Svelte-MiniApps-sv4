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

const register: Action = async ({ request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');
	username?.toString();
	password?.toString();

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		throw new Error('Username and Password must be a string');
	}

	if (username && password) {
		// Check if the role exists
		const role = await db.roles.findUnique({
			where: { name: Roles.USER }
		});

		// If the role doesn't exist, create it
		if (!role) {
			await db.roles.create({
				data: { name: Roles.USER }
			});
		} else {
			// Username exist
			error(
				400,
				'Registration failed. Username already exists. You can try logging in if you have an account, or choose a different username.'
			);
		}

		// Now, create the user with the role
		await db.user.create({
			data: {
				username,
				passwordHash: await bcrypt.hash(password, 10),
				userAuthToken: crypto.randomUUID(),
				role: { connect: { name: Roles.USER } }
			}
		});
		console.log('User created successfully');
	}

	redirect(303, '/Login');
};

export const actions: Actions = { register };
