<script lang="ts">
	import cards from '../data/cards.json';
	import { inView } from '$lib/utils';

	interface ICardProps {
		cardData: {
			id: string;
		}[];
		mini?: boolean;
		center?: boolean;
	}

	let { cardData, mini = false, center = true }: ICardProps = $props();

	let cardVisibility: boolean[] = $state(cardData.map(() => false));

	const showCard = (index: number) => {
		if (mini) return;
		cardVisibility[index] = true;
	};

	const getCard = (id: string) => {
		return cards.find((card) => card.id === id);
	};
</script>

<div class="flex flex-wrap {center && 'items-center justify-center'}">
	{#each cardData as { id }, index (id)}
		<div
			class="m-1 flex {mini
				? 'h-14 w-14 md:h-16 md:w-16'
				: 'h-24 w-24 md:h-28 md:w-28'} flex-col items-center justify-center rounded-lg bg-white/90 text-center shadow-md transition-all duration-500 dark:bg-zinc-950/50 dark:text-white dark:shadow-none {cardVisibility[
				index
			] || mini
				? 'translate-y-0 scale-100 opacity-100'
				: 'translate-y-8 scale-75 opacity-0'}"
			style="transition-delay: {index * 50}ms;"
			use:inView={{ onInView: () => showCard(index) }}
		>
			<img
				width={64}
				height={64}
				src={getCard(id)?.img}
				alt="Card"
				class="dark:drop-shadow-glow dark:hover:drop-shadow-glow-lg object-contain {mini
					? 'h-10 w-10'
					: 'h-16 w-16'}drop-shadow-sm transition-all duration-300 hover:scale-110"
				style="--tw-ring-color: {getCard(id)?.glowColor};"
			/>
			<h2 class="{mini ? 'hidden' : 'text-base md:text-lg'} font-light">
				{getCard(id)?.name}
			</h2>
		</div>
	{/each}
</div>
