<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import { _currencies } from './+page';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Separator } from '$lib/components/ui/breadcrumb';
	import Input from '$lib/components/ui/input/input.svelte';

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
			name="currencyFrom"
			id="currencyFrom"
			bind:value={selectedCurrencyFromValue}
			required
			placeholder="Enter currency code (e.g., USD)"
			class="mt-1 h-fit w-fit max-w-fit border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-gray-100 dark:focus:border-green-500 dark:focus:ring-green-500"
		/>

		<div class="mx-5 h-fit">
			<Popover.Root bind:open let:ids>
				<Popover.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						role="combobox"
						aria-expanded={open}
						class="w-[200px] justify-between"
					>
						{selectedCurrencyFromLabel}
						<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</Popover.Trigger>
				<Popover.Content class="w-[200px] p-0">
					<Command.Root>
						<Command.Input placeholder="Search currency..." />
						<Command.Empty>No currency found.</Command.Empty>
						<ScrollArea class="h-72 w-48 rounded-md border">
							<Command.Group>
								<div class="p-4">
									{#each currencyList as currency}
										<Command.Item
											value={currency.value}
											onSelect={(currentValue) => {
												selectedCurrencyFrom = currentValue;
												closeAndFocusTrigger(ids.trigger);
											}}
										>
											<Check
												class={cn(
													'mr-2 h-4 w-4',
													selectedCurrencyFrom !== currency.value && 'text-transparent'
												)}
											/>
											{currency.label}
										</Command.Item>
									{/each}
								</div>
							</Command.Group>
						</ScrollArea>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		</div>
	</div>

	<label
		for="currencyTo"
		class="block text-center text-sm font-medium text-gray-700 dark:text-gray-300"
		>Select Currency to Convert To:</label
	>
	<div class="flex flex-row flex-wrap items-center justify-center space-y-3 sm:space-y-0">
		<Input
			type="text"
			id="currencyTo"
			name="currencyTo"
			required
			bind:value={selectedCurrencyToValue}
			placeholder="Enter currency code (e.g., EUR)"
			class="mt-1 h-fit w-fit max-w-fit border border-gray-300 p-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-gray-100 dark:focus:border-green-500 dark:focus:ring-green-500"
		/>

		<div class="mx-5 h-fit">
			<Popover.Root bind:open2 let:ids>
				<Popover.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						role="combobox"
						aria-expanded={open2}
						class="w-[200px] justify-between"
					>
						{selectedCurrencyToLabel}
						<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</Popover.Trigger>
				<Popover.Content class="w-[200px] p-0">
					<Command.Root>
						<Command.Input placeholder="Search currency..." />
						<Command.Empty>No currency found.</Command.Empty>
						<ScrollArea class="h-72 w-48 rounded-md border">
							<Command.Group>
								<div class="p-4">
									{#each currencyList as currency}
										<Command.Item
											value={currency.value}
											onSelect={(currentValue) => {
												selectedCurrencyTo = currentValue;
												closeAndFocusTriggerTo(ids.trigger);
											}}
										>
											<Check
												class={cn(
													'mr-2 h-4 w-4',
													selectedCurrencyTo !== currency.value && 'text-transparent'
												)}
											/>
											{currency.label}
										</Command.Item>
									{/each}
								</div>
							</Command.Group>
						</ScrollArea>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		</div>
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
		Conversion Successful from <span class="font-semibold">{selectedCurrencyFromLabel}</span> to
		<span class="font-semibold">{selectedCurrencyToLabel}</span>. Your rate is:
		<span class="font-semibold">{form.body.rate}</span>.
	</p>
{:else if form?.status === 500}
	<p class="mt-4 text-center text-lg text-red-600 dark:text-red-400">
		An error occurred: {form?.body.error}
	</p>
{/if}
