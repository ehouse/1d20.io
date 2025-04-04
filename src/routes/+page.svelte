<script lang="ts">
	import DisplayExpression from '$lib/DisplayExpression.svelte';
	import DisplayStats from '$lib/DisplayStats.svelte';
	import Input from '$lib/Input.svelte';
	import { safeParse } from '$lib/SafeParse';

	let inputState = $state('');
	let evaluatedExpression = $state(safeParse(''));
</script>

<div class="mx-auto max-w-3xl pt-4">
	<Input
		value={inputState}
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
			if (e.key === 'Enter' && evaluatedExpression) {
				inputState = String(evaluatedExpression.v);
				evaluatedExpression = safeParse(inputState);
			}
		}}
	/>
	{#if evaluatedExpression}
		<div class="flex flex-row gap-2 p-1 pt-2 text-lg text-zinc-800">
			<div class="flex grow-1 flex-row gap-1">
				<DisplayExpression exp={evaluatedExpression.ex} />
				<span>=</span>
				<div>{evaluatedExpression.v}</div>
			</div>
			<DisplayStats
				min={evaluatedExpression.stats.min}
				max={evaluatedExpression.stats.max}
				avg={evaluatedExpression.stats.avg}
			/>
		</div>
	{/if}
</div>
