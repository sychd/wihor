<script lang="ts">
	import '../app.css';
	import ThemeController from '$lib/feature/shell-layout/ThemeToggle.svelte';
</script>

<div class="container mx-auto max-w-screen-sm px-4 border-1">
	<div class="container flex flex-row justify-end py-2">
		<ThemeController />
	</div>
	<slot />
</div>
