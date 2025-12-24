<script lang="ts">
	import type { IProject } from '$lib/data';

	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$components/ui/carousel/index';
	import { type CarouselAPI } from '$components/ui/carousel/context';

	interface ICarouselProps {
		project: IProject;
	}

	let { project }: ICarouselProps = $props();

	let carouselApi = $state<CarouselAPI>();
	let selectedCarouselIndex = $state(0);
	let carouselRef = $state<HTMLDivElement>();

	const previewImages = $derived(Array.isArray(project.previewImg) ? project.previewImg : []);

	const hasMultipleImages = $derived(previewImages.length > 1);

	$effect(() => {
		if (!carouselApi) return;

		const onSelect = () => {
			selectedCarouselIndex = carouselApi?.selectedScrollSnap() ?? 0;
		};

		carouselApi.on('select', onSelect);

		return () => {
			carouselApi?.off('select', onSelect);
		};
	});

	$effect(() => {
		if (!carouselRef || !hasMultipleImages) return;

		const activeThumbnail = carouselRef.children[selectedCarouselIndex] as HTMLElement;
		if (!activeThumbnail) return;

		activeThumbnail.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest'
		});
	});

	const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: true });

	function scrollCarouselToIndex(index: number) {
		carouselApi?.scrollTo(index);
	}
</script>

<div>
	<Carousel.Root
		class="w-230"
		setApi={(emblaApi) => (carouselApi = emblaApi)}
		opts={{
			loop: true
		}}
		plugins={[autoplayPlugin]}
		onmouseenter={autoplayPlugin.stop}
		onmouseleave={autoplayPlugin.reset}
	>
		<Carousel.Content>
			{#if previewImages}
				{#each previewImages as img, index (index)}
					<Carousel.Item>
						<div class="h-120 w-full overflow-hidden rounded-xl">
							<img
								src={img}
								alt={project.name}
								width={600}
								height={560}
								class="h-full w-full object-contain"
							/>
						</div>
					</Carousel.Item>
				{/each}
			{:else}
				<img
					src={project.coverImg || project.img}
					alt={project.name}
					width={600}
					height={560}
					class="m-3 h-120 w-full rounded-xl object-contain"
				/>
			{/if}
		</Carousel.Content>
		{#if hasMultipleImages}
			<Carousel.Previous class="cursor-pointer" />
			<Carousel.Next class="cursor-pointer" />
			<div class="flex w-full flex-row flex-nowrap overflow-x-auto" bind:this={carouselRef}>
				{#each previewImages as img, index (index)}
					<button
						class="mx-2 my-3 h-20 w-36 shrink-0 cursor-pointer overflow-hidden rounded-lg transition-opacity duration-300 ease-in-out select-none"
						onclick={() => scrollCarouselToIndex(index)}
						class:opacity-50={index !== selectedCarouselIndex}
					>
						<img src={img} alt={project.name} class="h-full w-full object-cover" />
					</button>
				{/each}
			</div>
		{/if}
	</Carousel.Root>
</div>
