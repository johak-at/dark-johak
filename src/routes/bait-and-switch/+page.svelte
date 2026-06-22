<script lang="ts">
	import { base } from '$app/paths';
	import { markCompleted } from '$lib/progress';

	type Stage = 'offer' | 'unavailable' | 'education';

	let stage = $state<Stage>('offer');
	let baitAttempts = $state(0); // how often the user chased the vanishing deal
	let checking = $state(false);
	let ordered = $state(false); // user confirmed the switched (pricier) product

	const BAIT_PRICE = 49;
	const LIST_PRICE = 1299;
	const SWITCH_PRICE = 899;

	function claimBait() {
		if (checking) return;
		checking = true;
		// Simulate an availability check, then reveal that the lure is "gone".
		setTimeout(() => {
			checking = false;
			baitAttempts += 1;
			stage = 'unavailable';
		}, 900);
	}

	function orderSwitch() {
		ordered = true;
	}

	function waitForBait() {
		// The classic loop: "waiting" simply dangles the same bait again.
		ordered = false;
		stage = 'offer';
	}

	function recognise() {
		stage = 'education';
		markCompleted('bait-and-switch');
	}

	function restart() {
		stage = 'offer';
		baitAttempts = 0;
		checking = false;
		ordered = false;
	}
</script>

