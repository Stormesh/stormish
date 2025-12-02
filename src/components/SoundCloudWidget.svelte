<script lang="ts">
	interface ISoundCloudWidgetProps {
		trackId?: string;
		url?: string;
		autoPlay?: boolean;
		showComments?: boolean;
		color?: string;
        width?: number;
		height?: number;
	}

	let {
		trackId,
		url,
		autoPlay = false,
		showComments = true,
		color = 'ff5500',
        width = 200,
		height = 200
	}: ISoundCloudWidgetProps = $props();

	let soundCloudUrl = $state('');

	$effect(() => {
		if (trackId) {
			soundCloudUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&auto_play=${autoPlay}&hide_related=false&show_comments=${showComments}&show_user=true&show_reposts=false&show_teaser=true&visual=true&color=${color}`;
		} else if (url) {
			soundCloudUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=${autoPlay}&hide_related=false&show_comments=${showComments}&show_user=true&show_reposts=false&show_teaser=true&visual=true&color=${color}`;
		} else {
			soundCloudUrl = ''; // Fallback or error state
		}
	});
</script>

{#if soundCloudUrl}
	<iframe
		{width}
		{height}
		class="w-fit"
		scrolling="no"
		frameborder="no"
		allow="autoplay"
		src={soundCloudUrl}
		title="SoundCloud Widget"
	></iframe>
{:else}
	<p>Please provide either a trackId or a URL for the SoundCloud widget.</p>
{/if}

<style>
	iframe {
		border-radius: 4px;
	}
</style>
