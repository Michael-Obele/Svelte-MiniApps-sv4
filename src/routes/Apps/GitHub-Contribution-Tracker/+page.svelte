<script>
// @ts-nocheck

	export let data;
	

	// Function to extract contributions from a tool-tip's content
	function extractContributions(tooltipContent) {
		const match = tooltipContent.match(/(\d+) contributions/);
		return match ? parseInt(match[1], 10) : null;
	}

	// Function to store data in an array of arrays
	function storeContributionsData() {
		// Select all tool-tip elements
		const tooltips = document.querySelectorAll('tool-tip');
		const contributionsDat = [];
		
		if(tooltips){
	// Loop through each tool-tip
	tooltips.forEach((tooltip) => {
		// Extract the tool-tip's content
		const content = tooltip.textContent.trim();
		// Extract the number of contributions or null if no contributions
		// const contributions = extractContributions(content);
		// Add the contributions to the array of arrays
	
		contributionsData.push([content]);
 	});
}
console.log(contributionsData)
	return contributionsData;
}

	// Example usage
	// const contributionsData = storeContributionsData();
	// console.log(contributionsData);
</script>

<h1 class="text-center text-2xl underline">Coming very soon</h1>

<div class="js-yearly-contributions">
	<div class="position-relative">
		<h2 class="f4 text-normal mb-2">94 contributions in 2024</h2>

		<div class="graph-before-activity-overview border py-2">
			<div
				class="js-calendar-graph mx-md-2 d-flex flex-column flex-items-end flex-xl-items-center is-graph-loading graph-canvas ContributionCalendar height-full mx-3 overflow-hidden pt-1 text-center"
				data-graph-url="/users/Michael-Obele/contributions"
				data-url="/Michael-Obele"
				data-from="2024-01-01 00:00:00 UTC"
				data-to="2024-12-31 23:59:59 UTC"
				data-org=""
			>
				<div style="max-width: 100%; overflow-y: hidden; overflow-x: auto">
					<table
						class="ContributionCalendar-grid js-calendar-graph-table"
						style="border-spacing: 3px; overflow: hidden; position: relative"
					>
						<caption class="sr-only">Contribution Graph</caption>

						<thead>
							<tr style="height: 13px">
								<td style="width: 28px">
									<span class="sr-only">Day of Week</span>
								</td>

								<td class="ContributionCalendar-label" colspan="5" style="position: relative">
									<span class="sr-only">January</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Jan</span>
								</td>

								<td class="ContributionCalendar-label" colspan="4" style="position: relative">
									<span class="sr-only">February</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Feb</span>
								</td>

								<td class="ContributionCalendar-label" colspan="5" style="position: relative">
									<span class="sr-only">March</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Mar</span>
								</td>

								<td class="ContributionCalendar-label" colspan="4" style="position: relative">
									<span class="sr-only">April</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Apr</span>
								</td>

								<td class="ContributionCalendar-label" colspan="4" style="position: relative">
									<span class="sr-only">May</span>
									<span aria-hidden="true" style="position: absolute; top: 0">May</span>
								</td>

								<td class="ContributionCalendar-label" colspan="5" style="position: relative">
									<span class="sr-only">June</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Jun</span>
								</td>

								<td class="ContributionCalendar-label" colspan="4" style="position: relative">
									<span class="sr-only">July</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Jul</span>
								</td>

								<td class="ContributionCalendar-label" colspan="4" style="position: relative">
									<span class="sr-only">August</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Aug</span>
								</td>

								<td class="ContributionCalendar-label" colspan="5" style="position: relative">
									<span class="sr-only">September</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Sep</span>
								</td>

								<td class="ContributionCalendar-label" colspan="4" style="position: relative">
									<span class="sr-only">October</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Oct</span>
								</td>

								<td class="ContributionCalendar-label" colspan="4" style="position: relative">
									<span class="sr-only">November</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Nov</span>
								</td>

								<td class="ContributionCalendar-label" colspan="5" style="position: relative">
									<span class="sr-only">December</span>
									<span aria-hidden="true" style="position: absolute; top: 0">Dec</span>
								</td>
							</tr>
						</thead>

						<tbody>
							<tr style="height: 10px">
								<td
									tabindex="0"
									data-ix="9"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-03"
									id="contribution-day-component-0-9"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-842cca27-4b8b-4ffe-a601-ffa62e1d1a60"
									for="contribution-day-component-0-9"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="10"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-10"
									id="contribution-day-component-0-10"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-19cacecf-321b-4b76-83ed-93b396688762"
									for="contribution-day-component-0-10"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on March 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="11"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-17"
									id="contribution-day-component-0-11"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-eca11814-228c-4b1a-8a07-5132bedf03f5"
									for="contribution-day-component-0-11"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on March 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="12"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-24"
									id="contribution-day-component-0-12"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-22b4cca6-cacc-462e-92dc-7a30f367f651"
									for="contribution-day-component-0-12"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on March 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="13"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-2"
									style="width: 10px"
									data-date="2024-03-31"
									id="contribution-day-component-0-13"
									data-level="2"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-eb342f46-ebef-4d77-a443-14cd5bea29ce"
									for="contribution-day-component-0-13"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">4 contributions on March 31st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="14"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-07"
									id="contribution-day-component-0-14"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9eb5a204-80df-46f8-9ad7-fd7cd82f9a2f"
									for="contribution-day-component-0-14"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 7th.</tool-tip
								>

								<d
									tabindex="0"
									data-ix="15"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-14"
									id="contribution-day-component-0-15"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></d>
								<tool-tip
									id="tooltip-834a2762-4aed-4635-a67c-bf979f27f922"
									for="contribution-day-component-0-15"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="16"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-21"
									id="contribution-day-component-0-16"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7d02e004-4ea7-4f04-b3ce-5c58dc793573"
									for="contribution-day-component-0-16"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="17"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-28"
									id="contribution-day-component-0-17"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5bad2154-ae04-4cff-90e6-47176fd69dab"
									for="contribution-day-component-0-17"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="18"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-05"
									id="contribution-day-component-0-18"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-74ff8fcd-ccae-45c8-a84f-ac6668f4afd0"
									for="contribution-day-component-0-18"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="19"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-12"
									id="contribution-day-component-0-19"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1e9f9ed4-8227-48cb-bb37-1622e7ef14fc"
									for="contribution-day-component-0-19"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="20"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-19"
									id="contribution-day-component-0-20"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-88e18841-1978-49b7-83a3-0a4bc785ed51"
									for="contribution-day-component-0-20"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="21"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-26"
									id="contribution-day-component-0-21"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f0878431-c958-4682-986c-44d1c6c45039"
									for="contribution-day-component-0-21"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="8"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-02-26"
									id="contribution-day-component-1-8"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-99003fec-dc2d-4772-ba45-5c87d9c63f0d"
									for="contribution-day-component-1-8"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on February 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="9"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-04"
									id="contribution-day-component-1-9"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-14282d83-3de4-4828-a9e4-4c4d67d88cfe"
									for="contribution-day-component-1-9"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="10"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-2"
									style="width: 10px"
									data-date="2024-03-11"
									id="contribution-day-component-1-10"
									data-level="2"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f0ff4f36-8b74-41e8-93c7-1faa571411a0"
									for="contribution-day-component-1-10"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">4 contributions on March 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="11"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-18"
									id="contribution-day-component-1-11"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9f79c145-58a3-44c9-bf71-995ea395abdb"
									for="contribution-day-component-1-11"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on March 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="12"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-4"
									style="width: 10px"
									data-date="2024-03-25"
									id="contribution-day-component-1-12"
									data-level="4"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1126ba23-115b-463d-a433-6367af89db39"
									for="contribution-day-component-1-12"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">8 contributions on March 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="13"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-4"
									style="width: 10px"
									data-date="2024-04-01"
									id="contribution-day-component-1-13"
									data-level="4"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0f97d521-620a-4096-bacd-7bb1abc869dc"
									for="contribution-day-component-1-13"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">9 contributions on April 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="14"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-08"
									id="contribution-day-component-1-14"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-894c9677-6320-4a18-9eeb-dd79fc552149"
									for="contribution-day-component-1-14"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="15"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-15"
									id="contribution-day-component-1-15"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ccbfe258-6686-4d4c-93ee-6b49ccfefdf0"
									for="contribution-day-component-1-15"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="16"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-22"
									id="contribution-day-component-1-16"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-fe61c714-1131-4b5d-8c46-f996b765fa36"
									for="contribution-day-component-1-16"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="17"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-29"
									id="contribution-day-component-1-17"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-cc538480-300c-47a8-aa45-857593326993"
									for="contribution-day-component-1-17"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="18"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-06"
									id="contribution-day-component-1-18"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-791b62e1-1ca8-46d2-97b9-96f758d0a15d"
									for="contribution-day-component-1-18"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="19"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-13"
									id="contribution-day-component-1-19"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9612b1bc-db7e-47f7-9bff-d492139eb68b"
									for="contribution-day-component-1-19"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="20"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-20"
									id="contribution-day-component-1-20"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-386ef7d5-9ea2-4b9f-8563-6987fdd45e2a"
									for="contribution-day-component-1-20"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="21"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-27"
									id="contribution-day-component-1-21"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8abbe254-a3cf-43b9-a4e4-6f5bbf4bd3cd"
									for="contribution-day-component-1-21"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="22"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-03"
									id="contribution-day-component-1-22"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-09ddce5f-129e-48ae-84a1-1a6968a8aa5c"
									for="contribution-day-component-1-22"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="23"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-10"
									id="contribution-day-component-1-23"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-81721a31-8641-4acd-9307-94853a456eab"
									for="contribution-day-component-1-23"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="24"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-17"
									id="contribution-day-component-1-24"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-67678071-45de-4213-8ce9-22f3b057b47b"
									for="contribution-day-component-1-24"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="25"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-24"
									id="contribution-day-component-1-25"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-08a1f40b-2903-4eae-9ad8-94481f234a48"
									for="contribution-day-component-1-25"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="26"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-01"
									id="contribution-day-component-1-26"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7e42ddd2-f6cc-4033-9685-a3330dcd1e27"
									for="contribution-day-component-1-26"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="27"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-08"
									id="contribution-day-component-1-27"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-df668ba3-faaa-41e8-ade6-b41ce924ae90"
									for="contribution-day-component-1-27"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="28"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-15"
									id="contribution-day-component-1-28"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-36cafbc2-a346-4d96-a260-de7d69c8ae3c"
									for="contribution-day-component-1-28"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="29"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-22"
									id="contribution-day-component-1-29"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c1e415ef-1fa6-4963-ae27-b2885245012f"
									for="contribution-day-component-1-29"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="30"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-29"
									id="contribution-day-component-1-30"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4d2ad0de-fe3e-4127-af0e-9899a6569589"
									for="contribution-day-component-1-30"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="31"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-05"
									id="contribution-day-component-1-31"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-99b1a5ef-c45b-40ba-96ce-e18f8f23fdcc"
									for="contribution-day-component-1-31"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="32"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-12"
									id="contribution-day-component-1-32"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9f68896d-4a75-446e-845b-84d233ca73f5"
									for="contribution-day-component-1-32"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="33"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-19"
									id="contribution-day-component-1-33"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1461e3ba-6174-4781-a85c-ac1b94459751"
									for="contribution-day-component-1-33"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="34"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-26"
									id="contribution-day-component-1-34"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-547fdbb8-7716-4bd5-b66f-cc4a16a2df15"
									for="contribution-day-component-1-34"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="35"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-02"
									id="contribution-day-component-1-35"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ff7fe9bb-4254-45b6-b273-e03ec4fcbb86"
									for="contribution-day-component-1-35"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="36"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-09"
									id="contribution-day-component-1-36"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7cc44bda-fa2d-410c-b6ba-6b3fdb2a2737"
									for="contribution-day-component-1-36"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="37"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-16"
									id="contribution-day-component-1-37"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-036a4b15-e0c3-45dc-a098-6ea1d80b31e2"
									for="contribution-day-component-1-37"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="38"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-23"
									id="contribution-day-component-1-38"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0961ac35-e52d-48df-b90a-a82cc79a556d"
									for="contribution-day-component-1-38"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="39"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-30"
									id="contribution-day-component-1-39"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7c7975ca-b177-4b3f-ae52-e17ef2d9f233"
									for="contribution-day-component-1-39"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="40"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-07"
									id="contribution-day-component-1-40"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e4e23677-f389-4d7d-88d4-b72d8819ecd6"
									for="contribution-day-component-1-40"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="41"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-14"
									id="contribution-day-component-1-41"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-08d8554f-2c91-409d-97fd-b97bdbaf4dfa"
									for="contribution-day-component-1-41"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="42"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-21"
									id="contribution-day-component-1-42"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6077f999-dd54-4466-89ee-7533c793073f"
									for="contribution-day-component-1-42"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="43"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-28"
									id="contribution-day-component-1-43"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-79f18135-f160-48ca-ab3a-e0b14fe6c306"
									for="contribution-day-component-1-43"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="44"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-04"
									id="contribution-day-component-1-44"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3e1c9785-f84c-4c09-aba6-bdc3ed116319"
									for="contribution-day-component-1-44"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="45"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-11"
									id="contribution-day-component-1-45"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-96c96de8-f0e0-48d9-997f-debb262b3717"
									for="contribution-day-component-1-45"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="46"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-18"
									id="contribution-day-component-1-46"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c77ff4d4-e029-499a-9894-ae10db6a0130"
									for="contribution-day-component-1-46"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="47"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-25"
									id="contribution-day-component-1-47"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-bdbd9fe8-8144-4839-bf49-7abb59c2aca3"
									for="contribution-day-component-1-47"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="48"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-02"
									id="contribution-day-component-1-48"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e65afccc-b63c-4d81-805f-245754760b06"
									for="contribution-day-component-1-48"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="49"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-09"
									id="contribution-day-component-1-49"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8a5c8a2c-ed4f-427f-a74f-db9f374aa439"
									for="contribution-day-component-1-49"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="50"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-16"
									id="contribution-day-component-1-50"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-73147ab4-a79b-46d6-8aa5-7e01e0f6c693"
									for="contribution-day-component-1-50"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="51"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-23"
									id="contribution-day-component-1-51"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5264cc16-0a2d-4139-b93a-27c9aed4788c"
									for="contribution-day-component-1-51"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="52"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-30"
									id="contribution-day-component-1-52"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-341452c1-83d3-4776-b780-cc1b7763cb4e"
									for="contribution-day-component-1-52"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 30th.</tool-tip
								>
							</tr>
							<tr style="height: 10px">
								<td class="ContributionCalendar-label" style="position: relative">
									<span class="sr-only">Tuesday</span>
									<span
										aria-hidden="true"
										style="clip-path: Circle(0); position: absolute; bottom: -3px"
									>
										Tue
									</span>
								</td>

								<td
									tabindex="0"
									data-ix="0"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-2"
									style="width: 10px"
									data-date="2024-01-02"
									id="contribution-day-component-2-0"
									data-level="2"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-66aa4122-68a9-4d96-bf5c-46ddbb483cd7"
									for="contribution-day-component-2-0"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">3 contributions on January 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="1"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-09"
									id="contribution-day-component-2-1"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1103f420-3d2e-4a29-83a2-89dfe6061a01"
									for="contribution-day-component-2-1"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="2"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-16"
									id="contribution-day-component-2-2"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7cea6989-6d33-4d38-8f66-74547b17d354"
									for="contribution-day-component-2-2"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="3"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-23"
									id="contribution-day-component-2-3"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4b0c180b-dbc9-4623-81c4-7413602d13bc"
									for="contribution-day-component-2-3"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="4"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-30"
									id="contribution-day-component-2-4"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-bf20dff4-e440-4c33-9c1b-7111e0dc866d"
									for="contribution-day-component-2-4"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="5"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-06"
									id="contribution-day-component-2-5"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d43b18e3-0aeb-47a0-ab71-1fcfa5b84c90"
									for="contribution-day-component-2-5"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="6"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-13"
									id="contribution-day-component-2-6"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5483f5fb-2339-49b0-9468-e469bb493cf0"
									for="contribution-day-component-2-6"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="7"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-20"
									id="contribution-day-component-2-7"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a2d8db17-5a8c-4409-911e-2ad258784176"
									for="contribution-day-component-2-7"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="8"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-02-27"
									id="contribution-day-component-2-8"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-de782f10-4442-44cf-af2f-b8886062e57b"
									for="contribution-day-component-2-8"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on February 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="9"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-05"
									id="contribution-day-component-2-9"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ea29ba84-ab70-45dc-acbb-735a3e850753"
									for="contribution-day-component-2-9"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on March 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="10"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-12"
									id="contribution-day-component-2-10"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d534159a-5a5a-4cd7-8776-e493798e44ab"
									for="contribution-day-component-2-10"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="11"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-19"
									id="contribution-day-component-2-11"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-fab1346b-f1fa-44ac-825e-fbbd7f2423a4"
									for="contribution-day-component-2-11"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="12"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-3"
									style="width: 10px"
									data-date="2024-03-26"
									id="contribution-day-component-2-12"
									data-level="3"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-09793790-7a73-4d1d-84db-40724c889c3d"
									for="contribution-day-component-2-12"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">6 contributions on March 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="13"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-04-02"
									id="contribution-day-component-2-13"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3b518fc4-35f9-49db-837f-0e5c97db4080"
									for="contribution-day-component-2-13"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on April 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="14"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-09"
									id="contribution-day-component-2-14"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8959ea0e-e7fb-490d-82f6-4db2d1264f8a"
									for="contribution-day-component-2-14"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="15"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-16"
									id="contribution-day-component-2-15"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8c6df71a-f9a8-4270-a783-c76d87e43227"
									for="contribution-day-component-2-15"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="16"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-23"
									id="contribution-day-component-2-16"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-61fb6e5c-510b-46bd-b66b-19899120db7b"
									for="contribution-day-component-2-16"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="17"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-30"
									id="contribution-day-component-2-17"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0efb7281-2deb-43d9-9a7d-bfed455fc0d4"
									for="contribution-day-component-2-17"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="18"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-07"
									id="contribution-day-component-2-18"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-98671820-a4fd-4e38-9773-8e19ac38dbb7"
									for="contribution-day-component-2-18"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="19"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-14"
									id="contribution-day-component-2-19"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d0183ede-c47b-46b9-a53c-86497b0e112b"
									for="contribution-day-component-2-19"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="20"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-21"
									id="contribution-day-component-2-20"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a2e19306-3faf-4387-a62f-c9da1baec4fb"
									for="contribution-day-component-2-20"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="21"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-28"
									id="contribution-day-component-2-21"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f49fa61b-ae8a-4e58-9193-1476eaa9a565"
									for="contribution-day-component-2-21"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="22"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-04"
									id="contribution-day-component-2-22"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8a9979d9-af4e-475f-8ba0-387908b33554"
									for="contribution-day-component-2-22"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="23"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-11"
									id="contribution-day-component-2-23"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-27649263-3bfd-486a-a148-163ab8a2e3fb"
									for="contribution-day-component-2-23"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="24"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-18"
									id="contribution-day-component-2-24"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-13107023-fd30-44a3-a2d9-f8a43690cb35"
									for="contribution-day-component-2-24"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="25"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-25"
									id="contribution-day-component-2-25"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8fb339b8-0d12-48b9-89ae-8689fb721be7"
									for="contribution-day-component-2-25"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="26"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-02"
									id="contribution-day-component-2-26"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a1f946a7-e812-4ea7-ab65-b3e48a53e967"
									for="contribution-day-component-2-26"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="27"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-09"
									id="contribution-day-component-2-27"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ebf3fb26-36f8-4a44-92f2-88bdc5df7168"
									for="contribution-day-component-2-27"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="28"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-16"
									id="contribution-day-component-2-28"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0d9ebf29-7368-4868-90b2-9b4b3b0fb2b9"
									for="contribution-day-component-2-28"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="29"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-23"
									id="contribution-day-component-2-29"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b9d97faf-2a90-41fc-ada2-347f418720b8"
									for="contribution-day-component-2-29"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="30"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-30"
									id="contribution-day-component-2-30"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-24252409-f15f-40f2-bd04-5290d0eb81ce"
									for="contribution-day-component-2-30"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="31"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-06"
									id="contribution-day-component-2-31"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-79c2984f-a1e8-43e8-a8bf-a8cd56f042b2"
									for="contribution-day-component-2-31"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="32"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-13"
									id="contribution-day-component-2-32"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8a3456f4-7ef6-4e1f-8e90-2ae83b699be6"
									for="contribution-day-component-2-32"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="33"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-20"
									id="contribution-day-component-2-33"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a51df332-91e6-4e43-9238-e3bfa2c6cc27"
									for="contribution-day-component-2-33"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="34"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-27"
									id="contribution-day-component-2-34"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-31ff0234-eb72-4c5c-b0f5-3b7fcf78b6a1"
									for="contribution-day-component-2-34"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="35"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-03"
									id="contribution-day-component-2-35"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-2dfbfdac-02d8-4ddc-9e39-48b43aec3d9f"
									for="contribution-day-component-2-35"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="36"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-10"
									id="contribution-day-component-2-36"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a728f0aa-8f83-49ca-85ee-ef4646ee9e25"
									for="contribution-day-component-2-36"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="37"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-17"
									id="contribution-day-component-2-37"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-aa51e775-dc64-47a2-ac48-ea30e3767933"
									for="contribution-day-component-2-37"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="38"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-24"
									id="contribution-day-component-2-38"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-01507ed3-dfe4-4ca3-b45a-fd92be63d0e2"
									for="contribution-day-component-2-38"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="39"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-01"
									id="contribution-day-component-2-39"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0e8bae4d-ac59-4415-8da3-69bae54ce719"
									for="contribution-day-component-2-39"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="40"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-08"
									id="contribution-day-component-2-40"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6067a2f0-938d-4320-a695-c10fd02f7dbe"
									for="contribution-day-component-2-40"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="41"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-15"
									id="contribution-day-component-2-41"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4bdb820b-93f7-498c-830e-67cfdd627cab"
									for="contribution-day-component-2-41"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="42"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-22"
									id="contribution-day-component-2-42"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9dfbbbd3-8be2-4159-ae1c-15a8ea85d51a"
									for="contribution-day-component-2-42"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="43"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-29"
									id="contribution-day-component-2-43"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ba69cf50-58d7-4794-8638-69dafe05153c"
									for="contribution-day-component-2-43"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="44"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-05"
									id="contribution-day-component-2-44"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e5e593f5-cf66-4c8b-8081-3fd29c2d0e29"
									for="contribution-day-component-2-44"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="45"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-12"
									id="contribution-day-component-2-45"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9f438fef-4f83-4e89-b23e-8bb78f9db2b1"
									for="contribution-day-component-2-45"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="46"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-19"
									id="contribution-day-component-2-46"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-bc12bfb6-b548-437d-9f8f-177aef7a9b45"
									for="contribution-day-component-2-46"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="47"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-26"
									id="contribution-day-component-2-47"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-361e6472-7ea8-47aa-b352-b4aa8d3a967d"
									for="contribution-day-component-2-47"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="48"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-03"
									id="contribution-day-component-2-48"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0f942d10-e908-4c16-90d6-99c0e51d2a82"
									for="contribution-day-component-2-48"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="49"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-10"
									id="contribution-day-component-2-49"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b6cca586-22d2-4424-94ec-b8d62f3a9934"
									for="contribution-day-component-2-49"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="50"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-17"
									id="contribution-day-component-2-50"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9b97b2b0-9a34-4b2f-b164-b260ae664741"
									for="contribution-day-component-2-50"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="51"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-24"
									id="contribution-day-component-2-51"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-fca8f8e3-cd97-4410-a65a-bb2654972885"
									for="contribution-day-component-2-51"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="52"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-31"
									id="contribution-day-component-2-52"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-411ebef2-6b9b-4020-89ba-7e7698c8cd7c"
									for="contribution-day-component-2-52"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 31st.</tool-tip
								>
							</tr>
							<tr style="height: 10px">
								<td class="ContributionCalendar-label" style="position: relative">
									<span class="sr-only">Wednesday</span>
									<span
										aria-hidden="true"
										style="clip-path: None; position: absolute; bottom: -3px"
									>
										Wed
									</span>
								</td>

								<td
									tabindex="0"
									data-ix="0"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-03"
									id="contribution-day-component-3-0"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-520ec406-f796-4efa-b607-3f71bb9928b5"
									for="contribution-day-component-3-0"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="1"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-10"
									id="contribution-day-component-3-1"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-526a3e17-7dc8-4206-8eac-bab4c64015b9"
									for="contribution-day-component-3-1"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="2"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-17"
									id="contribution-day-component-3-2"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e41ae2b4-0815-4e02-b48d-0e85ef314f09"
									for="contribution-day-component-3-2"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="3"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-24"
									id="contribution-day-component-3-3"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-839f628c-9acd-4c33-9a78-8c01cc78972f"
									for="contribution-day-component-3-3"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="4"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-31"
									id="contribution-day-component-3-4"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-126ae9e4-4287-4d3a-a058-5137caed241f"
									for="contribution-day-component-3-4"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 31st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="5"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-07"
									id="contribution-day-component-3-5"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ca7153cd-8585-4f40-9d7f-341c421ee677"
									for="contribution-day-component-3-5"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="6"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-14"
									id="contribution-day-component-3-6"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-fca28ec7-3024-490f-9742-acb1c98bdf32"
									for="contribution-day-component-3-6"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="7"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-21"
									id="contribution-day-component-3-7"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-661a9158-4f24-4e20-aedd-6a36de337061"
									for="contribution-day-component-3-7"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="8"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-28"
									id="contribution-day-component-3-8"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-76bdeb56-2657-4d95-8d93-703549c5ac76"
									for="contribution-day-component-3-8"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="9"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-06"
									id="contribution-day-component-3-9"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9ac3ef48-f8df-4ea4-b0ed-e2c6c4455864"
									for="contribution-day-component-3-9"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="10"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-13"
									id="contribution-day-component-3-10"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-67b750ed-546c-42cf-88f0-4ba4f298c4a6"
									for="contribution-day-component-3-10"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on March 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="11"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-20"
									id="contribution-day-component-3-11"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-771574e4-9495-4c19-93ce-2a2157363e79"
									for="contribution-day-component-3-11"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="12"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-27"
									id="contribution-day-component-3-12"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8c5be22e-9dcb-47a9-b3de-ba8cc856ddd4"
									for="contribution-day-component-3-12"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="13"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-4"
									style="width: 10px"
									data-date="2024-04-03"
									id="contribution-day-component-3-13"
									data-level="4"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8aa9bff1-a068-4892-8b5b-afffa7583588"
									for="contribution-day-component-3-13"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">9 contributions on April 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="14"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-10"
									id="contribution-day-component-3-14"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f3c827a3-1b19-4bf7-b744-104d168f64d9"
									for="contribution-day-component-3-14"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="15"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-17"
									id="contribution-day-component-3-15"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c0c71aaa-83e4-4963-b48c-32288ef65130"
									for="contribution-day-component-3-15"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="16"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-24"
									id="contribution-day-component-3-16"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-aa8b7083-4439-4c74-b1e5-8f62a77bf86c"
									for="contribution-day-component-3-16"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="17"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-01"
									id="contribution-day-component-3-17"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8834a861-9060-4890-9e50-24db7b59107f"
									for="contribution-day-component-3-17"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="18"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-08"
									id="contribution-day-component-3-18"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f86eb68e-20f3-460d-95d8-c16ef74d7e9d"
									for="contribution-day-component-3-18"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="19"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-15"
									id="contribution-day-component-3-19"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6aef4586-efb4-4df9-b242-2a1f29fd9b1b"
									for="contribution-day-component-3-19"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="20"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-22"
									id="contribution-day-component-3-20"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3224f118-dc9b-4257-a13f-c9ee44d7c534"
									for="contribution-day-component-3-20"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="21"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-29"
									id="contribution-day-component-3-21"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-32669d6b-35d7-49c4-9ae1-7dcadded1c3a"
									for="contribution-day-component-3-21"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="22"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-05"
									id="contribution-day-component-3-22"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b45552d3-7ad5-4586-8552-7991ab0fc28c"
									for="contribution-day-component-3-22"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="23"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-12"
									id="contribution-day-component-3-23"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ae647a35-bfab-40cb-9e66-a98d54830982"
									for="contribution-day-component-3-23"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="24"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-19"
									id="contribution-day-component-3-24"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8c8b60d2-9cb9-4e17-bce8-3eac492a51b9"
									for="contribution-day-component-3-24"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="25"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-26"
									id="contribution-day-component-3-25"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-dce8a262-e53a-41a0-8d78-c514c01dd175"
									for="contribution-day-component-3-25"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="26"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-03"
									id="contribution-day-component-3-26"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-99e9b456-13b4-41af-b871-71257fc4acc8"
									for="contribution-day-component-3-26"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="27"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-10"
									id="contribution-day-component-3-27"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f0a2d706-735e-47aa-9c1b-9b1a166f5259"
									for="contribution-day-component-3-27"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="28"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-17"
									id="contribution-day-component-3-28"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-11c07578-c039-4eac-bde9-99e76b4eda7d"
									for="contribution-day-component-3-28"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="29"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-24"
									id="contribution-day-component-3-29"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d1ee51d9-b1e1-4769-be07-6c6b29e1cc13"
									for="contribution-day-component-3-29"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="30"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-31"
									id="contribution-day-component-3-30"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1b899ba1-5649-44c0-9390-7c2cade02e4a"
									for="contribution-day-component-3-30"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 31st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="31"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-07"
									id="contribution-day-component-3-31"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a2b988db-9914-4495-9eaf-8a2022a44b98"
									for="contribution-day-component-3-31"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="32"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-14"
									id="contribution-day-component-3-32"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0b18b25a-c81a-4e90-a0a8-cb472775fb2c"
									for="contribution-day-component-3-32"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="33"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-21"
									id="contribution-day-component-3-33"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0f63ba5a-be99-4b21-8557-48e915ff5e6b"
									for="contribution-day-component-3-33"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="34"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-28"
									id="contribution-day-component-3-34"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-93b7a3e5-f52c-4012-9653-19e387b4d104"
									for="contribution-day-component-3-34"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="35"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-04"
									id="contribution-day-component-3-35"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9b35d7a9-7d25-48f9-98a3-e2fcef03ed51"
									for="contribution-day-component-3-35"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="36"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-11"
									id="contribution-day-component-3-36"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0d5c9bc4-f782-41ef-93d1-1dec214f0ae2"
									for="contribution-day-component-3-36"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="37"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-18"
									id="contribution-day-component-3-37"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-78594b8f-ba47-49e2-952f-da172b701496"
									for="contribution-day-component-3-37"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="38"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-25"
									id="contribution-day-component-3-38"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ef5b3c16-9973-4d8e-942f-62bd1ff97239"
									for="contribution-day-component-3-38"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="39"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-02"
									id="contribution-day-component-3-39"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-79173b6b-7267-479b-8eb8-fbffc8b13b49"
									for="contribution-day-component-3-39"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="40"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-09"
									id="contribution-day-component-3-40"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5dff2e5f-97eb-4120-b455-1b2116f07e6d"
									for="contribution-day-component-3-40"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="41"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-16"
									id="contribution-day-component-3-41"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9ee6bb59-f8c1-4366-b027-070eb13a7d7c"
									for="contribution-day-component-3-41"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="42"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-23"
									id="contribution-day-component-3-42"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-2471b65c-ab24-43a3-b64f-6cbfde866916"
									for="contribution-day-component-3-42"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="43"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-30"
									id="contribution-day-component-3-43"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f488ce9e-e056-4a77-a289-6d7a60c7d28c"
									for="contribution-day-component-3-43"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="44"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-06"
									id="contribution-day-component-3-44"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-652740c2-4af6-49fe-ab36-45b9b1480580"
									for="contribution-day-component-3-44"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="45"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-13"
									id="contribution-day-component-3-45"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8c6972e8-5c26-4786-bc51-c06f580e5ca1"
									for="contribution-day-component-3-45"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="46"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-20"
									id="contribution-day-component-3-46"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ad68578a-b70a-405a-9eab-9c0c7afdecc1"
									for="contribution-day-component-3-46"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="47"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-27"
									id="contribution-day-component-3-47"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-32317506-1032-4cff-9405-83949c6ffb41"
									for="contribution-day-component-3-47"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="48"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-04"
									id="contribution-day-component-3-48"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7a83af76-0a8f-409c-9292-c984305f7b17"
									for="contribution-day-component-3-48"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="49"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-11"
									id="contribution-day-component-3-49"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ba2082a9-1b74-4dbe-b4c2-40abef2ae41e"
									for="contribution-day-component-3-49"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="50"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-18"
									id="contribution-day-component-3-50"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-29e950dd-86e4-4590-a966-8b4c2c6bbd35"
									for="contribution-day-component-3-50"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="51"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-25"
									id="contribution-day-component-3-51"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ccbb0682-d3b5-4046-bf07-2ba3c5a14985"
									for="contribution-day-component-3-51"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 25th.</tool-tip
								>

								<td></td>
							</tr>
							<tr style="height: 10px">
								<td class="ContributionCalendar-label" style="position: relative">
									<span class="sr-only">Thursday</span>
									<span
										aria-hidden="true"
										style="clip-path: Circle(0); position: absolute; bottom: -3px"
									>
										Thu
									</span>
								</td>

								<td
									tabindex="0"
									data-ix="0"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-04"
									id="contribution-day-component-4-0"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a614c18b-988a-4a55-be6d-9edefed01fd5"
									for="contribution-day-component-4-0"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="1"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-11"
									id="contribution-day-component-4-1"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-78c8f602-e141-4bfc-a102-b5307d417d16"
									for="contribution-day-component-4-1"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="2"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-18"
									id="contribution-day-component-4-2"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ed1a8abb-636f-4da6-8baa-38b47325c94a"
									for="contribution-day-component-4-2"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="3"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-25"
									id="contribution-day-component-4-3"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7ddee65b-f731-4d1f-99e0-f17a0a289e17"
									for="contribution-day-component-4-3"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="4"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-01"
									id="contribution-day-component-4-4"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4d95dc3e-9f9e-4346-883f-4ed66caf76be"
									for="contribution-day-component-4-4"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="5"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-08"
									id="contribution-day-component-4-5"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f5d5d48f-13b4-41ce-933c-8282d6197831"
									for="contribution-day-component-4-5"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="6"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-15"
									id="contribution-day-component-4-6"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-51cc1e44-8bea-40bc-b259-8ea6ce305be2"
									for="contribution-day-component-4-6"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="7"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-22"
									id="contribution-day-component-4-7"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3ea18575-d424-4183-8e91-62658ab4775b"
									for="contribution-day-component-4-7"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="8"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-02-29"
									id="contribution-day-component-4-8"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-072b1304-313f-4dc8-9251-8f6700a99ce6"
									for="contribution-day-component-4-8"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on February 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="9"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-07"
									id="contribution-day-component-4-9"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-dab439ac-6a35-4b11-be75-7d902c623860"
									for="contribution-day-component-4-9"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="10"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-14"
									id="contribution-day-component-4-10"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-df2962de-5ef7-4e1e-a6ad-9dda8d02f8f3"
									for="contribution-day-component-4-10"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on March 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="11"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-21"
									id="contribution-day-component-4-11"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-19978bdb-7648-449d-9a47-eeffa9d8ca80"
									for="contribution-day-component-4-11"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on March 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="12"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-28"
									id="contribution-day-component-4-12"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e7541df3-9c69-4723-8f73-0e56e831c788"
									for="contribution-day-component-4-12"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="13"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-3"
									style="width: 10px"
									data-date="2024-04-04"
									id="contribution-day-component-4-13"
									data-level="3"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5742dad4-e107-4cf9-8ec5-7f66df9b4ffc"
									for="contribution-day-component-4-13"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">5 contributions on April 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="14"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-11"
									id="contribution-day-component-4-14"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c259277e-087e-4959-a6c8-59b71bd3f379"
									for="contribution-day-component-4-14"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="15"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-18"
									id="contribution-day-component-4-15"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-25b25f1b-371f-4f0b-afba-4026a41f5428"
									for="contribution-day-component-4-15"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="16"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-25"
									id="contribution-day-component-4-16"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6c1a473d-b877-4c06-833f-6bb68ff1d7e4"
									for="contribution-day-component-4-16"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="17"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-02"
									id="contribution-day-component-4-17"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-60f996e3-057c-4a5e-a9c7-fcdbcae34d45"
									for="contribution-day-component-4-17"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="18"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-09"
									id="contribution-day-component-4-18"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9a034401-b254-4e34-89b0-b432ad56de7a"
									for="contribution-day-component-4-18"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="19"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-16"
									id="contribution-day-component-4-19"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f1613196-ec47-4012-a981-0b99dfdc52c6"
									for="contribution-day-component-4-19"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="20"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-23"
									id="contribution-day-component-4-20"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-29573320-bb81-4928-b30d-c00ca4e72ff3"
									for="contribution-day-component-4-20"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="21"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-30"
									id="contribution-day-component-4-21"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1c923666-d6ad-42ef-9ea2-b92365ce32de"
									for="contribution-day-component-4-21"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="22"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-06"
									id="contribution-day-component-4-22"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-685e6825-fa13-44ba-ae53-8cdd16c12128"
									for="contribution-day-component-4-22"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="23"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-13"
									id="contribution-day-component-4-23"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-90772054-acc5-4926-b1ed-4e48210b3730"
									for="contribution-day-component-4-23"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="24"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-20"
									id="contribution-day-component-4-24"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9aef30a8-2f63-447c-b6f0-a58033c43c7d"
									for="contribution-day-component-4-24"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="25"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-27"
									id="contribution-day-component-4-25"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-35bdf3ba-8b6f-4825-bfac-95905de7bc41"
									for="contribution-day-component-4-25"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="26"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-04"
									id="contribution-day-component-4-26"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3ca5805b-a094-4979-8934-55bfcb1c4047"
									for="contribution-day-component-4-26"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="27"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-11"
									id="contribution-day-component-4-27"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-deabd17b-d634-423a-adb0-b81765ef4fdc"
									for="contribution-day-component-4-27"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="28"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-18"
									id="contribution-day-component-4-28"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a7f07881-3abe-4b5d-a86e-2e7ae85676fc"
									for="contribution-day-component-4-28"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="29"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-25"
									id="contribution-day-component-4-29"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-2ff72a4e-3d84-4de9-b4b0-1a3aa39c1a6e"
									for="contribution-day-component-4-29"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="30"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-01"
									id="contribution-day-component-4-30"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f496e733-b422-4463-ae97-8e7968fb2b7f"
									for="contribution-day-component-4-30"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="31"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-08"
									id="contribution-day-component-4-31"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1278de35-c1d3-449c-8e53-cf72494307e4"
									for="contribution-day-component-4-31"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="32"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-15"
									id="contribution-day-component-4-32"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e7ee2977-7f6a-4e2f-a2aa-e08809074b53"
									for="contribution-day-component-4-32"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="33"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-22"
									id="contribution-day-component-4-33"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-846b8169-771f-4e51-8dd5-59686d3d4dd4"
									for="contribution-day-component-4-33"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="34"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-29"
									id="contribution-day-component-4-34"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6e9bcfca-332c-49b0-8569-e5afc6e64f55"
									for="contribution-day-component-4-34"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="35"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-05"
									id="contribution-day-component-4-35"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-57d7f108-8fc1-4278-b414-45b5d55eba4a"
									for="contribution-day-component-4-35"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="36"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-12"
									id="contribution-day-component-4-36"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-703afad2-7fcc-4a9a-9fa5-051803550125"
									for="contribution-day-component-4-36"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="37"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-19"
									id="contribution-day-component-4-37"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-98770685-5b11-48a2-ad67-39abde8e2b9b"
									for="contribution-day-component-4-37"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="38"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-26"
									id="contribution-day-component-4-38"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-53132698-97a3-4c67-b3a5-b46c1f5a6625"
									for="contribution-day-component-4-38"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="39"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-03"
									id="contribution-day-component-4-39"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-984013b9-dbad-49f7-8049-2164f2728bfe"
									for="contribution-day-component-4-39"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="40"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-10"
									id="contribution-day-component-4-40"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3f58bb00-fe4a-4603-9ec7-7887d3fd4a8e"
									for="contribution-day-component-4-40"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="41"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-17"
									id="contribution-day-component-4-41"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-959e53df-a7a5-4496-b2a9-d663899ac84d"
									for="contribution-day-component-4-41"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="42"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-24"
									id="contribution-day-component-4-42"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4476e96a-9ad5-4c17-a128-6b3563b72e55"
									for="contribution-day-component-4-42"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="43"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-31"
									id="contribution-day-component-4-43"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d8392beb-1aeb-4b34-b328-cc188b639f8b"
									for="contribution-day-component-4-43"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 31st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="44"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-07"
									id="contribution-day-component-4-44"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-18297c26-2d0b-4def-8367-5b3cbe14492d"
									for="contribution-day-component-4-44"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="45"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-14"
									id="contribution-day-component-4-45"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-56788b39-a268-4b4d-9104-e33b55b8cd84"
									for="contribution-day-component-4-45"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="46"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-21"
									id="contribution-day-component-4-46"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-57290528-66fe-42a0-9b6f-250865efc23b"
									for="contribution-day-component-4-46"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="47"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-28"
									id="contribution-day-component-4-47"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6b7dff3b-75e3-4383-8713-f33f7648a674"
									for="contribution-day-component-4-47"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="48"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-05"
									id="contribution-day-component-4-48"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b2355889-6b49-48e2-99b2-00d2bf5093d6"
									for="contribution-day-component-4-48"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="49"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-12"
									id="contribution-day-component-4-49"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ec91e02c-8e04-400f-b204-4f95c2389c27"
									for="contribution-day-component-4-49"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="50"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-19"
									id="contribution-day-component-4-50"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b90c8339-fe81-4942-9b07-c0a80fafc7c5"
									for="contribution-day-component-4-50"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="51"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-26"
									id="contribution-day-component-4-51"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-822ef286-c6fb-4b96-9cb3-c5d44894d98f"
									for="contribution-day-component-4-51"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 26th.</tool-tip
								>

								<td></td>
							</tr>
							<tr style="height: 10px">
								<td class="ContributionCalendar-label" style="position: relative">
									<span class="sr-only">Friday</span>
									<span
										aria-hidden="true"
										style="clip-path: None; position: absolute; bottom: -3px"
									>
										Fri
									</span>
								</td>

								<td
									tabindex="0"
									data-ix="0"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-05"
									id="contribution-day-component-5-0"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-2c98d04c-756a-4853-9479-1be9f1e71db5"
									for="contribution-day-component-5-0"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="1"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-12"
									id="contribution-day-component-5-1"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d6eb67bb-d58a-4ef5-955e-e0e16a41d074"
									for="contribution-day-component-5-1"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="2"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-19"
									id="contribution-day-component-5-2"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9a371ea9-d2e5-4da4-ab25-5fea1cae7900"
									for="contribution-day-component-5-2"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="3"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-26"
									id="contribution-day-component-5-3"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-cd1db994-de34-402a-9cdb-3686b35d89e3"
									for="contribution-day-component-5-3"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="4"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-02"
									id="contribution-day-component-5-4"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-aaa421ec-8b44-4434-a67a-b9f754582b8b"
									for="contribution-day-component-5-4"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="5"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-09"
									id="contribution-day-component-5-5"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b1fb8da1-b0f5-480e-87cd-df0a437709f2"
									for="contribution-day-component-5-5"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="6"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-16"
									id="contribution-day-component-5-6"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0ee83b4d-adc1-412a-891d-806e20259e1e"
									for="contribution-day-component-5-6"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="7"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-23"
									id="contribution-day-component-5-7"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-bbcc9340-83cc-4473-9ebd-59be0bf7ecd6"
									for="contribution-day-component-5-7"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="8"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-01"
									id="contribution-day-component-5-8"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3b9d25dc-57d9-434d-bf66-2a74775f6004"
									for="contribution-day-component-5-8"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on March 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="9"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-08"
									id="contribution-day-component-5-9"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-9fe5363e-576d-4b39-b540-ae11e722364e"
									for="contribution-day-component-5-9"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="10"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-15"
									id="contribution-day-component-5-10"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0a2e9fe3-fea6-42c9-ad88-76c04b0a0273"
									for="contribution-day-component-5-10"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on March 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="11"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-2"
									style="width: 10px"
									data-date="2024-03-22"
									id="contribution-day-component-5-11"
									data-level="2"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-53a7413d-27ed-47a9-96cd-76b9d6bdc6d4"
									for="contribution-day-component-5-11"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">3 contributions on March 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="12"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-29"
									id="contribution-day-component-5-12"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-349e85bb-385c-4a4c-aab9-b25dc90ab48c"
									for="contribution-day-component-5-12"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on March 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="13"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-04-05"
									id="contribution-day-component-5-13"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-064cf66b-0bb8-43f3-9572-c8c77bc0716b"
									for="contribution-day-component-5-13"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">2 contributions on April 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="14"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-12"
									id="contribution-day-component-5-14"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8dc4736f-760e-42f5-a9eb-a9bfac0654b2"
									for="contribution-day-component-5-14"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="15"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-19"
									id="contribution-day-component-5-15"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-eb44cb36-ed0e-4e9e-bffb-e371a15b4a2e"
									for="contribution-day-component-5-15"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="16"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-26"
									id="contribution-day-component-5-16"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4fea6ad3-cd00-403e-92fa-62640f8e8449"
									for="contribution-day-component-5-16"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="17"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-03"
									id="contribution-day-component-5-17"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ee745ff4-b0f3-4f3f-a936-4a02962666c9"
									for="contribution-day-component-5-17"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="18"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-10"
									id="contribution-day-component-5-18"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8da1d19a-3df5-4e07-8c7c-f6af66fdd60e"
									for="contribution-day-component-5-18"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="19"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-17"
									id="contribution-day-component-5-19"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1a9afccd-4985-40fe-8e69-142d5802bcf0"
									for="contribution-day-component-5-19"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="20"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-24"
									id="contribution-day-component-5-20"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-cd9639ed-19be-40f0-a9aa-27e26616a902"
									for="contribution-day-component-5-20"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="21"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-31"
									id="contribution-day-component-5-21"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c1790c53-9c16-4d47-971c-bb02ddb190fb"
									for="contribution-day-component-5-21"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 31st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="22"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-07"
									id="contribution-day-component-5-22"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c9fcf7c4-254c-4d3b-b950-5f83154f21bf"
									for="contribution-day-component-5-22"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="23"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-14"
									id="contribution-day-component-5-23"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b713db97-7d45-4c4b-9ba3-60f9b85b0ffe"
									for="contribution-day-component-5-23"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="24"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-21"
									id="contribution-day-component-5-24"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a686a47b-7434-40b4-9545-3dc148e03c48"
									for="contribution-day-component-5-24"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="25"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-28"
									id="contribution-day-component-5-25"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4393b076-98eb-4a95-8142-d1d95bc82838"
									for="contribution-day-component-5-25"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="26"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-05"
									id="contribution-day-component-5-26"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f68453e7-c9c3-4b65-9907-a26832c23e99"
									for="contribution-day-component-5-26"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="27"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-12"
									id="contribution-day-component-5-27"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6edc9c95-1983-47e7-a96e-c0054d663b89"
									for="contribution-day-component-5-27"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="28"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-19"
									id="contribution-day-component-5-28"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a3edd6ee-7b55-4205-bcbb-86c4475b9d70"
									for="contribution-day-component-5-28"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="29"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-26"
									id="contribution-day-component-5-29"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a6aebaad-86aa-48be-a985-03f5df647cdc"
									for="contribution-day-component-5-29"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="30"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-02"
									id="contribution-day-component-5-30"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-2ef1dfae-d3ac-4586-a89a-0fc9b07582b8"
									for="contribution-day-component-5-30"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="31"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-09"
									id="contribution-day-component-5-31"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-82193bbc-c9bb-4eaf-83db-df852f156bd2"
									for="contribution-day-component-5-31"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="32"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-16"
									id="contribution-day-component-5-32"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5402af76-73e3-431e-b431-c45c4dc791b1"
									for="contribution-day-component-5-32"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="33"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-23"
									id="contribution-day-component-5-33"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0bc5ff5d-c8cf-4ae5-8c75-0e65d20d80b9"
									for="contribution-day-component-5-33"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="34"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-30"
									id="contribution-day-component-5-34"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8fb32770-9af2-463e-83f9-3b00528f8a90"
									for="contribution-day-component-5-34"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="35"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-06"
									id="contribution-day-component-5-35"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3b6d25ae-40d3-4223-815f-2249cbe5679f"
									for="contribution-day-component-5-35"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="36"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-13"
									id="contribution-day-component-5-36"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-26234efd-023a-4bfb-9ed3-246f25dc2cc0"
									for="contribution-day-component-5-36"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="37"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-20"
									id="contribution-day-component-5-37"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-fefa2716-98ad-44f5-ab99-8dea4b845541"
									for="contribution-day-component-5-37"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="38"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-27"
									id="contribution-day-component-5-38"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-54359c62-daf3-4eb0-b594-2bc34067bf2f"
									for="contribution-day-component-5-38"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="39"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-04"
									id="contribution-day-component-5-39"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4235e6f3-c8e2-4487-8326-c1eef5d62ab7"
									for="contribution-day-component-5-39"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="40"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-11"
									id="contribution-day-component-5-40"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f2ea24bf-8dd0-463b-bffb-13687d66d944"
									for="contribution-day-component-5-40"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="41"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-18"
									id="contribution-day-component-5-41"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e13a5b0f-afe6-4063-bc2b-d4da7a90bbe3"
									for="contribution-day-component-5-41"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="42"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-25"
									id="contribution-day-component-5-42"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f3f57cd4-3319-4181-ab7b-3340a256f1df"
									for="contribution-day-component-5-42"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="43"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-01"
									id="contribution-day-component-5-43"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3be50f37-b974-401f-b26e-41cfe4ecf58c"
									for="contribution-day-component-5-43"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="44"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-08"
									id="contribution-day-component-5-44"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ea42a8df-7f10-4d88-9c42-b6702d8adf44"
									for="contribution-day-component-5-44"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="45"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-15"
									id="contribution-day-component-5-45"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ab0dccf3-7f7a-4545-8728-1b4e877081c9"
									for="contribution-day-component-5-45"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="46"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-22"
									id="contribution-day-component-5-46"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-518f2656-4b80-4902-9cd0-e1b370638701"
									for="contribution-day-component-5-46"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="47"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-29"
									id="contribution-day-component-5-47"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3387d04c-0c8f-4521-b423-cbca81b14881"
									for="contribution-day-component-5-47"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="48"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-06"
									id="contribution-day-component-5-48"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-fb27b440-81f4-4f83-baf5-d5cba5b8d559"
									for="contribution-day-component-5-48"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="49"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-13"
									id="contribution-day-component-5-49"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8890f96f-5127-41c4-a839-b2bfd18c7464"
									for="contribution-day-component-5-49"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="50"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-20"
									id="contribution-day-component-5-50"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3e76019b-4999-4e9a-b928-90d8c6af083a"
									for="contribution-day-component-5-50"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="51"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-27"
									id="contribution-day-component-5-51"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d79d11e5-1b64-4808-948f-cd6cfd90b6ec"
									for="contribution-day-component-5-51"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 27th.</tool-tip
								>

								<td></td>
							</tr>
							<tr style="height: 10px">
								<td class="ContributionCalendar-label" style="position: relative">
									<span class="sr-only">Saturday</span>
									<span
										aria-hidden="true"
										style="clip-path: Circle(0); position: absolute; bottom: -3px"
									>
										Sat
									</span>
								</td>

								<td
									tabindex="0"
									data-ix="0"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-06"
									id="contribution-day-component-6-0"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a6aca698-b80c-4259-a15c-7b6a9a218d98"
									for="contribution-day-component-6-0"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="1"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-13"
									id="contribution-day-component-6-1"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5167f8b2-08be-412d-b491-ba4a9ba79522"
									for="contribution-day-component-6-1"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="2"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-20"
									id="contribution-day-component-6-2"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-728d91a7-c65c-467a-8917-2add4d24740b"
									for="contribution-day-component-6-2"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="3"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-01-27"
									id="contribution-day-component-6-3"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-73826f3e-3f95-4754-9d88-c601e1e1d72b"
									for="contribution-day-component-6-3"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on January 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="4"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-03"
									id="contribution-day-component-6-4"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e7086d3c-ac6f-489b-b5f8-d53b1dc96428"
									for="contribution-day-component-6-4"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="5"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-10"
									id="contribution-day-component-6-5"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6d73537d-e611-49e2-bc20-d29fa87cc2aa"
									for="contribution-day-component-6-5"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="6"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-2"
									style="width: 10px"
									data-date="2024-02-17"
									id="contribution-day-component-6-6"
									data-level="2"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-90c793c2-d038-41c4-9ec4-c983c323f260"
									for="contribution-day-component-6-6"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">3 contributions on February 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="7"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-02-24"
									id="contribution-day-component-6-7"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d260a8ef-3b56-49b9-8951-609b17a9e037"
									for="contribution-day-component-6-7"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on February 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="8"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-03-02"
									id="contribution-day-component-6-8"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0be1ed6f-6101-4866-be72-ee32509d6eb1"
									for="contribution-day-component-6-8"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on March 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="9"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-3"
									style="width: 10px"
									data-date="2024-03-09"
									id="contribution-day-component-6-9"
									data-level="3"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-19ed5abc-613a-4ee9-a14f-b3f2c20ecdb1"
									for="contribution-day-component-6-9"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">6 contributions on March 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="10"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-1"
									style="width: 10px"
									data-date="2024-03-16"
									id="contribution-day-component-6-10"
									data-level="1"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5b878a17-f5c3-459a-b2a9-fd75f94a8e43"
									for="contribution-day-component-6-10"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">1 contribution on March 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="11"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-3"
									style="width: 10px"
									data-date="2024-03-23"
									id="contribution-day-component-6-11"
									data-level="3"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1077e57c-d57c-4367-ae1a-55ce5d949e76"
									for="contribution-day-component-6-11"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">5 contributions on March 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="12"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-2"
									style="width: 10px"
									data-date="2024-03-30"
									id="contribution-day-component-6-12"
									data-level="2"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c85a0f45-893c-4feb-90e9-a36943a8f6c6"
									for="contribution-day-component-6-12"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">4 contributions on March 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="13"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-06"
									id="contribution-day-component-6-13"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-632990f9-8ab5-42f9-a733-5836b997f3fd"
									for="contribution-day-component-6-13"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="14"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-13"
									id="contribution-day-component-6-14"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0cf9ff87-eba8-43cb-ba44-95d5c4ac076e"
									for="contribution-day-component-6-14"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="15"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-20"
									id="contribution-day-component-6-15"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-5e0daf3a-bfaa-451e-91a4-ffac6f62985e"
									for="contribution-day-component-6-15"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="16"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-04-27"
									id="contribution-day-component-6-16"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3109224d-509f-4b41-9bfd-f71543a86b0b"
									for="contribution-day-component-6-16"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on April 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="17"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-04"
									id="contribution-day-component-6-17"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-64fe55bb-3f4f-4f17-adb1-aee6e43c69cd"
									for="contribution-day-component-6-17"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 4th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="18"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-11"
									id="contribution-day-component-6-18"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-8449286a-cc24-4654-b277-bd67e54db567"
									for="contribution-day-component-6-18"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 11th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="19"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-18"
									id="contribution-day-component-6-19"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-1f624ab3-ec11-4339-a929-d5553a6c1fb3"
									for="contribution-day-component-6-19"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 18th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="20"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-05-25"
									id="contribution-day-component-6-20"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a41d2292-8bc6-4981-a477-1ef13910172b"
									for="contribution-day-component-6-20"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on May 25th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="21"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-01"
									id="contribution-day-component-6-21"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d39d1ce1-7c74-4295-93cf-f3b85f3cda20"
									for="contribution-day-component-6-21"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 1st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="22"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-08"
									id="contribution-day-component-6-22"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-622d4bce-8cfc-4f4d-8238-85e298926b0e"
									for="contribution-day-component-6-22"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 8th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="23"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-15"
									id="contribution-day-component-6-23"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-d53ddae2-c7e5-4cee-8a9c-cad1ff6d5f31"
									for="contribution-day-component-6-23"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 15th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="24"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-22"
									id="contribution-day-component-6-24"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-c1dc00f0-7f87-4d2d-86c9-1d94e25e365f"
									for="contribution-day-component-6-24"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 22nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="25"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-06-29"
									id="contribution-day-component-6-25"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6d6f9f2f-7bc5-42e8-af6b-21d402f6d09f"
									for="contribution-day-component-6-25"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on June 29th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="26"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-06"
									id="contribution-day-component-6-26"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ed2a6bbd-a323-4ef3-a860-52c56b66ad08"
									for="contribution-day-component-6-26"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 6th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="27"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-13"
									id="contribution-day-component-6-27"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7fd8405b-ca9a-49d6-a9a1-35e3781ccfb6"
									for="contribution-day-component-6-27"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 13th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="28"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-20"
									id="contribution-day-component-6-28"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-58e07b26-b3ac-4319-b342-6b3695752b68"
									for="contribution-day-component-6-28"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 20th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="29"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-07-27"
									id="contribution-day-component-6-29"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-6debc896-9e44-430c-a3b4-54f1505e0cb1"
									for="contribution-day-component-6-29"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on July 27th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="30"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-03"
									id="contribution-day-component-6-30"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b617d5f9-3771-493e-8333-10762f99ed3a"
									for="contribution-day-component-6-30"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 3rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="31"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-10"
									id="contribution-day-component-6-31"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-52822010-6113-46c1-a403-51ceb7ecd7df"
									for="contribution-day-component-6-31"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 10th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="32"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-17"
									id="contribution-day-component-6-32"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-158b642d-d8e7-46ea-a034-b054abbad195"
									for="contribution-day-component-6-32"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 17th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="33"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-24"
									id="contribution-day-component-6-33"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-7087a6f3-9007-463e-a758-485ca80a4b88"
									for="contribution-day-component-6-33"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 24th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="34"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-08-31"
									id="contribution-day-component-6-34"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-58fa37e9-39a5-440b-8764-068963e4b180"
									for="contribution-day-component-6-34"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on August 31st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="35"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-07"
									id="contribution-day-component-6-35"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f593a49d-8862-4a9a-b54f-96656fdccdf8"
									for="contribution-day-component-6-35"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="36"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-14"
									id="contribution-day-component-6-36"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-bfbb475c-fb60-48e8-a515-ab80d305a345"
									for="contribution-day-component-6-36"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="37"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-21"
									id="contribution-day-component-6-37"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-2850311e-a94c-4774-a041-d144c4e71f9b"
									for="contribution-day-component-6-37"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="38"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-09-28"
									id="contribution-day-component-6-38"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-cd35efa2-84ab-487d-bc92-a69d65b12442"
									for="contribution-day-component-6-38"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on September 28th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="39"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-05"
									id="contribution-day-component-6-39"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4b3f2538-14d6-443d-8c16-f65bcb73faa6"
									for="contribution-day-component-6-39"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 5th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="40"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-12"
									id="contribution-day-component-6-40"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-0143a584-5d44-40c5-b3ec-1a5c9fe946da"
									for="contribution-day-component-6-40"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 12th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="41"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-19"
									id="contribution-day-component-6-41"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-943ccd05-a56d-4b21-b077-3ec769d7d01e"
									for="contribution-day-component-6-41"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 19th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="42"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-10-26"
									id="contribution-day-component-6-42"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ac24cbea-2069-4889-bcbe-248cd2b10243"
									for="contribution-day-component-6-42"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on October 26th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="43"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-02"
									id="contribution-day-component-6-43"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-3885c2b5-1c87-4fec-8aaf-a5df198cc006"
									for="contribution-day-component-6-43"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 2nd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="44"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-09"
									id="contribution-day-component-6-44"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-b9e62d59-c843-4141-87c6-b9a84d059a9a"
									for="contribution-day-component-6-44"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 9th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="45"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-16"
									id="contribution-day-component-6-45"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-89ffc70e-224f-4e2d-80c3-8fcf08c487f6"
									for="contribution-day-component-6-45"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 16th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="46"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-23"
									id="contribution-day-component-6-46"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-ebb23a8a-3f7c-4250-8852-3dc5d41ed19a"
									for="contribution-day-component-6-46"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 23rd.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="47"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-11-30"
									id="contribution-day-component-6-47"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e2d25e04-07fb-401d-b8fb-8178b86ecdd7"
									for="contribution-day-component-6-47"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on November 30th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="48"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-07"
									id="contribution-day-component-6-48"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-4be81e02-dbf7-4508-9f9a-03f145fb3943"
									for="contribution-day-component-6-48"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 7th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="49"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-14"
									id="contribution-day-component-6-49"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-a3c3f672-e4a7-4ebc-830c-7789384f6aaa"
									for="contribution-day-component-6-49"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 14th.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="50"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-21"
									id="contribution-day-component-6-50"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-e8acbcc0-b372-4464-aa0c-6e5a52189d4d"
									for="contribution-day-component-6-50"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 21st.</tool-tip
								>

								<td
									tabindex="0"
									data-ix="51"
									aria-selected="false"
									aria-describedby="contribution-graph-legend-level-0"
									style="width: 10px"
									data-date="2024-12-28"
									id="contribution-day-component-6-51"
									data-level="0"
									role="gridcell"
									data-view-component="true"
									class="ContributionCalendar-day"
								></td>
								<tool-tip
									id="tooltip-f4b927e6-97c3-47a3-ba35-09af8194138e"
									for="contribution-day-component-6-51"
									popover="manual"
									data-direction="n"
									data-type="label"
									data-view-component="true"
									class="position-absolute sr-only">No contributions on December 28th.</tool-tip
								>

								<td></td>
							</tr>
						</tbody>
					</table>
				</div>

			
			</div>
		</div>
	</div>
</div>
