<script lang="ts">
	import LatestUpdatesList from './LatestUpdatesList.svelte';

	import AccountSettingsList from './AccountSettingsList.svelte';

	import MiniAppList from './MiniAppList.svelte';

	import UserProfileCard from './UserProfileCard.svelte';

	import PwdDisplayComponent from './PwdDisplayComponent.svelte';
	import CommitData from './CommitData.svelte';
	import UserInfo from './UserInfo.svelte';
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

<Card>
	<CardHeader>
		<CardTitle>Favorite Apps</CardTitle>
	</CardHeader>
	<CardContent class="grid gap-4">
		<h3>None Yet</h3>
		<!--  -->
		<!-- <div class="flex items-center justify-between">
			<div>
				<div class="font-semibold">Password Manager</div>
				<div class="text-sm text-muted-foreground">Secure your passwords</div>
			</div>
			<Button size="sm" variant="ghost">
				<StarIcon class="h-4 w-4 fill-white" />
			</Button>
		</div> -->
		<!--  -->
		<!-- <Separator />
		<div class="flex items-center justify-between">
			<div>
				<div class="font-semibold">Note Taking</div>
				<div class="text-sm text-muted-foreground">Jot down your ideas</div>
			</div>
			<Button size="sm" variant="ghost">
				<StarIcon class="h-4 w-4" />
			</Button>
		</div>
		<Separator />
		<div class="flex items-center justify-between">
			<div>
				<div class="font-semibold">Calendar</div>
				<div class="text-sm text-muted-foreground">Manage your schedule</div>
			</div>
			<Button size="sm" variant="ghost">
				<StarIcon class="h-4 w-4" />
			</Button>
		</div> -->
	</CardContent>
</Card>
