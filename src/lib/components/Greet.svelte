<script lang="ts">
	import { page } from '$app/state';

	import greets from '$data/greets.json';

	let greet = $state('');

	$effect(() => {
		const path = page.url.pathname;
		const foundGreet =
			greets.find((greet) => greet.path === path) || greets.find((greet) => greet.path === '/');
		const greetText = foundGreet ? foundGreet.greets : [];

		const randomIndex = Math.floor(Math.random() * greetText.length);
		greet = greetText[randomIndex];
	});
</script>

<h3 class="hidden text-xl md:inline-block">{greet}</h3>
