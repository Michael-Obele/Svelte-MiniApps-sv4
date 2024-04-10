<script lang="ts">
	import { Clipboard, RefreshCcw } from 'lucide-svelte';
	import { _generatePassword, _copyToClipboard } from './+page';

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
		title: 'Random Password Generator',
		details: 'Generates random passwords with configurable length and complexity.',
		tag: 'security',
		difficulty: 'easy'
	};

	let websiteTitle = `Svelte MiniApps - ${appData.title}`;
	let websiteDescription = appData.details;
	let websiteUrl = `https://svelte-mini-apps.netlify.app/apps/${appData.title.toLowerCase().replace(/\s/g, '-')}`; // Replace with actual URL structure
	let websiteImage = 'https://svelte-mini-apps.netlify.app/apps/password-generator.png'; // Replace with an image of the app

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

	<meta name="twitter:title" content={websiteTitle} />
	<meta name="twitter:description" content={websiteDescription} />
	<meta name="twitter:image" content={websiteImage} />
</svelte:head>

<section class="container">
	<h3 class="m-4 text-center text-3xl font-bold underline decoration-green-400">Hi</h3>
	<h3 class="m-6 text-center text-2xl">Your Proposed password is</h3>
	<div
		class="mx-auto flex h-fit w-fit max-w-[85vw] space-x-4 rounded-lg bg-slate-400 px-2 py-4 text-center"
	>
		<p class="mx-5 w-full overflow-hidden text-ellipsis">{password}</p>
		<button on:click={() => _copyToClipboard(password)}>
			<Clipboard />
		</button>
		<button on:click={generateNewPassword}>
			<RefreshCcw />
		</button>
	</div>

	<h4 class="m-6 text-center text-2xl">Choose another Password</h4>
	<div class="mx-auto flex w-[80vw] flex-col items-center">
		<h3 class="text-lg font-bold">Edit length:</h3>
		<div class="mx-3 flex w-fit flex-col items-center space-x-5 md:flex-row">
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
</section>

<!-- <style>
	* {
		border: 1px solid red;
	}
</style> -->
