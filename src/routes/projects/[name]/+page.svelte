<script lang="ts">
	import SoundCloudWidget from '$components/SoundCloudWidget.svelte';
	import ProjectButton from '$components/projects/ProjectButton.svelte';
	import ProjectDescription from '$components/projects/ProjectDescription.svelte';
	import ProjectDetails from '$components/projects/ProjectDetails.svelte';
	import Cards from '$components/Cards.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Stormish | {data.project?.text ?? 'Project'}</title>
</svelte:head>

{#if data.project}
	<h1 class="text-center text-4xl font-extrabold">{data.project.text}</h1>
	<div class="relative m-5 rounded-xl bg-transparent">
		<img
			src={data.project.coverImg || data.project.previewImg || data.project.img}
			alt={data.project.name}
			width={600}
			height={100}
			class="m-3 h-140 w-full rounded-xl object-contain"
		/>
		<ProjectDetails heading="Description">
			<ProjectDescription
				text={data.project.lgDescription || data.project.description || data.project.text}
			/>
		</ProjectDetails>
		{#if data.project.soundCloudTrackIds || data.project.soundCloudUrls}
			<ProjectDetails heading="Produced Music">
				<div class="flex flex-wrap gap-3">
					{#each data.project.soundCloudUrls as url}
						<SoundCloudWidget {url} />
					{/each}
					{#each data.project.soundCloudTrackIds as trackId}
						<SoundCloudWidget {trackId} />
					{/each}
				</div>
			</ProjectDetails>
		{/if}
		{#if data.project.technologies}
			<ProjectDetails heading="Technologies">
				<Cards center={false} cardData={data.project.technologies} />
			</ProjectDetails>
		{/if}
		{#if data.project.url}
			<div class="flex items-center justify-center">
				<ProjectButton
					text="Visit Site"
					color="bg-green-600"
					hoverColor="hover:bg-green-400"
					url={data.project.url}
					big={true}
				/>
			</div>
		{/if}
	</div>
{:else}
	<div class="py-10 text-center">
		<h1 class="text-2xl font-bold">Project Not Found</h1>
		<p class="mt-2">The requested project could not be found.</p>
		<a href="/projects" class="mt-4 inline-block text-blue-500 hover:underline">Back to Projects</a>
	</div>
{/if}
