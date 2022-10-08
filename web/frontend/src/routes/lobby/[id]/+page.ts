import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }: LoadEvent) {
	return {
		lobby: {
			id: params.id
		}
	};
}
