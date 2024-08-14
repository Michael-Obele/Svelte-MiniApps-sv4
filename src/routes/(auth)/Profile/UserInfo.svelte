<script lang="ts">
	import { UserRoundX } from 'lucide-svelte';

	export let userData;

	// Adjusted function to check if the user or git data indicates admin status
	function isAdmin(userOrGit: { isAdmin?: boolean }) {
		// Checks if userOrGit has a truthy isAdmin property, returns boolean.
		return !!userOrGit?.isAdmin;
	}


	// Function to format the registration method
	function registrationMethod(user: { id:number|null}) {
		if (user?.id !== null) return 'username';
		if (user?.id == null) return 'OAuth';
		return '';
	}
</script>

<!--
@component
## Svelte Component: UserInfo Card
This component shows user details like whether they're an admin, how they registered, and their email. It uses `userData` and `userData` props. It also conditionally renders content based on the availability of these props.

## Key Features
- **Admin Status**: Displays if the user is an admin.
- **Registration Method**: Shows how the user registered.
- **Email Linking**: Indicates if the user has an email linked to their account.

## Helper Functions
- **`isAdmin(userOrGit)`**: Checks if the user or Git data marks them as an admin.
- **`registrationMethod(user, git)`**: Identifies the registration method used by the user.
-->
<div>
	{#if userData || userData}
		<div class="max-w-2xl rounded-lg bg-green-400 p-3 dark:bg-green-900">
			<div class="mb-4">
				<h2 class="text-center text-xl font-bold text-gray-900 dark:text-white">
					{userData?.username} is
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
					You registered using the {registrationMethod(userData)} method.
					<br />
					<span class="text-center text-gray-700 dark:text-gray-300">
						{#if userData?.email}
							<span class="font-semibold text-green-600 dark:text-green-400"
								>Your associated email is:</span
							> <span class="font-semibold">{userData?.email}</span>.
						{:else}
							<span class="font-semibold text-red-600 dark:text-red-400"
								>Please note, you do not have an email linked to this account. This means you won't
								be able to recover your password if you forget it.</span
							>
						{/if}
					</span>
				</p>
			</div>
			{#if userData?.createdAt}
				<div class="mb-4">
					<p class="text-center text-gray-700 dark:text-gray-300">
						Joined on: {userData?.createdAt}
					</p>
				</div>
			{/if}
				<div class="mb-4">
					
					<div class="space-y-5">
						<p class="text-center text-lg text-gray-700 dark:text-gray-300">
							Your profile image is:
						</p>
						{#if userData?.image}
							<img
								src={userData?.image}
								alt="user img"
								class="mx-auto h-auto w-3/4 rounded-xl transition-all duration-300 hover:blur-none sm:blur-sm"
							/>
						{:else}
							<div
								class="mx-auto h-auto w-3/4 rounded-xl bg-blue-600 transition-all duration-300 hover:blur-none sm:blur-sm"
							>
								<UserRoundX class='mx-auto size-80' />
							<span aria-label="Profile Pic"></span>
							</div>
						{/if}
					</div>
				</div>
		</div>
	{/if}
</div>
