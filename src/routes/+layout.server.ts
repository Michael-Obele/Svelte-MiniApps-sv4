import type { LayoutServerLoad } from './$types';
import { db } from '$lib/database';
import { redirect } from '@sveltejs/kit';

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async ({ cookies }) => {
	const session = cookies.get('session');
	// Assuming the user object has a structure like { username: string; role: { id: number; name: string; }; }
	interface User {
		username: string;
		role: {
			id: bigint;
			name: string;
		};
	}

	// Initialize data with the correct type
	let data: User | null = null;
	if (session) {
		const user = await db.user.findUnique({
			where: { userAuthToken: session },
			select: { username: true, isAdmin: true, createdAt: true, role: true }
		});
		data = user;
	}

	return {
		user: data
	};
};
