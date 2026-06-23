<script lang="ts">
	import { base } from '$app/paths';

	type Tarif = 'plus' | 'basis' | null;
	type Ansicht = 'praxis' | 'erklaerung';

	let ansicht = $state<Ansicht>('praxis');
	let tarif = $state<Tarif>(null);
	let agbAkzeptiert = $state(false);
	let abgeschlossen = $state(false);
	let popupSichtbar = $state(false);

	$effect(() => {
		const t = setTimeout(() => (popupSichtbar = true), 3000);
		return () => clearTimeout(t);
	});

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

{#if popupSichtbar}
	<div class="popup-overlay">
		<div class="popup" role="alertdialog" aria-modal="true" aria-label="Gewinnbenachrichtigung">
			<button class="popup__close" type="button" onclick={() => (popupSichtbar = false)} aria-label="Schließen">✕</button>
			<a
				class="popup__link"
				href={`${base}/misdirection/gewinn`}
			>
				🎉 You won a free URS Edition Ryzen 4070!
			</a>
		</div>
	</div>
{/if}

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
					<ul class="tarif__liste">
						<li>Unbegrenzter Cloud-Speicher für Projekte</li>
						<li>KI-Lernassistenz mit Sofort-Feedback</li>
						<li>Priorisierte Abgabe-Checks vor Prüfungen</li>
						<li>Eltern- und Lehrkraft-Reports in Echtzeit</li>
					</ul>
					<p class="tarif__vorteil">So verpasst du keine Frist und bist bei Tests immer vorbereitet.</p>
				</button>

				<button
					type="button"
					class={`tarif tarif--dezent ${tarif === 'basis' ? 'tarif--aktiv' : ''}`}
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

	.tarif--dezent {
		width: 86%;
		justify-self: start;
		padding: var(--space-3);
		background: var(--neutral-50);
		opacity: 0.82;
	}

	.tarif--dezent .tarif__name {
		font-size: var(--text-sm);
	}

	.tarif--dezent .tarif__preis {
		font-size: var(--text-base);
	}

	.tarif--dezent .tarif__hinweis {
		font-size: var(--text-xs);
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

	.tarif__liste {
		margin: var(--space-3) 0 var(--space-2);
		padding-left: var(--space-4);
		display: grid;
		gap: var(--space-1);
		font-size: var(--text-sm);
		color: var(--text-body);
	}

	.tarif__vorteil {
		margin: 0;
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--color-primary);
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

	.popup-overlay {
		position: fixed;
		bottom: var(--space-6);
		right: var(--space-6);
		z-index: 100;
	}

	.popup {
		position: relative;
		background: var(--color-surface);
		border: var(--border-width) solid var(--color-highlight);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-xl);
		padding: var(--space-6) var(--space-8);
		max-width: min(90vw, 26rem);
		text-align: center;
	}

	.popup__close {
		position: absolute;
		top: var(--space-2);
		right: var(--space-2);
		background: none;
		border: none;
		font-size: var(--text-base);
		color: var(--text-muted);
		cursor: pointer;
		line-height: 1;
		padding: var(--space-1);
		border-radius: var(--radius-pill);
		transition: color var(--duration-fast) var(--ease-standard);
	}

	.popup__close:hover {
		color: var(--text-strong);
	}

	.popup__link {
		display: block;
		font-family: var(--font-display);
		font-size: var(--text-lg);
		font-weight: var(--fw-bold);
		color: var(--color-primary);
		text-decoration: underline;
	}

	.popup__link:hover {
		color: var(--color-primary-hover);
	}
</style>
