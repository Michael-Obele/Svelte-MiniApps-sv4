<script lang="ts">
	import { done } from '$lib/index';
	import { projects } from '$lib/index';
	import { BadgeCheck, HardHat, ArrowRight } from 'lucide-svelte';
	import {
		Box,
		Lock,
		Pen,
		CheckSquare,
		Book,
		PiggyBank,
		Heart,
		Speaker,
		Code
	} from 'lucide-svelte';
</script>

<div class="group mx-12 my-8 flex max-w-md">
	{#each projects as item}
		<a
			class:pointer-events-none={!done.includes(item.title)}
			href={'/Apps/' + item.title.replace(/\s+/g, '-')}
			class=""
		>
			<div
				class="relative rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
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
						<span class:hidden={item.tag !== 'utility'}>
							<Box size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'security'}>
							<Lock size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'design'}>
							<Pen size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'productivity'}>
							<CheckSquare size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'education'}>
							<Book size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'finance'}>
							<PiggyBank size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'health'}>
							<Heart size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'multimedia'}>
							<Speaker size="16" class="mx-1" />
						</span>
						<span class:hidden={item.tag !== 'developer tools'}>
							<Code size="16" class="mx-1" />
						</span>
						{item.tag}
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
