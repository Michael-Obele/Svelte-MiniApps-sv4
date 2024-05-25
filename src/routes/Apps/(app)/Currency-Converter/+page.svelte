<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { _currencies } from './+page';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import Input from '$lib/components/ui/input/input.svelte';

	export let form: ActionData & FormActionData;

	interface FormActionData {
		status?: number;
		body?: {
			error?: string;
			rate?: string;
		};
	}

	let amount = '';

	let currencyList = _currencies;

	let open = false;
	let selectedCurrencyFrom = '';

	let open2 = false;
	let selectedCurrencyTo = '';

	$: selectedCurrencyFromValue =
		currencyList.find((f) => f.value === selectedCurrencyFrom)?.value ?? '';

	$: selectedCurrencyFromLabel =
		currencyList.find((f) => f.value === selectedCurrencyFrom)?.label ?? 'Select a currency...';

	$: selectedCurrencyToValue =
		currencyList.find((f) => f.value === selectedCurrencyTo)?.value ?? '';
	$: selectedCurrencyToLabel =
		currencyList.find((f) => f.value === selectedCurrencyTo)?.label ?? 'Select a currency...';

	function closeAndFocusTrigger(triggerId: string) {
		open = false;

		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	function closeAndFocusTriggerTo(triggerId: string) {
		open2 = false;

		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<h1 class="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">Currency Converter</h1>

<form use:enhance method="POST" class="space-y-4">
	<label
		for="currencyFrom"
		class="block text-center text-sm font-medium text-gray-700 dark:text-gray-300"
		>Select Currency to Convert From:</label
	>
	<div class="flex flex-row flex-wrap items-center justify-center space-y-3 sm:space-y-0">
		<Input
			type="text"
			list="currency-from"
			name="currencyFrom"
			id="currencyFrom"
			bind:value={selectedCurrencyFromValue}
			required
			placeholder="Enter currency code (e.g., USD)"
			class="mt-1 h-fit w-fit max-w-fit border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-gray-100 dark:focus:border-green-500 dark:focus:ring-green-500"
		/>

		<datalist id="currency-from">
			{#each currencyList as currency}
				<option label={currency.label} value={currency.value}></option>
			{/each}
		</datalist>
	</div>

	<label
		for="currencyTo"
		class="block text-center text-sm font-medium text-gray-700 dark:text-gray-300"
		>Select Currency to Convert To:</label
	>
	<div class="flex flex-row flex-wrap items-center justify-center space-y-3 sm:space-y-0">
		<Input
			type="text"
			list="currency-to"
			id="currencyTo"
			name="currencyTo"
			required
			bind:value={selectedCurrencyToValue}
			placeholder="Enter currency code (e.g., EUR)"
			class="mt-1 h-fit w-fit max-w-fit border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-gray-100 dark:focus:border-green-500 dark:focus:ring-green-500"
		/>

		<datalist id="currency-to">
			{#each currencyList as currency}
				<option label={currency.label} value={currency.value}></option>
			{/each}
		</datalist>
	</div>
	<div class="flex flex-col items-center justify-center">
		<label for="currencyAmount" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
			>Enter Amount to Convert:</label
		>
		<Input
			type="number"
			id="currencyAmount"
			name="currencyAmount"
			bind:value={amount}
			placeholder="Enter amount"
			required
			class="mt-1 block h-fit w-fit max-w-fit border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-gray-100 dark:focus:border-green-500 dark:focus:ring-green-500"
		/>
	</div>
	<button
		type="submit"
		class="mx-auto mt-4 flex w-fit max-w-md items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:border-red-600 dark:focus:ring-red-500"
		>Convert Currency</button
	>
</form>

{#if form?.status === 200}
	<p class="mt-4 text-center text-lg text-green-600 dark:text-green-400">
		Conversion Successful from <span class="font-semibold">{selectedCurrencyFromValue}</span> to
		<span class="font-semibold">{selectedCurrencyToValue}</span>. Your rate is:
		<span class="font-semibold">{form?.body?.rate}</span>
	</p>
{:else if form?.status === 500}
	<p class="mt-4 text-center text-lg text-red-600 dark:text-red-400">
		An error occurred: {form?.body?.error}
	</p>
{/if}
