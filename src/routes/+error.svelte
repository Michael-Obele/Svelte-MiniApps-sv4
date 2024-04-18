<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Svelte from '$lib/logo/svelte.svelte';
</script>

<svelte:head>
	<title>Oops! Something went wrong.</title>
</svelte:head>

<section class="flex h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
	<h3 class="mb-12 animate-pulse text-4xl font-bold text-red-500 dark:text-red-400">
		Code: {$page.status}
	</h3>
	<div class="mb-8 flex justify-center">
		<div class="h-20 w-20 rounded-full">
			<Svelte />
		</div>
	</div>

	<h1 class="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">Uh oh!</h1>

	<p class="mx-8 mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
		{#if $page.error?.message}
			{#if $page.status === 404}
				<span class="font-bold text-red-500">Page</span>
			{/if}
			{$page.error?.message}
			{#if $page.status === 405}
				<span class="mt-3 font-semibold text-blue-500">
					<br />
					"It looks like you're trying to do something that isn't allowed here.
					<br />
					Let's head back home, shall we?"
				</span>
			{/if}
		{:else}
			We're having some trouble at the moment. Please try again later.
		{/if}
	</p>

	<div class="flex justify-center">
		<button
			class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900"
			on:click={() => goto('/')}
		>
			Go home
		</button>
	</div>
</section>
