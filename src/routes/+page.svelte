<script lang="ts">
	import { page } from '$app/stores';
	import { projects, done } from '$lib/index';
	import Svelte from '$lib/logo/svelte.svelte';
	import { ArrowRight, CheckCircle2, Cookie, Heart } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	//
	let websiteTitle = 'Svelte MiniApps';
	let websiteDescription = 'A collection of useful and engaging tools built with Svelte.';
	let websiteUrl = 'https://svelte-mini-apps.netlify.app/';
	let websiteImage = '%sveltekit.assets%/svelte-badge.png';
	let twitterTitle = `${websiteTitle} - Simplify Tasks with Mini Applications`;
	let twitterDescription = `Svelte MiniApps - The go-to collection of interactive tools built with Svelte. Explore and enhance your workflow!`;
	//

	let seenCookieNotification = $page.data.hasSeenCookieNotification;

	if (!seenCookieNotification) {
		console.log('Cookie notification is visible');

		toast(' This website uses session cookies... ', {
			action: {
				label: 'OK',
				onClick: () => goto('/cookies')
			},
			duration: Number.POSITIVE_INFINITY,
			icon: Cookie
		});
	}

	// Function to scroll smoothly to the top of the page
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
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
	<meta name="google-site-verification" content="10ATAx6uImjU99YXvI91DB-E9h-MAgI6jsUkLfJlRwY" />
	<meta name="twitter:image" content={websiteImage} />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href={websiteUrl} />

	<script type="application/ld+json">
	{{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
			"@type": "Question",
			"name": "What is Svelte MiniApps?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Svelte MiniApps is a collection of useful and engaging tools built with Svelte."
			}
		}, {
			"@type": "Question",
			"name": "How can I use Svelte MiniApps?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "You can use Svelte MiniApps by visiting our website and choosing the tool you want to use."
			}
		}, {
			"@type": "Question",
			"name": "Is Svelte MiniApps installable?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Yes, Svelte MiniApps is a Progressive Web App (PWA) and can be installed on your device for offline use."
			}
		}, {
			"@type": "Question",
			"name": "Is Svelte MiniApps open source?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Yes, Svelte MiniApps is open source. You can view and contribute to the source code on our GitHub repository."
			}
		},
		{
    "@type": "Question",
    "name": "Is the web app installable and how can I install it?",
    "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the web app is installable as it's a Progressive Web App (PWA). On Chrome, click on the three-dot menu in the top-right corner, then click on 'Install App'. On Safari, tap the Share button, then tap 'Add to Home Screen'."
    }
},
 {
        "@type": "Question",
        "name": "Where can I learn more about Svelte?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can learn more about Svelte by visiting the official Svelte website at https://svelte.dev/. They have a comprehensive guide and tutorial that can help you get started with Svelte."
        }
    }]
	}}
	</script>
</svelte:head>

