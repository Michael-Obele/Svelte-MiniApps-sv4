// import { redirect } from '@sveltejs/kit';
// import type { PageServerLoad } from './$types';
// import { db } from '$lib/database';

// export const load: PageServerLoad = async ({ cookies }) => {
// 	// const session = cookies.get('session');
// 	// // Assuming the user object has a structure like { username: string; role: { id: number; name: string; }; }
// 	// interface User {
// 	// 	username: string;
// 	// 	role: {
// 	// 		id: number;
// 	// 		name: string;
// 	// 	};
// 	// }
// 	// // Initialize data with the correct type
// 	// let data: User | null = null;
// 	// if (session) {
// 	// 	const user = await db.user.findUnique({
// 	// 		where: { userAuthToken: session },
// 	// 		select: { username: true, role: true }
// 	// 	});
// 	// 	data = user;
// 	// }
// 	// redirect user if not logged in
// 	// if (data?.role?.name !== 'ADMIN') {
// 	// 	redirect(302, '/');
// 	// }
// };
