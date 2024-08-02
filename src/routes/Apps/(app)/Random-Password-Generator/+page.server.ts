import type { Actions, PageServerLoad, RequestEvent } from './$types';
import { getDbInstance } from '$lib/database';
import { fail } from '@sveltejs/kit';
import type { Prisma } from '@prisma/client';

const db = getDbInstance();

/**
 * This function defines a set of actions related to saving, viewing, updating, and hiding passwords.
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
			// console.log('savePassword = ', savePassword);
			return { saved: true };
		} catch (err) {
			console.error('Error:', err);
			return fail(400, { error: 'Something Unexpected happened!' });
		}
	},
	update: async ({ request }) => {
		const data = await request.formData();
		const password = String(data.get('password'));
		const id = String(data.get('id'));
		const title = String(data.get('title'))
		const details = String(data.get('details'))
		// Log the data for debugging purposes 
		// console.log(password, id, title, details); 
		// Check if the password exists in the database 
		const existingPassword = await db.savePassword.findUnique({ where: { id } });
		if (!existingPassword) {
			return fail(404, { invalid: true });
		}
		try {
			// Update the password for the user 
			const updatePassword: Prisma.SavePasswordUpdateInput = await db.savePassword.update({ where: { id }, data: { title, details } });
			// console.log('updatePassword = ', updatePassword); 
			return { updated: true };
		} catch (err) {
			console.error('Error:', err);
			return fail(400, { error: 'Something Unexpected happened!' });
		}
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = String(data.get('id'));
		const existingPassword = await db.savePassword.findUnique({ where: { id } });
		if (!existingPassword) {
			return fail(404, { invalid: true });
		}
		try {
			await db.savePassword.delete({ where: { id } });
			return { deleted: true };
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
			// console.log(displayPassword);

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
