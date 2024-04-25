<script lang="ts">
	import { Clipboard, RefreshCcw } from 'lucide-svelte';
	import { _generatePassword, _copyToClipboard } from './+page';
	import logo from '$lib/logo/svelte-black.png';
	import { page } from '$app/stores';

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

	let appData = {
		title: 'Password Generator',
		details: 'Generates random passwords with configurable length and complexity.',
		tag: 'security',
		difficulty: 'easy'
	};

	let websiteTitle = `Svelte MiniApps - ${appData.title}`;
	let websiteDescription = appData.details;
	let websiteUrl = `https://svelte-mini-apps.netlify.app/apps/${appData.title.toLowerCase().replace(/\s/g, '-')}`;
	let websiteImage = logo;

	let twitterTitle = `${websiteTitle} - Secure Your Accounts`;
	let twitterDescription = `Generate strong, random passwords with ease using the Svelte MiniApps Random Password Generator.`;
</script>

<svelte:head>
	<title>{websiteTitle}</title>
	<meta name="description" content={websiteDescription} />
	<meta property="og:title" content={websiteTitle} />
	<meta property="og:description" content={websiteDescription} />
	<meta property="og:url" content={websiteUrl} />
	<meta property="og:image" content={websiteImage} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={twitterTitle} />
	<meta name="twitter:description" content={twitterDescription} />
	<meta name="twitter:image" content={websiteImage} />

	<link rel="canonical" href={websiteUrl} />
</svelte:head>

<main class="container">
	<div class="mt-10 flex flex-col items-center justify-center space-y-4">
		<h3 class="text-center text-4xl font-bold text-green-500">
			Welcome
			{#if $page.data.user}
				{$page.data.user.username}
			{/if}
			!
		</h3>

		<h3 class="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
			Here's Your Secure Password
		</h3>
		<div
			class="flex w-1/2 max-w-[85vw] items-center justify-center rounded-lg bg-slate-400 px-4 py-4 shadow-md"
		>
			<p class="flex-grow overflow-hidden text-ellipsis text-lg font-semibold">{password}</p>
			<button
				on:click={() => _copyToClipboard(password)}
				class="rounded-md bg-green-500 p-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
				aria-label="Copy password to clipboard"
			>
				<Clipboard class="h-6 w-6" />
			</button>
			<button
				on:click={generateNewPassword}
				class="ml-2 rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
				aria-label="Generate a new password"
			>
				<RefreshCcw class="h-6 w-6" />
			</button>
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
