<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { base } from '$app/paths';

	let { value = $bindable(), ...props }: HTMLInputAttributes = $props();
</script>

<div class="relative">
	<button
		onclick={() => (value = '')}
		class="absolute top-3 right-3 cursor-pointer rounded-full p-1 text-gray-800"
	>
		<img alt="Reset Input" src={`${base}/reset.svg`} class="max-w-4" />
	</button>
	<input
		class={twMerge(
			'text-lg shadow-sm',
			'border border-zinc-400 focus:border-zinc-500 focus:ring-zinc-800',
			'w-full rounded bg-gray-50 px-2.5 py-2 text-zinc-900',
			'outline-hidden'
		)}
		bind:value
		{...props}
	/>
</div>
