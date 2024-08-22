<script lang="ts">
	import { page } from '$app/stores';
	import { Card, CardHeader, CardContent, CardTitle } from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { StarIcon } from 'lucide-svelte';

	// Function to check if the user or git data indicates admin status
	function isAdmin(userOrGit: { isAdmin?: boolean }) {
		// Checks if userOrGit has a truthy isAdmin property, returns boolean.
		return !!userOrGit?.isAdmin;
	}

	// Function to format the registration method
	function registrationMethod(user: { createdAt: string | null }) {
		if (user?.createdAt !== null) return 'username';
		if (user?.createdAt == null) return 'OAuth';
		return '';
	}

	let userData = $page.data.user?.userData;
</script>

<Card>
	<CardHeader>
		<div class="flex items-center gap-4">
			<Avatar class="h-12 w-12">
				<AvatarImage src={userData?.image} alt="profile image" />
				<AvatarFallback>{userData?.username?.charAt(0)}</AvatarFallback>
			</Avatar>
			<div>
				<div class="font-semibold">{userData.username}</div>
				<div class="text-sm text-muted-foreground">{userData?.email || 'No Email'}</div>
			</div>
		</div>
	</CardHeader>
	<CardContent class="grid gap-2">
		<div class="flex items-center justify-between text-2xl">
			<span class="text-center font-semibold text-green-700 dark:text-green-300">Status: </span>
			<Badge variant="outline" class="size-fit text-xl">
				{#if isAdmin(userData)}
					Admin
				{:else}
					User
				{/if}
			</Badge>
		</div>
		<Separator />
		<span class="text-left text-gray-700 dark:text-gray-300">
			{#if userData?.email}
				<span class="font-semibold text-green-600 dark:text-green-400"
					>Your associated email is:</span
				> <span class="font-semibold">{userData?.email}</span>.
			{:else}
				<span class="font-semibold text-red-600 dark:text-red-400"
					>Please note, you do not have an email linked to this account. This means you won't be
					able to recover your password if you forget it.</span
				>
			{/if}
		</span>
		<Separator />
		<div>
			<h3>More coming soon</h3>
		</div>
		<!-- <div class="flex items-center justify-between">
			<span>Expires</span>
			<span class="text-muted-foreground">2024-07-21</span>
		</div> -->
	</CardContent>
</Card>
