<script lang="ts">
	import { hoveredProject } from '$stores/hoverStore.svelte';
	import type { IProject } from '$lib/data';
	import ProjectCard from './ProjectCard.svelte';
	import { inView } from '$lib/utils';

	let { url, text, description, name, img, coverImg, technologies }: IProject = $props();

	let shown = $state(false);

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

	const showProject = () => {
		shown = true;
	};
</script>

<!-- Desktop -->
<div
	class={`${shown ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-24 scale-75 opacity-0'} 'trannsition-all hidden duration-500 ease-in-out md:inline-block`}
	onmouseenter={viewProject}
	use:inView={{ onInView: showProject }}
	role="group"
>
	<ProjectCard {url} {text} {name} {img} />
</div>

<!-- Mobile -->
<a class="inline-block md:hidden" href="/projects/{name}">
	<ProjectCard {text} {name} {img} isMobile={true} />
</a>
