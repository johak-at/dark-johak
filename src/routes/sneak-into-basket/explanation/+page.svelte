<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="page">
	<!-- ── Header ─────────────────────────────────────────────────────────── -->
	<header class="site-header">
		<div class="site-header__inner">
			<a href="{base}/sneak-into-basket" class="back-link">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
				Zurück zur Demo
			</a>
			<span class="header-label">Dark Patterns — Lernmodul</span>
		</div>
	</header>

	<!-- ── Hero ───────────────────────────────────────────────────────────── -->
	<section class="hero">
		<div class="hero__inner">
			<div class="johak-accent-bar" style="width: 48px; margin-bottom: var(--space-5);"></div>
			<span class="eyebrow">Dark Pattern #3</span>
			<h1 class="hero__title">Sneak into Basket</h1>
			<p class="hero__lead">
				Wie Websites Produkte heimlich in deinen Warenkorb schmuggeln — und warum du es meist erst
				an der Kasse bemerkst.
			</p>
		</div>
	</section>

	<!-- ── Content ────────────────────────────────────────────────────────── -->
	<main class="main">
		<div class="content">
			<!-- Definition -->
			<section class="card">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
				</div>
				<h2 class="card__title">Was ist „Sneak into Basket"?</h2>
				<p>
					<strong>„Sneak into Basket"</strong> (deutsch: „heimlich in den Warenkorb schieben") ist
					ein Dark Pattern, bei dem Anbieter zusätzliche Produkte, Versicherungen oder
					Abonnements <em>ohne aktive Zustimmung</em> des Nutzers zur Bestellung hinzufügen.
				</p>
				<div class="definition-box">
					<strong>Kernmerkmal:</strong> Extras sind oft schon aktiviert. Du musst aktiv
					<em>abwählen</em>, statt aktiv zuzustimmen.
				</div>
			</section>

			<!-- How it works -->
			<section class="card">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
				</div>
				<h2 class="card__title">Wie funktioniert das Muster?</h2>

				<div class="steps-list">
					<div class="step-item">
						<div class="step-item__num">1</div>
						<div class="step-item__body">
							<strong>Extras sind schon aktiviert</strong>
							<p>Versicherung, Bundle oder Spende sind vorausgewählt.</p>
						</div>
					</div>
					<div class="step-item">
						<div class="step-item__num">2</div>
						<div class="step-item__body">
							<strong>Optisch wirkt es wie „normal"</strong>
							<p>Kleine Checkboxen und Labels wie „empfohlen" senken die Aufmerksamkeit.</p>
						</div>
					</div>
					<div class="step-item">
						<div class="step-item__num">3</div>
						<div class="step-item__body">
							<strong>Der Mehrpreis fällt spät auf</strong>
							<p>Erst am Ende ist sichtbar, was ungefragt addiert wurde.</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Legal -->
			<section class="card card--legal">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
				</div>
				<h2 class="card__title">Kurz zur Rechtslage (EU & Österreich)</h2>

				<p>
					In der EU sind <strong>vorausgewählte kostenpflichtige Zusatzleistungen</strong> beim
					Online-Kauf unzulässig (Verbraucherrechterichtlinie, Art. 22). In Österreich wird das u. a.
					im <strong>KSchG (§ 6a)</strong> umgesetzt.
				</p>
			</section>

			<!-- Recognition tips -->
			<section class="card">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
				</div>
				<h2 class="card__title">So erkennst und vermeidest du es</h2>

				<div class="tips-grid">
					<div class="tip tip--do">
						<div class="tip__head">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
							So schützt du dich
						</div>
						<ul>
							<li>Prüfe auf jeder Checkout-Seite alle Checkboxen</li>
							<li>Vergleiche Zwischensumme und Endpreis</li>
							<li>Wähle Extras sofort ab, wenn du sie nicht willst</li>
						</ul>
					</div>
					<div class="tip tip--dont">
						<div class="tip__head">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
							Woran erkennst du es?
						</div>
						<ul>
							<li>Häkchen in Abschnitten, die du nicht aktiv ausgefüllt hast</li>
							<li>Abschnitte heißen „Empfohlen" statt „Optional"</li>
							<li>Gesamtpreis erscheint erst im letzten Schritt</li>
							<li>Preise stehen klein im Fließtext statt klar daneben</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- CTA -->
			<div class="cta-row">
				<a href="{base}/sneak-into-basket" class="btn btn--primary">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
					Zurück zur interaktiven Demo
				</a>
				<a href="{base}/" class="btn btn--ghost">Alle Dark Patterns</a>
			</div>
		</div>
	</main>

	<!-- ── Footer ─────────────────────────────────────────────────────────── -->
	<footer class="site-footer">
		<div class="site-footer__inner">
			<span>Lernmodul Dark Patterns · BHAK/BHAS St. Johann im Pongau</span>
			<span class="johak-eyebrow">Gemeinsam Zukunft bilden.</span>
		</div>
	</footer>
</div>

