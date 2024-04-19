<script lang="ts">
	import {
		Check,
		FileSearch,
		Lightbulb,
		CodeSquare,
		Blocks,
		Drill,
		Unplug,
		ChevronsRight
	} from 'lucide-svelte';
	interface Feature {
		title: string;
		description: string;
	}
	export var data: { features: any; reasons: any; future: any; next: any };

	import { _splitDescription } from './+page';
	import { onMount } from 'svelte';

	const h3Ids = [
		'SvelteMiniApps',
		'introduction',
		'tools',
		'inspiration',
		'spark',
		'toolkit',
		'future',
		'next'
	];
	let activeId: string[] = [];
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const currentIndex = h3Ids.indexOf(entry.target.id);
						activeId = h3Ids.slice(0, currentIndex + 1);
					} else {
						const indexToRemove = activeId.indexOf(entry.target.id);
						if (indexToRemove !== -1) {
							activeId.splice(indexToRemove, 1);
						}
					}
					console.log(activeId);
				});
			},
			{
				rootMargin: '0px',
				threshold: 0.7
			}
		);

		h3Ids.forEach((id) => {
			const el = document.getElementById(id);

			if (el) {
				observer.observe(el);
			}
		});

		return () => {
			h3Ids.forEach((id) => {
				const el = document.getElementById(id);

				if (el) {
					observer.unobserve(el);
				}
			});
		};
	});
</script>

