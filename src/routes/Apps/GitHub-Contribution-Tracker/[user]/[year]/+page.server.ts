// +page.server.ts
import { error } from '@sveltejs/kit';

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
			throw new Error(`Failed to fetch GitHub contributions for user ${user}`);
		}
		const contributionsHtmlData = await contributionsResponse.text(); // Get the SVG data as text

		// Fetch GitHub streak stats
		const streakStatsApiUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=dark&hide_border=false`;
		const streakStatsResponse = await fetch(streakStatsApiUrl);
		const streakStatsSvgData = await streakStatsResponse.text();

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
		throw error; // Rethrow the error to be handled by the caller
	}
}
