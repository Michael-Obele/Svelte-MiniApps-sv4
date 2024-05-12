// +page.server.ts
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load({ params, setHeaders }) {
	const { user, year } = params;

	// Define headers
	const responseHeaders = {
		'Access-Control-Allow-Origin': '*', // allow CORS
		'Cache-Control': `public, s-maxage=${60 * 60 * 24 * 365}` // one year
	};
	setHeaders(responseHeaders);

	// Define the date range for contributions
	const startDate = `${year}-02-01`;
	const endDate = `${year}-03-31`;

	try {
		// Fetch GitHub contributions
		const contributionsApiUrl = `https://github.com/users/${user}/contributions?from=${startDate}&to=${endDate}`;
		const contributionsResponse = await fetch(contributionsApiUrl);
		if (!contributionsResponse.ok) {
			console.error(`Failed to fetch GitHub contributions for ${user}`);
		}
		const contributionsHtmlData = await contributionsResponse.text(); // Get the SVG data as text

		// Fetch GitHub streak stats
		const streakStatsApiUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=dark&hide_border=false`;

		let streakStatsSvgData = 'No data available'; // Default value in case of error
		const streakStatsResponse = await fetch(streakStatsApiUrl);
		if (!streakStatsResponse.ok) {
			console.error('Failed to fetch streak stats'); // Log the error for debugging
		} else {
			streakStatsSvgData = await streakStatsResponse.text();
		}

		return {
			props: {
				user,
				year
			},
			contributionsInfo: contributionsHtmlData,
			streakStats: streakStatsSvgData
		};
	} catch (error) {
		console.error(`Error fetching data: ${(error as Error).message}`);
		redirect(302, '/Apps/GitHub-Contribution-Tracker');
	}
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const user = data.get('user');
		const year = data.get('year');

		// Define the date range for contributions
		const startDate = `${year}-02-01`;
		const endDate = `${year}-03-31`;

		try {
			// Fetch GitHub contributions
			const contributionsApiUrl = `https://github.com/users/${user}/contributions?from=${startDate}&to=${endDate}`;
			const contributionsResponse = await fetch(contributionsApiUrl);
			if (!contributionsResponse.ok) {
				throw new Error(`Failed to fetch GitHub contributions for user ${user}`);
			}
			const contributionsHtmlData = await contributionsResponse.text(); // Get the SVG data as text

			// Fetch GitHub streak stats
			const streakStatsApiUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=dark&hide_border=false`;

			let streakStatsSvgData = 'No data available'; // Default value in case of error
			const streakStatsResponse = await fetch(streakStatsApiUrl);
			if (!streakStatsResponse.ok) {
				console.error('Failed to fetch streak stats'); // Log the error for debugging
			} else {
				streakStatsSvgData = await streakStatsResponse.text();
			}

			return {
				props: {
					user,
					year
				},
				contributionsInfo: contributionsHtmlData,
				streakStats: streakStatsSvgData
			};
		} catch (error) {
			console.error(`Error fetching data: ${(error as Error).message}`);
			redirect(302, '/Apps/GitHub-Contribution-Tracker');
		}
	}
} satisfies Actions;
