<script lang="ts">
	import ProjectButton from './ProjectButton.svelte';
	import type { IProject } from '$lib/data';

	interface ICardProps extends IProject {
		isMobile?: boolean;
	}

	let { url, text, name, img, isMobile = false }: ICardProps = $props();

	const backgroundStyle = $derived(`background-image: url('${img}')`);
</script>

<div
	class="group relative m-2 h-36 w-36 overflow-hidden rounded-3xl border border-white/20 bg-muted/30 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 md:h-56 md:w-56"
>
	<!-- Project Image with Zoom Effect -->
	<div
		class="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
		style={backgroundStyle}
	></div>

	<!-- Content Overlay -->
	<div
		class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent p-3 opacity-90 transition-opacity duration-300 group-hover:opacity-100 md:p-5"
	>
		<div class="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
			<h3 class="mb-1 text-sm font-bold text-white md:mb-2 md:text-xl">
				{text}
			</h3>

			{#if !isMobile}
				<div
					class="flex gap-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100"
				>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-lg bg-primary px-2 py-1 text-[8px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:px-3 md:py-1.5 md:text-[10px]"
					>
						Visit
					</a>
					<a
						href={`/projects/${name}`}
						class="rounded-lg bg-white/20 px-2 py-1 text-[8px] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/30 md:px-3 md:py-1.5 md:text-[10px]"
					>
						Details
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>
