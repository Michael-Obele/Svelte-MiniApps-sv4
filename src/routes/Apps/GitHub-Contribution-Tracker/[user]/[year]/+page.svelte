<script lang="ts">
	import { goto } from '$app/navigation';
	import { parseHTML } from 'linkedom';
	import { ChevronLeft } from 'lucide-svelte';
	import SvelteHeatmap from 'svelte-heatmap';
	import { writable } from 'svelte/store';

	export let data;
	const year: string = data.props.year;
	const user: string = data.props.user;

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

	type ContributionsData = string[][];

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

	const jsonData = extractContributionData(data.contributionsInfo);

	const parseData = (data: ContributionsData) => {
		data.forEach((entry) => {
			const [contributionString] = entry;
			const match = contributionString.match(/(\d+) contributions? on (\w+)/);
			if (match) {
				const [, count, month] = match;
				contributions.update((current) => {
					const monthIndex = current.findIndex((m) => m.date === month);
					if (monthIndex !== -1) {
						current[monthIndex].count += parseInt(count, 10);
					}

					return current;
				});
			}
		});
	};

	parseData(jsonData);

	interface ContributionsByMonth {
		[month: string]: {
			[day: string]: number;
		};
	}

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

	const monthAbs = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

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

	interface OutputEntry {
		date: string;
		value: number;
	}

	let totalContributions = dataSet.reduce((accumulator, current) => accumulator + current.value, 0);
</script>

<svelte:head>
	<title>GitHub API</title>
</svelte:head>

<h1 class="text-center text-2xl">GitHub Contributions</h1>

<h1 class="my-15 text-center text-xl">
	For <span class="capitalize">{user}</span> - {year}
</h1>
{#if data.streakStats}
	<div class="my-5">
		<div
			class="mx-auto flex w-full justify-center"
			contenteditable="false"
			bind:innerHTML={data.streakStats}
		></div>
	</div>
	<div class="mx-auto w-fit space-y-3 text-center">
		<h3>
			On {data.props.year}.
			<span>Your Total contributions are {totalContributions}</span>
		</h3>

		<div class="inline-flex w-full items-center justify-center">
			<hr class="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
			<span
				class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
				>that's</span
			>
		</div>
		{#each $contributions as item}
			<div class="m-5 flex space-x-3">
				<h3>{item.count} {item.count === 1 ? 'contribution' : 'contributions'} on</h3>
				<h1>{item.date}</h1>
			</div>
		{/each}
	</div>

	<div class="inline-flex w-full items-center justify-center">
		<hr class="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
		<span
			class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
			>or</span
		>
	</div>
{/if}

{#each Object.keys(contributionsByMonth) as month, i}
	<div class="m-3 mx-auto flex w-fit flex-row space-x-3">
		<h2>{month}</h2>
		<ul>
			{#each Object.keys(contributionsByMonth[month]) as day}
				<li>
					{day} : {contributionsByMonth[month][day]}
					{contributionsByMonth[month][day] === 1 ? 'contribution' : 'contributions'}
				</li>
			{/each}
		</ul>
	</div>
	<div
		class:hidden={i + 1 == Object.keys(contributionsByMonth).length}
		class="inline-flex w-full items-center justify-center"
	>
		<hr class="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
		<span
			class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
			>and</span
		>
	</div>
{/each}

<div class="inline-flex w-full items-center justify-center">
	<hr class="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
	<span
		class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
		>Heat Map</span
	>
</div>

<div class="mx-auto w-full space-y-7 px-6 py-5 lg:hidden">
	<SvelteHeatmap
		allowOverflow={true}
		cellGap={3}
		fontColor={'white'}
		cellRadius={1}
		colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
		data={dataSet}
		dayLabelWidth={3}
		emptyColor={'#ecedf0'}
		monthLabels={monthAbs}
		endDate={`${year}-04-01T03:00:00.000Z`}
		monthGap={10}
		monthLabelHeight={8}
		startDate={`${year}-01-01T03:00:00.000Z`}
		view={'monthly'}
	/>
	<SvelteHeatmap
		allowOverflow={true}
		cellGap={3}
		fontColor={'white'}
		cellRadius={1}
		colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
		data={dataSet}
		dayLabelWidth={3}
		emptyColor={'#ecedf0'}
		monthLabels={monthAbs}
		endDate={`${year}-08-01T03:00:00.000Z`}
		monthGap={10}
		monthLabelHeight={8}
		startDate={`${year}-05-01T03:00:00.000Z`}
		view={'monthly'}
	/>
	<SvelteHeatmap
		allowOverflow={true}
		cellGap={3}
		fontColor={'white'}
		cellRadius={1}
		colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
		data={dataSet}
		dayLabelWidth={5}
		emptyColor={'#ecedf0'}
		monthLabels={monthAbs}
		endDate={`${year}-12-01T03:00:00.000Z`}
		monthGap={10}
		monthLabelHeight={8}
		startDate={`${year}-09-01T03:00:00.000Z`}
		view={'monthly'}
	/>
</div>

<div class="mx-auto hidden w-full px-6 py-2 lg:block">
	<SvelteHeatmap
		allowOverflow={true}
		cellGap={3}
		fontColor={'white'}
		cellRadius={1}
		colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
		data={dataSet}
		emptyColor={'#ecedf0'}
		monthLabels={monthAbs}
		endDate={`${year}-12-01T03:00:00.000Z`}
		monthGap={8}
		monthLabelHeight={25}
		startDate={`${year}-01-01T03:00:00.000Z`}
		view={'monthly'}
	/>
</div>

<div class="mx-auto w-fit">
	<button
		class="group mb-2 me-2 flex justify-center rounded-lg border border-green-700 px-2 py-2.5 pr-7 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
		on:click={() => goto('/Apps/GitHub-Contribution-Tracker')}
	>
		<span class="opacity-5 transition-all group-hover:opacity-100">
			<ChevronLeft />
		</span>
		<span class="mt-1"> Go Back </span>
	</button>
</div>
