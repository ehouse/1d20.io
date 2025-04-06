<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { twMerge } from 'tailwind-merge';
	import { Shortcuts } from 'svelte-keyboard-shortcuts';

	let { children } = $props();
	let showHelpModal = $state(false);
</script>

<Shortcuts options={{ generateKbd: false }} />

<div class=" mx-auto flex w-full max-w-3xl justify-end gap-2 pt-2">
	<button type="button" class="hover:cursor-pointer" onclick={() => (showHelpModal = true)}>
		<img alt="Help" src={`${base}/help-circle-svgrepo-com.svg`} class="max-w-8" />
	</button>
	<a href="https://github.com/ehouse/1d20.io" class="rounded-full pt-1">
		<img alt="Github Project" src={`${base}/github-mark.svg`} class="max-w-6" />
	</a>
</div>

<div
	class={twMerge('z-10', showHelpModal ? 'relative' : 'hidden')}
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
	<div
		class="fixed inset-0 z-10 w-screen overflow-y-auto"
		onclick={() => (showHelpModal = false)}
		onkeydown={() => (showHelpModal = false)}
		role="button"
		tabindex="0"
	>
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<div
				class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
			>
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<h3
								class="flex flex-row gap-1 pb-2 text-base font-semibold text-gray-900"
								id="modal-title"
							>
								<img class="max-w-4" src={`${base}/dice-d20.svg`} alt="" />
								1d20.io - Instructions
							</h3>
							<div class="mt-2 flex flex-col gap-4">
								<div class="flex flex-col gap-2">
									<p>Types of Expressions</p>
									<div>
										<p class="text-sm text-gray-500">
											Expressions are constructions of natural numbers and dice rolls. The
											expression is always evaluated following PEMDAS order.
										</p>
										<p class="pt-1 text-sm">
											<code class="tracking-wide">1d20 + 2d6 * 2</code>
										</p>
									</div>
									<div>
										<p class="text-sm text-gray-500">Parentheses work as you'd expect them too.</p>
										<p class="pt-1 text-sm"><code class="tracking-wide">(2d6 + 6) * 2</code></p>
									</div>
									<div>
										<p class="text-sm text-gray-500">
											Prefixing a die roll with ^ will roll two of the dice, and drop the lowest.
											Prefixing with a v will drop the highest die roll.
										</p>
										<p class="pt-1 text-sm"><code class="tracking-wide">^d20 + 12</code></p>
									</div>
								</div>
								<div class="flex flex-col gap-1">
									<p>About</p>
									<p class="text-sm text-gray-500">
										Written by <a href="https://github.com/ehouse">Evelyn House</a> to be easily embeddable
										in documents. Always have a calculator at hand when writing notes in Notion or ObsidianMD.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{@render children()}
