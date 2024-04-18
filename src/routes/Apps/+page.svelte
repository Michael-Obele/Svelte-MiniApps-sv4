<script lang="ts">
	import List from './List.svelte';

	import { filter } from '$lib/utils';

	function setFilterValue(filterValue: string): () => void {
		return () => {
			filter.set(filterValue);
		};
	}
</script>

<div class="flex flex-wrap items-center justify-center py-4 md:py-8">
	<button
		type="button"
		on:click={setFilterValue('all')}
		class={$filter === 'all' ? 'active' : 'inactive'}>All</button
	>
	<button
		type="button"
		on:click={setFilterValue('easy')}
		class={$filter === 'easy' ? 'active' : 'inactive'}>Easy</button
	>
	<button
		type="button"
		on:click={setFilterValue('medium')}
		class={$filter === 'medium' ? 'active' : 'inactive'}>Medium</button
	>
	<button
		type="button"
		on:click={setFilterValue('hard')}
		class={$filter === 'hard' ? 'active' : 'inactive'}>Hard</button
	>
	<button
		type="button"
		on:click={setFilterValue('done')}
		class={$filter === 'done' ? 'active' : 'inactive'}>Done</button
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
