<script lang="ts">
	import { Check, FileSearch, Lightbulb, CodeSquare } from 'lucide-svelte';
	interface Feature {
		title: string;
		description: string;
	}
	export var data: { features: Feature[]; reasons: Feature[] };

	// Function to split the description into an array of strings, each containing a maximum number of words
	function splitDescription(description: string, maxWords: number): string[] {
		const words = description.split(' ');
		const result = [];
		let currentLine = '';

		words.forEach((word) => {
			if ((currentLine + word).split(' ').length <= maxWords) {
				currentLine += ` ${word}`;
			} else {
				result.push(currentLine.trim());
				currentLine = word;
			}
		});

		result.push(currentLine.trim()); // Push the last line

		return result;
	}
</script>

<section class="m-2 px-2 py-3 lg:px-10">
	<h3
		class="mb-10 mt-5 text-center text-3xl text-gray-900 underline decoration-green-400 decoration-4 underline-offset-8 transition-all dark:text-white dark:decoration-green-600"
	>
		Svelte MiniApps: Tiny, Powerful Tools Built with SvelteKit
	</h3>
	<div class="mx-auto grid max-w-[1024px]">
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
		<div class="mx-auto my-5 w-fit max-w-[80%]">
			<ul class="space-y-4 text-left">
				{#each data.features as feature, i}
					<li class="flex items-center">
						<Check size="30" class="mr-3 hidden text-green-500 dark:text-green-400 md:block" />
						<span class="felx flex-col font-semibold">
							{feature.title}:
							<span class="font-normal md:indent-8">
								{#each splitDescription(feature.description, 10) as line, j}
									<p class="mx-{j + 4}">{line}</p>
								{/each}
							</span>
						</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="">
			<h3
				class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-2xl underline-offset-1 transition-all hover:underline md:hover:text-3xl"
			>
				Explore a Range of Tools:
			</h3>
			<p class="mx-auto my-8 text-center leading-8 tracking-wide md:w-[50vw]">
				Our collection of mini-apps covers a wide variety of use cases, from basic utilities like
				unit converters to more complex tools like to-do lists with persistence.
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
		<h3
			class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-2xl underline-offset-1 transition-all hover:underline md:hover:text-3xl"
		>
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
		<h3
			class="bold mx-auto mb-12 mt-16 w-fit cursor-pointer text-2xl underline-offset-1 transition-all hover:underline md:hover:text-3xl"
		>
			Here's what sparked this project:
		</h3>

		<div class="mx-auto my-5 w-fit max-w-[80%]">
			<ul class="space-y-4 text-left">
				{#each data.reasons as reason, i}
					<li class="flex items-center">
						<Lightbulb size="30" class="mr-3 hidden text-green-500 dark:text-green-400 md:block" />
						<span class="felx flex-col font-semibold">
							{reason.title}:
							<span class="font-normal md:indent-8">
								<p>{reason.description}</p>
							</span>
						</span>
					</li>
				{/each}
				<!-- (Consider showcasing some mini-apps in action with before/after GIFs or screenshots! [Add Mini-App Examples]) -->
			</ul>
		</div>
	</div>
</section>

<!-- 
## Svelte MiniApps: Your Pocket-Sized Toolkit for Development

Imagine your development workflow as a cluttered toolbox. There are these massive all-in-one tools, but they're bulky and take forever to find the right attachment. Then there are the specialty tools you rarely use, just gathering dust. That's where Svelte MiniApps come in - a collection of **handy, bite-sized apps built for specific tasks**.



**The Future of Svelte MiniApps (Your Personal Development Playground):**

Svelte MiniApps is an ever-evolving project, and we (well, you!) hold the reins. Here's what's on the horizon:

* **Building the Ultimate Toolkit:** We want a diverse collection of mini-apps for any situation. What tools do YOU wish you had in your pocket? Let us know! (Consider adding a suggestion box or form for users to propose new mini-apps! [User Suggestion Form])
* **Community Power:** While this project is currently for personal use, imagine a community of Svelte MiniApp creators! We could share ideas, collaborate on tools, and make development even more fun. (Think about a future roadmap for community involvement! [Community Roadmap])
* **Supercharged Mini-Apps:** Exploring features like state management and user authentication could unlock even more powerful mini-apps. (Discuss potential future features for mini-apps! [Advanced Features Section])

This About page is just the beginning. Feel free to add screenshots, personalize it with your coding journey, and make it truly your own! Let Svelte MiniApps be your personal development playground and watch your workflow soar.












Tailored for Personal Projects:

While Svelte MiniApps can be a valuable asset for collaborative projects, its true potential shines in the realm of personal development.  Imagine having a customizable toolbox filled with mini-apps designed specifically for your workflow.  Streamline repetitive tasks, boost your productivity, and craft tools that perfectly fit your unique needs.  Svelte MiniApps empowers you to personalize your development experience and build the tools that make you tick. 


Here's what fueled the creation of this collection:

* **The power of SvelteKit:** SvelteKit's lightning-fast performance, ease of use, and ability to create self-contained applications provided the ideal foundation for building these mini-apps.
* **The beauty of simplicity:** Striving for clear and focused functionality that allows users to get things done with minimal fuss. 
* **The joy of learning by example:** Each mini-app serves as a practical demonstration of SvelteKit concepts, making them excellent learning tools for beginners and experienced developers alike. (Consider adding a section showcasing some of the mini-apps and their functionalities here [Add Mini-App Examples])

**What's Next for Svelte MiniApps?**

Svelte MiniApps is an ongoing project that thrives on continuous development and user feedback. Here are some exciting possibilities for the future:

* **Expanding the Mini-App Collection:**  The goal is to continuously grow the library with a diverse range of mini-apps catering to various use cases. User suggestions and contributions are highly encouraged! (Consider adding a form or mechanism for users to suggest new mini-app ideas [User Suggestion Form])
* **Community Collaboration:** While this project is currently for personal use, fostering a community around Svelte MiniApps could be a great way to share knowledge, collaborate on new tools, and accelerate development. (Consider outlining a potential roadmap for future community involvement [Community Roadmap])
* **Advanced Features:** Exploring advanced features like state management and user authentication within the context of mini-apps could further expand their capabilities. (Discuss potential future features for mini-apps [Advanced Features Section])

This About page serves as a starting point for Svelte MiniApps. Feel free to personalize it further by adding screenshots or visuals showcasing the mini-apps in action. Let your creativity flow and make it a true reflection of your development journey with Svelte MiniApps!


-->
