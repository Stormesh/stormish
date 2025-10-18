<script lang="ts">
	interface IButtonProps {
		text: string;
		color: string;
		hoverColor: string;
		url?: string;
		big?: boolean;
	}

	let { text, color, hoverColor, big, url }: IButtonProps = $props();
</script>

<a
	class={`${color} font-bold ${big && 'text-2xl'} m-1 rounded-lg p-1 text-white shadow dark:shadow-none ${hoverColor} transition-colors select-none`}
	href={url}>{text}</a
>
