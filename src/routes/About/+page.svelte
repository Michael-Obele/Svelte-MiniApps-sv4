<script lang="ts">
	import { Check } from 'lucide-svelte';
</script>

<section class="m-2 py-3">
	<h3
		class="mb-10 mt-5 text-center text-3xl text-gray-900 underline decoration-green-400 decoration-4 underline-offset-8 transition-all dark:text-white dark:decoration-green-600"
	>
		Svelte MiniApps: Tiny, Powerful Tools Built with SvelteKit
	</h3>
	<div class="grid-row-2 mx-1 grid">
		<div
			class="mb-5 mt-5 block max-w-md rounded-lg border border-gray-200 bg-white object-left p-6 shadow dark:border-gray-700 dark:bg-gray-800"
		>
			<p class="justify-start text-left text-lg text-gray-900 dark:text-white">
				Svelte MiniApps is a collection of <span
					class="bold text-xl text-green-800 dark:text-green-400"
					>small, single-purpose applications built with the power of SvelteKit</span
				>.
			</p>
		</div>
		<div
			class="mb-5 mt-5 block max-w-md justify-self-end rounded-lg border border-gray-200 bg-white object-right p-6 shadow dark:border-gray-700 dark:bg-gray-800"
		>
			<p class="text-left text-lg text-gray-900 dark:text-white">
				These mini-apps offer a <span class="bold text-xl text-green-800 dark:text-green-400"
					>focused and efficient way to tackle everyday tasks,</span
				> leveraging the speed and flexibility of SvelteKit.
			</p>
		</div>
	</div>
	<div class="px-16">
		<p
			class="bold mx-auto my-5 w-fit cursor-pointer text-2xl underline-offset-1 transition-all hover:text-3xl hover:underline"
		>
			Why Svelte MiniApps?
		</p>
		<div class="my-5">
			<ul class="space-y-4 text-left">
				<li class="flex items-center space-x-3 rtl:space-x-reverse">
					<Check size="25" class="mr-3 text-green-500 dark:text-green-400" />
					<span class="font-semibold">
						Simple and Focused: <span class="font-normal"
							>Each mini-app is dedicated to a single functionality, providing a clear and
							clutter-free user experience.</span
						>
					</span>
				</li>
				<li class="flex items-center space-x-3 rtl:space-x-reverse">
					<Check size="25" class="mr-3 text-green-500 dark:text-green-400" />
					<span class="font-semibold">
						Lightning Fast: <span class="font-normal">
							Built with SvelteKit, these mini-apps offer exceptional performance and load times,
							ensuring a smooth and responsive experience.</span
						></span
					>
				</li>
				<li class="flex items-center space-x-3 rtl:space-x-reverse">
					<Check size="25" class="mr-3 text-green-500 dark:text-green-400" />
					<span class="font-semibold">
						Standalone and Web-Based:
						<span class="font-normal">
							Unlike traditional libraries or frameworks, Svelte MiniApps are self-contained
							applications that can be accessed and used directly on the web, without the need to be
							integrated into another project.</span
						>
					</span>
				</li>
			</ul>
		</div>
		<!-- 
		**Explore a Range of Tools:** Our collection of mini-apps covers a wide variety of use cases,
		from basic utilities like unit converters to more complex tools like to-do lists with
		persistence. ([left]) **(Consider using a bolded font style for the subheading "Explore a Range
		of Tools:")** * Browse the available apps and discover ones that can enhance your workflow. *
		Dive into the code and learn from the examples to build your own mini-apps. **Get Started with
		Svelte MiniApps Today!** ([center]) Svelte MiniApps is a perfect entry point for beginners
		exploring SvelteKit and a valuable toolkit for experienced developers seeking to build simple
		yet powerful tools. **(Consider using a bold font style for the subheading "Get Started with
		Svelte MiniApps Today!")** Head over to the Documentation: link to documentation to learn more
		and start building your own mini-apps! ([left]) **(Replace `[link to documentation]` with the
		actual link)** **Additional Notes:** * The bracketed text "([center])", "([left])" suggests text
		alignment. You can adjust this based on your design preferences. * Consider using a slightly
		larger font size for the bullet points under "Why Svelte MiniApps?" section. * Highlighting the
		subheadings "Explore a Range of Tools" and "Get Started with Svelte MiniApps Today!" with a bold
		font style can make them stand out visually. * This is just a basic markdown structure, you can
		add additional sections, screenshots, or links to specific mini-apps to enhance the About page. -->
	</div>
</section>
