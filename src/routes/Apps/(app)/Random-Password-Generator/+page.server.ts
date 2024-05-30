import type { Actions, PageServerLoad } from './$types';
import { getDbInstance } from '$lib/database';
import { page } from '$app/stores';
import { fail } from '@sveltejs/kit';

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
	save: async ({ request }) => {
		const data = await request.formData();
		const password = String(data.get('password'));
		let id = String(data.get('id'));
		// Ensure id is a string or undefined, not null

		console.log(password);
		// Save random password
		const user = await db.user.findUnique({ where: { id } });
		if (!user) {
			return fail(404, { invalid: true });
		}

		const savePassword = await db.savePassword.create({
			data: {
				password: password,
				userId: user.id
			}
		});
		console.log('savePassword = ', savePassword);
		return { saved: true };
	}
};
