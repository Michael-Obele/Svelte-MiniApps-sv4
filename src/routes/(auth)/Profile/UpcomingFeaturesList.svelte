<script lang="ts">
	import { page } from '$app/stores';
	import { Card, CardHeader, CardContent, CardTitle } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	import { projects, done ,truncateText} from '$lib';


</script>

<Card>
	<CardHeader>
		<CardTitle>Upcoming Apps</CardTitle>
	</CardHeader>
	<CardContent class="grid gap-4">
		<ScrollArea class="h-64 rounded-md">
			{#each projects as app, i}
				{#if !done.includes(app.title)}
					<div class="flex items-center justify-between">
						<div>
							<div class="font-semibold">{app.title}</div>
							<div class="text-sm text-muted-foreground">{truncateText(app.details, 65)}</div>
						</div>
						<div class="text-sm text-muted-foreground">Coming soon</div>
					</div>
					<Separator />
				{/if}
			{/each}
		</ScrollArea>
	</CardContent>
</Card>
