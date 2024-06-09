<script lang="ts">
	import InfoBlock from './InfoBlock.svelte';

	import ContentBlock from './ContentBlock.svelte';

	import { page } from '$app/stores';
	import { projects, done } from '$lib/index';
	import Svelte from '$lib/logo/svelte.svelte';
	import { ArrowRight, CheckCircle2, Cookie, Heart } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	//
	let websiteTitle = 'Svelte MiniApps';
	let websiteDescription = 'A collection of useful and engaging tools built with Svelte.';
	let websiteUrl = 'https://svelte-apps.me/';
	let websiteImage = 'https://i.ibb.co/ZhhhnCz/svelte-badge.png';
	let twitterTitle = `${websiteTitle} - Simplify Tasks with Mini Applications`;
	let twitterDescription = `Svelte MiniApps - The go-to collection of interactive tools built with Svelte. Explore and enhance your workflow!`;
	//

	onMount(() => {
		if (!$page.data.hasSeenCookieNotification) {
			toast("Session cookies at work here. Chill, it's all cool!", {
				action: {
					label: 'OK',
					onClick: () => goto('/cookies')
				},
				duration: Number.POSITIVE_INFINITY,
				icon: Cookie
			});
			console.log('Cookie notification is visible');
		}
	});

	// Function to scroll smoothly to the top of the page
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	let userData = $page.data.user.userData;
	let gitUser = $page.data.user.session;
</script>

