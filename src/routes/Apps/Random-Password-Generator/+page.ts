// src/routes/Apps/Random-Password-Generator/+page.ts

// Function to generate a random password
function generatePassword(length: number): string {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|?/><';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

// Function to copy text to clipboard
export function _copyToClipboard(text: string) {
	navigator.clipboard.writeText(text).then(
		function () {
			console.log('Copying to clipboard was successful!');
		},
		function (err) {
			console.error('Could not copy text: ', err);
		}
	);
}

// This function can be called from the client side to generate a password
export function _generateClientPassword(length: number): string {
	return generatePassword(length);
}
