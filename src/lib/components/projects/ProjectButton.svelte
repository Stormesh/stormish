<script lang="ts">
	interface IButtonProps {
		text: string;
		color: string;
		hoverColor: string;
		url?: string;
		big?: boolean;
		link?: boolean;
	}

	let { text, color, hoverColor, big, url, link = true }: IButtonProps = $props();
</script>

<a
	class={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-sm font-semibold transition-all duration-300 active:scale-95 ${
		big ? 'px-8 py-3 text-lg' : ''
	} ${
		color.includes('green')
			? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500'
			: 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90'
	} select-none`}
	href={url}
	target={link ? "_blank" : ""}
>
	{text}
</a>
