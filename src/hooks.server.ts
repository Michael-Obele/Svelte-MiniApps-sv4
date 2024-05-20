import { sequence } from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN } from '$env/static/public';

Sentry.init({
	dsn: PUBLIC_SENTRY_DSN,
	tracesSampleRate: 1
});

export { handle } from '$lib/auth';
export const handleError = Sentry.handleErrorWithSentry();
export const sentryHandle = sequence(Sentry.sentryHandle());
