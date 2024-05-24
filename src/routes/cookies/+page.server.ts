import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	// eat the cookie.
	cookies.set('seenCookieNotification', 'true', {
		path: '/'
	});
	// we only use this endpoint for the api
	// and don't need to see the page
	redirect(302, '/');
};
