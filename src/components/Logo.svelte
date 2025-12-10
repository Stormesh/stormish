<script lang="ts">
	interface ILogoProps {
		sizeX?: number;
		sizeY?: number;
	}
	const wx78 = '/WX78_distorted_mini.webp';
	const { sizeX = 60, sizeY = 60 }: ILogoProps = $props();
</script>

<img
	class="inline-block rounded-full transition-transform hover:scale-125 md:mx-2"
	src={wx78}
	width={sizeX}
	height={sizeY}
	alt="WX78"
/>
