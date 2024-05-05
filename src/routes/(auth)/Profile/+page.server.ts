import { redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const sessionID = event.cookies.get('session');
	const session = await event.locals.getSession();
	if (!sessionID && !session) {
		return redirect(303, '/Login');
	}

	const owner = 'Michael-Obele';
	const repo = 'Svelte-MiniApps';
	const baseUrl = 'https://api.github.com';
	const branch = 'master'; // Replace with desired branch if needed

	const url = `${baseUrl}/repos/${owner}/${repo}/branches/${branch}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to fetch branch information: ${response.statusText}`);
		}

		const data = await response.json();
		const commitSHA = data.commit.sha;

		// Fetch the commit details using the SHA
		const commitUrl = `${baseUrl}/repos/${owner}/${repo}/commits/${commitSHA}`;
		const commitResponse = await fetch(commitUrl);

		if (!commitResponse.ok) {
			throw new Error(`Failed to fetch commit details: ${commitResponse.statusText}`);
		}

		const commitData = await commitResponse.json();
		let gitMessage = commitData.commit.message;

		return { commitSHA, commitData, gitMessage }; // Pass both to your component
	} catch (error) {
		console.error('Error fetching commit information:', error);
		throw error; // Re-throw to handle in your component (optional)
	}
};

// const settings: Action = async ({ request }) => {};

// const update: Action = async ({ request }) => {};

// export const actions: Actions = { settings, update };
