<script lang="ts">
	import { t } from '$lib/shared/translations';
</script>

<div class="navbar bg-base-100 p-0">
	<head class="flex-1">
		<a class="btn btn-ghost text-xl">{$t('common.greeting')}</a>
	</head>
	<nav class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li><a href="/settings">{$t('common.settings')}</a></li>
			<li><a href="/session">{$t('common.session')}</a></li>
		</ul>
	</nav>
</div>