export default function useTimespanFormatter() {
	function mmss(ms: number): string {
		const totalSeconds = Math.floor(ms / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	function relative(ms: number, divideToMs: number): string {
		return (Math.floor(ms / divideToMs) + 1).toString();
	}

	return { mmss, relative };
}
