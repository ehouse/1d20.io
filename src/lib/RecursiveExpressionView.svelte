<script lang="ts">
	import type { Expression } from 'mini-diceroller';
	import Self from './RecursiveExpressionView.svelte';

	interface props {
		exp: Expression;
	}
	let { exp }: props = $props();
</script>

{#if exp.tag === 'number'}
	<div>{exp.n}</div>
{:else if exp.tag === 'rollValue'}
	{#if exp.results.length > 100}
		<div>
			<span>&#123;</span>
			{exp.results.slice(0, 100).toString().replaceAll(',', ' ')}
			...
			<span>&#125;</span>
		</div>
	{:else}
		<div>
			<span>&#123;</span>
			{exp.results.toString().replaceAll(',', ' ')}
			<span>&#125;</span>
		</div>
	{/if}
{:else if exp.tag === 'math'}
	<Self exp={exp.left} />
	<div class="mx-1">{exp.op}</div>
	<Self exp={exp.right} />
{/if}
