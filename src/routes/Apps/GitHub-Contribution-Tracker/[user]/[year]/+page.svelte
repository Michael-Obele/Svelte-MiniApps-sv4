<script lang="ts">
	import { parseHTML } from 'linkedom';
	// import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	export let data;

	function extractContributionData(html: any): ContributionsData {
		const { document } = parseHTML(html);
		const tooltips = document.querySelectorAll('tool-tip');
		const contributionsData: any[] = [];

		if (tooltips) {
			// Loop through each tool-tip
			tooltips.forEach((tooltip) => {
				const content = tooltip.textContent?.trim() ?? '';
				contributionsData.push([content]);
			});
		}
		return contributionsData;
	}

	// Example usage:
	const jsonData = extractContributionData(data.info);

	type ContributionsData = string[][];
	type ContributionsGrid = number[][];

	// Initialize a 7x52 grid with default values
	let grid: ContributionsGrid = Array.from({ length: 52 }, () => Array(7).fill(0));

	// Fill the grid with the number of contributions
	jsonData.forEach((entry) => {
		const match = entry[0].match(/(\d+) contributions? on (\w+) (\d+)/);
		if (match) {
			const [_, contributions, month, day] = match;
			const monthIndex = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			].indexOf(month);
			const dayIndex = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			].indexOf(day);
			if (monthIndex !== -1 && dayIndex !== -1) {
				grid[monthIndex][dayIndex] = parseInt(contributions, 10);
			}
		}
	});

	// Function to generate the HTML for the grid
	function generateGridHTML(grid: ContributionsGrid): string {
		let html = '<table border="1">\n';
		for (let week = 0; week < 52; week++) {
			html += '<tr>';
			for (let day = 0; day < 7; day++) {
				const contributions = grid[week][day];
				let color = 'white';
				if (contributions > 0) {
					color = contributions === 1 ? 'green' : contributions === 2 ? 'blue' : 'red';
				}
				html += `<td style="background-color: ${color};">${contributions}</td>`;
			}
			html += '</tr>\n';
		}
		html += '</table>';
		return html;
	}

	// Generate and display the grid
	let gridHTML: string = generateGridHTML(grid);

	// Assuming ContributionsData is defined as an array of arrays containing strings

	let contributions = writable([
		{ date: 'January', count: 0 },
		{ date: 'February', count: 0 },
		{ date: 'March', count: 0 },
		{ date: 'April', count: 0 },
		{ date: 'May', count: 0 },
		{ date: 'June', count: 0 },
		{ date: 'July', count: 0 },
		{ date: 'August', count: 0 },
		{ date: 'September', count: 0 },
		{ date: 'October', count: 0 },
		{ date: 'November', count: 0 },
		{ date: 'December', count: 0 }
	]);

	const parseData = (data: ContributionsData) => {
		for (const entry of data) {
			const [contributionString] = entry;
			const match = contributionString.match(/(\d+) contributions? on (\w+)/);
			if (match) {
				const [_, count, month] = match;
				contributions.update((current) => {
					const monthIndex = current.findIndex((m) => m.date === month);
					if (monthIndex !== -1) {
						current[monthIndex].count += parseInt(count, 10);
					}
					return current;
				});
			}
		}
	};

	parseData(jsonData);
	console.log($contributions);
</script>

<svelte:head>
	<title>GitHub API</title>
</svelte:head>

<h1 class="text-center text-2xl">GitHub Contributions</h1>

<h1 class="my-15 text-center text-xl">Contributions for {data.props.user} - {data.props.year}</h1>
{#if data.streak}
	<div class="mx-auto my-5 w-fit">
		<div contenteditable="false" bind:innerHTML={data.streak}></div>
	</div>
	<div class="mx-auto w-fit text-center">
		<h3>On the year {data.props.year}. You made:</h3>
		{#each $contributions as item}
			<div class="m-5 flex space-x-3">
				{#if item.count === 1}
					<h3>{item.count} contribution on</h3>
				{:else}
					<h3>{item.count} contributions on</h3>
				{/if}
				<h1>{item.date}</h1>
			</div>
		{/each}
	</div>
{/if}

<!-- <div>{@html gridHTML}</div> -->
