import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

// export const load = (async () => {
// 	return {};
// }) satisfies PageServerLoad;

export const actions = {
	commit: async ({ request }) => {
		const data = await request.formData();
		const user = data.get('user');
		const year = data.get('year');
		console.log({ user }, { year });

		// Define headers
		const responseHeaders = {
			'Access-Control-Allow-Origin': '*', // allow CORS
			'Cache-Control': `public, s-maxage=${60 * 60 * 24 * 365}` // one year
		};

		// Define the date range for contributions
		const startDate = `${year}-02-01`;
		const endDate = `${year}-03-31`;

		// Fetch GitHub contributions
		const contributionsApiUrl = `https://github.com/users/${user}/contributions?from=${startDate}&to=${endDate}`;
		const contributionsResponse = await fetch(contributionsApiUrl);
		if (!contributionsResponse.ok) {
			return fail(400, { error: `Failed to fetch GitHub contributions for user ${user}` });
		}
		const contributionsHtmlData = await contributionsResponse.text(); // Get the SVG data as text

		// Fetch GitHub streak stats
		const streakStatsApiUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=dark&hide_border=false`;

		let streakStatsSvgData = 'No data available'; // Default value in case of error
		const streakStatsResponse = await fetch(streakStatsApiUrl);
		if (!streakStatsResponse.ok) {
			console.error('Failed to fetch streak stats'); // Log the error for debugging
			return fail(400, { error: 'Failed to fetch streak stats' });
		} else {
			streakStatsSvgData = await streakStatsResponse.text();
		}
		console.log({
			props: {
				user,
				year
			},
			contributionsInfo: contributionsHtmlData,
			streakStats: streakStatsSvgData
		});

		return {
			headers: responseHeaders,
			props: {
				user,
				year
			},
			contributionsInfo: contributionsHtmlData,
			streakStats: streakStatsSvgData
		};
	}
} satisfies Actions;
