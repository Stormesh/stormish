import type { Action } from 'svelte/action';

interface InViewParams {
	rootMargin?: string;
	onInView: () => void;
}

export const inview: Action<HTMLElement, InViewParams> = (node, params) => {
	const handleIntersect: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				params.onInView();
			}
		});
	};

	const observer = new IntersectionObserver(handleIntersect, { rootMargin: params.rootMargin });
	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
};

