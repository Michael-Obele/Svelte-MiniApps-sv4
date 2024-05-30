import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { getDbInstance } from '$lib/database';
const db = getDbInstance();

export const load: PageServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const session = await event.locals.getSession();
	if (!sessionID && !session) {
		return redirect(303, '/Login');
	}
};

export const actions: Actions = {
	viewPasswords: async ({ request }) => {
		const data = await request.formData();
		let id = String(data.get('id'));
		// Ensure id is a string or undefined, not null

		const user = await db.user.findUnique({ where: { id } });
		if (!user) {
			return fail(404, { invalid: true });
		}

		const displayPassword = await db.savePassword.findMany({
			where: { userId: user.id },
			select: { password: true, createdAt: true },
			orderBy: {
				createdAt: 'desc'
			}
		});
		console.log('displayPassword = ', displayPassword);
		return { displayPassword };
	},
	hidePasswords: async ({ request }) => {
		return { displayPassword: [] };
	}
};
