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
	class={`relative m-2 inline-block h-36 w-36 overflow-hidden rounded-3xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:duration-150 md:h-56 md:w-56`}
	style={backgroundStyle}
>
	<div
		class="absolute bottom-0 flex w-full flex-col flex-wrap items-center justify-center bg-black/80 text-white md:min-h-10"
	>
		<p class="mt-1 text-center text-sm font-bold md:text-lg">
			{text}
		</p>
		{#if !isMobile}
			<div class="hidden flex-wrap md:flex">
				<ProjectButton
					text="Visit Site"
					color="bg-green-600"
					hoverColor="hover:bg-green-400"
					{url}
				/>
				<ProjectButton
					text="View Details"
					color="bg-blue-600"
					hoverColor="hover:bg-blue-400"
					url={`/projects/${name}`}
					link={false}
				/>
			</div>
		{/if}
	</div>
</div>