<div class="pb-5 xl:px-10">
	<section class="w-full py-8 md:py-14 lg:py-24">
		<div class="container px-4 md:px-6">
			<div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
				<div class="flex flex-col justify-center space-y-4">
					<header class="space-y-2">
						<h1
							class="my-3 text-3xl font-bold tracking-tighter text-red-700 dark:text-white sm:text-5xl xl:text-6xl/none"
						>
							Welcome
							{#if $page.data.user.data || $page.data.user.session}
								<!-- content here -->
								Back,
								<span class="capitalize text-green-700 dark:text-green-300">
									{$page.data.user.session
										? `${$page.data.user.session.user.name}`
										: `${$page.data.user.data.username}`}!
								</span>
							{/if}
							to...
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
				<!-- <div
					class="mx-auto flex h-[60%] w-[60%] flex-row items-center justify-center md:w-full lg:h-full"
				>
					<Svelte />
					<span
						class="shadow12 hidden -indent-[8vw] text-5xl min-[320px]:block sm:-indent-[12vw] md:hidden"
						>velte
					</span>
				</div> -->
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
							<strong class="text-[#F03E3E]"> Svelte </strong> Mini Apps Gallery
						</h2>
						<p
							class="mb-6 max-w-[900px] text-lg font-normal text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Explore a collection of small, but powerful <strong class="text-[#F03E3E]"
								>Svelte-based</strong
							> web applications that showcase the versatility and simplicity of this modern JavaScript
							framework.
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
						class="mt-10 grid w-full list-inside grid-cols-1 gap-6 space-y-1 text-gray-900 dark:text-gray-400 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
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
					<h2
						class="flex items-center justify-center space-x-2 text-3xl font-bold tracking-tighter sm:text-5xl"
					>
						<span> Why </span>
						<strong class="text-[#F03E3E]"> Svelte</strong>
						<lord-icon
							target="div"
							src="https://cdn.lordicon.com/axteoudt.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="h-12 w-12"
						>
						</lord-icon>
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
					<h2
						class="flex items-center justify-center space-x-2 text-3xl font-bold tracking-tighter sm:text-5xl"
					>
						<strong class="text-[#F03E3E]"> Simplicity </strong>
						<span> and Efficiency </span>

						<lord-icon
							target="div"
							src="https://cdn.lordicon.com/zguybvqs.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="h-16 w-16"
						>
						</lord-icon>
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
					<h2
						class="flex items-center justify-center space-x-2 text-3xl font-bold tracking-tighter sm:text-5xl"
					>
						<span> Versatility and </span>
						<strong class="text-[#F03E3E]"> Scalability </strong>
						<lord-icon
							target="div"
							src="https://cdn.lordicon.com/yxyampao.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="h-16 w-16"
						>
						</lord-icon>
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
				<div class="space-y-2">
					<h2
						class="flex items-center justify-center space-x-2 text-3xl font-bold tracking-tighter sm:text-5xl"
					>
						<strong class="text-[#F03E3E]"> Loved </strong>
						<span> by Developers </span>

						<lord-icon
							target="div"
							src="https://cdn.lordicon.com/jjoolpwc.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="h-16 w-16"
						>
						</lord-icon>
					</h2>
					<p
						class="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Svelte is a breath of fresh air for developers. It offers blazing-fast performance,
						intuitive syntax, and a modular architecture that scales effortlessly. From rapid
						prototyping to complex applications, Svelte empowers you to build exceptional
						experiences.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="container w-full px-4 py-5 md:px-6 md:py-8 lg:py-10">
		<div
			class="mx-auto max-w-screen-xl justify-center bg-white px-4 py-8 dark:bg-gray-900 lg:py-16 xl:rounded-lg"
		>
			<div class="flex flex-col items-center justify-center space-y-4 text-center">
				<div class="space-y-2">
					<h2 class="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
						<strong class="text-[#F03E3E]"> Love </strong> this app?
						<lord-icon
							target="div"
							src="https://cdn.lordicon.com/xyboiuok.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							delay="800"
							state="morph-heart"
							class="h-14 w-14 py-2"
						>
						</lord-icon>
					</h2>
					<p
						class="mb-6 max-w-[900px] text-lg font-normal text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						We're thrilled you're enjoying your Svelte MiniApp experience! Here are some ways to
						stay connected and help us grow:
					</p>
				</div>
			</div>

			<div class="container mx-auto space-y-10 px-4 py-8 text-center">
				<div class="mx-auto grid min-h-[80vh] max-w-[1024px] space-y-3 text-lg lg:text-2xl">
					<div class="block max-w-md rounded-lg p-6">
						<lord-icon
							target="div"
							src="https://cdn.lordicon.com/ercyvufy.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="float-right m-3 h-16 w-16 pt-5 md:h-24 md:w-24"
						>
						</lord-icon>
						<h2 class="mb-4 text-2xl font-bold dark:text-gray-300">Share the app:</h2>
						<p class="mb-4 justify-start text-left text-lg dark:text-gray-400">
							<b class="dark:text-gray-200">Spread the word</b> Casually mention the awesome Svelte MiniApp
							you discovered to your friends and colleagues. Share it on social media (Twitter, TikTok,
							etc.) or bring it up in conversation. Is there a specific task this Svelte MiniApp helped
							you with? Describe how it streamlined your workflow and how it might benefit others. The
							more people who know about this valuable tool, the bigger the Svelte MiniApp community
							can become!
						</p>
					</div>

					<div class="block max-w-md justify-self-end rounded-lg p-6">
						<h2 class="mb-4 text-2xl font-bold dark:text-gray-300">Report a bug:</h2>
						<lord-icon
							target="div"
							src="https://cdn.lordicon.com/rpgflpkp.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="float-left m-3 h-16 w-16 pt-5 md:h-24 md:w-24"
						>
						</lord-icon>
						<p class="mb-4 justify-start text-right text-lg dark:text-gray-400">
							We're committed to making your Svelte MiniApp experience the best it can be. If you
							encounter any issues, please help us fix them by contributing to the project on
							GitHub. This could involve creating a new issue to report the bug, or even fixing the
							bug yourself and submitting a pull request. Not a coding pro? No worries You can still
							be a valuable asset by simply describing the bug you encountered in a GitHub issue.
							The more details you provide (steps to reproduce, screenshots, etc.), the easier it
							will be for developers to identify and fix the problem.
						</p>
					</div>
					<p class="mt-4 text-lg text-gray-800 dark:text-gray-200">
						By sharing the app and reporting bugs, you're actively contributing to its growth and
						development. We appreciate your help!
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
<footer class="w-full bg-black py-5 text-center text-white md:py-10">
	<div class="container px-4 md:px-6">
		<!-- Existing Scroll to Top Button -->
		<button
			class="mt-2 text-red-500 underline hover:no-underline dark:text-green-500"
			on:click={scrollToTop}
		>
			Back to top
		</button>
		<!-- New Content: Made with Love and Installable Message -->
		<div class="mt-2 flex flex-wrap items-center justify-center gap-4">
			<a
				href="https://github.com/Michael-Obele"
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-row items-center justify-between text-green-400 hover:text-green-300"
			>
				Made with
				<Heart size="20" class="mx-2 text-red-500" fill="red" />
				by Michael-Obele
			</a>
			<p class="text-sm text-gray-500">
				FYI: This app is <span class="font-semibold text-red-500">installable</span>.
			</p>
		</div>
	</div>
</footer>
