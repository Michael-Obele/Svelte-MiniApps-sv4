<script lang="ts">
	import UserInfo from './UserInfo.svelte';
	import { CalendarDays, Github } from 'lucide-svelte';
	import { page } from '$app/stores';
	import date from 'date-and-time';
	import { _fetchCommitData } from './+page';
	import type { ActionData } from './$types.js';
	import { enhance } from '$app/forms';

	export let data;
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
	let gitData = $page.data.user?.session?.user;
	const userId = $page.data.user.userData.id;

	const pattern = date.compile('ddd, MMM DD YYYY');
	const timePattern = date.compile('hh:mm A');
</script>

<main class="min-h-screen bg-gray-100 py-4 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<div class="mb-4">
			<h1 class="text-center text-3xl font-bold text-gray-900 dark:text-white">Profile Page</h1>
		</div>
		<div class="mb-4">
			<p class="text-center text-3xl text-gray-700 dark:text-gray-300">
				Welcome {gitData?.name || userData?.username}!
			</p>
		</div>
		<div class="flex flex-col items-center justify-center">
			<div
				class="flex w-full flex-col items-center justify-center space-y-6 lg:flex-row lg:space-x-6"
			>
				{#await data.props.commitData}
					<p class="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
						Loading commit data...
					</p>
				{:then commitData}
					<div class="my-4 px-4 lg:m-0 lg:p-0">
						<ol class="relative border-gray-200 dark:border-gray-700 lg:border-s">
							<li class="mb-10 ms-6">
								<span
									class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900"
								>
									<CalendarDays />
								</span>
								<h3
									class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white"
								>
									Svelte MiniApps Update <span
										class="me-2 ms-3 rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
										>Latest</span
									>
								</h3>
								<time
									class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
									>Released on {date.format(new Date(commitData.commit.committer.date), pattern)} at
									{date.format(new Date(commitData.commit.committer.date), timePattern)}</time
								>
								<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
									{commitData.commit.message}
								</p>
								<a
									target="_blank"
									href="https://github.com/Michael-Obele/Svelte-MiniApps"
									class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:text-green-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
									><Github class="mr-2 h-4 w-4" /> Check it out</a
								>
							</li>
						</ol>
					</div>
				{:catch error}
					<p class="text-center text-lg font-semibold text-red-600 dark:text-red-400">
						Failed to load commit data: {error.message}
					</p>
				{/await}

				<UserInfo {userData} {gitData} />

				{#if userData.SavePassword}
					<section
						class="mx-auto my-12 w-3/4 max-w-md rounded-lg bg-white p-4 shadow-md dark:bg-gray-800"
					>
						<p class="mb-2 text-center text-green-500 dark:text-green-400">
							You have saved passwords.
						</p>
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
			</div>
		</div>
	</div>
</main>
