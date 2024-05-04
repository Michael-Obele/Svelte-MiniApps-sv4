// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="@auth/sveltekit" />
declare global {
	namespace App {
		interface Locals {
			user: {
				name: string;
				role: string;
			};
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
