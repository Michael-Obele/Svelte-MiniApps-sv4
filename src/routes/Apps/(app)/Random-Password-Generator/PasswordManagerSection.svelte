<script lang="ts">
	import { _generatePassword, _copyToClipboard } from './+page';
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let form: ActionData;

	let userData = $page.data.user?.userData;
</script>

<section class="mx-auto my-12 w-3/4 max-w-md rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
	<p class="mb-2 text-center text-green-500 dark:text-green-400">You can have saved passwords.</p>
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
		{#if form?.error}
			<p
				class="mt-2 block rounded bg-white p-2 text-red-500 shadow-lg dark:bg-gray-800 dark:text-red-400"
			>
				{form?.error}
			</p>
		{:else if form?.displayPassword}
			{#each form?.displayPassword as item}
				<p class="mt-2 text-gray-700 dark:text-gray-300">
					<span
						class="mt-2 block rounded bg-white p-2 text-red-500 shadow-lg dark:bg-gray-800 dark:text-red-400"
					>
						{item.password}
					</span>
					was created on {item.createdAt}.
				</p>
				<hr class="my-4 border-t-2 border-green-500 dark:border-green-400" />
			{/each}
		{/if}
	</form>
</section>
