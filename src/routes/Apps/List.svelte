<script lang="ts">
	import Tags from './Tags.svelte';

	import { done } from '$lib/index';
	import { projects } from '$lib/index';
	import { BadgeCheck, HardHat, ArrowRight } from 'lucide-svelte';
	import { afterUpdate } from 'svelte';

	export let filteredBy: string;

	// Sort projects alphabetically by title
	let sortedProjects = projects.sort((a, b) => a.title.localeCompare(b.title));
	afterUpdate(() => {
		console.log('filteredBy = ', filteredBy);
	});
</script>

{#if filteredBy === 'all'}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each sortedProjects as item}
			<a
				class:pointer-events-none={!done.includes(item.title)}
				href={'/Apps/' + item.title.replace(/\s+/g, '-')}
				class=""
			>
				<div
					class="group relative h-full rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
				>
					<!-- Done check -->
					<span
						class:opacity-100={done.includes(item.title)}
						class:opacity-20={!done.includes(item.title)}
						class="absolute right-5 top-5"
					>
						<BadgeCheck class="h-20 w-20 text-green-800 dark:text-green-400" />
					</span>

					<!-- End of Done check -->
					<div class="flex w-fit flex-col">
						<span
							class={`mb-2 inline-flex w-fit items-center rounded-md px-2.5 py-0.5 text-sm font-medium ${item.difficulty}`}
						>
							<HardHat size="16" class="mx-1" />
							{item.difficulty}
						</span>

						<Tags {item} />
					</div>

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
			</a>
		{/each}
	</div>
{:else if filteredBy === 'done'}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each projects as item}
			{#if done.includes(item.title)}
				<a href={'/Apps/' + item.title.replace(/\s+/g, '-')} class="">
					<div
						class="group relative h-full rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
					>
						<!-- Done check -->
						<span class="absolute right-5 top-5 opacity-100">
							<BadgeCheck class="h-20 w-20 text-green-800 dark:text-green-400" />
						</span>
						<!-- End of Done check -->
						<div class="flex w-fit flex-col">
							<span
								class={`mb-2 inline-flex w-fit items-center rounded-md px-2.5 py-0.5 text-sm font-medium ${item.difficulty}`}
							>
								<HardHat size="16" class="mx-1" />
								{item.difficulty}
							</span>

							<Tags {item} />
						</div>
						<h2 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
							{item.title}
						</h2>
						<p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
							{item.details}
						</p>

						<a
							href={'/Apps/' + item.title.replace(/\s+/g, '-')}
							class="inline-flex items-center text-lg font-medium text-red-600 group-hover:underline dark:text-red-500"
							>Try now
							<ArrowRight size="22" class="mx-1" />
						</a>
					</div></a
				>
			{/if}
		{/each}
	</div>
{:else}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each projects as item}
			{#if item.title.toLowerCase().includes(filteredBy.toLowerCase())}
				<a
					class:pointer-events-none={!done.includes(item.title)}
					href={'/Apps/' + item.title.replace(/\s+/g, '-')}
					class=""
				>
					<div
						class="group relative h-full rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
					>
						<!-- Done check -->
						<span
							class:opacity-100={done.includes(item.title)}
							class:opacity-20={!done.includes(item.title)}
							class="absolute right-5 top-5"
						>
							<BadgeCheck class="h-20 w-20 text-green-800 dark:text-green-400" />
						</span>

						<!-- End of Done check -->
						<div class="flex w-fit flex-col">
							<span
								class={`mb-2 inline-flex w-fit items-center rounded-md px-2.5 py-0.5 text-sm font-medium ${item.difficulty}`}
							>
								<HardHat size="16" class="mx-1" />
								{item.difficulty}
							</span>

							<Tags {item} />
						</div>
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
					</div></a
				>
			{/if}
		{/each}
	</div>
{/if}
