<script lang="ts">
	import logo from '$lib/logo/svelte-black.png';
	let appData = {
		title: 'GitHub Contribution Tracker',
		details:
			'Visualize your GitHub contributions in a clear and engaging way. Track streaks, identify patterns, and stay motivated.',
		tag: 'developer tools',
		difficulty: 'medium'
	};

	let websiteTitle = `Svelte MiniApps - ${appData.title}`;
	let websiteDescription = appData.details;
	let websiteUrl = `https://svelte-mini-apps.netlify.app/apps/${appData.title.toLowerCase().replace(/\s/g, '-')}`; // Replace with actual URL structure
	let websiteImage = logo;

	let twitterTitle = `${websiteTitle} - Track Your GitHub Journey`;
	let twitterDescription = `Gain insights into your GitHub activity with the Svelte MiniApps Contribution Tracker. Visualize progress and stay engaged!`;
</script>

<svelte:head>
	<title>{websiteTitle}</title>
	<meta name="description" content={websiteDescription} />
	<meta property="og:title" content={websiteTitle} />
	<meta property="og:description" content={websiteDescription} />
	<meta property="og:url" content={websiteUrl} />
	<meta property="og:image" content={websiteImage} />

	<meta name="twitter:title" content={twitterTitle} />
	<meta name="twitter:description" content={twitterDescription} />
	<meta name="twitter:image" content={websiteImage} />
</svelte:head>

<slot />
