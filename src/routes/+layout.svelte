<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { partytownSnippet } from '@builder.io/partytown/integration';

	import { afterUpdate, onMount } from 'svelte';

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

	afterUpdate(() => {
		const url = $page.url.href;

		if (url.includes('reload')) {
			// Split the URL into base and query string
			const [baseUrl, queryString] = url.split('?');

			// Split the query string into individual parameters
			const queryParams = queryString.split('&');

			// Filter out the 'reload' parameter
			const filteredParams = queryParams.filter((param) => !param.startsWith('reload'));

			// Reconstruct the query string without the 'reload' parameter
			const newQueryString = filteredParams.join('&');

			// Construct a new URL without the 'reload' parameter
			const newUrl = baseUrl + newQueryString;

			// Reload the page without the 'reload' parameter
			window.location.replace(newUrl);
		}
	});
</script>

<svelte:head>
	<title>Svelte MiniApps</title>
	{@html '<script>' + partytownSnippet() + '</script>'}
	<script src="https://cdn.lordicon.com/lordicon.js"></script>
</svelte:head>

<ModeWatcher />

<Navbar />

<Toaster />

<slot class="text-gray-900 dark:text-white" />
