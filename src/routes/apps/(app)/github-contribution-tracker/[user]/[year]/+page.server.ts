import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { gql, GraphQLClient } from 'graphql-request';

interface ContributionData {
	user: {
		contributionsCollection: {
			contributionCalendar: {
				weeks: Array<{
					contributionDays: Array<{
						contributionCount: number;
						date: string;
					}>;
				}>;
				totalContributions: number;
			};
		};
	};
}

let info: ContributionData;

/**
 * Fetches contribution data from the GitHub GraphQL API for a given user and year.
 *
 * @param user - The GitHub username.
 * @param year - The year for which to fetch contributions.
 * @returns A Promise that resolves with the contribution data.
 */
async function fetchCommit(user: string, year: number | string): Promise<ContributionData> {
	const query = gql`
	query {
		user(login: "${user}") {
			contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
				contributionCalendar {
					totalContributions
					weeks {
						contributionDays {
							contributionCount
							date
						}
					}
				}
			}
		}
	}
`;

	const client = new GraphQLClient('https://api.github.com/graphql', {
		headers: {
			Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
		}
	});

	info = await client.request(query);

	return info;
}

/**
 * Asynchronously fetches GitHub contributions and streak stats for a specified user and year.
 *
 * @param user - The GitHub username for which contributions and streak stats are fetched.
 * @param year - The year for which contributions and streak stats are fetched.
 * @returns An object containing the user and year props, contributionsInfo with contributions data, and streakStats with streak stats data.
 */
async function fetchData(user: string, year: number | string) {
	// Create start and end dates but fetches the entire year though.
	const startDate = `${year}-02-01`;
	const endDate = `${year}-03-31`;

	// Fetch GitHub contributions data
	const contributionsApiUrl = `https://github.com/users/${user}/contributions?from=${startDate}&to=${endDate}`;
	const contributionsResponse = await fetch(contributionsApiUrl);
	if (!contributionsResponse.ok) {
		console.error(`Failed to fetch GitHub contributions for ${user}`);
	}
	const contributionsHtmlData = await contributionsResponse.text();

	// New GitHub contributions data
	info = await fetchCommit(user, year);
	const {
		contributionCalendar: { weeks, totalContributions }
	} = info.user.contributionsCollection;

	const dataSet = weeks.flatMap((week) =>
		week.contributionDays.map((day) => ({
			date: new Date(day.date).toISOString(),
			contributionCount: day.contributionCount
		}))
	);

	const gitContributions = dataSet;

	// Fetch streak stats data
	const streakStatsApiUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=dark&hide_border=false`;

	let streakStatsSvgData = 'No data available';
	const streakStatsResponse = await fetch(streakStatsApiUrl);
	if (!streakStatsResponse.ok) {
		console.error('Failed to fetch streak stats');
	} else {
		streakStatsSvgData = await streakStatsResponse.text();
	}

	// Return an object with user, year, contributions data, and streak stats data
	return {
		props: { user, year },
		contributionsInfo: contributionsHtmlData,
		streakStats: streakStatsSvgData,
		totalContributions,
		gitContributions
	};
}

/**
 * Asynchronously loads data for a specific user and year, and sets response headers for CORS and caching.
 *
 * @param options - The options object containing parameters and header setter function.
 * @param options.params - Object with user and year parameters.
 * @param options.params.user - The username of the user.
 * @param options.params.year - The year for which data is fetched.
 * @param options.setHeaders - Function to set response headers.
 *
 * @returns A promise that resolves once the data is fetched and headers are set.
 */
export async function load({
	params,
	setHeaders
}: {
	params: { user: string; year: string };
	setHeaders: (headers: Record<string, string>) => void;
}) {
	const { user, year } = params;

	const responseHeaders = {
		'Access-Control-Allow-Origin': '*', // allow CORS
		'Cache-Control': `public, s-maxage=${60 * 60 * 24 * 365}` // one year
	};
	setHeaders(responseHeaders);
	try {
		let data = await fetchData(user, year);
		return {
			props: { user, year },
			contributionsInfo: data.contributionsInfo,
			streakStats: data.streakStats,
			gitContributions: data.gitContributions,
			totalContributions: data.totalContributions
		};
	} catch (error) {
		// Handle errors and redirect if necessary
		console.error(`Error fetching data: ${(error as Error).message}`);
		redirect(302, '/apps/github-contribution-tracker');
	}
}

/**
 * Executes a default action asynchronously based on the provided request data.
 * Parses the user and year from the request data, then calls the 'fetchData' function with these parameters.
 */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const user = String(data.get('user'));
		const year = Number(data.get('year'));

		try {
			let data = await fetchData(user, year);
			return {
				props: { user, year },
				contributionsInfo: data.contributionsInfo,
				streakStats: data.streakStats
			};
		} catch (error) {
			// Handle errors and redirect if necessary
			console.error(`Error fetching data: ${(error as Error).message}`);
		}
	}
} satisfies Actions;
