<script lang="ts">
	import { done } from '$lib/index';
	import type { PageData } from './$types';

	export let data: PageData;
	const projects = data.projects;
</script>

<div class="mx-12 my-8 grid gap-8 md:grid-cols-2">
	{#each projects as item}
		<div
			class="relative rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
		>
			<!-- Done check -->
			<span class="absolute right-5 top-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class:opacity-100={done.includes(item.title)}
					class:opacity-5={!done.includes(item.title)}
					class="h-20 w-20 text-green-800 dark:text-green-400"
				>
					<path
						fill-rule="evenodd"
						d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>

			<!-- End of Done check -->
			<span
				class:dark:text-green-400={item.tag === 'easy'}
				class:text-green-800={item.tag === 'easy'}
				class:dark:text-orange-400={item.tag === 'medium'}
				class:text-orange-800={item.tag === 'medium'}
				class:dark:text-purple-400={item.tag === 'hard'}
				class:text-purple-800={item.tag === 'hard'}
				class="mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium dark:bg-gray-700"
			>
				<svg
					class="me-1.5 h-2.5 w-2.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 18"
				>
					<path
						d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"
					/>
				</svg>
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
					class="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
					>See now
					<svg
						class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			{/if}
		</div>
	{/each}
</div>
