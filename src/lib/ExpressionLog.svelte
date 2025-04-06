<script lang="ts">
	import type { EvaluatedExpression } from 'mini-diceroller';
	import RecursiveExpression from './RecursiveExpressionView.svelte';

	interface props {
		expressionLogArray: EvaluatedExpression[];
	}

	let { expressionLogArray }: props = $props();
</script>

<div class="flex flex-col gap-1 pt-3 text-zinc-600">
	{#each expressionLogArray as logLine}
		<div class="flex grow-1 flex-row gap-1">
			<p class="pr-2 text-zinc-400">∴</p>
			<RecursiveExpression exp={logLine.ex} />
			<span>=</span>
			<div>{logLine.v}</div>
		</div>
	{/each}
</div>
