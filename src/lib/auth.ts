import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import type { Provider } from '@auth/sveltekit/providers';

const prisma = new PrismaClient();

const providers: Provider[] = [GitHub];

// Export this map of provider details to use in the sign-in page later
export const providerMap = providers.map((provider) => {
	return {
		id: 'id' in provider ? provider.id : undefined,
		name: 'name' in provider ? provider.name : undefined
	};
});

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	trustHost: true,
	 providers: [GitHub],
	pages: {
		signIn: '/signin'
	}
});
