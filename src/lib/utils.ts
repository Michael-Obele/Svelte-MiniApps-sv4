import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

// A writable store that represents a filter state, initially set to false
export let filter = persisted('filter', 'all');

/**
 * Converts an object to a JSON string, handling BigInt values by converting them to strings.
 *
 * @param obj - The object to be stringified.
 * @returns The JSON string representation of the object.
 */
export function stringifyWithBigInt(obj: any): string {
	return JSON.stringify(obj, (key, value) => {
		if (typeof value === 'bigint') {
			return value.toString(); // Convert bigint to string
		}
		return value; // Return other values as is
	});
}

export const isLoading = writable(false);

export const savePassword = writable(false);
export const showPassword = writable(false);

export const seenCookie = persisted<boolean>('seen-cookie', false);

/**
 * Scrolls the page smoothly to the element with the specified ID.
 *
 * @param {string} id - The ID of the element to scroll to.
 */
export function scrollToID(id: string): void {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth', // Smooth scrolling animation
			block: 'start' // Align the top of the element to the top of the viewport
		});
	}
}

/**
 * Scrolls the window to the top of the page with a smooth scrolling effect.
 */
export function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // For smooth scrolling
	});
}

// Define the type for a single budget
export type Budget = {
	name: string;
	amount: number;
	expenses: Expense[];
};

// Define the type for an expense
export type Expense = {
	name: string;
	amount: number;
};

// Store budgets in localStorage
export const budgets = persisted<Budget[]>('budgets', []);
