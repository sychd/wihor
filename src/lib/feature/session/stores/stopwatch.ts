import { derived, writable } from 'svelte/store';
import useStopwatch from '$lib/feature/session/services/stopwatch';
import useTimespanFormatter from '$lib/feature/session/services/timespan-formatter';
import userSettings from '$lib/shared/stores/user-settings';

const formatter = useTimespanFormatter();
const milliseconds = writable(0);
const stopwatch = useStopwatch((ms) => milliseconds.set(ms));

export const time = derived(milliseconds, ($ms) => formatter.mmss($ms));
export const breath = derived([milliseconds, userSettings], ([$ms, $settings]) =>
	formatter.relative($ms, $settings.breathLength)
);

export default {
	...milliseconds,
	start: stopwatch.start,
	pause: stopwatch.pause
};
