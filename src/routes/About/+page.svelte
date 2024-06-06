<script lang="ts">
	import { ChevronsRight } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	interface Feature {
		title: string;
		description: string;
	}
	export var data: { features: any; reasons: any; future: any; next: any };

	import { _splitDescription } from './+page';
	import { onMount } from 'svelte';

	const h3Ids = [
		'MiniApps',
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

	let iconObserver: IntersectionObserver;
	let gitIconTrigger = 'in';
	let gitIconState = 'in-reveal';

	onMount(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 1
		};

		iconObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						gitIconState = '';
						gitIconTrigger = 'loop';
					}, 3500);
					// entry.target.setAttribute('trigger', 'morph'); // Uncomment if you have a way to dynamically update the attribute
				} else {
					setTimeout(() => {
						gitIconState = 'in-reveal';
						gitIconTrigger = 'in';
					}, 3500);
				}
			});
		}, options);

		// Observe the lord-icon component
		const icon = document.querySelector('#giticon');
		if (icon) {
			iconObserver.observe(icon);
		}
	});
</script>

<svelte:head>
	<title>About Page | Svelte MiniApps</title>
	<meta
		name="description"
		content="Discover more about Svelte MiniApps on our About page. Learn about our innovative tools, unique Svelte applications, and how we're revolutionizing the Svelte ecosystem."
	/>
	<meta
		name="keywords"
		content="Svelte, MiniApps, About, Tools, Applications, Ecosystem, Innovative, Unique"
	/>
	<meta property="og:title" content="About Page | Svelte MiniApps" />
	<meta
		property="og:description"
		content="Discover more about Svelte MiniApps on our About page. Learn about our innovative tools, unique Svelte applications, and how we're revolutionizing the Svelte ecosystem."
	/>
	<meta property="og:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />
	<meta property="og:url" content="https://svelte-mini-apps.netlify.app/About" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Page | Svelte MiniApps" />
	<meta
		name="twitter:description"
		content="Discover more about Svelte MiniApps on our About page. Learn about our innovative tools, unique Svelte applications, and how we're revolutionizing the Svelte ecosystem."
	/>
	<meta name="twitter:image" content="https://i.ibb.co/ZhhhnCz/svelte-badge.png" />
	<link rel="canonical" href="https://svelte-mini-apps.netlify.app/About" />
</svelte:head>

