import { getProjectByName } from '$lib/data';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({params}) => {
    const project = getProjectByName(params.name);
    
    if (!project) {
        throw error(404, 'Project not found');
    }
    
    return { 
        project,
    };
}) satisfies PageServerLoad;