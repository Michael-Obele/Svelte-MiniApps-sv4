<script lang="ts">
	import { goto } from '$app/navigation';
	import { ChevronLeft } from 'lucide-svelte';
	import SvelteHeatmap from 'svelte-heatmap';
	import { contributions } from '$lib/utils';

	export let data;
	const year: string = data.props.year;
	const user: string = data.props.user;

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
{/if}
<div class="mx-auto w-fit space-y-3 text-center">
	<h3>
		On {data.props.year}.
		<span>Your Total contributions are {data.page_data.totalContributions}</span>
	</h3>

	<div class="inline-flex w-full items-center justify-center">
		<hr class="my-8 h-[2px] w-64 rounded-xl border-0 bg-gray-200 dark:bg-gray-700" />
		<span
			class="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-2xl font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
			>that's</span
		>
	</div>
	{#each $contributions as item}
		{#if item.count >= 1}
			<div class="m-5 flex space-x-3">
				<h3>{item.count} {item.count === 1 ? 'contribution' : 'contributions'} on</h3>
				<h1>{item.date}</h1>
			</div>
		{/if}
	{/each}
</div>

<div class="inline-flex w-full items-center justify-center">
	<hr class="my-8 h-[2px] w-64 rounded-xl border-0 bg-gray-200 dark:bg-gray-700" />
	<span
		class="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-2xl font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
		>or</span
	>
</div>

{#each Object.keys(data.page_data.sortedContributions) as month, i}
	<div class="m-3 mx-auto flex w-fit flex-row space-x-3">
		<h2>{month}</h2>
		<ul>
			{#each Object.keys(data.page_data.sortedContributions[month]) as day}
				<li>
					{day} : {data.page_data.sortedContributions[month][day]}
					{data.page_data.sortedContributions[month][day] === 1 ? 'contribution' : 'contributions'}
				</li>
			{/each}
		</ul>
	</div>
	<div
		class:hidden={i + 1 == Object.keys(data.page_data.sortedContributions).length}
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
	<hr class="my-8 h-[2px] w-64 rounded-xl border-0 bg-gray-200 dark:bg-gray-700" />
	<span
		class="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-2xl font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
		>Heat Map</span
	>
</div>

<div class="mx-auto w-full space-y-8 px-6 py-5 lg:hidden">
	<SvelteHeatmap
		allowOverflow={true}
		cellGap={3}
		fontColor={'white'}
		cellRadius={1}
		colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
		data={data.page_data.dataSet}
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
		data={data.page_data.dataSet}
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
		data={data.page_data.dataSet}
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

<div class="mx-auto hidden w-full space-y-10 px-6 py-2 lg:block">
	<SvelteHeatmap
		allowOverflow={true}
		cellGap={3}
		dayLabelWidth={2}
		dayLabels={['', 'Mon', '', 'Web', '', 'Fri', '']}
		fontColor={'white'}
		cellRadius={1}
		colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
		data={data.page_data.dataSet}
		emptyColor={'#ecedf0'}
		monthLabels={monthAbs}
		endDate={`${year}-06-01T03:00:00.000Z`}
		monthGap={8}
		monthLabelHeight={25}
		startDate={`${year}-01-01T03:00:00.000Z`}
		view={'monthly'}
	/>
	<SvelteHeatmap
		allowOverflow={true}
		cellGap={3}
		dayLabelWidth={2}
		dayLabels={['', 'Mon', '', 'Web', '', 'Fri', '']}
		fontColor={'white'}
		cellRadius={1}
		colors={['#a1dab4', '#42b6c4', '#2c7fb9', '#263494']}
		data={data.page_data.dataSet}
		emptyColor={'#ecedf0'}
		monthLabels={monthAbs}
		endDate={`${year}-12-01T03:00:00.000Z`}
		monthGap={8}
		monthLabelHeight={25}
		startDate={`${year}-07-01T03:00:00.000Z`}
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
