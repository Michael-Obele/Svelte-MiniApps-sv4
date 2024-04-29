<script lang="ts">
	import * as emoji from 'node-emoji';
	let randomEmoji = emoji.random();
	console.log(randomEmoji);

	function generateRandomEmoji() {
		randomEmoji = emoji.random();
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
	<h1 class="mb-4 text-4xl font-bold text-white dark:text-green-300">
		Welcome to the Random Emoji Generator!
	</h1>
	<p class="mb-8 text-center text-lg text-white dark:text-green-200">
		Click the button below to generate a random emoji.
	</p>
	<button
		class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 dark:bg-green-500 dark:text-white dark:hover:bg-green-600"
		on:click={generateRandomEmoji}
	>
		Generate Random Emoji
	</button>
	<div class="flex flex-col items-center">
		<h2 class="mt-4 text-2xl font-semibold text-white dark:text-green-300">{randomEmoji.emoji}</h2>
		<h3 class="mt-2 text-lg text-white dark:text-green-200">{randomEmoji.name}</h3>
	</div>
</div>
