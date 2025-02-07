<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	let { value = $bindable(), ...props }: HTMLInputAttributes = $props();
</script>

<input
	class={twMerge([
		'active block w-full rounded-lg border border-zinc-300 bg-gray-50 p-2.5 text-sm text-zinc-900 focus:border-zinc-500 focus:ring-zinc-500',
		'outline-none'
	])}
	bind:value
	{...props}
/>
