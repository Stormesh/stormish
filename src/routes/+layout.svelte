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
		class="mx-auto min-h-screen max-w-5xl px-4 md:px-8"
	>
		{@render children()}
	</section>
{/key}
<Footer />

<style lang="postcss">
	@reference "../app.css";

	:global(body) {
		@apply mt-24 bg-slate-50 bg-fixed text-black dark:bg-linear-to-tr dark:from-gray-950 dark:to-zinc-900 dark:text-white;
	}
</style>
