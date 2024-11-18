import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils';
import { join } from 'path';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'obele',
				project: 'javascript-sveltekit'
			}
		}),
		sveltekit(),
		partytownVite({
			dest: join(__dirname, 'static', '~partytown')
		})
	],
	server: {
		port: 5179,
		strictPort: false
	}
});
