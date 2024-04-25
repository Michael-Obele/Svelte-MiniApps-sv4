<script lang="ts">
	import { QRCodeImage } from 'svelte-qrcode-image';
	import * as htmlToImage from 'html-to-image';
	let inputText = '';

	async function saveQRCode() {
		if (!inputText) return;
		const qrCodeElement = document.getElementById('qr-code-image') as HTMLElement;
		if (!qrCodeElement) return;

		try {
			const dataUrl = await htmlToImage.toPng(qrCodeElement);
			const link = document.createElement('a');
			link.download = 'qr-code.png';
			link.href = dataUrl;
			link.click();
		} catch (error) {
			console.error('Error saving QR code:', error);
		}
	}
</script>

<div
	class="flex max-h-screen flex-col items-center justify-center text-green-900 dark:text-green-100"
>
	<h1 class="mb-4 text-4xl font-bold">Welcome to QR Code Generator</h1>
	<span class="px-10">
		<p class="mb-4 text-lg">
			QR codes let you share information quickly. Use them for links, contact info, or any data you
			want to embed.
		</p>
		<p class="mb-8 text-lg">
			Enter the text you want to encode into a QR code below. Once generated, share the QR code to
			let others scan and access the information instantly.
		</p>
	</span>

	<div class="w-full max-w-md">
		<div class="flex flex-col">
			<input
				type="text"
				placeholder="Enter text here"
				class="mb-4 rounded-md border p-3 focus:border-green-500 focus:outline-none dark:text-green-100"
				bind:value={inputText}
			/>
		</div>
	</div>
	{#if inputText}
		<div class="mt-8">
			<QRCodeImage text={inputText} displayID="qr-code-image" displayClass="h-64 w-64 rounded-md" />
		</div>
		<button
			on:click={saveQRCode}
			class="mt-4 rounded-md bg-green-500 p-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
		>
			Save QR Code
		</button>
	{/if}
</div>
