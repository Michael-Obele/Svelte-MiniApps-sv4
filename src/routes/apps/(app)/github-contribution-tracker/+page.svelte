<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
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
</script>

<svelte:head>
	<title>Svelte MiniApps - GitHub Contribution Tracker</title>
	<meta
		name="description"
		content="Track and visualize your GitHub contributions with interactive charts and heatmaps. Analyze your coding activity, streaks, and more."
	/>
	<meta property="og:title" content="Svelte MiniApps - GitHub Contribution Tracker" />
	<meta
		property="og:description"
		content="Track and visualize your GitHub contributions with interactive charts and heatmaps. Analyze your coding activity, streaks, and more."
	/>
	<meta property="og:url" content="https://svelte-apps.me/apps/github-contribution-tracker" />
	<meta property="og:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Svelte MiniApps - GitHub Contribution Tracker" />
	<meta
		name="twitter:description"
		content="Track and visualize your GitHub contributions with interactive charts and heatmaps."
	/>
	<meta name="twitter:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />

	<link rel="canonical" href="https://svelte-apps.me/apps/github-contribution-tracker" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="UTF-8" />
	<meta name="robots" content="index, follow" />
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebApplication",
			"name": "Svelte MiniApps - GitHub Contribution Tracker",
			"url": "https://svelte-apps.me/apps/github-contribution-tracker",
			"description": "Track and visualize your GitHub contributions with interactive charts and heatmaps. Analyze your coding activity, streaks, and more."
		}
	</script>
</svelte:head>

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
