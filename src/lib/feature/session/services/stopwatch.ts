interface Round {
	start: number;
	end: number | null;
}

interface RoundsData {
	rounds: Record<number, Round>;
	current: number;
}

interface StopwatchService {
	reset: () => void;
	start: () => void;
	pause: () => void;
	stop: () => void;
	round: () => void;
	getRounds: () => RoundsData;
	isStopped: boolean;
	isPaused: boolean;
	ms: number;
}

const MS = 1;
export default function useStopwatch(onUpdate: (ms: number) => void = () => 0): StopwatchService {
	let isRunning = false;
	let isPaused = false;
	let startTime = 0;
	let elapsedTime = 0;
	let intervalId: number | null = null;
	let rounds: RoundsData = { rounds: {}, current: 0 };

	const reset = () => {
		isRunning = false;
		isPaused = false;
		startTime = 0;
		elapsedTime = 0;
		rounds = { rounds: {}, current: 0 };
		clearInterval(intervalId!);
		intervalId = null;
	};

	const start = () => {
		if (!isRunning) {
			startTime = Date.now() - elapsedTime;
			intervalId = setInterval(() => {
				elapsedTime = isPaused ? elapsedTime : Date.now() - startTime;
				onUpdate(elapsedTime);
			}, MS);
			isRunning = true;
			isPaused = false;
		}
	};

	const pause = () => {
		if (isRunning && !isPaused) {
			isPaused = true;
			isRunning = false;
			clearInterval(intervalId!);
			intervalId = null;
		}
	};

	const stop = () => {
		if (isRunning) {
			isRunning = false;
			isPaused = false;
			clearInterval(intervalId!);
			intervalId = null;
			elapsedTime = Date.now() - startTime;
			startTime = 0;
		}
	};

	const round = () => {
		if (isRunning) {
			rounds.rounds[rounds.current] = { start: startTime, end: Date.now() };
			rounds.current++;
		}
	};

	const getRounds = (): RoundsData => {
		return rounds;
	};

	const isStopped = !isRunning && !isPaused;

	return {
		reset,
		start,
		pause,
		stop,
		round,
		getRounds,
		isStopped,
		isPaused,
		ms: elapsedTime
	};
}