<section class="m-2 px-2 py-3 lg:px-10">
	<h3
		id="SvelteMiniApps"
		class="mb-10 mt-5 text-center text-3xl text-gray-900 underline decoration-green-400 decoration-4 underline-offset-8 transition-all dark:text-white dark:decoration-green-600"
	>
		Svelte MiniApps: Powerful Tiny Tools Built with
		<span class="text-red-500 dark:text-red-700"> SvelteKit </span>
	</h3>

	<!-- Stepper -->

	<ol
		class="sticky top-1 mx-auto flex w-full max-w-fit content-center items-center space-x-2 self-center justify-self-center rounded-lg border border-gray-200 bg-white p-3 text-center text-sm font-medium text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:p-4 sm:text-base rtl:space-x-reverse"
	>
		{#each h3Ids as id, i}
			<a
				href="#{id}"
				class={`flex items-center capitalize ${activeId.includes(id) ? 'text-blue-600 dark:text-blue-500' : ''}`}
			>
				<span
					class={`me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs  ${activeId.includes(id) ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500  dark:border-gray-400'}`}
				>
					{i + 1}
				</span>
				{id}
				<ChevronsRight />
			</a>
		{/each}
	</ol>

	<!-- End of Stepper -->

	<div class="mx-auto grid max-w-[1024px]">
		<div class="mb-5 mt-5 block max-w-md rounded-lg p-6">
			<p class="justify-start text-left text-lg text-gray-900 dark:text-white">
				Svelte MiniApps is a collection of <span
					class="bold text-xl text-green-800 dark:text-green-400"
					>focused, single-purpose applications
				</span>
				built with the speed and flexibility of
				<span class="text-red-500 dark:text-red-700"> SvelteKit. </span> These mini-apps empower you
				to tackle everyday tasks efficiently.
			</p>
		</div>
		<div class="mb-5 mt-5 block max-w-md justify-self-end rounded-lg p-6">
			<p class="text-right text-lg text-gray-900 dark:text-white">
				These mini-apps offer a <span class="bold text-xl text-green-800 dark:text-green-400"
					>focused and efficient way to tackle everyday tasks,</span
				>
				leveraging the speed and flexibility of
				<span class="text-red-500 dark:text-red-700"> SvelteKit. </span>
			</p>
		</div>
	</div>
	<div class="px-16">
		<h3 id="introduction" class="bold mx-auto my-5 w-fit cursor-pointer text-2xl">
			Why Choose Svelte MiniApps?
		</h3>
		<div class="mx-auto my-5 w-fit max-w-[80%]">
			<ul class="space-y-4 text-left">
				{#each data.features as feature, i}
					<li class="flex items-center">
						<Check size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						<span class="felx flex-col font-semibold">
							{feature.title}:
							<span class="ml-10 font-normal md:-indent-2">
								{#each _splitDescription(feature.description, 10) as line, j}
									<p class="indent-{j}">{line}</p>
								{/each}
							</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="">
			<h3 id="tools" class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-2xl">
				Explore a Range of Tools:
			</h3>
			<p class="mx-auto my-8 text-center leading-8 tracking-wide md:w-[50vw]">
				Our collection covers a wide variety of use cases, from basic tools like unit converters to
				more complex ones like persistent to-do lists.
			</p>
			<ul class="mx-auto w-fit space-y-4 text-center">
				<li class="flex items-center space-x-3 rtl:space-x-reverse">
					<FileSearch size="25" class="mr-3 hidden text-green-500 dark:text-green-400 md:block" />
					<span class="">
						Browse the available apps and discover ones that can enhance your workflow.
					</span>
				</li>

				<li class="flex items-center space-x-3 rtl:space-x-reverse">
					<CodeSquare size="25" class="mr-3 hidden text-green-500 dark:text-green-400 md:block" />
					<span class="">
						Dive into the code and learn from the examples to build your own mini-apps
					</span>
				</li>
			</ul>
		</div>
		<h3 id="inspiration" class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-2xl">
			The <span class="font-semibold text-green-500 dark:text-green-400"> "Aha Moment" </span>
			Behind Svelte MiniApps:
		</h3>

		<p class="mx-auto my-8 text-center leading-8 tracking-wide md:w-[50vw]">
			We've all been there
			<span class="font-semibold text-green-500 dark:text-green-400">
				- wrestling with a complex framework for a simple task.
			</span> <br />
			Svelte MiniApps were born from the frustration of heavyweight solutions for lightweight problems.
			<br />
			We wanted something
			<span class="font-semibold text-green-500 dark:text-green-400">
				modular, efficient, and focused
			</span>
			on getting the job done, just like that trusty screwdriver you use all the time.
		</p>
		<h3 id="spark" class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-2xl">
			Here's what sparked this project:
		</h3>

		<div class="mx-auto my-5 w-fit max-w-[80%]">
			<ul class="space-y-4 text-left">
				{#each data.reasons as reason, i}
					<li class="flex items-center">
						<Lightbulb size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						<span class="felx flex-col font-semibold">
							{reason.title}:
							<span class="ml-10 font-normal md:-indent-2">
								{#each _splitDescription(reason.description, 10) as line, j}
									<p class="indent-{j}">{line}</p>
								{/each}
							</span>
						</span>
					</li>
				{/each}
				<!-- (Consider showcasing some mini-apps in action with before/after GIFs or screenshots! [Add Mini-App Examples]) -->
			</ul>
		</div>
		<h3 id="toolkit" class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-2xl">
			Svelte MiniApps: Your Pocket-Sized Toolkit
		</h3>
		<p class="mx-auto my-8 text-center text-lg leading-8 tracking-wide md:w-[50vw]">
			Imagine your development workflow as a cluttered toolbox. Svelte MiniApps are the <span
				class="bold text-xl text-green-800 dark:text-green-400"
			>
				handy, bite-sized tools
				<span class="text-lg text-white"> you grab for specific tasks. </span>
				No bulky all-in-ones
				<span class="text-lg text-white"> or</span>
				dusty
				<span class="text-lg text-white"> specialty tools here. </span>
			</span>
		</p>
		<h3 id="future" class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-center text-2xl">
			The Future of Svelte MiniApps: Your Development Playground
		</h3>
		<p class="mx-auto my-8 text-center text-lg leading-8 tracking-wide md:w-[50vw]">
			Svelte MiniApps is an <span class="bold text-xl text-green-800 dark:text-green-400">
				ever-evolving project,
				<span class="text-lg text-white">
					and
					<span class="bold text-xl text-green-800 dark:text-green-400"> you </span>

					hold the reins!
				</span>
			</span>
		</p>
		<div class="mx-auto my-5 w-fit max-w-[90%]">
			<ul class="space-y-4 text-left">
				{#each data.future as item, i}
					<li class="flex items-center">
						{#if i == 0}
							<Blocks size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						{/if}
						{#if i == 2}
							<Drill size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						{/if}
						{#if i == 1}
							<Unplug size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						{/if}

						<span class="felx flex-col font-semibold">
							{item.title}

							<span class="ml-10 font-normal md:-indent-2">
								{#each _splitDescription(item.description, 10) as line, j}
									<p class="indent-{j}">{line}</p>
								{/each}
							</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
		<h3 id="next" class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-center text-2xl">
			What's Next?
		</h3>
		<div class="mx-auto my-5 w-fit max-w-[90%]">
			<ul class="space-y-4 text-left">
				{#each data.next as item, i}
					<li class="flex items-center">
						{#if i == 0}
							<Blocks size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						{/if}
						{#if i == 2}
							<Drill size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						{/if}
						{#if i == 1}
							<Unplug size="30" class="mr-5 hidden text-green-500 dark:text-green-400 md:block" />
						{/if}

						<span class="felx flex-col font-semibold">
							{item.title}

							<span class="ml-10 font-normal md:-indent-2">
								{#each _splitDescription(item.description, 10) as line, j}
									<p class="indent-{j}">{line}</p>
								{/each}
							</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- 
## Enhanced About Page for Svelte MiniApps

**The Future of Svelte MiniApps: Your Development Playground**

Svelte MiniApps is an ever-evolving project, and you hold the reins!

* **Building the Ultimate Toolkit:** We want a diverse collection of mini-apps for any situation. What tools do you wish you had? (Consider a user suggestion box!)
* **Community Power:** Imagine a community of Svelte MiniApp creators! We could share ideas, collaborate on tools, and make development even more fun. (Think about a future roadmap for community involvement!)
* **Supercharged Mini-Apps:** Exploring features like state management and user authentication could unlock even more powerful mini-apps. (Discuss potential future features!)

**Personalize Your Development Journey**

While Svelte MiniApps can be valuable for collaborative projects, their true potential shines in personal development. Imagine a customizable toolbox filled with mini-apps designed specifically for your workflow. Streamline tasks, boost productivity, and craft tools that perfectly fit your needs. Svelte MiniApps empowers you to personalize your development experience.

**What Fueled This Collection?**

* **The power of SvelteKit:** Its performance, ease of use, and ability to create standalone apps provided the ideal foundation.
* **The beauty of simplicity:** We strive for clear and focused functionality that allows you to get things done with minimal fuss.
* **The joy of learning by example:** Each mini-app serves as a practical demonstration of SvelteKit concepts, making them excellent learning tools. (Consider adding a section showcasing mini-app examples!)

**What's Next?**

* **Expanding the Mini-App Collection:** We aim to continuously grow the library with diverse mini-apps. User suggestions and contributions are highly encouraged! (Consider a user suggestion form!)
* **Community Collaboration:** Fostering a community around Svelte MiniApps could be a great way to share knowledge, collaborate on new tools, and accelerate development. (Consider outlining a potential roadmap for future community involvement!)
* **Advanced Features:** Exploring advanced features like state management and user authentication could further expand capabilities. (Discuss potential future features!)


-->

<style>
	h3 {
		padding-top: 9.333vh;
	}
</style>
