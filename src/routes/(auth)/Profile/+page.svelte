<script lang="ts">
	import { Github } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { stringifyWithBigInt } from '$lib/utils';
	export let data;
	let gitDate = data.commitData.commit.committer.date;

	function formatDate(dateString: string | number | Date) {
		const dateObj = new Date(dateString);
		return `Released on ${dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
	}

	const formattedDate = formatDate(gitDate);
</script>

<div class="bg-gray-100 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<div class="flex min-h-screen flex-col items-center justify-center">
			<div class="mb-4">
				<h1 class="text-center text-3xl font-bold text-gray-900 dark:text-white">Profile Page</h1>
			</div>
			<div class="flex w-full flex-col items-center justify-center lg:flex-row">
				<ol class="relative border-s border-gray-200 dark:border-gray-700">
					<li class="mb-10 ms-6">
						<span
							class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
						>
							<svg
								class="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
								/>
							</svg>
						</span>
						<h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
							Svelte MiniApps Update <span
								class="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
								>Latest</span
							>
						</h3>
						<time
							class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
							>{formattedDate}</time
						>
						<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
							{data.gitMessage}
						</p>
						<a
							target="_blank"
							href="https://github.com/Michael-Obele/Svelte-MiniApps"
							class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
							><Github class="mr-2 h-4 w-4" /> Check it out</a
						>
					</li>
				</ol>
				<div>
					{#if $page.data.user || $page.data.session}
						<div class="mb-4">
							<p class="text-center text-gray-700 dark:text-gray-300">Welcome!</p>
						</div>
						<div class="rounded-lg bg-green-400 p-3 dark:bg-green-900">
							<!-- <div class="mb-4">
							<h2 class="text-center text-xl font-bold text-gray-900 dark:text-white">
								{$page.data.user.username} is
								{#if $page.data.user.role.name === 'ADMIN'}
									an Admin
								{:else}
									<span class="text-base text-gray-400">just</span> a User
								{/if}
							</h2>
							{#if $page.data.user.isAdmin}
								<h3 class="text-center text-lg font-semibold text-green-700 dark:text-green-300">
									You are an Admin
								</h3>
							{:else}
								<h3 class="text-center text-lg font-semibold text-red-700 dark:text-red-300">
									You are not an Admin
								</h3>
							{/if}
						</div> -->
							<!-- <div class="mb-4">
							<p class="text-center text-gray-700 dark:text-gray-300">
								You registered with
								{#if $page.data.user.username}
									username
								{:else}
									OAuth
								{/if}
								method
								{#if $page.data.session?.user?.email}
								and your email is: {$page.data.session.user.email}.
								{:else}
									You don't have an email associated with this account. And you can't recover your
									password if you forget it.
								{/if}
							</p>
						</div> -->
							<div class="mb-4">
								<!-- <p class="text-center text-gray-700 dark:text-gray-300">
								Joined on: {$page.data.user.createdAt}
							</p> -->
							</div>
							{#if $page.data.session?.user?.name || $page.data.session?.user?.email || $page.data.session?.user?.image}
								<div class="mb-4">
									<p class="text-center text-gray-700 dark:text-gray-300">
										Your name is: {$page.data.session.user.name}
									</p>
									<p class="text-center text-gray-700 dark:text-gray-300">
										Your email is: {$page.data.session.user.email}
									</p>
									<p class="text-center text-gray-700 dark:text-gray-300">
										Your profile image is:
										<img src={$page.data.session.user.image} alt="user img" />
									</p>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div class="overflow-ellipsis">
		<h1>session: {stringifyWithBigInt($page.data.session)}</h1>
		<h1>user: {stringifyWithBigInt($page.data.user)}</h1>
	</div>
</div>
