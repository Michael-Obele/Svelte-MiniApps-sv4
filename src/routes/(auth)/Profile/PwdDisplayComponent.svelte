<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types.js';
	import { enhance } from '$app/forms';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	export let form: ActionData;

	let userData = $page.data.user?.userData;
	const userId = $page.data.user.userData.id;
</script>

<!--
@component
## Svelte Component: Password Display
This component allows users to view and manage their saved passwords. It provides options to hide or view saved passwords and displays each password along with its creation date. The component utilizes form handling and conditional rendering to display relevant information and actions based on the user's saved passwords.

## Key Features
- **View Saved Passwords**: Users can see all saved passwords.
- **Hide Option**: Offers a way to hide saved passwords for security reasons.
- **Date Information**: Each password displays the date it was created.

## Form Handling
Utilizes enhanced form handling to submit requests for viewing or hiding passwords securely.
-->

{#if userData.SavePassword}
	<section class="mx-auto my-12 w-3/4 max-w-md rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
		<p class="mb-2 text-center text-green-500 dark:text-green-400">You have saved passwords.</p>
		<form use:enhance action="?/viewPasswords" method="POST" class="space-y-4">
			<input type="hidden" name="id" value={userId} />
			{#if form?.displayPassword && form?.displayPassword.length > 0}
				{#if form?.displayPassword.length > 0}
					<p class="text-center text-gray-700 dark:text-gray-300">
						You have {form?.displayPassword.length} saved passwords.
					</p>
				{/if}
				<button
					formaction="?/hidePasswords"
					class="inline-block w-full rounded bg-green-500 px-4 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500"
				>
					Hide Saved Passwords
				</button>
			{:else}
				<button
					type="submit"
					class="inline-block w-full rounded bg-green-500 px-4 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500"
				>
					View Saved Passwords
				</button>
			{/if}
		</form>

		<ScrollArea class="h-44 w-fit rounded-md border">
			{#if form?.displayPassword}
				{#each form?.displayPassword as item}
					<p class="mt-2 text-gray-700 dark:text-gray-300">
						<span class="flex flex-col">
							<span class="border-gray-300 p-2 font-bold">
								{item.title}
							</span>

							<span class="border-gray-300 p-2 italic">
								{item.details}
							</span>
						</span>

						<span
							class="mt-2 block rounded bg-white p-2 text-red-500 shadow-lg dark:bg-gray-800 dark:text-red-400"
						>
							{item.password}
						</span>
						was created on {item.createdAt}.
					</p>
					<hr class="my-4 border-t-2 border-green-500 dark:border-green-400" />
				{/each}
			{:else}
				<p class="text-center text-gray-700 dark:text-gray-300">No saved passwords to display.</p>
			{/if}
		</ScrollArea>
		<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
			Explore more with the
			<a
				href="./Apps/Random-Password-Generator"
				class="text-blue-500 underline hover:text-blue-700 dark:text-green-400 dark:hover:text-green-600"
			>
				Password Generator
			</a>
		</h3>
	</section>
{/if}
