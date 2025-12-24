<script lang="ts">
	import { page } from '$app/state';

	const activeClass = 'bg-gray-200 dark:bg-white text-black cursor-default';

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'Projects', path: '/projects' }
	];
</script>

<nav class="absolute left-1/2 -translate-x-1/2 select-none">
	{#each navItems as { name, path }}
		<a
			href={`${path}`}
			class={`mx-1 rounded-xl p-2 text-lg transition-colors ${page.url.pathname === `${path}` ? activeClass : 'text-black hover:bg-gray-100 dark:hover:text-black dark:text-white'}`}
		>
			{name}
		</a>
	{/each}
</nav>
