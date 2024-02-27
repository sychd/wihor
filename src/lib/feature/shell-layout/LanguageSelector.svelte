<script lang="ts">
	import { store } from '$lib/shared/translations';
	import { TRANSLATIONS } from '$lib/shared/translations/index.js';

</script>

<div class="flex flex-row gap-1">
	{#each TRANSLATIONS as { label, locale }, i}
		<button
			class="btn btn-xs"
			class:btn-ghost={$store !== locale}
			class:btn-neutral={$store === locale}
			on:click={() => store.set(locale)}>{label}
		</button>
		{#if i !== TRANSLATIONS.length - 1}<span>|</span>{/if}
	{/each}
</div>