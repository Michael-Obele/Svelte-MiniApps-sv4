<script lang="ts">
	import { _generatePassword, _copyToClipboard } from './+page';
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { Toggle } from '$lib/components/ui/toggle/index.js';

	import { afterUpdate } from 'svelte';
	import { Pencil } from 'lucide-svelte';

	export let form: ActionData;

	let userData = $page.data.user?.userData;

	let readOnlyStates: any[] = []; // Track the readonly state of each input

	// Reactive statement to initialize readOnlyStates based on form.displayPassword
	$: if (form?.displayPassword) {
		form.displayPassword.forEach((_, i) => {
			readOnlyStates[i] = true; // Initialize all inputs as readonly
		});
	}

	function toggleReadOnly(i: number) {
		console.log(i);
		console.log(readOnlyStates[i]);

		readOnlyStates[i] = !readOnlyStates[i];
	}
</script>

<section class="mx-auto my-12 w-3/4 max-w-md rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
	<p class="mb-2 text-center text-green-500 dark:text-green-400">You can save passwords.</p>
	<form use:enhance action="?/viewPasswords" method="POST" class="space-y-4">
		<input type="hidden" name="id" value={userData?.id} />
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

		{#if form?.displayPassword}
			{#each form?.displayPassword as item, i}
				<div class="mb-4 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
					<form
						action="?/update"
						class:hidden={readOnlyStates[i]}
						use:enhance
						method="POST"
						class="flex-col space-y-2"
					>
						<input type="hidden" name="id" value={item.id} />
						<input
							type="text"
							value={item.title}
							placeholder="Title"
							name="title"
							readonly={readOnlyStates[i]}
							required={readOnlyStates[i]}
							class="rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
						/>
						<input
							type="text"
							value={item.details}
							placeholder="Description"
							name="details"
							readonly={readOnlyStates[i]}
							required={readOnlyStates[i]}
							class="rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
						/>
						<button
							type="submit"
							class="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							submit
						</button>
					</form>

					<Toggle
						on:click={() => toggleReadOnly(i)}
						bind:pressed={readOnlyStates[i]}
						class="mt-1 {!readOnlyStates[i]
							? 'bg-red-500 text-foreground hover:bg-red-500 hover:text-white'
							: 'text-muted-foreground'}"
						aria-label="toggle edit"
					>
						<Pencil class="h-4 w-4" />
					</Toggle>
					<h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">{item.title ?? ''}</h3>

					<h3 class="text-lg text-gray-600 dark:text-gray-300">{item.details ?? ''}</h3>

					<p class="mt-2 text-gray-700 dark:text-gray-300">
						<span
							class="block rounded bg-white p-2 text-red-500 dark:bg-gray-800 dark:text-red-400"
						>
							{item.password}
						</span>
						was created on {item.createdAt}.
					</p>
					<hr class="my-4 border-t-2 border-green-500 dark:border-green-400" />
				</div>
			{/each}
		{/if}
	</form>
</section>
