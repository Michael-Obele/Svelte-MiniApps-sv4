import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

const setCookieNotification = (event: any) => {
	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');
	if (!hasSeenCookieNotification) {
		event.cookies.set('seenCookieNotification', 'true', {});
	}
};

export const load: PageServerLoad = async (event) => {
	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');
};

export const actions = {
	logout: () => {
		redirect(302, '/Logout');
	},
	seen: ({ cookies }) => {
		cookies.set('seenCookieNotification', 'true', { path: '/' });
	}
} satisfies Actions;
