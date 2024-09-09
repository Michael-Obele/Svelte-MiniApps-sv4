<script lang="ts">
	export let direction: string = 'left';
</script>

{#if direction == 'left'}
	<div class="block max-w-md rounded-lg p-6">
		<slot name="icon" />
		<h2 class="mb-4 text-2xl font-bold dark:text-gray-300">
			<slot name="header" />
		</h2>
		<p class="mb-4 justify-start text-left text-lg dark:text-gray-400">
			<slot name="paragraph" />
		</p>
	</div>
{/if}

{#if direction == 'right'}
	<div class="block max-w-md justify-self-end rounded-lg p-6">
		<slot name="icon" />
		<h2 class="mb-4 text-2xl font-bold dark:text-gray-300">
			<slot name="header" />
		</h2>
		<p class="mb-4 justify-start text-right text-lg dark:text-gray-400">
			<slot name="paragraph" />
		</p>
	</div>
{/if}
