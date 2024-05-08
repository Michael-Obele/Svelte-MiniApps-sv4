<script lang="ts">
	import List from './List.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	import { filter } from '$lib/utils';

	function setFilterValue(filterValue: string): () => void {
		return () => {
			filter.set(filterValue);
		};
	}
</script>

<div class="flex flex-wrap items-center justify-center py-4 md:py-8">
	<Button on:click={setFilterValue('all')} class={$filter === 'all' ? 'active' : 'inactive'}
		>All</Button
	>
	<Button on:click={setFilterValue('easy')} class={$filter === 'easy' ? 'active' : 'inactive'}
		>Easy</Button
	>
	<Button on:click={setFilterValue('medium')} class={$filter === 'medium' ? 'active' : 'inactive'}
		>Medium</Button
	>
	<Button on:click={setFilterValue('hard')} class={$filter === 'hard' ? 'active' : 'inactive'}
		>Hard</Button
	>
	<Button on:click={setFilterValue('done')} class={$filter === 'done' ? 'active' : 'inactive'}
		>Done</Button
	>
</div>
{#if $filter === 'all'}
	<List filteredBy="all" />
{/if}
<!-- Filtered List Done -->
{#if $filter === 'done'}
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
