<script lang="ts">
	import { inView } from '$utils/in-view';
	import cards from '../data/cards.json';

	let {
		id,
		mini = false,
		index,
		cardVisibility,
		showCard
	}: {
		id: string;
		mini?: boolean;
		index: number;
		cardVisibility: boolean;
		showCard: (index: number) => void;
	} = $props();

	const getCard = (cardId: string) => {
		return cards.find((card) => card.id === cardId);
	};

	const card = $derived(getCard(id));
</script>

<div
	class="group m-1.5 flex {mini
		? 'h-12 w-12 md:h-14 md:w-14'
		: 'h-24 w-24 md:h-28 md:w-28'} flex-col items-center justify-center rounded-2xl border border-white/40 bg-white/60 p-2 text-center shadow-sm backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20 {cardVisibility ||
	mini
		? 'translate-y-0 opacity-100'
		: 'translate-y-8 opacity-0'}"
	use:inView={{ onInView: () => showCard(index) }}
>
	<div
		class="relative flex items-center justify-center transition-all duration-300 group-hover:scale-110"
		style="--tw-ring-color: {card?.glowColor};"
	>
		{#if card?.img}
			<img
				class="drop-shadow-md {mini ? 'h-8 w-8 md:h-10 md:w-10' : 'h-12 w-12 md:h-16 md:w-16'}"
				src={card.img}
				alt={card.name}
			/>
		{:else if card?.devicon}
			<i
				class="devicon-{card.devicon.name}-{card.devicon.type || 'plain'} {mini
					? 'text-xl md:text-3xl'
					: 'text-3xl md:text-5xl'}"
				style="color: var(--icon-color, {card.devicon.color}); --icon-color: {card.devicon.color}; {card.devicon.darkColor ? `--dark-icon-color: ${card.devicon.darkColor};` : ''}"
			>
			</i>
		{/if}
	</div>
	<span
		class="mt-1.5 block truncate px-1 text-[11px] font-semibold text-muted-foreground transition-colors group-hover:text-foreground md:mt-2 md:text-xs {mini
			? 'hidden'
			: ''}"
	>
		{card?.name}
	</span>
</div>

<style>
	@reference "../../app.css";
	
	:global(.dark) i {
		color: var(--dark-icon-color, var(--icon-color)) !important;
	}
</style>
