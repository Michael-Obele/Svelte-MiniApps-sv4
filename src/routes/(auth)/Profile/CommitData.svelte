<script lang="ts">
	import { CalendarDays, Github } from 'lucide-svelte';
	import { page } from '$app/stores';
	import date from 'date-and-time';
	import { _fetchCommitData } from './+page';

	export let data;

	function formatDate(dateString: string | number | Date) {
		const dateObj = new Date(dateString);
		const options = {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		} as Intl.DateTimeFormatOptions;
		return `Released on ${dateObj.toLocaleDateString('en-US', options)} at ${dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
	}

	const pattern = date.compile('ddd, MMM DD YYYY');
	const timePattern = date.compile('hh:mm A');
</script>

<section>
	{#await data.props.commitData}
		<p class="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
			Loading commit data...
		</p>
	{:then commitData}
		<div class="my-4 px-4 lg:m-0 lg:p-0">
			<ol class="relative border-gray-200 dark:border-gray-700 lg:border-s">
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
						>Released on {date.format(new Date(commitData.commit.committer.date), pattern)} at
						{date.format(new Date(commitData.commit.committer.date), timePattern)}</time
					>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						{commitData.commit.message}
					</p>
					<a
						target="_blank"
						href="https://github.com/Michael-Obele/Svelte-MiniApps"
						class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:text-green-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
						><Github class="mr-2 h-4 w-4" /> Check it out</a
					>
				</li>
			</ol>
		</div>
	{:catch error}
		<p class="text-center text-lg font-semibold text-red-600 dark:text-red-400">
			Failed to load commit data: {error.message}
		</p>
	{/await}
</section>
