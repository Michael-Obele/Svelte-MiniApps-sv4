import { signIn } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const session = await event.locals.getSession();
	if (sessionID || session) {
		return redirect(303, '/');
	}
};

export const actions = { default: signIn } satisfies Actions;
