<script lang="ts">
	import { type Snippet } from 'svelte';
	import { inview } from '$lib/utils';
	import DOMPurify from 'isomorphic-dompurify';

	interface ISecsProps {
		header: string;
		text: string | Snippet;
	}

	let { header, text }: ISecsProps = $props();
	let isInView = $state(false);

	function onInView() {
		isInView = true;
	}
</script>

<div use:inview={{ rootMargin: '-100px', onInView }} class="mb-10 flex flex-col justify-between">
	<div class="{isInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out">
		<h1 class="m-2 text-center align-middle text-5xl font-bold">
			{header}
		</h1>
		{#if typeof text === 'string'}
			<p class="w-full rounded-lg p-5 text-lg">
				{@html DOMPurify.sanitize(text)}
			</p>
		{:else}
			{@render text()}
		{/if}
	</div>
</div>
