<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';

	// Reactive statement to determine if the current route matches the item
	$: isActive = (item: string) => {
		const routeId = $page.route.id;
		return routeId && (`/${item}` === routeId || routeId.includes(item));
	};

	$: show = false;
	$: home = $page.route.id === '/';

	import { ModeWatcher } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import Svelte from '$lib/logo/svelte.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu, X } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Svelte MiniApps</title>
</svelte:head>

<ModeWatcher />

<!-- Nav Bar -->
<nav class="border-gray-200 bg-white dark:bg-gray-900">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<div class="flex text-2xl font-semibold dark:text-white">
				<span class="m-1 h-6 w-6 self-center whitespace-nowrap">
					<Svelte />
				</span>
				MiniApps
			</div>
		</a>
		<!-- End of Logo -->
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
		<div class="flex place-items-center space-x-5">
			{#if !$page.data.user}
				<a
					href="/Login"
					class="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
					>Login</a
				>
				<a
					href="/Register"
					class="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
					>Register</a
				>
			{/if}

			{#if $page.data.user}
				<a
					href="/Admin"
					class=" hover:text-gray-600 dark:hover:text-red-500 {isActive('Admin')
						? 'text-red-500 dark:text-red-500'
						: 'text-gray-800 dark:text-white'}"
					aria-current={isActive('Admin') ? 'page' : false}
				>
					Profile
				</a>

				<a
					data-sveltekit-reload
					href="/Logout"
					type="submit"
					class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800"
					>Log out</a
				>
			{/if}
		</div>

		<button
			data-collapse-toggle="navbar-default"
			type="button"
			on:click={() => (show = !show)}
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<Menu size={30} />
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
				<X />
				<span class="sr-only">Close menu</span>
			</button>
			<div class="overflow-y-auto py-4">
				<ul class="space-y-2 font-medium">
					<li>
						<a
							href="/"
							class={`group flex items-center rounded-lg p-2 text-gray-900  dark:text-white  ${home ? 'bg-red-700 dark:bg-red-700' : ''} ${home ? 'hover:bg-red-700 hover:dark:bg-red-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'} ${home ? 'text-red-400 dark:text-red-400' : ''}`}
							aria-current={home ? 'page' : false}
						>
							Home
						</a>
					</li>

					{#each ['Apps', 'About'] as routeName}
						<li>
							<a
								href="/{routeName}"
								class={`group flex items-center rounded-lg p-2 text-gray-900  dark:text-white ${isActive(routeName) ? 'bg-red-700 dark:bg-red-700' : ''} ${isActive(routeName) ? 'hover:bg-red-700 hover:dark:bg-red-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'} ${isActive(routeName) ? 'text-red-400 dark:text-red-400' : ''}`}
								aria-current={isActive(routeName) ? 'page' : false}
							>
								{routeName}
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
					<a
						href="/"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-red-500"
						class:bg-red-700={$page.route.id === '/'}
						class:md:bg-transparent={$page.route.id === '/'}
						class:md:dark:text-red-500={$page.route.id === '/'}
						class:md:text-red-700={$page.route.id === '/'}
						aria-current={$page.route.id === '/' ? 'page' : undefined}>Home</a
					>
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

<!-- <h1 class="text-center text-gray-900 dark:text-white">
	{JSON.stringify($page.data.user)}
</h1> -->

<div class="text-gray-900 dark:text-white">
	<slot />
</div>
