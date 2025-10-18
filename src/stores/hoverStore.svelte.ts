import type { IProject } from '$lib/data';

export interface IHoveredProject extends IProject {
	view: boolean;
}

export const hoveredProject = $state<IHoveredProject>({
	url: '',
	text: '',
	description: '',
	name: '',
	img: '',
	coverImg: undefined,
	technologies: [],
	view: false
});

export const resetHoveredProject = () => {
	hoveredProject.url = '';
	hoveredProject.text = '';
	hoveredProject.description = '';
	hoveredProject.name = '';
	hoveredProject.img = '';
	hoveredProject.coverImg = undefined;
	hoveredProject.technologies = [];
	hoveredProject.view = false;
};
