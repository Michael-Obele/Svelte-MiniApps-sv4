import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { getDbInstance } from '$lib/database';
import type { Prisma } from '@prisma/client';
const db = getDbInstance();
export const load: PageServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const session = await event.locals.getSession();
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
			console.error(error);
			return fail(400, { error: 'No passwords' });
		}
	},
	hidePasswords: async ({}) => {
		return { displayPassword: [] };
	}
};
