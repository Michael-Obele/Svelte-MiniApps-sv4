import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { getDbInstance } from '$lib/database';
import type { Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs'; // Import bcrypt

const db = getDbInstance();

export const load: PageServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const session = await event.locals.auth();
	if (!sessionID && !session) {
		return redirect(303, '/Login');
	}
};
export const actions: Actions = {
	// View action to display saved passwords for a user
	viewPasswords: async ({ request }) => {
		const data = await request.formData();
		let id = String(data.get('id'));
		// Ensure id is a string or undefined, not null
		// Check if the user exists in the database
		const user = await db.user.findUnique({ where: { id } });
		if (!user) {
			return fail(404, { invalid: true });
		}
		/**
		 * Specifies fields to select from password records using Prisma's Select added to the model name SavePassword.
		 * Only works for select to give `SavePasswordSelect`.
		 * Each boolean value indicates whether to include a specific field in the query results.
		 */
		let passwordDetails: Prisma.SavePasswordSelect = {
			password: true,
			createdAt: true,
			title: true,
			details: true,
			id: true
		};
		try {
			// Retrieve and display saved passwords for the user
			const displayPassword = await db.savePassword.findMany({
				where: { userId: user.id },
				select: passwordDetails,
				orderBy: { createdAt: 'desc' }
			});
			return { displayPassword };
		} catch (error) {
			console.error('Error: ', error);
			return fail(400, { error: 'No passwords' });
		}
	},
	hidePasswords: async ({}) => {
		return { displayPassword: [] };
	},
	updatePassword: async ({ request, locals }) => {
		// Extract data from the incoming request's form data
		const formData = await request.formData();
		const currentPassword = formData.get('currentPassword') as string; // Get the current password
		const userId = formData.get('id') as string; // Get the user ID
		const newPassword = formData.get('newPassword') as string; // Get the new password

		// Check if the user ID is provided
		if (!userId) {
			// If not, return a 401 Unauthorized error with a message
			return fail(401, {
				error: "Unauthorized! \t If you used OAuth You can't change your password."
			});
		}

		try {
			// Try to find the user in the database using the provided user ID
			const user = await db.user.findUnique({
				where: { id: userId }
			});

			// If the user is not found, return a 404 Not Found error
			if (!user) {
				return fail(404, { error: 'User not found' });
			}

			// Check if the user has a password hash (meaning they registered with email/password)
			if (user.passwordHash) {
				// Compare the provided current password with the stored password hash
				const correctPassword = await bcrypt.compare(currentPassword, user?.passwordHash);

				// If the passwords don't match, return a 401 Unauthorized error
				if (!correctPassword) {
					return fail(401, { error: 'Incorrect password' });
					// If passwords match, proceed with updating the password
				} else {
					// Hash the new password using bcrypt with a cost factor of 10
					const hashedPassword = await bcrypt.hash(newPassword, 10);

					// Update the user's password hash in the database
					await db.user.update({
						where: { id: userId },
						data: {
							passwordHash: hashedPassword // Store the newly hashed password
						}
					});
					// Return a success message indicating the password was updated
					return { message: 'Password updated successfully!' };
				}
			} else {
				// If the user doesn't have a password hash, they likely used OAuth to sign up
				// Handle this case appropriately (e.g., return an error or redirect)
				return fail(400, { error: 'Cannot change password for OAuth users.' });
			}
		} catch (error) {
			// If any error occurs during the process, log the error and return a 500 Internal Server Error
			console.error('Error updating password:', error);
			return fail(500, { error: 'Failed to update password' });
		}
	}
};
