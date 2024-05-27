<script lang="ts">
	import { afterUpdate, setContext } from 'svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { page } from '$app/stores';
	$: route = $page.url.pathname.split('/');
	$: routeId = route[2];
	$: currentRoute = route[route.length - 1];

	let userUsername = $page.data.user.data?.username;
	let sessionUserName = $page.data.user.session?.user?.name;
	setContext('userContext', { userUsername, sessionUserName });
</script>

<svelte:head>
	<title>Apps Page | Svelte MiniApps</title>
	<meta
		name="description"
		content="Explore our collection of unique Svelte MiniApps. Discover new tools, innovative applications, and see how we're enhancing the Svelte ecosystem."
	/>
	<meta
		name="keywords"
		content="Svelte, MiniApps, Mini Apps, Apps, Tools, Applications, Ecosystem, Innovative, Unique"
	/>
	<meta property="og:title" content="Apps Page | Svelte MiniApps" />
	<meta
		property="og:description"
		content="Explore our collection of unique Svelte MiniApps. Discover new tools, innovative applications, and see how we're enhancing the Svelte ecosystem."
	/>
	<meta property="og:image" content="%sveltekit.assets%/svelte-badge.png" />
	<meta property="og:url" content="https://svelte-mini-apps.netlify.app/Apps" />
	<meta property="og:url" content="https://svelte-mini-apps.netlify.app/Apps" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Apps Page | Svelte MiniApps" />
	<meta
		name="twitter:description"
		content="Explore our collection of unique Svelte MiniApps. Discover new tools, innovative applications, and see how we're enhancing the Svelte ecosystem."
	/>
	<meta name="twitter:image" content="%sveltekit.assets%/svelte-badge.png" />
	<link rel="canonical" href="https://svelte-mini-apps.netlify.app/Apps" />
</svelte:head>

<div class="mb-5 mt-2 flex place-items-center justify-center">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/Apps">Apps</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			{#if routeId == currentRoute}
				<Breadcrumb.Item>
					<Breadcrumb.Page>{routeId}</Breadcrumb.Page>
				</Breadcrumb.Item>
			{:else}
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/Apps/{routeId}">{routeId}</Breadcrumb.Link>
				</Breadcrumb.Item>
			{/if}
		</Breadcrumb.List>
	</Breadcrumb.Root>
</div>
<div class="">
	<slot />
</div>
