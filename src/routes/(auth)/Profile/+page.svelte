<script lang="ts">
	import { page } from '$app/stores';
	import { stringifyWithBigInt } from '$lib/utils';
</script>

<div class="min-h-screen bg-gray-100 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<div class="flex min-h-screen flex-col items-center justify-center">
			<div class="flex w-full max-w-md flex-col items-center justify-center">
				<div class="mb-4">
					<h1 class="text-center text-3xl font-bold text-gray-900 dark:text-white">Profile Page</h1>
				</div>
				{#if $page.data.user}
					<div class="mb-4">
						<p class="text-center text-gray-700 dark:text-gray-300">
							Welcome {$page.data.user.username}!
						</p>
					</div>
					<div class="rounded-lg bg-green-400 p-3 dark:bg-green-900">
						<div class="mb-4">
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
						</div>
						<div class="mb-4">
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
									You don't have an email associated with this account. And you can't recover you're
									password if you forget it.
								{/if}
							</p>
						</div>
						<div class="mb-4">
							<p class="text-center text-gray-700 dark:text-gray-300">
								Joined on: {$page.data.user.createdAt}
							</p>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<h1>{stringifyWithBigInt($page)}</h1>
