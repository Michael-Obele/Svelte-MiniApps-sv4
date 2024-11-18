<script lang="ts">
    import { budgets } from '$lib/utils';

    export let selectedBudgetName: string;
    export let newExpenseName: string;
    export let newExpenseAmount: string;
    export let onAddExpense: () => void;
    export let formatNumberInput: (e: Event) => void;
</script>

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
                on:click={onAddExpense}
                class="text-nowrap rounded bg-blue-500 p-2 text-white hover:bg-blue-700"
            >
                Add Expense
            </button>
        </div>
    {/if}
</div>
