<script lang="ts">
	import Logo from '$lib/logo/svelte.svelte';
	import { signIn } from '@auth/sveltekit/client';
	import { SignIn } from '@auth/sveltekit/components';
	import { Github } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<div class="container flex min-h-screen flex-col items-center space-y-10">
	<div class="my-12 flex flex-row space-x-3">
		<div class="h-10 w-10">
			<Logo />
		</div>
		<h2 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
			<span>Mini Apps</span>
		</h2>
	</div>
	<h3 class="my-6 text-2xl font-medium text-gray-600 dark:text-gray-300">Welcome to Mini Apps!</h3>
	<div class="leading-loose">
		<p class="mb-4 text-left text-gray-600 dark:text-gray-300">
			Discover a collection of mini-applications designed to boost your productivity and creativity.
		</p>
		<p class="mb-4 text-center text-gray-600 dark:text-gray-300">Sign in to start exploring!</p>
		<SignIn
			provider="github"
			signInPage="signin"
			class="mx-auto mb-2 w-fit items-center justify-center rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:hover:bg-gray-900 dark:focus:ring-gray-500"
		>
			<div slot="submitButton" class="flex items-center pt-1">
				<Github class="mx-2" />
				Sign in with Github
			</div>
		</SignIn>
	</div>
</div>
