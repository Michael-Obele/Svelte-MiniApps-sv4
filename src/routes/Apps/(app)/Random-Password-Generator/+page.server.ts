import type { Actions, PageServerLoad } from './$types';
import { getDbInstance } from '$lib/database';
import { page } from '$app/stores';

const db = getDbInstance();

let length = 12;

// Function to generate a random password
function generatePassword(length: number): string {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const special = '!@#$%^&*()_+-={}[]|?/><';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|?/><';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

// export async function savePassword(password: string): Promise<void> {
// 	// Save the password to the database
// 	await db.savePassword(password);
// }

export const load: PageServerLoad = async ({ parent }) => {
	// Generate a random password
	const password = generatePassword(length);
	const { user } = await parent();

	if (user?.data === null) {
		console.log('user?.data = ', user?.data);
	}

	return {
		password: password
	};
};

export const actions: Actions = {
	generate: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		length = Number(data.length);
	},
	save: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		length = Number(data.length);

		// Save random password
	}
};
