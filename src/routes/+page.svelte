<script lang="ts">
	import { projects } from '$lib/index';
	import { done } from '$lib/index';
	let websiteTitle = 'Svelte MiniApps';
	let websiteDescription = 'A collection of useful and engaging tools built with Svelte.';
	let websiteUrl = 'https://svelte-mini-apps.netlify.app/'; // Replace with your actual website URL
	let websiteImage = '%sveltekit.assets%/svelte-badge.png';
	let twitterTitle = `${websiteTitle} - Simplify Tasks with Mini Applications`;
	let twitterDescription = `Svelte MiniApps - The go-to collection of interactive tools built with Svelte. Explore and enhance your workflow!`;
</script>

<svelte:head>
	<title>{websiteTitle}</title>
	<meta name="description" content={websiteDescription} />
	<meta property="og:title" content={websiteTitle} />
	<meta property="og:description" content={websiteDescription} />
	<meta property="og:url" content={websiteUrl} />
	<meta property="og:image" content={websiteImage} />
	<meta name="twitter:title" content={twitterTitle} />
	<meta name="twitter:description" content={twitterDescription} />
	<meta name="twitter:image" content={websiteImage} />
</svelte:head>

<main class="mx-auto my-12 max-w-screen-xl rounded-lg bg-white px-4 py-8 dark:bg-gray-900 lg:py-16">
	<div class="flex flex-col items-center justify-center md:flex-row md:space-x-10">
		<div class="text-center md:text-left">
			<h1 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
				Mini Apps with <span class="text-[#F03E3E]"> SvelteKit </span>
			</h1>
			<p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
				Explore a collection of small, single-purpose apps for everyday tasks, built with the power
				of <span class="text-xl font-bold text-[#F03E3E]"> SvelteKit. </span>
			</p>
			<a
				href="/Apps"
				class="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
			>
				Explore Tools
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
		</div>
	</div>

	<section class="mx-auto mt-10 max-w-screen-xl bg-white px-4 py-12 dark:bg-gray-900 lg:py-16">
		<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Projects Include:</h2>
		<ul
			class="grid w-full list-inside grid-cols-2 gap-6 space-y-1 text-gray-900 dark:text-gray-400 md:grid-cols-4"
		>
			{#each projects as item}
				{#if done.includes(item.title)}
					<li class="flex items-center">
						<svg
							class="me-2 h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
							/>
						</svg>
						{item.title}
					</li>
				{:else}
					<li class="flex items-center">
						<svg
							class="me-2 h-3.5 w-3.5 flex-shrink-0 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
							/>
						</svg>
						{item.title}
					</li>
				{/if}
			{/each}
		</ul>
	</section>
</main>
