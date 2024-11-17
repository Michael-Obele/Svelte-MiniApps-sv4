import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/database';


export const actions: Actions = {
	syncBudgets: async ({ request }) => {
		const data = await request.formData();
		const budgets = data.get('budgets') as string;
		const userId = data.get('userId') as string;

		console.log('Received budgets:', budgets);
		console.log('Received userId:', userId);

		if (!userId) {
			return fail(401, { message: 'Unauthorized' });
		}

		if (!budgets) {
			return fail(400, { message: 'No budget data provided' });
		}

		// Validate JSON
		let parsedBudgets;
		try {
			parsedBudgets = JSON.parse(budgets);
		} catch {
			return fail(400, { message: 'Invalid budget data format' });
		}

		// First check if user has budgets
		const existingBudgets = await db.userBudgets.findUnique({
			where: { userId }
		});

		let userBudgets;
		if (!existingBudgets) {
			// Create new budget entry
			userBudgets = await db.userBudgets
				.create({
					data: {
						userId,
						budgetData: budgets
					}
				})
				.catch((error) => {
					console.error('Error creating budgets:', error);
					return null;
				});

			if (!userBudgets) {
				return fail(500, { message: 'Failed to create budgets' });
			}
			console.log('Created new budgets:', userBudgets);
		} else {
			// Update existing budgets
			userBudgets = await db.userBudgets
				.update({
					where: { userId },
					data: { budgetData: budgets }
				})
				.catch((error) => {
					console.error('Error updating budgets:', error);
					return null;
				});

			if (!userBudgets) {
				return fail(500, { message: 'Failed to update budgets' });
			}
			console.log('Updated budgets:', userBudgets);
		}

		// Validate final data
		if (!userBudgets?.budgetData) {
			return fail(500, { message: 'Invalid budget data after operation' });
		}

		// Return success with the original parsed budgets
		return {
			success: true,
			data: parsedBudgets
		};
	}
};
