<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProjectDetailsProps {
		heading: string;
		text?: string;
		mini?: boolean;
		children?: Snippet;
	}

	let { heading, text, mini = false, children }: IProjectDetailsProps = $props();
</script>

<div class="m-5">
	<h2 class="{mini ? 'text-xl' : 'text-2xl'} font-bold">{heading}</h2>
	{#if text}
		<p class={mini ? 'text-base' : 'text-lg'}>
			{text}
		</p>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</div>
