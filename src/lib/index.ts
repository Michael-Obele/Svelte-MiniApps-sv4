// place files you want to import through the `$lib` alias in this folder.
export const done = [
	'Random Password Generator',
	'GitHub Contribution Tracker',
	'QR Code Generator',
	'English Dictionary App',
	'Random Emoji Generator',
	'Currency Converter',
	'Advanced Emoji Tools',
	'Budget Tracker'
];
//
export type Project = {
	title: string;
	details: string;
	tag: string;
	difficulty: 'easy' | 'medium' | 'hard';
};

export const projects: Project[] = [
	{
		title: 'Unit Converter',
		details: 'Converts between various units (length, temperature, volume, etc.)',
		tag: 'utility',
		difficulty: 'easy'
	},
	{
		title: 'Budget Tracker',
		details: 'Create and manage budgets, track expenses, and monitor your remaining balance.',
		tag: 'finance',
		difficulty: 'medium'
	},
	{
		title: 'Random Password Generator',
		details: 'Generates secure passwords with customizable length and complexity.',
		tag: 'security',
		difficulty: 'easy'
	},
	{
		title: 'Advanced Emoji Tools',
		details: 'This mini-app offers advanced features for working with emojis.',
		tag: 'utility',
		difficulty: 'medium'
	},
	{
		title: 'Color Picker',
		details: 'Lets you choose a color and shows its HEX code or RGB values.',
		tag: 'design',
		difficulty: 'easy'
	},
	{
		title: 'Checklist Maker',
		details: 'Allows you to create checklists and mark items as completed.',
		tag: 'productivity',
		difficulty: 'easy'
	},
	{
		title: 'Text Summarizer',
		details: 'Creates a shorter version of a text by keeping within a word limit.',
		tag: 'utility',
		difficulty: 'easy'
	},
	{
		title: 'Morse Code Translator',
		details: 'Translates between text and Morse code.',
		tag: 'education',
		difficulty: 'easy'
	},
	{
		title: 'Countdown Timer',
		details: 'Sets a timer with a countdown and shows progress visually.',
		tag: 'productivity',
		difficulty: 'medium'
	},
	{
		title: 'Currency Converter',
		details: 'Gets live exchange rates and converts between different currencies.',
		tag: 'finance',
		difficulty: 'medium'
	},
	{
		title: 'BMI Calculator',
		details: 'Calculates your Body Mass Index based on your height and weight.',
		tag: 'health',
		difficulty: 'medium'
	},
	{
		title: 'Music Player',
		details: 'Plays audio files stored on your device and lets you browse them.',
		tag: 'multimedia',
		difficulty: 'medium'
	},
	{
		title: 'QR Code Generator',
		details: 'Creates QR codes that contain URLs, text, or vCards.',
		tag: 'utility',
		difficulty: 'medium'
	},
	{
		title: 'To-Do List with Persistence',
		details: 'Lets you create and manage to-do items, and saves them for later use.',
		tag: 'productivity',
		difficulty: 'medium'
	},
	{
		title: 'Habit Tracker',
		details: 'Tracks your daily habits and shows your progress over time.',
		tag: 'productivity',
		difficulty: 'hard'
	},
	{
		title: 'Photo Editor',
		details: 'Provides basic tools like cropping, resizing, and applying filters to edit photos.',
		tag: 'design',
		difficulty: 'hard'
	},
	{
		title: 'Wikipedia Article Explorer',
		details: 'Lets you search Wikipedia and explore linked articles visually.',
		tag: 'education',
		difficulty: 'hard'
	},
	{
		title: 'Math Equation Solver',
		details: 'Solves simple math equations and shows the steps to get the answer.',
		tag: 'education',
		difficulty: 'hard'
	},
	{
		title: 'Simple Drawing App',
		details: 'Lets you create basic drawings using lines, shapes, and colors.',
		tag: 'design',
		difficulty: 'hard'
	},
	{
		title: 'GitHub Contribution Tracker',
		details:
			'Visualizes your GitHub contributions in a way that is easy to understand and engaging. It helps you track streaks, find patterns, and stay motivated.',
		tag: 'developer-tools',
		difficulty: 'medium'
	},
	{
		title: 'Markdown Editor',
		details:
			'Allows you to edit and view markdown files easily. Great for writing notes, to-do lists, or even creative projects.',
		tag: 'utility',
		difficulty: 'medium'
	},
	{
		title: 'English Dictionary App',
		details:
			'Web app that retrieves word definitions, pronunciation, and audio using an API. It also implements loading effects, error handling, and Web Speech API for audio playback.',
		tag: 'productivity',
		difficulty: 'hard'
	},
	{
		title: 'Pomodoro Timer',
		details:
			'Creates a timer with a countdown and lets you set customizable work/break intervals. It also uses audio notifications to alert you.',
		tag: 'productivity',
		difficulty: 'easy'
	},
	{
		title: 'Random Emoji Generator',
		details: 'Generates a random emoji with a single click.',
		tag: 'fun',
		difficulty: 'easy'
	},
	{
		title: 'Age Calculator',
		details: 'Calculates your age based on the date you were born.',
		tag: 'math',
		difficulty: 'easy'
	},
	{
		title: 'Rock Paper Scissors Game',
		details:
			'Lets you play the classic rock, paper, scissors game against the computer and shows the outcome.',
		tag: 'game',
		difficulty: 'easy'
	},
	{
		title: 'Dice Roll Simulator',
		details: 'Simulates rolling dice and visually shows the result.',
		tag: 'game',
		difficulty: 'easy'
	},
	{
		title: 'Recipe Book Organizer',
		details:
			'Helps you manage your recipes by letting you create, organize, and potentially convert them into instructions.',
		tag: 'productivity',
		difficulty: 'medium'
	}
];

//

export function truncateText(text: string, maxLength: number) {
	const originalText = text || '';
	if (originalText.length > maxLength) {
		return originalText.slice(0, maxLength - 3) + '...';
	}
	return originalText;
}

export let websiteUrl = 'https://svelte-apps.me/';
export let websiteImage = 'https://i.ibb.co/ZhhhnCz/svelte-badge.png';

export const googleSVG =
	'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkNhcGFfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUwIDE1MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE1MCAxNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzFBNzNFODt9Cgkuc3Qxe2ZpbGw6I0VBNDMzNTt9Cgkuc3Qye2ZpbGw6IzQyODVGNDt9Cgkuc3Qze2ZpbGw6I0ZCQkMwNDt9Cgkuc3Q0e2ZpbGw6IzM0QTg1Mzt9Cgkuc3Q1e2ZpbGw6IzRDQUY1MDt9Cgkuc3Q2e2ZpbGw6IzFFODhFNTt9Cgkuc3Q3e2ZpbGw6I0U1MzkzNTt9Cgkuc3Q4e2ZpbGw6I0M2MjgyODt9Cgkuc3Q5e2ZpbGw6I0ZCQzAyRDt9Cgkuc3QxMHtmaWxsOiMxNTY1QzA7fQoJLnN0MTF7ZmlsbDojMkU3RDMyO30KCS5zdDEye2ZpbGw6I0Y2QjcwNDt9Cgkuc3QxM3tmaWxsOiNFNTQzMzU7fQoJLnN0MTR7ZmlsbDojNDI4MEVGO30KCS5zdDE1e2ZpbGw6IzM0QTM1Mzt9Cgkuc3QxNntjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MTd7ZmlsbDojMTg4MDM4O30KCS5zdDE4e29wYWNpdHk6MC4yO2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDE5e29wYWNpdHk6MC4zO2ZpbGw6IzBENjUyRDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDIwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKTt9Cgkuc3QyMXtvcGFjaXR5OjAuMztmaWxsOnVybCgjXzQ1X3NoYWRvd18xXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QyMntjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyk7fQoJLnN0MjN7ZmlsbDojRkE3QjE3O30KCS5zdDI0e29wYWNpdHk6MC4zO2ZpbGw6IzE3NEVBNjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI1e29wYWNpdHk6MC4zO2ZpbGw6I0E1MEUwRTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI2e29wYWNpdHk6MC4zO2ZpbGw6I0UzNzQwMDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDI3e2ZpbGw6dXJsKCNGaW5pc2hfbWFza18xXyk7fQoJLnN0Mjh7ZmlsbDojRkZGRkZGO30KCS5zdDI5e2ZpbGw6IzBDOUQ1ODt9Cgkuc3QzMHtvcGFjaXR5OjAuMjtmaWxsOiMwMDRENDA7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QzMXtvcGFjaXR5OjAuMjtmaWxsOiMzRTI3MjM7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3QzMntmaWxsOiNGRkMxMDc7fQoJLnN0MzN7b3BhY2l0eTowLjI7ZmlsbDojMUEyMzdFO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MzR7b3BhY2l0eTowLjI7fQoJLnN0MzV7ZmlsbDojMUEyMzdFO30KCS5zdDM2e2ZpbGw6dXJsKCNTVkdJRF83Xyk7fQoJLnN0Mzd7ZmlsbDojRkJCQzA1O30KCS5zdDM4e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzlfKTtmaWxsOiNFNTM5MzU7fQoJLnN0Mzl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTFfKTtmaWxsOiNGQkMwMkQ7fQoJLnN0NDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTNfKTtmaWxsOiNFNTM5MzU7fQoJLnN0NDF7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTVfKTtmaWxsOiNGQkMwMkQ7fQo8L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDE0IiBkPSJNMTIwLDc2LjFjMC0zLjEtMC4zLTYuMy0wLjgtOS4zSDc1Ljl2MTcuN2gyNC44Yy0xLDUuNy00LjMsMTAuNy05LjIsMTMuOWwxNC44LDExLjUgICBDMTE1LDEwMS44LDEyMCw5MCwxMjAsNzYuMUwxMjAsNzYuMXoiLz48cGF0aCBjbGFzcz0ic3QxNSIgZD0iTTc1LjksMTIwLjljMTIuNCwwLDIyLjgtNC4xLDMwLjQtMTEuMUw5MS41LDk4LjRjLTQuMSwyLjgtOS40LDQuNC0xNS42LDQuNGMtMTIsMC0yMi4xLTguMS0yNS44LTE4LjkgICBMMzQuOSw5NS42QzQyLjcsMTExLjEsNTguNSwxMjAuOSw3NS45LDEyMC45eiIvPjxwYXRoIGNsYXNzPSJzdDEyIiBkPSJNNTAuMSw4My44Yy0xLjktNS43LTEuOS0xMS45LDAtMTcuNkwzNC45LDU0LjRjLTYuNSwxMy02LjUsMjguMywwLDQxLjJMNTAuMSw4My44eiIvPjxwYXRoIGNsYXNzPSJzdDEzIiBkPSJNNzUuOSw0Ny4zYzYuNS0wLjEsMTIuOSwyLjQsMTcuNiw2LjlMMTA2LjYsNDFDOTguMywzMy4yLDg3LjMsMjksNzUuOSwyOS4xYy0xNy40LDAtMzMuMiw5LjgtNDEsMjUuMyAgIGwxNS4yLDExLjhDNTMuOCw1NS4zLDYzLjksNDcuMyw3NS45LDQ3LjN6Ii8+PC9nPjwvc3ZnPg==';

