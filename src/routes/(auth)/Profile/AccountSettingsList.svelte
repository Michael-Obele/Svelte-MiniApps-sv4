<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types.js';
	import { Card, CardHeader, CardContent, CardTitle } from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { StarIcon } from 'lucide-svelte';

	let userData = $page.data.user?.userData;
</script>

<!--
@component
## Svelte Component: Account Settings List
This component is intended to display a list of account settings that users can manage. Currently, it serves as a placeholder indicating that these features are under development and will be available soon.

## Key Features (Future)
- **Change Password**: Allow users to update their account password.
- **Update Email**: Enable users to modify their associated email address.
- **Manage Subscription**: Provide options for users to view or update their subscription plan (if applicable).
- **Edit Profile**: Allow users to update their profile information, such as their name and profile picture.

## Current State
As of now, the component displays a "Coming Soon" message, indicating that the account settings functionality is not yet implemented.
-->

<Card>
	<CardHeader>
		<CardTitle>Account Settings</CardTitle>
	</CardHeader>
	<CardContent class="grid gap-4">
		<h3>Coming Soon</h3>
		<!-- <div class="grid gap-2">
			<div class="flex items-center justify-between">
				<div>
					<div class="font-semibold">Change Password</div>
					<div class="text-sm text-muted-foreground">Update your password</div>
				</div>
				<Button size="sm">Change</Button>
			</div>
			<div class="flex items-center justify-between">
				<div>
					<div class="font-semibold">Update Email</div>
					<div class="text-sm text-muted-foreground">Change your email address</div>
				</div>
				<Button size="sm">Update</Button>
			</div>
			<div class="flex items-center justify-between">
				<div>
					<div class="font-semibold">Manage Subscription</div>
					<div class="text-sm text-muted-foreground">View or update your plan</div>
				</div>
				<Button size="sm">Manage</Button>
			</div>
			<div class="flex items-center justify-between">
				<div>
					<div class="font-semibold">Edit Profile</div>
					<div class="text-sm text-muted-foreground">Update your name and profile picture</div>
				</div>
				<Button size="sm">Edit</Button>
			</div>
		</div> -->
	</CardContent>
</Card>
