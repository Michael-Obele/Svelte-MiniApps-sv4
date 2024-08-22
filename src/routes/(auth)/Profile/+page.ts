import { json } from '@sveltejs/kit';
import date from 'date-and-time';

interface GitUser {
	name: string | null;
	email: string | null;
	date: string;
}

interface CommitVerification {
	verified: boolean;
	reason: string;
	payload: string | null;
	signature: string | null;
}

interface CommitTree {
	sha: string;
	url: string;
}

interface Commit {
	url: string;
	author: GitUser | null;
	committer: GitUser | null;
	message: string;
	comment_count: number;
	tree: CommitTree;
	verification: CommitVerification;
}

interface SimpleUser {
	name: string | null;
	email: string | null;
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string | null;
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
	starred_at: string;
}

interface CommitParent {
	sha: string;
	url: string;
	html_url: string;
}

interface DiffEntry {
	sha: string;
	filename: string;
	status: 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged';
	additions: number;
	deletions: number;
	changes: number;
	blob_url: string;
	raw_url: string;
	contents_url: string;
	patch: string;
	previous_filename: string;
}

interface CommitStats {
	additions: number;
	deletions: number;
	total: number;
}

interface CommitData {
	url: string;
	sha: string;
	node_id: string;
	html_url: string;
	comments_url: string;
	commit: Commit;
	author: SimpleUser | null;
	committer: SimpleUser | null;
	parents: CommitParent[];
	stats: CommitStats;
	files: DiffEntry[];
}

type CommitResponse = CommitData[];

interface Commits {
	sha: string;
	author: string;
	date: string;
	message: string;
}

export async function load() {
	// Define the owner and repository name
	const owner = 'Michael-Obele';
	const repo = 'Svelte-MiniApps';
	// Construct the API URL to fetch the last 10 commits
	const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`;

	try {
		// Fetch data from the GitHub API
		const response = await fetch(url);
		// Check if the request was successful
		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}
		// Parse the response as JSON
		const commits: CommitResponse = await response.json();

		// Format the commit data for display
		const formattedCommits: Commits[] = commits.map((commit: any) => ({
			sha: commit.sha,
			author: commit.commit.author.name,
			date: commit.commit.author.date,
			message: commit.commit.message
		}));

		// Return the formatted commit data and date formatting patterns
		return {
			commitData: formattedCommits,
			pattern: date.compile('ddd, MMM DD YYYY'),
			timePattern: date.compile('hh:mm A')
		};
	} catch (error) {
		// Log the error and return an error message
		console.error('Failed to fetch commits:', error);
		return { error: 'Failed to load commit data' };
	}
}
