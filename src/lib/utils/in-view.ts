import type { Action } from 'svelte/action';
import { useIntersectionObserver } from 'runed';

interface InViewParams {
	rootMargin?: string;
	onInView: () => void;
}

export const inView: Action<HTMLElement, InViewParams> = (node, params) => {
	const handleIntersect: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				params.onInView();
			}
		});
	};

	useIntersectionObserver(() => node, handleIntersect, { rootMargin: params.rootMargin });
};
