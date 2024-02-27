import { type Load } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { loadTranslations, store } from '$lib/shared/translations';

export const load: Load = async ({ url }) => {
	await loadTranslations(get(store), url.pathname);
};