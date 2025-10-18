<script lang="ts">
	import Landing from '../components/Landing.svelte';
	import List from '../components/List.svelte';
	import SectionF from '../components/SectionF.svelte';
	import SkillList from '../components/SkillList.svelte';
	import SkillData from '../data/skills.json';
</script>

<svelte:head>
	<title>Stormish | Home</title>
	<meta name="description" content="Andrew's personal website" />
</svelte:head>

<Landing />
<SectionF header="About Me">
	<p class="text-justify">
		Hi, I'm <b>Andrew</b>, a programmer with a passion for exploring and creating. My journey began
		by tinkering with SourceMod plugins for fun, which soon expanded to modding games like Don't
		Starve Together using Lua. Inspired by my love for gaming, I pursued C# with a focus on Unity
		game development. During college, I discovered a passion for web development, where I now enjoy
		building accessible and versatile applications that can be accessed using just a browser.
	</p>
</SectionF>
<SectionF header="What I Do">
	<p class="text-justify">
		I specialize in creating web applications using frameworks like React, Vue, and Svelte, always
		choosing the best tool for the job. My continuous learning drives me to become a better
		developer, as I believe knowledge is key to growth. Beyond coding, I also compose music using
		LMMS.
	</p>
</SectionF>
<SectionF header="Skills">
	<SkillList skillList={SkillData} />
</SectionF>
<SectionF header="Soft Skills">
	<List />
</SectionF>
