import { writable } from 'svelte/store';
import useStopwatch from '$lib/feature/session/services/stopwatch';
import useTimespanFormatter from '$lib/feature/session/services/timespan-formatter';

const formatter = useTimespanFormatter();
const milliseconds = writable(formatter.mmss(0));
const stopwatch = useStopwatch((ms) => milliseconds.set(formatter.mmss(ms)));

export default {
	...milliseconds,
	start: stopwatch.start,
	pause: stopwatch.pause
};
