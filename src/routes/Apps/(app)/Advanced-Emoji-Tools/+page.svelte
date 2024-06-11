<script lang="ts">
	import type { PageData } from './$types';
	import Construction from '$lib/logo/Construction.svelte';
	export let data: PageData;
	console.log({ data });
</script>

<!-- <section class="p-4 text-center">
	<h3 class="mb-4 text-2xl font-bold">Under Construction</h3>
	<p class="mb-4 text-lg">We're currently working on this App. Please check back later.</p>
	<div class="mx-auto h-[50vh] w-[50vw] items-center justify-center">
		<Construction />
	</div>
</section> -->

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="emojify-input" class="block text-green-700 dark:text-green-300">Emojify Text:</label>
	<input
		type="text"
		id="emojify-input"
		placeholder="Enter text..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	/>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600">Emojify!</button>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="find-emoji" class="block text-green-700 dark:text-green-300">Find Emoji:</label>
	<input
		type="text"
		id="find-emoji"
		placeholder="Search for emoji..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	/>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600">Find!</button>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="get-emoji" class="block text-green-700 dark:text-green-300">Get Emoji:</label>
	<input
		type="text"
		id="get-emoji"
		placeholder="Enter emoji name or shortcode..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	/>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600"
		>Get Emoji!</button
	>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="has-emoji" class="block text-green-700 dark:text-green-300">Has Emoji?</label>
	<input
		type="text"
		id="has-emoji"
		placeholder="Enter emoji or shortcode..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	/>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600">Check!</button>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="random-emoji" class="block text-green-700 dark:text-green-300">Random Emoji:</label>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600"
		>Generate Random Emoji</button
	>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="replace-emoji" class="block text-green-700 dark:text-green-300">Replace Emoji:</label>
	<textarea
		id="replace-emoji"
		rows="4"
		placeholder="Enter text with emojis..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	></textarea>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600">Replace!</button>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="search-emoji" class="block text-green-700 dark:text-green-300">Search Emojis:</label>
	<input
		type="text"
		id="search-emoji"
		placeholder="Search for emoji..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	/>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600">Search!</button>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="strip-emoji" class="block text-green-700 dark:text-green-300">Strip Emojis:</label>
	<textarea
		id="strip-emoji"
		rows="4"
		placeholder="Enter text with emojis..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	></textarea>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600">Strip!</button>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="unemojify-text" class="block text-green-700 dark:text-green-300"
		>Unemojify Text:</label
	>
	<textarea
		id="unemojify-text"
		rows="4"
		placeholder="Enter text with emojis..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	></textarea>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600"
		>Unemojify!</button
	>
	<div class="display-container mt-2"></div>
</div>

<div class="input-container bg-white p-4 dark:bg-gray-800">
	<label for="which-emoji" class="block text-green-700 dark:text-green-300">Which Emoji?</label>
	<input
		type="text"
		id="which-emoji"
		placeholder="Enter emoji..."
		class="w-full rounded border border-green-500 p-2 dark:bg-gray-700 dark:text-white"
	/>
	<button class="mt-2 rounded bg-green-500 px-4 py-2 text-white dark:bg-green-600">Identify!</button
	>
	<div class="display-container mt-2"></div>
</div>

<div class="switch-button cursor-pointer rounded bg-blue-500 p-4 text-white dark:bg-blue-700">
	Switch Mode
</div>
