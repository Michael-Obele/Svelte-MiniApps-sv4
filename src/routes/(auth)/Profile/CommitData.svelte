<script lang="ts">
	import { CalendarDays, Github } from 'lucide-svelte';
	import { page } from '$app/stores';
	import date from 'date-and-time';
	import { _fetchCommitData } from './+page';
	import { onMount } from 'svelte';

	export let data;

	function truncateText(text: string, maxLength: number) {
		const originalText = text || '';
		if (originalText.length > maxLength) {
			return text = originalText.slice(0, maxLength - 3) + '...';
		} return text
	}

	interface Commit {
		sha: string;
		author: string;
		date: string;
		message: string;
	}

	async function getLast5Commits(): Promise<Commit[]> {
		const owner = 'Michael-Obele';
		const repo = 'Svelte-MiniApps';
		const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}
			const commits = await response.json();
			return commits.map((commit: any) => ({
				sha: commit.sha,
				author: commit.commit.author.name,
				date: commit.commit.author.date,
				message: commit.commit.message
			}));
		} catch (error) {
			console.error('Failed to fetch commits:', error);
			return [];
		}
	}

	const pattern = date.compile('ddd, MMM DD YYYY');
	const timePattern = date.compile('hh:mm A');
</script>

<section>
	{#await getLast5Commits()}
		<p class="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
			Loading commit data...
		</p>
	{:then commitData}
		<ol class="relative border-s border-gray-200 dark:border-gray-700">
			{#each commitData.slice(0, 1) as commit}
				<li class="mb-10 ms-6">
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900"
					>
						<CalendarDays />
					</span>
					<h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
						Svelte MiniApps Update <span
							class="me-2 ms-3 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
							>Latest</span
						>
					</h3>
					<time class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Released on {date.format(new Date(commit.date), pattern)} at
						{date.format(new Date(commit.date), timePattern)}</time
					>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						{commit.message}
					</p>
					<a
						target="_blank"
						href="https://github.com/Michael-Obele/Svelte-MiniApps"
						class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:text-green-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
						><Github class="mr-2 h-4 w-4" /> Check it out</a
					>
				</li>
			{/each}
			{#each commitData.slice(1, 5) as commit}
				<li class="mb-10 ms-6">
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900"
					>
						<CalendarDays />
					</span>
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Svelte MiniApps Update
					</h3>
					<time class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
						>Released on {date.format(new Date(commit.date), pattern)} at
						{date.format(new Date(commit.date), timePattern)}</time
					>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						{truncateText(commit.message,100)}
					</p>
				</li>
			{/each}
		</ol>
	{:catch error}
		<p class="text-center text-lg font-semibold text-red-600 dark:text-red-400">
			Failed to load commit data: {error.message}
		</p>
	{/await}
</section>
