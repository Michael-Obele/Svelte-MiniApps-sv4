<script lang="ts">
	import { enhance } from '$app/forms';
	import { persisted } from 'svelte-persisted-store';
	import { get } from 'svelte/store';
	import { budgets, type Budget } from '$lib/utils';

	// Access the budgets store
	let currentBudgets = get(budgets);

	let newExpenseName = '';
	let newExpenseAmount = 0;
	let newBudgetName = '';
	let newBudgetAmount = 0;

	let selectedBudgetName: string | null = null; // Store the selected budget's name

	const handleAddExpense = () => {
		if (newExpenseName && newExpenseAmount > 0 && selectedBudgetName) {
			// Find the selected budget
			const budgetToUpdate = $budgets.find((budget) => budget.name === selectedBudgetName);

			if (budgetToUpdate) {
				// Update the budget with the new expense
				budgetToUpdate.expenses = [
					...budgetToUpdate.expenses,
					{ name: newExpenseName, amount: newExpenseAmount }
				];

				// Update the budgets store
				budgets.set($budgets);

				// Reset input fields
				newExpenseName = '';
				newExpenseAmount = 0;
			}
		}
	};

	let budgetName = '';
	let budgetAmount = 0;

	const handleCreateBudget = () => {
		const existingBudgetIndex = $budgets.findIndex(
			(budget) => budget.name.toLowerCase() === budgetName.toLowerCase()
		);

		if (existingBudgetIndex !== -1) {
			// Budget with this name already exists, update it
			budgets.update((currentBudgets) => {
				currentBudgets[existingBudgetIndex] = {
					...currentBudgets[existingBudgetIndex],
					amount: budgetAmount, // Update the amount
					expenses: [] // You might want to handle expenses differently here
				};
				return currentBudgets;
			});
		} else {
			// Budget name is unique, create a new budget
			budgets.update((currentBudgets) => [
				...currentBudgets,
				{ name: budgetName, amount: budgetAmount, expenses: [] }
			]);
		}
	};

	let editingBudgetName: string | null = null; // Store the name of the budget being edited
	let editBudgetName: string = '';
	let editBudgetAmount: number = 0;

	const handleEditBudget = (budget: Budget) => {
		editingBudgetName = budget.name; // Store the name for editing
		editBudgetName = budget.name;
		editBudgetAmount = budget.amount;
	};

	const handleSaveBudget = () => {
		if (editingBudgetName) {
			budgets.update((currentBudgets) => {
				const budgetIndex = currentBudgets.findIndex((b) => b.name === editingBudgetName);
				if (budgetIndex !== -1) {
					currentBudgets[budgetIndex] = {
						...currentBudgets[budgetIndex],
						name: editBudgetName, // Update the name
						amount: editBudgetAmount
					};
				}
				return currentBudgets;
			});
			editingBudgetName = null;
			editBudgetName = '';
			editBudgetAmount = 0;
		}
	};

	const handleCancelEdit = () => {
		editBudgetName = '';
		editBudgetAmount = 0;
	};

	let editingExpense: { budgetName: string; expenseIndex: number } | null = null;
	let editExpenseName: string = '';
	let editExpenseAmount: number = 0;

	const handleEditExpense = (budgetName: string, expenseIndex: number, expense: Expense) => {
		editingExpense = { budgetName, expenseIndex };
		editExpenseName = expense.name;
		editExpenseAmount = expense.amount;
	};

	const handleSaveExpense = () => {
		if (editingExpense) {
			const { budgetName, expenseIndex } = editingExpense;
			budgets.update((currentBudgets) => {
				const budgetIndex = currentBudgets.findIndex((b) => b.name === budgetName);
				if (budgetIndex !== -1) {
					currentBudgets[budgetIndex].expenses[expenseIndex] = {
						name: editExpenseName,
						amount: editExpenseAmount
					};
				}
				return currentBudgets;
			});
			editingExpense = null;
			editExpenseName = '';
			editExpenseAmount = 0;
		}
	};

	const handleCancelExpenseEdit = () => {
		editingExpense = null;
		editExpenseName = '';
		editExpenseAmount = 0;
	};
</script>

