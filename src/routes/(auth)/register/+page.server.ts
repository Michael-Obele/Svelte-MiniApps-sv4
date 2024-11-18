import { error, fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcryptjs';
 
import { Admin_PW } from '$env/static/private';

import { db } from '$lib/database'; // Get the Prisma client instance

export const load: PageServerLoad = async (session) => {
	var sessionData = session.cookies.get('session');
	if (sessionData) {
		return redirect(303, '/');
	}
	return {};
};
const adminHash = Admin_PW;

/**
 * This function is responsible for handling the registration process.
 * It receives a request object containing form data and performs the following steps:
 * 1. Extracts the username, password, and admin flag from the form data.
 * 2. Checks if the username and password are valid strings and not empty.
 * 3. Checks if the admin flag is 'on' and if the password matches the admin password hash.
 * 4. Checks if a user with the same username already exists in the database.
 * 5. Calls the createUser function to create a new user with the provided information.
 * 6. If the admin flag is 'on' and the user is not an admin, sets the shouldRedirect flag to true.
 * 7. Handles any errors that occur during the registration process.
 * 8. Redirects the user to the login page if the shouldRedirect flag is true.
 */
const register: Action = async ({ request }) => {
	const data = await request.formData(); // Extracts form data from the request
	const username = data.get('username'); // Extracts the username from the form data
	const password = data.get('password'); // Extracts the password from the form data
	const admin = data.get('admin'); // Extracts the admin flag from the form data
	let shouldRedirect = false; // Flag to determine if the user should be redirected after registration

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		// Checks if the username and password are valid strings and not empty
		return error(400, 'Username and Password must be a string'); // Returns a 400 error if the username or password is invalid
	}

	let isAdmin = admin === 'on' && bcrypt.compareSync(password.toString(), adminHash); // Checks if the admin flag is 'on' and if the password matches the admin password hash

	try {
		const existingUser = await db.user.findUnique({
			// Checks if a user with the same username already exists in the database
			where: { username }
		});

		if (existingUser) {
			// If a user with the same username already exists
			return fail(400, { username, user: true }); // Returns a 400 error with the username and user flag
		}

		await createUser(username, password, isAdmin); // Calls the createUser function to create a new user with the provided information
		// Check if admin === 'on' and isAdmin is false after user creation
		if (admin === 'on' && !isAdmin) {
			// If the admin flag is 'on' and the user is not an admin
			shouldRedirect = true; // Sets the shouldRedirect flag to true
		}
	} catch (err) {
		if (typeof err === 'object' && err !== null && 'code' in err) {
			// Now TypeScript knows err is an object with a 'code' property, so you can safely access it
			const errorCode = (err as { code: string }).code; // Cast err to have a 'code' property for TypeScript
			if (errorCode === 'P2002') {
				// If the error is a duplicate username error
				return fail(400, {
					username,
					error: 'Username already registered! Try Logging in'
				});
			} else {
				// If the error is not a duplicate username error
				console.error('Error:', err); // Logs the error to the console
				return fail(400, { error: 'Something Unexpected happened!' }); // Returns a 400 error with the error message
			}
		}
	}
	if (shouldRedirect) {
		// If the shouldRedirect flag is true
		return redirect(303, '/Login'); // Redirects the user to the login page
	}
	return redirect(303, '/Login'); // Redirects the user to the login page
};

/**
 * This function is responsible for creating a new user in the database.
 * It receives the username, password, and isAdmin flag as parameters and performs the following steps:
 * 1. Hashes the password using bcrypt.
 * 2. Creates a new user record in the database with the provided information.
 */
async function createUser(username: string, password: string, isAdmin: boolean) {
	const passwordHash = isAdmin ? adminHash : await bcrypt.hash(password, 10);

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
