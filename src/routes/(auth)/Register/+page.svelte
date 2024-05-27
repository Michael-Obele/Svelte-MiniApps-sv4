<script lang="ts">
	import Svelte from '$lib/logo/svelte.svelte';
	import { Github } from 'lucide-svelte';
	import type { ActionData, SubmitFunction } from './$types';
	import { Button } from '$lib/components/ui/button/index.js';
	import { signIn } from '@auth/sveltekit/client';
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';
	import { error } from '@sveltejs/kit';
	export let form: ActionData;
	let showPassword = false;
	let isLoading = false;
	$: password = showPassword ? 'text' : 'password';
	let errorData:
		| { message: any }
		| { username: number; password: number; error: number }[]
		| string;

	// Start form submission process.
	const handleSubmit: SubmitFunction = () => {
		isLoading = true; // Indicate submission is in progress.
		toast.loading('Submitting...'); // Show loading toast.

		return async ({ update, result }) => {
			if (result.type === 'failure') {
				toast.dismiss(); // Dismiss all toasts.
				toast.error('Error'); // Show error toast.
			} else {
				toast.dismiss(); // Dismiss all toasts.
				toast.success('Success', {
					action: {
						label: 'OK',
						onClick: () => toast.dismiss()
					}
				}); // Show success toast.
			}

			await update(); // Wait for update to finish.
			isLoading = false; // Submission process ends.
		};
	};
</script>

<section class="min-h-screen bg-gray-50 dark:bg-gray-900">
	<div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
		<!-- Logo -->
		<a href="/" class="my-5 flex items-center space-x-3 rtl:space-x-reverse">
			<div class="flex text-2xl font-semibold dark:text-white">
				<span class="m-1 h-6 w-6 self-center whitespace-nowrap">
					<Svelte />
				</span>
				MiniApps
			</div>
		</a>
		<!-- End of Logo -->
		<div
			class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
		>
			<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
				>
					Create your Free Account
				</h1>
				<form
					action="?/register"
					class="space-y-4 md:space-y-6"
					use:enhance={handleSubmit}
					method="POST"
				>
					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Username</label
						>
						<input
							id="username"
							name="username"
							type="text"
							value={form?.username ?? ''}
							required
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-green-600 focus:ring-green-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500 sm:text-sm"
							placeholder="John Doe"
						/>
					</div>
					<div>
						<label
							for="password"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label
						>
						<input
							id="password"
							name="password"
							type={password}
							required
							placeholder="••••••••"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-green-600 focus:ring-green-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500 sm:text-sm"
						/>
					</div>
					<!-- <div>
						<label
							for="confirm-password"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Confirm password</label
						>
						<input
							type="confirm-password"
							name="confirm-password"
							id="confirm-password"
							placeholder="••••••••"
							class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-green-600 focus:ring-green-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500 sm:text-sm"
						/>
					</div> -->
					<div class="flex items-start justify-between">
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
						<div class="flex items-center py-5">
							<input
								type="checkbox"
								name="admin"
								id="admin"
								class="form-checkbox h-5 w-5 text-indigo-600"
							/>
							<label
								for="admin"
								class="ml-2 text-sm text-gray-700 hover:cursor-pointer dark:text-gray-200"
								>Tick if you're an Admin</label
							>
						</div>
					</div>
					{#if form?.user}
						<p class="mt-2 text-sm text-red-500 dark:text-red-400">Username is taken.</p>
					{/if}
					{#if form?.error}
						<p class="mt-2 text-sm text-red-500 dark:text-red-400">{form?.error}</p>
					{/if}
					<Button
						on:click={() => signIn()}
						disabled={isLoading}
						class="mx-auto mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
					>
						<Github class="mx-2" />
						Sign in with Github
					</Button>
					<Button
						type="submit"
						disabled={isLoading}
						class="w-full rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					>
						{isLoading ? 'Submitting...' : 'Create an account'}
					</Button>
					<p class="text-sm font-light text-gray-500 dark:text-gray-400">
						Already have an account? <a
							href="/Login"
							class="font-medium text-green-600 hover:underline dark:text-green-500">Login here</a
						>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
