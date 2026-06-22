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
				<p>
					Typischerweise geschieht dies durch <strong>vorausgewählte Checkboxen</strong>
					(Pre-Checked Checkboxes): Zusatzleistungen sind standardmäßig aktiviert, und der Nutzer
					muss sie aktiv <em>abwählen</em>, um sie loszuwerden — statt sie aktiv
					<em>hinzuzufügen</em>.
				</p>
				<div class="definition-box">
					<strong>Kernmerkmal:</strong> Der Nutzer wird vom Opt-in-Prinzip (aktiv zustimmen) zum
					Opt-out-Prinzip (aktiv ablehnen) gezwungen — ohne dass dies klar kommuniziert wird.
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
							<strong>Vorausgewählte Extras</strong>
							<p>
								Zusatzprodukte (Versicherungen, Bundles, Spenden) werden mit einem vorgesetzten
								Häkchen angezeigt. Sie sehen genauso aus wie Pflichtfelder.
							</p>
						</div>
					</div>
					<div class="step-item">
						<div class="step-item__num">2</div>
						<div class="step-item__body">
							<strong>Visuelle Einbettung</strong>
							<p>
								Die Extras sind visuell zwischen legitimen Pflichtoptionen eingebettet. Der
								Abschnitt heißt z. B. „Empfohlene Ergänzungen" statt „Optionale Extras".
							</p>
						</div>
					</div>
					<div class="step-item">
						<div class="step-item__num">3</div>
						<div class="step-item__body">
							<strong>Versteckte Preise</strong>
							<p>
								Der Preis der Extras ist klein und in der Beschreibung versteckt — nicht als eigene
								Zeile in einer Preisübersicht sichtbar.
							</p>
						</div>
					</div>
					<div class="step-item">
						<div class="step-item__num">4</div>
						<div class="step-item__body">
							<strong>Kognitive Überlastung</strong>
							<p>
								Durch viele Optionen, lange Beschreibungen und ein mehrstufiges Formular sinkt die
								Aufmerksamkeit. Nutzer klicken schnell auf „Weiter" ohne alles zu prüfen.
							</p>
						</div>
					</div>
					<div class="step-item">
						<div class="step-item__num">5</div>
						<div class="step-item__body">
							<strong>Spät sichtbarer Gesamtpreis</strong>
							<p>
								Die endgültige Summe mit allen Extras erscheint erst im letzten Checkout-Schritt —
								wenn die Hemmschwelle zum Abbruch am höchsten ist (Sunk-Cost-Effekt).
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Psychology -->
			<section class="card">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /><circle cx="12" cy="12" r="10" /></svg>
				</div>
				<h2 class="card__title">Warum funktioniert es psychologisch?</h2>

				<div class="psych-grid">
					<div class="psych-card">
						<div class="psych-card__label">Default-Effekt</div>
						<p>
							Menschen tendieren dazu, voreingestellte Optionen beizubehalten. Was als Standard
							gesetzt ist, wirkt als „Empfehlung" und wird seltener geändert.
						</p>
					</div>
					<div class="psych-card">
						<div class="psych-card__label">Kognitive Last</div>
						<p>
							Bei komplexen mehrstufigen Formularen ist die mentale Kapazität begrenzt. Das Gehirn
							sucht Abkürzungen — und übersieht dabei kleine Häkchen.
						</p>
					</div>
					<div class="psych-card">
						<div class="psych-card__label">Sunk-Cost-Bias</div>
						<p>
							Wer bereits Zeit in den Buchungsprozess investiert hat, bricht seltener ab — selbst
							wenn der Preis am Ende höher ist als erwartet.
						</p>
					</div>
					<div class="psych-card">
						<div class="psych-card__label">Social Proof</div>
						<p>
							Badges wie „⭐ Beliebt" oder „Oft zusammen gebucht" suggerieren, dass andere Nutzer
							das Extra wählen — also sollte man es auch nehmen.
						</p>
					</div>
					<div class="psych-card">
						<div class="psych-card__label">Guilt by Charity</div>
						<p>
							Eine vorausgewählte Spende erzeugt sozialen Druck: Sie aktiv zu entfernen fühlt sich
							moralisch falsch an — obwohl die Entscheidung beim Nutzer liegen sollte.
						</p>
					</div>
					<div class="psych-card">
						<div class="psych-card__label">Framing-Effekt</div>
						<p>
							„Ich verzichte auf Schutz" klingt riskanter als „Schutz hinzufügen". Negative
							Opt-out-Formulierungen erhöhen die Abwahlhürde erheblich.
						</p>
					</div>
				</div>
			</section>

			<!-- Real examples -->
			<section class="card">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
				</div>
				<h2 class="card__title">Bekannte Beispiele aus der Praxis</h2>

				<div class="examples-list">
					<div class="example">
						<div class="example__cat">Flugreisen</div>
						<p>
							<strong>Ryanair, easyJet</strong> — Reiseversicherung, Sitzplatzreservierung und
							Priority Boarding sind standardmäßig aktiviert. Bis 2012 aktivierte Ryanair sogar
							automatisch Reiseversicherungen für irische Kunden (€13/Ticket).
						</p>
					</div>
					<div class="example">
						<div class="example__cat">Ticketing</div>
						<p>
							<strong>Ticketmaster, Eventim</strong> — Ticket-Schutz-Versicherungen werden
							vorausgewählt und erscheinen visuell als Teil des Standard-Ticketpakets.
						</p>
					</div>
					<div class="example">
						<div class="example__cat">E-Commerce</div>
						<p>
							<strong>Amazon</strong> — „Amazon Prime"-Testmitgliedschaften werden beim Checkout
							vorgeschlagen; der Opt-out ist oft versteckt oder wenig prominent.
						</p>
					</div>
					<div class="example">
						<div class="example__cat">Software</div>
						<p>
							<strong>Installer-Bundles</strong> — Viele Gratis-Downloads bündeln Adware oder Browser-Toolbars,
							die standardmäßig mitinstalliert werden und nur durch Deaktivierung ausgelassen werden
							können.
						</p>
					</div>
				</div>
			</section>

			<!-- Legal -->
			<section class="card card--legal">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
				</div>
				<h2 class="card__title">Rechtslage in der EU & Österreich</h2>

				<div class="legal-grid">
					<div class="legal-item">
						<div class="legal-item__label">EU-Verbraucherrechterichtlinie (2011/83/EU)</div>
						<p>
							Art. 22 verlangt ausdrücklich, dass vorausgewählte Zusatzleistungen beim
							Vertragsschluss <strong>verboten</strong> sind, wenn der Verbraucher nicht aktiv
							zugestimmt hat. Bei Verstößen besteht ein <strong>Rückforderungsanspruch</strong>.
						</p>
					</div>
					<div class="legal-item">
						<div class="legal-item__label">Österreichisches KSchG (Konsumentenschutzgesetz)</div>
						<p>
							§ 6a KSchG verbietet vorvertraglich aufgesetzte Häkchen für kostenpflichtige
							Zusatzleistungen. Unternehmen riskieren Klagen durch die
							<strong>Arbeiterkammer</strong> oder den <strong>VKI</strong>.
						</p>
					</div>
					<div class="legal-item">
						<div class="legal-item__label">DSGVO (bei Einwilligungen)</div>
						<p>
							Für Einwilligungen (z. B. Newsletter) gilt Art. 7 DSGVO: Vorausgewählte Häkchen
							gelten <strong>nicht</strong> als wirksame Einwilligung. Einwilligungen müssen aktiv
							und freiwillig erfolgen.
						</p>
					</div>
					<div class="legal-item">
						<div class="legal-item__label">Durchsetzung in der Praxis</div>
						<p>
							Trotz klarer Rechtslage ist das Muster weit verbreitet. Beschwerden bei der
							österreichischen <strong>Datenschutzbehörde</strong> oder dem
							<strong>VKI</strong> (Verein für Konsumenteninformation) sind möglich.
						</p>
					</div>
				</div>
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
							<li>Scrolle auf <em>jeder</em> Checkout-Seite alle Optionen durch</li>
							<li>Prüfe besonders kleine Checkboxen neben Beschreibungstexten</li>
							<li>Vergleiche die Gesamtsumme mit deiner ursprünglichen Erwartung</li>
							<li>Klicke bei unklaren Extras auf „Mehr erfahren" — selten vorhanden? Abwählen.</li>
							<li>
								Nutze Browser-Plugins wie <em>darkmodepatterns.org</em> zur Mustererkennung
							</li>
							<li>Fordere unrechtmäßig abgebuchte Extras schriftlich zurück (EU-Recht)</li>
						</ul>
					</div>
					<div class="tip tip--dont">
						<div class="tip__head">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
							Woran erkennst du es?
						</div>
						<ul>
							<li>Häkchen in Abschnitten, die du nicht aktiv ausgefüllt hast</li>
							<li>Preise nur in kleiner Schrift innerhalb langer Beschreibungen</li>
							<li>Abschnitte heißen „Empfohlen" statt „Optional"</li>
							<li>Negative Opt-out-Texte: „Ich verzichte auf..."</li>
							<li>Gesamtpreis erscheint erst im letzten Schritt</li>
							<li>„Beliebt"-Badges auf vorausgewählten Extras</li>
						</ul>
					</div>
				</div>
			</section>

			<!-- Ethical alternative -->
			<section class="card card--ethical">
				<div class="card__icon" aria-hidden="true">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
				</div>
				<h2 class="card__title">Die ethische Alternative</h2>
				<p class="card__lead">
					Gutes UX-Design kann Nutzer über Zusatzangebote informieren, ohne sie zu manipulieren.
				</p>

				<div class="compare-grid">
					<div class="compare-col compare-col--bad">
						<div class="compare-col__head">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
							Dark Pattern
						</div>
						<ul>
							<li>Vorausgewählte Häkchen für Extras</li>
							<li>Preise im Fließtext versteckt</li>
							<li>Negative Opt-out-Formulierung</li>
							<li>Extras visuell als Pflichtfelder gestaltet</li>
							<li>Gesamtpreis erst am Ende sichtbar</li>
						</ul>
					</div>
					<div class="compare-col compare-col--good">
						<div class="compare-col__head">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
							Ethisches Design
						</div>
						<ul>
							<li>Extras standardmäßig <em>nicht</em> ausgewählt</li>
							<li>Preise prominent und klar sichtbar</li>
							<li>Positive Opt-in: „Ja, ich möchte Schutz hinzufügen"</li>
							<li>Extras klar als optionale Sektion markiert</li>
							<li>Live-Preisupdate beim An- und Abwählen</li>
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
	.card--ethical {
		border-color: var(--color-success);
		background: var(--color-success-soft);
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
	.card--ethical .card__icon {
		background: var(--color-success-soft);
		color: var(--color-success);
	}
	.card__title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-4);
	}
	.card__lead {
		font-size: var(--text-md);
		color: var(--text-muted);
		margin-bottom: var(--space-5);
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

	/* ─── Psychology grid ─────────────────────────────────────────────────── */
	.psych-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-4);
	}
	.psych-card {
		background: var(--color-surface-sunken);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		padding: var(--space-4);
	}
	.psych-card__label {
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--color-primary);
		margin-bottom: var(--space-2);
	}
	.psych-card p {
		font-size: var(--text-sm);
		color: var(--text-muted);
		margin: 0;
		line-height: var(--leading-relaxed);
	}

	/* ─── Examples ────────────────────────────────────────────────────────── */
	.examples-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.example {
		padding: var(--space-4) var(--space-5);
		background: var(--color-surface-sunken);
		border-radius: var(--radius-md);
		border-left: 3px solid var(--color-highlight);
	}
	.example__cat {
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--color-highlight-hover);
		margin-bottom: var(--space-2);
	}
	.example p {
		font-size: var(--text-sm);
		color: var(--text-body);
		margin: 0;
		line-height: var(--leading-relaxed);
	}

	/* ─── Legal grid ──────────────────────────────────────────────────────── */
	.legal-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-4);
	}
	.legal-item {
		background: var(--color-surface);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		border: 1px solid var(--petrol-200);
	}
	.legal-item__label {
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		color: var(--color-primary);
		margin-bottom: var(--space-2);
	}
	.legal-item p {
		font-size: var(--text-sm);
		color: var(--text-body);
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

	/* ─── Comparison grid ─────────────────────────────────────────────────── */
	.compare-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-4);
	}
	.compare-col {
		border-radius: var(--radius-md);
		padding: var(--space-4);
		border: 1.5px solid;
	}
	.compare-col--bad {
		background: var(--color-accent-soft);
		border-color: var(--color-accent);
	}
	.compare-col--good {
		background: var(--color-success-soft);
		border-color: var(--color-success);
	}
	.compare-col__head {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--fw-bold);
		margin-bottom: var(--space-3);
		padding-bottom: var(--space-3);
		border-bottom: 1px solid currentColor;
		opacity: 0.85;
	}
	.compare-col--bad .compare-col__head {
		color: var(--color-accent);
	}
	.compare-col--good .compare-col__head {
		color: var(--color-success);
	}
	.compare-col ul {
		padding-left: var(--space-4);
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.compare-col li {
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
		.psych-grid,
		.legal-grid,
		.tips-grid,
		.compare-grid {
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
