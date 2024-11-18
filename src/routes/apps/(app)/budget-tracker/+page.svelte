<script lang="ts">
    import InfoBtn from './info.svelte';
    import CreateBudget from './components/CreateBudget.svelte';
    import BudgetList from './components/BudgetList.svelte';
    import AddExpense from './components/AddExpense.svelte';
    import ExpenseList from './components/ExpenseList.svelte';
    import { budgets, budgetCurrency, type Budget, type Expense } from '$lib/utils';
    import { page } from '$app/stores';
    import { siteimage, siteurl } from '$lib';

    // User Data
    const userData = $page.data.user?.userData;

    // State Management
    let syncing = false;
    let syncError: string | null = null;
    let syncSuccess: string | null = null;

    // Budget State
    let budgetName = '';
    let budgetAmount = '';
    let editingBudgetName: string | null = null;
    let editBudgetName = '';
    let editBudgetAmount = '';

    // Expense State
    let selectedBudgetName = '';
    let newExpenseName = '';
    let newExpenseAmount = '';
    let editingExpense: { budgetName: string; expenseIndex: number } | null = null;
    let editExpenseName = '';
    let editExpenseAmount = '';

    // Utility Functions
    function formatNumberInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        const value = target.value.replace(/,/g, '');
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

    // Budget Management
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
                budgets.set($budgets);
            }
            editingBudgetName = null;
        }
    };

    const handleDeleteBudget = (budgetName: string): void => {
        budgets.set($budgets.filter((b) => b.name !== budgetName));
    };

    // Expense Management
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
                budgets.set($budgets);
            }
            editingExpense = null;
        }
    };

    const handleToggleExpenseDone = (budgetName: string, expenseIndex: number): void => {
        const budget = $budgets.find((b) => b.name === budgetName);
        if (budget) {
            budget.expenses[expenseIndex].done = !budget.expenses[expenseIndex].done;
            budgets.set($budgets);
        }
    };

    // Server Sync
    async function handleSync() {
        if (!userData?.id) return;
        
        syncing = true;
        syncError = null;
        syncSuccess = null;

        try {
            const formData = new FormData();
            formData.append('budgets', JSON.stringify($budgets));
            formData.append('userId', userData.id);
            
            const response = await fetch('?/syncBudgets', {
                method: 'POST',
                body: formData
            });
            
            const responseData = await response.json();
            
            if (responseData.type === 'success') {
                const parsedData = JSON.parse(responseData.data);
                budgets.set($budgets);
                syncSuccess = 'Budgets synced successfully!';
            } else {
                syncError = 'Failed to sync budgets';
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error syncing budgets:', error);
                syncError = 'Failed to sync budgets';
            }
        } finally {
            syncing = false;
        }
    }
</script>

<svelte:head>
    <title>Budget Tracker</title>
    <meta name="description" content="Track your budgets and expenses easily with this simple and intuitive budget tracker." />
    <meta property="og:title" content="Budget Tracker" />
    <meta property="og:description" content="Track your budgets and expenses easily with this simple and intuitive budget tracker." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteurl} />
    <meta property="og:image" content={siteimage} />
    <link rel="canonical" href={siteurl} />
</svelte:head>

<div class="container mx-auto p-4 text-white">
    <div class="mb-4 flex items-center justify-between">
        <h2 class="flex items-center gap-2 text-2xl font-bold">
            Budget Tracker
            <InfoBtn />
        </h2>
        {#if userData}
            <div class="flex items-center gap-4">
                <button
                    on:click={handleSync}
                    disabled={syncing}
                    class="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                >
                    {syncing ? 'Syncing...' : 'Sync'}
                </button>
                {#if syncError}
                    <span class="text-red-500">{syncError}</span>
                {:else if syncSuccess}
                    <span class="text-green-500">{syncSuccess}</span>
                {/if}
            </div>
        {/if}
    </div>

    <CreateBudget
        {budgetName}
        {budgetAmount}
        onCreateBudget={handleCreateBudget}
        {formatNumberInput}
    />

    {#if $budgets.length > 0}
        <BudgetList
            {editingBudgetName}
            {editBudgetName}
            {editBudgetAmount}
            onSaveBudget={handleSaveBudget}
            onEditBudget={handleEditBudget}
            onDeleteBudget={handleDeleteBudget}
            {formatNumberInput}
            {calculateRemainingBudget}
        />

        <AddExpense
            {selectedBudgetName}
            {newExpenseName}
            {newExpenseAmount}
            onAddExpense={handleAddExpense}
            {formatNumberInput}
        />

        <ExpenseList
            {selectedBudgetName}
            {editingExpense}
            {editExpenseName}
            {editExpenseAmount}
            onSaveExpense={handleSaveExpense}
            onEditExpense={handleEditExpense}
            onToggleExpenseDone={handleToggleExpenseDone}
            {formatNumberInput}
        />
    {/if}
</div>
