<script lang="ts">
	import { projects } from '$lib/index';
	import { done } from '$lib/index';
	import { ArrowRight, CheckCircle2, CheckSquare2 } from 'lucide-svelte';
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
<div class="xl:px-10">
	<main
		class="mx-auto my-12 max-w-screen-xl justify-center bg-white px-4 py-8 dark:bg-gray-900 lg:py-16 xl:rounded-lg"
	>
		<div class="flex flex-col items-center justify-center md:flex-row md:space-x-10">
			<div class="text-center md:text-left">
				<h1 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
					Mini Apps with <span class="text-[#F03E3E]"> SvelteKit </span>
				</h1>
				<p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400">
					Explore a collection of small, single-purpose apps for everyday tasks, built with the
					power of <span class="text-xl font-bold text-[#F03E3E]"> SvelteKit. </span>
				</p>
				<a
					href="/Apps"
					class="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
				>
					Explore Tools
					<ArrowRight class="ml-2 h-5 w-5" />
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
							<CheckCircle2 class="mr-2 h-5 w-5 text-green-700" />

							{item.title}
						</li>
					{:else}
						<li class="flex items-center">
							<CheckCircle2 class="mr-2 h-5 w-5" />
							{item.title}
						</li>
					{/if}
				{/each}
			</ul>
		</section>
	</main>
</div>
