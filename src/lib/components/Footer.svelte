<script lang="ts">
	const wx78_small = '/WX78_distorted_small.webp';

	const year = new Date().getFullYear();
</script>

<footer
	class="border-border/50 bg-background/50 mt-20 border-t px-8 py-3 backdrop-blur-sm select-none"
>
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
		<div class="flex items-center gap-2">
			<div class="bg-primary/10 h-8 w-8 rounded-lg p-1 dark:bg-white/10">
				<img src={wx78_small} class="rounded-full" alt="Logo" />
			</div>
			<span class="text-xl font-bold tracking-tight">Stormish</span>
		</div>

		<p class="text-muted-foreground text-sm">
			&copy; {year} Andrew Samuel. All rights reserved.
		</p>

		<div class="flex gap-6">
			<a href="/" class="text-muted-foreground hover:text-primary text-sm transition-colors">Home</a
			>
			<a href="/projects" class="text-muted-foreground hover:text-primary text-sm transition-colors"
				>Projects</a
			>
		</div>
	</div>
</footer>
