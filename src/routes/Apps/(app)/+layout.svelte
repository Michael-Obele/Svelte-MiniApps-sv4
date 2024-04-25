<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { page } from '$app/stores';
	$: routeId = $page.url.pathname?.split('/')[2];

	function stringifyWithBigInt(obj: any) {
		return JSON.stringify(obj, (key, value) => {
			if (typeof value === 'bigint') {
				return value.toString(); // Convert bigint to string
			}
			return value; // Return other values as is
		});
	}
</script>

<div class="mb-5 mt-2 flex place-items-center justify-center">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/Apps">Apps</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>{routeId}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
</div>

<slot />
