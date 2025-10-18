<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProjectDetailsProps {
		heading: string;
		text: string | Snippet;
		mini?: boolean;
	}

	let { heading, text, mini = false }: IProjectDetailsProps = $props();
</script>

<div class="m-5">
	<h2 class="{mini ? 'text-xl' : 'text-2xl'} font-bold">{heading}</h2>
	{#if typeof text === 'string'}
		<p class={mini ? 'text-base' : 'text-lg'}>
			{text}
		</p>
	{:else}
		{@render text()}
	{/if}
</div>
