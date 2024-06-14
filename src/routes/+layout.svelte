<script lang="ts">
	import { page } from '$app/stores';
	import { toast } from 'svelte-sonner';
	import { Download, Heart } from 'lucide-svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import { afterUpdate, onMount } from 'svelte';
	import { goto, invalidate, invalidateAll, replaceState } from '$app/navigation';

	let updateAvailable = false;

	async function detectSWUpdate() {
		try {
			const registration = await navigator.serviceWorker.ready;

			registration.addEventListener('updatefound', () => {
				const newSW = registration.installing;
				newSW?.addEventListener('statechange', () => {
					if (newSW.state === 'installed') {
						// Instead of reloading, set updateAvailable to true
						updateAvailable = true;
					}
				});
			});
		} catch (error) {
			console.error('Service worker registration failed:', error);
		}
	}

	function updateApp() {
		navigator.serviceWorker.getRegistration().then((registration) => {
			// Assuming the new service worker is waiting
			registration?.waiting?.postMessage({ type: 'skipWaiting' });
			window.location.reload();
		});
	}

	if (updateAvailable) {
		toast('New App version available!!', {
			action: {
				label: 'Update now',
				onClick: () => updateApp()
			},
			duration: Number.POSITIVE_INFINITY,
			icon: Download
		});
	}

	onMount(() => {
		detectSWUpdate();
	});

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://cdn.lordicon.com/lordicon.js';
		document.body.appendChild(script);
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

			goto(newUrl, { replaceState: true });
		}
	});
</script>

<svelte:head>
	<title>Svelte MiniApps</title>

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

<ModeWatcher />

<Navbar />

<Toaster />

<slot class="text-gray-900 dark:text-white" />
