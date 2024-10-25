import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { getDbInstance } from '$lib/database';
import type { Prisma } from '@prisma/client';
import type { get } from 'svelte/store';

const db = getDbInstance();
export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	createBalance: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		// const amount = parseFloat(data.get('amount') as string) || 0;
		const amount = parseFloat(String(data.get('amount')).replace(/,/g, ''));

		try {
			// Validate input (add more validation as needed)
			if (!name) {
				return fail(400, { message: 'Name is required' });
			}

			await db.budget.create({
				data: {
					name,
					amount
				}
			});

			return { success: true, message: 'Balance created!' };
		} catch (error) {
			console.error('Error creating balance:', error);
			return fail(500, { message: 'Failed to create balance' });
		}
	},

	getBalances: async () => {
		const balances = await db.budget.findMany();
		return { balances };
	},

	editBalance: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		const amount = parseFloat(data.get('amount') as string);

		try {
			// Validate input
			if (!id || isNaN(amount)) {
				return fail(400, { message: 'Invalid input' });
			}

			await db.budget.update({
				where: { id },
				data: { amount }
			});

			return { success: true, message: 'Balance updated!' };
		} catch (error) {
			console.error('Error updating balance:', error);
			return fail(500, { message: 'Failed to update balance' });
		}
	},

	createExpense: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const amount = parseFloat(data.get('amount') as string);
		const budgetId = data.get('budgetId') as string; // Assuming you'll relate expenses to a balance

		try {
			// Validate input
			if (!name || isNaN(amount) || !budgetId) {
				return fail(400, { message: 'Invalid input' });
			}

			await db.expense.create({
				data: {
					name,
					amount,
					budgetId
				}
			});

			return { success: true, message: 'Expense added!' };
		} catch (error) {
			console.error('Error creating expense:', error);
			return fail(500, { message: 'Failed to add expense' });
		}
	},

	editExpense: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		const name = data.get('name') as string;
		const amount = parseFloat(data.get('amount') as string);

		try {
			// Validate input
			if (!id || !name || isNaN(amount)) {
				return fail(400, { message: 'Invalid input' });
			}

			await db.expense.update({
				where: { id },
				data: { name, amount }
			});

			return { success: true, message: 'Expense updated!' };
		} catch (error) {
			console.error('Error updating expense:', error);
			return fail(500, { message: 'Failed to update expense' });
		}
	}
};
