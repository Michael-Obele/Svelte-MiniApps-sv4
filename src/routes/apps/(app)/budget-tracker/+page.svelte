<script lang="ts">
	import InfoBtn from './info.svelte';

	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { budgets, budgetCurrency, type Budget, type Expense } from '$lib/utils';
	import Button from '$lib/components/ui/button/button.svelte';

	let newExpenseName: string = '';
	let newExpenseAmount: string = '';
	let selectedBudgetName: string = '';

	const handleAddExpense = (): void => {
		if (newExpenseName && Number(newExpenseAmount) > 0 && selectedBudgetName) {
			const budgetToUpdate = $budgets.find((b) => b.name === selectedBudgetName);
			if (budgetToUpdate) {
				budgetToUpdate.expenses.push({ name: newExpenseName, amount: newExpenseAmount });
				budgets.set($budgets);
				newExpenseName = '';
				newExpenseAmount = '';
			}
		}
	};

	const handleToggleExpenseDone = (budgetName: string, expenseIndex: number): void => {
		const budget = $budgets.find((b) => b.name === budgetName);
		if (budget) {
			budget.expenses[expenseIndex].done = !budget.expenses[expenseIndex].done;
			budgets.set($budgets);
		}
	};

	let budgetName: string = '';
	let budgetAmount: string = '';

	const handleCreateBudget = (): void => {
		const existingBudget = $budgets.find((b) => b.name.toLowerCase() === budgetName.toLowerCase());
		if (existingBudget) {
			existingBudget.amount = budgetAmount;
			existingBudget.expenses = [];
		} else {
			$budgets.push({ name: budgetName, amount: budgetAmount, expenses: [] });
		}
		budgets.set($budgets);
		budgetName = '';
		budgetAmount = '';
	};

	let editingBudgetName: string | null = null;
	let editBudgetName: string = '';
	let editBudgetAmount: string = '';

	const handleEditBudget = (budget: Budget): void => {
		editingBudgetName = budget.name;
		editBudgetName = budget.name;
		editBudgetAmount = budget.amount;
	};

	const handleSaveBudget = (): void => {
		if (editingBudgetName) {
			const budget = $budgets.find((b) => b.name === editingBudgetName);
			if (budget) {
				budget.name = editBudgetName;
				budget.amount = editBudgetAmount;
			}
			budgets.set($budgets);
			editingBudgetName = null;
		}
	};

	let editingExpense: { budgetName: string; expenseIndex: number } | null = null;
	let editExpenseName: string = '';
	let editExpenseAmount: string = '';

	const handleEditExpense = (budgetName: string, expenseIndex: number, expense: Expense): void => {
		editingExpense = { budgetName, expenseIndex };
		editExpenseName = expense.name;
		editExpenseAmount = expense.amount;
	};

	const handleSaveExpense = (): void => {
		if (editingExpense) {
			const { budgetName, expenseIndex } = editingExpense;
			const budget = $budgets.find((b) => b.name === budgetName);
			if (budget) {
				budget.expenses[expenseIndex] = { name: editExpenseName, amount: editExpenseAmount };
			}
			budgets.set($budgets);
			editingExpense = null;
		}
	};

	function formatNumberInput(e: Event): void {
		const target = e.target as HTMLInputElement;
		let value = target.value.replace(/,/g, '');
		target.value = Number(value).toLocaleString();
	}

	const calculateRemainingBudget = (budget: Budget): string => {
		const budgetAmount = Number(budget.amount.replace(/,/g, ''));
		const totalExpenses = budget.expenses.reduce(
			(total, e) => total + Number(e.amount.replace(/,/g, '')),
			0
		);
		return (budgetAmount - totalExpenses).toLocaleString();
	};

	const handleDeleteBudget = (budgetName: string): void => {
		budgets.set($budgets.filter((b) => b.name !== budgetName));
	};
</script>

