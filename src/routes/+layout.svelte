<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';

	// Reactive statement to determine if the current route matches the item
	$: isActive = (item: string) => {
		const routeId = $page.route.id;
		return routeId && (`/${item}` === routeId || routeId.includes(item));
	};

	$: show = false;
	import { ModeWatcher } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import Svelte from '$lib/logo/svelte.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<ModeWatcher />

<!-- Nav Bar -->
<nav class="border-gray-200 bg-white dark:bg-gray-900">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<span class="flex self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
				<Svelte classes="w-6 h-6 m-1" /> MiniApps</span
			>
		</a>
		<!-- Toggle Theme -->
		<Button on:click={toggleMode} variant="outline" class="-my-2 md:hidden" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
		<!-- End of Toggle Theme -->

		<button
			data-collapse-toggle="navbar-default"
			type="button"
			on:click={() => (show = !show)}
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-5 w-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>

		<!-- Side Bar -->
		<!-- Backdrop -->

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class:hidden={!show}
			on:click={() => (show = !show)}
			class="fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80"
			aria-label="Close sidebar"
			role="button"
			tabindex="0"
		></div>
		<!-- End of Backdrop -->

		<div
			id="drawer-navigation"
			class:transform-none={show}
			class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
			tabindex="-1"
			aria-labelledby="drawer-navigation-label"
		>
			<h5
				id="drawer-navigation-label"
				class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
			>
				Menu
			</h5>
			<button
				type="button"
				on:click={() => (show = !show)}
				data-drawer-hide="drawer-navigation"
				aria-controls="drawer-navigation"
				class="absolute end-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
			>
				<svg
					aria-hidden="true"
					class="h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path></svg
				>
				<span class="sr-only">Close menu</span>
			</button>
			<div class="overflow-y-auto py-4">
				<ul class="space-y-2 font-medium">
					<li>
						{#if $page.route.id === '/'}
							<a
								href="/"
								class="group flex items-center rounded-lg bg-red-700 p-2 px-3 py-2 text-white dark:text-white dark:hover:bg-gray-700 md:bg-transparent md:p-0"
								aria-current="page"
							>
								<span class="ms-3 flex-1 whitespace-nowrap">Home</span>
							</a>
						{:else}
							<a
								href="/"
								class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>Home</a
							>
						{/if}
					</li>

					{#each ['Apps', 'About'] as item}
						<li>
							<a
								href={'/' + item}
								class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								class:bg-red-700={isActive(item)}
								class:dark:text-red-500={isActive(item)}
								class:text-red-700={isActive(item)}
								aria-current={isActive(item) ? 'page' : undefined}
							>
								{item}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- End of Side Bar -->
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse"
			>
				<li>
					{#if $page.route.id === '/'}
						<a
							href="/"
							class="block rounded bg-red-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-red-700 md:dark:text-red-500"
							aria-current="page">Home</a
						>
					{:else}
						<a
							href="/"
							class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-red-500"
							>Home</a
						>
					{/if}
				</li>

				{#each ['Apps', 'About'] as item}
					<li>
						<a
							href={'/' + item}
							class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-red-500"
							class:bg-red-700={isActive(item)}
							class:md:bg-transparent={isActive(item)}
							class:md:dark:text-red-500={isActive(item)}
							class:md:text-red-700={isActive(item)}
							aria-current={isActive(item) ? 'page' : undefined}
						>
							{item}
						</a>
					</li>
				{/each}
				<Button on:click={toggleMode} variant="outline" class="-my-2" size="icon">
					<Sun
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</ul>
		</div>
	</div>
</nav>

<!-- End of Nav Bar -->

<slot />
