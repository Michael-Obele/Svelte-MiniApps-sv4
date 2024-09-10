<script lang="ts">
	import { Heart } from 'lucide-svelte';

	// Function to scroll smoothly to the top of the page
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="w-full bg-black py-5 text-center text-white md:py-10">
	<div class="container px-4 md:px-6">
		<!-- Existing Scroll to Top Button -->
		<button
			class="mt-2 text-red-500 underline hover:no-underline dark:text-green-500"
			on:click={scrollToTop}
		>
			Back to top
		</button>
		<!-- New Content: Made with Love and Installable Message -->
		<div class="mt-2 flex flex-wrap items-center justify-center gap-4">
			<a
				href="https://github.com/Michael-Obele"
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-row items-center justify-between text-green-400 hover:text-green-300"
			>
				Made with
				<Heart size="20" class="mx-2 text-red-500" fill="red" />
				by <span class="ms-2 font-bold"> Michael </span>
			</a>
			<p class="text-sm text-gray-500">
				FYI: This app is <span class="font-semibold text-red-500">installable</span>.
			</p>
		</div>
	</div>
</footer>
