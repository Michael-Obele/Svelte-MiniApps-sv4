<script lang="ts">
	import { page } from '$app/stores';
	export let data;
	let htmlData = data.info;

	// let svgData = data.props.svgData;
	console.log('data.info = ', data.info);

	function extractContributionData(html: any) {
		const parser = new DOMParser(); // Create a DOM parser
		const doc = parser.parseFromString(html, 'text/html'); // Parse the HTML
		return doc;
	}
	if (data.info) {
		// Example usage:
		const jsonData = extractContributionData(data.info);
		console.log(jsonData);
	}
	console.log(data.info);
</script>

<!-- <h3>{data}</h3> -->

<svelte:head>
	<title>GitHub API</title>
</svelte:head>

<h1 class="text-2xl">GitHub Contributions</h1>

<h1 class="my-15 text-center text-xl">Contributions for {data.props.user} - {data.props.year}</h1>
{#if data.streak}
	<div class="mx-auto my-5 w-fit">
		<div contenteditable="false" bind:innerHTML={data.streak}></div>
	</div>
{/if}

<!-- <div contenteditable="false" bind:innerHTML={htmlData}></div> -->

<!-- {#if htmlData}
	<table>
		<thead>
			{#each htmlData[0].querySelectorAll('td') as headerCell}
				<th>{headerCell.textContent.trim()}</th>
			{/each}
		</thead>
		<tbody>
			{#each htmlData.slice(1) as row}
				<tr>
					{#each row.querySelectorAll('td') as cell}
						<td>{cell.textContent.trim()}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/if} -->

<!-- <table>
	{#each data.info as row}
		<tr>
			{#each row as day}
				<td data-level={day?.level} />
			{/each}
		</tr>
	{/each}
</table> -->

<style>
	h1 {
		text-align: center;
	}

	td {
		padding: 0.4rem;
		border-radius: 2px;

		&[data-level='0'] {
			background-color: #2c333b;
		}

		&[data-level='1'] {
			background-color: #00442a;
		}

		&[data-level='2'] {
			background-color: #006d35;
		}

		&[data-level='3'] {
			background-color: #00a648;
		}

		&[data-level='4'] {
			background-color: #00d35c;
		}
	}
</style>
