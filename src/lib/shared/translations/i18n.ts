import type { Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (
				await import('./en/common.json')
			).default
		},
		{
			locale: 'uk-UA',
			key: 'common',
			loader: async () => (
				await import('./ua/common.json')
			).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations, setLocale } = new i18n(config);

export const TRANSLATIONS = [
	{
		locale: 'en',
		label: 'EN'
	},
	{
		locale: 'uk-UA',
		label: 'UA'
	}] as const;