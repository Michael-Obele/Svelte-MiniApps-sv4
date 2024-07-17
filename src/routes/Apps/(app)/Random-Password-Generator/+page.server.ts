import type { Actions, PageServerLoad, RequestEvent } from './$types';
import { getDbInstance } from '$lib/database';
import { page } from '$app/stores';
import { fail } from '@sveltejs/kit';

const db = getDbInstance();

/**
 * This function defines a set of actions related to saving, viewing, and hiding passwords.
 * @param {Object} request - The request object containing data to be processed.
 */
export const actions: Actions = {
	// Save action to save a password for a user
	save: async ({ request }) => {
		const data = await request.formData();
		const password = String(data.get('password'));
		let id = String(data.get('id'));

		// Log the password for debugging purposes
		// console.log(password);

		// Check if the user exists in the database
		const user = await db.user.findUnique({ where: { id } });
		if (!user) {
			return fail(404, { invalid: true });
		}

		try {
			// Save the password for the user
			const savePassword = await db.savePassword.create({
				data: { password: password, userId: user.id }
			});
			console.log('savePassword = ', savePassword);
			return { saved: true };
		} catch (err) {
			console.error('Error:', err);
			return fail(400, { error: 'Something Unexpected happened!' });
		}
	},

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

		try {
			// Retrieve and display saved passwords for the user
			const displayPassword = await db.savePassword.findMany({
				where: { userId: user.id },
				select: { password: true, createdAt: true, title: true, details: true },
				orderBy: { createdAt: 'desc' }
			});

			return { displayPassword };
		} catch (error) {
			console.log('No password');
			console.error(error);
			return fail(400, { error: 'No passwords' });
		}
	},

	// Hide action to hide displayed passwords
	hidePasswords: async () => {
		return { displayPassword: [] };
	}
};
