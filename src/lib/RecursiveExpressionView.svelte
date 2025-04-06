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
	<div>&#91;{exp.results.toString().replaceAll(',', ' ')}&#93;</div>
{:else if exp.tag === 'math'}
	<Self exp={exp.left} />
	<div class="mx-1">{exp.op}</div>
	<Self exp={exp.right} />
{/if}
