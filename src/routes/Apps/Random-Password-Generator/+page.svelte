<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	import { Input } from '$lib/components/ui/input/index.js';
	console.log(data);
</script>

<h3 class="m-4 text-center text-3xl font-bold underline decoration-green-400">Hi</h3>
<h3 class="m-6 text-center text-2xl">Your Proposed password is</h3>
<p class="mx-auto w-fit rounded-lg bg-slate-400 px-10 py-4">{data.password}</p>

<h4 class="m-6 text-center text-2xl">Choose another Password</h4>
<form action="?/len" method="post" use:enhance class="flex w-full flex-col items-center space-y-4">
	<h3 class="text-lg font-bold">Edit length:</h3>
	<div class="flex items-center">
		<Input
			type="number"
			name="length"
			id="length"
			min="10"
			max="50"
			required
			class="mx-4 rounded-lg border-2 border-gray-300 px-8 py-2 text-center"
			placeholder="Enter length"
		/>

		<button
			type="submit"
			class="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Submit</button
		>
	</div>
</form>
