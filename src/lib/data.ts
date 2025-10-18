import ProjectsData from '$data/projects.json';

export interface ICard {
	id: string;
}

export interface IProject {
	url?: string;
	text: string;
	description?: string;
	lgDescription?: string;
	name: string;
	img: string;
	coverImg?: string;
	technologies?: ICard[];
}

export interface IProjects {
	title: string;
	hide?: boolean;
	hiddenOnly?: boolean;
	projects: IProject[];
	customIcon?: { img: string; color: string };
}

export const projects: IProjects[] = ProjectsData;

const projectLookupMap = new Map<string, IProject>();

for (const category of projects) {
	for (const project of category.projects) {
		projectLookupMap.set(project.name, project);
	}
}

export const getProjectByName = (name: string): IProject | undefined => {
	return projectLookupMap.get(name);
};
