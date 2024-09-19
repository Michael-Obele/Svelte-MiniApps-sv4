import { handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import { PUBLIC_SENTRY_DSN } from '$env/static/public';
import { browser } from '$app/environment';

// Use import.meta.env.DEV to determine the environment
const isProduction = !import.meta.env.DEV;

Sentry.init({
	dsn: PUBLIC_SENTRY_DSN,
	tracesSampleRate: 1.0,
	environment: isProduction ? 'production' : 'development',

	// This sets the sample rate to be 10%. You may want this to be 100% while
	// in development and sample at a lower rate in production
	replaysSessionSampleRate: 0.1,

	// If the entire session is not sampled, use the below sample rate to sample
	// sessions when an error occurs.
	replaysOnErrorSampleRate: 1.0,

	// If you don't want to use Session Replay, just remove the line below:
	integrations: [replayIntegration(), Sentry.metrics.metricsAggregatorIntegration()]
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();

if (browser) {
	// Generate a unique ID for unauthenticated users. You can use any method you prefer.
	const generateAnonymousUserId = () => {
		// Example: Using UUID v4
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	};

	// Check for an existing user ID, otherwise generate an anonymous one
	const userId = localStorage.getItem('user_id') || generateAnonymousUserId();

	// Store the user ID (anonymous or authenticated)
	localStorage.setItem('user_id', userId);

	Sentry.setUser({ id: userId });

	Sentry.captureMessage('Page visit', {
		level: 'info' // You can adjust the level as needed
	});
}
