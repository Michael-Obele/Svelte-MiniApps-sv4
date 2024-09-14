<script lang="ts">
	import { page } from '$app/stores';

	const errorMessages: Record<string, string> = {
		OAuthAccountNotLinked:
			'An account already exists with the same email address but different sign-in method. Please sign in using your existing account provider.'
	};

	$: error = $page.url.searchParams.get('error') || '';
	$: errorMessage =
		errorMessages[error as keyof typeof errorMessages] ||
		'An error occurred during authentication. Please try again.';
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8"
>
	<div class="w-full max-w-md space-y-8">
		<div>
			<img
				class="mx-auto h-12 w-auto"
				src="https://i.ibb.co/ZhhhnCz/svelte-badge.png"
				alt="Svelte Mini Apps Logo"
			/>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
				Oops! Something went wrong.
			</h2>
		</div>
		<div class="overflow-hidden bg-red-500 shadow-md dark:bg-red-900 sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h3 class="text-lg font-medium leading-6 text-white dark:text-gray-300">
					Authentication Error
				</h3>
				<p class="mt-1 max-w-xl text-sm text-white dark:text-gray-400">
					{errorMessage}
				</p>
			</div>
			<div class="bg-red-600 px-4 py-3 dark:bg-red-800 sm:flex sm:flex-row-reverse sm:px-6">
				<a
					href="/"
					class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-green-800 sm:ml-3 sm:w-auto sm:text-sm"
				>
					Back to Home
				</a>
				{#if error === 'OAuthAccountNotLinked'}
					<a
						href="/Login"
						class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-blue-800 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
					>
						Sign in with a different provider
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
