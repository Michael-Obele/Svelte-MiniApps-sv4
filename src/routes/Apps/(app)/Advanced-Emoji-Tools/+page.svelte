<script lang="ts">
	import type { PageData } from './$types';
	import Construction from '$lib/logo/Construction.svelte';
	export let data: PageData;
</script>

<section class="p-4 text-center">
	<h3 class="mb-4 text-2xl font-bold">Under Construction</h3>
	<p class="mb-4 text-lg">We're currently working on this site. Please check back later.</p>
	<Construction />
</section>