<div class="container mx-auto p-4 text-white">
	<h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
		Budget Tracker
		<InfoBtn />
	</h2>

	<div class="mb-4 rounded-md bg-green-500 p-4 shadow-md">
		<h3 class="mb-2 text-lg font-bold">Create Budget</h3>
		<div class="flex flex-col gap-4">
			<input
				type="text"
				bind:value={budgetName}
				placeholder="Name"
				class="mb-2 w-full appearance-none rounded border border-white bg-black p-2"
			/>
			<input
				type="text"
				bind:value={budgetAmount}
				pattern="\d+(?:,\d+)*"
				on:change={formatNumberInput}
				placeholder="Initial Amount"
				class="mb-2 w-full appearance-none rounded border border-white bg-black p-2"
			/>

			<select
				name="currency"
				id="currency"
				bind:value={$budgetCurrency}
				class="mb-2 w-full appearance-none rounded border border-white bg-black p-2 text-center"
			>
				<option value="$">USD: $</option>
				<option value="€">EUR: €</option>
				<option value="£">GBP: £</option>
				<option value="₦">NGN: ₦</option>
				<option value="¥">CNY: ¥</option>
			</select>

			<button
				on:click={handleCreateBudget}
				class="rounded bg-blue-500 p-2 text-white hover:bg-blue-700">Create Budget</button
			>
		</div>
	</div>

	{#if $budgets.length > 0}
		<div class="mb-4 rounded-md bg-green-500 p-4 shadow-md">
			<h3 class="mb-2 text-lg font-bold">Your Budgets</h3>
			{#each $budgets as budget}
				<div class="mb-4 border-t border-gray-600 pt-4">
					{#if editingBudgetName === budget.name}
						<form class="flex flex-col gap-2" on:submit|preventDefault={handleSaveBudget}>
							<input
								type="text"
								bind:value={editBudgetName}
								class="mb-2 w-full appearance-none rounded border border-gray-300 p-2"
							/>
							<input
								type="text"
								bind:value={editBudgetAmount}
								pattern="\d+(?:,\d+)*"
								on:change={formatNumberInput}
								class="mb-2 w-full appearance-none rounded border border-gray-300 p-2"
							/>
							<div class="flex gap-2">
								<button type="submit" class="rounded bg-blue-500 p-2 text-white hover:bg-blue-700"
									>Save</button
								>
								<button
									type="button"
									on:click={() => (editingBudgetName = null)}
									class="rounded bg-gray-500 p-2 text-white hover:bg-gray-700">Cancel</button
								>
							</div>
						</form>
					{:else}
						<h4 class="text-lg font-bold">{budget.name}</h4>
						<p>
							Initial Amount: <span class="font-semibold"
								>{$budgetCurrency}{Number(budget.amount.replace(/,/g, '')).toLocaleString()}</span
							>
						</p>
						<p>
							Remaining: <span class="font-semibold"
								>{$budgetCurrency}{calculateRemainingBudget(budget)}</span
							>
						</p>
						<div class="flex gap-2">
							<Button
								on:click={() => handleEditBudget(budget)}
								class="bg-blue-500 text-white hover:bg-blue-700">Edit</Button
							>
							<AlertDialog.Root>
								<AlertDialog.Trigger class={buttonVariants({ variant: 'destructive' })}
									>Delete</AlertDialog.Trigger
								>
								<AlertDialog.Content>
									<AlertDialog.Header>
										<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
										<AlertDialog.Description>
											This action cannot be undone. This will permanently delete your account and
											remove your data from our servers.
										</AlertDialog.Description>
									</AlertDialog.Header>
									<AlertDialog.Footer>
										<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
										<AlertDialog.Action
											class={buttonVariants({ variant: 'destructive' })}
											on:click={() => handleDeleteBudget(budget.name)}>Continue</AlertDialog.Action
										>
									</AlertDialog.Footer>
								</AlertDialog.Content>
							</AlertDialog.Root>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mb-4 rounded-md bg-green-500 p-4 shadow-md">
			<h3 class="mb-2 text-lg font-bold">Add Expense</h3>
			<div class="mb-4">
				<label for="budget-select" class="mb-2 block font-bold text-gray-700">Select Budget:</label>
				<select
					id="budget-select"
					bind:value={selectedBudgetName}
					placeholder="Select a budget"
					class="mb-2 w-full appearance-none rounded border border-white bg-black p-2"
				>
					<option value={null} disabled>Select a budget</option>
					{#each $budgets as budget}
						<option value={budget.name}>{budget.name}</option>
					{/each}
				</select>
			</div>

			{#if selectedBudgetName}
				<div class="my-2 flex flex-row items-center space-x-2">
					<input
						type="text"
						bind:value={newExpenseName}
						placeholder="Expense name"
						class="w-full appearance-none rounded border border-white bg-black p-2"
					/>
					<input
						type="text"
						bind:value={newExpenseAmount}
						pattern="\d+(?:,\d+)*"
						on:change={formatNumberInput}
						placeholder="Amount"
						class="w-24 appearance-none rounded border border-white bg-black p-2"
					/>
					<button
						on:click={() => handleAddExpense()}
						class="text-nowrap rounded bg-blue-500 p-2 text-white hover:bg-blue-700"
						>Add Expense</button
					>
				</div>
			{/if}
		</div>

		<div class="mt-4">
			<h4 class="text-lg font-bold">Expenses for {selectedBudgetName}:</h4>
			{#if $budgets.length > 0}
				{@const budget = $budgets.find((b) => b.name === selectedBudgetName)}
				{#if budget && budget.expenses?.length > 0}
					<ul class="mt-4 list-inside list-disc space-y-4">
						{#each $budgets.find((b) => b.name === selectedBudgetName)?.expenses ?? [] as expense, expenseIndex}
							{#if editingExpense?.budgetName === selectedBudgetName && editingExpense?.expenseIndex === expenseIndex}
								<form
									class="flex flex-col items-center gap-2"
									on:submit|preventDefault={handleSaveExpense}
								>
									<input
										type="text"
										bind:value={editExpenseName}
										class="w-full appearance-none rounded border border-gray-300 p-2"
									/>
									<input
										type="text"
										bind:value={editExpenseAmount}
										pattern="\d+(?:,\d+)*"
										on:change={formatNumberInput}
										class="w-full appearance-none rounded border border-gray-300 p-2"
									/>
									<div class="flex gap-2">
										<Button type="submit" class="rounded bg-blue-500 text-white hover:bg-blue-700"
											>Save</Button
										>
										<Button
											type="button"
											on:click={() => (editingExpense = null)}
											class="rounded bg-gray-500 text-white hover:bg-gray-700">Cancel</Button
										>
									</div>
								</form>
							{:else}
								<li>
									<span class={expense.done ? 'line-through opacity-50' : ''}>
										<span class="text-lg font-medium text-gray-900 dark:text-white">
											{expense.name}:
										</span>
										<span class="text-lg font-medium text-gray-700 dark:text-gray-200">
											{$budgetCurrency}{Number(expense.amount).toLocaleString()}
										</span>
									</span>
									<Button
										on:click={() => handleEditExpense(selectedBudgetName, expenseIndex, expense)}
										class="mx-3 bg-blue-500 p-1 px-4 text-white hover:bg-blue-700">Edit</Button
									>
									<Button
										on:click={() => handleToggleExpenseDone(selectedBudgetName, expenseIndex)}
										class="bg-green-500 p-1 px-4 text-white hover:bg-green-700"
									>
										{expense.done ? 'Undo' : 'Done'}
									</Button>
								</li>
								<hr class="border-gray-200 dark:border-gray-700" />
							{/if}
						{/each}
					</ul>
				{:else}
					<p>No expenses added yet for this budget.</p>
				{/if}
			{/if}
		</div>
	{/if}
</div>
