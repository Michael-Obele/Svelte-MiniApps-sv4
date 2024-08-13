import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import type { Action, Actions, PageServerLoad } from './$types';
import { getDbInstance } from '$lib/database';
const db = getDbInstance(); // Get the Prisma client instance
export const load: PageServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const session = await event.locals.getSession();
	if (sessionID && session) {
		return redirect(303, '/Profile');
	}
	return {};
};
/**
 * Logs in a user with the provided username and password.
 *
 */
// Destructure the parameters from the action object
const login: Action = async ({ cookies, request }) => {
	// Get the form data from the request
	const data = await request.formData();
	// Get the username and password from the form data
	const username = data.get('username');
	const password = data.get('password');
	// Check if the username or password is invalid or missing
	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		// Return a 400 error with an invalid message
		return fail(400, { invalid: true });
	}
	// Find a user with the provided username
	const user = await db.user.findUnique({ where: { username } });
	// Check if the user exists
	if (!user) {
		// Return a 400 error with the username and credentials message
		return fail(400, { username, credentials: true });
	}
	// Check if the user has a password hash
	if (user.passwordHash) {
		// Compare the provided password with the user's password hash
		const userPassword = bcrypt.compareSync(password, user.passwordHash);
		// Check if the password is incorrect
		if (!userPassword) {
			// Return a 400 error with the username and credentials message
			return fail(400, { username, credentials: true });
		}
	} else {
		// Return a 400 error with the username and credentials message
		return fail(400, { username, credentials: true });
	}
	// Update the user's userAuthToken field with a randomly generated UUID
	const authenticatedUser = await db.user.update({
		where: { username: user.username! },
		data: { userAuthToken: crypto.randomUUID() }
	});
	// Set the session cookie with the user's userAuthToken value
	cookies.set('session', authenticatedUser.userAuthToken ?? '', {
		path: '/',
		httpOnly: true,
		sameSite: 'strict',
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 // Set the maxAge to 1 day
	});
	// Redirect the user to the homepage
	return redirect(302, '/');
};
export const actions: Actions = { login };
