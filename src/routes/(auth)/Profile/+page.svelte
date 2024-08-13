<script lang="ts">
	import PwdDisplayComponent from './PwdDisplayComponent.svelte';
	import CommitData from './CommitData.svelte';
	import UserInfo from './UserInfo.svelte';
	import { page } from '$app/stores';
	import type { ActionData } from './$types.js';

	export let data;
	export let form: ActionData;

	let userData = $page.data.user?.userData;
	let gitData = $page.data.user?.session?.user;
</script>

<main class="min-h-screen bg-gray-100 py-4 dark:bg-gray-900">
	<div class="mx-auto px-4">
		<div class="mb-4">
			<h1 class="text-center text-3xl font-bold text-gray-900 dark:text-white">Profile Page</h1>
		</div>
		<div class="mb-4">
			<p class="text-center text-3xl text-gray-700 dark:text-gray-300">
				Welcome {userData?.username}!
			</p>
		</div>
		<div class="flex flex-col items-center justify-center">
			<div
				class="flex w-full flex-col items-center justify-center space-y-6 xl:flex-row xl:space-x-6"
			>
				<CommitData />

				<UserInfo {userData} {gitData} />
				<PwdDisplayComponent {form} />
			</div>
		</div>
	</div>
</main>
