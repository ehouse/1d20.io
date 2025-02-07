<script>
	import DisplayExpression from '$lib/DisplayExpression.svelte';
	import Input from '$lib/Input.svelte';
	import { exec } from 'mini-diceroller';

	let inputState = $state('');
	let expression = $derived.by(() => {
		try {
			return exec(inputState);
		} catch (e) {}
	});
</script>

<div class="p-2">
	<Input bind:value={inputState} placeholder="1d20 + 5" type="text" />
	{#if expression}
		<div class="flex gap-1 p-1 text-lg text-zinc-800">
			<DisplayExpression exp={expression[0]} />
			<span>=</span>
			<div>{expression[1]}</div>
		</div>
	{/if}
</div>
