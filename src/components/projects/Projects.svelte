<script lang="ts">
	import type { IProjects } from '$lib/data';
	import Project from './Project.svelte';

	let { title, hide, hiddenOnly, projects, customIcon }: IProjects = $props();
</script>

<div class="{hiddenOnly && !hide ? 'hidden' : !hiddenOnly && hide && 'hidden'} flex flex-col items-center justify-center md:m-5">
	<h1
		class="mb-7 self-center bg-gradient-to-tr from-slate-100 to-red-200 bg-clip-text text-center align-middle text-5xl font-bold"
	>
		{title}
		{#if customIcon}
			<img
				style="filter: drop-shadow(0 0 0.1em {customIcon.color})"
				class="ml-1 hidden h-14 w-14 rounded-full align-middle md:inline-block"
				width={50}
				height={50}
				src={customIcon.img}
				alt="Icon"
			/>
		{/if}
	</h1>
	<div class="flex flex-wrap items-center justify-center">
		{#each projects as { url, text, description, name, img, coverImg, technologies }}
			<Project {url} {text} {description} {name} {img} {coverImg} {technologies} />
		{/each}
	</div>
</div>
