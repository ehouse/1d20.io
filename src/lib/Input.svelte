<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	let { value = $bindable(), ...props }: HTMLInputAttributes = $props();
</script>

<input
	class={twMerge([
		'text-lg shadow-sm',
		'border border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500',
		'w-full rounded-lg bg-gray-50 p-2.5 text-zinc-900',
		'outline-hidden'
	])}
	bind:value
	{...props}
/>