<div class="container mx-auto p-4 text-white">
	<h2 class="mb-4 text-2xl font-bold">Budget Tracker</h2>

	<div class="mb-4 rounded-md bg-green-500 p-4 shadow-md">
		<h3 class="mb-2 text-lg font-bold">Create Budget</h3>
		<div class="flex flex-col gap-4">
			<div>
				<label for="budget-name" class="mb-2 block font-bold text-gray-700">Name:</label>
				<input
					type="text"
					id="budget-name"
					name="name"
					bind:value={budgetName}
					required
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
				/>
			</div>
			<div>
				<label for="budget-amount" class="mb-2 block font-bold text-gray-700">Initial Amount:</label
				>
				<input
					type="number"
					id="budget-amount"
					name="amount"
					bind:value={budgetAmount}
					min="0"
					step="0.01"
					required
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
				/>
			</div>
			<button
				on:click={() => handleCreateBudget()}
				class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
			>
				Create Budget
			</button>
		</div>
	</div>

	{#if $budgets.length > 0}
		<div class="mb-4 rounded-md bg-green-500 p-4 shadow-md">
			<h3 class="mb-2 text-lg font-bold">Your Budgets</h3>
			{#each $budgets as budget, i}
				<div class="mb-4 border-t border-gray-600 pt-4">
					{#if editingBudgetName === budget.name}
						<!-- {/* Edit form */} -->
						<form class="flex flex-col gap-2" on:submit|preventDefault={handleSaveBudget}>
							<input
								type="text"
								bind:value={editBudgetName}
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
							/>
							<input
								type="number"
								bind:value={editBudgetAmount}
								class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
							/>
							<div class="flex gap-2">
								<button
									type="submit"
									class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
								>
									Save
								</button>
								<button
									type="button"
									on:click={handleCancelEdit}
									class="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
								>
									Cancel
								</button>
							</div>
						</form>
					{:else}
						<!-- {/* Display budget details */} -->
						<h4 class="text-lg font-bold">{budget.name}</h4>
						<p>
							Initial Amount:
							<span class="font-semibold">${budget.amount.toFixed(2)}</span>
						</p>

						<p>
							Remaining:
							<span class="font-semibold">
								${(
									budget.amount - budget.expenses.reduce((total, e) => total + e.amount, 0)
								).toFixed(2)}
							</span>
						</p>

						<button
							on:click={() => handleEditBudget(budget)}
							class="focus:shadow-outline mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
						>
							Edit
						</button>
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
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
				>
					<option value={null} disabled>Select a budget</option>
					{#each $budgets as budget}
						<option value={budget.name}>{budget.name}</option>
					{/each}
				</select>
			</div>

			{#if selectedBudgetName}
				<form class="mt-2 flex items-center" on:submit|preventDefault={handleAddExpense}>
					<input
						type="text"
						bind:value={newExpenseName}
						placeholder="Expense name"
						class="focus:shadow-outline mr-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
					/>
					<input
						type="number"
						bind:value={newExpenseAmount}
						placeholder="Amount"
						class="focus:shadow-outline mr-2 w-24 appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
					/>
					<button
						type="submit"
						class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
					>
						Add Expense
					</button>
				</form>
			{/if}
		</div>

		<div class="mt-4">
			<h4 class="text-lg font-bold">Expenses for {selectedBudgetName}:</h4>
			{#if $budgets.find((b) => b.name === selectedBudgetName)?.expenses.length > 0}
				<ul class="list-inside list-disc space-y-4">
					{#each $budgets.find((b) => b.name === selectedBudgetName)?.expenses ?? [] as expense, expenseIndex}
						{#if editingExpense?.budgetName === selectedBudgetName && editingExpense?.expenseIndex === expenseIndex}
							<!-- {/* Edit form for expense */} -->
							<form class="flex flex-col gap-2" on:submit|preventDefault={handleSaveExpense}>
								<input
									type="text"
									bind:value={editExpenseName}
									class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
								/>
								<input
									type="number"
									bind:value={editExpenseAmount}
									class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-white shadow focus:outline-none"
								/>
								<div class="flex gap-2">
									<button
										type="submit"
										class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
									>
										Save
									</button>
									<button
										type="button"
										on:click={handleCancelExpenseEdit}
										class="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
									>
										Cancel
									</button>
								</div>
							</form>
						{:else}
							<!-- {/* Display expense details */} -->
							<li>
								{expense.name}: ${expense.amount.toFixed(2)}
								<button
									on:click={() => handleEditExpense(selectedBudgetName, expenseIndex, expense)}
									class="focus:shadow-outline ml-2 rounded bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 focus:outline-none"
								>
									Edit
								</button>
							</li>
						{/if}
					{/each}
				</ul>
			{:else}
				<p>No expenses added yet.</p>
			{/if}
		</div>
	{/if}
</div>
