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
	<div class="flex grow-1 flex-col gap-1 px-3 pt-3">
		{#each expressionLogArray as logLine}
			<div class="grid grid-cols-[1fr_auto] text-zinc-500">
				<div class="flex gap-1">
					<span class="font-bold text-zinc-400">∴</span>
					<div class="justify-self-center font-semibold">{logLine.v}</div>
				</div>
				<div class="ml-4 flex flex-row">
					<RecursiveExpression exp={logLine.ex} />
				</div>
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
