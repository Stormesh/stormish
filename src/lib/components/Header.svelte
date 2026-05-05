<script lang="ts">
	import Greet from './Greet.svelte';
	import Logo from './Logo.svelte';
	import Nav from './Nav.svelte';
</script>

<header
	class="fixed top-0 right-0 left-0 z-10 flex items-center justify-between border-border/50 bg-white/90 px-5 py-5 shadow-md backdrop-blur-md select-none md:px-20 dark:border-b-2 dark:bg-transparent dark:bg-linear-to-t dark:from-zinc-950/60 dark:to-slate-900/75 dark:text-white"
>
	<a href="/">
		<Logo />
		<h3 class="hidden align-middle text-3xl font-bold md:inline-block">Stormish</h3>
	</a>
	<Nav />
	<Greet />
</header>
