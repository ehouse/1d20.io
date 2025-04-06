<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	let { value = $bindable(), ...props }: HTMLInputAttributes = $props();
</script>

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
