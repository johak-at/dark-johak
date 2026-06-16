
<script lang="ts">
	// ── State ─────────────────────────────────────────────────────────────────
	let step = $state(1);

	// Step 1 – Ticket selection
	let qty = $state(2);
	let tier = $state<'standard' | 'premium' | 'vip'>('standard');

	// Step 2 – Legitimate choice
	let zone = $state<'any' | 'front' | 'seated'>('any');

	// Step 2 – Sneaked extras — ALL pre-checked! This is the dark pattern.
	let hasProtection = $state(true);
	let hasFanBundle = $state(true);
	let hasProgramme = $state(true);
	let hasCharity = $state(true);
	let hasNewsletter = $state(false); // legitimate opt-in, used as "cover"

	// Step 3 – Contact
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');

	// Step 4 – Educational reveal
	let revealed = $state(false);

	// ── Pricing ───────────────────────────────────────────────────────────────
	const PRICES: Record<string, number> = { standard: 35, premium: 59, vip: 89 };
	const ticketSub = $derived(qty * PRICES[tier]);
	const bookingFee = $derived(qty * 1.5);

	const sneaked = $derived.by(() => {
		const items: { key: string; name: string; detail: string; total: number }[] = [];
		if (hasProtection)
			items.push({ key: 'p', name: 'Ticket-Schutz', detail: `${qty} × €4,99`, total: qty * 4.99 });
		if (hasFanBundle)
			items.push({ key: 'f', name: 'Fan Starter Bundle', detail: '1 × €24,99', total: 24.99 });
		if (hasProgramme)
			items.push({
				key: 'b',
				name: 'Offizielles Programmheft',
				detail: `${qty} × €3,50`,
				total: qty * 3.5
			});
		if (hasCharity)
			items.push({ key: 'c', name: 'Kulturspende', detail: '1 × €2,00', total: 2.0 });
		return items;
	});

	const extrasTotal = $derived(sneaked.reduce((s, i) => s + i.total, 0));
	const grandTotal = $derived(ticketSub + bookingFee + extrasTotal);

	const f = (n: number) =>
		new Intl.NumberFormat('de-AT', { style: 'currency', currency: 'EUR' }).format(n);

	const STEPS = ['Tickets', 'Extras', 'Angaben', 'Übersicht'];

	function isValid() {
		if (step === 3)
			return firstName.trim().length > 0 && lastName.trim().length > 0 && email.includes('@');
		return true;
	}

	function advance() {
		if (isValid()) step = Math.min(step + 1, 4);
	}
	function retreat() {
		step = Math.max(step - 1, 1);
	}
</script>

