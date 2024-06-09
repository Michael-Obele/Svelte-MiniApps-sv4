<script>
	// Component logic (if necessary)
</script>

<div class="block max-w-md rounded-lg p-6">
	<slot name="icon" />
	<h2 class="mb-4 text-2xl font-bold dark:text-gray-300">
		<slot name="header" />
	</h2>
	<p class="mb-4 justify-start text-lg dark:text-gray-400">
		<slot name="paragraph" />
	</p>
</div>
