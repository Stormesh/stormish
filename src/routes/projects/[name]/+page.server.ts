import { getProjectByName } from '$lib/data';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    return { 
        project: getProjectByName(params.name),
    };
}) satisfies PageServerLoad;