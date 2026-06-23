<script lang="ts">
	import { base } from '$app/paths';

	let rabattAuswahl = $state<'ja' | 'nein' | null>(null);
	let newsletterAuswahl = $state<'ja' | 'nein' | null>(null);
</script>

<svelte:head>
	<title>Beispiele – Trick Questions</title>
</svelte:head>

<div class="min-h-screen" style="background-color: var(--color-violet-soft)">
	<section class="container mx-auto max-w-5xl px-6 pt-10 pb-12">
		<div class="mb-8 flex flex-wrap items-center gap-4">
			<a
				href={`${base}/trickquestions`}
				class="inline-block rounded-full px-5 py-2 text-sm font-bold tracking-wide uppercase transition-transform hover:scale-105"
				style="background-color: var(--color-surface); color: var(--color-violet); border: 1px solid var(--border)"
			>
				Zurück zu Trick Questions
			</a>
		</div>

		<div
			class="mb-8 rounded-lg p-8"
			style="background: var(--gradient-violet); color: var(--text-inverse)"
		>
			<p class="mb-2 text-xs font-bold tracking-wider uppercase">Interaktive Demo</p>
			<h1
				class="mb-3 text-3xl font-bold uppercase md:text-4xl"
				style="font-family: var(--font-display)"
			>
				Interaktive Beispiele
			</h1>
			<p class="max-w-3xl" style="color: var(--text-inverse)">
				Klicke die Buttons an und beobachte, wie die Formulierung die Entscheidung beeinflussen
				kann.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<div
				class="rounded-lg border p-6 shadow-sm"
				style="border-color: var(--border); background-color: var(--color-surface)"
			>
				<p class="mb-3 font-bold" style="color: var(--text-strong)">Willst du 10 % sparen?</p>
				<div class="mb-3 flex flex-wrap gap-3">
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:scale-105"
						style={rabattAuswahl === 'ja'
							? 'background-color: var(--color-violet); color: var(--text-inverse); box-shadow: var(--shadow-sm)'
							: 'background-color: var(--color-violet); color: var(--text-inverse)'}
						onclick={() => (rabattAuswahl = 'ja')}
					>
						Ja, Rabatt sichern
					</button>
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:scale-105"
						style={rabattAuswahl === 'nein'
							? 'background-color: var(--color-surface); color: var(--text-body); border: 1px solid var(--border); box-shadow: var(--shadow-sm)'
							: 'background-color: var(--color-surface); color: var(--text-body); border: 1px solid var(--border)'}
						onclick={() => (rabattAuswahl = 'nein')}
					>
						Nein, ich zahle lieber mehr
					</button>
				</div>
				{#if rabattAuswahl}
					<p
						class="rounded-lg p-3 text-sm"
						style="background-color: var(--color-violet-soft); color: var(--text-body)"
					>
						Ausgewählt: {rabattAuswahl === 'ja'
							? 'Ja, Rabatt sichern'
							: 'Nein, ich zahle lieber mehr'}
					</p>
				{/if}
			</div>

			<div
				class="rounded-lg border p-6 shadow-sm"
				style="border-color: var(--border); background-color: var(--color-surface)"
			>
				<p class="mb-3 font-bold" style="color: var(--text-strong)">
					Möchtest du unseren Newsletter abonnieren?
				</p>
				<div class="mb-3 flex flex-wrap gap-3">
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:scale-105"
						style={newsletterAuswahl === 'ja'
							? 'background-color: var(--color-violet); color: var(--text-inverse); box-shadow: var(--shadow-sm)'
							: 'background-color: var(--color-violet); color: var(--text-inverse)'}
						onclick={() => (newsletterAuswahl = 'ja')}
					>
						Ja, exklusive Tipps erhalten
					</button>
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:scale-105"
						style={newsletterAuswahl === 'nein'
							? 'background-color: var(--color-surface); color: var(--text-body); border: 1px solid var(--border); box-shadow: var(--shadow-sm)'
							: 'background-color: var(--color-surface); color: var(--text-body); border: 1px solid var(--border)'}
						onclick={() => (newsletterAuswahl = 'nein')}
					>
						Nein, ich verzichte auf Informationen
					</button>
				</div>
				{#if newsletterAuswahl}
					<p
						class="rounded-lg p-3 text-sm"
						style="background-color: var(--color-violet-soft); color: var(--text-body)"
					>
						Ausgewählt: {newsletterAuswahl === 'ja'
							? 'Ja, exklusive Tipps erhalten'
							: 'Nein, ich verzichte auf Informationen'}
					</p>
				{/if}
			</div>
		</div>
	</section>
</div>
