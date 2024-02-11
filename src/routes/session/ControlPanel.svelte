<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { IconPlayerPauseFilled, IconPlayerPlayFilled, IconSwitch } from '@tabler/icons-svelte';

	const dispatch = createEventDispatcher();
</script>


<div>
	<button on:click={() => dispatch('play')}>
		<IconPlayerPlayFilled />
	</button>
	<button on:click={() => dispatch('pause')}>
		<IconPlayerPauseFilled />
	</button>
	<button on:click={() => dispatch('toggle')}>
		<IconSwitch />
	</button>
</div>
