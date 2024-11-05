<script lang="ts">
	import { page } from '$app/stores';
	import { toast } from 'svelte-sonner';
	import { Download } from 'lucide-svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import Footer from '$lib/components/footer.svelte';

	let updateAvailable = false;

	let registration: ServiceWorkerRegistration; // Store the registration globally

	async function detectSWUpdate() {
		try {
			registration = await navigator.serviceWorker.ready;

			registration.addEventListener('updatefound', () => {
				// We'll prompt the user as soon as 'updatefound' is fired
				if (registration.installing) {
					updateAvailable = true;
				}
			});
		} catch (error) {
			console.error('Service worker registration failed:', error);
		}
	}

	onMount(() => {
		detectSWUpdate();
	});

	onMount(() => {
		setTimeout(() => {
			const script = document.createElement('script');
			script.src = 'https://cdn.lordicon.com/lordicon.js';
			document.body.appendChild(script);
		}, 3000);
	});

	$: userData = $page.data.user.userData;
</script>

<svelte:head>
	<title>Svelte MiniApps</title>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>

	{@html '<script>' + partytownSnippet() + '</script>'}

	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-3QH4C3V22M"
	></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-3QH4C3V22M');
	</script>
</svelte:head>

<ModeWatcher />

<Navbar {userData} />

<Toaster closeButton position="top-center" />

<slot class="text-gray-900 dark:text-white" />

<Footer />
