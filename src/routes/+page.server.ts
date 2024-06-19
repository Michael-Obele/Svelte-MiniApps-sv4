import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions, RequestEvent } from './$types';
import * as Sentry from '@sentry/node';

export const load: PageServerLoad = async (event) => {
	if (event.url.href == 'https://svelte-mini-apps.netlify.app/') {
		redirect(301, 'https://svelte-apps.me/');
	}
};

export const actions: Actions = {
	logout: () => {
		redirect(302, '/Logout');
	}
};
