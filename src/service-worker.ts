/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import * as Sentry from '@sentry/browser';
import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}
	event.waitUntil(addFilesToCache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}
	event.waitUntil(deleteOldCaches().then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(url.pathname);
			return cachedResponse ?? fetchAndCache(event.request, cache);
		}

		try {
			const response = await fetch(event.request);
			if (response.status === 200) cache.put(event.request, response.clone());
			return response;
		} catch {
			return (await cache.match(event.request)) ?? Promise.reject('No cached response');
		}
	}

	async function fetchAndCache(request: Request, cache: Cache) {
		try {
			const response = await fetch(request);
			if (response.status === 200) cache.put(request, response.clone());
			return response;
		} catch (error) {
			return (await cache.match(request)) ?? Promise.reject(error);
		}
	}

	event.respondWith(respond());
});

self.addEventListener('message', (event) => {
	if (event.data?.type === 'skipWaiting') {
		self.skipWaiting();
	}
});

Sentry.init({
	dsn: 'https://08ab6118216e73fe2743866a40174b41@o4507196497854464.ingest.de.sentry.io/4507196654944336',
	transport: Sentry.makeBrowserOfflineTransport(Sentry.makeFetchTransport)
});
