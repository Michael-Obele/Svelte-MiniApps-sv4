<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import Footer from '$lib/components/footer.svelte';
	import { writable } from 'svelte/store';

	// Make updateAvailable reactive
	export const updateAvailable = writable(false);

	let registration: ServiceWorkerRegistration;

	async function detectSWUpdate() {
		try {
			// Wait for the service worker registration to be ready
			registration = await navigator.serviceWorker.ready;

			// Listen for an update to the service worker
			registration.addEventListener('updatefound', () => {
				const newWorker = registration.installing;

				if (newWorker) {
					newWorker.addEventListener('statechange', () => {
						// Check if the new service worker is installed and ready to take over
						if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
							// Set updateAvailable to true to make it reactive
							updateAvailable.set(true);

							// Prompt the user to reload for the update
							if (confirm('A new version is available. Would you like to reload to update?')) {
								newWorker.postMessage({ type: 'SKIP_WAITING' });
								window.location.reload();
							}
						}
					});
				}
			});
		} catch (error) {
			console.error('Service worker registration failed:', error);
		}
	}

	onMount(() => {
		detectSWUpdate();
	});
	//
	import lottie from 'lottie-web';
	onMount(async () => {
		// Make onMount async
		// Dynamically import @lordicon/element *inside* onMount
		const { defineElement } = await import('@lordicon/element');
		defineElement(lottie.loadAnimation);
	});
	//
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
	<!-- Google tag (gtag.js) -->
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

<Toaster position="top-center" />

<slot class="text-gray-900 dark:text-white" />

<Footer />
