<script lang="ts">
	export let iconId: string = '';
</script>

<div class="space-y-2">
	<h2
		class:cursor-pointer={iconId !== ''}
		class="Tspace-x-2 flex items-center justify-center text-3xl font-bold tracking-tighter sm:text-5xl"
	>
		<slot name="header" />
		<lord-icon
			target="div"
			src="https://cdn.lordicon.com/{iconId}.json"
			colors="primary:red,secondary:green"
			trigger="loop-on-hover"
			state="morph-heart"
			class="h-16 w-16"
		>
		</lord-icon>
	</h2>
	<p
		class="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
	>
		<slot name="paragraph" />
	</p>
</div>
