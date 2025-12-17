<script lang="ts">
	import Cards from '$components/Cards.svelte';
	import { hoveredProject } from '$stores/hoverStore.svelte';
	import ProjectButton from './ProjectButton.svelte';
	import ProjectDetails from './ProjectDetails.svelte';
</script>

<div
	class={`hidden p-7 lg:flex ${hoveredProject.view ? 'opacity-100' : 'opacity-0'} dark:bg-opacity-45 fixed top-40 right-[12%] h-[75vh] w-[30vw] flex-col items-center rounded-2xl border-b-4 border-gray-700 bg-gray-100 shadow-md transition-opacity duration-200 dark:border-gray-600 dark:bg-gray-950`}
>
	{#if hoveredProject}
		<h1 class="mb-2 text-center text-4xl font-bold">{hoveredProject.text}</h1>
		<img
			src={hoveredProject.previewImg || hoveredProject.coverImg || hoveredProject.img}
			alt={hoveredProject.name}
			class="m-3 h-[15em] w-[25em] rounded-xl object-cover"
		/>
		<div class="self-start overflow-y-auto">
			<ProjectDetails mini heading="Description" text={hoveredProject.description || ''} />
			{#if hoveredProject.technologies}
				<ProjectDetails mini heading="Technologies">
					<Cards mini center={false} cardData={hoveredProject.technologies} />
				</ProjectDetails>
			{/if}
		</div>
		<div class="mt-auto">
			<ProjectButton
				text="Visit Site"
				color="bg-green-600"
				hoverColor="hover:bg-green-400"
				url={hoveredProject.url}
				big={true}
			/>
		</div>
	{/if}
</div>
