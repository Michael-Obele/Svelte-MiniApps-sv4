import type { PageLoad } from './$types';

const features = [
	{
		title: 'Simple and Focused',
		description:
			'Each mini-app is dedicated to a single functionality, providing a clear and clutter-free user experience.'
	},
	{
		title: 'Standalone and Web-Based',
		description:
			'Unlike traditional libraries or frameworks, Svelte MiniApps are self-contained applications that can be accessed and used directly on the web.'
	},
	{
		title: 'Lightning Fast',
		description:
			'Built with SvelteKit, these mini-apps offer exceptional performance and load times, ensuring a smooth and responsive experience.'
	}
];

const reasons = [
	{
		title: "SvelteKit's Superpowers",
		description:
			"We loved SvelteKit's speed, ease of use, and ability to create standalone apps. It was the perfect platform for building these mini powerhouses."
	},
	{
		title: 'Simplicity is Key',
		description:
			'We believe in clear, focused functionality. No overwhelming interfaces, just the tools you need to tackle your task quickly.'
	},
	{
		title: 'Learning by Doing',
		description:
			'Each mini-app is a mini-lesson in SvelteKit. Beginners can learn by example, while experienced devs can pick up new tricks.'
	}
];

export const load: PageLoad = async () => {
	return {
		features,
		reasons
	};
};
