<script lang="ts">
	import TaskCard from './TaskCard.svelte';

	import Tags from './Tags.svelte';

	import { done } from '$lib/index';
	import { projects } from '$lib/index';
	import { BadgeCheck, HardHat, ArrowRight } from 'lucide-svelte';
	import { afterUpdate } from 'svelte';

	export let filteredBy: string;

	// Sort projects alphabetically by title
	let sortedProjects = projects.sort((a, b) => a.title.localeCompare(b.title));
</script>

{#if filteredBy === 'all'}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each sortedProjects as item}
			{#if done.includes(item.title)}
				<a
					class:pointer-events-none={!done.includes(item.title)}
					href={'/Apps/' + item.title.replace(/\s+/g, '-')}
					class=""
				>
					<TaskCard {item} />
				</a>
			{:else}
				<TaskCard {item} />
			{/if}
		{/each}
	</div>
{:else if filteredBy === 'done'}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each projects as item}
			{#if done.includes(item.title)}
				<a href={'/Apps/' + item.title.replace(/\s+/g, '-')} class="">
					<TaskCard {item} />
				</a>
			{/if}
		{/each}
	</div>
{:else}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each projects as item}
			{#if item.title.toLowerCase().includes(filteredBy.toLowerCase())}
				{#if done.includes(item.title)}
					<a
						class:pointer-events-none={!done.includes(item.title)}
						href={'/Apps/' + item.title.replace(/\s+/g, '-')}
						class=""
					>
						<TaskCard {item} />
					</a>
				{:else}
					<TaskCard {item} />
				{/if}
			{/if}
		{/each}
	</div>
{/if}
