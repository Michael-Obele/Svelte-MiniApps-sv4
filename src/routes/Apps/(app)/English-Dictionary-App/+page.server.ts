import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {};
};

export interface ApiError {
	title: string;
	message: string;
	resolution: string;
}

export interface DictionaryEntry {
	word: string;
	phonetic?: string;
	phonetics?: Phonetic[];
	meanings: Meaning[];
	license: License;
	sourceUrls?: string[];
	origin?: string;
}

interface Phonetic {
	text: string;
	audio?: string;
	sourceUrl?: string;
	license?: License;
}

interface License {
	name: string;
	url: string;
}

interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
	synonyms?: string[];
	antonyms?: string[];
}

interface Definition {
	definition: string;
	synonyms?: string[];
	antonyms?: string[];
	example?: string;
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const word = String(data.get('word'));
		console.log('word = ', word);

		const encodedWord = encodeURIComponent(word);
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodedWord}`;
		try {
			const response = await fetch(apiUrl);

			if (!response.ok) {
				const errorData: ApiError = await response.json();
				return { word, error: true, errorData }; // Return the error data directly
			}
			const data: DictionaryEntry[] = await response.json();
			console.log('data = ', data);
			return { word, error: false, data };
		} catch (error) {
			console.error('Network error:', error);
			// Construct and return a custom error object
			return {
				word,
				error: true,
				title: 'Network Error',
				message: 'Failed to fetch dictionary entry',
				resolution: 'Please try again later.'
			};
		}
	}
};
