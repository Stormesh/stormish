<script lang="ts">
	import { type Snippet } from 'svelte';
	import { inView } from '$utils/in-view';

	interface ISecsProps {
		header: string;
		children: Snippet;
	}

	let { header, children }: ISecsProps = $props();
	let isInView = $state(false);

	function onInView() {
		isInView = true;
	}
</script>

<section
	use:inView={{ rootMargin: '-100px', onInView }}
	class="relative mb-24 flex flex-col items-center py-12 md:mb-32"
>
	<div
		class={`w-full transition-all duration-1000 ease-out ${
			isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
		}`}
	>
		<div class="mb-12 flex flex-col items-center">
			<h2
				class="mb-4 text-center text-3xl font-bold tracking-tight text-foreground md:text-5xl"
			>
				{header}
			</h2>
			<div class="h-1.5 w-12 rounded-full bg-primary/40"></div>
		</div>

		<div class="mx-auto w-full max-w-4xl px-4 text-lg leading-relaxed text-muted-foreground">
			{@render children()}
		</div>
	</div>
</section>