<svelte:head>
	<title>{websiteTitle}</title>
	<meta name="description" content={websiteDescription} />
	<meta property="og:title" content={websiteTitle} />
	<meta property="og:description" content={websiteDescription} />
	<meta property="og:url" content={websiteUrl} />
	<meta property="og:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />
	<meta name="twitter:title" content={twitterTitle} />
	<meta name="twitter:description" content={twitterDescription} />
	<meta name="google-site-verification" content="10ATAx6uImjU99YXvI91DB-E9h-MAgI6jsUkLfJlRwY" />
	<meta name="twitter:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href={websiteUrl} />
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
							{#if userData || gitUser}
								<!-- content here -->
								Back,
								<span class="capitalize text-green-700 dark:text-green-300">
									{gitUser ? `${gitUser.user.name}` : `${userData.username}`}!
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
				<div
					class="justify-cente mx-auto hidden h-[60%] w-[60%] flex-row items-center md:flex md:w-full lg:h-full"
				>
					<Svelte />
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
				<ContentBlock iconId={''}>
					<div slot="header" class="flex items-center justify-center space-x-2">
						<strong class="text-[#F03E3E]">Svelte</strong>
						<span>MiniApps</span>
					</div>

					<span slot="paragraph">
						Svelte MiniApps are tiny, focused tools built with SvelteKit for lightning speed. These
						mini applications are designed to conquer everyday tasks with ease, providing a powerful
						yet lightweight solution for your daily needs. Whether you're managing tasks, tracking
						habits, or calculating quick figures, Svelte MiniApps can handle it all efficiently.
					</span>
				</ContentBlock>

				<ContentBlock iconId={'axteoudt'}>
					<div slot="header" class="flex items-center justify-center space-x-2">
						<span>Why</span>
						<strong class="text-[#F03E3E]">Svelte MiniApps</strong>
					</div>

					<span slot="paragraph">
						Svelte MiniApps leverage the power of Svelte, a modern, component-based JavaScript
						framework that offers a unique approach to building user interfaces. Unlike traditional
						frameworks that rely on a virtual DOM, Svelte compiles your components into
						highly-optimized JavaScript code that updates the DOM directly, resulting in
						lightning-fast performance and a smooth user experience.
					</span>
				</ContentBlock>

				<ContentBlock iconId={'zguybvqs'}>
					<div slot="header">
						<strong class="text-[#F03E3E]"> Simple </strong>
						<span> and Efficient </span>
					</div>

					<span slot="paragraph">
						Svelte MiniApps inherit Svelte's intuitive and efficient syntax, making them accessible
						to developers of all levels. Svelte provides the foundation and tools for building
						MiniApps, emphasizing simplicity and efficiency to create sophisticated tools with
						minimal code, streamlining development and maintenance.
					</span>
				</ContentBlock>

				<ContentBlock iconId={'yxyampao'}>
					<div slot="header">
						<span> Versatile and </span>
						<strong class="text-[#F03E3E]"> Scalable </strong>
					</div>

					<span slot="paragraph">
						Harnessing Svelte's modular architecture and robust tooling, Svelte MiniApps are
						customized to fulfill various web tool needs, from personal projects to enterprise-level
						solutions. Their versatility and performance ensure smooth operation, making them ideal
						for a wide range of tasks, from everyday utilities to more complex applications.
					</span>
				</ContentBlock>
			</div>
		</div>
	</section>

	<section class="container w-full px-4 py-5 md:px-6 md:py-8 lg:py-10">
		<div
			class="mx-auto max-w-screen-xl justify-center bg-white px-4 py-8 dark:bg-gray-900 lg:py-16 xl:rounded-lg"
		>
			<div class="flex flex-col items-center justify-center space-y-4 text-center">
				<ContentBlock iconId={'xyboiuok'}>
					<div slot="header">
						<strong class="text-[#F03E3E]"> Love </strong> this app?
					</div>

					<span slot="paragraph">
						We're thrilled you're enjoying your Svelte MiniApp experience! Here are some ways to
						stay connected and help us grow:
					</span>
				</ContentBlock>
			</div>

			<div class="container mx-auto space-y-10 px-4 py-8 text-center">
				<div class="mx-auto grid min-h-[80vh] max-w-[1024px] space-y-3 text-lg lg:text-2xl">
					<InfoBlock>
						<lord-icon
							slot="icon"
							target="div"
							src="https://cdn.lordicon.com/ercyvufy.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="float-right m-3 h-16 w-16 pt-5 md:h-24 md:w-24"
						>
						</lord-icon>
						<span slot="header">Share the app:</span>
						<span slot="paragraph">
							<b class="dark:text-gray-200">Spread the word</b> Casually mention the awesome Svelte MiniApp
							you discovered to your friends and colleagues. Share it on social media (Twitter, TikTok,
							etc.) or bring it up in conversation. Is there a specific task this Svelte MiniApp helped
							you with? Describe how it streamlined your workflow and how it might benefit others. The
							more people who know about this valuable tool, the bigger the Svelte MiniApp community
							can become!
						</span>
					</InfoBlock>

					<InfoBlock>
						<lord-icon
							slot="icon"
							target="div"
							src="https://cdn.lordicon.com/rpgflpkp.json"
							colors="primary:red,secondary:green"
							trigger="loop-on-hover"
							class="float-left m-3 h-16 w-16 pt-5 md:h-24 md:w-24"
						>
						</lord-icon>
						<span slot="header">Report a bug:</span>
						<span slot="paragraph">
							We're committed to making your Svelte MiniApp experience the best it can be. If you
							encounter any issues, please help us fix them by contributing to the project on
							GitHub. This could involve creating a new issue to report the bug, or even fixing the
							bug yourself and submitting a pull request. Not a coding pro? No worries You can still
							be a valuable asset by simply describing the bug you encountered in a GitHub issue.
							The more details you provide (steps to reproduce, screenshots, etc.), the easier it
							will be for developers to identify and fix the problem.
						</span>
					</InfoBlock>

					<p class="mt-4 text-lg text-gray-800 dark:text-gray-200">
						Your contribution to our app's growth and development is invaluable. By sharing the app
						and reporting any bugs you encounter, you're actively helping us improve. For more
						information about our mission and how you can get involved, visit our
						<a class="text-[#F03E3E] underline" href="/About"> About page! </a>
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
