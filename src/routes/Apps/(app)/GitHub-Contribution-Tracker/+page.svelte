<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input';
	import type { UserContext } from '$lib/types';
	import { redirect, type SubmitFunction } from '@sveltejs/kit';
	import { getContext, onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	const { userUsername } = getContext<UserContext>('userContext');
	let username: string;
	let year: string;
	$: isLoading = false;

	async function handleSubmit(event: any) {
		isLoading = true;
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		toast.promise(
			fetch(`/Apps/GitHub-Contribution-Tracker/${username}/${year}`, {
				method: 'POST',
				body: formData
			}).then(async (response) => {
				const data = await response.json();
				if (!response.ok) {
					isLoading = false;
				} else {
					goto(`GitHub-Contribution-Tracker/${username}/${year}`);
					return true;
				}
			}),
			{
				loading: 'Submitting...',
				success: 'Submitted! Redirecting...',
				error: 'An unknown error occurred. Please reload and try again'
			}
		);
	}

	// Start form submission process.
	// const handleSubmit: SubmitFunction = ({ formData }) => {
	// 	isLoading = true; // Indicate submission is in progress.
	// 	toast.loading('Submitting...'); // Show loading toast.
	// 	fetch(`/Apps/GitHub-Contribution-Tracker/${username}/${year}`, {
	// 		method: 'POST',
	// 		body: formData
	// 	}).then(async (response) => {
	// 		if (!response.ok) {
	// 			toast.error('Error'); // Show error toast.
	// 		} else {
	// 			toast.success('Success', {
	// 				action: {
	// 					label: 'OK',
	// 					onClick: () => toast.dismiss()
	// 				}
	// 			}); // Show success toast.
	// 		}
	// 		isLoading = false; // Submission process ends.
	// 	});
	// };

	//
	import { cubicInOut } from 'svelte/easing';
	import { scaleBand, scaleOrdinal, scaleTime } from 'd3-scale';
	import { flatGroup } from 'd3-array';
	import { format as formatDate } from 'date-fns';

	import {
		Arc,
		Chart,
		Group,
		Area,
		Bars,
		Axis,
		LinearGradient,
		Svg,
		Text,
		Tooltip,
		Labels,
		Highlight,
		TooltipItem,
		radiansToDegrees,
		Bar,
		Pattern,
		RectClipPath,
		Rule,
		createStackData,
		stackOffsetSeparated
	} from 'layerchart';
	import {
		Field,
		RangeField,
		SpringValue,
		Switch,
		Toggle,
		cls,
		round,
		format,
		PeriodType,
		ToggleGroup,
		ToggleOption
	} from 'svelte-ux';

	let value = 75;

	let data = [
		{
			date: '2024-08-11T23:00:00.000Z',
			value: 50,
			baseline: 23
		},
		{
			date: '2024-08-12T23:00:00.000Z',
			value: 77,
			baseline: 21
		},
		{
			date: '2024-08-13T23:00:00.000Z',
			value: 23,
			baseline: 94
		},
		{
			date: '2024-08-14T23:00:00.000Z',
			value: 95,
			baseline: 84
		},
		{
			date: '2024-08-15T23:00:00.000Z',
			value: 82,
			baseline: 83
		},
		{
			date: '2024-08-16T23:00:00.000Z',
			value: 23,
			baseline: 63
		},
		{
			date: '2024-08-17T23:00:00.000Z',
			value: 41,
			baseline: 28
		},
		{
			date: '2024-08-18T23:00:00.000Z',
			value: 58,
			baseline: 91
		},
		{
			date: '2024-08-19T23:00:00.000Z',
			value: 76,
			baseline: 48
		},
		{
			date: '2024-08-20T23:00:00.000Z',
			value: 39,
			baseline: 42
		},
		{
			date: '2024-08-21T23:00:00.000Z',
			value: 26,
			baseline: 59
		},
		{
			date: '2024-08-22T23:00:00.000Z',
			value: 79,
			baseline: 93
		},
		{
			date: '2024-08-23T23:00:00.000Z',
			value: 84,
			baseline: 85
		},
		{
			date: '2024-08-24T23:00:00.000Z',
			value: 57,
			baseline: 23
		},
		{
			date: '2024-08-25T23:00:00.000Z',
			value: 38,
			baseline: 26
		},
		{
			date: '2024-08-26T23:00:00.000Z',
			value: 99,
			baseline: 35
		},
		{
			date: '2024-08-27T23:00:00.000Z',
			value: 42,
			baseline: 54
		},
		{
			date: '2024-08-28T23:00:00.000Z',
			value: 83,
			baseline: 43
		},
		{
			date: '2024-08-29T23:00:00.000Z',
			value: 70,
			baseline: 26
		},
		{
			date: '2024-08-30T23:00:00.000Z',
			value: 62,
			baseline: 79
		},
		{
			date: '2024-08-31T23:00:00.000Z',
			value: 34,
			baseline: 24
		},
		{
			date: '2024-09-01T23:00:00.000Z',
			value: 73,
			baseline: 27
		},
		{
			date: '2024-09-02T23:00:00.000Z',
			value: 69,
			baseline: 22
		},
		{
			date: '2024-09-03T23:00:00.000Z',
			value: 82,
			baseline: 26
		},
		{
			date: '2024-09-04T23:00:00.000Z',
			value: 95,
			baseline: 23
		},
		{
			date: '2024-09-05T23:00:00.000Z',
			value: 40,
			baseline: 68
		},
		{
			date: '2024-09-06T23:00:00.000Z',
			value: 33,
			baseline: 60
		},
		{
			date: '2024-09-07T23:00:00.000Z',
			value: 52,
			baseline: 88
		},
		{
			date: '2024-09-08T23:00:00.000Z',
			value: 48,
			baseline: 33
		},
		{
			date: '2024-09-09T23:00:00.000Z',
			value: 58,
			baseline: 26
		}
	];
</script>

<main>
	<div class="text-center">
		<h1 class="m-3 text-xl">
			Welcome, <span class="text-green-400">{userUsername || ''}</span> to GitHub Contribution Tracker!
		</h1>
		<p class="m-3 text-lg">
			Track your GitHub contributions by entering your username and the year you're interested in.
			Use the form below.
		</p>
	</div>

	<div class="mt-5">
		<h3 class="text-center text-xl">Enter Details</h3>
		<form on:submit={handleSubmit} class="mx-auto mt-5 max-w-sm p-3" method="POST">
			<div class="mb-5">
				<label for="user" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					>Your GitHub Username</label
				>
				<Input
					type="text"
					name="user"
					bind:value={username}
					id="user"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="John-Doe"
					required
				/>
			</div>
			<div class="mb-5">
				<label for="year" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					>Enter Year</label
				>
				<Input
					type="number"
					name="year"
					bind:value={year}
					id="year"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="2020"
					required
				/>
			</div>
			<button
				type="submit"
				disabled={isLoading}
				class:cursor-wait={isLoading}
				class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
			>
				Submit
			</button>
		</form>
	</div>
</main>

<!-- <div class="mb-2">
	<RangeField label="Value" bind:value />
</div>

<div class="h-[120px] rounded border p-4">
	<Chart>
		<Svg>
			<Group center>
				<Group y={16}>
					<LinearGradient class="from-green-300 to-red-500" let:url>
						<Arc
							{value}
							range={[-120, 120]}
							outerRadius={60}
							innerRadius={50}
							cornerRadius={5}
							spring
							let:value
							fill={url}
							track={{ class: 'fill-none stroke-surface-content/10' }}
						>
							<Text
								value={Math.round(value) + '%'}
								textAnchor="middle"
								verticalAnchor="middle"
								class="text-3xl tabular-nums dark:fill-white"
							/>
						</Arc>
					</LinearGradient>
				</Group>
			</Group>
		</Svg>
	</Chart>
</div> -->

<div class="h-[300px] rounded border p-4">
	<Chart
		{data}
		x="date"
		xScale={scaleBand().padding(0.4)}
		y="value"
		yDomain={[0, null]}
		yNice={4}
		padding={{ left: 16, bottom: 24 }}
		tooltip={{ mode: 'band' }}
	>
		<Svg>
			<Axis placement="left" grid rule />
			<Axis placement="bottom" format={(d) => formatDate(d, 'dd MMM')} grid rule />
			<Bars radius={4} strokeWidth={1} class="fill-amber-700" />
			<Highlight area />
		</Svg>
		<Tooltip
			class="bg-red-800 fill-green-400 dark:bg-red-500 dark:text-black"
			header={(data) => formatDate(data.date, 'eee, MMMM do')}
			let:data
		>
			<TooltipItem label="value" value={data.value} />
		</Tooltip>
	</Chart>
</div>
