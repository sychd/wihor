import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { withPrefix } from '$lib/shared/utils/with-prefix';

type ColorTheme = 'light' | 'dark';
const defaultValue: ColorTheme = 'dark';
const key = withPrefix('theme');


const initialValue = browser ? window.localStorage.getItem(key) ?? defaultValue : defaultValue;
const theme = writable<ColorTheme>(initialValue as ColorTheme);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem(key, value);
	}
});

export default {
	...theme,
	toggle() {
		theme.update((value) => (value === 'light' ? 'dark' : 'light'));
	}
};