<div class="page">
	<!-- ── Site Header ────────────────────────────────────────────────────── -->
	<header class="site-header">
		<div class="site-header__inner">
			<div class="brand">
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
					<circle cx="14" cy="14" r="13" fill="var(--color-primary)" />
					<path
						d="M8 10 Q14 6 20 10 L20 18 Q14 22 8 18 Z"
						fill="none"
						stroke="white"
						stroke-width="1.5"
					/>
					<circle cx="14" cy="14" r="2.5" fill="white" />
				</svg>
				<span class="brand__name">StageDoor</span>
				<span class="brand__sub">Tickets</span>
			</div>
			<nav class="site-nav" aria-label="Fake-Navigation (Demo)">
				<a href="." aria-disabled="true">Events</a>
				<a href="." aria-disabled="true">Festivals</a>
				<a href="." aria-disabled="true">Mein Konto</a>
			</nav>
		</div>
	</header>

	<!-- ── Event Hero ─────────────────────────────────────────────────────── -->
	<section class="hero">
		<div class="hero__bg" aria-hidden="true"></div>
		<div class="hero__inner">
			<span class="eyebrow">FESTIVAL · WIEN · 2025</span>
			<h1 class="hero__title">SUMMER<br />SOUNDS</h1>
			<div class="hero__meta">
				<span>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
					12. Juli 2025
				</span>
				<span>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
					Arena Wien
				</span>
				<span>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
					Einlass 16:00 Uhr
				</span>
			</div>
		</div>
	</section>

	<!-- ── Booking Flow ───────────────────────────────────────────────────── -->
	<main class="main">
		<div class="container">
			<!-- Progress indicator -->
			<div class="progress" role="list">
				{#each STEPS as label, i}
					{#if i > 0}
						<div class="progress__line" class:progress__line--done={step > i}></div>
					{/if}
					<div
						class="progress__step"
						class:progress__step--active={step === i + 1}
						class:progress__step--done={step > i + 1}
						role="listitem"
					>
						<div class="progress__dot">
							{#if step > i + 1}
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
							{:else}
								{i + 1}
							{/if}
						</div>
						<span class="progress__label">{label}</span>
					</div>
				{/each}
			</div>

			<!-- Form card -->
			<div class="form-card">
				<!-- ─ Step 1: Ticket Selection ──────────────────────────────── -->
				{#if step === 1}
					<div class="step">
						<h2 class="step__title">Deine Tickets</h2>
						<p class="step__intro">Wähle deine Kategorie und Anzahl.</p>

						<div class="field-group">
							<div class="field-label" role="group" aria-label="Ticket-Kategorie">Ticket-Kategorie</div>
							<div class="tier-grid">
								{#each [
									{ id: 'standard', name: 'Standard', price: 35, desc: 'Stehplatz · Innenbereich' },
									{ id: 'premium', name: 'Premium', price: 59, desc: 'Nummerierter Sitzplatz' },
									{ id: 'vip', name: 'VIP', price: 89, desc: 'Lounge + Catering inklusive' }
								] as t}
									<label class="tier-card" class:tier-card--selected={tier === t.id}>
										<input type="radio" name="tier" value={t.id} bind:group={tier} />
										<div class="tier-card__name">{t.name}</div>
										<div class="tier-card__price">{f(t.price)}</div>
										<div class="tier-card__desc">{t.desc}</div>
									</label>
								{/each}
							</div>
						</div>

						<div class="field-group">
							<div class="field-label">Anzahl Tickets</div>
							<div class="qty">
								<button class="qty__btn" onclick={() => (qty = Math.max(1, qty - 1))} aria-label="Weniger">−</button>
								<span class="qty__val">{qty}</span>
								<button class="qty__btn" onclick={() => (qty = Math.min(8, qty + 1))} aria-label="Mehr">+</button>
							</div>
						</div>

						<div class="subtotal">
							<span>Zwischensumme</span>
							<strong>{f(ticketSub)}</strong>
						</div>
					</div>

				<!-- ─ Step 2: Extras (the dark pattern!) ───────────────────── -->
				{:else if step === 2}
					<div class="step">
						<h2 class="step__title">Vervollständige dein Erlebnis</h2>
						<p class="step__intro">Passe deine Buchung an — dann geht es zur Kasse.</p>

						<!-- Legitimate: zone preference -->
						<div class="field-group">
							<div class="field-label">Bereichspräferenz</div>
							<div class="radio-list">
								{#each [
									{ id: 'any', label: 'Keine Präferenz (zufällige Zuteilung)' },
									{ id: 'front', label: 'Vorderer Bereich (Bühne nah)' },
									{ id: 'seated', label: 'Sitzbereich (Reihe A–L)' }
								] as z}
									<label class="radio-row" class:radio-row--selected={zone === z.id}>
										<input type="radio" name="zone" value={z.id} bind:group={zone} />
										<span>{z.label}</span>
									</label>
								{/each}
							</div>
						</div>

						<!-- ★ DARK PATTERN SECTION ★ -->
						<!-- This section title implies the extras are part of the standard order -->
						<div class="extras-block">
							<div class="extras-block__head">
								<span class="extras-block__title">Empfohlene Ergänzungen</span>
								<span class="extras-block__sub">Oft zusammen gebucht</span>
							</div>

							<!-- Sneaked item 1: Ticket insurance — pre-checked -->
							<label class="extra" class:extra--on={hasProtection}>
								<input class="extra__check" type="checkbox" bind:checked={hasProtection} />
								<span class="extra__icon" aria-hidden="true">🛡️</span>
								<span class="extra__body">
									<span class="extra__name">Ticket-Schutz</span>
									<span class="extra__desc">
										Stornierung, Krankheit & Veranstaltungsausfall abgesichert.
										Rückerstattung bis 100%. Gilt pro Ticket.
										<em class="extra__price">€ 4,99/Ticket</em>
									</span>
								</span>
							</label>

							<!-- Sneaked item 2: Fan bundle — pre-checked, "popular" badge -->
							<label class="extra" class:extra--on={hasFanBundle}>
								<input class="extra__check" type="checkbox" bind:checked={hasFanBundle} />
								<span class="extra__icon" aria-hidden="true">🎁</span>
								<span class="extra__body">
									<span class="extra__name">
										Fan Starter Bundle
										<span class="badge-pop">⭐ Beliebt</span>
									</span>
									<span class="extra__desc">
										Exklusives Festival-Shirt, A2-Poster & Lanyard — Wert über €35.
										Nur für Frühbucher verfügbar.
										<em class="extra__price">€ 24,99</em>
									</span>
								</span>
							</label>

							<!-- Sneaked item 3: Programme — pre-checked -->
							<label class="extra" class:extra--on={hasProgramme}>
								<input class="extra__check" type="checkbox" bind:checked={hasProgramme} />
								<span class="extra__icon" aria-hidden="true">📖</span>
								<span class="extra__body">
									<span class="extra__name">Offizielles Programmheft</span>
									<span class="extra__desc">
										Gedruckt + digitaler Download. Alle Acts, Bühnenzeiten & Hintergrundstories.
										<em class="extra__price">€ 3,50/Ticket</em>
									</span>
								</span>
							</label>

							<!-- Sneaked item 4: Charity — pre-checked, guilt-inducing -->
							<label class="extra extra--charity" class:extra--on={hasCharity}>
								<input class="extra__check" type="checkbox" bind:checked={hasCharity} />
								<span class="extra__icon" aria-hidden="true">❤️</span>
								<span class="extra__body">
									<span class="extra__name">+ €2 für Kultur für alle</span>
									<span class="extra__desc">
										Deine kleine Spende ermöglicht Jugendlichen aus einkommensschwachen Haushalten
										den Festivaleintritt. Jeder Beitrag zählt.
										<em class="extra__price">€ 2,00</em>
									</span>
								</span>
							</label>
						</div>

						<!-- Legitimate opt-in (newsletter) — NOT pre-checked, serves as "cover" -->
						<div class="field-group">
							<label class="extra extra--light" class:extra--on={hasNewsletter}>
								<input class="extra__check" type="checkbox" bind:checked={hasNewsletter} />
								<span class="extra__icon" aria-hidden="true">📧</span>
								<span class="extra__body">
									<span class="extra__name">StageDoor Newsletter</span>
									<span class="extra__desc"
										>Vorverkäufe, exklusive Angebote & Neuigkeiten per E-Mail.</span
									>
								</span>
							</label>
						</div>
					</div>

				<!-- ─ Step 3: Contact Details ───────────────────────────────── -->
				{:else if step === 3}
					<div class="step">
						<h2 class="step__title">Deine Angaben</h2>
						<p class="step__intro">Tickets werden auf deinen Namen ausgestellt und per E-Mail zugestellt.</p>

						<div class="form-row">
							<div class="field-group">
								<label class="field-label" for="fname">Vorname</label>
								<input
									id="fname"
									class="input"
									type="text"
									placeholder="Max"
									bind:value={firstName}
								/>
							</div>
							<div class="field-group">
								<label class="field-label" for="lname">Nachname</label>
								<input
									id="lname"
									class="input"
									type="text"
									placeholder="Mustermann"
									bind:value={lastName}
								/>
							</div>
						</div>

						<div class="field-group">
							<label class="field-label" for="mail">E-Mail-Adresse</label>
							<input
								id="mail"
								class="input"
								type="email"
								placeholder="max@beispiel.at"
								bind:value={email}
							/>
							<span class="field-hint">Deine Tickets und Bestellbestätigung werden hierher gesendet.</span>
						</div>
					</div>

				<!-- ─ Step 4: Order Review + Educational Reveal ─────────────── -->
				{:else}
					<div class="step">
						{#if !revealed}
							<h2 class="step__title">Deine Bestellung</h2>
							<p class="step__intro">Bitte prüfe deine Bestellung vor dem Kauf sorgfältig.</p>
						{:else}
							<h2 class="step__title step__title--reveal">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="vertical-align: -3px; margin-right: 6px;"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
								Dark Pattern entdeckt!
							</h2>
							<p class="step__intro">
								Hier siehst du genau, wie das <strong>„Sneak into Basket"</strong>-Muster auf dich
								angewendet wurde.
							</p>
						{/if}

						<div class="order-summary" class:order-summary--revealed={revealed}>
							<!-- Tickets (always shown normally) -->
							<div class="summary-group">
								<div class="summary-row">
									<span
										>{qty}×
										{tier === 'standard' ? 'Standard' : tier === 'premium' ? 'Premium' : 'VIP'}-Ticket</span
									>
									<span>{f(ticketSub)}</span>
								</div>
								<div class="summary-row summary-row--minor">
									<span>Buchungsgebühr ({qty} × €1,50)</span>
									<span>{f(bookingFee)}</span>
								</div>
							</div>

							<!-- Sneaked items -->
							{#if sneaked.length > 0}
								<div class="summary-group" class:summary-group--sneak={revealed}>
									{#if revealed}
										<div class="sneak-banner">
											<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
											Heimlich hinzugefügt — du hast diese Positionen <strong>nicht</strong> aktiv gewählt!
										</div>
									{/if}
									{#each sneaked as item (item.key)}
										<div class="summary-row" class:summary-row--sneak={revealed}>
											<span>
												{item.name}
												<span class="row-detail">{item.detail}</span>
											</span>
											<span>{f(item.total)}</span>
										</div>
									{/each}
								</div>
							{/if}

							<!-- Total -->
							<div class="summary-total">
								{#if revealed && extrasTotal > 0}
									<div class="summary-breakdown">
										<div class="summary-breakdown__row">
											<span>Deine Tickets</span>
											<span>{f(ticketSub + bookingFee)}</span>
										</div>
										<div class="summary-breakdown__row summary-breakdown__row--sneak">
											<span>Ungefragt hinzugefügt</span>
											<span>{f(extrasTotal)}</span>
										</div>
									</div>
								{/if}
								<div class="summary-total__row">
									<span>Gesamt</span>
									<strong>{f(grandTotal)}</strong>
								</div>
							</div>
						</div>

						<!-- Reveal trigger / Educational callout -->
						{#if !revealed}
							<button class="reveal-btn" onclick={() => (revealed = true)}>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
								Warum ist der Preis so hoch? Zeig mir, was hier passiert
							</button>
						{:else}
							<div class="edu-box">
								<h3 class="edu-box__title">Was ist hier passiert?</h3>
								<p>
									<strong>„Sneak into Basket"</strong> (dt. „heimlich in den Warenkorb schieben") ist
									ein Dark Pattern: Anbieter fügen zusätzliche Produkte oder Dienste
									<em>ohne deine explizite Zustimmung</em> zu deiner Bestellung hinzu — meistens
									durch vorausgewählte Checkboxen.
								</p>
								<ul class="edu-box__list">
									<li>
										<strong>Ticket-Schutz</strong> war vorausgewählt
										<span class="sneak-tag">+ {f(qty * 4.99)}</span>
									</li>
									<li>
										<strong>Fan Starter Bundle</strong> war vorausgewählt
										<span class="sneak-tag">+ {f(24.99)}</span>
									</li>
									<li>
										<strong>Programmheft</strong> war vorausgewählt
										<span class="sneak-tag">+ {f(qty * 3.5)}</span>
									</li>
									<li>
										<strong>Kulturspende</strong> war vorausgewählt
										<span class="sneak-tag">+ {f(2)}</span>
									</li>
								</ul>
								<p class="edu-box__summary">
									Insgesamt wurden <strong class="edu-box__amount">{f(extrasTotal)}</strong> ohne deine
									aktive Auswahl hinzugefügt — das entspricht
									<strong>{Math.round((extrasTotal / ticketSub) * 100)} %</strong>
									des eigentlichen Ticketpreises.
								</p>
								<a href="/sneak-into-basket/explanation" class="edu-link">
									Mehr über dieses Dark Pattern erfahren
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
								</a>
							</div>
						{/if}
					</div>
				{/if}

				<!-- ── Navigation ──────────────────────────────────────────── -->
				<div class="form-nav">
					{#if step > 1}
						<button class="btn btn--ghost" onclick={retreat}>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
							Zurück
						</button>
					{:else}
						<div></div>
					{/if}

					{#if step < 4}
						<button class="btn btn--primary" onclick={advance} disabled={!isValid()}>
							Weiter
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
						</button>
					{:else if !revealed}
						<button class="btn btn--primary" onclick={() => (revealed = true)}>
							Kostenpflichtig bestellen
						</button>
					{:else}
						<a href="/sneak-into-basket/explanation" class="btn btn--primary">
							Erklärung lesen
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
						</a>
					{/if}
				</div>
			</div>
			<!-- /form-card -->
		</div>
	</main>

	<!-- ── Footer ─────────────────────────────────────────────────────────── -->
	<footer class="site-footer">
		<div class="site-footer__inner">
			<span>© 2025 StageDoor Tickets GmbH — <em>Fiktives Beispiel für Bildungszwecke</em></span>
			<a href="/sneak-into-basket/explanation">Dark Pattern Erklärung</a>
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

	/* ─── Site header ─────────────────────────────────────────────────────── */
	.site-header {
		background: var(--color-surface-inverse);
		padding: var(--space-3) 0;
		position: sticky;
		top: 0;
		z-index: 10;
		box-shadow: var(--shadow-md);
	}
	.site-header__inner {
		max-width: var(--container-lg);
		margin: 0 auto;
		padding: 0 var(--space-5);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.brand__name {
		font-family: var(--font-display);
		font-weight: var(--fw-bold);
		font-size: var(--text-lg);
		color: var(--text-inverse);
		letter-spacing: var(--tracking-tight);
	}
	.brand__sub {
		font-size: var(--text-xs);
		color: var(--sky-300);
		font-weight: var(--fw-medium);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
		margin-top: 2px;
	}
	.site-nav {
		display: flex;
		gap: var(--space-5);
	}
	.site-nav a {
		font-size: var(--text-sm);
		color: var(--sky-200);
		font-weight: var(--fw-medium);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-standard);
	}
	.site-nav a:hover {
		color: var(--neutral-0);
		text-decoration: none;
	}

	/* ─── Event hero ──────────────────────────────────────────────────────── */
	.hero {
		position: relative;
		overflow: hidden;
		padding: var(--space-10) var(--space-5) var(--space-9);
	}
	.hero__bg {
		position: absolute;
		inset: 0;
		background:
			var(--gradient-signet),
			radial-gradient(ellipse 80% 60% at 70% 50%, rgba(128, 204, 219, 0.15) 0%, transparent 70%);
		z-index: 0;
	}
	.hero__bg::after {
		content: '';
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 60px,
			rgba(255, 255, 255, 0.03) 60px,
			rgba(255, 255, 255, 0.03) 61px
		);
	}
	.hero__inner {
		position: relative;
		z-index: 1;
		max-width: var(--container-lg);
		margin: 0 auto;
	}
	.eyebrow {
		display: inline-block;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--sky-300);
		margin-bottom: var(--space-3);
	}
	.hero__title {
		font-family: var(--font-display);
		font-size: clamp(3rem, 8vw, var(--text-5xl));
		font-weight: var(--fw-heavy);
		line-height: var(--leading-tight);
		letter-spacing: var(--tracking-tight);
		color: var(--neutral-0);
		margin: 0 0 var(--space-5);
		text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
	}
	.hero__meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
	}
	.hero__meta span {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--fw-medium);
		color: rgba(255, 255, 255, 0.85);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(6px);
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-pill);
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	/* ─── Main layout ─────────────────────────────────────────────────────── */
	.main {
		flex: 1;
		padding: var(--space-8) var(--space-5) var(--space-10);
	}
	.container {
		max-width: 620px;
		margin: 0 auto;
	}

	/* ─── Progress indicator ──────────────────────────────────────────────── */
	.progress {
		display: flex;
		align-items: center;
		margin-bottom: var(--space-6);
	}
	.progress__line {
		flex: 1;
		height: 2px;
		background: var(--border);
		transition: background var(--duration-base) var(--ease-standard);
	}
	.progress__line--done {
		background: var(--color-primary);
	}
	.progress__step {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-1);
	}
	.progress__dot {
		width: 32px;
		height: 32px;
		border-radius: var(--radius-pill);
		background: var(--color-surface);
		border: 2px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-muted);
		transition: all var(--duration-base) var(--ease-standard);
	}
	.progress__step--active .progress__dot {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--text-inverse);
		box-shadow: var(--shadow-md);
	}
	.progress__step--done .progress__dot {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--text-inverse);
	}
	.progress__label {
		font-size: var(--text-xs);
		font-weight: var(--fw-medium);
		color: var(--text-muted);
	}
	.progress__step--active .progress__label {
		color: var(--color-primary);
		font-weight: var(--fw-semibold);
	}
	.progress__step--done .progress__label {
		color: var(--text-body);
	}

	/* ─── Form card ───────────────────────────────────────────────────────── */
	.form-card {
		background: var(--color-surface);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
	}

	/* ─── Step content ────────────────────────────────────────────────────── */
	.step {
		padding: var(--space-7) var(--space-7) var(--space-5);
	}
	.step__title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-2);
	}
	.step__title--reveal {
		color: var(--color-accent);
	}
	.step__intro {
		font-size: var(--text-sm);
		color: var(--text-muted);
		margin: 0 0 var(--space-6);
	}

	/* ─── Field groups ────────────────────────────────────────────────────── */
	.field-group {
		margin-bottom: var(--space-5);
	}
	.field-label {
		display: block;
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-body);
		margin-bottom: var(--space-3);
	}
	.field-hint {
		display: block;
		font-size: var(--text-xs);
		color: var(--text-muted);
		margin-top: var(--space-2);
	}

	/* ─── Tier cards (Step 1) ─────────────────────────────────────────────── */
	.tier-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-3);
	}
	.tier-card {
		display: flex;
		flex-direction: column;
		padding: var(--space-4);
		border: 2px solid var(--border);
		border-radius: var(--radius-md);
		cursor: pointer;
		transition: all var(--duration-fast) var(--ease-standard);
		background: var(--color-surface);
	}
	.tier-card input {
		display: none;
	}
	.tier-card:hover {
		border-color: var(--color-primary);
		background: var(--color-primary-soft);
	}
	.tier-card--selected {
		border-color: var(--color-primary);
		background: var(--color-primary-soft);
		box-shadow: var(--shadow-sm);
	}
	.tier-card__name {
		font-weight: var(--fw-bold);
		font-size: var(--text-sm);
		color: var(--text-strong);
		margin-bottom: var(--space-1);
	}
	.tier-card--selected .tier-card__name {
		color: var(--color-primary);
	}
	.tier-card__price {
		font-size: var(--text-md);
		font-weight: var(--fw-heavy);
		color: var(--color-primary);
		margin-bottom: var(--space-2);
	}
	.tier-card__desc {
		font-size: var(--text-xs);
		color: var(--text-muted);
		line-height: var(--leading-normal);
	}

	/* ─── Quantity (Step 1) ───────────────────────────────────────────────── */
	.qty {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}
	.qty__btn {
		width: 36px;
		height: 36px;
		border-radius: var(--radius-pill);
		border: 2px solid var(--border);
		background: var(--color-surface);
		font-size: var(--text-md);
		font-weight: var(--fw-bold);
		color: var(--text-body);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--duration-fast) var(--ease-standard);
	}
	.qty__btn:hover {
		border-color: var(--color-primary);
		color: var(--color-primary);
		background: var(--color-primary-soft);
	}
	.qty__val {
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		min-width: 2ch;
		text-align: center;
	}

	/* ─── Subtotal (Step 1) ───────────────────────────────────────────────── */
	.subtotal {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-4);
		background: var(--color-surface-sunken);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		color: var(--text-muted);
		margin-top: var(--space-2);
	}
	.subtotal strong {
		font-size: var(--text-md);
		color: var(--text-strong);
	}

	/* ─── Radio list (Step 2 legitimate) ─────────────────────────────────── */
	.radio-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.radio-row {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		cursor: pointer;
		font-size: var(--text-sm);
		color: var(--text-body);
		background: var(--color-surface);
		transition: all var(--duration-fast) var(--ease-standard);
	}
	.radio-row:hover {
		border-color: var(--color-primary);
		background: var(--color-primary-soft);
	}
	.radio-row--selected {
		border-color: var(--color-primary);
		background: var(--color-primary-soft);
	}

	/* ─── Extras block (Step 2 — the dark pattern!) ───────────────────────── */
	.extras-block {
		background: var(--color-surface-sunken);
		border-radius: var(--radius-md);
		border: 1px solid var(--border);
		overflow: hidden;
		margin-bottom: var(--space-5);
	}
	.extras-block__head {
		padding: var(--space-3) var(--space-4);
		background: var(--color-surface);
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
	}
	.extras-block__title {
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-body);
	}
	.extras-block__sub {
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	/* ─── Extra item cards ────────────────────────────────────────────────── */
	.extra {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding: var(--space-4);
		border-bottom: 1px solid var(--border);
		cursor: pointer;
		transition: background var(--duration-fast) var(--ease-standard);
		background: var(--color-surface);
	}
	.extra:last-child {
		border-bottom: none;
	}
	.extra:hover {
		background: var(--color-surface-sunken);
	}
	.extra--on {
		background: var(--color-surface);
	}
	.extra--charity {
		border-left: 3px solid var(--color-accent);
	}
	.extra--light {
		background: transparent;
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
	}
	.extra__check {
		margin-top: 2px;
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		accent-color: var(--color-primary);
		cursor: pointer;
	}
	.extra__icon {
		font-size: var(--text-md);
		flex-shrink: 0;
		margin-top: 1px;
	}
	.extra__body {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		flex: 1;
	}
	.extra__name {
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-strong);
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}
	.extra__desc {
		font-size: var(--text-xs);
		color: var(--text-muted);
		line-height: var(--leading-normal);
	}
	.extra__price {
		font-style: normal;
		font-weight: var(--fw-semibold);
		color: var(--text-body);
		margin-left: var(--space-1);
	}
	.badge-pop {
		font-size: var(--text-2xs);
		font-weight: var(--fw-semibold);
		background: var(--color-highlight-soft);
		color: var(--color-on-highlight);
		padding: 2px var(--space-2);
		border-radius: var(--radius-pill);
		letter-spacing: var(--tracking-wide);
	}

	/* ─── Contact form (Step 3) ───────────────────────────────────────────── */
	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-4);
	}
	.input {
		width: 100%;
		padding: var(--space-3) var(--space-4);
		font-family: var(--font-body);
		font-size: var(--text-base);
		color: var(--text-strong);
		background: var(--color-surface);
		border: 1.5px solid var(--border-strong);
		border-radius: var(--radius-sm);
		outline: none;
		transition: border-color var(--duration-fast) var(--ease-standard);
		box-sizing: border-box;
	}
	.input:focus {
		border-color: var(--color-primary);
		box-shadow: var(--shadow-focus);
	}
	.input::placeholder {
		color: var(--text-subtle);
	}

	/* ─── Order summary (Step 4) ──────────────────────────────────────────── */
	.order-summary {
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		overflow: hidden;
		margin-bottom: var(--space-5);
	}
	.summary-group {
		border-bottom: 1px solid var(--border);
	}
	.summary-group--sneak {
		background: var(--color-accent-soft);
		border-color: var(--color-accent);
	}
	.summary-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: var(--space-3) var(--space-5);
		font-size: var(--text-sm);
		color: var(--text-body);
	}
	.summary-row--minor {
		color: var(--text-muted);
		font-size: var(--text-xs);
	}
	.summary-row--sneak {
		color: var(--color-accent);
		font-weight: var(--fw-medium);
	}
	.row-detail {
		font-size: var(--text-xs);
		color: var(--text-muted);
		font-weight: var(--fw-regular);
		margin-left: var(--space-2);
	}
	.sneak-banner {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-5);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		color: var(--color-accent);
		background: var(--color-accent-soft);
		border-bottom: 1px solid rgba(228, 0, 58, 0.2);
	}
	.summary-total {
		padding: var(--space-4) var(--space-5);
		background: var(--color-surface-sunken);
	}
	.summary-breakdown {
		margin-bottom: var(--space-3);
		padding-bottom: var(--space-3);
		border-bottom: 1px dashed var(--border);
	}
	.summary-breakdown__row {
		display: flex;
		justify-content: space-between;
		font-size: var(--text-xs);
		color: var(--text-muted);
		padding: var(--space-1) 0;
	}
	.summary-breakdown__row--sneak {
		color: var(--color-accent);
		font-weight: var(--fw-semibold);
	}
	.summary-total__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--text-md);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
	}
	.summary-total__row strong {
		font-size: var(--text-xl);
		color: var(--color-primary);
	}

	/* ─── Reveal button ───────────────────────────────────────────────────── */
	.reveal-btn {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		width: 100%;
		padding: var(--space-4);
		background: var(--color-surface-sunken);
		border: 1.5px dashed var(--border-strong);
		border-radius: var(--radius-md);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: var(--fw-medium);
		color: var(--text-muted);
		cursor: pointer;
		transition: all var(--duration-fast) var(--ease-standard);
		margin-bottom: var(--space-4);
	}
	.reveal-btn:hover {
		border-color: var(--color-primary);
		color: var(--color-primary);
		background: var(--color-primary-soft);
	}

	/* ─── Educational callout ─────────────────────────────────────────────── */
	.edu-box {
		background: var(--petrol-100);
		border: 1.5px solid var(--petrol-300);
		border-radius: var(--radius-md);
		padding: var(--space-5);
		margin-bottom: var(--space-4);
	}
	.edu-box__title {
		font-family: var(--font-display);
		font-size: var(--text-md);
		font-weight: var(--fw-bold);
		color: var(--color-primary);
		margin: 0 0 var(--space-3);
	}
	.edu-box p {
		font-size: var(--text-sm);
		color: var(--text-body);
		margin-bottom: var(--space-3);
	}
	.edu-box__list {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.edu-box__list li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: var(--text-sm);
		color: var(--text-body);
		padding: var(--space-2) var(--space-3);
		background: var(--color-surface);
		border-radius: var(--radius-sm);
		border-left: 3px solid var(--color-accent);
	}
	.sneak-tag {
		font-size: var(--text-xs);
		font-weight: var(--fw-bold);
		color: var(--color-accent);
		background: var(--color-accent-soft);
		padding: 2px var(--space-2);
		border-radius: var(--radius-pill);
	}
	.edu-box__summary {
		font-size: var(--text-sm);
		color: var(--text-body);
		margin-bottom: var(--space-4);
	}
	.edu-box__amount {
		color: var(--color-accent);
		font-size: var(--text-md);
	}
	.edu-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--color-primary);
		text-decoration: none;
		padding: var(--space-2) var(--space-4);
		background: var(--color-surface);
		border-radius: var(--radius-pill);
		border: 1.5px solid var(--color-primary);
		transition: all var(--duration-fast) var(--ease-standard);
	}
	.edu-link:hover {
		background: var(--color-primary);
		color: var(--text-inverse);
		text-decoration: none;
	}

	/* ─── Navigation buttons ──────────────────────────────────────────────── */
	.form-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-4) var(--space-7);
		border-top: 1px solid var(--border);
		background: var(--color-surface-sunken);
	}
	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-5);
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
	.btn--primary:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
	.btn--ghost {
		background: transparent;
		color: var(--text-muted);
		border-color: var(--border);
	}
	.btn--ghost:hover {
		border-color: var(--border-strong);
		color: var(--text-body);
		background: var(--color-surface);
	}

	/* ─── Site footer ─────────────────────────────────────────────────────── */
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
	.site-footer__inner a {
		font-size: var(--text-xs);
		color: var(--color-primary);
		font-weight: var(--fw-medium);
	}

	/* ─── Responsive ──────────────────────────────────────────────────────── */
	@media (max-width: 520px) {
		.tier-grid {
			grid-template-columns: 1fr;
		}
		.form-row {
			grid-template-columns: 1fr;
		}
		.step {
			padding: var(--space-5) var(--space-4) var(--space-4);
		}
		.form-nav {
			padding: var(--space-4);
		}
		.hero__title {
			font-size: var(--text-4xl);
		}
	}
</style>
