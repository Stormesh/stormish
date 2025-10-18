<script lang="ts">
	import { hoveredProject } from '$stores/hoverStore.svelte';
	import { onMount } from 'svelte';
	import type { IProject } from '$lib/data';
	import ProjectCard from './ProjectCard.svelte';

	let { url, text, description, name, img, coverImg, technologies }: IProject = $props();

	let projectElement: HTMLDivElement | null = null;

	let shown = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					shown = true;
				}
			});
		});

		if (projectElement) observer.observe(projectElement);

		return () => {
			if (projectElement) observer.unobserve(projectElement);
		};
	});

	const viewProject = () => {
		hoveredProject.url = url;
		hoveredProject.text = text;
		hoveredProject.description = description;
		hoveredProject.name = name;
		hoveredProject.img = img;
		hoveredProject.coverImg = coverImg;
		hoveredProject.technologies = technologies;
		hoveredProject.view = true;
	};
</script>

<!-- Desktop -->
<div
	class={`${shown ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-24 scale-75 opacity-0'} 'trannsition-all hidden duration-500 ease-in-out md:inline-block`}
	onmouseenter={viewProject}
	bind:this={projectElement}
	role="group"
>
	<ProjectCard {url} {text} {name} {img} />
</div>

<!-- Mobile -->
<a class="inline-block md:hidden" href="/projects/{name}">
	<ProjectCard {text} {name} {img} isMobile={true} />
</a>
