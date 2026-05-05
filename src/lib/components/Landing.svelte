<script lang="ts">
	const wx78 = '/WX78_distorted.webp';
	const wx78_small = '/WX78_distorted_small.webp';
</script>

<div class="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-20">
	<!-- Background decorative elements -->
	<div
		class="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5"
	></div>
	<div
		class="absolute top-1/4 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/5"
	></div>

	<div class="animate-fade-up flex flex-col items-center text-center">
		<div class="relative mb-8">
			<div
				class="absolute -inset-1 animate-pulse rounded-full bg-linear-to-r from-primary to-blue-500 opacity-25 blur-sm transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
			></div>
			<img
				src={wx78}
				srcset="{wx78_small} 140w, {wx78} 200w"
				sizes="(max-width: 600px) 140px, 200px"
				alt="Andrew Samuel"
				fetchpriority="high"
				class="relative h-32 w-32 rounded-full border-2 border-white/50 object-cover shadow-2xl transition-transform duration-500 hover:scale-105 dark:border-white/10 md:h-40 md:w-40"
			/>
		</div>

		<h1
			class="mb-4 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl"
		>
			<span class="bg-linear-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">Andrew Samuel</span>
		</h1>

		<h2
			class="max-w-2xl text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl"
		>
			Crafting exceptional digital experiences with
			<span class="font-bold text-primary">React</span>,
			<span class="font-bold text-orange-500">Svelte</span>, &
			<span class="font-bold text-emerald-500">Vue</span>
		</h2>

		<div class="mt-10 flex gap-4">
			<a
				href="/projects"
				class="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
			>
				View Projects
			</a>
		</div>
	</div>
</div>

<style>
	/* Use Tailwind 4 animations instead of custom CSS where possible */
	.animate-fade-up {
		animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes fade-up {
		0% {
			opacity: 0;
			transform: translateY(30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
