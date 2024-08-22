<script lang="ts">
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
	import { projects, done, truncateText } from '$lib';

	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	let userData = $page.data.user?.userData;
</script>

<Card>
	<CardHeader>
		<CardTitle>Mini Apps</CardTitle>
	</CardHeader>
	<ScrollArea class="h-64 rounded-md">
		<CardContent class="grid gap-4">
			<div class="grid gap-2">
				{#each projects as app}
					{#if done.includes(app.title)}
						<div class="flex items-center justify-between">
							<div>
								<div class="font-semibold">{app.title}</div>
								<div class="text-sm text-muted-foreground">{truncateText(app.details, 65)}</div>
							</div>
							<a href="/Apps/{app.title.split(' ').join('-')}">
								<Button size="sm">Open</Button>
							</a>
						</div>
					{/if}
				{/each}
			</div>
		</CardContent>
	</ScrollArea>
</Card>
