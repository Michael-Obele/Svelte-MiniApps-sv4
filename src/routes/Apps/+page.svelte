<script lang="ts">
	import List from './List.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	import { filter } from '$lib/utils';
	import Input from '$lib/components/ui/input/input.svelte';
	import { afterUpdate } from 'svelte';

	function setFilterValue(filterValue: string): () => void {
		return () => {
			filter.set(filterValue);
		};
	}

	$: app = '';

	afterUpdate(() => {
		console.log('app = ', app);
	});
</script>

<div class="flex flex-wrap items-center justify-center py-4 md:py-8">
	<Button on:click={setFilterValue('all')} class={$filter === 'all' ? 'active' : 'inactive'}
		>All</Button
	>
	<Input
		type="text"
		name="app"
		bind:value={app}
		placeholder="Find App..."
		class="mx-5 mb-2 w-fit rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
	/>
	<Button on:click={setFilterValue('done')} class={$filter === 'done' ? 'active' : 'inactive'}
		>Done</Button
	>
</div>
{#if app}
	<List filteredBy={app} />
	<!-- Filtered List Done -->
{:else if $filter === 'all'}
	<List filteredBy="all" />
{:else if $filter === 'done'}
	<List filteredBy="done" />
{/if}
<!-- Filtered List Easy -->
{#if $filter === 'easy'}
	<List filteredBy="easy" />
{/if}
<!-- Filtered List Medium -->
{#if $filter === 'medium'}
	<List filteredBy="medium" />
{/if}
<!-- Filtered List Hard -->
{#if $filter === 'hard'}
	<List filteredBy="hard" />
{/if}
<!-- End of Filtered List -->
