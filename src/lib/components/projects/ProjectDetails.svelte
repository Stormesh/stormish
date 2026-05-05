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

<div class="mx-auto my-12 w-full max-w-4xl px-4 md:px-0">
	<div class="mb-6 flex flex-col gap-2">
		<h2
			class="{mini
				? 'text-lg md:text-xl'
				: 'text-2xl md:text-3xl'} font-bold tracking-tight text-foreground"
		>
			{heading}
		</h2>
		<div class="h-1 w-10 rounded-full bg-primary/40"></div>
	</div>

	{#if text}
		<div class="space-y-4">
			<p
				class="{mini
					? 'text-sm md:text-base'
					: 'text-base md:text-lg'} leading-relaxed text-muted-foreground"
			>
				{text}
			</p>
		</div>
	{/if}

	{#if children}
		<div class="mt-6">
			{@render children()}
		</div>
	{/if}
</div>
