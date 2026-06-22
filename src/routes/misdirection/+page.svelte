<script lang="ts">
	import { base } from '$app/paths';

	type Tarif = 'plus' | 'basis' | null;
	type Ansicht = 'praxis' | 'erklaerung';

	let ansicht = $state<Ansicht>('praxis');
	let tarif = $state<Tarif>(null);
	let agbAkzeptiert = $state(false);
	let abgeschlossen = $state(false);

	const tarifNamen = {
		plus: 'SchulCloud Plus',
		basis: 'SchulCloud Basis'
	} satisfies Record<Exclude<Tarif, null>, string>;

	const kannAbschliessen = $derived(tarif !== null && agbAkzeptiert);

	function anmeldungAbschliessen() {
		if (!kannAbschliessen) return;
		abgeschlossen = true;
	}
</script>

<main class={`seite ${ansicht === 'praxis' ? 'seite--praxis' : ''}`}>
	{#if ansicht === 'praxis'}
		<section class="karte praxis">
			<h1 class="titel">SchulCloud anmelden</h1>

			<div class="tarife">
				<button
					type="button"
					class={`tarif ${tarif === 'plus' ? 'tarif--aktiv tarif--hervorgehoben' : 'tarif--hervorgehoben'}`}
					onclick={() => (tarif = 'plus')}
				>
					<p class="tarif__name">SchulCloud Plus</p>
					<p class="tarif__preis">12,90 € / Monat</p>
					<p class="tarif__hinweis">Empfohlen für alle Klassen</p>
				</button>

				<button
					type="button"
					class={`tarif ${tarif === 'basis' ? 'tarif--aktiv' : ''}`}
					onclick={() => (tarif = 'basis')}
				>
					<p class="tarif__name">SchulCloud Basis</p>
					<p class="tarif__preis">4,90 € / Monat</p>
					<p class="tarif__hinweis">eingeschränkte Funktionen</p>
				</button>
			</div>

			<label class="checkbox">
				<input type="checkbox" bind:checked={agbAkzeptiert} />
				<span>Ich akzeptiere die Nutzungsbedingungen.</span>
			</label>

			{#if !abgeschlossen}
				<button class="aktion" type="button" disabled={!kannAbschliessen} onclick={anmeldungAbschliessen}>
					Anmeldung abschließen
				</button>
			{:else}
				<p class="erfolg">
					Fertig: Du hast <strong>{tarif ? tarifNamen[tarif] : ''}</strong> ausgewählt.
				</p>
				<button class="aktion" type="button" onclick={() => (ansicht = 'erklaerung')}>
					Zur Erklärung
				</button>
			{/if}

			<a class="zurueck" href={`${base}/`}>Zur Hauptseite</a>
		</section>
	{:else}
		<section class="karte erklaerung">
			<p class="eyebrow">Erklärung</p>
			<h2>Was ist Misdirection?</h2>
			<p>
				<strong>Misdirection</strong> lenkt deine Aufmerksamkeit gezielt auf eine gewünschte Aktion und macht
				Alternativen unauffällig.
			</p>
			<p>
				Im Praxisbeispiel war das Plus-Paket größer, farblich stärker und als Empfehlung markiert. Das
				Basis-Paket war deutlich zurückhaltender gestaltet.
			</p>
			<p>
				So wirkt die Entscheidung frei, obwohl die visuelle Gestaltung dich in eine Richtung drückt.
			</p>
			<button class="sekundaer" type="button" onclick={() => (ansicht = 'praxis')}>
				Praxisbeispiel erneut starten
			</button>
			<a class="zurueck" href={`${base}/`}>Zur Hauptseite</a>
		</section>
	{/if}
</main>

<style>
	.seite {
		max-width: var(--container-lg);
		margin: 0 auto;
		padding: var(--space-8) var(--space-4);
	}

	.seite--praxis {
		min-height: calc(100vh - var(--space-8));
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.karte {
		width: min(100%, 46rem);
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-sm);
		padding: var(--space-6);
		display: grid;
		gap: var(--space-4);
	}

	.titel {
		margin: 0;
		font-size: var(--text-2xl);
	}

	.tarife {
		display: grid;
		gap: var(--space-3);
	}

	.tarif {
		text-align: left;
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		background: var(--color-bg);
		cursor: pointer;
		transition:
			border-color var(--duration-base) var(--ease-standard),
			box-shadow var(--duration-base) var(--ease-standard),
			transform var(--duration-fast) var(--ease-standard);
	}

	.tarif--hervorgehoben {
		border-color: var(--color-primary);
		box-shadow: var(--shadow-md);
		background: var(--color-sky-soft);
	}

	.tarif--aktiv {
		border-color: var(--color-highlight);
		box-shadow: var(--shadow-md);
	}

	.tarif:active {
		transform: scale(0.99);
	}

	.tarif__name {
		margin: 0 0 var(--space-1);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
	}

	.tarif__preis {
		margin: 0 0 var(--space-1);
		font-size: var(--text-md);
		font-weight: var(--fw-semibold);
		color: var(--text-strong);
	}

	.tarif__hinweis {
		margin: 0;
		font-size: var(--text-sm);
		color: var(--text-muted);
	}

	.checkbox {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		color: var(--text-body);
	}

	.aktion,
	.sekundaer {
		border: none;
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-4);
		font-family: var(--font-body);
		font-size: var(--text-base);
		font-weight: var(--fw-semibold);
		cursor: pointer;
		transition:
			background-color var(--duration-base) var(--ease-standard),
			color var(--duration-base) var(--ease-standard),
			transform var(--duration-fast) var(--ease-standard);
	}

	.aktion {
		background: var(--color-primary);
		color: var(--color-on-primary);
	}

	.aktion:hover {
		background: var(--color-primary-hover);
	}

	.aktion:disabled {
		background: var(--neutral-300);
		color: var(--text-muted);
		cursor: not-allowed;
	}

	.sekundaer {
		background: var(--color-highlight);
		color: var(--color-on-highlight);
	}

	.sekundaer:hover {
		background: var(--color-highlight-hover);
	}

	.aktion:active,
	.sekundaer:active {
		transform: scale(0.98);
	}

	.erfolg {
		margin: 0;
		padding: var(--space-3);
		border-radius: var(--radius-md);
		background: var(--color-success-soft);
		color: var(--text-strong);
	}

	.eyebrow {
		margin: 0;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--color-primary);
	}

	.erklaerung h2 {
		margin: 0;
	}

	.erklaerung p {
		margin: 0;
	}

	.zurueck {
		justify-self: start;
		font-size: var(--text-sm);
		color: var(--color-primary);
	}

	.zurueck:hover {
		color: var(--color-primary-hover);
	}
</style>
