<script lang="ts">
	import type { PageData } from './$types';
	import { done } from '$lib/index';
	import { projects } from '$lib/index';
	import { BadgeCheck, Tag, ArrowRight } from 'lucide-svelte';
	export let data: PageData;
</script>

<div class="mx-12 my-8 grid gap-8 md:grid-cols-2">
	{#each projects as item}
		<div
			class="relative rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
		>
			<!-- Done check -->
			<span
				class:opacity-100={done.includes(item.title)}
				class:opacity-25={!done.includes(item.title)}
				class="absolute right-5 top-5"
			>
				<BadgeCheck class="h-20 w-20 text-green-800 dark:text-green-400" />
			</span>

			<!-- End of Done check -->
			<span
				class:easy={item.tag === 'easy'}
				class:medium={item.tag === 'medium'}
				class:hard={item.tag === 'hard'}
				class="mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
			>
				<Tag size="14" class="mx-1" />
				{item.tag}
			</span>
			<h2 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
				{item.title}
			</h2>
			<p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
				{item.details}
			</p>
			{#if done.includes(item.title)}
				<a
					href={'/Apps/' + item.title.replace(/\s+/g, '-')}
					class="inline-flex items-center text-lg font-medium text-red-600 group-hover:underline dark:text-red-500"
					>Try now
					<ArrowRight size="22" class="mx-1" />
				</a>
			{/if}
		</div>
	{/each}
</div>
