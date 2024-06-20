<script lang="ts">
	import { page } from '$app/stores';
	import date from 'date-and-time';
	import { _fetchCommitData } from './+page';
	import type { ActionData } from './$types.js';
	import { enhance } from '$app/forms';

	export let form: ActionData;

	function formatDate(dateString: string | number | Date) {
		const dateObj = new Date(dateString);
		const options = {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		} as Intl.DateTimeFormatOptions;
		return `Released on ${dateObj.toLocaleDateString('en-US', options)} at ${dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
	}

	let userData = $page.data.user?.userData;
	const userId = $page.data.user.userData.id;
</script>

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

			{#if form?.displayPassword}
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
{/if}