<style>
	/* ─── Page shell ──────────────────────────────────────────────────────── */
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: var(--color-bg);
		font-family: var(--font-body);
	}

	/* ─── Header ──────────────────────────────────────────────────────────── */
	.site-header {
		background: var(--color-surface);
		border-bottom: 1px solid var(--border);
		padding: var(--space-3) var(--space-5);
		position: sticky;
		top: 0;
		z-index: 10;
	}
	.site-header__inner {
		max-width: var(--container-lg);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.back-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--color-primary);
		text-decoration: none;
		transition: gap var(--duration-fast) var(--ease-standard);
	}
	.back-link:hover {
		gap: var(--space-3);
		text-decoration: none;
	}
	.header-label {
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--text-muted);
	}

	/* ─── Hero ────────────────────────────────────────────────────────────── */
	.hero {
		background: var(--color-surface-inverse);
		padding: var(--space-10) var(--space-5) var(--space-9);
		position: relative;
		overflow: hidden;
	}
	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse 70% 80% at 80% 50%,
			rgba(128, 204, 219, 0.08) 0%,
			transparent 70%
		);
	}
	.hero__inner {
		position: relative;
		max-width: var(--container-md);
		margin: 0 auto;
	}
	.eyebrow {
		display: inline-block;
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--sky-300);
		margin-bottom: var(--space-3);
	}
	.hero__title {
		font-family: var(--font-display);
		font-size: clamp(2.5rem, 6vw, var(--text-4xl));
		font-weight: var(--fw-heavy);
		color: var(--neutral-0);
		line-height: var(--leading-tight);
		letter-spacing: var(--tracking-tight);
		margin: 0 0 var(--space-4);
	}
	.hero__lead {
		font-size: var(--text-md);
		color: rgba(255, 255, 255, 0.72);
		max-width: 560px;
		line-height: var(--leading-relaxed);
		margin: 0;
	}

	/* ─── Main content ────────────────────────────────────────────────────── */
	.main {
		flex: 1;
		padding: var(--space-8) var(--space-5) var(--space-10);
	}
	.content {
		max-width: var(--container-md);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	/* ─── Cards ───────────────────────────────────────────────────────────── */
	.card {
		background: var(--color-surface);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-sm);
		padding: var(--space-7);
		border: 1px solid var(--border);
		position: relative;
	}
	.card--legal {
		border-color: var(--petrol-300);
		background: var(--petrol-100);
	}
	.card__icon {
		width: 52px;
		height: 52px;
		border-radius: var(--radius-md);
		background: var(--color-primary-soft);
		color: var(--color-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--space-4);
	}
	.card--legal .card__icon {
		background: var(--petrol-200);
	}
	.card__title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-4);
	}
	.card p {
		font-size: var(--text-base);
		color: var(--text-body);
		margin-bottom: var(--space-3);
		line-height: var(--leading-relaxed);
	}
	.card p:last-child {
		margin-bottom: 0;
	}

	/* ─── Definition box ─────────────────────────────────────────────────── */
	.definition-box {
		background: var(--color-primary-soft);
		border-left: 3px solid var(--color-primary);
		padding: var(--space-4) var(--space-5);
		border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
		font-size: var(--text-sm);
		color: var(--text-body);
		margin-top: var(--space-4);
		line-height: var(--leading-relaxed);
	}

	/* ─── Steps list ──────────────────────────────────────────────────────── */
	.steps-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.step-item {
		display: flex;
		gap: var(--space-4);
	}
	.step-item__num {
		width: 32px;
		height: 32px;
		border-radius: var(--radius-pill);
		background: var(--color-primary);
		color: var(--text-inverse);
		font-size: var(--text-sm);
		font-weight: var(--fw-bold);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 2px;
	}
	.step-item__body {
		flex: 1;
	}
	.step-item__body strong {
		display: block;
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-strong);
		margin-bottom: var(--space-1);
	}
	.step-item__body p {
		font-size: var(--text-sm);
		color: var(--text-muted);
		margin: 0;
		line-height: var(--leading-relaxed);
	}

	/* ─── Tips grid ───────────────────────────────────────────────────────── */
	.tips-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-4);
	}
	.tip {
		border-radius: var(--radius-md);
		padding: var(--space-4);
		border: 1.5px solid;
	}
	.tip--do {
		background: var(--color-success-soft);
		border-color: var(--color-success);
	}
	.tip--dont {
		background: var(--color-accent-soft);
		border-color: var(--color-accent);
	}
	.tip__head {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		margin-bottom: var(--space-3);
	}
	.tip--do .tip__head {
		color: var(--color-success);
	}
	.tip--dont .tip__head {
		color: var(--color-accent);
	}
	.tip ul {
		padding-left: var(--space-4);
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.tip li {
		font-size: var(--text-sm);
		color: var(--text-body);
		line-height: var(--leading-normal);
	}

	/* ─── CTA row ─────────────────────────────────────────────────────────── */
	.cta-row {
		display: flex;
		gap: var(--space-4);
		justify-content: center;
		flex-wrap: wrap;
		padding: var(--space-4) 0;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-6);
		border-radius: var(--radius-pill);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		text-decoration: none;
		cursor: pointer;
		border: 2px solid transparent;
		transition: all var(--duration-fast) var(--ease-standard);
	}
	.btn--primary {
		background: var(--color-primary);
		color: var(--text-inverse);
		border-color: var(--color-primary);
	}
	.btn--primary:hover {
		background: var(--color-primary-hover);
		border-color: var(--color-primary-hover);
		text-decoration: none;
	}
	.btn--ghost {
		background: transparent;
		color: var(--text-muted);
		border-color: var(--border-strong);
	}
	.btn--ghost:hover {
		color: var(--text-body);
		border-color: var(--text-muted);
		background: var(--color-surface);
		text-decoration: none;
	}

	/* ─── Footer ──────────────────────────────────────────────────────────── */
	.site-footer {
		padding: var(--space-4) var(--space-5);
		background: var(--color-surface);
		border-top: 1px solid var(--border);
		margin-top: auto;
	}
	.site-footer__inner {
		max-width: var(--container-lg);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	/* ─── Responsive ──────────────────────────────────────────────────────── */
	@media (max-width: 640px) {
		.tips-grid {
			grid-template-columns: 1fr;
		}
		.card {
			padding: var(--space-5);
		}
		.hero {
			padding: var(--space-8) var(--space-4) var(--space-7);
		}
	}
</style>
