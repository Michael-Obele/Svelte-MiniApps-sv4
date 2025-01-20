<script>
	import ExternalLink from 'lucide-svelte/icons/external-link';
</script>

<div class="w-full bg-red-50 dark:bg-red-950/30">
	<div class="mx-auto flex flex-col items-center justify-center px-4 py-2 text-center">
		<p class="text-sm text-gray-700 dark:text-gray-300">
			This version is deprecated. Please use the Svelte 5 version.
		</p>
		<a
			href="https://svelte-apps.me/"
			class="inline-flex items-center gap-1.5 text-sm text-red-700 hover:text-red-800 dark:text-red-300 dark:hover:text-red-200"
			target="_blank"
			rel="noopener noreferrer"
		>
			🚀 Check out our Svelte 5 version
			<ExternalLink class="h-3.5 w-3.5" />
		</a>
	</div>
</div>
