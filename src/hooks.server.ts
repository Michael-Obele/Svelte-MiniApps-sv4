import { sequence } from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://08ab6118216e73fe2743866a40174b41@o4507196497854464.ingest.de.sentry.io/4507196654944336',
	tracesSampleRate: 1
});

export { handle } from '$lib/auth';
export const handleError = Sentry.handleErrorWithSentry();
export const sentryHandle = sequence(Sentry.sentryHandle());
