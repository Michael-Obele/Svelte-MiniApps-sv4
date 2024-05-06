<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';

	import { onMount } from 'svelte';

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;
			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					newSW.postMessage({ type: 'skipWaiting' });
					window.location.reload();
				}
			});
		});
	}

	onMount(() => {
		detectSWUpdate();
	});
</script>

<svelte:head>
	<title>Svelte MiniApps</title>
</svelte:head>

<ModeWatcher />

<Navbar />

<Toaster />

<slot class="text-gray-900 dark:text-white" />
