<script lang="ts">
	import type { ICard } from '$lib/data';
	import Cards from './Cards.svelte';

	interface ISkillListProps {
		skillList: {
			title: string;
			data: ICard[];
		}[];
	}

	let { skillList }: ISkillListProps = $props();
</script>

<div class="flex flex-col gap-12">
	{#each skillList as { title, data }, index (index)}
		<div class="w-full">
			<h3 class="text-foreground/80 mb-6 text-xl font-bold tracking-tight md:text-2xl">
				{title}
			</h3>
			<Cards cardData={data} />
		</div>
	{/each}
</div>
