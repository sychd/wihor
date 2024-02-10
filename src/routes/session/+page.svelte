<script lang="ts">
	import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-svelte';
	import Timer from './Timer.svelte';
	import stopwatch from '$lib/feature/session/stores/stopwatch';
</script>

<article
	class="container flex mx-auto bg-opacity-30 bg-base-300 border border-solid border-base-300 border-opacity-30 opacity-75 blur-3 rounded p-4 flex-1"
>
	<section class="flex flex-col items-center justify-center flex-1">
		<div class="flex items-center justify-center w-full flex-1">
			<Timer time={$stopwatch}></Timer>
		</div>
		<div>
			<button on:click={stopwatch.start}>
				<IconPlayerPlayFilled />
			</button>
			<button on:click={stopwatch.pause}>
				<IconPlayerPauseFilled />
			</button>
		</div>
	</section>
</article>
