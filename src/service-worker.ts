/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;
import * as Sentry from '@sentry/browser';

import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

// Include the appsAssets in the ASSETS array
const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
];

// Add LordIcon URL to the ASSETS array 
const LORDICON_URL = 'https://cdn.lordicon.com/lordicon.js';
ASSETS.push(LORDICON_URL); 

//install

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
		// Wait for the cache to be populated before activating
		self.skipWaiting(); // This is important!
	}
	event.waitUntil(addFilesToCache());
	// Tell the service worker to activate as soon as possible
	self.skipWaiting(); 
});


//active

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
	// Now it's safe to claim clients
	event.waitUntil(self.clients.claim()); 
});

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		 // Cache LordIcon.js specifically
		 if (url.href === LORDICON_URL) {
			try {
			  const response = await fetch(event.request);
			  if (response.status === 200) {
				cache.put(event.request, response.clone());
			  }
			  return response;
			} catch (err) {
			  const cachedResponse = await cache.match(event.request);
			  if (cachedResponse) return cachedResponse;
			  throw err; // Re-throw if not in cache
			}
		  } 
	  

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}
	event.respondWith(respond());
});

self.addEventListener('message', (event) => {
	if (event.data && event.data.type == 'skipWaiting') {
		self.skipWaiting();
	}
});

self.addEventListener('install', (event) => {
	// forces a service worker to activate immediately
	self.skipWaiting();
	self.clients.claim();
});

Sentry.init({
	dsn: 'https://08ab6118216e73fe2743866a40174b41@o4507196497854464.ingest.de.sentry.io/4507196654944336',
	transport: Sentry.makeBrowserOfflineTransport(Sentry.makeFetchTransport)
});


