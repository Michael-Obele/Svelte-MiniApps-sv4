interface Author {
	name: string;
	email: string;
	date: string;
}

interface Tree {
	sha: string;
	url: string;
}

interface Verification {
	verified: boolean;
	reason: string;
	signature: null;
	payload: null;
}

interface Commit {
	author: Author;
	committer: Author;
	message: string;
	tree: Tree;
	url: string;
	comment_count: number;
	verification: Verification;
}

interface User {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}

interface Parent {
	sha: string;
	url: string;
	html_url: string;
}

interface Stats {
	total: number;
	additions: number;
	deletions: number;
}

interface File {
	sha: string;
	filename: string;
	status: string;
	additions: number;
	deletions: number;
	changes: number;
	blob_url: string;
	raw_url: string;
	contents_url: string;
	patch: string;
}

interface CommitData {
	sha: string;
	node_id: string;
	commit: Commit;
	url: string;
	html_url: string;
	comments_url: string;
	author: User;
	committer: User;
	parents: Parent[];
	stats: Stats;
	files: File[];
}

export async function _fetchCommitData(
	owner: string,
	repo: string,
	branch: string
): Promise<CommitData> {
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

export async function load({ params }) {
	const owner = 'Michael-Obele';
	const repo = 'Svelte-MiniApps';
	const branch = 'master';
	const commitData = _fetchCommitData(owner, repo, branch);

	return {
		props: {
			commitData
		}
	};
}
