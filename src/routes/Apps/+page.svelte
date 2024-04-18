<script lang="ts">
	import { done } from '$lib/index';
	import { projects } from '$lib/index';
	import { filter } from '$lib/utils';
	import { BadgeCheck, HardHat, ArrowRight } from 'lucide-svelte';
	import { PiggyBank, Heart, Speaker, Code } from 'lucide-svelte';
	import { Box, Lock, Pen, CheckSquare, Book } from 'lucide-svelte';
	let active =
		'mb-3 me-3 rounded-full border border-green-600 bg-white px-5 py-2.5 text-center text-base font-medium text-green-700 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:bg-gray-900 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white dark:focus:ring-green-800';
	let inactive =
		'mb-3 me-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800';
</script>

<div class="flex flex-wrap items-center justify-center py-4 md:py-8">
	<button type="button" on:click={() => filter.set(false)} class={$filter ? inactive : active}
		>All</button
	>
	<button type="button" on:click={() => filter.set(true)} class={$filter ? active : inactive}
		>Done</button
	>
</div>

{#if !$filter}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each projects as item}
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
							class:easy={item.difficulty === 'easy'}
							class:medium={item.difficulty === 'medium'}
							class:hard={item.difficulty === 'hard'}
							class="mb-2 inline-flex w-fit items-center rounded-md px-2.5 py-0.5 text-sm font-medium"
						>
							<HardHat size="16" class="mx-1" />
							{item.difficulty}
						</span>

						<span
							class={`mb-2 inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium text-green-800 ${item.tag}`}
						>
							{#if item.tag === 'utility'}
								<Box size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'security'}
								<Lock size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'design'}
								<Pen size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'productivity'}
								<CheckSquare size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'education'}
								<Book size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'finance'}
								<PiggyBank size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'health'}
								<Heart size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'multimedia'}
								<Speaker size="16" class="mx-1" />
							{/if}
							{#if item.tag === 'developer-tools'}
								<Code size="16" class="mx-1" />
							{/if}
							{item.tag.split('-').join(' ')}
						</span>
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
{/if}

<!-- Filtered List -->
{#if $filter}
	<div class="mx-12 my-8 flex h-fit flex-col gap-5 md:grid md:grid-cols-2">
		{#each projects as item}
			{#if done.includes(item.title)}
				<a href={'/Apps/' + item.title.replace(/\s+/g, '-')} class="">
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

							<span
								class={`mb-2 inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium text-green-800 ${item.tag}`}
							>
								{#if item.tag === 'utility'}
									<Box size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'security'}
									<Lock size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'design'}
									<Pen size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'productivity'}
									<CheckSquare size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'education'}
									<Book size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'finance'}
									<PiggyBank size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'health'}
									<Heart size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'multimedia'}
									<Speaker size="16" class="mx-1" />
								{/if}
								{#if item.tag === 'developer-tools'}
									<Code size="16" class="mx-1" />
								{/if}
								{item.tag.split('-').join(' ')}
							</span>
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
{/if}
