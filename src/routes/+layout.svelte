<script lang="ts">
	import { navigating, page } from '$app/state';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { hoveredProject } from '../lib/stores/hover-store.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();

	$effect(() => {
		if (navigating.complete) {
			hoveredProject.view = false;
		}
	});
</script>

<ModeWatcher />
<Header />
{#key page.url.pathname}
	<section
		in:fade={{ easing: cubicOut, duration: 400, delay: 150 }}
		out:fade={{ easing: cubicIn, duration: 150 }}
		class="mx-auto min-h-screen mt-25 max-w-5xl px-4 md:px-8"
	>
		{@render children()}
	</section>
{/key}
<Footer />

<style lang="postcss">
	@reference "../app.css";

	:global(body) {
		@apply bg-background text-foreground selection:bg-primary/20 selection:text-primary;
		background-image: radial-gradient(
				at 0% 0%,
				oklch(0.7 0.2 250 / 0.12) 0,
				transparent 50%
			),
			radial-gradient(at 100% 0%, oklch(0.7 0.2 190 / 0.1) 0, transparent 50%);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}

	:global(.dark body) {
		@apply bg-background;
		background-image: radial-gradient(
				at 0% 0%,
				oklch(0.4 0.15 250 / 0.15) 0,
				transparent 50%
			),
			radial-gradient(at 100% 0%, oklch(0.4 0.15 190 / 0.12) 0, transparent 50%);
	}
</style>
