import type { PageServerLoad } from './$types';
import {projects} from '$lib/index'



export const load = (async () => {
    return {
        projects
    };
}) satisfies PageServerLoad;