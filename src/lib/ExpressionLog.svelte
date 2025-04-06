<script lang="ts">
	import type { EvaluatedExpression } from 'mini-diceroller';
	import RecursiveExpression from './RecursiveExpressionView.svelte';
	import { base } from '$app/paths';
	import { shortcuts } from 'svelte-keyboard-shortcuts';

	interface props {
		expressionLogArray: EvaluatedExpression[];
		clearExpressionLog: () => void;
	}

	let { expressionLogArray, clearExpressionLog }: props = $props();
</script>

<div class="flex items-baseline">
	<div class="flex grow-1 flex-col gap-1 pt-3 text-zinc-600">
		{#each expressionLogArray as logLine}
			<div class="flex grow-1 flex-row gap-1">
				<p class="pr-2 text-zinc-400">∴</p>
				<RecursiveExpression exp={logLine.ex} />
				<span>=</span>
				<div>{logLine.v}</div>
			</div>
		{/each}
	</div>
	<button
		use:shortcuts={{ keys: ['r'] }}
		class="mr-2 cursor-pointer rounded-full p-1 text-gray-800"
		onclick={clearExpressionLog}
	>
		<img alt="Reset History" src={`${base}/reset.svg`} class="max-w-4" />
	</button>
</div>
