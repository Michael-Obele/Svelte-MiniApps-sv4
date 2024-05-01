import { redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (session) => {
	var sessionData = session.cookies.get('session');
	if (!sessionData) {
		return redirect(303, '/Login');
	}
	return {};
};
