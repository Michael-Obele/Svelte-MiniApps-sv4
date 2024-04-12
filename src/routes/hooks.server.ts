import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');
	console.log('session:', session);

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}
	// If the pathname doesn't match '/', call the resolve function to continue with the normal request handling
	const response = await resolve(event);
	return response;
};
