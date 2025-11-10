<script lang="ts">
	import { inView } from '$lib/utils';
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

	const card = getCard(id);
</script>

<div
	class="m-1 flex {mini
		? 'h-14 w-14 md:h-16 md:w-16'
		: 'h-24 w-24 md:h-28 md:w-28'} flex-col items-center justify-center rounded-lg bg-white/90 text-center shadow-md transition-all duration-500 dark:bg-zinc-950/50 dark:text-white dark:shadow-none {cardVisibility ||
	mini
		? 'translate-y-0 scale-100 opacity-100'
		: 'translate-y-8 scale-75 opacity-0'}"
	style="transition-delay: {index * 50}ms;"
	use:inView={{ onInView: () => showCard(index) }}
>
	<div
		class="dark:drop-shadow-glow dark:hover:drop-shadow-glow-lg object-contain {mini
			? 'h-10 w-10'
			: 'h-16 w-16'}drop-shadow-sm transition-all duration-300 hover:scale-110"
		style="--tw-ring-color: {card?.glowColor};"
	>
		{#if card?.img}
			<img width={64} height={64} src={card.img} alt="Card" />
		{:else if card?.devicon}
			<i
				class="devicon-{card.devicon.name}-{card.devicon.type || "plain"} {mini ? 'text-[2.5rem]' : 'text-[4rem]'} text-[{card.devicon.color}] {card.devicon
					.darkColor && `dark:text-[${card.devicon.darkColor}]`}"
			>
			</i>
		{/if}
	</div>
	<h2 class="{mini ? 'hidden' : 'text-base md:text-lg'} font-light">
		{card?.name}
	</h2>
</div>
