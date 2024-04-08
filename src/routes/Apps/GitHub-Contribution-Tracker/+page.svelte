<script lang="ts">
	import { invalidateAll, goto } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';

	let username: string;
	let year: string;

	async function gitCommit() {
		goto(`GitHub-Contribution-Tracker/${username}/${year}`);
	}
</script>

<h1 class="m-3 text-center text-2xl">
	Enter your
	<span class="rounded-lg bg-slate-500 p-1 text-blue-200 dark:bg-slate-300 dark:text-blue-700">
		/name/year
	</span>
	in the search box just after the current url
</h1>

<div class="inline-flex w-full items-center justify-center">
	<hr class="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
	<span
		class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
		>or</span
	>
</div>

<h3 class="text-center text-xl capitalize">Enter you details</h3>
<form on:submit|preventDefault={gitCommit} class="mx-auto mt-16 max-w-sm p-3">
	<div class="mb-5">
		<label for="user" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Your Github Username</label
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
	<button
		type="submit"
		class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
	>
		Submit
	</button>
</form>
