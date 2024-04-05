// import type { RouteParams } from './$types.js';
// import { json } from '@sveltejs/kit';
// import { parseHTML } from 'linkedom';

// async function getContributions({ user, year }: RouteParams) {
// 	const api = `https://github.com/users/${user}/contributions?from=${year}-12-01&to=${year}-12-31`;
// 	const response = await fetch(api);

// 	if (!response.ok) {
// 		throw new Error(`Failed to fetch: ${response.status}`);
// 	}

// 	return await response.text();
// }

// function parseContributions(html: string) {
// 	const { document } = parseHTML(html);

// 	const rows = document.querySelectorAll<HTMLTableRowElement>('tbody > tr');

// 	const contributions = [];

// 	for (const row of rows) {
// 		const days = row.querySelectorAll<HTMLTableCellElement>('td:not(.ContributionCalendar-label)');

// 		const currentRow = [];

// 		for (const day of days) {
// 			const data = day.innerText.split(' ');

// 			if (data.length > 1) {
// 				const contribution = {
// 					count: data[0] === 'No' ? 0 : +data[0],
// 					month: data[3],
// 					day: data[4].replace('.', ''),
// 					level: +day.dataset.level!
// 				};
// 				currentRow.push(contribution);
// 			} else {
// 				currentRow.push(null);
// 			}
// 		}

// 		contributions.push(currentRow);
// 	}

// 	return contributions;
// }

// export async function GET({ params, setHeaders }) {
// 	setHeaders({
// 		'Access-Control-Allow-Origin': '*', // allow CORS
// 		'Cache-Control': `public, s-maxage=${60 * 60 * 24 * 365}` // one year
// 	});

// 	const html = await getContributions(params);
// 	return json(parseContributions(html));
// }
