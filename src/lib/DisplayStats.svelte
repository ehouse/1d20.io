<script lang="ts">
	interface props {
		min: number;
		max: number;
		avg: number;
	}
	let { min, max, avg }: props = $props();
</script>

<div class="flex flex-row items-center gap-2">
	<div class="rounded border border-amber-700 bg-amber-600 px-2 text-amber-100 shadow-sm">
		min: {min}
	</div>
	<div class="rounded border border-amber-700 bg-amber-600 px-2 text-amber-100 shadow-sm">
		max: {max}
	</div>
	<div class="rounded border border-amber-700 bg-amber-600 px-2 text-amber-100 shadow-sm">
		avg: {Math.round(avg)}
	</div>
</div>
