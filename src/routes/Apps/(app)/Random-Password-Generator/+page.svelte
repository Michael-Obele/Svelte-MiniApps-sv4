<script lang="ts">
	import { Clipboard, RefreshCcw } from 'lucide-svelte';
	import { _generatePassword, _copyToClipboard } from './+page';
	import logo from '$lib/logo/svelte-black.png';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button/index.js';
	import Input from '$lib/components/ui/input/input.svelte';
	import type { UserContext } from '$lib/types';
	import { getContext } from 'svelte';

	const { userUsername, sessionUserName } = getContext<UserContext>('userContext');

	let passwordOptions = {
		length: 12,
		lowercaseLetters: true,
		number: true,
		symbols: true,
		uppercaseLetters: true
	};

	// Destructuring passwordOptions
	let { length, lowercaseLetters, number, symbols, uppercaseLetters } = passwordOptions;

	// Using destructured variables in the function call
	var password = _generatePassword(length, uppercaseLetters, lowercaseLetters, number, symbols);

	$: password = _generatePassword(length, uppercaseLetters, lowercaseLetters, number, symbols);

	// Reactive statement to ensure at least one option is always true
	let falseCount = 0;

	$: {
		falseCount = 0;
		falseCount += !lowercaseLetters ? 1 : 0;
		falseCount += !number ? 1 : 0;
		falseCount += !symbols ? 1 : 0;
		falseCount += !uppercaseLetters ? 1 : 0;
	}

	function generateNewPassword() {
		password = _generatePassword(length, uppercaseLetters, lowercaseLetters, number, symbols);
	}
</script>

<svelte:head>
	<title>Svelte MiniApps - Password Generator</title>
	<meta
		name="description"
		content="Generates random passwords with configurable length and complexity. Secure your accounts with ease."
	/>
	<meta property="og:title" content="Svelte MiniApps - Password Generator" />
	<meta
		property="og:description"
		content="Generates random passwords with configurable length and complexity. Secure your accounts with ease."
	/>
	<meta property="og:url" content="https://svelte-mini-apps.netlify.app/apps/password-generator" />
	<meta
		property="og:image"
		content="https://svelte-mini-apps.netlify.app/static/images/password-generator.png"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Svelte MiniApps - Password Generator - Secure Your Accounts"
	/>
	<meta
		name="twitter:description"
		content="Generate strong, random passwords with ease using the Svelte MiniApps Random Password Generator."
	/>
	<meta
		name="twitter:image"
		content="https://svelte-mini-apps.netlify.app/static/images/password-generator.png"
	/>

	<link rel="canonical" href="https://svelte-mini-apps.netlify.app/apps/password-generator" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="UTF-8" />
	<meta name="robots" content="index, follow" />
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebApplication",
			"name": "Svelte MiniApps - Password Generator",
			"url": "https://svelte-mini-apps.netlify.app/apps/password-generator",
			"description": "Generates random passwords with configurable length and complexity. Secure your accounts with ease."
		}
	</script>
</svelte:head>

<main class="container">
	<div class="mt-10 flex flex-col items-center justify-center space-y-4">
		<h3 class="text-center text-4xl font-bold text-green-500">
			Welcome
			{#if userUsername || sessionUserName}
				{userUsername || sessionUserName}
			{/if}
			!
		</h3>

		<h3 class="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
			Here's Your Secure Password
		</h3>
		<div
			class="min-w-3/4 relative flex max-w-full items-center space-x-10 rounded-lg bg-slate-400 py-4 shadow-md lg:w-1/2 lg:max-w-[85vw]"
		>
			<p class="mx-2 h-fit overflow-hidden text-ellipsis text-nowrap text-lg font-semibold">
				{password}
			</p>
			<div class="flex flex-row px-1">
				<Button
					variant="outline"
					type="button"
					on:click={() => _copyToClipboard(password)}
					class="rounded-md p-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2"
					aria-label="Copy password to clipboard"
				>
					<Clipboard class="h-6 w-6" />
				</Button>
				<Button
					variant="outline"
					type="button"
					on:click={generateNewPassword}
					class="ml-2 rounded-md p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
					aria-label="Generate a new password"
				>
					<RefreshCcw class="h-6 w-6" />
				</Button>
			</div>
		</div>
	</div>

	<h4 class="m-6 mt-12 text-center text-2xl">Choose another Password</h4>
	<div class="mx-auto flex w-[80vw] flex-col items-center">
		<div class="mx-3 flex w-fit flex-col items-center space-x-5 md:flex-row">
			<label class="text-lg font-bold" for="length">Edit length:</label>
			<input
				type="number"
				name="length"
				id="length"
				bind:value={length}
				min="10"
				max="50"
				required
				class="my-4 w-20 rounded-lg border-2 border-gray-300 px-4 py-2 text-center md:my-0"
				placeholder=""
			/>
			<input
				type="range"
				bind:value={length}
				min="10"
				max="50"
				id="length"
				name="length"
				list="markers"
				class="my-4 w-full md:my-0"
			/>

			<ul
				class="m-4 w-48 rounded-lg border border-gray-200 bg-white px-1 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white md:m-0"
			>
				<li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
					<div class="flex items-center ps-3">
						<input
							id="uppercase"
							type="checkbox"
							disabled={falseCount >= 3 && uppercaseLetters == true}
							bind:checked={uppercaseLetters}
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
						/>
						<label
							for="uppercase"
							class="ms-2 w-full py-3 text-sm font-medium capitalize text-gray-900 dark:text-gray-300"
							>uppercase</label
						>
					</div>
				</li>
				<li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
					<div class="flex items-center ps-3">
						<input
							id="lowercase"
							type="checkbox"
							disabled={falseCount >= 3 && lowercaseLetters == true}
							bind:checked={lowercaseLetters}
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
						/>
						<label
							for="lowercase"
							class="ms-2 w-full py-3 text-sm font-medium capitalize text-gray-900 dark:text-gray-300"
							>lowercase</label
						>
					</div>
				</li>
				<li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
					<div class="flex items-center ps-3">
						<input
							id="numbers"
							type="checkbox"
							disabled={falseCount >= 3 && number == true}
							bind:checked={number}
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
						/>
						<label
							for="numbers"
							class="ms-2 w-full py-3 text-sm font-medium capitalize text-gray-900 dark:text-gray-300"
							>numbers</label
						>
					</div>
				</li>
				<li class="w-full rounded-t-lg border-gray-200 dark:border-gray-600">
					<div class="flex items-center ps-3">
						<input
							id="symbols"
							type="checkbox"
							disabled={falseCount >= 3 && symbols == true}
							bind:checked={symbols}
							class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
						/>
						<label
							for="symbols"
							class="ms-2 w-full py-3 text-sm font-medium capitalize text-gray-900 dark:text-gray-300"
							>symbols</label
						>
					</div>
				</li>
			</ul>
		</div>
	</div>
</main>
