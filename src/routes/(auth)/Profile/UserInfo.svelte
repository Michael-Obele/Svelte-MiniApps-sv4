<script lang="ts">
	export let userData;
	export let gitData;

	// Function to determine if the user is an admin
	function isAdmin(user: { role: { name: string } }) {
		return user?.role?.name === 'ADMIN';
	}

	// Function to format the registration method
	function registrationMethod(user: { username: string }, git: { user: { name: string } }) {
		if (user?.username) return 'username';
		if (git?.user.name) return 'OAuth';
		return '';
	}

	// Function to format the user's role
	function userRole(user: { role: { name: string } }) {
		if (isAdmin(user)) return 'an Admin';
		return 'just a User';
	}
</script>

<div>
	{#if userData || gitData}
		<div class="rounded-lg bg-green-400 p-3 dark:bg-green-900">
			<div class="mb-4">
				<h2 class="text-center text-xl font-bold text-gray-900 dark:text-white">
					{userData?.username || gitData.user.name} is {userRole(userData)}
				</h2>
				{#if isAdmin(userData)}
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
					You registered with {registrationMethod(userData, gitData)} method
					{#if gitData.user.email}
						and your email is: {gitData.user.email}.
					{:else}
						You don't have an email associated with this account. And you can't recover your
						password if you forget it.
					{/if}
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
						Your name is: {gitData.user.name}
					</p>
					<p class="text-center text-gray-700 dark:text-gray-300">Your profile image is:</p>
					<img src={gitData.user.image ?? ''} alt="user img" class="mx-auto w-3/4 rounded-xl" />
				</div>
			{/if}
		</div>
	{/if}
</div>
