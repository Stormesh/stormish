<script lang="ts">
	const wx78 = '/WX78_distorted.webp';
	const wx78_small = '/WX78_distorted_small.webp';
</script>

<div class="-mt-20 flex h-screen flex-col items-center justify-center">
	<div
		class="fadeIn absolute -z-10 hidden h-screen w-full dark:block"
		style="background: radial-gradient(circle at center, #2c3e50 , transparent 45%);"
	></div>
	<img
		src={wx78}
		srcset="{wx78_small} 140w, {wx78} 200w"
		sizes="(max-width: 600px) 140px, 200px"
		alt="face"
		fetchpriority="high"
		class="fadeInMotion drop-shadow-glow hover:drop-shadow-glow-lg h-36 w-36 rounded-full ring-4 ring-sky-400 transition-all duration-300 hover:scale-105 md:h-50 md:w-50"
	/>
	<h1
		class="fadeInMotion bg-linear-to-r from-slate-700 to-slate-500 bg-clip-text pb-4 text-center text-4xl font-extrabold text-transparent md:text-6xl lg:text-6xl dark:from-sky-100 dark:to-blue-300"
	>
		Andrew Samuel
	</h1>
	<h2 class="fadeInDelay text-center text-xl font-bold md:text-3xl">
		Full Stack <span class="dark:text-sky-500 text-sky-700">React</span>/<span class="dark:text-orange-500 text-orange-700">Svelte</span
		>/<span class="dark:text-emerald-500 text-emerald-700">Vue</span> Developer
	</h2>
</div>

<style>
	/* Fade In Motion */
	.fadeInMotion {
		animation: fadeInMotion 1s;
	}

	.fadeInDelay {
		animation: fadeInMotion 1s 0.5s backwards;
	}

	@keyframes fadeInMotion {
		0% {
			opacity: 0;
			transform: scale(0.9);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* Fade In */
	.fadeIn {
		animation: fadeIn 1s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