<main class="page">
	{#if stage !== 'education'}
		<section class="card">
			<p class="eyebrow">Interaktive Dark-Pattern-Demo</p>
			<h1 class="title">Köder &amp; Tausch</h1>
			<p class="intro">
				Ein unschlagbares Angebot lockt dich an – doch sobald du zugreifst, ist genau dieses Produkt
				„nicht mehr verfügbar". Stattdessen wirst du zu einem deutlich teureren Modell umgeleitet.
				Versuche, das beworbene Schnäppchen tatsächlich zu bekommen.
			</p>

			{#if baitAttempts > 0}
				<p class="attempts">Vergebliche Versuche, den Köder zu sichern: {baitAttempts}</p>
			{/if}

			{#if stage === 'offer'}
				<div class="block">
					<div class="deal">
						<div class="deal__media" aria-hidden="true">
							<span class="deal__badge">Nur heute · −96 %</span>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
								<rect x="2" y="4" width="20" height="13" rx="2" />
								<path d="M2 20h20" />
							</svg>
						</div>
						<div class="deal__body">
							<h2 class="deal__name">Schüler-Notebook Pro 14"</h2>
							<p class="deal__desc">
								Leicht, schnell, ideal für die Schule – und heute zum sensationellen Aktionspreis.
							</p>
							<p class="deal__price">
								<span class="deal__price-now">{BAIT_PRICE} €</span>
								<span class="deal__price-was">statt {LIST_PRICE} €</span>
							</p>
							<p class="deal__stock">Nur noch 2 Stück verfügbar!</p>
						</div>
					</div>

					<div class="actions">
						<button class="primary primary--lg" type="button" disabled={checking} onclick={claimBait}>
							{#if checking}
								Verfügbarkeit wird geprüft …
							{:else}
								Jetzt für {BAIT_PRICE} € sichern
							{/if}
						</button>
					</div>
					<p class="reassurance">Blitzversand · Kostenlose Rücksendung · Käuferschutz</p>
				</div>
			{:else if stage === 'unavailable'}
				<div class="block">
					<div class="notice">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
							<circle cx="12" cy="12" r="10" />
							<line x1="12" y1="8" x2="12" y2="13" />
							<line x1="12" y1="16" x2="12.01" y2="16" />
						</svg>
						<div>
							<strong>Leider vergriffen.</strong>
							Das beworbene Angebot für {BAIT_PRICE} € ist gerade nicht mehr verfügbar.
						</div>
					</div>

					<h2 class="step-title">Aber wir haben etwas für dich reserviert</h2>
					<p class="copy">
						Gute Nachricht: Ein vergleichbares Modell ist <strong>sofort lieferbar</strong> – schnell
						sein lohnt sich, bevor auch das vergriffen ist.
					</p>

					<div class="deal deal--switch">
						<div class="deal__media" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
								<rect x="2" y="4" width="20" height="13" rx="2" />
								<path d="M2 20h20" />
							</svg>
						</div>
						<div class="deal__body">
							<h3 class="deal__name">Schüler-Notebook Pro 14" (2024)</h3>
							<p class="deal__desc">Nahezu identisch – nur eben zum regulären Preis.</p>
							<p class="deal__price">
								<span class="deal__price-now">{SWITCH_PRICE} €</span>
							</p>
							<p class="deal__stock deal__stock--ok">Auf Lager · sofort versandfertig</p>
						</div>
					</div>

					{#if !ordered}
						<div class="actions">
							<button class="primary primary--lg" type="button" onclick={orderSwitch}>
								Für {SWITCH_PRICE} € bestellen
							</button>
						</div>

						<div class="exit-links">
							<button class="deceptive-link" type="button" onclick={waitForBait}>
								Auf das {BAIT_PRICE}-€-Angebot warten
							</button>
							<button class="quiet-link" type="button" onclick={recognise}>
								Nein danke – das ist nicht das Produkt, das ich wollte
							</button>
						</div>
					{:else}
						<div class="confirm" role="status">
							<div class="confirm__icon" aria-hidden="true">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
							</div>
							<h3 class="confirm__title">Bestellung bestätigt</h3>
							<p class="confirm__text">
								Du hast das Schüler-Notebook Pro 14" (2024) bestellt.
							</p>
							<div class="confirm__bill">
								<span>Beworbener Köderpreis</span>
								<span class="confirm__strike">{BAIT_PRICE} €</span>
							</div>
							<div class="confirm__bill confirm__bill--total">
								<span>Tatsächlich gezahlt</span>
								<span>{SWITCH_PRICE} €</span>
							</div>
							<p class="confirm__note">
								Genau hier schnappt die Falle zu: Statt der beworbenen {BAIT_PRICE} € zahlst du
								<strong>{SWITCH_PRICE} €</strong> – {SWITCH_PRICE - BAIT_PRICE} € mehr als versprochen.
							</p>
							<div class="actions">
								<button class="primary" type="button" onclick={recognise}>
									Trick durchschaut – Auflösung ansehen
								</button>
								<button class="ghost-btn" type="button" onclick={waitForBait}>Zurück zum Angebot</button>
							</div>
						</div>
					{/if}
				</div>
			{/if}
		</section>
	{:else}
		<section class="card education">
			<a href={base + '/'} class="home-link">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
				Zurück zur Startseite
			</a>

			<p class="eyebrow">Lern-Analyse</p>
			<h1 class="title">So funktioniert Köder &amp; Tausch</h1>
			<p class="copy">
				Beim <strong>Bait &amp; Switch</strong> wird ein besonders attraktives Produkt oder Angebot
				beworben (der <em>Köder</em>). Sobald du zugreifst, ist genau dieses Angebot angeblich
				vergriffen – und du wirst zu einer teureren oder schlechteren Alternative umgeleitet (der
				<em>Tausch</em>). Der ursprüngliche Preis war oft nie ernsthaft verfügbar; er diente nur dazu,
				dich in den Kaufprozess zu ziehen.
			</p>

			<h2 class="step-title">Was in der Demo passiert ist</h2>
			<ul class="list">
				<li>Ein Schnäppchen für {BAIT_PRICE} € hat dich angelockt – mit Rabatt-Badge und künstlicher Knappheit.</li>
				<li>Beim Klick war der Köder „ausverkauft" – das eigentliche Ziel war nie erreichbar.</li>
				<li>Du wurdest nahtlos auf ein fast identisches Modell für {SWITCH_PRICE} € umgeleitet.</li>
				<li>„Warten" führte nur zurück zum selben Köder – eine bewusste Schleife.</li>
			</ul>

			<h2 class="step-title">So schützt man Nutzer:innen</h2>
			<ul class="list">
				<li>Nur Angebote bewerben, die tatsächlich in der angegebenen Menge verfügbar sind.</li>
				<li>Bei Nichtverfügbarkeit ehrlich informieren, statt sofort eine teurere Option vorzuschalten.</li>
				<li>Alternativen klar als das kennzeichnen, was sie sind – ohne Druck und versteckte Mehrkosten.</li>
			</ul>

			<div class="cta-row">
				<button class="primary" type="button" onclick={restart}>Demo neu starten</button>
				<a href={base + '/'} class="ghost">Alle Dark Patterns</a>
			</div>
		</section>
	{/if}
</main>

<style>
	.page {
		min-height: 100vh;
		background: var(--color-bg);
		padding: var(--space-8) var(--space-4);
		font-family: var(--font-body);
		color: var(--text-body);
	}

	.card {
		max-width: min(100%, var(--container-md));
		margin: 0 auto;
		background: var(--color-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		padding: var(--space-8);
		box-shadow: var(--shadow-md);
	}

	.eyebrow {
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin: 0 0 var(--space-3);
	}

	.title,
	.step-title {
		font-family: var(--font-display);
		color: var(--text-strong);
		margin: 0;
	}

	.title {
		font-size: var(--text-4xl);
		margin-bottom: var(--space-4);
	}

	.intro,
	.copy {
		margin: 0 0 var(--space-4);
		line-height: 1.5;
	}

	.attempts {
		font-size: var(--text-sm);
		margin: 0 0 var(--space-4);
		color: var(--text-muted);
	}

	.block {
		border-top: 1px solid var(--border);
		padding-top: var(--space-5);
	}

	.step-title {
		font-size: var(--text-2xl);
		margin-bottom: var(--space-3);
	}

	/* ── Deal / product card ─────────────────────────────────────── */
	.deal {
		display: flex;
		gap: var(--space-5);
		align-items: stretch;
		background: var(--color-bg);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-4);
		margin-bottom: var(--space-5);
	}

	.deal--switch {
		border-color: var(--color-primary);
		box-shadow: var(--shadow-sm);
	}

	.deal__media {
		position: relative;
		flex-shrink: 0;
		width: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: color-mix(in srgb, var(--color-primary) 8%, var(--color-surface));
		border-radius: var(--radius-lg);
		color: var(--color-primary);
	}

	.deal__media svg {
		width: 56px;
		height: 56px;
	}

	.deal__badge {
		position: absolute;
		top: var(--space-2);
		left: var(--space-2);
		background: var(--color-accent);
		color: var(--color-surface);
		font-size: 10px;
		font-weight: var(--fw-bold);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		padding: 2px var(--space-2);
		border-radius: var(--radius-pill);
		line-height: 1.4;
	}

	.deal__body {
		flex: 1;
		min-width: 0;
	}

	.deal__name {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		color: var(--text-strong);
		margin: 0 0 var(--space-2);
	}

	.deal__desc {
		font-size: var(--text-sm);
		color: var(--text-muted);
		margin: 0 0 var(--space-3);
		line-height: 1.5;
	}

	.deal__price {
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
		margin: 0 0 var(--space-2);
	}

	.deal__price-now {
		font-family: var(--font-display);
		font-size: var(--text-3xl);
		font-weight: var(--fw-heavy);
		color: var(--color-primary);
	}

	.deal__price-was {
		font-size: var(--text-sm);
		color: var(--text-muted);
		text-decoration: line-through;
	}

	.deal__stock {
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--color-accent);
		margin: 0;
	}

	.deal__stock--ok {
		color: var(--color-success);
	}

	/* ── Order confirmation panel ────────────────────────────────── */
	.confirm {
		border: 1px solid var(--color-success);
		background: color-mix(in srgb, var(--color-success) 8%, var(--color-surface));
		border-radius: var(--radius-lg);
		padding: var(--space-5);
	}

	.confirm__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--color-success);
		color: var(--neutral-0);
		margin-bottom: var(--space-3);
	}

	.confirm__title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		color: var(--text-strong);
		margin: 0 0 var(--space-2);
	}

	.confirm__text {
		font-size: var(--text-sm);
		color: var(--text-body);
		margin: 0 0 var(--space-4);
		line-height: 1.5;
	}

	.confirm__bill {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: var(--space-3);
		font-size: var(--text-sm);
		color: var(--text-muted);
		padding: var(--space-2) 0;
		border-top: 1px solid var(--border);
	}

	.confirm__strike {
		text-decoration: line-through;
	}

	.confirm__bill--total {
		font-size: var(--text-base);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		border-bottom: 1px solid var(--border);
	}

	.confirm__note {
		font-size: var(--text-sm);
		line-height: 1.5;
		color: var(--text-body);
		margin: var(--space-4) 0 var(--space-5);
	}

	.ghost-btn {
		background: transparent;
		color: var(--text-muted);
		border: 1px solid var(--border-strong, var(--border));
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-5);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
	}

	/* ── Unavailable notice ──────────────────────────────────────── */
	.notice {
		display: flex;
		gap: var(--space-3);
		align-items: flex-start;
		padding: var(--space-4);
		margin-bottom: var(--space-5);
		border-radius: var(--radius-lg);
		background: color-mix(in srgb, var(--color-warning) 18%, var(--color-surface));
		color: var(--text-strong);
		line-height: 1.5;
	}

	.notice svg {
		flex-shrink: 0;
		color: var(--color-warning);
		margin-top: 2px;
	}

	.reassurance {
		font-size: var(--text-xs);
		color: var(--text-muted);
		margin: var(--space-3) 0 0;
		text-align: center;
	}

	/* ── Actions / buttons ───────────────────────────────────────── */
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-bottom: var(--space-2);
	}

	button {
		border: 0;
		cursor: pointer;
		font-family: var(--font-body);
		transition:
			transform var(--duration-fast) var(--ease-standard),
			filter var(--duration-fast) var(--ease-standard);
	}

	button:hover {
		filter: brightness(1.06);
	}

	button:active {
		transform: scale(0.99);
	}

	button:focus-visible {
		outline: none;
		box-shadow: var(--shadow-focus);
	}

	.primary {
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-5);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		background: var(--color-primary);
		color: var(--color-surface);
	}

	.primary--lg {
		width: 100%;
		padding: var(--space-4) var(--space-5);
		font-size: var(--text-base);
	}

	.primary:disabled {
		cursor: progress;
		filter: none;
		opacity: 0.7;
	}

	.exit-links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-3);
		margin-top: var(--space-5);
		padding-top: var(--space-4);
		border-top: 1px solid var(--border);
	}

	.deceptive-link {
		background: transparent;
		color: var(--text-muted);
		font-size: var(--text-xs);
		text-decoration: underline;
		text-underline-offset: 3px;
		padding: 0;
	}

	.quiet-link {
		background: transparent;
		color: var(--text-muted);
		font-size: 11px;
		padding: 0;
		opacity: 0.75;
	}

	/* ── Education view ──────────────────────────────────────────── */
	.home-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--color-primary);
		text-decoration: none;
		margin-bottom: var(--space-5);
		transition: gap var(--duration-fast) var(--ease-standard);
	}

	.home-link:hover {
		gap: var(--space-3);
	}

	.education .title {
		margin-bottom: var(--space-5);
	}

	.list {
		margin: 0 0 var(--space-5);
		padding-left: var(--space-5);
	}

	.list li {
		margin-bottom: var(--space-2);
		line-height: 1.5;
	}

	.cta-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		align-items: center;
		margin-top: var(--space-2);
	}

	.ghost {
		display: inline-flex;
		align-items: center;
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-5);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-muted);
		text-decoration: none;
		border: 1px solid var(--border-strong, var(--border));
		transition: color var(--duration-fast) var(--ease-standard);
	}

	.ghost:hover {
		color: var(--text-body);
	}

	@media (max-width: 560px) {
		.deal {
			flex-direction: column;
		}
		.deal__media {
			width: 100%;
			height: 110px;
		}
	}
</style>
