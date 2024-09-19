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
	// Define the GitHub repository owner and name
	const owner = 'Michael-Obele';
	const repo = 'Svelte-MiniApps';
	// Retrieve the GitHub personal access token from environment variables
	const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
	// Set the authorization header for the GitHub API request
	const headers = {
		Authorization: `token ${accessToken}`
	};
	// Construct the GitHub API URL to fetch the last 10 commits
	let url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`;

	try {
		// Fetch commit data from the GitHub API
		const response = await fetch(url, { headers });
		// Check if the API request was successful (status code 200-299)
		if (!response.ok) {
			// If not successful, throw an error with the status and status text
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}
		// Parse the response body as JSON into the `commits` array
		const commits: CommitResponse = await response.json();

		// Format the commit data for display in the UI
		const formattedCommits: Commits[] = commits.map((commit: any) => ({
			sha: commit.sha, // Commit SHA hash
			author: commit.commit.author.name, // Commit author's name
			date: commit.commit.author.date, // Commit date and time
			message: commit.commit.message // Commit message
		}));

		// Return the formatted commit data and date/time formatting patterns
		return {
			commitData: formattedCommits, // Formatted commits array
			pattern: date.compile('ddd, MMM DD YYYY'), // Date formatting pattern
			timePattern: date.compile('hh:mm A') // Time formatting pattern
		};
	} catch (error) {
		// If an error occurs during the process, log the error to the console
		console.error('Failed to fetch commits:', error);
		// Return an error object indicating that commit data loading failed
		return { error: 'Failed to load commit data' };
	}
}
