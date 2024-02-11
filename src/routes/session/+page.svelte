<script lang="ts">
	import Timer from './Timer.svelte';
	import stopwatch, { time, breath } from '$lib/feature/session/stores/stopwatch';
	import ControlPanel from './ControlPanel.svelte';


	let isTimeShown = true;
	$: value = isTimeShown ? time : breath;
</script>

<article
	class="container flex mx-auto bg-opacity-30
	 bg-base-300 border border-solid border-base-300
	 border-opacity-30 opacity-75 blur-3 rounded p-4 flex-1"
>
	<section class="flex flex-col items-center justify-center flex-1">
		<div class="flex items-center justify-center w-full flex-1">
			<Timer time={$value}></Timer>
		</div>
		<ControlPanel
			on:pause={() => stopwatch.pause()}
			on:play={() => stopwatch.start()}
			on:toggle={() => (isTimeShown = !isTimeShown)}
		/>
	</section>
</article>
