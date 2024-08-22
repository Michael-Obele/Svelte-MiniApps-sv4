<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	import { format, formatDistance } from 'date-fns';

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
	import { page } from '$app/stores';
	import type { ActionData } from './$types.js';
	import { Card, CardHeader, CardContent, CardTitle } from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { CalendarDays, Github, StarIcon } from 'lucide-svelte';

	let userData = $page.data.user?.userData;
</script>

<Card>
	<CardHeader>
		<CardTitle>Svelte MiniApps Update List</CardTitle>
	</CardHeader>
	<CardContent class="grid gap-4">
		{#await $page.data.commitData}
			<p class="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
				Loading commit data...
			</p>
		{:then commitData}
			<ScrollArea class="h-64 rounded-md px-3">
				{#each commitData as commit, i}
					<div class="my-5 flex items-center justify-between">
						<div class="space-y-5">
							<div class="font-semibold">
								<span> Update sha: {commit.sha.slice(0, 6)} </span>

								{#if i == 0}
									<span
										class="me-2 ms-3 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
										>Latest</span
									>
								{/if}
							</div>
							<div class="text-sm text-muted-foreground">
								{@html truncateText(commit.message, 70)}
							</div>
						</div>
						<div class="text-right text-sm text-muted-foreground">
							Updated {formatDistance(new Date(commit.date), Date.now())} ago
						</div>
					</div>
					{#if i == 0}
						<a
							target="_blank"
							href="https://github.com/Michael-Obele/Svelte-MiniApps/commit/{commit.sha}"
							class="my-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:text-green-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
							><Github class="mr-2 h-4 w-4" /> Check it out</a
						>
					{/if}
					<Separator />
				{/each}
			</ScrollArea>
		{:catch error}
			<p class="text-center text-lg font-semibold text-red-600 dark:text-red-400">
				Failed to load commit data: {error.message}
			</p>
		{/await}
	</CardContent>
</Card>
