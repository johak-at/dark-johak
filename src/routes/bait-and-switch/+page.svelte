<script lang="ts">
	type Stage = 'offer' | 'survey' | 'final' | 'education';

	let stage = $state<Stage>('offer');
	let attempts = $state(0);
	let loopMessage = $state('');

	function pushBack(message: string) {
		attempts += 1;
		loopMessage = message;
		stage = 'offer';
	}

	function moveToSurvey() {
		stage = 'survey';
		loopMessage = '';
	}

	function moveToFinal() {
		stage = 'final';
	}

	function completeDemo() {
		stage = 'education';
	}
</script>

<main class="page">
	{#if stage !== 'education'}
		<section class="card">
			<p class="eyebrow">Interaktive Dark-Pattern-Demo</p>
			<h1 class="title">Köder &amp; Tausch</h1>
			<p class="intro">
				Versuche, deinen Tarif zu kündigen. Die Oberfläche drängt dich immer wieder zu einer anderen
				Aktion, als die Beschriftungen vermuten lassen.
			</p>
			<p class="attempts">Ausgelöste Täuschungsschleifen: {attempts}</p>

			{#if loopMessage}
				<p class="warning">{loopMessage}</p>
			{/if}

			{#if stage === 'offer'}
				<div class="block">
					<h2 class="step-title">Schritt 1: Bestätige deine Entscheidung</h2>
					<p class="copy">
						Wir können deinen Tarif mit einem Sonderrabatt aktiv halten. Viele Oberflächen heben diese
						Option hervor und verstecken den eigentlichen nächsten Schritt.
					</p>
					<div class="actions">
						<button
							class="primary"
							type="button"
							onclick={() => pushBack('Rabatt angenommen. Dein Tarif ist weiterhin aktiv.')}
						>
							Rabatt-Tarif behalten
						</button>
						<button
							class="secondary"
							type="button"
							onclick={() => pushBack('Gute Wahl! Wir haben deine Mitgliedschaft erneut gesichert.')}
						>
							Mein Konto sichern
						</button>
					</div>
					<button class="deceptive-link" type="button" onclick={moveToSurvey}>
						Weiter zur Kündigung
					</button>
				</div>
			{:else if stage === 'survey'}
				<div class="block">
					<h2 class="step-title">Schritt 2: Eine kurze Frage</h2>
					<p class="copy">Wähle die Option, die die Kündigung tatsächlich fortsetzt.</p>
					<div class="actions">
						<button
							class="primary"
							type="button"
							onclick={() =>
								pushBack('Danke! Wir haben deinen Tarif optimiert, statt ihn zu kündigen.')}
						>
							Absenden und fortfahren
						</button>
						<button
							class="secondary"
							type="button"
							onclick={() => pushBack('Deine Antworten haben uns geholfen, deine Vorteile aktiv zu halten.')}
						>
							Überprüfung abschließen
						</button>
					</div>
					<button class="deceptive-link" type="button" onclick={moveToFinal}
						>Nein danke, nächster Schritt</button
					>
				</div>
			{:else if stage === 'final'}
				<div class="block">
					<h2 class="step-title">Schritt 3: Letzte Bestätigung</h2>
					<p class="copy">Eine Aktion verdreht deine Absicht noch immer. Finde den echten Ausgang.</p>
					<div class="actions">
						<button
							class="primary"
							type="button"
							onclick={() =>
								pushBack('Fertig! Wir haben dein Konto geschützt, indem wir das Abo behalten haben.')}
						>
							Kündigung abschließen
						</button>
						<button
							class="secondary"
							type="button"
							onclick={() => pushBack('Mit deinem aktuellen Paket ist alles bestens.')}
						>
							Aktualisierung bestätigen
						</button>
					</div>
					<button class="deceptive-link" type="button" onclick={completeDemo}
						>Wirklich kündigen und fortfahren</button
					>
				</div>
			{/if}
		</section>
	{:else}
		<section class="card education">
			<p class="eyebrow">Lern-Analyse</p>
			<h1 class="title">So funktioniert Köder &amp; Tausch</h1>
			<p class="copy">
				Dieses Muster lockt dich mit einer klaren Absicht (Kündigen) und leitet dich dann durch
				irreführende Beschriftungen, visuelle Hierarchie und wiederholte Schleifen zu einem anderen
				Ergebnis (Behalten oder Upgraden) um.
			</p>

			<h2 class="step-title">Was in der Demo passiert ist</h2>
			<ul class="list">
				<li>Primäre Aktionen wirkten sicher, verdrehten aber deine Absicht.</li>
				<li>Der echte Kündigungsweg wurde zu winzigen, link-artigen Bedienelementen herabgestuft.</li>
				<li>
					Jeder Schritt setzte dich an den Anfang zurück, um Ermüdung und versehentliche Zustimmung zu
					steigern.
				</li>
			</ul>

			<h2 class="step-title">So schützt man Nutzer:innen</h2>
			<ul class="list">
				<li>Aktionen mit exakten Ergebnissen beschriften und die Bedeutung konsistent halten.</li>
				<li>Allen gültigen Entscheidungen gleiches visuelles Gewicht geben.</li>
				<li>Erzwungene Schleifen, versteckte Ausgänge und mehrdeutige Bestätigungstexte vermeiden.</li>
			</ul>

			<button class="primary" type="button" onclick={() => (stage = 'offer')}>
				Demo neu starten
			</button>
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

	.warning {
		margin: 0 0 var(--space-5);
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-lg);
		background: color-mix(in srgb, var(--color-warning) 20%, var(--color-surface));
		color: var(--text-strong);
	}

	.block {
		border-top: 1px solid var(--border);
		padding-top: var(--space-5);
	}

	.step-title {
		font-size: var(--text-2xl);
		margin-bottom: var(--space-3);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-bottom: var(--space-4);
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
		transform: scale(0.97);
	}

	button:focus-visible {
		outline: none;
		box-shadow: var(--shadow-focus);
	}

	.primary,
	.secondary {
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-5);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
	}

	.primary {
		background: var(--color-primary);
		color: var(--color-surface);
	}

	.secondary {
		background: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
		color: var(--text-strong);
		border: 1px solid var(--border);
	}

	.deceptive-link {
		background: transparent;
		color: var(--text-muted);
		font-size: var(--text-xs);
		text-decoration: underline;
		text-underline-offset: 3px;
		padding: 0;
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
</style>
