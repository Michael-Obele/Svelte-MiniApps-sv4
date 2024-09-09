<script lang="ts">
	export let dir: string = 'left';
</script>

<div class="block max-w-md rounded-lg p-6 {dir === 'right' ? 'justify-self-end' : ''}">
	<slot name="icon" />
	<h2 class="mb-4 text-2xl font-bold dark:text-gray-300">
		<slot name="header" />
	</h2>
	<p class="mb-4 justify-start text-{dir == 'left' ? 'left' : 'right'} text-lg dark:text-gray-400">
		<slot name="paragraph" />
	</p>
</div>
