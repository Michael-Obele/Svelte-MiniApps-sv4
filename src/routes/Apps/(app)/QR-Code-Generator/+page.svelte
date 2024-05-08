<script lang="ts">
	import { QRCodeImage } from 'svelte-qrcode-image';
	import * as htmlToImage from 'html-to-image';
	import { page } from '$app/stores';
	let inputText = '';
	import { Button } from '$lib/components/ui/button/index.js';

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

<svelte:head>
	<title>QR Code Generator</title>
	<meta
		name="description"
		content="Generate and download QR codes for links, contact info, or any data you want to embed."
	/>
	<meta name="keywords" content="QR Code, QR Code Generator, Encode QR, Save QR" />
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebApplication",
			"name": "QR Code Generator",
			"description": "A tool to generate and download QR codes for various types of data."
		}
	</script>
</svelte:head>

<section
	class="flex max-h-screen flex-col items-center justify-center text-green-900 dark:text-green-100"
>
	<header class="mb-4 text-4xl font-bold">
		<h1>
			Welcome {#if $page.data.user}
				<span class="text-green-400">{$page.data.user.data.username}</span>,
			{/if} to QR Code Generator
		</h1>
	</header>
	<article class="px-10">
		<p class="mb-4 text-lg">
			QR codes let you share information quickly. Use them for links, contact info, or any data you
			want to embed.
		</p>
		<p class="mb-8 text-lg">
			Enter the text you want to encode into a QR code below. Once generated, share the QR code to
			let others scan and access the information instantly.
		</p>
	</article>

	<main class="w-full max-w-md">
		<form class="flex flex-col">
			<input
				type="text"
				placeholder="Enter text here"
				aria-label="Input for QR code text"
				class="mb-4 rounded-md border p-3 focus:border-green-500 focus:outline-none dark:text-green-100"
				bind:value={inputText}
			/>
		</form>
	</main>
	{#if inputText}
		<aside class="mt-8">
			<QRCodeImage text={inputText} displayID="qr-code-image" displayClass="h-64 w-64 rounded-md" />
		</aside>
		<Button
			on:click={saveQRCode}
			aria-label="Save QR Code"
			class="mt-4 rounded-md bg-green-500 p-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
		>
			Save QR Code
		</Button>
	{/if}
</section>
