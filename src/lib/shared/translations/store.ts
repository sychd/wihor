import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { withPrefix } from '$lib/shared/utils/with-prefix';
import { setLocale } from '$lib/shared/translations/i18n';

type Language = 'en' | 'uk-UA';
const defaultValue: Language = 'en';
const key = withPrefix('language');

const initialValue = browser ? window.localStorage.getItem(key) ?? defaultValue : defaultValue;
const store = writable<Language>(initialValue as Language);

store.subscribe((value: Language) => {
	if (browser) {
		setLocale(value);
		window.localStorage.setItem(key, value);
	}
});

export { store, type Language };
