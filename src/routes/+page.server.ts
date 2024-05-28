import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

const setCookieNotification = (event: any) => {
	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');
	if (!hasSeenCookieNotification) {
		event.cookies.set('seenCookieNotification', 'true', {});
	}
};

export const load: PageServerLoad = async (event) => {
	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');
};

export const actions: Actions = {
	logout: () => {
		redirect(302, '/Logout');
	},
	seen: ({ cookies }) => {
		cookies.set('seenCookieNotification', 'true', { path: '/' });
	}
};
