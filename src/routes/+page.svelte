<script lang="ts">
	import { page } from '$app/stores';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import { projects, done } from '$lib/index';
	import Svelte from '$lib/logo/svelte.svelte';
	import { ArrowRight, CheckCircle2 } from 'lucide-svelte';
	import { Chart, Svg, Text, Axis, Bars, Group, LinearGradient, Arc } from 'layerchart';
	// import * as CurrencyConverter from 'currency-converter-lt';
	import { stringifyWithBigInt } from '$lib/utils';
	let websiteTitle = 'Svelte MiniApps';
	let websiteDescription = 'A collection of useful and engaging tools built with Svelte.';
	let websiteUrl = 'https://svelte-mini-apps.netlify.app/'; // Replace with your actual website URL
	let websiteImage = '%sveltekit.assets%/svelte-badge.png';
	let twitterTitle = `${websiteTitle} - Simplify Tasks with Mini Applications`;
	let twitterDescription = `Svelte MiniApps - The go-to collection of interactive tools built with Svelte. Explore and enhance your workflow!`;
	let value = 64;
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

{stringifyWithBigInt($page.data)}

{#if $page.data.session}
	<span class="signedInText">
		{$page.data.session.user?.email ?? $page.data.session.user?.name}
	</span>
	<SignOut>
		<div slot="submitButton" class="buttonPrimary">Sign out</div>
	</SignOut>
{:else}
	<span class="notSignedInText">You are not signed in</span>
	<SignIn>
		<div slot="submitButton" class="buttonPrimary">Sign in</div>
	</SignIn>
{/if}

<div class="pb-5 xl:px-10">
	<section class="w-full py-8 md:py-14 lg:py-24">
		<div class="container px-4 md:px-6">
			<div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
				<div class="flex flex-col justify-center space-y-4">
					<header class="space-y-2">
						<h1
							class="my-3 text-3xl font-bold tracking-tighter text-red-700 dark:text-white sm:text-5xl xl:text-6xl/none"
						>
							Welcome <span class="capitalize text-green-700 dark:text-green-300">
								{$page.data.user ? `Back, ${$page.data.user.username}!` : ''}
							</span> to...
						</h1>
						<h1
							class="text-3xl font-bold tracking-tighter text-red-700 dark:text-white sm:text-5xl xl:text-6xl/none"
						>
							Svelte Mini Apps
						</h1>
						<p class="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
							Discover a collection of small, but powerful Svelte-based web applications that
							showcase the versatility and simplicity of this modern JavaScript framework.
						</p>
					</header>
					<a
						class="inline-flex h-10 items-center justify-center rounded-md bg-red-700 px-5 py-2.5 text-center text-base font-medium text-white shadow transition-colors hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-red-900"
						href="/Apps"
					>
						Explore Apps
						<ArrowRight class="ml-2 hidden h-5 w-5 md:grid" />
					</a>
				</div>
				<div
					class="mx-auto flex h-[60%] w-[60%] flex-row items-center justify-center md:w-full lg:h-full"
				>
					<Svelte />
					<span
						class="shadow12 hidden -indent-[8vw] text-5xl min-[320px]:block sm:-indent-[12vw] md:hidden"
						>velte
					</span>
				</div>
			</div>
		</div>
	</section>
	<main class="w-full py-5 md:py-8 lg:py-10">
		<div class="container px-4 md:px-6">
			<section
				class="mx-auto max-w-screen-xl justify-center bg-white px-4 py-8 dark:bg-gray-900 lg:py-16 xl:rounded-lg"
			>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
							<span class="text-[#F03E3E]"> Svelte </span> Mini Apps Gallery
						</h2>
						<p
							class="mb-6 max-w-[900px] text-lg font-normal text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Explore a collection of small, but powerful <span class="text-[#F03E3E]">Svelte</span
							>-based web applications that showcase the versatility and simplicity of this modern
							JavaScript framework.
						</p>
						<a
							href="/Apps"
							class="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
						>
							Explore Apps
							<ArrowRight class="ml-2 h-5 w-5" />
						</a>
					</div>
				</div>

				<section
					class="mx-auto mt-10 max-w-screen-xl bg-white px-4 py-12 dark:bg-gray-900 lg:py-16"
				>
					<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
						Projects Include:
					</h2>
					<ul
						class="grid w-full list-inside grid-cols-1 gap-6 space-y-1 text-gray-900 dark:text-gray-400 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
					>
						{#each projects as project}
							{#if done.includes(project.title)}
								<li class="flex items-center">
									<CheckCircle2 class="mr-2 h-5 w-5 text-green-700" />
									{project.title}
								</li>
							{:else}
								<li class="flex items-center">
									<CheckCircle2 class="mr-2 h-5 w-5" />
									{project.title}
								</li>
							{/if}
						{/each}
					</ul>
				</section>
			</section>
		</div>
	</main>
	<section class="w-full md:py-24 lg:py-32">
		<div class="container px-4 md:px-6">
			<div class="flex flex-col items-center justify-center space-y-4 text-center">
				<div class="space-y-2">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
						Why <span class="text-[#F03E3E]"> Svelte</span>?
					</h2>
					<p
						class="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Svelte is a modern, component-based JavaScript framework that offers a unique approach
						to building user interfaces. Unlike traditional frameworks that rely on a virtual DOM,
						Svelte compiles your components into highly-optimized JavaScript code that updates the
						DOM directly, resulting in lightning-fast performance and a smooth user experience.
					</p>
				</div>
				<div class="space-y-2">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
						<span class="text-[#F03E3E]"> Simplicity </span> and Efficiency
					</h2>
					<p
						class="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Svelte's syntax is intuitive and easy to learn, making it a great choice for both
						experienced developers and those new to the world of web development. Its focus on
						simplicity and efficiency means that you can build complex applications with less code,
						resulting in faster development times and easier maintenance.
					</p>
				</div>
				<div class="space-y-2">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
						Versatility and <span class="text-[#F03E3E]"> Scalability </span>
					</h2>
					<p
						class="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Svelte's modular architecture and powerful tooling make it a versatile choice for
						building a wide range of web applications, from small personal projects to large-scale
						enterprise solutions. Its scalability and performance characteristics ensure that your
						applications can grow and evolve with your business needs.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- <footer class="w-full py-12 text-center md:py-24 lg:py-32">
		<div class="container px-4 md:px-6">
			<p class="text-gray-500 dark:text-gray-400">
				Support me on <a
					href="https://github.com/yourusername"
					class="text-green-700 hover:text-green-800">GitHub</a
				>.
			</p>
			<p class="text-gray-500 dark:text-gray-400">
				This app is a Progressive Web App (PWA), and some apps can work completely offline.
			</p>
		</div>
	</footer> -->
</div>
