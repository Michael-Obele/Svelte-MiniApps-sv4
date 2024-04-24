import { redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import { db } from '$lib/database';

export const load: PageServerLoad = async (session) => {
	var sessionData = session.cookies.get('session');
	if (!sessionData) {
		return redirect(303, '/Login');
	}
	return {};

	// redirect user if not logged in
	// if (data?.role?.name !== 'ADMIN') {
	// 	redirect(302, '/');
	// }
};
