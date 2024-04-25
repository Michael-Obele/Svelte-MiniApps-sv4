<script lang="ts">
	import logo from '$lib/logo/svelte-black.png';
	const appData = {
		title: 'GitHub Contribution Tracker',
		details:
			'Visualize your GitHub contributions in a clear and engaging way. Track streaks, identify patterns, and stay motivated.',
		tag: 'developer tools',
		difficulty: 'medium'
	};

	const websiteTitle = `Svelte MiniApps - ${appData.title}`;
	const websiteDescription = appData.details;
	const websiteUrl = `https://svelte-mini-apps.netlify.app/apps/${appData.title.toLowerCase().replace(/\s/g, '-')}`; // Replace with actual URL structure
	const websiteImage = logo;

	const twitterTitle = `${websiteTitle} - Track Your GitHub Journey`;
	const twitterDescription = `Gain insights into your GitHub activity with the Svelte MiniApps Contribution Tracker. Visualize progress and stay engaged!`;
</script>

<svelte:head>
	<title>{websiteTitle}</title>
	<meta name="description" content={websiteDescription} />
	<meta property="og:title" content={websiteTitle} />
	<meta property="og:description" content={websiteDescription} />
	<meta property="og:url" content={websiteUrl} />
	<meta property="og:image" content={websiteImage} />
	<link rel="canonical" href={websiteUrl} />
	<meta name="twitter:title" content={twitterTitle} />
	<meta name="keywords" content="GitHub, Contribution Tracker, Developer Tools, Svelte Apps" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content={twitterDescription} />
	<meta name="twitter:image" content={websiteImage} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="UTF-8" />
	<meta name="robots" content="index, follow" />
	<script type="application/ld+json">
{{
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "{websiteTitle}",
    "url": "{websiteUrl}",
    "description": "{websiteDescription}"
}}
	</script>
</svelte:head>

<slot />
