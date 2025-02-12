<script>
	import DisplayExpression from '$lib/DisplayExpression.svelte';
	import DisplayStats from '$lib/DisplayStats.svelte';
	import Input from '$lib/Input.svelte';
	import { exec } from 'mini-diceroller';

	let inputState = $state('');
	let evaluatedExpression = $state();

	$effect(() => {
		try {
			if (inputState === '') {
				evaluatedExpression = undefined;
			} else {
				const expression = exec(inputState);
				evaluatedExpression = expression;
			}
		} catch (e) {
			// Do nothing; Continue to display previous results.
		}
	});
</script>

<div class="mx-auto max-w-3xl pt-4">
	<Input bind:value={inputState} placeholder="1d20 + 5" type="text" />
	{#if evaluatedExpression}
		<div class="flex flex-row gap-2 p-1 text-lg text-zinc-800">
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
