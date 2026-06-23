<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { getCompleted, PROGRESS_EVENT } from '$lib/progress';

	const trickquestionsStorageKey = 'dark-pattern-trickquestions-solved';
	let completed = $state<string[]>([]);

	function refreshCompleted() {
		const merged = new Set(getCompleted());
		if (localStorage.getItem(trickquestionsStorageKey) === 'true') {
			merged.add('trickquestions');
		}
		completed = [...merged];
	}

	onMount(() => {
		refreshCompleted();
		window.addEventListener(PROGRESS_EVENT, refreshCompleted);
		window.addEventListener('storage', refreshCompleted);
		return () => {
			window.removeEventListener(PROGRESS_EVENT, refreshCompleted);
			window.removeEventListener('storage', refreshCompleted);
		};
	});

	const routes = [
		{
			href: '/overloading',
			number: '01',
			tag: 'Überwältigung',
			title: 'OVER\u00ADLOADING',
			teaser: 'Zu viele Optionen auf einmal – bis du aufgibst und einfach auf „Weiter" klickst.',
			color: 'sky'
		},
		{
			href: '/trickquestions',
			number: '02',
			tag: 'Fangfragen',
			title: 'TRICK QUESTIONS',
			teaser:
				'Doppelverneinungen im Kleingedruckten: ein Häkchen, das genau das Gegenteil bedeutet.',
			color: 'amber'
		},
		{
			href: '/simulated-urgency',
			number: '03',
			tag: 'Künstliche Dringlichkeit',
			title: 'SIMULATED URGENCY',
			teaser: 'Nur noch 2 Plätze! Angebot endet in 00:59 – Druck erzeugt Entscheidungen.',
			color: 'red'
		},
		{
			href: '/misdirection',
			number: '04',
			tag: 'Ablenkungsmanöver',
			title: 'MIS\u00ADDIRECTION',
			teaser: 'Design lenkt dich bewusst von der Information ab, die du wirklich brauchst.',
			color: 'petrol'
		},
		{
			href: '/hidden-costs',
			number: '05',
			tag: 'Versteckte Kosten',
			title: 'HIDDEN COSTS',
			teaser:
				'Der Preis, den du siehst, ist nicht der Preis, den du zahlst. Die Wahrheit kommt ganz am Ende.',
			color: 'red'
		},
		{
			href: '/sneak-into-basket',
			number: '06',
			tag: 'Ungebetene Gäste',
			title: 'SNEAK INTO BASKET',
			teaser: 'Irgendwie liegt da etwas im Warenkorb, das du nie hineingelegt hast. Wirklich nie?',
			color: 'sky'
		},
		{
			href: '/bait-and-switch',
			number: '07',
			tag: 'Köder & Tausch',
			title: 'BAIT & SWITCH',
			teaser: 'Du wolltest kündigen. Irgendwie hast du verlängert. Wie ist das passiert?',
			color: 'petrol'
		},
		{
			href: '/confirmshaming',
			number: '08',
			tag: 'Schuldgefühle per Design',
			title: 'CONFIRM\u00ADSHAMING',
			teaser:
				'„Nein danke, ich verzichte lieber auf meine Zukunft." – Ablehnen soll sich falsch anfühlen.',
			color: 'red'
		},
		{
			href: '/roach-motel',
			number: '09',
			tag: 'Kein Ausweg',
			title: 'ROACH MOTEL',
			teaser: 'Rein kommst du problemlos. Wieder heraus? Das ist eine ganz andere Geschichte.',
			color: 'amber'
		}
	] as const;
</script>

