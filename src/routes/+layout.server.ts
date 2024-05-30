import type { LayoutServerLoad } from './$types';
import { getDbInstance } from '$lib/database';

import { redirect } from '@sveltejs/kit';
const db = getDbInstance(); // Get the Prisma client instance

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');
	if (!hasSeenCookieNotification) {
		event.cookies.set('seenCookieNotification', 'false', { path: '/' });
	}

	interface User {
		username: string | null;
		id: string | null;
	}

	// Initialize data with the correct type
	let data: User | null = null;
	if (sessionID) {
		const user = await db.user.findUnique({
			where: { userAuthToken: sessionID },
			select: { id: true, username: true, isAdmin: true, createdAt: true }
		});

		data = user;
	}

	return {
		session: await event.locals.getSession(),
		user: { data, session: await event.locals.getSession() },
		hasSeenCookieNotification
	};
};
