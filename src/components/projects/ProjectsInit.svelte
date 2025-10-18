<script lang="ts">
    import Projects from '$components/projects/Projects.svelte';
    import { projects } from '$lib/data';
    import ProjectPreview from '$components/projects/ProjectPreview.svelte';
    import { resetHoveredProject } from '$stores/hoverStore.svelte';

    const projectsData = projects;

    const { hiddenOnly = false } = $props();

    resetHoveredProject();
</script>

<div class="flex flex-row flex-wrap justify-between">
	<div class="lg:w-2/3">
		{#each projectsData as { title, hide, customIcon, projects }}
			<Projects {title} {hide} {customIcon} {projects} {hiddenOnly} />
		{/each}
	</div>
	<ProjectPreview />
</div>