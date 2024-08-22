<script lang="ts">
	import { Card, CardHeader, CardContent, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { projects, done, truncateText } from '$lib';

	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
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