export let otherData = [
	{
		date: '2020-09-16T23:00:00.000Z',
		value: 70
	},
	{
		date: '2020-09-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-09-18T23:00:00.000Z',
		value: 76
	},
	{
		date: '2020-09-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-09-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-09-21T23:00:00.000Z',
		value: 54
	},
	{
		date: '2020-09-22T23:00:00.000Z',
		value: 49
	},
	{
		date: '2020-09-23T23:00:00.000Z',
		value: 54
	},
	{
		date: '2020-09-24T23:00:00.000Z',
		value: 35
	},
	{
		date: '2020-09-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-09-26T23:00:00.000Z',
		value: 68
	},
	{
		date: '2020-09-27T23:00:00.000Z',
		value: 34
	},
	{
		date: '2020-09-28T23:00:00.000Z',
		value: 81
	},
	{
		date: '2020-09-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-09-30T23:00:00.000Z',
		value: 71
	},
	{
		date: '2020-10-01T23:00:00.000Z',
		value: 17
	},
	{
		date: '2020-10-02T23:00:00.000Z',
		value: 84
	},
	{
		date: '2020-10-03T23:00:00.000Z',
		value: 12
	},
	{
		date: '2020-10-04T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-05T23:00:00.000Z',
		value: 41
	},
	{
		date: '2020-10-06T23:00:00.000Z',
		value: 53
	},
	{
		date: '2020-10-07T23:00:00.000Z',
		value: 34
	},
	{
		date: '2020-10-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-09T23:00:00.000Z',
		value: 37
	},
	{
		date: '2020-10-10T23:00:00.000Z',
		value: 82
	},
	{
		date: '2020-10-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-12T23:00:00.000Z',
		value: 27
	},
	{
		date: '2020-10-13T23:00:00.000Z',
		value: 32
	},
	{
		date: '2020-10-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-15T23:00:00.000Z',
		value: 91
	},
	{
		date: '2020-10-16T23:00:00.000Z',
		value: 24
	},
	{
		date: '2020-10-17T23:00:00.000Z',
		value: 49
	},
	{
		date: '2020-10-18T23:00:00.000Z',
		value: 98
	},
	{
		date: '2020-10-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-20T23:00:00.000Z',
		value: 73
	},
	{
		date: '2020-10-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-22T23:00:00.000Z',
		value: 65
	},
	{
		date: '2020-10-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-24T23:00:00.000Z',
		value: 18
	},
	{
		date: '2020-10-25T23:00:00.000Z',
		value: 32
	},
	{
		date: '2020-10-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-10-27T23:00:00.000Z',
		value: 93
	},
	{
		date: '2020-10-28T23:00:00.000Z',
		value: 31
	},
	{
		date: '2020-10-29T23:00:00.000Z',
		value: 81
	},
	{
		date: '2020-10-30T23:00:00.000Z',
		value: 41
	},
	{
		date: '2020-10-31T23:00:00.000Z',
		value: 36
	},
	{
		date: '2020-11-01T23:00:00.000Z',
		value: 55
	},
	{
		date: '2020-11-02T23:00:00.000Z',
		value: 92
	},
	{
		date: '2020-11-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-04T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-05T23:00:00.000Z',
		value: 43
	},
	{
		date: '2020-11-06T23:00:00.000Z',
		value: 77
	},
	{
		date: '2020-11-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-08T23:00:00.000Z',
		value: 66
	},
	{
		date: '2020-11-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-10T23:00:00.000Z',
		value: 67
	},
	{
		date: '2020-11-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-12T23:00:00.000Z',
		value: 16
	},
	{
		date: '2020-11-13T23:00:00.000Z',
		value: 60
	},
	{
		date: '2020-11-14T23:00:00.000Z',
		value: 85
	},
	{
		date: '2020-11-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-16T23:00:00.000Z',
		value: 61
	},
	{
		date: '2020-11-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-18T23:00:00.000Z',
		value: 54
	},
	{
		date: '2020-11-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-20T23:00:00.000Z',
		value: 99
	},
	{
		date: '2020-11-21T23:00:00.000Z',
		value: 48
	},
	{
		date: '2020-11-22T23:00:00.000Z',
		value: 78
	},
	{
		date: '2020-11-23T23:00:00.000Z',
		value: 83
	},
	{
		date: '2020-11-24T23:00:00.000Z',
		value: 69
	},
	{
		date: '2020-11-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-11-26T23:00:00.000Z',
		value: 72
	},
	{
		date: '2020-11-27T23:00:00.000Z',
		value: 33
	},
	{
		date: '2020-11-28T23:00:00.000Z',
		value: 36
	},
	{
		date: '2020-11-29T23:00:00.000Z',
		value: 25
	},
	{
		date: '2020-11-30T23:00:00.000Z',
		value: 43
	},
	{
		date: '2020-12-01T23:00:00.000Z',
		value: 49
	},
	{
		date: '2020-12-02T23:00:00.000Z',
		value: 75
	},
	{
		date: '2020-12-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-04T23:00:00.000Z',
		value: 97
	},
	{
		date: '2020-12-05T23:00:00.000Z',
		value: 39
	},
	{
		date: '2020-12-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-09T23:00:00.000Z',
		value: 33
	},
	{
		date: '2020-12-10T23:00:00.000Z',
		value: 87
	},
	{
		date: '2020-12-11T23:00:00.000Z',
		value: 17
	},
	{
		date: '2020-12-12T23:00:00.000Z',
		value: 27
	},
	{
		date: '2020-12-13T23:00:00.000Z',
		value: 65
	},
	{
		date: '2020-12-14T23:00:00.000Z',
		value: 31
	},
	{
		date: '2020-12-15T23:00:00.000Z',
		value: 86
	},
	{
		date: '2020-12-16T23:00:00.000Z',
		value: 19
	},
	{
		date: '2020-12-17T23:00:00.000Z',
		value: 56
	},
	{
		date: '2020-12-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-19T23:00:00.000Z',
		value: 37
	},
	{
		date: '2020-12-20T23:00:00.000Z',
		value: 53
	},
	{
		date: '2020-12-21T23:00:00.000Z',
		value: 47
	},
	{
		date: '2020-12-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-23T23:00:00.000Z',
		value: 35
	},
	{
		date: '2020-12-24T23:00:00.000Z',
		value: 94
	},
	{
		date: '2020-12-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-26T23:00:00.000Z',
		value: 18
	},
	{
		date: '2020-12-27T23:00:00.000Z',
		value: 74
	},
	{
		date: '2020-12-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2020-12-29T23:00:00.000Z',
		value: 68
	},
	{
		date: '2020-12-30T23:00:00.000Z',
		value: 29
	},
	{
		date: '2020-12-31T23:00:00.000Z',
		value: 84
	},
	{
		date: '2021-01-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-01-02T23:00:00.000Z',
		value: 94
	},
	{
		date: '2021-01-03T23:00:00.000Z',
		value: 35
	},
	{
		date: '2021-01-04T23:00:00.000Z',
		value: 27
	},
	{
		date: '2021-01-05T23:00:00.000Z',
		value: 42
	},
	{
		date: '2021-01-06T23:00:00.000Z',
		value: 81
	},
	{
		date: '2021-01-07T23:00:00.000Z',
		value: 32
	},
	{
		date: '2021-01-08T23:00:00.000Z',
		value: 88
	},
	{
		date: '2021-01-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-01-10T23:00:00.000Z',
		value: 96
	},
	{
		date: '2021-01-11T23:00:00.000Z',
		value: 17
	},
	{
		date: '2021-01-12T23:00:00.000Z',
		value: 11
	},
	{
		date: '2021-01-13T23:00:00.000Z',
		value: 54
	},
	{
		date: '2021-01-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-01-15T23:00:00.000Z',
		value: 10
	},
	{
		date: '2021-01-16T23:00:00.000Z',
		value: 70
	},
	{
		date: '2021-01-17T23:00:00.000Z',
		value: 96
	},
	{
		date: '2021-01-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-01-19T23:00:00.000Z',
		value: 69
	},
	{
		date: '2021-01-20T23:00:00.000Z',
		value: 48
	},
	{
		date: '2021-01-21T23:00:00.000Z',
		value: 79
	},
	{
		date: '2021-01-22T23:00:00.000Z',
		value: 91
	},
	{
		date: '2021-01-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-01-24T23:00:00.000Z',
		value: 72
	},
	{
		date: '2021-01-25T23:00:00.000Z',
		value: 38
	},
	{
		date: '2021-01-26T23:00:00.000Z',
		value: 39
	},
	{
		date: '2021-01-27T23:00:00.000Z',
		value: 12
	},
	{
		date: '2021-01-28T23:00:00.000Z',
		value: 80
	},
	{
		date: '2021-01-29T23:00:00.000Z',
		value: 63
	},
	{
		date: '2021-01-30T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-01-31T23:00:00.000Z',
		value: 52
	},
	{
		date: '2021-02-01T23:00:00.000Z',
		value: 39
	},
	{
		date: '2021-02-02T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-02-03T23:00:00.000Z',
		value: 56
	},
	{
		date: '2021-02-04T23:00:00.000Z',
		value: 27
	},
	{
		date: '2021-02-05T23:00:00.000Z',
		value: 71
	},
	{
		date: '2021-02-06T23:00:00.000Z',
		value: 14
	},
	{
		date: '2021-02-07T23:00:00.000Z',
		value: 94
	},
	{
		date: '2021-02-08T23:00:00.000Z',
		value: 65
	},
	{
		date: '2021-02-09T23:00:00.000Z',
		value: 22
	},
	{
		date: '2021-02-10T23:00:00.000Z',
		value: 67
	},
	{
		date: '2021-02-11T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-02-12T23:00:00.000Z',
		value: 64
	},
	{
		date: '2021-02-13T23:00:00.000Z',
		value: 76
	},
	{
		date: '2021-02-14T23:00:00.000Z',
		value: 84
	},
	{
		date: '2021-02-15T23:00:00.000Z',
		value: 83
	},
	{
		date: '2021-02-16T23:00:00.000Z',
		value: 20
	},
	{
		date: '2021-02-17T23:00:00.000Z',
		value: 57
	},
	{
		date: '2021-02-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-02-19T23:00:00.000Z',
		value: 95
	},
	{
		date: '2021-02-20T23:00:00.000Z',
		value: 46
	},
	{
		date: '2021-02-21T23:00:00.000Z',
		value: 84
	},
	{
		date: '2021-02-22T23:00:00.000Z',
		value: 68
	},
	{
		date: '2021-02-23T23:00:00.000Z',
		value: 17
	},
	{
		date: '2021-02-24T23:00:00.000Z',
		value: 55
	},
	{
		date: '2021-02-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-02-26T23:00:00.000Z',
		value: 33
	},
	{
		date: '2021-02-27T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-02-28T23:00:00.000Z',
		value: 62
	},
	{
		date: '2021-03-01T23:00:00.000Z',
		value: 18
	},
	{
		date: '2021-03-02T23:00:00.000Z',
		value: 51
	},
	{
		date: '2021-03-03T23:00:00.000Z',
		value: 48
	},
	{
		date: '2021-03-04T23:00:00.000Z',
		value: 54
	},
	{
		date: '2021-03-05T23:00:00.000Z',
		value: 35
	},
	{
		date: '2021-03-06T23:00:00.000Z',
		value: 38
	},
	{
		date: '2021-03-07T23:00:00.000Z',
		value: 100
	},
	{
		date: '2021-03-08T23:00:00.000Z',
		value: 88
	},
	{
		date: '2021-03-09T23:00:00.000Z',
		value: 29
	},
	{
		date: '2021-03-10T23:00:00.000Z',
		value: 38
	},
	{
		date: '2021-03-11T23:00:00.000Z',
		value: 98
	},
	{
		date: '2021-03-12T23:00:00.000Z',
		value: 67
	},
	{
		date: '2021-03-13T23:00:00.000Z',
		value: 35
	},
	{
		date: '2021-03-14T23:00:00.000Z',
		value: 67
	},
	{
		date: '2021-03-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-03-16T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-03-17T23:00:00.000Z',
		value: 32
	},
	{
		date: '2021-03-18T23:00:00.000Z',
		value: 67
	},
	{
		date: '2021-03-19T23:00:00.000Z',
		value: 100
	},
	{
		date: '2021-03-20T23:00:00.000Z',
		value: 89
	},
	{
		date: '2021-03-21T23:00:00.000Z',
		value: 18
	},
	{
		date: '2021-03-22T23:00:00.000Z',
		value: 33
	},
	{
		date: '2021-03-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-03-24T23:00:00.000Z',
		value: 22
	},
	{
		date: '2021-03-25T23:00:00.000Z',
		value: 85
	},
	{
		date: '2021-03-26T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-03-27T23:00:00.000Z',
		value: 75
	},
	{
		date: '2021-03-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-03-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-03-30T23:00:00.000Z',
		value: 81
	},
	{
		date: '2021-03-31T23:00:00.000Z',
		value: 96
	},
	{
		date: '2021-04-01T23:00:00.000Z',
		value: 61
	},
	{
		date: '2021-04-02T23:00:00.000Z',
		value: 82
	},
	{
		date: '2021-04-03T23:00:00.000Z',
		value: 39
	},
	{
		date: '2021-04-04T23:00:00.000Z',
		value: 63
	},
	{
		date: '2021-04-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-04-06T23:00:00.000Z',
		value: 94
	},
	{
		date: '2021-04-07T23:00:00.000Z',
		value: 77
	},
	{
		date: '2021-04-08T23:00:00.000Z',
		value: 76
	},
	{
		date: '2021-04-09T23:00:00.000Z',
		value: 77
	},
	{
		date: '2021-04-10T23:00:00.000Z',
		value: 37
	},
	{
		date: '2021-04-11T23:00:00.000Z',
		value: 93
	},
	{
		date: '2021-04-12T23:00:00.000Z',
		value: 87
	},
	{
		date: '2021-04-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-04-14T23:00:00.000Z',
		value: 40
	},
	{
		date: '2021-04-15T23:00:00.000Z',
		value: 23
	},
	{
		date: '2021-04-16T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-04-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-04-18T23:00:00.000Z',
		value: 44
	},
	{
		date: '2021-04-19T23:00:00.000Z',
		value: 55
	},
	{
		date: '2021-04-20T23:00:00.000Z',
		value: 95
	},
	{
		date: '2021-04-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-04-22T23:00:00.000Z',
		value: 42
	},
	{
		date: '2021-04-23T23:00:00.000Z',
		value: 48
	},
	{
		date: '2021-04-24T23:00:00.000Z',
		value: 17
	},
	{
		date: '2021-04-25T23:00:00.000Z',
		value: 100
	},
	{
		date: '2021-04-26T23:00:00.000Z',
		value: 22
	},
	{
		date: '2021-04-27T23:00:00.000Z',
		value: 18
	},
	{
		date: '2021-04-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-04-29T23:00:00.000Z',
		value: 98
	},
	{
		date: '2021-04-30T23:00:00.000Z',
		value: 67
	},
	{
		date: '2021-05-01T23:00:00.000Z',
		value: 90
	},
	{
		date: '2021-05-02T23:00:00.000Z',
		value: 75
	},
	{
		date: '2021-05-03T23:00:00.000Z',
		value: 84
	},
	{
		date: '2021-05-04T23:00:00.000Z',
		value: 69
	},
	{
		date: '2021-05-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-05-06T23:00:00.000Z',
		value: 70
	},
	{
		date: '2021-05-07T23:00:00.000Z',
		value: 43
	},
	{
		date: '2021-05-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-05-09T23:00:00.000Z',
		value: 84
	},
	{
		date: '2021-05-10T23:00:00.000Z',
		value: 35
	},
	{
		date: '2021-05-11T23:00:00.000Z',
		value: 76
	},
	{
		date: '2021-05-12T23:00:00.000Z',
		value: 20
	},
	{
		date: '2021-05-13T23:00:00.000Z',
		value: 45
	},
	{
		date: '2021-05-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-05-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-05-16T23:00:00.000Z',
		value: 68
	},
	{
		date: '2021-05-17T23:00:00.000Z',
		value: 26
	},
	{
		date: '2021-05-18T23:00:00.000Z',
		value: 89
	},
	{
		date: '2021-05-19T23:00:00.000Z',
		value: 27
	},
	{
		date: '2021-05-20T23:00:00.000Z',
		value: 64
	},
	{
		date: '2021-05-21T23:00:00.000Z',
		value: 61
	},
	{
		date: '2021-05-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-05-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-05-24T23:00:00.000Z',
		value: 87
	},
	{
		date: '2021-05-25T23:00:00.000Z',
		value: 65
	},
	{
		date: '2021-05-26T23:00:00.000Z',
		value: 47
	},
	{
		date: '2021-05-27T23:00:00.000Z',
		value: 14
	},
	{
		date: '2021-05-28T23:00:00.000Z',
		value: 30
	},
	{
		date: '2021-05-29T23:00:00.000Z',
		value: 44
	},
	{
		date: '2021-05-30T23:00:00.000Z',
		value: 62
	},
	{
		date: '2021-05-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-06-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-06-02T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-06-03T23:00:00.000Z',
		value: 45
	},
	{
		date: '2021-06-04T23:00:00.000Z',
		value: 22
	},
	{
		date: '2021-06-05T23:00:00.000Z',
		value: 40
	},
	{
		date: '2021-06-06T23:00:00.000Z',
		value: 68
	},
	{
		date: '2021-06-07T23:00:00.000Z',
		value: 57
	},
	{
		date: '2021-06-08T23:00:00.000Z',
		value: 80
	},
	{
		date: '2021-06-09T23:00:00.000Z',
		value: 54
	},
	{
		date: '2021-06-10T23:00:00.000Z',
		value: 70
	},
	{
		date: '2021-06-11T23:00:00.000Z',
		value: 52
	},
	{
		date: '2021-06-12T23:00:00.000Z',
		value: 64
	},
	{
		date: '2021-06-13T23:00:00.000Z',
		value: 18
	},
	{
		date: '2021-06-14T23:00:00.000Z',
		value: 100
	},
	{
		date: '2021-06-15T23:00:00.000Z',
		value: 31
	},
	{
		date: '2021-06-16T23:00:00.000Z',
		value: 24
	},
	{
		date: '2021-06-17T23:00:00.000Z',
		value: 33
	},
	{
		date: '2021-06-18T23:00:00.000Z',
		value: 84
	},
	{
		date: '2021-06-19T23:00:00.000Z',
		value: 51
	},
	{
		date: '2021-06-20T23:00:00.000Z',
		value: 21
	},
	{
		date: '2021-06-21T23:00:00.000Z',
		value: 46
	},
	{
		date: '2021-06-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-06-23T23:00:00.000Z',
		value: 63
	},
	{
		date: '2021-06-24T23:00:00.000Z',
		value: 72
	},
	{
		date: '2021-06-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-06-26T23:00:00.000Z',
		value: 95
	},
	{
		date: '2021-06-27T23:00:00.000Z',
		value: 65
	},
	{
		date: '2021-06-28T23:00:00.000Z',
		value: 50
	},
	{
		date: '2021-06-29T23:00:00.000Z',
		value: 87
	},
	{
		date: '2021-06-30T23:00:00.000Z',
		value: 25
	},
	{
		date: '2021-07-01T23:00:00.000Z',
		value: 17
	},
	{
		date: '2021-07-02T23:00:00.000Z',
		value: 44
	},
	{
		date: '2021-07-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-07-04T23:00:00.000Z',
		value: 85
	},
	{
		date: '2021-07-05T23:00:00.000Z',
		value: 27
	},
	{
		date: '2021-07-06T23:00:00.000Z',
		value: 36
	},
	{
		date: '2021-07-07T23:00:00.000Z',
		value: 93
	},
	{
		date: '2021-07-08T23:00:00.000Z',
		value: 32
	},
	{
		date: '2021-07-09T23:00:00.000Z',
		value: 26
	},
	{
		date: '2021-07-10T23:00:00.000Z',
		value: 41
	},
	{
		date: '2021-07-11T23:00:00.000Z',
		value: 70
	},
	{
		date: '2021-07-12T23:00:00.000Z',
		value: 50
	},
	{
		date: '2021-07-13T23:00:00.000Z',
		value: 30
	},
	{
		date: '2021-07-14T23:00:00.000Z',
		value: 50
	},
	{
		date: '2021-07-15T23:00:00.000Z',
		value: 48
	},
	{
		date: '2021-07-16T23:00:00.000Z',
		value: 84
	},
	{
		date: '2021-07-17T23:00:00.000Z',
		value: 36
	},
	{
		date: '2021-07-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-07-19T23:00:00.000Z',
		value: 87
	},
	{
		date: '2021-07-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-07-21T23:00:00.000Z',
		value: 24
	},
	{
		date: '2021-07-22T23:00:00.000Z',
		value: 67
	},
	{
		date: '2021-07-23T23:00:00.000Z',
		value: 73
	},
	{
		date: '2021-07-24T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-07-25T23:00:00.000Z',
		value: 23
	},
	{
		date: '2021-07-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-07-27T23:00:00.000Z',
		value: 24
	},
	{
		date: '2021-07-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-07-29T23:00:00.000Z',
		value: 79
	},
	{
		date: '2021-07-30T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-07-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-08-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-08-02T23:00:00.000Z',
		value: 58
	},
	{
		date: '2021-08-03T23:00:00.000Z',
		value: 66
	},
	{
		date: '2021-08-04T23:00:00.000Z',
		value: 54
	},
	{
		date: '2021-08-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-08-06T23:00:00.000Z',
		value: 11
	},
	{
		date: '2021-08-07T23:00:00.000Z',
		value: 90
	},
	{
		date: '2021-08-08T23:00:00.000Z',
		value: 44
	},
	{
		date: '2021-08-09T23:00:00.000Z',
		value: 30
	},
	{
		date: '2021-08-10T23:00:00.000Z',
		value: 42
	},
	{
		date: '2021-08-11T23:00:00.000Z',
		value: 47
	},
	{
		date: '2021-08-12T23:00:00.000Z',
		value: 35
	},
	{
		date: '2021-08-13T23:00:00.000Z',
		value: 11
	},
	{
		date: '2021-08-14T23:00:00.000Z',
		value: 27
	},
	{
		date: '2021-08-15T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-08-16T23:00:00.000Z',
		value: 41
	},
	{
		date: '2021-08-17T23:00:00.000Z',
		value: 76
	},
	{
		date: '2021-08-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-08-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-08-20T23:00:00.000Z',
		value: 14
	},
	{
		date: '2021-08-21T23:00:00.000Z',
		value: 54
	},
	{
		date: '2021-08-22T23:00:00.000Z',
		value: 52
	},
	{
		date: '2021-08-23T23:00:00.000Z',
		value: 91
	},
	{
		date: '2021-08-24T23:00:00.000Z',
		value: 25
	},
	{
		date: '2021-08-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-08-26T23:00:00.000Z',
		value: 20
	},
	{
		date: '2021-08-27T23:00:00.000Z',
		value: 14
	},
	{
		date: '2021-08-28T23:00:00.000Z',
		value: 77
	},
	{
		date: '2021-08-29T23:00:00.000Z',
		value: 98
	},
	{
		date: '2021-08-30T23:00:00.000Z',
		value: 43
	},
	{
		date: '2021-08-31T23:00:00.000Z',
		value: 81
	},
	{
		date: '2021-09-01T23:00:00.000Z',
		value: 69
	},
	{
		date: '2021-09-02T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-09-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-09-04T23:00:00.000Z',
		value: 91
	},
	{
		date: '2021-09-05T23:00:00.000Z',
		value: 15
	},
	{
		date: '2021-09-06T23:00:00.000Z',
		value: 44
	},
	{
		date: '2021-09-07T23:00:00.000Z',
		value: 88
	},
	{
		date: '2021-09-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-09-09T23:00:00.000Z',
		value: 87
	},
	{
		date: '2021-09-10T23:00:00.000Z',
		value: 73
	},
	{
		date: '2021-09-11T23:00:00.000Z',
		value: 48
	},
	{
		date: '2021-09-12T23:00:00.000Z',
		value: 34
	},
	{
		date: '2021-09-13T23:00:00.000Z',
		value: 24
	},
	{
		date: '2021-09-14T23:00:00.000Z',
		value: 50
	},
	{
		date: '2021-09-15T23:00:00.000Z',
		value: 32
	},
	{
		date: '2021-09-16T23:00:00.000Z',
		value: 34
	},
	{
		date: '2021-09-17T23:00:00.000Z',
		value: 87
	},
	{
		date: '2021-09-18T23:00:00.000Z',
		value: 83
	},
	{
		date: '2021-09-19T23:00:00.000Z',
		value: 38
	},
	{
		date: '2021-09-20T23:00:00.000Z',
		value: 96
	},
	{
		date: '2021-09-21T23:00:00.000Z',
		value: 74
	},
	{
		date: '2021-09-22T23:00:00.000Z',
		value: 42
	},
	{
		date: '2021-09-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-09-24T23:00:00.000Z',
		value: 11
	},
	{
		date: '2021-09-25T23:00:00.000Z',
		value: 22
	},
	{
		date: '2021-09-26T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-09-27T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-09-28T23:00:00.000Z',
		value: 44
	},
	{
		date: '2021-09-29T23:00:00.000Z',
		value: 50
	},
	{
		date: '2021-09-30T23:00:00.000Z',
		value: 26
	},
	{
		date: '2021-10-01T23:00:00.000Z',
		value: 88
	},
	{
		date: '2021-10-02T23:00:00.000Z',
		value: 93
	},
	{
		date: '2021-10-03T23:00:00.000Z',
		value: 15
	},
	{
		date: '2021-10-04T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-10-05T23:00:00.000Z',
		value: 76
	},
	{
		date: '2021-10-06T23:00:00.000Z',
		value: 81
	},
	{
		date: '2021-10-07T23:00:00.000Z',
		value: 95
	},
	{
		date: '2021-10-08T23:00:00.000Z',
		value: 64
	},
	{
		date: '2021-10-09T23:00:00.000Z',
		value: 52
	},
	{
		date: '2021-10-10T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-10-11T23:00:00.000Z',
		value: 52
	},
	{
		date: '2021-10-12T23:00:00.000Z',
		value: 77
	},
	{
		date: '2021-10-13T23:00:00.000Z',
		value: 10
	},
	{
		date: '2021-10-14T23:00:00.000Z',
		value: 35
	},
	{
		date: '2021-10-15T23:00:00.000Z',
		value: 65
	},
	{
		date: '2021-10-16T23:00:00.000Z',
		value: 68
	},
	{
		date: '2021-10-17T23:00:00.000Z',
		value: 61
	},
	{
		date: '2021-10-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-10-19T23:00:00.000Z',
		value: 16
	},
	{
		date: '2021-10-20T23:00:00.000Z',
		value: 75
	},
	{
		date: '2021-10-21T23:00:00.000Z',
		value: 62
	},
	{
		date: '2021-10-22T23:00:00.000Z',
		value: 98
	},
	{
		date: '2021-10-23T23:00:00.000Z',
		value: 49
	},
	{
		date: '2021-10-24T23:00:00.000Z',
		value: 35
	},
	{
		date: '2021-10-25T23:00:00.000Z',
		value: 69
	},
	{
		date: '2021-10-26T23:00:00.000Z',
		value: 88
	},
	{
		date: '2021-10-27T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-10-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-10-29T23:00:00.000Z',
		value: 28
	},
	{
		date: '2021-10-30T23:00:00.000Z',
		value: 91
	},
	{
		date: '2021-10-31T23:00:00.000Z',
		value: 40
	},
	{
		date: '2021-11-01T23:00:00.000Z',
		value: 87
	},
	{
		date: '2021-11-02T23:00:00.000Z',
		value: 91
	},
	{
		date: '2021-11-03T23:00:00.000Z',
		value: 42
	},
	{
		date: '2021-11-04T23:00:00.000Z',
		value: 95
	},
	{
		date: '2021-11-05T23:00:00.000Z',
		value: 77
	},
	{
		date: '2021-11-06T23:00:00.000Z',
		value: 55
	},
	{
		date: '2021-11-07T23:00:00.000Z',
		value: 57
	},
	{
		date: '2021-11-08T23:00:00.000Z',
		value: 90
	},
	{
		date: '2021-11-09T23:00:00.000Z',
		value: 68
	},
	{
		date: '2021-11-10T23:00:00.000Z',
		value: 21
	},
	{
		date: '2021-11-11T23:00:00.000Z',
		value: 61
	},
	{
		date: '2021-11-12T23:00:00.000Z',
		value: 64
	},
	{
		date: '2021-11-13T23:00:00.000Z',
		value: 74
	},
	{
		date: '2021-11-14T23:00:00.000Z',
		value: 89
	},
	{
		date: '2021-11-15T23:00:00.000Z',
		value: 24
	},
	{
		date: '2021-11-16T23:00:00.000Z',
		value: 41
	},
	{
		date: '2021-11-17T23:00:00.000Z',
		value: 12
	},
	{
		date: '2021-11-18T23:00:00.000Z',
		value: 90
	},
	{
		date: '2021-11-19T23:00:00.000Z',
		value: 64
	},
	{
		date: '2021-11-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-11-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-11-22T23:00:00.000Z',
		value: 69
	},
	{
		date: '2021-11-23T23:00:00.000Z',
		value: 60
	},
	{
		date: '2021-11-24T23:00:00.000Z',
		value: 31
	},
	{
		date: '2021-11-25T23:00:00.000Z',
		value: 62
	},
	{
		date: '2021-11-26T23:00:00.000Z',
		value: 62
	},
	{
		date: '2021-11-27T23:00:00.000Z',
		value: 51
	},
	{
		date: '2021-11-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-11-29T23:00:00.000Z',
		value: 26
	},
	{
		date: '2021-11-30T23:00:00.000Z',
		value: 45
	},
	{
		date: '2021-12-01T23:00:00.000Z',
		value: 44
	},
	{
		date: '2021-12-02T23:00:00.000Z',
		value: 49
	},
	{
		date: '2021-12-03T23:00:00.000Z',
		value: 65
	},
	{
		date: '2021-12-04T23:00:00.000Z',
		value: 55
	},
	{
		date: '2021-12-05T23:00:00.000Z',
		value: 29
	},
	{
		date: '2021-12-06T23:00:00.000Z',
		value: 92
	},
	{
		date: '2021-12-07T23:00:00.000Z',
		value: 94
	},
	{
		date: '2021-12-08T23:00:00.000Z',
		value: 46
	},
	{
		date: '2021-12-09T23:00:00.000Z',
		value: 13
	},
	{
		date: '2021-12-10T23:00:00.000Z',
		value: 38
	},
	{
		date: '2021-12-11T23:00:00.000Z',
		value: 71
	},
	{
		date: '2021-12-12T23:00:00.000Z',
		value: 45
	},
	{
		date: '2021-12-13T23:00:00.000Z',
		value: 59
	},
	{
		date: '2021-12-14T23:00:00.000Z',
		value: 14
	},
	{
		date: '2021-12-15T23:00:00.000Z',
		value: 69
	},
	{
		date: '2021-12-16T23:00:00.000Z',
		value: 19
	},
	{
		date: '2021-12-17T23:00:00.000Z',
		value: 30
	},
	{
		date: '2021-12-18T23:00:00.000Z',
		value: 89
	},
	{
		date: '2021-12-19T23:00:00.000Z',
		value: 89
	},
	{
		date: '2021-12-20T23:00:00.000Z',
		value: 36
	},
	{
		date: '2021-12-21T23:00:00.000Z',
		value: 40
	},
	{
		date: '2021-12-22T23:00:00.000Z',
		value: 65
	},
	{
		date: '2021-12-23T23:00:00.000Z',
		value: 86
	},
	{
		date: '2021-12-24T23:00:00.000Z',
		value: 92
	},
	{
		date: '2021-12-25T23:00:00.000Z',
		value: 67
	},
	{
		date: '2021-12-26T23:00:00.000Z',
		value: 79
	},
	{
		date: '2021-12-27T23:00:00.000Z',
		value: 78
	},
	{
		date: '2021-12-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2021-12-29T23:00:00.000Z',
		value: 12
	},
	{
		date: '2021-12-30T23:00:00.000Z',
		value: 96
	},
	{
		date: '2021-12-31T23:00:00.000Z',
		value: 40
	},
	{
		date: '2022-01-01T23:00:00.000Z',
		value: 38
	},
	{
		date: '2022-01-02T23:00:00.000Z',
		value: 87
	},
	{
		date: '2022-01-03T23:00:00.000Z',
		value: 61
	},
	{
		date: '2022-01-04T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-01-05T23:00:00.000Z',
		value: 62
	},
	{
		date: '2022-01-06T23:00:00.000Z',
		value: 77
	},
	{
		date: '2022-01-07T23:00:00.000Z',
		value: 72
	},
	{
		date: '2022-01-08T23:00:00.000Z',
		value: 47
	},
	{
		date: '2022-01-09T23:00:00.000Z',
		value: 46
	},
	{
		date: '2022-01-10T23:00:00.000Z',
		value: 53
	},
	{
		date: '2022-01-11T23:00:00.000Z',
		value: 68
	},
	{
		date: '2022-01-12T23:00:00.000Z',
		value: 46
	},
	{
		date: '2022-01-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-01-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-01-15T23:00:00.000Z',
		value: 49
	},
	{
		date: '2022-01-16T23:00:00.000Z',
		value: 67
	},
	{
		date: '2022-01-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-01-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-01-19T23:00:00.000Z',
		value: 41
	},
	{
		date: '2022-01-20T23:00:00.000Z',
		value: 64
	},
	{
		date: '2022-01-21T23:00:00.000Z',
		value: 47
	},
	{
		date: '2022-01-22T23:00:00.000Z',
		value: 65
	},
	{
		date: '2022-01-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-01-24T23:00:00.000Z',
		value: 18
	},
	{
		date: '2022-01-25T23:00:00.000Z',
		value: 54
	},
	{
		date: '2022-01-26T23:00:00.000Z',
		value: 23
	},
	{
		date: '2022-01-27T23:00:00.000Z',
		value: 42
	},
	{
		date: '2022-01-28T23:00:00.000Z',
		value: 92
	},
	{
		date: '2022-01-29T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-01-30T23:00:00.000Z',
		value: 47
	},
	{
		date: '2022-01-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-02-01T23:00:00.000Z',
		value: 47
	},
	{
		date: '2022-02-02T23:00:00.000Z',
		value: 59
	},
	{
		date: '2022-02-03T23:00:00.000Z',
		value: 79
	},
	{
		date: '2022-02-04T23:00:00.000Z',
		value: 22
	},
	{
		date: '2022-02-05T23:00:00.000Z',
		value: 62
	},
	{
		date: '2022-02-06T23:00:00.000Z',
		value: 22
	},
	{
		date: '2022-02-07T23:00:00.000Z',
		value: 72
	},
	{
		date: '2022-02-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-02-09T23:00:00.000Z',
		value: 39
	},
	{
		date: '2022-02-10T23:00:00.000Z',
		value: 16
	},
	{
		date: '2022-02-11T23:00:00.000Z',
		value: 35
	},
	{
		date: '2022-02-12T23:00:00.000Z',
		value: 74
	},
	{
		date: '2022-02-13T23:00:00.000Z',
		value: 22
	},
	{
		date: '2022-02-14T23:00:00.000Z',
		value: 89
	},
	{
		date: '2022-02-15T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-02-16T23:00:00.000Z',
		value: 93
	},
	{
		date: '2022-02-17T23:00:00.000Z',
		value: 21
	},
	{
		date: '2022-02-18T23:00:00.000Z',
		value: 43
	},
	{
		date: '2022-02-19T23:00:00.000Z',
		value: 54
	},
	{
		date: '2022-02-20T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-02-21T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-02-22T23:00:00.000Z',
		value: 67
	},
	{
		date: '2022-02-23T23:00:00.000Z',
		value: 80
	},
	{
		date: '2022-02-24T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-02-25T23:00:00.000Z',
		value: 19
	},
	{
		date: '2022-02-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-02-27T23:00:00.000Z',
		value: 87
	},
	{
		date: '2022-02-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-03-01T23:00:00.000Z',
		value: 83
	},
	{
		date: '2022-03-02T23:00:00.000Z',
		value: 74
	},
	{
		date: '2022-03-03T23:00:00.000Z',
		value: 46
	},
	{
		date: '2022-03-04T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-03-05T23:00:00.000Z',
		value: 18
	},
	{
		date: '2022-03-06T23:00:00.000Z',
		value: 32
	},
	{
		date: '2022-03-07T23:00:00.000Z',
		value: 23
	},
	{
		date: '2022-03-08T23:00:00.000Z',
		value: 25
	},
	{
		date: '2022-03-09T23:00:00.000Z',
		value: 76
	},
	{
		date: '2022-03-10T23:00:00.000Z',
		value: 25
	},
	{
		date: '2022-03-11T23:00:00.000Z',
		value: 71
	},
	{
		date: '2022-03-12T23:00:00.000Z',
		value: 81
	},
	{
		date: '2022-03-13T23:00:00.000Z',
		value: 91
	},
	{
		date: '2022-03-14T23:00:00.000Z',
		value: 10
	},
	{
		date: '2022-03-15T23:00:00.000Z',
		value: 76
	},
	{
		date: '2022-03-16T23:00:00.000Z',
		value: 26
	},
	{
		date: '2022-03-17T23:00:00.000Z',
		value: 48
	},
	{
		date: '2022-03-18T23:00:00.000Z',
		value: 88
	},
	{
		date: '2022-03-19T23:00:00.000Z',
		value: 34
	},
	{
		date: '2022-03-20T23:00:00.000Z',
		value: 67
	},
	{
		date: '2022-03-21T23:00:00.000Z',
		value: 73
	},
	{
		date: '2022-03-22T23:00:00.000Z',
		value: 95
	},
	{
		date: '2022-03-23T23:00:00.000Z',
		value: 31
	},
	{
		date: '2022-03-24T23:00:00.000Z',
		value: 100
	},
	{
		date: '2022-03-25T23:00:00.000Z',
		value: 13
	},
	{
		date: '2022-03-26T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-03-27T23:00:00.000Z',
		value: 47
	},
	{
		date: '2022-03-28T23:00:00.000Z',
		value: 42
	},
	{
		date: '2022-03-29T23:00:00.000Z',
		value: 56
	},
	{
		date: '2022-03-30T23:00:00.000Z',
		value: 39
	},
	{
		date: '2022-03-31T23:00:00.000Z',
		value: 57
	},
	{
		date: '2022-04-01T23:00:00.000Z',
		value: 21
	},
	{
		date: '2022-04-02T23:00:00.000Z',
		value: 56
	},
	{
		date: '2022-04-03T23:00:00.000Z',
		value: 10
	},
	{
		date: '2022-04-04T23:00:00.000Z',
		value: 20
	},
	{
		date: '2022-04-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-06T23:00:00.000Z',
		value: 38
	},
	{
		date: '2022-04-07T23:00:00.000Z',
		value: 23
	},
	{
		date: '2022-04-08T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-04-09T23:00:00.000Z',
		value: 84
	},
	{
		date: '2022-04-10T23:00:00.000Z',
		value: 26
	},
	{
		date: '2022-04-11T23:00:00.000Z',
		value: 91
	},
	{
		date: '2022-04-12T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-13T23:00:00.000Z',
		value: 94
	},
	{
		date: '2022-04-14T23:00:00.000Z',
		value: 29
	},
	{
		date: '2022-04-15T23:00:00.000Z',
		value: 43
	},
	{
		date: '2022-04-16T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-17T23:00:00.000Z',
		value: 72
	},
	{
		date: '2022-04-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-19T23:00:00.000Z',
		value: 73
	},
	{
		date: '2022-04-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-21T23:00:00.000Z',
		value: 96
	},
	{
		date: '2022-04-22T23:00:00.000Z',
		value: 53
	},
	{
		date: '2022-04-23T23:00:00.000Z',
		value: 34
	},
	{
		date: '2022-04-24T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-25T23:00:00.000Z',
		value: 89
	},
	{
		date: '2022-04-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-27T23:00:00.000Z',
		value: 56
	},
	{
		date: '2022-04-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-04-29T23:00:00.000Z',
		value: 63
	},
	{
		date: '2022-04-30T23:00:00.000Z',
		value: 69
	},
	{
		date: '2022-05-01T23:00:00.000Z',
		value: 83
	},
	{
		date: '2022-05-02T23:00:00.000Z',
		value: 10
	},
	{
		date: '2022-05-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-04T23:00:00.000Z',
		value: 84
	},
	{
		date: '2022-05-05T23:00:00.000Z',
		value: 34
	},
	{
		date: '2022-05-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-08T23:00:00.000Z',
		value: 23
	},
	{
		date: '2022-05-09T23:00:00.000Z',
		value: 15
	},
	{
		date: '2022-05-10T23:00:00.000Z',
		value: 65
	},
	{
		date: '2022-05-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-12T23:00:00.000Z',
		value: 97
	},
	{
		date: '2022-05-13T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-05-14T23:00:00.000Z',
		value: 38
	},
	{
		date: '2022-05-15T23:00:00.000Z',
		value: 35
	},
	{
		date: '2022-05-16T23:00:00.000Z',
		value: 13
	},
	{
		date: '2022-05-17T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-05-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-19T23:00:00.000Z',
		value: 33
	},
	{
		date: '2022-05-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-21T23:00:00.000Z',
		value: 56
	},
	{
		date: '2022-05-22T23:00:00.000Z',
		value: 85
	},
	{
		date: '2022-05-23T23:00:00.000Z',
		value: 17
	},
	{
		date: '2022-05-24T23:00:00.000Z',
		value: 72
	},
	{
		date: '2022-05-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-26T23:00:00.000Z',
		value: 38
	},
	{
		date: '2022-05-27T23:00:00.000Z',
		value: 88
	},
	{
		date: '2022-05-28T23:00:00.000Z',
		value: 21
	},
	{
		date: '2022-05-29T23:00:00.000Z',
		value: 81
	},
	{
		date: '2022-05-30T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-05-31T23:00:00.000Z',
		value: 15
	},
	{
		date: '2022-06-01T23:00:00.000Z',
		value: 86
	},
	{
		date: '2022-06-02T23:00:00.000Z',
		value: 48
	},
	{
		date: '2022-06-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-04T23:00:00.000Z',
		value: 55
	},
	{
		date: '2022-06-05T23:00:00.000Z',
		value: 29
	},
	{
		date: '2022-06-06T23:00:00.000Z',
		value: 35
	},
	{
		date: '2022-06-07T23:00:00.000Z',
		value: 76
	},
	{
		date: '2022-06-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-10T23:00:00.000Z',
		value: 86
	},
	{
		date: '2022-06-11T23:00:00.000Z',
		value: 67
	},
	{
		date: '2022-06-12T23:00:00.000Z',
		value: 27
	},
	{
		date: '2022-06-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-14T23:00:00.000Z',
		value: 62
	},
	{
		date: '2022-06-15T23:00:00.000Z',
		value: 38
	},
	{
		date: '2022-06-16T23:00:00.000Z',
		value: 31
	},
	{
		date: '2022-06-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-18T23:00:00.000Z',
		value: 76
	},
	{
		date: '2022-06-19T23:00:00.000Z',
		value: 77
	},
	{
		date: '2022-06-20T23:00:00.000Z',
		value: 20
	},
	{
		date: '2022-06-21T23:00:00.000Z',
		value: 95
	},
	{
		date: '2022-06-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-23T23:00:00.000Z',
		value: 74
	},
	{
		date: '2022-06-24T23:00:00.000Z',
		value: 40
	},
	{
		date: '2022-06-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-26T23:00:00.000Z',
		value: 49
	},
	{
		date: '2022-06-27T23:00:00.000Z',
		value: 53
	},
	{
		date: '2022-06-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-06-30T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-07-01T23:00:00.000Z',
		value: 42
	},
	{
		date: '2022-07-02T23:00:00.000Z',
		value: 79
	},
	{
		date: '2022-07-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-07-04T23:00:00.000Z',
		value: 31
	},
	{
		date: '2022-07-05T23:00:00.000Z',
		value: 23
	},
	{
		date: '2022-07-06T23:00:00.000Z',
		value: 32
	},
	{
		date: '2022-07-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-07-08T23:00:00.000Z',
		value: 14
	},
	{
		date: '2022-07-09T23:00:00.000Z',
		value: 36
	},
	{
		date: '2022-07-10T23:00:00.000Z',
		value: 26
	},
	{
		date: '2022-07-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-07-12T23:00:00.000Z',
		value: 57
	},
	{
		date: '2022-07-13T23:00:00.000Z',
		value: 76
	},
	{
		date: '2022-07-14T23:00:00.000Z',
		value: 29
	},
	{
		date: '2022-07-15T23:00:00.000Z',
		value: 83
	},
	{
		date: '2022-07-16T23:00:00.000Z',
		value: 17
	},
	{
		date: '2022-07-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-07-18T23:00:00.000Z',
		value: 40
	},
	{
		date: '2022-07-19T23:00:00.000Z',
		value: 35
	},
	{
		date: '2022-07-20T23:00:00.000Z',
		value: 12
	},
	{
		date: '2022-07-21T23:00:00.000Z',
		value: 81
	},
	{
		date: '2022-07-22T23:00:00.000Z',
		value: 20
	},
	{
		date: '2022-07-23T23:00:00.000Z',
		value: 95
	},
	{
		date: '2022-07-24T23:00:00.000Z',
		value: 66
	},
	{
		date: '2022-07-25T23:00:00.000Z',
		value: 52
	},
	{
		date: '2022-07-26T23:00:00.000Z',
		value: 15
	},
	{
		date: '2022-07-27T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-07-28T23:00:00.000Z',
		value: 60
	},
	{
		date: '2022-07-29T23:00:00.000Z',
		value: 91
	},
	{
		date: '2022-07-30T23:00:00.000Z',
		value: 40
	},
	{
		date: '2022-07-31T23:00:00.000Z',
		value: 39
	},
	{
		date: '2022-08-01T23:00:00.000Z',
		value: 78
	},
	{
		date: '2022-08-02T23:00:00.000Z',
		value: 26
	},
	{
		date: '2022-08-03T23:00:00.000Z',
		value: 21
	},
	{
		date: '2022-08-04T23:00:00.000Z',
		value: 36
	},
	{
		date: '2022-08-05T23:00:00.000Z',
		value: 74
	},
	{
		date: '2022-08-06T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-08-07T23:00:00.000Z',
		value: 80
	},
	{
		date: '2022-08-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-08-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-08-10T23:00:00.000Z',
		value: 69
	},
	{
		date: '2022-08-11T23:00:00.000Z',
		value: 81
	},
	{
		date: '2022-08-12T23:00:00.000Z',
		value: 40
	},
	{
		date: '2022-08-13T23:00:00.000Z',
		value: 87
	},
	{
		date: '2022-08-14T23:00:00.000Z',
		value: 63
	},
	{
		date: '2022-08-15T23:00:00.000Z',
		value: 56
	},
	{
		date: '2022-08-16T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-08-17T23:00:00.000Z',
		value: 68
	},
	{
		date: '2022-08-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-08-19T23:00:00.000Z',
		value: 87
	},
	{
		date: '2022-08-20T23:00:00.000Z',
		value: 56
	},
	{
		date: '2022-08-21T23:00:00.000Z',
		value: 75
	},
	{
		date: '2022-08-22T23:00:00.000Z',
		value: 82
	},
	{
		date: '2022-08-23T23:00:00.000Z',
		value: 15
	},
	{
		date: '2022-08-24T23:00:00.000Z',
		value: 86
	},
	{
		date: '2022-08-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-08-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-08-27T23:00:00.000Z',
		value: 53
	},
	{
		date: '2022-08-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-08-29T23:00:00.000Z',
		value: 95
	},
	{
		date: '2022-08-30T23:00:00.000Z',
		value: 51
	},
	{
		date: '2022-08-31T23:00:00.000Z',
		value: 77
	},
	{
		date: '2022-09-01T23:00:00.000Z',
		value: 60
	},
	{
		date: '2022-09-02T23:00:00.000Z',
		value: 99
	},
	{
		date: '2022-09-03T23:00:00.000Z',
		value: 72
	},
	{
		date: '2022-09-04T23:00:00.000Z',
		value: 21
	},
	{
		date: '2022-09-05T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-09-06T23:00:00.000Z',
		value: 20
	},
	{
		date: '2022-09-07T23:00:00.000Z',
		value: 45
	},
	{
		date: '2022-09-08T23:00:00.000Z',
		value: 27
	},
	{
		date: '2022-09-09T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-09-10T23:00:00.000Z',
		value: 79
	},
	{
		date: '2022-09-11T23:00:00.000Z',
		value: 67
	},
	{
		date: '2022-09-12T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-09-13T23:00:00.000Z',
		value: 12
	},
	{
		date: '2022-09-14T23:00:00.000Z',
		value: 55
	},
	{
		date: '2022-09-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-09-16T23:00:00.000Z',
		value: 63
	},
	{
		date: '2022-09-17T23:00:00.000Z',
		value: 83
	},
	{
		date: '2022-09-18T23:00:00.000Z',
		value: 99
	},
	{
		date: '2022-09-19T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-09-20T23:00:00.000Z',
		value: 90
	},
	{
		date: '2022-09-21T23:00:00.000Z',
		value: 91
	},
	{
		date: '2022-09-22T23:00:00.000Z',
		value: 96
	},
	{
		date: '2022-09-23T23:00:00.000Z',
		value: 63
	},
	{
		date: '2022-09-24T23:00:00.000Z',
		value: 86
	},
	{
		date: '2022-09-25T23:00:00.000Z',
		value: 56
	},
	{
		date: '2022-09-26T23:00:00.000Z',
		value: 75
	},
	{
		date: '2022-09-27T23:00:00.000Z',
		value: 70
	},
	{
		date: '2022-09-28T23:00:00.000Z',
		value: 32
	},
	{
		date: '2022-09-29T23:00:00.000Z',
		value: 41
	},
	{
		date: '2022-09-30T23:00:00.000Z',
		value: 62
	},
	{
		date: '2022-10-01T23:00:00.000Z',
		value: 32
	},
	{
		date: '2022-10-02T23:00:00.000Z',
		value: 99
	},
	{
		date: '2022-10-03T23:00:00.000Z',
		value: 11
	},
	{
		date: '2022-10-04T23:00:00.000Z',
		value: 88
	},
	{
		date: '2022-10-05T23:00:00.000Z',
		value: 48
	},
	{
		date: '2022-10-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-10-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-10-08T23:00:00.000Z',
		value: 29
	},
	{
		date: '2022-10-09T23:00:00.000Z',
		value: 31
	},
	{
		date: '2022-10-10T23:00:00.000Z',
		value: 31
	},
	{
		date: '2022-10-11T23:00:00.000Z',
		value: 39
	},
	{
		date: '2022-10-12T23:00:00.000Z',
		value: 13
	},
	{
		date: '2022-10-13T23:00:00.000Z',
		value: 85
	},
	{
		date: '2022-10-14T23:00:00.000Z',
		value: 13
	},
	{
		date: '2022-10-15T23:00:00.000Z',
		value: 84
	},
	{
		date: '2022-10-16T23:00:00.000Z',
		value: 68
	},
	{
		date: '2022-10-17T23:00:00.000Z',
		value: 46
	},
	{
		date: '2022-10-18T23:00:00.000Z',
		value: 24
	},
	{
		date: '2022-10-19T23:00:00.000Z',
		value: 38
	},
	{
		date: '2022-10-20T23:00:00.000Z',
		value: 52
	},
	{
		date: '2022-10-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-10-22T23:00:00.000Z',
		value: 65
	},
	{
		date: '2022-10-23T23:00:00.000Z',
		value: 20
	},
	{
		date: '2022-10-24T23:00:00.000Z',
		value: 46
	},
	{
		date: '2022-10-25T23:00:00.000Z',
		value: 45
	},
	{
		date: '2022-10-26T23:00:00.000Z',
		value: 24
	},
	{
		date: '2022-10-27T23:00:00.000Z',
		value: 80
	},
	{
		date: '2022-10-28T23:00:00.000Z',
		value: 81
	},
	{
		date: '2022-10-29T23:00:00.000Z',
		value: 16
	},
	{
		date: '2022-10-30T23:00:00.000Z',
		value: 28
	},
	{
		date: '2022-10-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-01T23:00:00.000Z',
		value: 11
	},
	{
		date: '2022-11-02T23:00:00.000Z',
		value: 98
	},
	{
		date: '2022-11-03T23:00:00.000Z',
		value: 39
	},
	{
		date: '2022-11-04T23:00:00.000Z',
		value: 62
	},
	{
		date: '2022-11-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-06T23:00:00.000Z',
		value: 19
	},
	{
		date: '2022-11-07T23:00:00.000Z',
		value: 98
	},
	{
		date: '2022-11-08T23:00:00.000Z',
		value: 85
	},
	{
		date: '2022-11-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-10T23:00:00.000Z',
		value: 30
	},
	{
		date: '2022-11-11T23:00:00.000Z',
		value: 11
	},
	{
		date: '2022-11-12T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-15T23:00:00.000Z',
		value: 61
	},
	{
		date: '2022-11-16T23:00:00.000Z',
		value: 63
	},
	{
		date: '2022-11-17T23:00:00.000Z',
		value: 88
	},
	{
		date: '2022-11-18T23:00:00.000Z',
		value: 12
	},
	{
		date: '2022-11-19T23:00:00.000Z',
		value: 29
	},
	{
		date: '2022-11-20T23:00:00.000Z',
		value: 68
	},
	{
		date: '2022-11-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-23T23:00:00.000Z',
		value: 21
	},
	{
		date: '2022-11-24T23:00:00.000Z',
		value: 77
	},
	{
		date: '2022-11-25T23:00:00.000Z',
		value: 10
	},
	{
		date: '2022-11-26T23:00:00.000Z',
		value: 36
	},
	{
		date: '2022-11-27T23:00:00.000Z',
		value: 23
	},
	{
		date: '2022-11-28T23:00:00.000Z',
		value: 33
	},
	{
		date: '2022-11-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-11-30T23:00:00.000Z',
		value: 59
	},
	{
		date: '2022-12-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-02T23:00:00.000Z',
		value: 84
	},
	{
		date: '2022-12-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-04T23:00:00.000Z',
		value: 63
	},
	{
		date: '2022-12-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-06T23:00:00.000Z',
		value: 32
	},
	{
		date: '2022-12-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-10T23:00:00.000Z',
		value: 46
	},
	{
		date: '2022-12-11T23:00:00.000Z',
		value: 96
	},
	{
		date: '2022-12-12T23:00:00.000Z',
		value: 31
	},
	{
		date: '2022-12-13T23:00:00.000Z',
		value: 44
	},
	{
		date: '2022-12-14T23:00:00.000Z',
		value: 41
	},
	{
		date: '2022-12-15T23:00:00.000Z',
		value: 33
	},
	{
		date: '2022-12-16T23:00:00.000Z',
		value: 96
	},
	{
		date: '2022-12-17T23:00:00.000Z',
		value: 95
	},
	{
		date: '2022-12-18T23:00:00.000Z',
		value: 92
	},
	{
		date: '2022-12-19T23:00:00.000Z',
		value: 20
	},
	{
		date: '2022-12-20T23:00:00.000Z',
		value: 31
	},
	{
		date: '2022-12-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2022-12-24T23:00:00.000Z',
		value: 40
	},
	{
		date: '2022-12-25T23:00:00.000Z',
		value: 10
	},
	{
		date: '2022-12-26T23:00:00.000Z',
		value: 54
	},
	{
		date: '2022-12-27T23:00:00.000Z',
		value: 75
	},
	{
		date: '2022-12-28T23:00:00.000Z',
		value: 38
	},
	{
		date: '2022-12-29T23:00:00.000Z',
		value: 40
	},
	{
		date: '2022-12-30T23:00:00.000Z',
		value: 66
	},
	{
		date: '2022-12-31T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-01-01T23:00:00.000Z',
		value: 64
	},
	{
		date: '2023-01-02T23:00:00.000Z',
		value: 65
	},
	{
		date: '2023-01-03T23:00:00.000Z',
		value: 69
	},
	{
		date: '2023-01-04T23:00:00.000Z',
		value: 19
	},
	{
		date: '2023-01-05T23:00:00.000Z',
		value: 15
	},
	{
		date: '2023-01-06T23:00:00.000Z',
		value: 89
	},
	{
		date: '2023-01-07T23:00:00.000Z',
		value: 54
	},
	{
		date: '2023-01-08T23:00:00.000Z',
		value: 97
	},
	{
		date: '2023-01-09T23:00:00.000Z',
		value: 81
	},
	{
		date: '2023-01-10T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-01-11T23:00:00.000Z',
		value: 77
	},
	{
		date: '2023-01-12T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-01-13T23:00:00.000Z',
		value: 100
	},
	{
		date: '2023-01-14T23:00:00.000Z',
		value: 28
	},
	{
		date: '2023-01-15T23:00:00.000Z',
		value: 64
	},
	{
		date: '2023-01-16T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-01-17T23:00:00.000Z',
		value: 95
	},
	{
		date: '2023-01-18T23:00:00.000Z',
		value: 42
	},
	{
		date: '2023-01-19T23:00:00.000Z',
		value: 28
	},
	{
		date: '2023-01-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-01-21T23:00:00.000Z',
		value: 28
	},
	{
		date: '2023-01-22T23:00:00.000Z',
		value: 68
	},
	{
		date: '2023-01-23T23:00:00.000Z',
		value: 64
	},
	{
		date: '2023-01-24T23:00:00.000Z',
		value: 43
	},
	{
		date: '2023-01-25T23:00:00.000Z',
		value: 44
	},
	{
		date: '2023-01-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-01-27T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-01-28T23:00:00.000Z',
		value: 86
	},
	{
		date: '2023-01-29T23:00:00.000Z',
		value: 55
	},
	{
		date: '2023-01-30T23:00:00.000Z',
		value: 38
	},
	{
		date: '2023-01-31T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-02-01T23:00:00.000Z',
		value: 83
	},
	{
		date: '2023-02-02T23:00:00.000Z',
		value: 84
	},
	{
		date: '2023-02-03T23:00:00.000Z',
		value: 34
	},
	{
		date: '2023-02-04T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-02-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-02-06T23:00:00.000Z',
		value: 65
	},
	{
		date: '2023-02-07T23:00:00.000Z',
		value: 37
	},
	{
		date: '2023-02-08T23:00:00.000Z',
		value: 93
	},
	{
		date: '2023-02-09T23:00:00.000Z',
		value: 55
	},
	{
		date: '2023-02-10T23:00:00.000Z',
		value: 70
	},
	{
		date: '2023-02-11T23:00:00.000Z',
		value: 20
	},
	{
		date: '2023-02-12T23:00:00.000Z',
		value: 93
	},
	{
		date: '2023-02-13T23:00:00.000Z',
		value: 38
	},
	{
		date: '2023-02-14T23:00:00.000Z',
		value: 10
	},
	{
		date: '2023-02-15T23:00:00.000Z',
		value: 82
	},
	{
		date: '2023-02-16T23:00:00.000Z',
		value: 12
	},
	{
		date: '2023-02-17T23:00:00.000Z',
		value: 95
	},
	{
		date: '2023-02-18T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-02-19T23:00:00.000Z',
		value: 37
	},
	{
		date: '2023-02-20T23:00:00.000Z',
		value: 51
	},
	{
		date: '2023-02-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-02-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-02-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-02-24T23:00:00.000Z',
		value: 19
	},
	{
		date: '2023-02-25T23:00:00.000Z',
		value: 95
	},
	{
		date: '2023-02-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-02-27T23:00:00.000Z',
		value: 76
	},
	{
		date: '2023-02-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-02T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-03T23:00:00.000Z',
		value: 43
	},
	{
		date: '2023-03-04T23:00:00.000Z',
		value: 50
	},
	{
		date: '2023-03-05T23:00:00.000Z',
		value: 55
	},
	{
		date: '2023-03-06T23:00:00.000Z',
		value: 56
	},
	{
		date: '2023-03-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-08T23:00:00.000Z',
		value: 81
	},
	{
		date: '2023-03-09T23:00:00.000Z',
		value: 46
	},
	{
		date: '2023-03-10T23:00:00.000Z',
		value: 57
	},
	{
		date: '2023-03-11T23:00:00.000Z',
		value: 96
	},
	{
		date: '2023-03-12T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-13T23:00:00.000Z',
		value: 22
	},
	{
		date: '2023-03-14T23:00:00.000Z',
		value: 83
	},
	{
		date: '2023-03-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-16T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-17T23:00:00.000Z',
		value: 14
	},
	{
		date: '2023-03-18T23:00:00.000Z',
		value: 73
	},
	{
		date: '2023-03-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-20T23:00:00.000Z',
		value: 60
	},
	{
		date: '2023-03-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-22T23:00:00.000Z',
		value: 41
	},
	{
		date: '2023-03-23T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-03-24T23:00:00.000Z',
		value: 20
	},
	{
		date: '2023-03-25T23:00:00.000Z',
		value: 42
	},
	{
		date: '2023-03-26T23:00:00.000Z',
		value: 36
	},
	{
		date: '2023-03-27T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-28T23:00:00.000Z',
		value: 88
	},
	{
		date: '2023-03-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-03-30T23:00:00.000Z',
		value: 42
	},
	{
		date: '2023-03-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-04-01T23:00:00.000Z',
		value: 50
	},
	{
		date: '2023-04-02T23:00:00.000Z',
		value: 82
	},
	{
		date: '2023-04-03T23:00:00.000Z',
		value: 21
	},
	{
		date: '2023-04-04T23:00:00.000Z',
		value: 69
	},
	{
		date: '2023-04-05T23:00:00.000Z',
		value: 32
	},
	{
		date: '2023-04-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-04-07T23:00:00.000Z',
		value: 11
	},
	{
		date: '2023-04-08T23:00:00.000Z',
		value: 62
	},
	{
		date: '2023-04-09T23:00:00.000Z',
		value: 27
	},
	{
		date: '2023-04-10T23:00:00.000Z',
		value: 53
	},
	{
		date: '2023-04-11T23:00:00.000Z',
		value: 90
	},
	{
		date: '2023-04-12T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-04-13T23:00:00.000Z',
		value: 30
	},
	{
		date: '2023-04-14T23:00:00.000Z',
		value: 96
	},
	{
		date: '2023-04-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-04-16T23:00:00.000Z',
		value: 55
	},
	{
		date: '2023-04-17T23:00:00.000Z',
		value: 14
	},
	{
		date: '2023-04-18T23:00:00.000Z',
		value: 62
	},
	{
		date: '2023-04-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-04-20T23:00:00.000Z',
		value: 39
	},
	{
		date: '2023-04-21T23:00:00.000Z',
		value: 14
	},
	{
		date: '2023-04-22T23:00:00.000Z',
		value: 76
	},
	{
		date: '2023-04-23T23:00:00.000Z',
		value: 29
	},
	{
		date: '2023-04-24T23:00:00.000Z',
		value: 80
	},
	{
		date: '2023-04-25T23:00:00.000Z',
		value: 94
	},
	{
		date: '2023-04-26T23:00:00.000Z',
		value: 59
	},
	{
		date: '2023-04-27T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-04-28T23:00:00.000Z',
		value: 66
	},
	{
		date: '2023-04-29T23:00:00.000Z',
		value: 77
	},
	{
		date: '2023-04-30T23:00:00.000Z',
		value: 100
	},
	{
		date: '2023-05-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-02T23:00:00.000Z',
		value: 62
	},
	{
		date: '2023-05-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-04T23:00:00.000Z',
		value: 100
	},
	{
		date: '2023-05-05T23:00:00.000Z',
		value: 23
	},
	{
		date: '2023-05-06T23:00:00.000Z',
		value: 45
	},
	{
		date: '2023-05-07T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-08T23:00:00.000Z',
		value: 51
	},
	{
		date: '2023-05-09T23:00:00.000Z',
		value: 96
	},
	{
		date: '2023-05-10T23:00:00.000Z',
		value: 79
	},
	{
		date: '2023-05-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-12T23:00:00.000Z',
		value: 21
	},
	{
		date: '2023-05-13T23:00:00.000Z',
		value: 88
	},
	{
		date: '2023-05-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-15T23:00:00.000Z',
		value: 10
	},
	{
		date: '2023-05-16T23:00:00.000Z',
		value: 76
	},
	{
		date: '2023-05-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-18T23:00:00.000Z',
		value: 25
	},
	{
		date: '2023-05-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-20T23:00:00.000Z',
		value: 23
	},
	{
		date: '2023-05-21T23:00:00.000Z',
		value: 42
	},
	{
		date: '2023-05-22T23:00:00.000Z',
		value: 90
	},
	{
		date: '2023-05-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-05-24T23:00:00.000Z',
		value: 99
	},
	{
		date: '2023-05-25T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-05-26T23:00:00.000Z',
		value: 81
	},
	{
		date: '2023-05-27T23:00:00.000Z',
		value: 17
	},
	{
		date: '2023-05-28T23:00:00.000Z',
		value: 79
	},
	{
		date: '2023-05-29T23:00:00.000Z',
		value: 15
	},
	{
		date: '2023-05-30T23:00:00.000Z',
		value: 61
	},
	{
		date: '2023-05-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-06-01T23:00:00.000Z',
		value: 68
	},
	{
		date: '2023-06-02T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-06-03T23:00:00.000Z',
		value: 15
	},
	{
		date: '2023-06-04T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-06-05T23:00:00.000Z',
		value: 11
	},
	{
		date: '2023-06-06T23:00:00.000Z',
		value: 79
	},
	{
		date: '2023-06-07T23:00:00.000Z',
		value: 16
	},
	{
		date: '2023-06-08T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-06-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-06-10T23:00:00.000Z',
		value: 99
	},
	{
		date: '2023-06-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-06-12T23:00:00.000Z',
		value: 50
	},
	{
		date: '2023-06-13T23:00:00.000Z',
		value: 51
	},
	{
		date: '2023-06-14T23:00:00.000Z',
		value: 93
	},
	{
		date: '2023-06-15T23:00:00.000Z',
		value: 88
	},
	{
		date: '2023-06-16T23:00:00.000Z',
		value: 28
	},
	{
		date: '2023-06-17T23:00:00.000Z',
		value: 36
	},
	{
		date: '2023-06-18T23:00:00.000Z',
		value: 40
	},
	{
		date: '2023-06-19T23:00:00.000Z',
		value: 23
	},
	{
		date: '2023-06-20T23:00:00.000Z',
		value: 71
	},
	{
		date: '2023-06-21T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-06-22T23:00:00.000Z',
		value: 70
	},
	{
		date: '2023-06-23T23:00:00.000Z',
		value: 57
	},
	{
		date: '2023-06-24T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-06-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-06-26T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-06-27T23:00:00.000Z',
		value: 68
	},
	{
		date: '2023-06-28T23:00:00.000Z',
		value: 13
	},
	{
		date: '2023-06-29T23:00:00.000Z',
		value: 80
	},
	{
		date: '2023-06-30T23:00:00.000Z',
		value: 19
	},
	{
		date: '2023-07-01T23:00:00.000Z',
		value: 82
	},
	{
		date: '2023-07-02T23:00:00.000Z',
		value: 61
	},
	{
		date: '2023-07-03T23:00:00.000Z',
		value: 52
	},
	{
		date: '2023-07-04T23:00:00.000Z',
		value: 56
	},
	{
		date: '2023-07-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-07-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-07-07T23:00:00.000Z',
		value: 14
	},
	{
		date: '2023-07-08T23:00:00.000Z',
		value: 57
	},
	{
		date: '2023-07-09T23:00:00.000Z',
		value: 82
	},
	{
		date: '2023-07-10T23:00:00.000Z',
		value: 22
	},
	{
		date: '2023-07-11T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-07-12T23:00:00.000Z',
		value: 75
	},
	{
		date: '2023-07-13T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-07-14T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-07-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-07-16T23:00:00.000Z',
		value: 26
	},
	{
		date: '2023-07-17T23:00:00.000Z',
		value: 52
	},
	{
		date: '2023-07-18T23:00:00.000Z',
		value: 88
	},
	{
		date: '2023-07-19T23:00:00.000Z',
		value: 63
	},
	{
		date: '2023-07-20T23:00:00.000Z',
		value: 36
	},
	{
		date: '2023-07-21T23:00:00.000Z',
		value: 50
	},
	{
		date: '2023-07-22T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-07-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-07-24T23:00:00.000Z',
		value: 83
	},
	{
		date: '2023-07-25T23:00:00.000Z',
		value: 41
	},
	{
		date: '2023-07-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-07-27T23:00:00.000Z',
		value: 58
	},
	{
		date: '2023-07-28T23:00:00.000Z',
		value: 23
	},
	{
		date: '2023-07-29T23:00:00.000Z',
		value: 15
	},
	{
		date: '2023-07-30T23:00:00.000Z',
		value: 55
	},
	{
		date: '2023-07-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-08-01T23:00:00.000Z',
		value: 93
	},
	{
		date: '2023-08-02T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-08-03T23:00:00.000Z',
		value: 67
	},
	{
		date: '2023-08-04T23:00:00.000Z',
		value: 10
	},
	{
		date: '2023-08-05T23:00:00.000Z',
		value: 23
	},
	{
		date: '2023-08-06T23:00:00.000Z',
		value: 19
	},
	{
		date: '2023-08-07T23:00:00.000Z',
		value: 86
	},
	{
		date: '2023-08-08T23:00:00.000Z',
		value: 64
	},
	{
		date: '2023-08-09T23:00:00.000Z',
		value: 34
	},
	{
		date: '2023-08-10T23:00:00.000Z',
		value: 81
	},
	{
		date: '2023-08-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-08-12T23:00:00.000Z',
		value: 89
	},
	{
		date: '2023-08-13T23:00:00.000Z',
		value: 29
	},
	{
		date: '2023-08-14T23:00:00.000Z',
		value: 11
	},
	{
		date: '2023-08-15T23:00:00.000Z',
		value: 58
	},
	{
		date: '2023-08-16T23:00:00.000Z',
		value: 70
	},
	{
		date: '2023-08-17T23:00:00.000Z',
		value: 83
	},
	{
		date: '2023-08-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-08-19T23:00:00.000Z',
		value: 79
	},
	{
		date: '2023-08-20T23:00:00.000Z',
		value: 25
	},
	{
		date: '2023-08-21T23:00:00.000Z',
		value: 67
	},
	{
		date: '2023-08-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-08-23T23:00:00.000Z',
		value: 45
	},
	{
		date: '2023-08-24T23:00:00.000Z',
		value: 47
	},
	{
		date: '2023-08-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-08-26T23:00:00.000Z',
		value: 13
	},
	{
		date: '2023-08-27T23:00:00.000Z',
		value: 76
	},
	{
		date: '2023-08-28T23:00:00.000Z',
		value: 25
	},
	{
		date: '2023-08-29T23:00:00.000Z',
		value: 12
	},
	{
		date: '2023-08-30T23:00:00.000Z',
		value: 47
	},
	{
		date: '2023-08-31T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-09-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-09-02T23:00:00.000Z',
		value: 64
	},
	{
		date: '2023-09-03T23:00:00.000Z',
		value: 66
	},
	{
		date: '2023-09-04T23:00:00.000Z',
		value: 99
	},
	{
		date: '2023-09-05T23:00:00.000Z',
		value: 47
	},
	{
		date: '2023-09-06T23:00:00.000Z',
		value: 24
	},
	{
		date: '2023-09-07T23:00:00.000Z',
		value: 60
	},
	{
		date: '2023-09-08T23:00:00.000Z',
		value: 70
	},
	{
		date: '2023-09-09T23:00:00.000Z',
		value: 29
	},
	{
		date: '2023-09-10T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-09-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-09-12T23:00:00.000Z',
		value: 79
	},
	{
		date: '2023-09-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-09-14T23:00:00.000Z',
		value: 76
	},
	{
		date: '2023-09-15T23:00:00.000Z',
		value: 61
	},
	{
		date: '2023-09-16T23:00:00.000Z',
		value: 54
	},
	{
		date: '2023-09-17T23:00:00.000Z',
		value: 75
	},
	{
		date: '2023-09-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-09-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-09-20T23:00:00.000Z',
		value: 17
	},
	{
		date: '2023-09-21T23:00:00.000Z',
		value: 77
	},
	{
		date: '2023-09-22T23:00:00.000Z',
		value: 27
	},
	{
		date: '2023-09-23T23:00:00.000Z',
		value: 69
	},
	{
		date: '2023-09-24T23:00:00.000Z',
		value: 73
	},
	{
		date: '2023-09-25T23:00:00.000Z',
		value: 46
	},
	{
		date: '2023-09-26T23:00:00.000Z',
		value: 15
	},
	{
		date: '2023-09-27T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-09-28T23:00:00.000Z',
		value: 18
	},
	{
		date: '2023-09-29T23:00:00.000Z',
		value: 25
	},
	{
		date: '2023-09-30T23:00:00.000Z',
		value: 16
	},
	{
		date: '2023-10-01T23:00:00.000Z',
		value: 94
	},
	{
		date: '2023-10-02T23:00:00.000Z',
		value: 52
	},
	{
		date: '2023-10-03T23:00:00.000Z',
		value: 27
	},
	{
		date: '2023-10-04T23:00:00.000Z',
		value: 27
	},
	{
		date: '2023-10-05T23:00:00.000Z',
		value: 36
	},
	{
		date: '2023-10-06T23:00:00.000Z',
		value: 96
	},
	{
		date: '2023-10-07T23:00:00.000Z',
		value: 84
	},
	{
		date: '2023-10-08T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-10-09T23:00:00.000Z',
		value: 50
	},
	{
		date: '2023-10-10T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-10-11T23:00:00.000Z',
		value: 65
	},
	{
		date: '2023-10-12T23:00:00.000Z',
		value: 52
	},
	{
		date: '2023-10-13T23:00:00.000Z',
		value: 73
	},
	{
		date: '2023-10-14T23:00:00.000Z',
		value: 30
	},
	{
		date: '2023-10-15T23:00:00.000Z',
		value: 28
	},
	{
		date: '2023-10-16T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-10-17T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-10-18T23:00:00.000Z',
		value: 16
	},
	{
		date: '2023-10-19T23:00:00.000Z',
		value: 42
	},
	{
		date: '2023-10-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-10-21T23:00:00.000Z',
		value: 32
	},
	{
		date: '2023-10-22T23:00:00.000Z',
		value: 21
	},
	{
		date: '2023-10-23T23:00:00.000Z',
		value: 82
	},
	{
		date: '2023-10-24T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-10-25T23:00:00.000Z',
		value: 83
	},
	{
		date: '2023-10-26T23:00:00.000Z',
		value: 50
	},
	{
		date: '2023-10-27T23:00:00.000Z',
		value: 84
	},
	{
		date: '2023-10-28T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-10-29T23:00:00.000Z',
		value: 97
	},
	{
		date: '2023-10-30T23:00:00.000Z',
		value: 44
	},
	{
		date: '2023-10-31T23:00:00.000Z',
		value: 12
	},
	{
		date: '2023-11-01T23:00:00.000Z',
		value: 51
	},
	{
		date: '2023-11-02T23:00:00.000Z',
		value: 17
	},
	{
		date: '2023-11-03T23:00:00.000Z',
		value: 40
	},
	{
		date: '2023-11-04T23:00:00.000Z',
		value: 96
	},
	{
		date: '2023-11-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-11-06T23:00:00.000Z',
		value: 39
	},
	{
		date: '2023-11-07T23:00:00.000Z',
		value: 85
	},
	{
		date: '2023-11-08T23:00:00.000Z',
		value: 69
	},
	{
		date: '2023-11-09T23:00:00.000Z',
		value: 58
	},
	{
		date: '2023-11-10T23:00:00.000Z',
		value: 60
	},
	{
		date: '2023-11-11T23:00:00.000Z',
		value: 80
	},
	{
		date: '2023-11-12T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-11-13T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-11-14T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-11-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-11-16T23:00:00.000Z',
		value: 72
	},
	{
		date: '2023-11-17T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-11-18T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-11-19T23:00:00.000Z',
		value: 55
	},
	{
		date: '2023-11-20T23:00:00.000Z',
		value: 95
	},
	{
		date: '2023-11-21T23:00:00.000Z',
		value: 28
	},
	{
		date: '2023-11-22T23:00:00.000Z',
		value: 66
	},
	{
		date: '2023-11-23T23:00:00.000Z',
		value: 33
	},
	{
		date: '2023-11-24T23:00:00.000Z',
		value: 16
	},
	{
		date: '2023-11-25T23:00:00.000Z',
		value: 60
	},
	{
		date: '2023-11-26T23:00:00.000Z',
		value: 27
	},
	{
		date: '2023-11-27T23:00:00.000Z',
		value: 22
	},
	{
		date: '2023-11-28T23:00:00.000Z',
		value: 48
	},
	{
		date: '2023-11-29T23:00:00.000Z',
		value: 53
	},
	{
		date: '2023-11-30T23:00:00.000Z',
		value: 94
	},
	{
		date: '2023-12-01T23:00:00.000Z',
		value: 36
	},
	{
		date: '2023-12-02T23:00:00.000Z',
		value: 74
	},
	{
		date: '2023-12-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-12-04T23:00:00.000Z',
		value: 19
	},
	{
		date: '2023-12-05T23:00:00.000Z',
		value: 63
	},
	{
		date: '2023-12-06T23:00:00.000Z',
		value: 71
	},
	{
		date: '2023-12-07T23:00:00.000Z',
		value: 83
	},
	{
		date: '2023-12-08T23:00:00.000Z',
		value: 44
	},
	{
		date: '2023-12-09T23:00:00.000Z',
		value: 54
	},
	{
		date: '2023-12-10T23:00:00.000Z',
		value: 42
	},
	{
		date: '2023-12-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-12-12T23:00:00.000Z',
		value: 54
	},
	{
		date: '2023-12-13T23:00:00.000Z',
		value: 35
	},
	{
		date: '2023-12-14T23:00:00.000Z',
		value: 51
	},
	{
		date: '2023-12-15T23:00:00.000Z',
		value: 75
	},
	{
		date: '2023-12-16T23:00:00.000Z',
		value: 49
	},
	{
		date: '2023-12-17T23:00:00.000Z',
		value: 23
	},
	{
		date: '2023-12-18T23:00:00.000Z',
		value: 68
	},
	{
		date: '2023-12-19T23:00:00.000Z',
		value: 44
	},
	{
		date: '2023-12-20T23:00:00.000Z',
		value: 88
	},
	{
		date: '2023-12-21T23:00:00.000Z',
		value: 28
	},
	{
		date: '2023-12-22T23:00:00.000Z',
		value: 80
	},
	{
		date: '2023-12-23T23:00:00.000Z',
		value: 56
	},
	{
		date: '2023-12-24T23:00:00.000Z',
		value: 63
	},
	{
		date: '2023-12-25T23:00:00.000Z',
		value: 84
	},
	{
		date: '2023-12-26T23:00:00.000Z',
		value: 30
	},
	{
		date: '2023-12-27T23:00:00.000Z',
		value: 92
	},
	{
		date: '2023-12-28T23:00:00.000Z',
		value: 71
	},
	{
		date: '2023-12-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2023-12-30T23:00:00.000Z',
		value: 69
	},
	{
		date: '2023-12-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-02T23:00:00.000Z',
		value: 47
	},
	{
		date: '2024-01-03T23:00:00.000Z',
		value: 66
	},
	{
		date: '2024-01-04T23:00:00.000Z',
		value: 26
	},
	{
		date: '2024-01-05T23:00:00.000Z',
		value: 40
	},
	{
		date: '2024-01-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-07T23:00:00.000Z',
		value: 26
	},
	{
		date: '2024-01-08T23:00:00.000Z',
		value: 52
	},
	{
		date: '2024-01-09T23:00:00.000Z',
		value: 57
	},
	{
		date: '2024-01-10T23:00:00.000Z',
		value: 20
	},
	{
		date: '2024-01-11T23:00:00.000Z',
		value: 69
	},
	{
		date: '2024-01-12T23:00:00.000Z',
		value: 62
	},
	{
		date: '2024-01-13T23:00:00.000Z',
		value: 49
	},
	{
		date: '2024-01-14T23:00:00.000Z',
		value: 57
	},
	{
		date: '2024-01-15T23:00:00.000Z',
		value: 23
	},
	{
		date: '2024-01-16T23:00:00.000Z',
		value: 22
	},
	{
		date: '2024-01-17T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-19T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-20T23:00:00.000Z',
		value: 34
	},
	{
		date: '2024-01-21T23:00:00.000Z',
		value: 10
	},
	{
		date: '2024-01-22T23:00:00.000Z',
		value: 60
	},
	{
		date: '2024-01-23T23:00:00.000Z',
		value: 67
	},
	{
		date: '2024-01-24T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-26T23:00:00.000Z',
		value: 56
	},
	{
		date: '2024-01-27T23:00:00.000Z',
		value: 21
	},
	{
		date: '2024-01-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-01-29T23:00:00.000Z',
		value: 90
	},
	{
		date: '2024-01-30T23:00:00.000Z',
		value: 14
	},
	{
		date: '2024-01-31T23:00:00.000Z',
		value: 100
	},
	{
		date: '2024-02-01T23:00:00.000Z',
		value: 73
	},
	{
		date: '2024-02-02T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-02-03T23:00:00.000Z',
		value: 57
	},
	{
		date: '2024-02-04T23:00:00.000Z',
		value: 49
	},
	{
		date: '2024-02-05T23:00:00.000Z',
		value: 70
	},
	{
		date: '2024-02-06T23:00:00.000Z',
		value: 45
	},
	{
		date: '2024-02-07T23:00:00.000Z',
		value: 63
	},
	{
		date: '2024-02-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-02-09T23:00:00.000Z',
		value: 72
	},
	{
		date: '2024-02-10T23:00:00.000Z',
		value: 13
	},
	{
		date: '2024-02-11T23:00:00.000Z',
		value: 28
	},
	{
		date: '2024-02-12T23:00:00.000Z',
		value: 32
	},
	{
		date: '2024-02-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-02-14T23:00:00.000Z',
		value: 64
	},
	{
		date: '2024-02-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-02-16T23:00:00.000Z',
		value: 19
	},
	{
		date: '2024-02-17T23:00:00.000Z',
		value: 24
	},
	{
		date: '2024-02-18T23:00:00.000Z',
		value: 90
	},
	{
		date: '2024-02-19T23:00:00.000Z',
		value: 32
	},
	{
		date: '2024-02-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-02-21T23:00:00.000Z',
		value: 82
	},
	{
		date: '2024-02-22T23:00:00.000Z',
		value: 54
	},
	{
		date: '2024-02-23T23:00:00.000Z',
		value: 56
	},
	{
		date: '2024-02-24T23:00:00.000Z',
		value: 32
	},
	{
		date: '2024-02-25T23:00:00.000Z',
		value: 29
	},
	{
		date: '2024-02-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-02-27T23:00:00.000Z',
		value: 19
	},
	{
		date: '2024-02-28T23:00:00.000Z',
		value: 87
	},
	{
		date: '2024-02-29T23:00:00.000Z',
		value: 48
	},
	{
		date: '2024-03-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-03-02T23:00:00.000Z',
		value: 50
	},
	{
		date: '2024-03-03T23:00:00.000Z',
		value: 79
	},
	{
		date: '2024-03-04T23:00:00.000Z',
		value: 37
	},
	{
		date: '2024-03-05T23:00:00.000Z',
		value: 70
	},
	{
		date: '2024-03-06T23:00:00.000Z',
		value: 14
	},
	{
		date: '2024-03-07T23:00:00.000Z',
		value: 92
	},
	{
		date: '2024-03-08T23:00:00.000Z',
		value: 24
	},
	{
		date: '2024-03-09T23:00:00.000Z',
		value: 20
	},
	{
		date: '2024-03-10T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-03-11T23:00:00.000Z',
		value: 29
	},
	{
		date: '2024-03-12T23:00:00.000Z',
		value: 99
	},
	{
		date: '2024-03-13T23:00:00.000Z',
		value: 69
	},
	{
		date: '2024-03-14T23:00:00.000Z',
		value: 76
	},
	{
		date: '2024-03-15T23:00:00.000Z',
		value: 41
	},
	{
		date: '2024-03-16T23:00:00.000Z',
		value: 34
	},
	{
		date: '2024-03-17T23:00:00.000Z',
		value: 31
	},
	{
		date: '2024-03-18T23:00:00.000Z',
		value: 77
	},
	{
		date: '2024-03-19T23:00:00.000Z',
		value: 91
	},
	{
		date: '2024-03-20T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-03-21T23:00:00.000Z',
		value: 74
	},
	{
		date: '2024-03-22T23:00:00.000Z',
		value: 10
	},
	{
		date: '2024-03-23T23:00:00.000Z',
		value: 80
	},
	{
		date: '2024-03-24T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-03-25T23:00:00.000Z',
		value: 28
	},
	{
		date: '2024-03-26T23:00:00.000Z',
		value: 47
	},
	{
		date: '2024-03-27T23:00:00.000Z',
		value: 36
	},
	{
		date: '2024-03-28T23:00:00.000Z',
		value: 29
	},
	{
		date: '2024-03-29T23:00:00.000Z',
		value: 81
	},
	{
		date: '2024-03-30T23:00:00.000Z',
		value: 73
	},
	{
		date: '2024-03-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-02T23:00:00.000Z',
		value: 40
	},
	{
		date: '2024-04-03T23:00:00.000Z',
		value: 68
	},
	{
		date: '2024-04-04T23:00:00.000Z',
		value: 38
	},
	{
		date: '2024-04-05T23:00:00.000Z',
		value: 67
	},
	{
		date: '2024-04-06T23:00:00.000Z',
		value: 94
	},
	{
		date: '2024-04-07T23:00:00.000Z',
		value: 91
	},
	{
		date: '2024-04-08T23:00:00.000Z',
		value: 30
	},
	{
		date: '2024-04-09T23:00:00.000Z',
		value: 36
	},
	{
		date: '2024-04-10T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-12T23:00:00.000Z',
		value: 81
	},
	{
		date: '2024-04-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-14T23:00:00.000Z',
		value: 86
	},
	{
		date: '2024-04-15T23:00:00.000Z',
		value: 54
	},
	{
		date: '2024-04-16T23:00:00.000Z',
		value: 30
	},
	{
		date: '2024-04-17T23:00:00.000Z',
		value: 96
	},
	{
		date: '2024-04-18T23:00:00.000Z',
		value: 53
	},
	{
		date: '2024-04-19T23:00:00.000Z',
		value: 19
	},
	{
		date: '2024-04-20T23:00:00.000Z',
		value: 39
	},
	{
		date: '2024-04-21T23:00:00.000Z',
		value: 21
	},
	{
		date: '2024-04-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-24T23:00:00.000Z',
		value: 60
	},
	{
		date: '2024-04-25T23:00:00.000Z',
		value: 85
	},
	{
		date: '2024-04-26T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-27T23:00:00.000Z',
		value: 15
	},
	{
		date: '2024-04-28T23:00:00.000Z',
		value: 19
	},
	{
		date: '2024-04-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-04-30T23:00:00.000Z',
		value: 10
	},
	{
		date: '2024-05-01T23:00:00.000Z',
		value: 27
	},
	{
		date: '2024-05-02T23:00:00.000Z',
		value: 100
	},
	{
		date: '2024-05-03T23:00:00.000Z',
		value: 94
	},
	{
		date: '2024-05-04T23:00:00.000Z',
		value: 83
	},
	{
		date: '2024-05-05T23:00:00.000Z',
		value: 55
	},
	{
		date: '2024-05-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-07T23:00:00.000Z',
		value: 75
	},
	{
		date: '2024-05-08T23:00:00.000Z',
		value: 98
	},
	{
		date: '2024-05-09T23:00:00.000Z',
		value: 65
	},
	{
		date: '2024-05-10T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-12T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-13T23:00:00.000Z',
		value: 37
	},
	{
		date: '2024-05-14T23:00:00.000Z',
		value: 46
	},
	{
		date: '2024-05-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-16T23:00:00.000Z',
		value: 50
	},
	{
		date: '2024-05-17T23:00:00.000Z',
		value: 40
	},
	{
		date: '2024-05-18T23:00:00.000Z',
		value: 50
	},
	{
		date: '2024-05-19T23:00:00.000Z',
		value: 96
	},
	{
		date: '2024-05-20T23:00:00.000Z',
		value: 45
	},
	{
		date: '2024-05-21T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-22T23:00:00.000Z',
		value: 48
	},
	{
		date: '2024-05-23T23:00:00.000Z',
		value: 89
	},
	{
		date: '2024-05-24T23:00:00.000Z',
		value: 45
	},
	{
		date: '2024-05-25T23:00:00.000Z',
		value: 71
	},
	{
		date: '2024-05-26T23:00:00.000Z',
		value: 15
	},
	{
		date: '2024-05-27T23:00:00.000Z',
		value: 34
	},
	{
		date: '2024-05-28T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-05-30T23:00:00.000Z',
		value: 100
	},
	{
		date: '2024-05-31T23:00:00.000Z',
		value: 53
	},
	{
		date: '2024-06-01T23:00:00.000Z',
		value: 31
	},
	{
		date: '2024-06-02T23:00:00.000Z',
		value: 46
	},
	{
		date: '2024-06-03T23:00:00.000Z',
		value: 93
	},
	{
		date: '2024-06-04T23:00:00.000Z',
		value: 50
	},
	{
		date: '2024-06-05T23:00:00.000Z',
		value: 93
	},
	{
		date: '2024-06-06T23:00:00.000Z',
		value: 83
	},
	{
		date: '2024-06-07T23:00:00.000Z',
		value: 85
	},
	{
		date: '2024-06-08T23:00:00.000Z',
		value: 21
	},
	{
		date: '2024-06-09T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-06-10T23:00:00.000Z',
		value: 50
	},
	{
		date: '2024-06-11T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-06-12T23:00:00.000Z',
		value: 55
	},
	{
		date: '2024-06-13T23:00:00.000Z',
		value: 100
	},
	{
		date: '2024-06-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-06-15T23:00:00.000Z',
		value: 42
	},
	{
		date: '2024-06-16T23:00:00.000Z',
		value: 22
	},
	{
		date: '2024-06-17T23:00:00.000Z',
		value: 48
	},
	{
		date: '2024-06-18T23:00:00.000Z',
		value: 89
	},
	{
		date: '2024-06-19T23:00:00.000Z',
		value: 85
	},
	{
		date: '2024-06-20T23:00:00.000Z',
		value: 98
	},
	{
		date: '2024-06-21T23:00:00.000Z',
		value: 11
	},
	{
		date: '2024-06-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-06-23T23:00:00.000Z',
		value: 55
	},
	{
		date: '2024-06-24T23:00:00.000Z',
		value: 78
	},
	{
		date: '2024-06-25T23:00:00.000Z',
		value: 49
	},
	{
		date: '2024-06-26T23:00:00.000Z',
		value: 13
	},
	{
		date: '2024-06-27T23:00:00.000Z',
		value: 78
	},
	{
		date: '2024-06-28T23:00:00.000Z',
		value: 35
	},
	{
		date: '2024-06-29T23:00:00.000Z',
		value: 57
	},
	{
		date: '2024-06-30T23:00:00.000Z',
		value: 97
	},
	{
		date: '2024-07-01T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-02T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-03T23:00:00.000Z',
		value: 82
	},
	{
		date: '2024-07-04T23:00:00.000Z',
		value: 40
	},
	{
		date: '2024-07-05T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-06T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-07T23:00:00.000Z',
		value: 36
	},
	{
		date: '2024-07-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-09T23:00:00.000Z',
		value: 23
	},
	{
		date: '2024-07-10T23:00:00.000Z',
		value: 45
	},
	{
		date: '2024-07-11T23:00:00.000Z',
		value: 21
	},
	{
		date: '2024-07-12T23:00:00.000Z',
		value: 28
	},
	{
		date: '2024-07-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-14T23:00:00.000Z',
		value: 82
	},
	{
		date: '2024-07-15T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-16T23:00:00.000Z',
		value: 24
	},
	{
		date: '2024-07-17T23:00:00.000Z',
		value: 12
	},
	{
		date: '2024-07-18T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-19T23:00:00.000Z',
		value: 30
	},
	{
		date: '2024-07-20T23:00:00.000Z',
		value: 35
	},
	{
		date: '2024-07-21T23:00:00.000Z',
		value: 40
	},
	{
		date: '2024-07-22T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-23T23:00:00.000Z',
		value: 16
	},
	{
		date: '2024-07-24T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-07-25T23:00:00.000Z',
		value: 86
	},
	{
		date: '2024-07-26T23:00:00.000Z',
		value: 96
	},
	{
		date: '2024-07-27T23:00:00.000Z',
		value: 59
	},
	{
		date: '2024-07-28T23:00:00.000Z',
		value: 85
	},
	{
		date: '2024-07-29T23:00:00.000Z',
		value: 33
	},
	{
		date: '2024-07-30T23:00:00.000Z',
		value: 67
	},
	{
		date: '2024-07-31T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-08-01T23:00:00.000Z',
		value: 97
	},
	{
		date: '2024-08-02T23:00:00.000Z',
		value: 67
	},
	{
		date: '2024-08-03T23:00:00.000Z',
		value: 62
	},
	{
		date: '2024-08-04T23:00:00.000Z',
		value: 15
	},
	{
		date: '2024-08-05T23:00:00.000Z',
		value: 69
	},
	{
		date: '2024-08-06T23:00:00.000Z',
		value: 28
	},
	{
		date: '2024-08-07T23:00:00.000Z',
		value: 40
	},
	{
		date: '2024-08-08T23:00:00.000Z',
		value: 84
	},
	{
		date: '2024-08-09T23:00:00.000Z',
		value: 46
	},
	{
		date: '2024-08-10T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-08-11T23:00:00.000Z',
		value: 32
	},
	{
		date: '2024-08-12T23:00:00.000Z',
		value: 21
	},
	{
		date: '2024-08-13T23:00:00.000Z',
		value: 81
	},
	{
		date: '2024-08-14T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-08-15T23:00:00.000Z',
		value: 58
	},
	{
		date: '2024-08-16T23:00:00.000Z',
		value: 36
	},
	{
		date: '2024-08-17T23:00:00.000Z',
		value: 11
	},
	{
		date: '2024-08-18T23:00:00.000Z',
		value: 33
	},
	{
		date: '2024-08-19T23:00:00.000Z',
		value: 74
	},
	{
		date: '2024-08-20T23:00:00.000Z',
		value: 51
	},
	{
		date: '2024-08-21T23:00:00.000Z',
		value: 12
	},
	{
		date: '2024-08-22T23:00:00.000Z',
		value: 21
	},
	{
		date: '2024-08-23T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-08-24T23:00:00.000Z',
		value: 69
	},
	{
		date: '2024-08-25T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-08-26T23:00:00.000Z',
		value: 17
	},
	{
		date: '2024-08-27T23:00:00.000Z',
		value: 43
	},
	{
		date: '2024-08-28T23:00:00.000Z',
		value: 46
	},
	{
		date: '2024-08-29T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-08-30T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-08-31T23:00:00.000Z',
		value: 25
	},
	{
		date: '2024-09-01T23:00:00.000Z',
		value: 82
	},
	{
		date: '2024-09-02T23:00:00.000Z',
		value: 72
	},
	{
		date: '2024-09-03T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-09-04T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-09-05T23:00:00.000Z',
		value: 77
	},
	{
		date: '2024-09-06T23:00:00.000Z',
		value: 93
	},
	{
		date: '2024-09-07T23:00:00.000Z',
		value: 52
	},
	{
		date: '2024-09-08T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-09-09T23:00:00.000Z',
		value: 30
	},
	{
		date: '2024-09-10T23:00:00.000Z',
		value: 49
	},
	{
		date: '2024-09-11T23:00:00.000Z',
		value: 28
	},
	{
		date: '2024-09-12T23:00:00.000Z',
		value: 57
	},
	{
		date: '2024-09-13T23:00:00.000Z',
		value: null
	},
	{
		date: '2024-09-14T23:00:00.000Z',
		value: 10
	}
];

