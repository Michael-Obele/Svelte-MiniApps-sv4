<script lang="ts">
	import { UserRoundX } from 'lucide-svelte';

	export let userData;
	export let gitData;

	// Adjusted function to check if the user or git data indicates admin status
	function isAdmin(userOrGit: { isAdmin?: boolean }) {
		// Checks if userOrGit has a truthy isAdmin property, returns boolean.
		return !!userOrGit?.isAdmin;
	}

	// Function to format the registration method
	function registrationMethod(user: { username: string }, git: { name: string }) {
		if (user?.username) return 'username';
		if (git?.name) return 'OAuth';
		return '';
	}
</script>

<div>
	{#if userData || gitData}
		<div class="rounded-lg bg-green-400 p-3 dark:bg-green-900">
			<div class="mb-4">
				<h2 class="text-center text-xl font-bold text-gray-900 dark:text-white">
					{userData?.username || gitData?.name} is
					{#if isAdmin(userData)}
						<span class="text-center text-lg font-semibold text-green-700 dark:text-green-300">
							an Admin
						</span>
					{:else}
						<span class="text-center text-lg font-semibold text-red-700 dark:text-red-300">
							not an Admin
						</span>
					{/if}
				</h2>
			</div>
			<div class="mb-4">
				<p class="text-center text-gray-700 dark:text-gray-300">
					You registered using the {registrationMethod(userData, gitData)} method.
					<br />
					<span class="text-center text-gray-700 dark:text-gray-300">
						{#if gitData?.email}
							<span class="font-semibold text-green-600 dark:text-green-400"
								>Your associated email is:</span
							> <span class="font-semibold">{gitData?.email}</span>.
						{:else}
							<span class="font-semibold text-red-600 dark:text-red-400"
								>Please note, you do not have an email linked to this account. This means you won't
								be able to recover your password if you forget it.</span
							>
						{/if}
					</span>
				</p>
			</div>
			{#if userData}
				<div class="mb-4">
					<p class="text-center text-gray-700 dark:text-gray-300">
						Joined on: {userData?.createdAt}
					</p>
				</div>
			{/if}
			{#if gitData}
				<div class="mb-4">
					<p class="text-center text-gray-700 dark:text-gray-300">
						Your name is: {gitData?.name}
					</p>
					<div class="space-y-5">
						<p class="text-center text-lg text-gray-700 dark:text-gray-300">
							Your profile image is:
						</p>
						{#if gitData?.image}
							<img
								src={gitData?.image}
								alt="user img"
								class="mx-auto h-auto w-3/4 rounded-xl transition-all duration-300 hover:blur-none md:blur-sm"
							/>
						{:else}
							<div
								class="h-auto min-w-2.5 max-w-lg rounded-lg transition-all duration-300 hover:blur-none md:blur-sm"
							>
								<UserRoundX />
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
