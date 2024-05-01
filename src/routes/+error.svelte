<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Svelte from '$lib/logo/svelte-icon-black.svelte';
</script>

<svelte:head>
	<title>Oops! Something went wrong.</title>
</svelte:head>

<section class="flex h-screen flex-col items-center justify-center dark:bg-gray-900">
	<h3 class="mb-12 animate-pulse text-4xl font-bold text-red-500 dark:text-red-400">
		Code: {$page.status}
	</h3>
	<div class="mb-8 flex justify-center">
		<div
			class="flex h-fit w-fit flex-row items-center rounded-full stroke-red-400 dark:stroke-red-500"
		>
			<Svelte />
			<span
				class="shadow12 -indent-[5vw] text-2xl font-bold leading-loose tracking-wider text-red-500 dark:text-black sm:text-4xl md:-indent-[5vw] md:text-5xl"
				>omething's off!</span
			>
		</div>
	</div>

	<h1 class="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">Uh oh!</h1>

	<p class="mx-8 mb-8 text-center text-4xl text-gray-600 dark:text-gray-400">
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

<style>
	.shadow12 {
		color: rgba(255, 255, 255, 1);
		text-shadow:
			2px 2px 0px rgb(161, 35, 129),
			2px -2px 0px rgb(161, 35, 129),
			-2px 2px 0px rgb(161, 35, 129),
			-2px -2px 0px rgb(161, 35, 129),
			2px 0px 0px rgb(161, 35, 129),
			0px 2px 0px rgb(161, 35, 129),
			-2px 0px 0px rgb(161, 35, 129),
			0px -2px 0px rgb(161, 35, 129);
	}
</style>
