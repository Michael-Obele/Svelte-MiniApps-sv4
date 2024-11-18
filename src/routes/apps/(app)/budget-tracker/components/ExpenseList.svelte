<script lang="ts">
    import { budgets, budgetCurrency, type Expense } from '$lib/utils';
    import Button from '$lib/components/ui/button/button.svelte';

    export let selectedBudgetName: string;
    export let editingExpense: { budgetName: string; expenseIndex: number } | null;
    export let editExpenseName: string;
    export let editExpenseAmount: string;
    export let onSaveExpense: () => void;
    export let onEditExpense: (budgetName: string, expenseIndex: number, expense: Expense) => void;
    export let onToggleExpenseDone: (budgetName: string, expenseIndex: number) => void;
    export let formatNumberInput: (e: Event) => void;
</script>

<div class="mt-4">
    <h4 class="text-lg font-bold">Expenses for {selectedBudgetName}:</h4>
    {#if $budgets.length > 0}
        {@const budget = $budgets.find((b) => b.name === selectedBudgetName)}
        {#if budget && budget.expenses?.length > 0}
            <ul class="mt-4 list-inside list-disc space-y-4">
                {#each budget.expenses as expense, expenseIndex}
                    {#if editingExpense?.budgetName === selectedBudgetName && editingExpense?.expenseIndex === expenseIndex}
                        <form class="flex flex-col items-center gap-2" on:submit|preventDefault={onSaveExpense}>
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
                                <Button type="submit" class="rounded bg-blue-500 text-white hover:bg-blue-700">
                                    Save
                                </Button>
                                <Button
                                    type="button"
                                    on:click={() => (editingExpense = null)}
                                    class="rounded bg-gray-500 text-white hover:bg-gray-700"
                                >
                                    Cancel
                                </Button>
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
                                on:click={() => onEditExpense(selectedBudgetName, expenseIndex, expense)}
                                class="mx-3 bg-blue-500 p-1 px-4 text-white hover:bg-blue-700"
                            >
                                Edit
                            </Button>
                            <Button
                                on:click={() => onToggleExpenseDone(selectedBudgetName, expenseIndex)}
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
