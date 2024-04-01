<script lang="ts">
	import { Clipboard } from 'lucide-svelte';

	import { Input } from '$lib/components/ui/input/index.js';
	var length: number = 12;
	import { _generateClientPassword, _copyToClipboard } from './+page';
	var password = _generateClientPassword(length);
</script>

<h3 class="m-4 text-center text-3xl font-bold underline decoration-green-400">Hi</h3>
<h3 class="m-6 text-center text-2xl">Your Proposed password is</h3>
<div class="mx-auto flex w-fit rounded-lg bg-slate-400 px-4 py-4">
	<p class="mx-5">{password}</p>
	<button on:click={() => _copyToClipboard(password)}>
		<Clipboard />
	</button>
</div>

<h4 class="m-6 text-center text-2xl">Choose another Password</h4>
<div class="flex w-full flex-col items-center space-y-4">
	<h3 class="text-lg font-bold">Edit length:</h3>
	<div class="flex items-center">
		<input
			type="number"
			name="length"
			id="length"
			bind:value={length}
			min="10"
			max="50"
			required
			class="mx-4 rounded-lg border-2 border-gray-300 px-8 py-2 text-center"
			placeholder=""
		/>

		<button
			type="submit"
			on:click={() => _generateClientPassword(length)}
			class="rounded-lg bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">Submit</button
		>
	</div>
</div>
