// +page.server.ts
import { parseHTML } from 'linkedom';
import { error } from '@sveltejs/kit';

export async function load({ params, setHeaders }) {
	let user = params.user;
	let year = params.year;

	setHeaders({
		'Access-Control-Allow-Origin': '*', // allow CORS
		'Cache-Control': `public, s-maxage=${60 * 60 * 24 * 365}` // one year
	});

	const api = `https://github.com/users/${user}/contributions`;
	const response = await fetch(api);
	if (!response.ok) {
		throw new Error(`Failed to fetch GitHub contributions for user ${user}`);
	}
	const htmlData = await response.text(); // Get the SVG data as text

	function parseContributions(html: string) {
		const { document } = parseHTML(html);

		const rows = document.querySelectorAll<HTMLTableRowElement>('tbody > tr');

		const contributions = [];

		for (const row of rows) {
			const days = row.querySelectorAll<HTMLTableCellElement>(
				'td:not(.ContributionCalendar-label)'
			);

			const currentRow = [];

			for (const day of days) {
				const data = day.innerText.split(' ');

				if (data.length > 1) {
					const contribution = {
						count: data[0] === 'No' ? 0 : +data[0],
						month: data[3],
						day: data[4].replace('.', ''),
						level: +day.dataset.level!
					};
					currentRow.push(contribution);
				} else {
					currentRow.push(null);
				}
			}

			contributions.push(currentRow);
		}

		return contributions;
	}

	// Return the manipulated HTML data to the client
	return {
		props: {
			user,
			year
		},
		info: parseContributions(htmlData)
	};
}
