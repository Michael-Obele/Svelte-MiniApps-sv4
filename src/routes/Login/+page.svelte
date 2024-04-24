<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;

	let showPassword = false;
	$: password = showPassword ? 'text' : 'password';
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-800 sm:px-6 lg:px-8"
>
	<div class="w-full max-w-md space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Login</h2>
		</div>
		<form action="?/login" method="POST" class="mt-8 space-y-6">
			<div class="-space-y-px rounded-md shadow-sm">
				<div>
					<label for="username" class="sr-only">Username</label>
					<input
						id="username"
						name="username"
						value={form?.username ?? ''}
						type="text"
						required
						class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 sm:text-sm"
						placeholder="Username"
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type={password}
						required
						class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 sm:text-sm"
						placeholder="Password"
					/>
				</div>
				<div class="flex items-center py-5">
					<input
						type="checkbox"
						bind:checked={showPassword}
						name="showPassword"
						id="showPassword"
						class="form-checkbox h-5 w-5 text-indigo-600"
					/>
					<label
						for="showPassword"
						class="ml-2 text-sm text-gray-700 hover:cursor-pointer dark:text-gray-200"
						>Show Password</label
					>
				</div>
			</div>
			{#if form?.invalid}
				<p class="mt-2 text-sm text-red-500 dark:text-red-400">
					Username and password is required.
				</p>
			{/if}

			{#if form?.credentials}
				<p class="mt-2 text-sm text-red-500 dark:text-red-400">
					You have entered the wrong credentials.
				</p>
			{/if}
			<div>
				<button
					type="submit"
					class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:focus:ring-indigo-700"
				>
					Log in
				</button>
			</div>
		</form>
	</div>
</div>
