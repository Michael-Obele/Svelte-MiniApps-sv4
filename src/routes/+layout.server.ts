import type { LayoutServerLoad } from './$types';
import { getDbInstance } from '$lib/database';

import { redirect } from '@sveltejs/kit';
const db = getDbInstance(); // Get the Prisma client instance

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');

	interface User {
		username: string;
		role: {
			id: bigint;
			name: string;
		};
	}

	// Initialize data with the correct type
	let data: User | null = null;
	if (sessionID) {
		const user = await db.userDB.findUnique({
			where: { userAuthToken: sessionID },
			select: { username: true, isAdmin: true, createdAt: true, role: true }
		});
		data = user;
	}

	return {
		session: await event.locals.getSession(),
		user: { data, session: await event.locals.getSession() },
		hasSeenCookieNotification: hasSeenCookieNotification
	};
};
