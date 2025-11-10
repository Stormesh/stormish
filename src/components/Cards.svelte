<script lang="ts">
	import Card from './Card.svelte';

	interface ICardData {
		id: string;
	}

	interface ICardProps {
		cardData: ICardData[];
		mini?: boolean;
		center?: boolean;
	}

	let { cardData, mini = false, center = true }: ICardProps = $props();

	let cardVisibility: boolean[] = $state(cardData.map(() => false));

	const showCard = (index: number) => {
		if (mini) return;
		cardVisibility[index] = true;
	};
</script>

<div class="flex flex-wrap {center && 'items-center justify-center'}">
	{#each cardData as { id }, index (id)}
		<Card {id} {mini} {index} cardVisibility={cardVisibility[index]} {showCard} />
	{/each}
</div>
