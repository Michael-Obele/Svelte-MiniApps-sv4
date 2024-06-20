<script lang="ts">
	import PwdDisplayComponent from './PwdDisplayComponent.svelte';

	import CommitData from './CommitData.svelte';

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
				class="flex w-full flex-col items-center justify-center space-y-6 xl:flex-row xl:space-x-6"
			>
				<CommitData {data} />

				<UserInfo {userData} {gitData} />
				<PwdDisplayComponent {form} />
			</div>
		</div>
	</div>
</main>
