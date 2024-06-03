<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, SubmitFunction } from './$types';
	import { _currencies } from './+page';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Motion } from 'svelte-motion';
	import { toast } from 'svelte-sonner';
	import { page } from '$app/stores';

	let userData = $page.data.user?.userData;
	let gitData = $page.data.user?.session?.user;

	export let form: ActionData & FormActionData;
	let isLoading = false;
	interface FormActionData {
		status?: number;
		body?: {
			error?: string;
			rate?: string;
		};
	}
	let currencyList = _currencies;

	// Start form submission process.
	const handleSubmit: SubmitFunction = () => {
		isLoading = true; // Indicate submission is in progress.
		toast.loading('Submitting...'); // Show loading toast.
		if (form) {
			form.status = 0;
		}

		return async ({ update, result }) => {
			if (result.type === 'failure') {
				toast.dismiss(); // Dismiss all toasts.
				toast.error('Error'); // Show error toast.
			} else {
				toast.dismiss(); // Dismiss all toasts.
				toast.success('Success', {
					action: {
						label: 'OK',
						onClick: () => toast.dismiss()
					}
				}); // Show success toast.
			}

			await update(); // Wait for update to finish.
			isLoading = false; // Submission process ends.
		};
	};

	function getCurrencyLabel(currencyTo: string) {
		const foundCurrency = currencyList.find((f) => f.value === currencyTo);
		return foundCurrency ? foundCurrency.label : currencyTo; // Return label if found, else return the currency code
	}
</script>

<section class="my-8 px-4 text-center">
	<h1 class="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
		Welcome
		<span class="text-green-600 dark:text-green-500">
			{gitData?.name || userData?.username || ''}
		</span>
		to the Currency Converter
	</h1>
	<p class="mb-4 text-lg text-gray-700 dark:text-gray-300">
		Convert currencies effortlessly. Just input the amount and currencies, and get your results
		instantly.
	</p>
</section>

<form use:enhance={handleSubmit} method="POST" class="space-y-4">
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
	>
		{isLoading ? 'Converting...' : 'Convert Currency'}</button
	>
</form>

<div class:hidden={isLoading}>
	{#if form?.status === 200}
		<p class="mt-4 text-center text-lg text-green-600 dark:text-green-400">
			Conversion successful from <strong>{form?.currencyFrom}</strong> to
			<strong>{form?.currencyTo}</strong>. Amount: <strong>{form?.currencyAmount}</strong><br />
			Your exchange rate is <strong>{form?.body?.rate}</strong>
			{getCurrencyLabel(form?.currencyTo)}.
		</p>
	{:else if form?.status === 500}
		<p class="mt-4 text-center text-lg text-red-600 dark:text-red-400">
			An error occurred: {form?.body?.error}
		</p>
	{/if}
</div>

<!-- <Motion
	let:motion
	initial={{ backgroundSize: '0% 2px', backgroundPosition: 'bottom center' }}
	animate={{ backgroundSize: '100% 2px', backgroundPosition: 'bottom center' }}
	transition={{ duration: 2, ease: 'linear', delay: 0.5 }}
>
	<span use:motion class="underline1">This is the text to underline.</span>
</Motion> -->
<!-- <div class="mt-12">
	This is a <span class="underline1">sentence</span>. I would like
	<span class="underline1">some words to have</span>
	longer <span class="left underline1">underline1s</span> than others. I would
	<span class="big center-close underline1">also like</span>
	to be able to change the <span class="small right underline1">position</span> of the
	<span class="big underline1">underline1</span>(to
	<span class="far underline1">be centered under the word, for example</span>)
</div> -->

<style>
	.underline1 {
		background-image: linear-gradient(#5fca66 0 0);
		background-position: bottom center; /*Adjust the background-position to move the line*/
		background-size: 50% 2px; /*Adjust the background size to control length and height*/
		background-repeat: no-repeat;
		padding-bottom: 2px; /* this can also control the position */
	}

	.small {
		background-size: 50% 1px;
	}

	.left {
		background-position: bottom left;
	}

	.center-close {
		background-position: bottom 5px center;
		background-image: linear-gradient(red 0 0);
	}

	.right {
		background-position: bottom right;
	}

	.big {
		background-size: 100% 3px;
	}
</style>
