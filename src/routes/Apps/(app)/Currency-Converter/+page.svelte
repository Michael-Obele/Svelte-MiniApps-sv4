<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { _currencies } from './+page';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Motion } from 'svelte-motion';

	export let form: ActionData & FormActionData;

	interface FormActionData {
		status?: number;
		body?: {
			error?: string;
			rate?: string;
		};
	}
	let currencyList = _currencies;
</script>

<section class="my-8 px-4 text-center">
	<h1 class="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
		Welcome to Currency Converter
	</h1>
	<p class="mb-4 text-lg text-gray-700 dark:text-gray-300">
		Convert currencies effortlessly. Just input the amount and currencies, and get your results
		instantly.
	</p>
</section>

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
			value={form?.currencyFrom ?? ''}
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
			value={form?.currencyTo ?? ''}
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
			value={''}
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
		Conversion successful from <strong>{form?.currencyFrom}</strong> to
		<strong>{form?.currencyTo}</strong>. Amount: <strong>{form?.currencyAmount}</strong><br />
		Your exchange rate is <strong>{form?.body?.rate}</strong>
		{currencyList.find((f) => f.value === form?.currencyTo)?.label}.
	</p>
{:else if form?.status === 500}
	<p class="mt-4 text-center text-lg text-red-600 dark:text-red-400">
		An error occurred: {form?.body?.error}
	</p>
{/if}

<Motion
	let:motion
	initial={{ width: '0%%' }}
	animate={{ width: '100%' }}
	transition={{ duration: 2, ease: 'linear', delay: 0.5 }}
>
	<span class="text-center">This is the text to underline.</span>
	<div use:motion class="h-px w-0 bg-blue-500 underline"></div>
</Motion>
