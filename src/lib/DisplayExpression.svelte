<script lang="ts">
	import type { EvaluatedExpression } from 'mini-diceroller';
	import RecursiveExpressionView from './RecursiveExpressionView.svelte';

	interface props {
		expression: EvaluatedExpression;
	}

	let { expression }: props = $props();
</script>

<div>
	<p class="font-bold">{expression.v}</p>
	<div class="flex tracking-wider">
		<RecursiveExpressionView exp={expression.ex} />
	</div>
</div>
