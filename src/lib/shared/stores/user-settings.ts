import { readable } from 'svelte/store';

interface UserSettings {
	breathLength: number;
}

export default readable<UserSettings>({
	breathLength: 1800
});