<div class="page">
	<header class="hero">
		<div class="hero__inner">
			<div class="hero__accent-bar johak-accent-bar"></div>
			<span class="eyebrow">Interaktives Lernlabor</span>
			<h1 class="hero__title">DARK PATTERNS</h1>
			<p class="hero__lead">
				Manipulatives Design, das täuscht, drängt und überwältigt – und du wirst es selbst erleben.
			</p>
		</div>
	</header>

	<section class="explainer">
		<div class="explainer__inner">
			<span class="eyebrow eyebrow--dark">Was sind Dark Patterns?</span>
			<h2 class="section-title">DESIGN, DAS GEGEN DICH ARBEITET.</h2>
			<p class="body-text">
				Dark Patterns sind Designtricks, die dich absichtlich in die Irre führen. Statt dir zu
				helfen, nutzen sie Psychologie und visuelle Täuschung, um dich zu Entscheidungen zu bewegen,
				die du eigentlich nie treffen wolltest: ungewollte Abos, versteckte Kosten, manipulative
				Formulierungen. Der Begriff wurde 2010 vom UX-Designer Harry Brignull geprägt – heute sind
				diese Muster in digitalen Produkten allgegenwärtig.
			</p>
			<p class="body-text">
				Auf diesen neun Seiten begegnest du realen Manipulationstechniken – interaktiv nachgebaut.
				Jede Seite ist eine Falle. <strong>Erkennst du sie, bevor sie zuschnappt?</strong>
			</p>
			<div class="challenge">
				<div class="challenge__bar johak-accent-bar"></div>
				<div class="challenge__body">
					<h3 class="challenge__title">DEINE AUFGABE</h3>
					<p class="challenge__text">
						Navigiere durch jede Seite und versuche, die Manipulation zu erkennen – bevor sie dich
						erwischt. Neun Fallen warten auf dich. Findest du deinen Weg durch alle?
					</p>
				</div>
			</div>
		</div>
	</section>

	<main class="grid-section">
		<div class="grid-inner">
			<div class="cards" lang="en">
				{#each routes as route (route.href)}
					{@const done = completed.includes(route.href.slice(1))}
					<a href={base + route.href} class="card" data-color={route.color}>
						{#if done}
							<span class="card__solved" aria-label="GELÖST">GELÖST</span>
						{/if}
						<div class="card__number">{route.number}</div>
						<div class="card__content">
							<span class="card__tag">{route.tag}</span>
							<h3 class="card__title">{route.title}</h3>
							<p class="card__teaser">{route.teaser}</p>
						</div>
						<div class="card__arrow" aria-hidden="true">→</div>
					</a>
				{/each}
			</div>
		</div>
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
		background-color: var(--color-bg);
		font-family: var(--font-body);
	}

	.hero {
		background: var(--gradient-signet);
		padding: var(--space-12) var(--space-5) var(--space-10);
		text-align: center;
		color: var(--text-inverse);
	}

	.hero__inner {
		max-width: var(--container-md);
		margin: 0 auto;
	}

	.hero__accent-bar {
		height: 5px;
		width: 80px;
		margin: 0 auto var(--space-6);
		border-radius: var(--radius-pill);
	}

	.hero__title {
		font-family: var(--font-display);
		font-size: var(--text-5xl);
		font-weight: var(--fw-heavy);
		letter-spacing: var(--tracking-tight);
		line-height: var(--leading-tight);
		color: var(--neutral-0);
		margin: var(--space-3) 0 var(--space-5);
	}

	.hero__lead {
		font-size: var(--text-lg);
		line-height: var(--leading-relaxed);
		color: var(--sky-200);
		margin: 0 auto;
		max-width: 540px;
	}

	.eyebrow {
		display: inline-block;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--color-sky);
	}

	.eyebrow--dark {
		color: var(--color-primary);
	}

	.explainer {
		padding: var(--space-12) var(--space-5);
		background: var(--color-surface);
	}

	.explainer__inner {
		max-width: var(--container-md);
		margin: 0 auto;
	}

	.section-title {
		font-family: var(--font-display);
		font-size: var(--text-3xl);
		font-weight: var(--fw-heavy);
		letter-spacing: var(--tracking-tight);
		color: var(--text-strong);
		margin: var(--space-2) 0 var(--space-6);
	}

	.body-text {
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		color: var(--text-body);
		max-width: 680px;
		margin: 0 0 var(--space-4);
	}

	.challenge {
		margin-top: var(--space-8);
		background: var(--color-bg);
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
	}

	.challenge__bar {
		height: 5px;
	}

	.challenge__body {
		padding: var(--space-6) var(--space-7);
	}

	.challenge__title {
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: var(--fw-bold);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
		color: var(--color-primary);
		margin: 0 0 var(--space-3);
	}

	.challenge__text {
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		color: var(--text-body);
		margin: 0;
	}

	.grid-section {
		padding: var(--space-10) var(--space-5) var(--space-12);
		background: var(--color-bg);
	}

	.grid-inner {
		max-width: var(--container-xl);
		margin: 0 auto;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--space-5);
	}

	.card {
		display: flex;
		flex-direction: column;
		background: var(--color-surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-card);
		padding: var(--space-6);
		text-decoration: none;
		color: inherit;
		box-shadow: var(--shadow-sm);
		transition:
			box-shadow var(--duration-base) var(--ease-standard),
			transform var(--duration-base) var(--ease-out);
		position: relative;
		overflow: hidden;
	}

	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background-color: var(--card-accent, var(--color-primary));
	}

	.card[data-color='sky'] {
		--card-accent: var(--color-sky);
	}
	.card[data-color='amber'] {
		--card-accent: var(--color-highlight);
	}
	.card[data-color='red'] {
		--card-accent: var(--color-accent);
	}
	.card[data-color='petrol'] {
		--card-accent: var(--color-primary);
	}

	.card:hover {
		box-shadow: var(--shadow-lg);
		transform: translateY(-3px);
	}

	.card:focus-visible {
		outline: none;
		box-shadow: var(--shadow-focus);
	}

	.card__number {
		font-family: var(--font-display);
		font-size: var(--text-3xl);
		font-weight: var(--fw-heavy);
		letter-spacing: var(--tracking-tight);
		color: var(--card-accent, var(--color-primary));
		opacity: 0.25;
		line-height: 1;
		margin-bottom: var(--space-3);
	}

	.card__solved {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		align-self: flex-end;
		width: fit-content;
		padding: var(--space-2) var(--space-4);
		margin-bottom: var(--space-3);
		border-radius: var(--radius-pill);
		background-color: var(--color-success);
		color: var(--text-inverse);
		font-size: var(--text-xs);
		font-weight: var(--fw-bold);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
	}

	.card__content {
		flex: 1;
	}

	.card__tag {
		display: inline-block;
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		letter-spacing: var(--tracking-wider);
		text-transform: uppercase;
		color: var(--text-muted);
		margin-bottom: var(--space-2);
	}

	.card__title {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-heavy);
		letter-spacing: var(--tracking-tight);
		color: var(--text-strong);
		margin: 0 0 var(--space-3);
		hyphens: auto;
		word-break: break-word;
	}

	.card__teaser {
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--text-body);
		margin: 0;
	}

	.card__arrow {
		font-size: var(--text-lg);
		color: var(--card-accent, var(--color-primary));
		margin-top: var(--space-5);
		align-self: flex-end;
		transition: transform var(--duration-fast) var(--ease-out);
	}

	.card:hover .card__arrow {
		transform: translateX(4px);
	}
</style>
