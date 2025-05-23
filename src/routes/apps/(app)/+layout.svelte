<script lang="ts">
	import { afterUpdate, beforeUpdate, onMount, setContext } from 'svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	import { page } from '$app/stores';
	import { CodeXml } from 'lucide-svelte';
	$: route = $page.url.pathname.split('/');
	$: routeId = route[2];
	$: currentRoute = route[route.length - 1];

	let userUsername = $page.data.user.userData?.username;
	let sessionUserName = $page.data.user.session?.user?.name;
	setContext('userContext', { userUsername, sessionUserName });
	let link =
		'https://github.com/Michael-Obele/Svelte-MiniApps-sv4/tree/master/src/routes/apps/(app)';
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
	<meta property="og:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />
	<meta property="og:url" content="https://old.svelte-apps.me/Apps" />
	<meta property="og:url" content="https://old.svelte-apps.me/Apps" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Apps Page | Svelte MiniApps" />
	<meta
		name="twitter:description"
		content="Explore our collection of unique Svelte MiniApps. Discover new tools, innovative applications, and see how we're enhancing the Svelte ecosystem."
	/>
	<meta name="twitter:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />
	<link rel="canonical" href="https://old.svelte-apps.me/Apps" />
</svelte:head>

<div class="relative mb-5 mt-2 flex place-items-center justify-center">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/apps">Apps</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				{#if routeId == currentRoute}
					<Breadcrumb.Page class="capitalize">{routeId}</Breadcrumb.Page>
				{:else}
					<Breadcrumb.Link class="capitalize" href="/apps/{routeId.toLowerCase()}"
						>{routeId.toLowerCase()}</Breadcrumb.Link
					>
				{/if}
				<Badge variant="secondary" href="{link}/{routeId.toLowerCase()}" target="_blank" class="">
					<span class="hidden sm:inline"> View Source Code </span>
					<CodeXml size="16" class="sm:mx-1" />
				</Badge>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
</div>

<div class="relative mt-6 min-h-screen">
	<slot />
</div>
