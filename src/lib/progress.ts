// Tracks which dark-pattern modules the user has already completed ("absolviert").
// Completion is persisted in localStorage so the homepage can mark solved topics.
import { browser } from '$app/environment';

const STORAGE_KEY = 'darkjohak:completed';

/** Fired on the window when progress changes within the same tab. */
export const PROGRESS_EVENT = 'darkjohak:progress';

/** Returns the slugs of all completed modules (e.g. "bait-and-switch"). */
export function getCompleted(): string[] {
	if (!browser) return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed.filter((s): s is string => typeof s === 'string') : [];
	} catch {
		return [];
	}
}

/** Marks a module as completed and notifies same-tab listeners. */
export function markCompleted(slug: string): void {
	if (!browser) return;
	const completed = getCompleted();
	if (completed.includes(slug)) return;
	completed.push(slug);
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
	} catch {
		return;
	}
	window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
}

export function isCompleted(slug: string): boolean {
	return getCompleted().includes(slug);
}
