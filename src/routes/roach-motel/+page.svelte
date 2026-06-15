<script lang="ts">
	type Phase =
		| 'offer'
		| 'subscribed'
		| 'find-cancel'
		| 'retention1'
		| 'retention2'
		| 'survey'
		| 'pending'
		| 'explanation';

	let phase = $state<Phase>('offer');
	let navOpen = $state(false);
	let findStep = $state(0); // 0=dashboard, 1=settings tabs, 2=subscription tab
	let surveyReason = $state('');
	let surveyFeedback = $state('');
	let surveyNPS = $state<number | null>(null);
	let surveyContact = $state('yes'); // defaults to yes — roach motel trick

	const canSubmitSurvey = $derived(
		surveyReason !== '' && surveyFeedback.trim().length >= 10 && surveyNPS !== null
	);

	function subscribe() {
		phase = 'subscribed';
	}

	function goToFindCancel() {
		phase = 'find-cancel';
		findStep = 0;
		navOpen = false;
	}

	function advanceFind(step: number) {
		findStep = step;
	}

	function goToRetention1() {
		phase = 'retention1';
	}

	function goToRetention2() {
		phase = 'retention2';
	}

	function goToSurvey() {
		phase = 'survey';
	}

	function submitSurvey() {
		if (canSubmitSurvey) phase = 'pending';
	}

	function showExplanation() {
		phase = 'explanation';
	}

	function restart() {
		phase = 'offer';
		navOpen = false;
		findStep = 0;
		surveyReason = '';
		surveyFeedback = '';
		surveyNPS = null;
		surveyContact = 'yes';
	}
</script>

