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

export const load: PageLoad = async () => {
	return {
		features
	};
};