<section class="m-2 px-2 py-3 lg:px-10">
	<h3
		id="MiniApps"
		class="mb-10 mt-5 cursor-pointer text-center text-3xl font-medium leading-loose text-gray-900 underline decoration-green-400 decoration-wavy decoration-4 underline-offset-8 transition-all dark:text-white dark:decoration-green-600"
	>
		<strong>Svelte</strong> MiniApps: Powerful Tiny Tools Built with
		<strong class="text-nowrap text-red-500 dark:text-red-700">
			SvelteKit

			<lord-icon
				target="#MiniApps"
				colors="primary:red,secondary:green"
				src="https://cdn.lordicon.com/gqjpawbc.json"
				trigger="loop-on-hover"
				class="h-12 w-12"
			>
			</lord-icon>
		</strong>
	</h3>

	<!-- Stepper -->

	<ol
		id="stepper"
		class="sticky top-1 z-50 mx-auto flex w-full max-w-fit flex-row flex-wrap content-center items-center justify-center space-x-2 self-center justify-self-center rounded-lg border border-gray-200 bg-white p-3 text-center text-sm font-medium text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:space-y-0 sm:p-4 sm:text-base lg:p-3 rtl:space-x-reverse"
	>
		{#each h3Ids as id, i}
			<a
				href="#{id}"
				class={`my-1 flex items-center capitalize ${activeId.includes(id) ? 'text-green-600 dark:text-green-500' : ''}`}
				on:click={(event) => {
					event.preventDefault(); // Prevent the default jump behavior
					const targetElement = document.getElementById(id);
					if (targetElement) {
						const stepperHeight = document.getElementById('stepper')?.offsetHeight ?? 0;
						const scrollOffset = targetElement.offsetTop - stepperHeight;
						window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
					}
				}}
			>
				<span
					class={`me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${activeId.includes(id) ? 'border-green-600 dark:border-green-500' : 'border-gray-500 dark:border-gray-400'}`}
				>
					{i + 1}
				</span>
				<span class="hidden xl:block">
					{id}
				</span>
				<ChevronsRight />
			</a>
		{/each}
	</ol>

	<!-- End of Stepper -->

	<div class="mx-auto grid min-h-[80vh] max-w-[1024px] space-y-3 text-lg lg:text-2xl">
		<div class="block max-w-md rounded-lg p-6">
			<p class="justify-start text-left text-gray-900 dark:text-white">
				<span class="bold text-xl text-green-800 dark:text-green-400 lg:text-3xl"
					>Supercharge your workflow!
				</span>
				Svelte MiniApps are tiny, focused tools built with
				<strong class="text-xl text-red-500 dark:text-red-700 lg:text-3xl"> SvelteKit</strong> for lightning
				speed. Conquer everyday tasks with ease.
			</p>
		</div>

		<div class="block max-w-md justify-self-end rounded-lg p-6">
			<p class="text-right text-gray-900 dark:text-white">
				<span class="bold text-xl text-green-800 dark:text-green-400 lg:text-3xl"
					>Work anytime, anywhere!</span
				>
				These tiny web apps, built with
				<strong class="text-xl text-red-500 dark:text-red-700 lg:text-3xl">SvelteKit</strong>, let
				you install them for seamless offline access. Conquer your daily challenges, even without an
				internet connection.
			</p>
		</div>
	</div>
	<div class="px-16">
		<h3 id="introduction" class="bold mx-auto my-5 w-fit cursor-pointer text-2xl">
			Why Choose Svelte MiniApps?
		</h3>
		<div id="introduction-list" class="mx-auto my-5 w-fit max-w-[80%]">
			<ul class="space-y-4 text-left">
				{#each data.features as feature, i}
					<li id={feature.title.split(' ').join('-')} class="flex items-center">
						<lord-icon
							target="li"
							src="https://cdn.lordicon.com/cgzlioyf.json"
							trigger="morph"
							colors="primary:#c71f16,secondary:#109173"
							class="mr-5 hidden h-10 w-10 text-green-500 dark:text-green-400 md:block"
						>
						</lord-icon>
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
				<li id="Browse" class="flex items-center space-x-3 rtl:space-x-reverse">
					<lord-icon
						src="https://cdn.lordicon.com/unukghxb.json"
						target="li"
						trigger="morph"
						colors="primary:#c71f16,secondary:#109173"
						class="mr-5 hidden h-8 w-8 text-green-500 dark:text-green-400 md:block"
					>
					</lord-icon>
					<span class="">
						Browse the available apps and discover ones that can enhance your workflow.
					</span>
				</li>

				<li id="Dive" class="flex items-center space-x-3 rtl:space-x-reverse">
					<lord-icon
						src="https://cdn.lordicon.com/uvqdhrsk.json"
						target="li"
						trigger="morph"
						colors="primary:#c71f16,secondary:#109173"
						class="mr-5 hidden h-10 w-10 text-green-500 dark:text-green-400 md:block"
					>
					</lord-icon>
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

		<p class="mx-auto my-8 text-center text-lg leading-8 tracking-wide md:w-[50vw] lg:text-2xl">
			We've all been there
			<span class="text-xl font-semibold text-green-500 dark:text-green-400 lg:text-3xl">
				- wrestling with a complex framework for a simple task.
			</span> <br />
			Svelte MiniApps were born from the frustration of heavyweight solutions for lightweight problems.
			<br />
			We wanted something
			<span class="text-xl font-semibold text-green-500 dark:text-green-400 lg:text-3xl">
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
						<lord-icon
							src="https://cdn.lordicon.com/mjyxajfq.json"
							trigger="loop"
							colors="primary:#c71f16,secondary:#109173"
							class="mr-5 hidden h-16 w-16 text-green-500 dark:text-green-400 md:block"
						>
						</lord-icon>
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
		<p class="mx-auto my-8 text-center text-lg leading-8 tracking-wide md:w-[50vw] lg:text-2xl">
			Imagine your development workflow as a cluttered toolbox. Svelte MiniApps are the <span
				class="bold text-xl text-green-800 dark:text-green-400 lg:text-3xl"
			>
				handy, bite-sized tools
				<span class="text-lg text-white lg:text-2xl"> you grab for specific tasks. </span>
				No bulky all-in-ones
				<span class="text-lg text-white lg:text-2xl"> or</span>
				dusty
				<span class="text-lg text-white lg:text-2xl"> specialty tools here. </span>
			</span>
		</p>
		<h3 id="future" class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-center text-2xl">
			The Future of Svelte MiniApps: Your Development Playground
		</h3>
		<p class="mx-auto my-8 text-center text-lg leading-8 tracking-wide md:w-[50vw] lg:text-2xl">
			Svelte MiniApps is an <span
				class="bold text-xl text-green-800 dark:text-green-400 lg:text-3xl"
			>
				ever-evolving project,
				<span class="text-lg text-white lg:text-2xl">
					and
					<span class="bold text-xl text-green-800 dark:text-green-400 lg:text-3xl"> you </span>

					hold the reins!
				</span>
			</span>
		</p>
		<div class="mx-auto my-5 w-fit max-w-[90%]">
			<ul class="space-y-4 text-left">
				{#each data.future as item, i}
					<li id={item.title.split(' ').join('-')} class="flex items-center">
						{#if i == 0}
							<lord-icon
								target="li"
								src="https://cdn.lordicon.com/jdalicnn.json"
								trigger="morph"
								colors="primary:#c71f16,secondary:#109173"
								class="mr-5 hidden h-16 w-16 text-green-500 dark:text-green-400 md:block"
							>
							</lord-icon>
						{:else if i == 1}
							<lord-icon
								target="li"
								src="https://cdn.lordicon.com/wzrwaorf.json"
								trigger="morph"
								colors="primary:#c71f16,secondary:#109173"
								class="mr-5 hidden h-16 w-16 text-green-500 dark:text-green-400 md:block"
							>
							</lord-icon>
						{/if}

						<span class="felx flex-col font-semibold">
							{item.title}:

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
					<li id={item.title.split(' ').join('-')} class="flex items-center">
						{#if i == 0}
							<lord-icon
								target="li"
								src="https://cdn.lordicon.com/xpuzvjaf.json"
								trigger="morph"
								colors="primary:#c71f16,secondary:#109173"
								class="mr-5 hidden h-16 w-16 text-green-500 dark:text-green-400 md:block"
							>
							</lord-icon>
						{:else if i == 1}
							<lord-icon
								target="li"
								src="https://cdn.lordicon.com/kndkiwmf.json"
								trigger="morph"
								colors="primary:#c71f16,secondary:#109173"
								class="mr-5 hidden h-16 w-16 text-green-500 dark:text-green-400 md:block"
							>
							</lord-icon>
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

<!-- Footer -->
<footer
	class="flex flex-col items-center justify-between bg-gray-800 px-4 py-8 text-white md:flex-row"
>
	<a
		href="https://github.com/Michael-Obele/Svelte-MiniApps"
		target="_blank"
		class="group mb-4 flex flex-row items-center justify-center rounded-md px-4 py-2 font-bold text-green-500 hover:text-green-700 dark:text-green-300 dark:hover:text-green-500 md:mb-0 md:flex-col"
		aria-label="Support us on GitHub"
	>
		Support Us on GitHub
		<lord-icon
			id="giticon"
			target="a"
			src="https://cdn.lordicon.com/yedgackm.json"
			trigger={gitIconTrigger}
			delay="1500"
			state={gitIconState}
			class="h-20 w-20"
			colors="primary:#000000,secondary:#22c55e,tertiary:#ffffff"
		>
		</lord-icon>
	</a>

	<form
		action="https://formspree.io/f/xyyrldpl"
		method="POST"
		target="_blank"
		class="mx-auto mb-4 flex w-full items-center justify-center sm:w-full md:mb-0"
	>
		<input
			type="text"
			name="message"
			class="mr-2 w-3/4 rounded-md border border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
			placeholder="Share your thoughts..."
			aria-label="Share your thoughts"
		/>
		<Button
			type="submit"
			class="rounded-md bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-800"
			aria-label="Submit your thoughts"
		>
			Submit
		</Button>
	</form>

	<div class="md:text-left">
		<h3 class="mb-2 text-center text-lg font-semibold">What's Next?</h3>
		<ul class="ml-10 list-disc">
			<li>Enhanced personalization features (based on your suggestions)</li>
			<li>New integrations to streamline your workflow</li>
		</ul>
	</div>
</footer>

<!-- End of Footer -->

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


Edited text:

**Svelte MiniApps: Powerful Tools in a Tiny Package**

Discover a collection of small, but powerful **web applications** built with SvelteKit.  These **installable** mini-apps showcase the versatility and simplicity of this modern JavaScript framework. They can even work **offline** and offer **authentication** for secure access. 

Svelte MiniApps empower you to tackle everyday tasks efficiently. 

**Focused and Efficient:**

- Each mini-app has a clear purpose, providing a clutter-free user experience. 
- Leverage the speed and flexibility of SvelteKit for exceptional performance.

**Standalone and Empowering:**

- Unlike libraries or frameworks, Svelte MiniApps are self-contained web applications. Access and use them directly on the web, or install them for offline use.

**Your Pocket-Sized Toolkit:**

Imagine your development workflow as a cluttered toolbox. Svelte MiniApps are the handy, bite-sized tools you grab for specific tasks. No bulky all-in-ones or dusty specialty tools here.

**The "Aha Moment" Behind Svelte MiniApps**

We've all been there - wrestling with a complex framework for a simple task. Svelte MiniApps were born from the frustration of heavyweight solutions for lightweight problems. We wanted something modular, efficient, and focused on getting the job done, just like that trusty screwdriver you use all the time.

Here's what sparked this project:

**SvelteKit's Superpowers:**

We loved SvelteKit's speed, ease of use, and ability to create standalone apps with features like offline functionality and authentication. It was the perfect platform for building these mini powerhouses.

**Simplicity is Key:**

We believe in clear, focused functionality. No overwhelming interfaces, just the tools you need to tackle your task quickly.

**Learning by Doing:**

Each mini-app is a mini-lesson in SvelteKit. Beginners can learn by example, while experienced devs can pick up new tricks.

**The Future of Svelte MiniApps: Your Development Playground**

Svelte MiniApps is an ever-evolving project, and you hold the reins!

**Building the Ultimate Toolkit:**

We want a diverse collection of mini-apps for any situation. What tools do you wish you had?

**Community Power:**

Imagine a community of Svelte MiniApp creators! We could share ideas, collaborate on tools, and make development even more fun.

**Supercharged Mini-Apps:**

Exploring features like advanced state management and user authentication could unlock even more powerful mini-apps.

**What's Next?**

- Expanding the Mini-App Collection: We aim to continuously grow the library with diverse mini-apps. User suggestions and contributions are highly encouraged!
- Community Collaboration: Fostering a community around Svelte MiniApps could be a great way to share knowledge, collaborate on new tools, and accelerate development.
- Advanced Features: Exploring advanced features like state management and user authentication could further expand capabilities.

**Discover the power of focused functionality with Svelte MiniApps!**


-->

<style>
	h3 {
		padding-top: 3rem;
	}
	/* * {
		border: 1px red solid;
	} */
</style>
