<script lang="ts">
	import CommitData from './CommitData.svelte';
	import { CalendarDays, Github } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { format } from 'date-fns'; // Import format from date-fns
	
	// Function to convert \n to <br>
	function convertNewlinesToBr(text: string) {
	  return text.replace(/\n/g, '<br/>');
	}
	
	function truncateText(text: string, maxLength: number) {
	  const originalText = text || '';
	  if (originalText.length > maxLength) {
		return convertNewlinesToBr(originalText.slice(0, maxLength - 3)) + '...';
	  }
	  return convertNewlinesToBr(originalText);
	}
	

	// Format the date using date-fns
	// const formattedDate = format(new Date(commit.date), 'EEE, MMM dd yyyy');
	// const formattedTime = format(new Date(commit.date), 'hh:mm a'); // Use 'hh:mm a' for 12-hour format with AM/PM

</script>

<!--
@component
## Svelte Component: CommitData
This component displays the latest 5 commits from the Svelte MiniApps GitHub repository. It fetches the commit data from the GitHub API and presents it in a visually appealing list format.

## Key Features
- **Latest Commit Highlight:** The most recent commit is highlighted with a "Latest" label.
- **Commit Details:** Each commit displays the date, author, and a truncated message.
- **GitHub Link:** A link to the Svelte MiniApps GitHub repository is provided for users to explore the project further.

## Data Fetching
- The component uses the `getLast5Commits` function to fetch the commit data from the GitHub API.
- The `await` keyword is used to wait for the data to be loaded before rendering the component.
- Error handling is implemented to display a message if the data fails to load.
-->

<section>
	{#await $page.data.commitData}
		<p class="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
			Loading commit data...
		</p>
	{:then commitData}
		<ol class="relative border-s border-gray-200 dark:border-gray-700">
			{#each commitData as commit,i}
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
						>Released on {format(new Date(commit.date), 'EEE, MMM dd yyyy')} at
						{format(new Date(commit.date), 'hh:mm a')}</time
					>
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						{@html truncateText(commit.message, 100)}
					</p>
					{#if i == 0}
					<a
					target="_blank"
					href="https://github.com/Michael-Obele/Svelte-MiniApps/commit/{commit.sha}"
					class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:text-green-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
					><Github class="mr-2 h-4 w-4" /> Check it out</a
				>
					{/if}
				</li>
			{/each}
		</ol>
	{:catch error}
		<p class="text-center text-lg font-semibold text-red-600 dark:text-red-400">
			Failed to load commit data: {error.message}
		</p>
	{/await}
</section>
