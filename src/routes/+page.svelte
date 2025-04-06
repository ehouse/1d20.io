<script lang="ts">
	import DisplayExpression from '$lib/DisplayExpression.svelte';
	import DisplayStats from '$lib/DisplayStats.svelte';
	import ExpressionLog from '$lib/ExpressionLog.svelte';
	import Input from '$lib/Input.svelte';
	import { safeParse } from '$lib/SafeParse';
	import type { EvaluatedExpression } from 'mini-diceroller';

	let inputState = $state('');
	let evaluatedExpression = $state(safeParse(''));
	let expressionLogArray = $state<EvaluatedExpression[]>([]);
</script>

<div class="mx-auto max-w-2xl pt-4">
	<Input
		bind:value={inputState}
		placeholder="1d20 + 5"
		type="text"
		oninput={(
			e: Event & {
				currentTarget: EventTarget & HTMLInputElement;
			}
		) => {
			evaluatedExpression = safeParse(e.currentTarget.value, evaluatedExpression);
		}}
		onkeydown={(e) => {
			if (e.shiftKey && e.key === 'Enter' && evaluatedExpression) {
				inputState = String(evaluatedExpression.v);
				evaluatedExpression = safeParse(inputState);
			} else if (e.key === 'Enter' && evaluatedExpression) {
				if (expressionLogArray.length === 8) {
					expressionLogArray.pop();
				}
				expressionLogArray.unshift(evaluatedExpression);
				evaluatedExpression = safeParse(inputState);
			}
		}}
	/>
	<div class="mt-2 min-h-18 rounded border border-zinc-300 bg-gray-100 px-2.5 py-3.5 shadow-sm">
		<div class="flex flex-row gap-2 text-lg text-zinc-800">
			<div class="flex flex-grow">
				<div class="mr-2 inline-block min-h-14 min-w-1 self-stretch bg-rose-400"></div>
				{#if evaluatedExpression}
					<DisplayExpression expression={evaluatedExpression} />
				{/if}
			</div>
			<DisplayStats
				min={evaluatedExpression?.stats.min ?? 0}
				max={evaluatedExpression?.stats.max ?? 0}
				avg={evaluatedExpression?.stats.avg ?? 0}
			/>
		</div>
		{#if expressionLogArray.length > 0}
			<ExpressionLog
				{expressionLogArray}
				clearExpressionLog={() => {
					expressionLogArray = [];
				}}
			/>
		{/if}
	</div>
</div>
