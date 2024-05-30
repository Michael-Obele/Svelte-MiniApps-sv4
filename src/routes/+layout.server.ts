import type { LayoutServerLoad } from './$types';
import { getDbInstance } from '$lib/database';

const db = getDbInstance(); // Get the Prisma client instance

// get `locals.user` and pass it to the `page` store
// export const load: LayoutServerLoad = async (event) => {
// 	const sessionID = event.cookies.get('session');
// 	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');
// 	if (!hasSeenCookieNotification) {
// 		event.cookies.set('seenCookieNotification', 'false', { path: '/' });
// 	}

// 	interface User {
// 		username: string | null;
// 		id: string | null;
// 	}

// 	// Initialize data with the correct type
// 	let data: User | null = null;
// 	let passwords: { password: string }[] | null = null;
// 	if (sessionID) {
// 		const user = await db.user.findUnique({
// 			where: { userAuthToken: sessionID },
// 			select: { id: true, username: true, isAdmin: true, createdAt: true }
// 		});
// 		let passwords = await db.savePassword.findMany({
// 			where: { userId: user?.id },
// 			select: { password: true }
// 		})

// 		data = user;
// 		passwords = passwords;
// 	}

// 	return {
// 		user: { data, session: await event.locals.getSession(), passwords },
// 		hasSeenCookieNotification
// 	};
// };

interface User {
	username: string | null;
	id: string | null;
	isAdmin: boolean | null;
	createdAt: Date | null;
}

interface Password {
	password: string;
}

export const load: LayoutServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const hasSeenCookieNotification = event.cookies.get('seenCookieNotification');
	if (!hasSeenCookieNotification) {
		event.cookies.set('seenCookieNotification', 'false', { path: '/' });
	}

	let userData: User | null = null;

	if (sessionID) {
		userData = await getUserBySessionID(sessionID);
	}

	return {
		user: { userData, session: await event.locals.getSession() },
		hasSeenCookieNotification
	};
};

async function getUserBySessionID(sessionID: string): Promise<User | null> {
	return await db.user.findUnique({
		where: { userAuthToken: sessionID },
		select: { id: true, username: true, isAdmin: true, createdAt: true, SavePassword: true }
	});
}
