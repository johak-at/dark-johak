<script lang="ts">
	// Multi-step form demonstrating the "Confirmshaming" dark pattern.
	// Each step has a primary CTA and a confirmshaming decline button that
	// uses guilt-inducing language instead of a neutral "Nein danke".

	type Step = 'newsletter' | 'event' | 'premium' | 'done';

	let step = $state<Step>('newsletter');
	let shamed = $state(false); // tracks whether user clicked a confirmshaming button
	let shamedCount = $state(0);

	function advance(to: Step, wasShamed = false) {
		if (wasShamed) {
			shamed = true;
			shamedCount += 1;
		}
		step = to;
	}

	function restart() {
		step = 'newsletter';
		shamed = false;
		shamedCount = 0;
	}

	// Steps config — each has a normal accept and a confirmshaming decline label
	const steps = {
		newsletter: {
			title: 'JO.HAK NEWSLETTER',
			body: 'Bleib informiert über Schnuppertage, Stipendien und Neuigkeiten aus der JO.HAK – direkt in deinem Posteingang.',
			accept: 'Ja, ich will informiert bleiben!',
			shame: 'Nein, ich verzichte gerne auf wichtige Infos.',
			next: 'event' as Step,
			shameNext: 'event' as Step,
		},
		event: {
			title: 'EINLADUNG: OPEN HOUSE',
			body: 'Am 15. März öffnen wir unsere Türen. Triff Lehrer, schau dir die Klassen an und finde heraus, welcher Bildungsweg zu dir passt.',
			accept: 'Platz sichern – kostenlos!',
			shame: 'Nein, ich brauche keine Zukunftsperspektive.',
			next: 'premium' as Step,
			shameNext: 'premium' as Step,
		},
		premium: {
			title: 'CAREER STARTER PAKET',
			body: 'Exklusive Lernunterlagen, Prüfungsvorbereitungen und Kontakte zu unserem Netzwerk aus 500+ Unternehmen.',
			accept: 'Ja, ich will meinen Traumjob!',
			shame: 'Nein, ich kümmere mich lieber nicht um meine Karriere.',
			next: 'done' as Step,
			shameNext: 'done' as Step,
		},
	};
</script>

