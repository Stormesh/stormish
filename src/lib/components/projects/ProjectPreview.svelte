<script lang="ts">
	import Cards from '$components/Cards.svelte';
	import { hoveredProject } from '$stores/hover-store.svelte';
	import ProjectButton from './ProjectButton.svelte';
</script>

<div
	class={`fixed top-53 right-50 hidden min-h-[calc(100vh-20rem)] w-[25vw] max-w-md flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/70 shadow-2xl backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-black/60 lg:flex ${
		hoveredProject.view ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-12 opacity-0'
	}`}
>
	{#if hoveredProject}
		<div class="relative h-48 w-full overflow-hidden">
			<img
				src={hoveredProject.coverImg ||
					(Array.isArray(hoveredProject.previewImg)
						? hoveredProject.previewImg[0]
						: hoveredProject.previewImg) ||
					hoveredProject.img}
				alt={hoveredProject.name}
				class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
			/>
			<div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
			<h3 class="absolute bottom-4 left-6 text-2xl font-bold text-white">
				{hoveredProject.text}
			</h3>
		</div>

		<div class="flex flex-1 flex-col gap-6 overflow-y-auto p-6 scrollbar-hide">
			<div>
				<h4 class="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
					Description
				</h4>
				<p class="text-sm leading-relaxed text-muted-foreground">
					{hoveredProject.description || ''}
				</p>
			</div>

			{#if hoveredProject.technologies}
				<div>
					<h4 class="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
						Technologies
					</h4>
					<Cards mini center={false} cardData={hoveredProject.technologies} />
				</div>
			{/if}

			<div class="mt-auto pt-4">
				<ProjectButton
					text="Visit Project"
					color="bg-primary"
					hoverColor=""
					url={hoveredProject.url}
					big
				/>
			</div>
		</div>
	{/if}
</div>
