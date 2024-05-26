import { toast } from 'svelte-sonner';

export function _generatePassword(
	length: number,
	includeUppercase: boolean,
	includeLowercase: boolean,
	includeNumbers: boolean,
	includeSymbol: boolean
): string {
	let characters = '';
	if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
	if (includeNumbers) characters += '0123456789';
	if (includeSymbol) characters += '!@#$%^&*()_+-={}[]|?/><';

	let password = '';
	for (let i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return password;
}

// Function to copy text to clipboard
export function _copyToClipboard(text: string) {
	navigator.clipboard.writeText(text).then(
		() =>
			toast.success('Copied', {
				action: {
					label: 'OK',
					onClick: () => toast.dismiss()
				}
			}),
		function (err) {
			() => toast.error('Could not copy text: ', err);
			console.error('Could not copy text: ', err);
		}
	);
}
