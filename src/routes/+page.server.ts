import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async (event) => {
	// console.log(event);
};

export const actions = {
	logout: () => {
		redirect(302, '/Logout');
	}
} satisfies Actions;
