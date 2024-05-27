import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	// set the cookie.
	cookies.set('seenCookieNotification', 'true', {
		path: '/',
		expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 1 week from now
	});
	// we only use this endpoint for the api
	// and don't need to see the page
	redirect(302, '/');
};
