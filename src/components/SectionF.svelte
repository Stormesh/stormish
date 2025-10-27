<script lang="ts">
	import { type Snippet } from 'svelte';
	import { inView } from '$lib/utils';

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

<div use:inView={{ rootMargin: '-100px', onInView }} class="mb-10 flex flex-col justify-between">
	<div class="{isInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out">
		<h1 class="m-2 text-center align-middle text-5xl font-bold">
			{header}
		</h1>
		{@render children()}
	</div>
</div>
