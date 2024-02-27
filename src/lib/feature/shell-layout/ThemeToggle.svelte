<script lang="ts">
	import theme from '$lib/shared/stores/theme';

	$: isDark = $theme === 'dark';
</script>

<label class="flex cursor-pointer gap-2">
	<input
		checked={isDark}
		class="toggle theme-controller bg-amber-300
		 border-sky-400 [--tglbg:theme(colors.sky.500)]
		 checked:bg-blue-300 checked:border-blue-800
		 checked:[--tglbg:theme(colors.blue.900)]
		 row-start-1 col-start-1 col-span-2"
		on:click={theme.toggle}
		type="checkbox"
		value="light"
	/>
</label>