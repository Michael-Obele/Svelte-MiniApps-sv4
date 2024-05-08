import { handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';

// Use import.meta.env.DEV to determine the environment
const isProduction = !import.meta.env.DEV;

Sentry.init({
	dsn: 'https://08ab6118216e73fe2743866a40174b41@o4507196497854464.ingest.de.sentry.io/4507196654944336',
	tracesSampleRate: 1.0,
	environment: isProduction ? 'production' : 'development',

	// This sets the sample rate to be 10%. You may want this to be 100% while
	// in development and sample at a lower rate in production
	replaysSessionSampleRate: 0.1,

	// If the entire session is not sampled, use the below sample rate to sample
	// sessions when an error occurs.
	replaysOnErrorSampleRate: 1.0,

	// If you don't want to use Session Replay, just remove the line below:
	integrations: [replayIntegration()]
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
