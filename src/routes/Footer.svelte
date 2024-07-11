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
	let seenCookie = $page.data.hasSeenCookieNotification;
	if (seenCookie == false) {
		toast("Session cookies at work here. Chill, it's all cool!", {
			action: {
				label: 'OK',
				onClick: () => goto(`${websiteUrl}/cookies`)
			},
			duration: Number.POSITIVE_INFINITY,
			icon: Cookie
		});
	}

	// Function to scroll smoothly to the top of the page
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	let userData = $page.data.user.userData;
	let gitUser = $page.data.user.session;
</script>

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
