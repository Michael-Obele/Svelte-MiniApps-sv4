import { done } from '$lib';

// Your domain
// const site = 'https://svelte-mini-apps.netlify.app';
const site = 'https://svelte-apps.me';

// Populate this with all the slugs you wish to include
const staticPages: { url: string; priority?: number; changefreq?: string }[] = [
	{ url: '/', priority: 0.8, changefreq: 'daily' }, // Root route
	{ url: '/About', priority: 0.5, changefreq: 'weekly' }, // About page
	{ url: '/Apps', priority: 0.8, changefreq: 'weekly' } // Apps page
	// Add more static routes here
];

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }): Promise<Response> {
	let appNames = done;

	const dynamicRoutes = await Promise.all(
		appNames.map(async (name) => ({
			url: `/Apps/${slugify(name)}`,
			lastmod: await getLastModified(slugify(name)), // Await the result
			priority: 0.8,
			changefreq: 'weekly'
		}))
	);

	// Combine static and dynamic routes
	const allPages = [...staticPages, ...dynamicRoutes];

	const body = generateSitemap(allPages);

	const response = new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});

	return response;
}

const generateSitemap = (
	pages: { url: string; lastmod?: string; priority?: number; changefreq?: string }[]
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
		.map(
			(page) => `
  <url>
	<loc>${site}${page.url}</loc>
	<lastmod>${page.lastmod || getCurrentDate()}</lastmod>
	<changefreq>${page.changefreq || 'daily'}</changefreq>
	<priority>${page.priority || 0.5}</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;

const getCurrentDate = () => {
	const now = new Date();
	return now.toISOString().split('T')[0];
};

/**
 * Fetches the last modified date of a specific app file from a GitHub repository.
 *
 * @param {string} name - The name of the app file to check.
 * @returns {Promise<string>} - A promise that resolves to the last modified date in 'YYYY-MM-DD' format.
 */
const getLastModified = async (name: string): Promise<string> => {
	// Define the owner and repository name
	const owner = 'Michael-Obele';
	const repo = 'Svelte-MiniApps';
	// Access the environment variable directly
	const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

	const headers = {
		Authorization: `token ${accessToken}`
	};

	try {
		const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1&path=src/routes/Apps/(app)/${name}`;

		const response = await fetch(url, { headers });

		if (!response.ok) {
			throw new Error(`Error fetching commit data: ${response.status} ${response.statusText}`);
		}

		const commits = await response.json();

		if (commits.length > 0) {
			const latestCommitDate = commits[0].commit.author.date;
			return new Date(latestCommitDate).toISOString().split('T')[0];
		} else {
			// Handle cases where there are no commits (e.g., new app)
			console.warn(`No commits found for app: ${name}`);
			return getCurrentDate();
		}
	} catch (error) {
		console.error(`Error getting last modified date for ${name}:`, error);
		return getCurrentDate(); // Fallback to current date if error
	}
};

/**
 * Converts a string to kebab-case by replacing all whitespace characters with hyphens.
 *
 * @param name - The input string to be transformed.
 * @returns The transformed string with hyphens instead of whitespace.
 */
function slugify(name: string): string {
	return name.replace(/\s+/g, '-');
}