<div class="page">
	<!-- Explanation header -->
	<header class="explainer">
		<div class="explainer__inner">
			<span class="eyebrow">Dark Pattern</span>
			<h1 class="explainer__title">CONFIRMSHAMING</h1>
			<p class="explainer__desc">
				Confirmshaming ersetzt neutrale Ablehnungsbuttons durch schuldeinflößende Formulierungen –
				das Ablehnen fühlt sich unangenehm an. Klicke durch das Formular und beobachte die
				<mark>rot markierten Buttons</mark>.
			</p>
		</div>
	</header>

	<!-- Multi-step form -->
	<main class="stage">
		{#if step !== 'done'}
			{@const current = steps[step]}

			<!-- Progress dots -->
			<div class="progress" aria-label="Fortschritt">
				{#each ['newsletter', 'event', 'premium'] as s}
					<span
						class="progress__dot"
						class:progress__dot--active={step === s}
						class:progress__dot--done={['newsletter', 'event', 'premium'].indexOf(s) <
							['newsletter', 'event', 'premium'].indexOf(step)}
					></span>
				{/each}
			</div>

			<!-- Card -->
			<div class="card">
				<div class="card__accent-bar johak-accent-bar"></div>

				<div class="card__body">
					<span class="eyebrow">Schritt {['newsletter', 'event', 'premium'].indexOf(step) + 1} von 3</span>
					<h2 class="card__title">{current.title}</h2>
					<p class="card__text">{current.body}</p>

					<div class="card__actions">
						<button class="btn btn--primary" onclick={() => advance(current.next)}>
							{current.accept}
						</button>

						<!-- The confirmshaming button -->
						<button
							class="btn btn--shame"
							onclick={() => advance(current.shameNext, true)}
							aria-label="Ablehnen (Confirmshaming-Beispiel)"
						>
							<span class="btn__shame-label">{current.shame}</span>
							<span class="btn__shame-badge">Confirmshaming</span>
						</button>
					</div>
				</div>
			</div>

		{:else}
			<!-- Done state -->
			<div class="card card--done">
				<div class="card__accent-bar johak-accent-bar"></div>
				<div class="card__body">
					<h2 class="card__title">FORMULAR ABGESCHLOSSEN.</h2>

					{#if shamedCount === 0}
						<p class="card__text">
							Du hast alle Angebote angenommen – kein einziger Confirmshaming-Button wurde geklickt. 🎯
						</p>
					{:else if shamedCount < 3}
						<p class="card__text">
							Du hast <strong>{shamedCount}×</strong> den Confirmshaming-Button genutzt. Hast du gespürt,
							wie unangenehm die Formulierungen waren?
						</p>
					{:else}
						<p class="card__text">
							Du hast <strong>alle drei</strong> Confirmshaming-Buttons geklickt. Das Muster zielt
							darauf ab, diesen unangenehmen Schuldgefühlen auszuweichen – und genau das ist der Trick.
						</p>
					{/if}

					<div class="result-box">
						<h3 class="result-box__title">WARUM IST DAS PROBLEMATISCH?</h3>
						<ul class="result-box__list">
							<li>Manipuliert durch emotionalen Druck statt echter Information</li>
							<li>Nutzer stimmen Dingen zu, die sie eigentlich ablehnen wollen</li>
							<li>Verstößt gegen das Prinzip der informierten Einwilligung</li>
							<li>Zerstört langfristig das Vertrauen in die Marke</li>
						</ul>
					</div>

					<button class="btn btn--primary" onclick={restart}>Nochmal durchspielen</button>
				</div>
			</div>
		{/if}
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		background-color: var(--color-bg);
		font-family: var(--font-body);
	}

	/* ── Explainer header ── */
	.explainer {
		background: var(--gradient-signet);
		padding: var(--space-9) var(--space-5);
		text-align: center;
		color: var(--text-inverse);
	}

	.explainer__inner {
		max-width: var(--container-sm);
		margin: 0 auto;
	}

	.explainer__title {
		font-family: var(--font-display);
		font-size: var(--text-4xl);
		font-weight: var(--fw-heavy);
		letter-spacing: var(--tracking-tight);
		line-height: var(--leading-tight);
		margin: var(--space-2) 0 var(--space-4);
		color: var(--neutral-0);
	}

	.explainer__desc {
		font-size: var(--text-md);
		line-height: var(--leading-relaxed);
		color: var(--sky-200);
		margin: 0;
	}

	.explainer__desc mark {
		background: transparent;
		color: var(--johak-amber);
		font-weight: var(--fw-semibold);
	}

	/* ── Eyebrow ── */
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

	/* ── Stage ── */
	.stage {
		max-width: 520px;
		margin: 0 auto;
		padding: var(--space-9) var(--space-5) var(--space-12);
	}

	/* ── Progress dots ── */
	.progress {
		display: flex;
		justify-content: center;
		gap: var(--space-2);
		margin-bottom: var(--space-6);
	}

	.progress__dot {
		width: 10px;
		height: 10px;
		border-radius: var(--radius-pill);
		background-color: var(--neutral-200);
		transition: background-color var(--duration-base) var(--ease-standard);
	}

	.progress__dot--active {
		background-color: var(--color-primary);
		width: 28px;
	}

	.progress__dot--done {
		background-color: var(--petrol-300);
	}

	/* ── Card ── */
	.card {
		background: var(--color-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-md);
		overflow: hidden;
	}

	.card__accent-bar {
		height: 5px;
	}

	.card__body {
		padding: var(--space-7) var(--space-6);
	}

	.card__title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-heavy);
		letter-spacing: var(--tracking-tight);
		color: var(--text-strong);
		margin: var(--space-1) 0 var(--space-4);
	}

	.card__text {
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		color: var(--text-body);
		margin: 0 0 var(--space-6);
	}

	.card--done .card__title {
		color: var(--color-primary);
	}

	/* ── Actions ── */
	.card__actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	/* ── Buttons ── */
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		border: none;
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-6);
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: var(--fw-bold);
		letter-spacing: var(--tracking-wide);
		cursor: pointer;
		transition:
			background-color var(--duration-fast) var(--ease-standard),
			transform var(--duration-fast) var(--ease-standard),
			box-shadow var(--duration-fast) var(--ease-standard);
		text-transform: uppercase;
	}

	.btn:active {
		transform: scale(0.97);
	}

	.btn--primary {
		background-color: var(--color-primary);
		color: var(--color-on-primary);
		box-shadow: var(--shadow-sm);
	}

	.btn--primary:hover {
		background-color: var(--color-primary-hover);
		box-shadow: var(--shadow-md);
	}

	.btn--primary:focus-visible {
		outline: none;
		box-shadow: var(--shadow-focus);
	}

	/* Confirmshaming button — deliberately small/grey but with red annotation */
	.btn--shame {
		background: transparent;
		border: 1px solid var(--border);
		color: var(--text-muted);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: var(--fw-regular);
		letter-spacing: var(--tracking-normal);
		text-transform: none;
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-pill);
		position: relative;
		flex-direction: column;
		gap: var(--space-1);
		outline: 2px dashed var(--color-accent);
		outline-offset: 2px;
	}

	.btn--shame:hover {
		background-color: var(--color-error-soft);
		border-color: var(--color-accent);
		color: var(--color-accent);
	}

	.btn--shame:focus-visible {
		outline: none;
		box-shadow: var(--shadow-focus);
	}

	.btn__shame-label {
		font-style: italic;
	}

	.btn__shame-badge {
		display: inline-block;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--color-accent);
		background-color: var(--color-accent-soft);
		border-radius: var(--radius-pill);
		padding: 2px var(--space-2);
		font-style: normal;
	}

	/* ── Result box ── */
	.result-box {
		background-color: var(--color-surface-sunken);
		border-left: 4px solid var(--color-accent);
		border-radius: 0 var(--radius-md) var(--radius-md) 0;
		padding: var(--space-5);
		margin-bottom: var(--space-6);
	}

	.result-box__title {
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: var(--fw-bold);
		letter-spacing: var(--tracking-wide);
		color: var(--color-accent);
		margin: 0 0 var(--space-3);
		text-transform: uppercase;
	}

	.result-box__list {
		margin: 0;
		padding-left: var(--space-5);
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--text-body);
	}

	.result-box__list li + li {
		margin-top: var(--space-2);
	}
</style>
