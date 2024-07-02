import { error, fail, type Actions } from '@sveltejs/kit';

import * as cheerio from 'cheerio';

async function fetchWithTimeout(
	url: string | URL | Request,
	options: RequestInit | undefined,
	timeout = 7000
) {
	return Promise.race([
		fetch(url, options),
		new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), timeout))
	]);
}

export async function _rates(
	currencyFrom: string,
	currencyTo: string,
	currencyAmount: number
): Promise<number> {
	try {
		const response = await fetchWithTimeout(
			`https://www.google.com/search?q=${currencyAmount}+${currencyFrom}+to+${currencyTo}+&hl=en`,
			{}
		);
		if (!(response as Response).ok) {
			throw new Error('Network response was not ok');
		}
		const body = await (response as Response).text();
		const $ = cheerio.load(body);

		// Use the provided selector to find the element and extract the first part of its text content
		const rateText = $('.iBp4i').text();
		console.log({ rateText });

		if (!rateText) {
			throw new Error('Rate text not found');
		}

		let rates = rateText;
		rates = rates.replace(/\./g, '').replace(',', '.');

		let rateAsNumber = parseFloat(rates);
		let rate = (rateAsNumber / currencyAmount).toString();
		console.log(parseFloat(rate)); // Log the rate
		return parseFloat(rate);
	} catch (error) {
		console.error('Error fetching rates:', error);
		throw error; // Rethrow the error or handle it as needed
	}
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let currencyFrom: string = String(data.get('currencyFrom'));
		let currencyTo: string = String(data.get('currencyTo'));
		let currencyAmount: number = Number(data.get('currencyAmount'));

		// Check if currencyFrom is provided
		if (!currencyFrom) {
			error(422, 'currencyFrom is required');
		}

		// Check if currencyTo is provided
		if (!currencyTo) {
			error(422, 'currencyTo is required');
		}

		// Check if currencyAmount is provided
		if (!currencyAmount) {
			error(422, 'currencyAmount is required');
		}

		currencyFrom = currencyFrom.trim();
		currencyTo = currencyTo.trim();

		try {
			const response = await fetchWithTimeout(
				`https://www.google.com/search?q=${currencyAmount}+${currencyFrom}+to+${currencyTo}+&hl=en`,
				{}
			);
			if (!(response as Response).ok) {
				console.error(response);
				error(402, 'Network response was not ok');
			}
			const body = await (response as Response).text();
			const $ = cheerio.load(body);

			const rateText = $('.iBp4i').text();
			if (!rateText) {
				error(408, 'Rate text not found');
			}

			let rates = rateText;

			const splitRates = rates.split(' ');

			console.log({ rates });

			let rateAsNumber = splitRates[0];

			console.log(rateAsNumber);

			// Return a Response object
			return {
				currencyFrom,
				currencyTo,
				currencyAmount,
				status: 200,
				body: {
					rate: rateAsNumber
				}
			};
		} catch (error) {
			console.error('Error fetching rates:', error);
			// Return a Response object with an error status
			return fail(500, {
				currencyFrom,
				currencyTo,
				currencyAmount,
				error: 'Failed to fetch currency rates'
			});
		}
	}
};
