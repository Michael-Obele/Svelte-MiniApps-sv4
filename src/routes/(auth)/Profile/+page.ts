// Assuming this function is in a module you can import
export async function _fetchCommitData(owner: string, repo: string, branch: string): Promise<any> {
	const baseUrl = 'https://api.github.com';
	const url = `${baseUrl}/repos/${owner}/${repo}/branches/${branch}`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch branch information: ${response.statusText}`);
	}
	const data = await response.json();
	const commitSHA = data.commit.sha;
	const commitUrl = `${baseUrl}/repos/${owner}/${repo}/commits/${commitSHA}`;
	const commitResponse = await fetch(commitUrl);
	if (!commitResponse.ok) {
		throw new Error(`Failed to fetch commit details: ${commitResponse.statusText}`);
	}
	return commitResponse.json();
}

// const owner = 'Michael-Obele';
// 	const repo = 'Svelte-MiniApps';
// 	const baseUrl = 'https://api.github.com';
// 	const branch = 'master'; // Replace with desired branch if needed

// 	const url = `${baseUrl}/repos/${owner}/${repo}/branches/${branch}`;

// 	try {
// 		const response = await fetch(url);

// 		if (!response.ok) {
// 			throw new Error(`Failed to fetch branch information: ${response.statusText}`);
// 		}

// 		const data = await response.json();
// 		const commitSHA = data.commit.sha;

// 		// Fetch the commit details using the SHA
// 		const commitUrl = `${baseUrl}/repos/${owner}/${repo}/commits/${commitSHA}`;
// 		const commitResponse = await fetch(commitUrl);

// 		if (!commitResponse.ok) {
// 			throw new Error(`Failed to fetch commit details: ${commitResponse.statusText}`);
// 		}

// 		const commitData  = commitResponse.json();
// 		// let gitMessage = commitData.commit.message;

// 		return { commitData }; // Pass both to your component
//     }
