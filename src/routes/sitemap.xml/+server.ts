import { done } from '$lib';

// Your domain
const site = 'https://svelte-miniapps.netlify.app';

// Populate this with all the slugs you wish to include
const staticPages: { url: string; priority?: number; changefreq?: string }[] = [
	{ url: '/', priority: 1.0, changefreq: 'daily' }, // Root route
	{ url: '/About', priority: 0.8, changefreq: 'weekly' }, // About page
	{ url: '/Apps', priority: 0.5, changefreq: 'weekly' } // Apps page
	// Add more static routes here
];

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }): Promise<Response> {
	// Assuming 'done' is an array of app names you want to include dynamically
	let appNames = done;

	// Generate URLs for dynamic routes
	const dynamicRoutes = appNames.map((name) => ({
		url: `/Apps/${name.replace(/\s+/g, '-')}`,
		lastmod: getLastModified(name), // Replace with your actual function to get the last modified date
		priority: 0.5,
		changefreq: 'weekly'
	}));

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

// Replace with your actual function to get the last modified date
const getLastModified = (name: string) => {
	// Fetch the last modified date from your database or file system
	// This is just a placeholder
	return getCurrentDate();
};
