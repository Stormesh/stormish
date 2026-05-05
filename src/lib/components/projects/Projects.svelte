<script lang="ts">
	import type { IProjects } from '$lib/data';
	import Project from './Project.svelte';

	let { title, hide, hiddenOnly, projects, customIcon }: IProjects = $props();
</script>

<div class="{hiddenOnly && !hide ? 'hidden' : !hiddenOnly && hide && 'hidden'} flex flex-col items-center justify-center md:m-5">
	<div class="mb-12 flex flex-col items-center">
		<h2
			class="mb-4 text-center text-3xl font-bold tracking-tight text-foreground md:text-5xl"
		>
			{title}
			{#if customIcon}
				<img
					style="filter: drop-shadow(0 0 0.1em {customIcon.color})"
					class="ml-2 hidden h-10 w-10 rounded-full align-middle md:inline-block md:h-14 md:w-14"
					width={56}
					height={56}
					src={customIcon.img}
					alt="Icon"
				/>
			{/if}
		</h2>
		<div class="h-1.5 w-12 rounded-full bg-primary/40"></div>
	</div>
	<div class="flex flex-wrap items-center justify-center gap-2">
		{#each projects as { url, text, description, name, img, coverImg, previewImg, soundCloudUrls, soundCloudTrackIds, technologies }}
			<Project {url} {text} {description} {name} {img} {coverImg} {previewImg} {soundCloudUrls} {soundCloudTrackIds} {technologies} />
		{/each}
	</div>
</div>
