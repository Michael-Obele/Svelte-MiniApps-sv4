<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button/index.js';

	let username: string;
	let year: string;

	async function gitCommit() {
		goto(`GitHub-Contribution-Tracker/${username}/${year}`);
	}
</script>

<main>
	<div class="text-center">
		<h1 class="m-3 text-xl">
			Welcome {#if $page.data.user}
				<span class="text-green-400">{$page.data.user.username}</span>,
			{/if} to GitHub Contribution Tracker!
		</h1>
		<p class="m-3 text-lg">
			Track your GitHub contributions by entering your username and the year you're interested in.
			Use the form below.
		</p>
	</div>

	<div class="mt-5">
		<h3 class="text-center text-xl">Enter Details</h3>
		<form on:submit|preventDefault={gitCommit} class="mx-auto mt-5 max-w-sm p-3">
			<div class="mb-5">
				<label for="user" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					>Your GitHub Username</label
				>
				<input
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
				<input
					type="text"
					name="year"
					bind:value={year}
					id="year"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="2020"
					required
				/>
			</div>
			<Button
				type="submit"
				class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
			>
				Submit
			</Button>
		</form>
	</div>
</main>
