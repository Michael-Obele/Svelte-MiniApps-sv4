import { sequence } from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN } from '$env/static/public';

// Use import.meta.env.DEV to determine the environment
const isProduction = !import.meta.env.DEV;

Sentry.init({
	dsn: PUBLIC_SENTRY_DSN,
	tracesSampleRate: 1,
	environment: isProduction ? 'production' : 'development',
	integrations: [Sentry.metrics.metricsAggregatorIntegration()]
});

export { handle } from '$lib/auth';
export const handleError = Sentry.handleErrorWithSentry();
export const sentryHandle = sequence(Sentry.sentryHandle());
