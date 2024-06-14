import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions, RequestEvent } from './$types';
import * as Sentry from '@sentry/node';

export const load: PageServerLoad = async (event) => {
	try {
		// Your existing code or logic that might fail
		console.log(event.url.href);
		throw new Error(`URL Accessed: ${event.url.href}`);
	} catch (error) {
		Sentry.captureException(error);
	}

	if (event.url.href == 'https://svelte-mini-apps.netlify.app/') {
		redirect(301, 'https://svelte-apps.me/');
	}
};

export const actions: Actions = {
	logout: () => {
		redirect(302, '/Logout');
	}
};
