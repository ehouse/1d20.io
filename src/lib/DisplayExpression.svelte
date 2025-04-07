<script lang="ts">
	import type { EvaluatedExpression } from 'mini-diceroller';
	import RecursiveExpressionView from './RecursiveExpressionView.svelte';

	interface props {
		expression: EvaluatedExpression;
	}

	let { expression }: props = $props();
</script>

<div>
	<div class="flex gap-1">
		<span class="font-bold text-zinc-400">∴</span>
		<p class="font-bold">{expression.v}</p>
	</div>
	<div class="flex text-zinc-700">
		<RecursiveExpressionView exp={expression.ex} />
	</div>
</div>
