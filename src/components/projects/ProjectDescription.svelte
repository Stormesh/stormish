<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';

	const { text = '' } = $props();
</script>

<article class="prose dark:prose-invert prose-img:rounded-xl">
	{@html DOMPurify.sanitize(marked.parse(text) as string)}
</article>
