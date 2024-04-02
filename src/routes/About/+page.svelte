<script lang="ts">
	import { Check, Minus } from 'lucide-svelte';
	interface Feature {
		title: string;
		description: string;
	}
	export var data: { features: Feature[] };

	console.log(data);
</script>

<section class="m-2 py-3">
	<h3
		class="mb-10 mt-5 text-center text-3xl text-gray-900 underline decoration-green-400 decoration-4 underline-offset-8 transition-all dark:text-white dark:decoration-green-600"
	>
		Svelte MiniApps: Tiny, Powerful Tools Built with SvelteKit
	</h3>
	<div class="mx-16 grid">
		<div class="mb-5 mt-5 block max-w-md rounded-lg p-6">
			<p class="justify-start text-left text-lg text-gray-900 dark:text-white">
				Svelte MiniApps is a collection of <span
					class="bold text-xl text-green-800 dark:text-green-400"
					>small, single-purpose applications built with the power of SvelteKit</span
				>.
			</p>
		</div>
		<div class="mb-5 mt-5 block max-w-md justify-self-end rounded-lg p-6">
			<p class="text-right text-lg text-gray-900 dark:text-white">
				These mini-apps offer a <span class="bold text-xl text-green-800 dark:text-green-400"
					>focused and efficient way to tackle everyday tasks,</span
				> leveraging the speed and flexibility of SvelteKit.
			</p>
		</div>
	</div>
	<div class="px-16">
		<h3
			class="bold mx-auto my-5 w-fit cursor-pointer text-2xl underline-offset-1 transition-all hover:underline md:hover:text-3xl"
		>
			Why Svelte MiniApps?
		</h3>
		<div class="my-5">
			<ul class="space-y-4 text-left">
				{#each data.features as feature}
					<li class="flex items-center space-x-3 rtl:space-x-reverse">
						<Minus size="35" class="mr-3 hidden text-green-500 dark:text-green-400 md:block" />
						<span class="font-semibold">
							{feature.title}: <span class="font-normal">{feature.description}</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="">
			<h3
				class="bold mx-auto my-5 w-fit cursor-pointer text-2xl underline-offset-1 transition-all hover:underline md:hover:text-3xl"
			>
				Explore a Range of Tools:
			</h3>
			<p class="my-8">
				Our collection of mini-apps covers a wide variety of use cases, from basic utilities like
				unit converters to more complex tools like to-do lists with persistence.
			</p>
			<ul class="space-y-4 text-left">
				<li class="flex items-center space-x-3 rtl:space-x-reverse">
					<Minus size="35" class="mr-3 hidden text-green-500 dark:text-green-400 md:block" />
					<span class="">
						Browse the available apps and discover ones that can enhance your workflow.
					</span>
				</li>

				<li class="flex items-center space-x-3 rtl:space-x-reverse">
					<Minus size="35" class="mr-3 hidden text-green-500 dark:text-green-400 md:block" />
					<span class="">
						Dive into the code and learn from the examples to build your own mini-apps
					</span>
				</li>
			</ul>
			<ul>
				<li></li>
				<li>.</li>
			</ul>
		</div>
	</div>
</section>
