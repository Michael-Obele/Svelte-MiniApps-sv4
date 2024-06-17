<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Svelte from '$lib/logo/svelte-icon-black.svelte';
	import NF from '$lib/logo/404.svelte';
	import Bad from '$lib/logo/Bad.svelte';
	import Bug from '$lib/logo/Bug.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<svelte:head>
	<title>Oops! Something went wrong.</title>
</svelte:head>

<section class="flex h-screen flex-col items-center justify-center">
	<h3 class="mb-12 animate-pulse text-4xl font-bold text-red-500 dark:text-red-400">
		Code: {$page.status}
	</h3>
	<div class="mb-8 flex justify-center">
		<div class="flex size-60 flex-row items-center sm:size-96">
			{#if $page.status == 404}
				<NF />
			{:else}
				<Bad />
			{/if}
		</div>
	</div>

	<h1 class="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">Uh oh!</h1>

	<p class="mx-8 mb-8 text-center text-4xl text-gray-600 dark:text-gray-400">
		{#if $page.error?.message}
			{#if $page.status === 404}
				<span class="font-bold text-red-500">Page Not Found! </span>
			{:else if $page.status === 405}
				<span class="font-semibold text-blue-500">
					"It looks like you're trying to do something that isn't allowed here.
					<br />Let's head back home and try it there, shall we?"
				</span>
			{:else}
				<span class="font-bold text-red-500">
					{$page.error.message}
				</span>
				<br />
				We're having some trouble at the moment. Please try again.
			{/if}
		{/if}
	</p>

	<div class="flex justify-center">
		<Button
			class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900"
			on:click={() => goto('/')}
		>
			Go home
		</Button>
	</div>
</section>
