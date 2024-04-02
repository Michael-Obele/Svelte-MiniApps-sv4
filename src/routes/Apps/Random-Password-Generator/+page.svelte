<script lang="ts">
	import { Clipboard } from 'lucide-svelte';
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

	function generateNewPassword() {
		password = _generatePassword(length, uppercaseLetters, lowercaseLetters, number, symbols);
		console.log(length, uppercaseLetters, lowercaseLetters, number, symbols);
	}

	let options = [
		{ id: 'uppercase', label: 'Uppercase', value: 'uppercaseLetters' },
		{ id: 'lowercase', label: 'Lowercase', value: 'lowercaseLetters' },
		{ id: 'numbers', label: 'Numbers', value: 'number' },
		{ id: 'symbols', label: 'Symbols', value: 'symbols' }
	];
</script>

<h3 class="m-4 text-center text-3xl font-bold underline decoration-green-400">Hi</h3>
<h3 class="m-6 text-center text-2xl">Your Proposed password is</h3>
<div class="mx-auto flex w-fit rounded-lg bg-slate-400 px-4 py-4">
	<p class="mx-5">{password}</p>
	<button on:click={() => _copyToClipboard(password)}>
		<Clipboard />
	</button>
</div>

<h4 class="m-6 text-center text-2xl">Choose another Password</h4>
<div class="flex flex-col items-center space-y-4">
	<h3 class="text-lg font-bold">Edit length:</h3>
	<div class="flex w-fit items-center space-x-5">
		<input
			type="number"
			name="length"
			id="length"
			bind:value={length}
			min="10"
			max="50"
			required
			class="w-20 rounded-lg border-2 border-gray-300 px-4 py-2 text-center"
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
			class="w-full"
		/>

		<datalist id="markers">
			<option value="10" label="10"></option>
			<option value="20" label="20"></option>
			<option value="30" label="30"></option>
			<option value="40" label="40"></option>
			<option value="50" label="50"></option>
		</datalist>

<ul
			class="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
		>
			<li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
				<div class="flex items-center ps-3">
					<input
						id="uppercase"
						type="checkbox"
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
	<button
		type="submit"
		on:click={generateNewPassword}
		class="rounded-lg bg-red-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-red-700"
		>Submit</button
	>
</div>