export const testData = [
	{
		date: '2024-01-01T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-02T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-01-03T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-04T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-05T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-06T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-07T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-08T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-09T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-10T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-11T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-12T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-13T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-14T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-15T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-16T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-17T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-18T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-19T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-20T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-21T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-22T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-23T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-24T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-25T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-26T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-27T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-28T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-29T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-30T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-01-31T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-01T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-02T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-03T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-04T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-05T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-06T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-07T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-08T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-09T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-10T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-11T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-12T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-13T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-14T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-15T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-16T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-17T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-02-18T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-19T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-20T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-21T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-22T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-23T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-24T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-25T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-26T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-02-27T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-02-28T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-02-29T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-01T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-02T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-03T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-04T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-05T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-03-06T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-07T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-08T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-09T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-03-10T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-11T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-03-12T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-13T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-14T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-03-15T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-16T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-17T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-18T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-03-19T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-20T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-21T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-22T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-03-23T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-03-24T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-03-25T00:00:00.000Z',
		contributionCount: 8
	},
	{
		date: '2024-03-26T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-03-27T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-28T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-03-29T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-03-30T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-03-31T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-04-01T00:00:00.000Z',
		contributionCount: 9
	},
	{
		date: '2024-04-02T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-04-03T00:00:00.000Z',
		contributionCount: 9
	},
	{
		date: '2024-04-04T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-04-05T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-04-06T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-04-07T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-04-08T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-04-09T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-04-10T00:00:00.000Z',
		contributionCount: 10
	},
	{
		date: '2024-04-11T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-04-12T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-04-13T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-04-14T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-04-15T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-04-16T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-04-17T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-04-18T00:00:00.000Z',
		contributionCount: 7
	},
	{
		date: '2024-04-19T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-04-20T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-04-21T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-04-22T00:00:00.000Z',
		contributionCount: 13
	},
	{
		date: '2024-04-23T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-04-24T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-04-25T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-04-26T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-04-27T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-04-28T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-04-29T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-04-30T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-05-01T00:00:00.000Z',
		contributionCount: 8
	},
	{
		date: '2024-05-02T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-05-03T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-05-04T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-05-05T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-05-06T00:00:00.000Z',
		contributionCount: 10
	},
	{
		date: '2024-05-07T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-05-08T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-09T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-05-10T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-11T00:00:00.000Z',
		contributionCount: 7
	},
	{
		date: '2024-05-12T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-05-13T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-05-14T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-15T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-05-16T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-17T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-05-18T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-19T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-20T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-21T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-05-22T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-05-23T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-05-24T00:00:00.000Z',
		contributionCount: 8
	},
	{
		date: '2024-05-25T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-05-26T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-05-27T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-05-28T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-05-29T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-05-30T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-05-31T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-01T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-02T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-03T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-06-04T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-06-05T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-06T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-07T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-06-08T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-09T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-06-10T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-11T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-12T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-06-13T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-14T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-06-15T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-16T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-17T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-06-18T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-19T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-20T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-21T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-06-22T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-06-23T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-06-24T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-25T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-26T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-27T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-28T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-06-29T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-06-30T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-07-01T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-02T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-07-03T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-04T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-07-05T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-07-06T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-07T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-08T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-09T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-10T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-11T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-07-12T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-13T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-14T00:00:00.000Z',
		contributionCount: 13
	},
	{
		date: '2024-07-15T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-16T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-07-17T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-07-18T00:00:00.000Z',
		contributionCount: 10
	},
	{
		date: '2024-07-19T00:00:00.000Z',
		contributionCount: 11
	},
	{
		date: '2024-07-20T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-07-21T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-07-22T00:00:00.000Z',
		contributionCount: 11
	},
	{
		date: '2024-07-23T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-07-24T00:00:00.000Z',
		contributionCount: 38
	},
	{
		date: '2024-07-25T00:00:00.000Z',
		contributionCount: 45
	},
	{
		date: '2024-07-26T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-07-27T00:00:00.000Z',
		contributionCount: 13
	},
	{
		date: '2024-07-28T00:00:00.000Z',
		contributionCount: 12
	},
	{
		date: '2024-07-29T00:00:00.000Z',
		contributionCount: 10
	},
	{
		date: '2024-07-30T00:00:00.000Z',
		contributionCount: 19
	},
	{
		date: '2024-07-31T00:00:00.000Z',
		contributionCount: 10
	},
	{
		date: '2024-08-01T00:00:00.000Z',
		contributionCount: 8
	},
	{
		date: '2024-08-02T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-03T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-04T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-05T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-06T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-07T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-08-08T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-09T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-08-10T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-11T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-08-12T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-13T00:00:00.000Z',
		contributionCount: 7
	},
	{
		date: '2024-08-14T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-15T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-08-16T00:00:00.000Z',
		contributionCount: 11
	},
	{
		date: '2024-08-17T00:00:00.000Z',
		contributionCount: 12
	},
	{
		date: '2024-08-18T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-08-19T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-08-20T00:00:00.000Z',
		contributionCount: 7
	},
	{
		date: '2024-08-21T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-22T00:00:00.000Z',
		contributionCount: 8
	},
	{
		date: '2024-08-23T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-24T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-08-25T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-26T00:00:00.000Z',
		contributionCount: 10
	},
	{
		date: '2024-08-27T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-08-28T00:00:00.000Z',
		contributionCount: 7
	},
	{
		date: '2024-08-29T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-30T00:00:00.000Z',
		contributionCount: 1
	},
	{
		date: '2024-08-31T00:00:00.000Z',
		contributionCount: 7
	},
	{
		date: '2024-09-01T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-09-02T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-09-03T00:00:00.000Z',
		contributionCount: 8
	},
	{
		date: '2024-09-04T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-09-05T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-09-06T00:00:00.000Z',
		contributionCount: 3
	},
	{
		date: '2024-09-07T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-09-08T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-09-09T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-09-10T00:00:00.000Z',
		contributionCount: 8
	},
	{
		date: '2024-09-11T00:00:00.000Z',
		contributionCount: 2
	},
	{
		date: '2024-09-12T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-09-13T00:00:00.000Z',
		contributionCount: 7
	},
	{
		date: '2024-09-14T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-09-15T00:00:00.000Z',
		contributionCount: 5
	},
	{
		date: '2024-09-16T00:00:00.000Z',
		contributionCount: 4
	},
	{
		date: '2024-09-17T00:00:00.000Z',
		contributionCount: 6
	},
	{
		date: '2024-09-18T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-19T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-20T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-21T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-22T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-23T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-24T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-25T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-26T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-27T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-28T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-29T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-09-30T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-01T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-02T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-03T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-04T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-05T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-06T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-07T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-08T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-09T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-10T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-11T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-12T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-13T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-14T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-15T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-16T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-17T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-18T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-19T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-20T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-21T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-22T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-23T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-24T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-25T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-26T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-27T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-28T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-29T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-30T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-10-31T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-01T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-02T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-03T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-04T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-05T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-06T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-07T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-08T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-09T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-10T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-11T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-12T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-13T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-14T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-15T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-16T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-17T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-18T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-19T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-20T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-21T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-22T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-23T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-24T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-25T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-26T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-27T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-28T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-29T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-11-30T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-01T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-02T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-03T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-04T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-05T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-06T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-07T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-08T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-09T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-10T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-11T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-12T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-13T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-14T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-15T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-16T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-17T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-18T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-19T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-20T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-21T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-22T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-23T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-24T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-25T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-26T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-27T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-28T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-29T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-30T00:00:00.000Z',
		contributionCount: 0
	},
	{
		date: '2024-12-31T00:00:00.000Z',
		contributionCount: 0
	}
];
