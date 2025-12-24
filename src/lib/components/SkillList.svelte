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

<div class="mx-10 flex flex-col flex-wrap justify-center lg:flex-row">
	{#each skillList as { title, data }, index (index)}
		<div class="mb-10">
			<h1 class="text-center font-mono text-3xl font-bold transition-all duration-500">
				{title}
			</h1>
			<div class="w-full p-5">
				<Cards cardData={data} />
			</div>
		</div>
	{/each}
</div>
