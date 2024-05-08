<script lang="ts">
	import { setContext } from 'svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { page } from '$app/stores';
	$: routeId = $page.url.pathname?.split('/')[2];

	let userUsername = $page.data.user.data?.username;
	let sessionUserName = $page.data.user.session?.user?.name;
	setContext('userContext', { userUsername, sessionUserName });
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
<div class="">
	<slot />
</div>
