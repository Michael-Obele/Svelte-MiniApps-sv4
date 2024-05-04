import type { LayoutServerLoad } from './$types';
import { db } from '$lib/database';
import { redirect } from '@sveltejs/kit';

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	// Assuming the user object has a structure like { username: string; role: { id: number; name: string; }; }
	interface User {
		username: string | null;
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
	// console.log('event.locals:', event.locals.getSession());
	// console.log('event.cookies:', event.cookies);

	return {
		session: await event.locals.getSession(),
		user: data
	};
};
