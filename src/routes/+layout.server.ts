import type { LayoutServerLoad } from './$types';
import { getDbInstance } from '$lib/database';

const db = getDbInstance(); // Get the Prisma client instance

interface User {
	username: string | null;
	id: string | null;
	isAdmin: boolean | null;
	createdAt: Date | null;
	name: string | null;
	image: string | null;
	email: string | null;
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

	/**
	 * Retrieves user data based on the session ID. If the session ID is present, it fetches the user data
	 * directly using the session ID. If the session ID is not present, it attempts to retrieve the user
	 * data from the session object available in `event.locals`. If the user is found in the session,
	 * a simplified user data object is constructed with available information.
	 *
	 * @param {string | undefined} sessionID - The session ID used to identify the user. It can be undefined.
	 * @param {any} event - The event object that may contain the user's session information.
	 * @returns {Promise<any>} A promise that resolves to the user data object. The structure of the object
	 * varies depending on whether the user was found using the session ID or the session object. If the user
	 * is not found, `userData` remains undefined.
	 */
	if (sessionID) {
		userData = await getUserBySessionID(sessionID);
	} else {
		const session = await event.locals.getSession();
		if (session && session.user) {
			userData = {
				username: session.user.name || null,
				id: null,
				isAdmin: false,
				createdAt: null,
				name: session.user.name || null,
				image: session.user.image || null,
				email: session.user.email || null
			};
		}
	}

	return {
		user: { userData, session: await event.locals.getSession() },
		hasSeenCookieNotification
	};
};

/**
 * Retrieves a user from the database based on a given session ID.
 *
 * This function searches the database for a unique user whose `userAuthToken` matches
 * the provided `sessionID`. If a match is found, it returns a simplified user object
 * containing the user's id, username, isAdmin status, creation date, SavePassword status,
 * name, image, and email. If no user is found matching the session ID, it returns null.
 *
 * @param {string} sessionID - The session ID used to identify the user in the database.
 * @returns {Promise<User | null>} A promise that resolves to a user object if a user with
 * the given session ID is found, or null if no such user exists.
 */
async function getUserBySessionID(sessionID: string): Promise<User | null> {
	return await db.user.findUnique({
		where: { userAuthToken: sessionID },
		select: {
			id: true,
			username: true,
			isAdmin: true,
			createdAt: true,
			SavePassword: true,
			name: true,
			image: true,
			email: true
		}
	});
}
