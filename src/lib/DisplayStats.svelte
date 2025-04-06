<script lang="ts">
	interface props {
		min: number;
		max: number;
		avg: number;
	}
	let { min, max, avg }: props = $props();
</script>

<div class="flex flex-row items-baseline gap-2">
	<div class="rounded border border-rose-800 bg-rose-700 px-2 font-mono text-red-100 shadow-sm">
		min: {min}
	</div>
	<div class="rounded border border-rose-800 bg-rose-700 px-2 font-mono text-red-100 shadow-sm">
		max: {max}
	</div>
	<div class="rounded border border-rose-800 bg-rose-700 px-2 font-mono text-red-100 shadow-sm">
		avg: {Math.round(avg)}
	</div>
</div>