<!-- ===== PAGE WRAPPER ===== -->
<div class="page">

	<!-- ===== TOP META BAR ===== -->
	<header class="meta-bar">
		<span class="eyebrow">Dark Pattern Demo</span>
		<h1 class="meta-title">Roach Motel</h1>
		<p class="meta-desc">
			Es ist sehr einfach, sich anzumelden – aber fast unmöglich, wieder auszusteigen.
			Benannt nach dem Werbeslogan: <em>„You can check in, but you can't check out."</em>
		</p>
		<div class="progress-row">
			{#each (['offer','subscribed','find-cancel','retention1','retention2','survey','pending'] as const) as p, i}
				<div
					class="progress-dot"
					class:active={phase === p}
					class:done={['offer','subscribed','find-cancel','retention1','retention2','survey','pending'].indexOf(phase) > i}
				></div>
			{/each}
		</div>
	</header>

	<!-- ===== DEMO STAGE ===== -->
	<main class="stage">

		<!-- ══════════════════════════════════════
		     PHASE: OFFER — Easy sign-up
		══════════════════════════════════════ -->
		{#if phase === 'offer'}
		<div class="card offer-card">
			<div class="offer-badge">✦ KOSTENLOS STARTEN</div>
			<h2 class="offer-title">JO.HAK<br/>PREMIUM CLUB</h2>
			<p class="offer-tagline">Deine Vorteile als Mitglied</p>
			<ul class="benefit-list">
				<li>✓ Exklusive Lernmaterialien & Skripten</li>
				<li>✓ Vorrang bei Schnuppertagen & Events</li>
				<li>✓ Zugang zum Premium-Netzwerk der Absolventen</li>
				<li>✓ Monatlicher Newsletter mit Karrieretipps</li>
			</ul>
			<button class="btn-primary btn-join" onclick={subscribe}>
				JETZT BEITRETEN — KOSTENLOS
			</button>
			<p class="fine-print">
				Nach 30 Tagen automatisch 9,99 €/Monat. Jederzeit kündbar*
			</p>
			<p class="fine-print fine-print--tiny">
				*Kündigung per Telefon Mo–Fr 9:00–11:30 Uhr oder per Einschreiben möglich.
			</p>
		</div>
		<p class="annotation">⬆ Einmaiger Klick – keine Bestätigung, sofortige Abbuchung nach 30 Tagen.</p>
		{/if}

		<!-- ══════════════════════════════════════
		     PHASE: SUBSCRIBED — Welcome
		══════════════════════════════════════ -->
		{#if phase === 'subscribed'}
		<div class="card welcome-card">
			<div class="welcome-icon">✓</div>
			<h2 class="welcome-title">Willkommen im<br/>JO.HAK Premium Club!</h2>
			<p class="welcome-sub">Du hast jetzt Zugang zu allen Premium-Inhalten.</p>
			<ul class="unlocked-list">
				<li>📚 Lernmaterialien freigeschaltet</li>
				<li>🎟 Events-Priorität aktiviert</li>
				<li>🌐 Netzwerk-Zugang bereit</li>
			</ul>
			<div class="welcome-footer">
				<p class="welcome-manage">
					Möchtest du dein Abo verwalten?
					<button class="link-btn" onclick={goToFindCancel}>Zu den Kontoeinstellungen</button>
				</p>
			</div>
		</div>
		<p class="annotation">⬆ Kündigen? Klingt einfach – versuche es.</p>
		{/if}

		<!-- ══════════════════════════════════════
		     PHASE: FIND-CANCEL — Navigation maze
		══════════════════════════════════════ -->
		{#if phase === 'find-cancel'}
		<div class="card nav-card">

			<!-- Fake app header -->
			<div class="fake-header">
				<span class="fake-logo">JO.HAK</span>
				<nav class="fake-nav">
					<span class="fake-nav-item">Startseite</span>
					<span class="fake-nav-item">Kurse</span>
					<span class="fake-nav-item">Events</span>
					<div class="fake-nav-dropdown-wrap">
						<button
							class="fake-nav-item fake-nav-item--account"
							onclick={() => navOpen = !navOpen}
						>
							Mein Konto ▾
						</button>
						{#if navOpen}
						<div class="fake-dropdown">
							<span class="fake-dd-item">Mein Profil</span>
							<span class="fake-dd-item">Bestellhistorie</span>
							<span class="fake-dd-item">Benachrichtigungen</span>
							<span class="fake-dd-item">Datenschutz</span>
							<button class="fake-dd-item fake-dd-item--cta" onclick={() => advanceFind(1)}>
								Kontoeinstellungen →
							</button>
						</div>
						{/if}
					</div>
				</nav>
			</div>

			<!-- Step 0: Dashboard -->
			{#if findStep === 0}
			<div class="fake-body">
				<h3 class="fake-section-title">Dashboard</h3>
				<p class="fake-body-text">Willkommen zurück! Deine Premium-Mitgliedschaft ist aktiv.</p>
				<div class="fake-widgets">
					<div class="fake-widget">📚 12 neue Materialien</div>
					<div class="fake-widget">🎟 2 Events diese Woche</div>
					<div class="fake-widget">💬 5 neue Nachrichten</div>
				</div>
				<p class="find-hint">👆 Klicke auf <strong>„Mein Konto"</strong> oben rechts, um die Einstellungen zu finden.</p>
			</div>
			{/if}

			<!-- Step 1: Settings tabs -->
			{#if findStep === 1}
			<div class="fake-body">
				<h3 class="fake-section-title">Kontoeinstellungen</h3>
				<div class="fake-tabs">
					<span class="fake-tab">Persönliche Daten</span>
					<span class="fake-tab">Sicherheit</span>
					<span class="fake-tab">Benachrichtigungen</span>
					<span class="fake-tab">Datenschutz</span>
					<span class="fake-tab">Sprache & Region</span>
					<span class="fake-tab">Barrierefreiheit</span>
					<button class="fake-tab fake-tab--target" onclick={() => advanceFind(2)}>
						Abonnement & Zahlungen
					</button>
				</div>
				<div class="fake-settings-content">
					<p class="fake-body-text">Vorname: Max &nbsp;|&nbsp; Nachname: Mustermann</p>
					<p class="fake-body-text">E-Mail: max@example.com</p>
				</div>
				<p class="find-hint">👆 Suche den richtigen Tab – es ist nicht der erste.</p>
			</div>
			{/if}

			<!-- Step 2: Subscription tab -->
			{#if findStep === 2}
			<div class="fake-body">
				<h3 class="fake-section-title">Abonnement & Zahlungen</h3>
				<div class="fake-plan-box">
					<strong>JO.HAK Premium Club</strong>
					<span class="fake-plan-price">9,99 €/Monat</span>
					<span class="fake-plan-status status-active">● Aktiv</span>
				</div>
				<p class="fake-body-text">Nächste Abbuchung: 15. Juli 2026</p>
				<p class="fake-body-text">Zahlungsmethode: •••• 4242</p>
				<div class="fake-actions-row">
					<button class="fake-action-btn">Plan upgraden</button>
					<button class="fake-action-btn">Zahlungsmethode ändern</button>
					<button class="fake-action-btn">Rechnung herunterladen</button>
				</div>
				<div class="cancel-link-wrap">
					<button class="cancel-link" onclick={goToRetention1}>
						Mitgliedschaft beenden
					</button>
				</div>
				<p class="find-hint">⬆ Der Kündigungslink ist ganz unten, klein und unauffällig.</p>
			</div>
			{/if}
		</div>
		{/if}

		<!-- ══════════════════════════════════════
		     PHASE: RETENTION 1 — Fear of loss
		══════════════════════════════════════ -->
		{#if phase === 'retention1'}
		<div class="card retention-card">
			<div class="retention-icon">😢</div>
			<h2 class="retention-title">Bist du WIRKLICH sicher?</h2>
			<p class="retention-sub">Wenn du kündigst, verlierst du sofort:</p>
			<ul class="loss-list">
				<li>✗ Zugang zu 240+ exklusiven Lernmaterialien</li>
				<li>✗ Dein Platz in der Premium-Warteliste für Events</li>
				<li>✗ Alle gesammelten Treuepunkte (312 Punkte)</li>
				<li>✗ Deinen persönlichen Karriere-Coach</li>
				<li>✗ Den vergünstigten Verlängerungspreis</li>
			</ul>
			<button class="btn-primary btn-stay" onclick={restart}>
				✓ MITGLIED BLEIBEN
			</button>
			<div class="tiny-cancel-row">
				<button class="tiny-cancel-btn" onclick={goToRetention2}>
					Kündigung fortsetzen
				</button>
			</div>
		</div>
		<p class="annotation">⬆ Der „Bleiben"-Button ist groß & primär. „Weiter kündigen" ist kaum sichtbar.</p>
		{/if}

		<!-- ══════════════════════════════════════
		     PHASE: RETENTION 2 — Special offer
		══════════════════════════════════════ -->
		{#if phase === 'retention2'}
		<div class="card offer2-card">
			<div class="offer2-badge">⚡ NUR FÜR DICH</div>
			<h2 class="offer2-title">Warte! Exklusives<br/>Angebot für dich.</h2>
			<p class="offer2-price">
				<span class="price-old">9,99 €</span>
				<span class="price-new">4,99 €</span>
				<span class="price-unit">/Monat für 3 Monate</span>
			</p>
			<div class="countdown-box">
				⏱ Dieses Angebot endet in: <strong>09:47</strong>
			</div>
			<button class="btn-primary btn-offer" onclick={restart}>
				ANGEBOT ANNEHMEN & BLEIBEN
			</button>
			<div class="tiny-cancel-row">
				<button class="tiny-cancel-btn" onclick={goToSurvey}>
					Ablehnen und trotzdem kündigen
				</button>
			</div>
		</div>
		<p class="annotation">⬆ Gefälschter Countdown, emotionaler Druck. Kündigen bleibt versteckt.</p>
		{/if}

		<!-- ══════════════════════════════════════
		     PHASE: SURVEY — Mandatory feedback
		══════════════════════════════════════ -->
		{#if phase === 'survey'}
		<div class="card survey-card">
			<h2 class="survey-title">Bitte hilf uns, uns zu verbessern</h2>
			<p class="survey-sub">Bevor wir deine Kündigung bearbeiten, bitten wir dich, dieses kurze Formular auszufüllen. <strong>Alle Felder sind Pflichtfelder.</strong></p>

			<label class="survey-label">
				Warum möchtest du kündigen? *
				<select class="survey-select" bind:value={surveyReason}>
					<option value="">– Bitte wählen –</option>
					<option value="price">Zu teuer</option>
					<option value="use">Nutze es zu selten</option>
					<option value="quality">Qualität nicht überzeugend</option>
					<option value="competitor">Wechsle zu einem Konkurrenten</option>
					<option value="other">Sonstiges</option>
				</select>
			</label>

			<label class="survey-label">
				Was könnten wir besser machen? (mind. 10 Zeichen) *
				<textarea
					class="survey-textarea"
					bind:value={surveyFeedback}
					placeholder="Dein Feedback..."
					rows="3"
				></textarea>
				<span class="char-count" class:valid={surveyFeedback.trim().length >= 10}>
					{surveyFeedback.trim().length}/10 Zeichen
				</span>
			</label>

			<label class="survey-label">
				Wie wahrscheinlich würdest du uns weiterempfehlen? (1–10) *
				<div class="nps-row">
					{#each Array.from({length: 10}, (_, i) => i + 1) as n}
					<button
						class="nps-btn"
						class:selected={surveyNPS === n}
						onclick={() => surveyNPS = n}
					>{n}</button>
					{/each}
				</div>
			</label>

			<label class="survey-label survey-label--inline">
				<span>Darf JO.HAK dich in 6 Monaten erneut kontaktieren?</span>
				<select class="survey-select survey-select--sm" bind:value={surveyContact}>
					<option value="yes">Ja, gerne</option>  <!-- default = yes -->
					<option value="no">Nein</option>
				</select>
			</label>

			<button
				class="btn-primary btn-survey"
				class:disabled={!canSubmitSurvey}
				disabled={!canSubmitSurvey}
				onclick={submitSurvey}
			>
				Kündigung abschicken
			</button>
		</div>
		<p class="annotation">⬆ Pflichtumfrage vor der Kündigung. „Kontakt"-Feld ist standardmäßig auf „Ja".</p>
		{/if}

		<!-- ══════════════════════════════════════
		     PHASE: PENDING — Final obstacle
		══════════════════════════════════════ -->
		{#if phase === 'pending'}
		<div class="card pending-card">
			<div class="pending-icon">📋</div>
			<h2 class="pending-title">Kündigung eingereicht!</h2>
			<p class="pending-sub">Fast geschafft – ein letzter Schritt ist nötig.</p>
			<div class="pending-warning">
				<strong>⚠ Wichtig:</strong> Deine Kündigung gilt erst nach telefonischer Bestätigung als abgeschlossen.
			</div>
			<ul class="pending-steps">
				<li>📞 Ruf uns an: <strong>+43 6412 5555 0</strong><br/>Mo–Fr, 9:00–11:30 Uhr</li>
				<li>✉ Oder schriftlich per Einschreiben an:<br/>JO.HAK St. Johann, Schulstraße 1, 5600 St. Johann im Pongau</li>
			</ul>
			<p class="pending-note">
				Du wirst weiterhin mit 9,99 €/Monat belastet, bis die Kündigung bestätigt wurde. Bereits bezahlte Beträge werden nicht erstattet.
			</p>
			<button class="btn-secondary" onclick={showExplanation}>
				Erklärung anzeigen →
			</button>
		</div>
		<p class="annotation">⬆ Telefonische Bestätigung zu eingeschränkten Zeiten = viele geben hier auf.</p>
		{/if}

		<!-- ══════════════════════════════════════
		     PHASE: EXPLANATION
		══════════════════════════════════════ -->
		{#if phase === 'explanation'}
		<div class="card explanation-card">
			<span class="eyebrow">Analyse</span>
			<h2 class="explanation-title">Roach Motel — Alle Tricks erklärt</h2>
			<p class="explanation-intro">
				Das <strong>Roach Motel</strong>-Muster macht das Beitreten kinderleicht und das Verlassen so schwer wie möglich. Hier sind alle eingesetzten Techniken:
			</p>
			<ol class="trick-list">
				<li>
					<strong>Sofortiger Einstieg ohne Bestätigung</strong><br/>
					Ein einziger Klick – kein „Bist du sicher?", keine E-Mail-Bestätigung. Die Hürde ist null.
				</li>
				<li>
					<strong>Versteckter Kündigungslink</strong><br/>
					Die Kündigung ist in einem 4-stufigen Menü vergraben: Konto → Einstellungen → Abonnement-Tab → kleiner Link ganz unten.
				</li>
				<li>
					<strong>Angst vor Verlust (Fear of Loss)</strong><br/>
					Die erste Retention-Seite listet alles auf, was man verliert – oft übertrieben oder erfunden (z. B. „Treuepunkte").
				</li>
				<li>
					<strong>Gefälschter Countdown (False Urgency)</strong><br/>
					Der 10-Minuten-Timer setzt künstlichen Druck. Er läuft bei jedem Besuch neu – oder gar nicht.
				</li>
				<li>
					<strong>Asymmetrische Buttons</strong><br/>
					„Bleiben" ist groß, primär, farbig. „Weiter kündigen" ist winzig, grau und kaum sichtbar.
				</li>
				<li>
					<strong>Pflichtumfrage als Barriere</strong><br/>
					Vor der Kündigung muss man ein aufwändiges Formular ausfüllen. Viele geben hier auf.
				</li>
				<li>
					<strong>Opt-out statt Opt-in</strong><br/>
					Das Feld „Darf man dich kontaktieren?" ist standardmäßig auf „Ja" gestellt.
				</li>
				<li>
					<strong>Telefonische Bestätigung zu eingeschränkten Zeiten</strong><br/>
					Die Kündigung ist erst gültig nach einem Anruf Mo–Fr 9–11:30 Uhr. Viele kommen nicht dazu – und zahlen weiter.
				</li>
			</ol>
			<button class="btn-primary btn-restart" onclick={restart}>
				↺ Demo neu starten
			</button>
		</div>
		{/if}

	</main>
</div>

<style>
	/* ── Layout ─────────────────────────────────────── */
	.page {
		min-height: 100vh;
		background: var(--color-bg);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-8) var(--space-4);
		gap: var(--space-6);
		font-family: var(--font-body);
	}

	/* ── Meta bar ─────────────────────────────────── */
	.meta-bar {
		width: 100%;
		max-width: var(--container-md);
		background: var(--color-surface-inverse);
		color: var(--text-inverse);
		border-radius: var(--radius-card);
		padding: var(--space-6);
		text-align: center;
	}
	.eyebrow {
		display: inline-block;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--color-sky);
		margin-bottom: var(--space-2);
	}
	.meta-title {
		font-family: var(--font-display);
		font-size: var(--text-3xl);
		font-weight: var(--fw-heavy);
		text-transform: uppercase;
		letter-spacing: var(--tracking-tight);
		line-height: var(--leading-tight);
		color: var(--text-inverse);
		margin: 0 0 var(--space-3);
	}
	.meta-desc {
		font-size: var(--text-base);
		color: var(--neutral-300);
		line-height: var(--leading-relaxed);
		max-width: 56ch;
		margin: 0 auto var(--space-5);
	}
	.meta-desc em { color: var(--color-sky); font-style: italic; }

	.progress-row {
		display: flex;
		justify-content: center;
		gap: var(--space-2);
	}
	.progress-dot {
		width: 10px; height: 10px;
		border-radius: var(--radius-pill);
		background: var(--neutral-600);
		transition: background var(--duration-base) var(--ease-standard);
	}
	.progress-dot.active { background: var(--color-sky); transform: scale(1.3); }
	.progress-dot.done   { background: var(--petrol-400); }

	/* ── Stage ─────────────────────────────────────── */
	.stage {
		width: 100%;
		max-width: var(--container-sm);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-4);
	}

	/* ── Card base ─────────────────────────────────── */
	.card {
		width: 100%;
		background: var(--color-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-md);
		padding: var(--space-7);
	}

	/* ── Annotation ────────────────────────────────── */
	.annotation {
		font-size: var(--text-sm);
		color: var(--text-muted);
		background: var(--amber-100);
		border-left: 3px solid var(--color-highlight);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-sm);
		width: 100%;
		box-sizing: border-box;
	}

	/* ── Shared button styles ───────────────────────── */
	.btn-primary {
		display: block;
		width: 100%;
		padding: var(--space-4) var(--space-6);
		background: var(--color-primary);
		color: var(--text-inverse);
		font-family: var(--font-display);
		font-size: var(--text-base);
		font-weight: var(--fw-bold);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
		border: none;
		border-radius: var(--radius-pill);
		cursor: pointer;
		transition: background var(--duration-fast) var(--ease-standard),
		            transform var(--duration-fast) var(--ease-standard);
	}
	.btn-primary:hover  { background: var(--color-primary-hover); }
	.btn-primary:active { transform: scale(0.97); }
	.btn-primary.disabled {
		background: var(--neutral-300);
		color: var(--neutral-500);
		cursor: not-allowed;
	}
	.btn-secondary {
		display: inline-block;
		padding: var(--space-3) var(--space-5);
		background: transparent;
		border: 1.5px solid var(--color-primary);
		color: var(--color-primary);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		border-radius: var(--radius-pill);
		cursor: pointer;
		transition: background var(--duration-fast) var(--ease-standard);
	}
	.btn-secondary:hover { background: var(--color-primary-soft); }

	.link-btn {
		background: none;
		border: none;
		color: var(--color-primary);
		font-size: inherit;
		font-family: inherit;
		cursor: pointer;
		text-decoration: underline;
		padding: 0;
	}

	.tiny-cancel-row {
		text-align: center;
		margin-top: var(--space-4);
	}
	.tiny-cancel-btn {
		background: none;
		border: none;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		color: var(--text-subtle);
		cursor: pointer;
		text-decoration: underline;
		padding: 0;
	}
	.tiny-cancel-btn:hover { color: var(--text-muted); }

	/* ── OFFER card ─────────────────────────────────── */
	.offer-card { text-align: center; }
	.offer-badge {
		display: inline-block;
		background: var(--color-highlight-soft);
		color: var(--color-on-highlight);
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: var(--fw-bold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		padding: var(--space-1) var(--space-3);
		border-radius: var(--radius-pill);
		margin-bottom: var(--space-4);
	}
	.offer-title {
		font-family: var(--font-display);
		font-size: var(--text-3xl);
		font-weight: var(--fw-heavy);
		text-transform: uppercase;
		letter-spacing: var(--tracking-tight);
		color: var(--color-primary);
		margin: 0 0 var(--space-3);
	}
	.offer-tagline {
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wider);
		margin-bottom: var(--space-4);
	}
	.benefit-list {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-6);
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.benefit-list li {
		font-size: var(--text-base);
		color: var(--text-body);
		padding: var(--space-2) var(--space-3);
		background: var(--color-surface-sunken);
		border-radius: var(--radius-sm);
	}
	.btn-join { background: var(--color-accent); margin-bottom: var(--space-4); }
	.btn-join:hover { background: var(--color-accent-hover); }
	.fine-print {
		font-size: var(--text-xs);
		color: var(--text-muted);
		margin: 0 0 var(--space-1);
	}
	.fine-print--tiny { font-size: var(--text-2xs); color: var(--text-subtle); }

	/* ── WELCOME card ────────────────────────────────── */
	.welcome-card { text-align: center; }
	.welcome-icon {
		width: 64px; height: 64px;
		background: var(--color-success);
		color: #fff;
		font-size: var(--text-2xl);
		font-weight: var(--fw-bold);
		border-radius: var(--radius-pill);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto var(--space-4);
	}
	.welcome-title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-3);
	}
	.welcome-sub {
		color: var(--text-body);
		margin: 0 0 var(--space-5);
	}
	.unlocked-list {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-6);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.unlocked-list li {
		background: var(--color-success-soft);
		color: var(--text-body);
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
	}
	.welcome-footer { border-top: 1px solid var(--border); padding-top: var(--space-4); }
	.welcome-manage { font-size: var(--text-sm); color: var(--text-muted); }

	/* ── FIND-CANCEL (nav maze) ──────────────────────── */
	.nav-card { padding: 0; overflow: hidden; }
	.fake-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-3) var(--space-5);
		background: var(--color-primary);
		color: var(--text-inverse);
	}
	.fake-logo {
		font-family: var(--font-display);
		font-weight: var(--fw-heavy);
		font-size: var(--text-md);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
	}
	.fake-nav { display: flex; align-items: center; gap: var(--space-3); font-size: var(--text-sm); }
	.fake-nav-item {
		color: rgba(255,255,255,0.7);
		cursor: default;
		background: none;
		border: none;
		font-family: var(--font-body);
		font-size: var(--text-sm);
		padding: 0;
	}
	.fake-nav-item--account {
		cursor: pointer;
		color: var(--text-inverse);
		font-weight: var(--fw-semibold);
	}
	.fake-nav-dropdown-wrap { position: relative; }
	.fake-dropdown {
		position: absolute;
		top: calc(100% + var(--space-2));
		right: 0;
		background: var(--color-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-lg);
		min-width: 200px;
		z-index: 10;
		overflow: hidden;
	}
	.fake-dd-item {
		display: block;
		width: 100%;
		padding: var(--space-3) var(--space-4);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		color: var(--text-body);
		background: none;
		border: none;
		text-align: left;
		cursor: default;
		border-bottom: 1px solid var(--border);
	}
	.fake-dd-item:last-child { border-bottom: none; }
	.fake-dd-item--cta {
		cursor: pointer;
		color: var(--color-primary);
		font-weight: var(--fw-semibold);
		background: var(--color-primary-soft);
	}
	.fake-dd-item--cta:hover { background: var(--petrol-200); }

	.fake-body { padding: var(--space-5); }
	.fake-section-title {
		font-family: var(--font-display);
		font-size: var(--text-lg);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-3);
	}
	.fake-body-text { font-size: var(--text-sm); color: var(--text-body); margin: 0 0 var(--space-2); }
	.fake-widgets {
		display: flex;
		gap: var(--space-3);
		flex-wrap: wrap;
		margin: var(--space-4) 0;
	}
	.fake-widget {
		background: var(--color-surface-sunken);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: var(--space-3) var(--space-4);
		font-size: var(--text-sm);
		color: var(--text-body);
	}
	.find-hint {
		font-size: var(--text-sm);
		color: var(--color-highlight);
		background: var(--amber-100);
		border-radius: var(--radius-sm);
		padding: var(--space-3);
		margin-top: var(--space-4);
		margin-bottom: 0;
	}

	.fake-tabs {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-5);
	}
	.fake-tab {
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-sm);
		color: var(--text-muted);
		background: var(--color-surface-sunken);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		cursor: default;
	}
	.fake-tab--target {
		cursor: pointer;
		color: var(--color-primary);
		font-weight: var(--fw-semibold);
		background: var(--color-primary-soft);
		border-color: var(--color-primary);
		font-family: var(--font-body);
	}
	.fake-tab--target:hover { background: var(--petrol-200); }
	.fake-settings-content { color: var(--text-body); font-size: var(--text-sm); }

	.fake-plan-box {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		flex-wrap: wrap;
		background: var(--color-surface-sunken);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: var(--space-4);
		margin-bottom: var(--space-3);
	}
	.fake-plan-price { font-weight: var(--fw-bold); color: var(--text-strong); }
	.status-active {
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		color: var(--color-success);
		background: var(--color-success-soft);
		padding: 2px var(--space-2);
		border-radius: var(--radius-pill);
	}
	.fake-actions-row {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
		margin: var(--space-4) 0;
	}
	.fake-action-btn {
		padding: var(--space-2) var(--space-3);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		color: var(--color-primary);
		background: var(--color-primary-soft);
		border: 1px solid var(--petrol-200);
		border-radius: var(--radius-pill);
		cursor: default;
	}
	.cancel-link-wrap {
		padding-top: var(--space-5);
		border-top: 1px solid var(--border);
		margin-top: var(--space-4);
	}
	.cancel-link {
		background: none;
		border: none;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		color: var(--text-subtle);
		text-decoration: underline;
		cursor: pointer;
	}
	.cancel-link:hover { color: var(--color-error); }

	/* ── RETENTION 1 ────────────────────────────────── */
	.retention-card { text-align: center; }
	.retention-icon { font-size: var(--text-3xl); margin-bottom: var(--space-3); }
	.retention-title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-heavy);
		color: var(--color-accent);
		text-transform: uppercase;
		margin: 0 0 var(--space-3);
	}
	.retention-sub {
		font-size: var(--text-base);
		color: var(--text-body);
		margin: 0 0 var(--space-4);
	}
	.loss-list {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-6);
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.loss-list li {
		padding: var(--space-2) var(--space-3);
		background: var(--color-error-soft);
		color: var(--color-accent);
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		font-weight: var(--fw-medium);
	}
	.btn-stay { background: var(--color-success); margin-bottom: 0; }
	.btn-stay:hover { background: #187f56; }

	/* ── RETENTION 2 ────────────────────────────────── */
	.offer2-card {
		text-align: center;
		background: var(--gradient-signet);
		border-color: transparent;
		color: var(--text-inverse);
	}
	.offer2-badge {
		display: inline-block;
		background: var(--color-highlight);
		color: var(--color-on-highlight);
		font-size: var(--text-xs);
		font-weight: var(--fw-bold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		padding: var(--space-1) var(--space-3);
		border-radius: var(--radius-pill);
		margin-bottom: var(--space-4);
	}
	.offer2-title {
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		font-weight: var(--fw-heavy);
		text-transform: uppercase;
		color: var(--text-inverse);
		margin: 0 0 var(--space-5);
	}
	.offer2-price {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: var(--space-3);
		margin-bottom: var(--space-5);
	}
	.price-old {
		font-size: var(--text-lg);
		text-decoration: line-through;
		color: rgba(255,255,255,0.5);
	}
	.price-new {
		font-family: var(--font-display);
		font-size: var(--text-3xl);
		font-weight: var(--fw-heavy);
		color: var(--color-highlight);
	}
	.price-unit { font-size: var(--text-sm); color: rgba(255,255,255,0.7); }
	.countdown-box {
		display: inline-block;
		background: rgba(0,0,0,0.3);
		color: var(--text-inverse);
		font-size: var(--text-base);
		font-weight: var(--fw-semibold);
		padding: var(--space-3) var(--space-5);
		border-radius: var(--radius-sm);
		margin-bottom: var(--space-6);
	}
	.btn-offer {
		background: var(--color-highlight);
		color: var(--color-on-highlight);
		margin-bottom: 0;
	}
	.btn-offer:hover { background: var(--color-highlight-hover); }
	.offer2-card .tiny-cancel-btn { color: rgba(255,255,255,0.45); }

	/* ── SURVEY ─────────────────────────────────────── */
	.survey-title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-3);
	}
	.survey-sub {
		font-size: var(--text-sm);
		color: var(--text-body);
		margin: 0 0 var(--space-6);
		line-height: var(--leading-relaxed);
	}
	.survey-label {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		color: var(--text-strong);
		margin-bottom: var(--space-5);
	}
	.survey-label--inline {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.survey-select {
		padding: var(--space-2) var(--space-3);
		border: 1.5px solid var(--border);
		border-radius: var(--radius-sm);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		color: var(--text-body);
		background: var(--color-surface);
	}
	.survey-select:focus { border-color: var(--color-primary); outline: none; box-shadow: var(--shadow-focus); }
	.survey-select--sm { width: 140px; }
	.survey-textarea {
		padding: var(--space-3);
		border: 1.5px solid var(--border);
		border-radius: var(--radius-sm);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		color: var(--text-body);
		resize: vertical;
	}
	.survey-textarea:focus { border-color: var(--color-primary); outline: none; box-shadow: var(--shadow-focus); }
	.char-count { font-size: var(--text-xs); color: var(--color-error); font-weight: var(--fw-regular); }
	.char-count.valid { color: var(--color-success); }
	.nps-row {
		display: flex;
		gap: var(--space-1);
		flex-wrap: wrap;
	}
	.nps-btn {
		width: 40px; height: 40px;
		border: 1.5px solid var(--border);
		border-radius: var(--radius-sm);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		cursor: pointer;
		background: var(--color-surface);
		color: var(--text-body);
		transition: background var(--duration-fast), border-color var(--duration-fast);
	}
	.nps-btn:hover { background: var(--color-primary-soft); border-color: var(--color-primary); }
	.nps-btn.selected {
		background: var(--color-primary);
		color: var(--text-inverse);
		border-color: var(--color-primary);
	}
	.btn-survey { margin-top: var(--space-4); }

	/* ── PENDING ────────────────────────────────────── */
	.pending-card { text-align: center; }
	.pending-icon { font-size: var(--text-3xl); margin-bottom: var(--space-3); }
	.pending-title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-2);
	}
	.pending-sub { color: var(--text-muted); margin: 0 0 var(--space-5); }
	.pending-warning {
		background: var(--color-warning-soft);
		border-left: 3px solid var(--color-warning);
		padding: var(--space-4);
		border-radius: var(--radius-sm);
		text-align: left;
		font-size: var(--text-sm);
		color: var(--text-body);
		margin-bottom: var(--space-5);
	}
	.pending-steps {
		list-style: none;
		padding: 0;
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		margin: 0 0 var(--space-5);
	}
	.pending-steps li {
		padding: var(--space-4);
		background: var(--color-surface-sunken);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		color: var(--text-body);
		line-height: var(--leading-relaxed);
	}
	.pending-steps strong { color: var(--text-strong); }
	.pending-note {
		font-size: var(--text-xs);
		color: var(--color-error);
		margin: 0 0 var(--space-6);
		line-height: var(--leading-relaxed);
	}

	/* ── EXPLANATION ────────────────────────────────── */
	.explanation-title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: var(--space-2) 0 var(--space-4);
	}
	.explanation-intro {
		font-size: var(--text-base);
		color: var(--text-body);
		line-height: var(--leading-relaxed);
		margin: 0 0 var(--space-6);
	}
	.trick-list {
		padding-left: var(--space-5);
		margin: 0 0 var(--space-7);
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.trick-list li {
		font-size: var(--text-sm);
		color: var(--text-body);
		line-height: var(--leading-relaxed);
	}
	.trick-list strong { color: var(--text-strong); display: block; margin-bottom: var(--space-1); }
	.btn-restart { background: var(--color-primary); }
</style>
