<script lang="ts">
	import '../app.css';
	import ThemeController from '$lib/feature/shell-layout/ThemeToggle.svelte';
	import LanguageSelector from '$lib/feature/shell-layout/LanguageSelector.svelte';
</script>

<div class="container mx-auto max-w-screen-sm px-4 border-1 flex flex-col flex-1 gap-2 p-4">
	<div class="container flex flex-row justify-end gap-2">
		<ThemeController />
		<LanguageSelector />
	</div>
	<slot />
</div>
