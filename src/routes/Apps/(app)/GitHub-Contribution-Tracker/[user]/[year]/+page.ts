import type { PageLoad, PageParentData } from './$types';
import { writable } from 'svelte/store';
import { parseHTML } from 'linkedom';
import { gql, GraphQLClient } from 'graphql-request';
import { endOfYear, startOfYear } from 'date-fns';
import { timeYear } from 'd3-time';

function extractContributionData(html: any): ContributionsData {
	const { document } = parseHTML(html);
	const tooltips = document.querySelectorAll('tool-tip');
	const contributionsData: any[] = [];

	tooltips.forEach((tooltip) => {
		const content = tooltip.textContent?.trim() ?? '';
		contributionsData.push([content]);
	});

	return contributionsData;
}

export type ContributionsData = string[][];

interface ContributionsByMonth {
	[month: string]: {
		[day: string]: number;
	};
}

const monthAbs = [
	{
		name: 'Jan',
		full_name: 'January'
	},
	{
		name: 'Feb',
		full_name: 'February'
	},
	{
		name: 'Mar',
		full_name: 'March'
	},
	{
		name: 'Apr',
		full_name: 'April'
	},
	{
		name: 'May',
		full_name: 'May'
	},
	{
		name: 'Jun',
		full_name: 'June'
	},
	{
		name: 'Jul',
		full_name: 'July'
	},
	{
		name: 'Aug',
		full_name: 'August'
	},
	{
		name: 'Sep',
		full_name: 'September'
	},
	{
		name: 'Oct',
		full_name: 'October'
	},
	{
		name: 'Nov',
		full_name: 'November'
	},
	{
		name: 'Dec',
		full_name: 'December'
	}
];

interface OutputEntry {
	date: string;
	value: number;
}

interface GitHubResponse {
	user: {
		contributionsCollection: {
			contributionCalendar: {
				weeks: Array<{
					contributionDays: Array<{
						contributionCount: number;
						date: string;
					}>;
				}>;
			};
		};
	};
}

async function fetchCalendar(user: string, year: number | string) {
	let data: any[] = [];
	let info: GitHubResponse;

	async function fetchPage() {
		const query = gql`
		  query {
			user(login: "${user}") {
			contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
				contributionCalendar {
				  totalContributions
				  weeks {
					firstDay
					contributionDays {
					  weekday
					  date
					  contributionCount
					  contributionLevel
					  color
					}
				  }
				  months {
					name
					year
					firstDay
					totalWeeks
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

		data = data.concat(info.user.contributionsCollection.contributionCalendar);
	}

	data = data.flatMap((d) => d.weeks.flatMap((w: { contributionDays: any }) => w.contributionDays));

	return data;
}

export const load: PageLoad = async ({ parent, data }) => {
	await parent();
	let { props, contributionsInfo, totalContributions, streakStats, gitContributions } = data;

	const user = props.user;
	const year = props.year;

	const jsonData = extractContributionData(contributionsInfo);

	let contributionsByMonth: ContributionsByMonth = {};

	jsonData.forEach((entry) => {
		const [contributionString] = entry;
		const match = contributionString.match(/(\d+) contributions? on (\w+) (\d+)/);
		if (match) {
			const [, count, month, day] = match;
			if (!contributionsByMonth[month]) {
				contributionsByMonth[month] = {};
			}
			contributionsByMonth[month][day] = parseInt(count, 10);
		}
	});

	Object.keys(contributionsByMonth).forEach((month) => {
		if (Object.values(contributionsByMonth[month]).reduce((a, b) => a + b, 0) === 0) {
			delete contributionsByMonth[month];
		}
	});

	let dataSet: OutputEntry[] = jsonData
		.map((entry) => {
			const [contributionString] = entry;
			const match = contributionString.match(/(\d+) contributions? on (\w+) (\d+)/);
			if (match) {
				const [, count, month, day] = match;
				const date = new Date(`${month} ${day}, ${year}`);
				return { date: date.toISOString(), value: parseInt(count) };
			}
			return null;
		})
		.filter((entry) => entry !== null) as OutputEntry[];

	return {
		props,
		contributionsInfo,
		streakStats,
		gitContributions,
		totalContributions,
		monthAbs,
		calendar: await fetchCalendar(user, year),
		page_data: {
			jsonData,
			totalContributions,
			dataSet
		}
	};
};
