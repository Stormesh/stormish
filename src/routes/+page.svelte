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
		Hello, My name is <b>Andrew</b>, I'm a software developer who loves to build tools and create
		applications to make life easier for myself and others. I'm passionate about learning and
		growing as a developer, and I believe that knowledge is the key to unlocking my full potential.
	</p>
</SectionF>
<SectionF header="What I Do">
	<p class="text-justify">
		I build and design web applications using <span class="font-bold text-sky-700 dark:text-sky-500"
			>React</span
		>, <span class="font-bold text-emerald-700 dark:text-emerald-500">Vue</span> and
		<span class="font-bold text-orange-700 dark:text-orange-500">Svelte</span>. Choosing the right
		tool for the job is crucial. I'm currently focused on developing my backend skills on
		<span class="font-bold text-lime-700 dark:text-lime-600">Node.js</span>,
		<span class="font-bold text-yellow-600 dark:text-yellow-300">Python</span>
		and <span class="font-bold text-indigo-600 dark:text-indigo-400">.NET</span> and I'm more than happy
		to share my knowledge and experience with others. Driven by my love for music, I also compose and
		produce music using LMMS.
	</p>
</SectionF>
<SectionF header="Skills">
	<SkillList skillList={SkillData} />
</SectionF>
<SectionF header="Soft Skills">
	<List />
</SectionF>
