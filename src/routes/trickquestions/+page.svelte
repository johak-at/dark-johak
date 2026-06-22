<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { ChevronDown, AlertTriangle, Target, Eye, Brain, Zap } from 'lucide-svelte';

	const trickquestionsStorageKey = 'dark-pattern-trickquestions-solved';

	let expanded: { [key: string]: boolean } = {};

	onMount(() => {
		localStorage.setItem(trickquestionsStorageKey, 'true');
	});

	function toggleExpanded(id: string) {
		expanded[id] = !expanded[id];
	}

	const trickquestions = [
		{
			id: 'ambiguous-copy',
			title: 'Mehrdeutige Texte',
			description:
				'Vage oder irreführende Formulierungen, um Benutzer über das zu verwirren, dem sie zustimmen.',
			example:
				'Ein "Weiter"-Button, der dich eigentlich für einen kostenpflichtigen Service anmeldet (z. B. bei Online-Shops: "Bestätigen" statt klar "Premium-Mitgliedschaft für €9,99/Monat abschließen")',
			impact: 'Nutzer verpflichten sich versehentlich zu ungewollten Aktionen',
			solution:
				'Klare, explizite Sprache verwenden wie "Premium-Abonnement für €9,99/Monat aktivieren" oder "Kostenpflichtiges Abo starten"'
		},
		{
			id: 'hidden-options',
			title: 'Versteckte Optionen',
			description:
				'Das "Nein" oder die Abmeldenoption verstecken, um es schwierig oder unmöglich zu machen, abzulehnen.',
			example:
				'NewsletterMeldung: großer grüner "Anmelden"-Button, aber "Ablehnen" ist winzig oder in einem Menü versteckt. Oder: "Alle akzeptieren" in groß, "Ablehnen" nur als Link im Footer',
			impact: 'Nutzer können sich nicht einfach weigern; gezwungen in ungewollte Verpflichtungen',
			solution:
				'Alle Optionen gleich prominent und leicht zu finden machen. Nutzerwahlfreiheit gleichermaßen respektieren.'
		},
		{
			id: 'misdirection',
			title: 'Ablenkung',
			description:
				'Aufmerksamkeit von wichtigen Informationen durch visuelle Hierarchie und Layout-Tricks ablenken.',
			example:
				'Reisebuchung: Rabattpreis wird groß hervorgehoben, aber Kleingedrucktes zur automatischen Verlängerung ist unsichtbar. Oder: Versandkosten erst im letzten Schritt sichtbar',
			impact: 'Nutzer übersehen entscheidende Details und treffen uninformierte Entscheidungen',
			solution:
				'Wichtige Informationen im Hauptfokus-Bereich platzieren, konsistente visuelle Gewichtung verwenden'
		},
		{
			id: 'roach-motel',
			title: 'Roach Motel',
			description:
				'"Du kannst jederzeit auschecken, aber du kannst nie gehen" — einfach anmelden, schwer kündigen.',
			example:
				'Fitness-Studio: Anmeldung online in 2 Minuten. Kündigung erfordert: Telefonanruf, Formular ausdrucken, postalisch senden. Oder Streaming-Abo: Über App abonn bar, Kündigung nur per Support-Ticket',
			impact: 'Nutzer sind in ungewollten Abos gefangen',
			solution:
				'Kündigung so einfach wie Anmeldung machen. Direkten Cancel-Button bereitstellen, keine Formulare nötig.'
		},
		{
			id: 'confirmshaming',
			title: 'Beschämende Bestätigung',
			description:
				'Emotional manipulative Button-Texte verwenden, um Nutzer in die Annahme zu schämen.',
			example:
				'"Nein, ich möchte €50 nicht sparen" vs. "Ja, gib mir den Rabatt!" Oder: "Ablehnen, mir ist Datenschutz egal" vs. "Akzeptieren, meine Daten schützen"',
			impact: 'Nutzer fühlen sich durch Manipulation unter Druck gesetzt',
			solution: 'Neutrale Button-Texte verwenden: "Akzeptieren" / "Ablehnen" oder "Ja" / "Nein"'
		},
		{
			id: 'sneak-into-basket',
			title: 'Versteckte Zusätze im Warenkorb',
			description: 'Artikel ohne Zustimmung in den Warenkorb legen, erfordern manuelle Entfernung.',
			example:
				'Flugbuchung: Reiseversicherung (€15) ist automatisch angehakt. Hotel-Upgrade voraus gebucht. Gepäckgebühren schon hinzugefügt. Rückgabegarantie bei Amazon automatisch aktiviert',
			impact: 'Nutzer zahlen für ungewollte Produkte; Checkout-Reibung erhöht sich',
			solution:
				'Extras niemals vorchecken. Nutzer explizit opt-in. Auswirkung auf Gesamtpreis deutlich anzeigen.'
		},
		{
			id: 'forced-continuity',
			title: 'Erzwungene Fortsetzung',
			description:
				'Kostenlose Testversion erfordert Zahlungsdetails, berechnet dann ohne klare Erinnerung oder einfache Kündigung.',
			example:
				'"Kostenloser Monat, gib einfach deine Kreditkarte ein" — überraschende Belastung nach Ablauf. Spotify-Free-User: Unauffällige Erinnerung zur Premium-Umwandlung',
			impact: 'Nutzer werden unerwartet berechnet; Vertrauen wird untergraben',
			solution:
				'Klare Erinnerungen vor Belastungen senden. One-Click-Kündigung. Nie überraschend abbuchen.'
		},
		{
			id: 'hidden-costs',
			title: 'Versteckte Kosten',
			description: 'Unerwartete Gebühren erst im letzten Checkout-Schritt enthüllen.',
			example:
				'Online-Shop: €19,99 Produktpreis ohne Steuern, Versand, Bearbeitungsgebühren — erst im finalen Checkout sichtbar (Gesamtpreis: €42,50). Ticketverkäufer: Karte zeigt €50, Checkout: €71 mit Gebühren',
			impact: 'Warenkorbabbruch, Frustration, negative Bewertungen',
			solution: 'Finalen Gesamtpreis früh anzeigen. Transparenz schafft Vertrauen.'
		}
	];
</script>

<svelte:head>
	<title>Trick Questions – Dunkle Muster & Täuschende UX</title>
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Header -->
	<header class="border-b" style="border-color: var(--border)">
		<div class="container mx-auto px-6 py-12">
			<div class="max-w-3xl">
				<div class="mb-4 flex items-center gap-3">
					<div class="rounded-lg p-2" style="background-color: var(--color-surface)">
						<AlertTriangle size={24} style="color: var(--color-accent)" />
					</div>
					<span class="text-xs font-bold tracking-wide uppercase" style="color: var(--text-muted)">
						Dunkle Muster
					</span>
				</div>
				<h1
					class="mb-4 text-5xl font-bold uppercase"
					style="font-family: var(--font-display); color: var(--color-primary); letter-spacing: -0.02em"
				>
					Trick Questions
				</h1>
				<p class="text-lg leading-relaxed" style="color: var(--text-body)">
					Täuschende Muster in Benutzeroberflächen bringen Menschen dazu, gegen ihre eigentlichen
					Absichten zu handeln. Lerne sie zu erkennen und gestalte stattdessen faire, ethische
					Produkte.
				</p>
			</div>
		</div>
	</header>

	<!-- Intro Section -->
	<section class="container mx-auto px-6 py-12">
		<div class="grid max-w-3xl grid-cols-3 gap-6">
			<div>
				<div
					class="mb-3 inline-block rounded-lg p-3"
					style="background-color: var(--color-sky); opacity: 0.1"
				>
					<Eye size={20} style="color: var(--color-sky)" />
				</div>
				<h3 class="mb-2 font-bold" style="color: var(--text-strong)">Was sind das?</h3>
				<p style="color: var(--text-body); font-size: 0.875rem">
					Absichtlich täuschende Praktiken, um Nutzer zu unerwünschten Aktionen zu bringen:
					Anmeldung, Geldausgaben, Datenteilung oder Kündigungsschwierigkeiten.
				</p>
			</div>

			<div>
				<div
					class="mb-3 inline-block rounded-lg p-3"
					style="background-color: var(--color-accent); opacity: 0.1"
				>
					<Target size={20} style="color: var(--color-accent)" />
				</div>
				<h3 class="mb-2 font-bold" style="color: var(--text-strong)">Warum existieren sie?</h3>
				<p style="color: var(--text-body); font-size: 0.875rem">
					Unternehmen nutzen Fangfragen, um Kurzzeit-Metriken zu boosten: Konversionen, Anmeldungen,
					Umsatz. Sie funktionieren — aber untergraben Vertrauen und schaffen negative
					Nutzererfahrungen langfristig.
				</p>
			</div>

			<div>
				<div
					class="mb-3 inline-block rounded-lg p-3"
					style="background-color: var(--color-highlight); opacity: 0.1"
				>
					<Brain size={20} style="color: var(--color-highlight)" />
				</div>
				<h3 class="mb-2 font-bold" style="color: var(--text-strong)">Wie vermeidet man sie?</h3>
				<p style="color: var(--text-body); font-size: 0.875rem">
					Respektiere Nutzer-Handlungsfreiheit. Sei transparent. Mache Kündigung einfach. Designe
					für Vertrauen, nicht für Konversions-Tricks. Ethisches Design skaliert besser langfristig.
				</p>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<div
		class="container mx-auto my-12 h-px px-6"
		style="background: linear-gradient(to right, transparent, var(--border), transparent)"
	></div>

	<section class="container mx-auto px-6 pb-12">
		<div
			class="max-w-3xl rounded-lg border p-6"
			style="border-color: var(--border); background-color: var(--color-surface)"
		>
			<h2
				class="mb-3 text-2xl font-bold uppercase"
				style="font-family: var(--font-display); color: var(--color-primary)"
			>
				Demo-Beispiele (2 verfügbar)
			</h2>
			<p class="mb-4" style="color: var(--text-body)">
				Hier siehst du zwei Fangfragen aus typischen Oberflächen. In beiden Fällen klingt die
				Ablehnung absichtlich unattraktiv.
			</p>
			<div
				class="mb-4 rounded-lg p-4"
				style="background-color: var(--color-bg); border: 1px solid var(--border)"
			>
				<p class="mb-3 font-bold" style="color: var(--text-strong)">Willst du 10 % sparen?</p>
				<div class="flex flex-wrap gap-3">
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold"
						style="background-color: var(--color-primary); color: var(--text-inverse)"
					>
						Ja, Rabatt sichern
					</button>
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold"
						style="background-color: var(--color-surface); color: var(--text-body); border: 1px solid var(--border)"
					>
						Nein, ich zahle lieber mehr
					</button>
				</div>
			</div>
			<p style="color: var(--text-body)">
				Faire Variante: <strong>"Rabatt aktivieren"</strong> und
				<strong>"Ohne Rabatt fortfahren"</strong>.
			</p>

			<div
				class="mt-6 mb-4 rounded-lg p-4"
				style="background-color: var(--color-bg); border: 1px solid var(--border)"
			>
				<p class="mb-3 font-bold" style="color: var(--text-strong)">
					Möchtest du unseren Newsletter abonnieren?
				</p>
				<div class="flex flex-wrap gap-3">
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold"
						style="background-color: var(--color-primary); color: var(--text-inverse)"
					>
						Ja, exklusive Tipps erhalten
					</button>
					<button
						type="button"
						class="rounded-full px-4 py-2 text-sm font-semibold"
						style="background-color: var(--color-surface); color: var(--text-body); border: 1px solid var(--border)"
					>
						Nein, ich verzichte auf Informationen
					</button>
				</div>
			</div>
			<p style="color: var(--text-body)">
				Faire Variante: <strong>"Newsletter abonnieren"</strong> und
				<strong>"Ohne Newsletter fortfahren"</strong>.
			</p>
		</div>
	</section>

	<!-- Patterns List -->
	<section class="container mx-auto px-6 pb-12">
		<h2
			class="mb-8 text-3xl font-bold uppercase"
			style="font-family: var(--font-display); color: var(--color-primary)"
		>
			8 Häufige Fangfragen
		</h2>

		<div class="space-y-4">
			{#each trickquestions as pattern (pattern.id)}
				<button
					type="button"
					class="w-full cursor-pointer rounded-lg border text-left transition-all"
					style="
            border-color: var(--border);
            background-color: {expanded[pattern.id] ? 'var(--color-surface)' : 'transparent'};
          "
					onclick={() => toggleExpanded(pattern.id)}
				>
					<!-- Header -->
					<div
						class="hover:bg-opacity-50 flex items-start justify-between gap-4 p-6 transition"
						style="background-color: {expanded[pattern.id]
							? 'rgba(0, 85, 119, 0.02)'
							: 'transparent'}"
					>
						<div class="flex-1">
							<h3 class="mb-2 text-lg font-bold" style="color: var(--text-strong)">
								{pattern.title}
							</h3>
							<p style="color: var(--text-body); font-size: 0.9375rem">
								{pattern.description}
							</p>
						</div>
						<div class="flex-shrink-0 pt-1">
							<ChevronDown
								size={20}
								style="
                  color: var(--color-primary);
                  transform: rotate({expanded[pattern.id] ? 180 : 0}deg);
                  transition: transform 200ms ease;
                "
							/>
						</div>
					</div>

					<!-- Details (Expandable) -->
					{#if expanded[pattern.id]}
						<div
							class="space-y-6 border-t px-6 py-6"
							style="border-color: var(--border); background-color: var(--color-surface)"
						>
							<div>
								<h4
									class="mb-2 text-sm font-bold tracking-wide uppercase"
									style="color: var(--text-muted)"
								>
									📋 Reales Beispiel
								</h4>
								<p
									class="rounded-lg p-4"
									style="background-color: var(--color-bg); color: var(--text-body); border-left: 3px solid var(--color-accent)"
								>
									{pattern.example}
								</p>
							</div>

							<div>
								<h4
									class="mb-2 text-sm font-bold tracking-wide uppercase"
									style="color: var(--text-muted)"
								>
									⚠️ Auswirkung auf Nutzer
								</h4>
								<p style="color: var(--text-body)">
									{pattern.impact}
								</p>
							</div>

							<div>
								<h4
									class="mb-2 text-sm font-bold tracking-wide uppercase"
									style="color: var(--text-muted)"
								>
									✓ Ethische Alternative
								</h4>
								<p
									class="rounded-lg p-4"
									style="background-color: rgba(0, 170, 0, 0.05); color: var(--text-body); border-left: 3px solid var(--color-success)"
								>
									{pattern.solution}
								</p>
							</div>
						</div>
					{/if}
				</button>
			{/each}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="container mx-auto px-6 py-12">
		<div
			class="rounded-lg p-8 text-center"
			style="background: linear-gradient(135deg, var(--color-sky), var(--color-primary)); color: white"
		>
			<Zap size={32} class="mb-4 inline-block" style="opacity: 0.8" />
			<h2 class="mb-3 text-2xl font-bold uppercase" style="font-family: var(--font-display)">
				Mit Vertrauen bauen
			</h2>
			<p class="mx-auto mb-6 max-w-md">
				Jedes täuschende Muster ist durch eine klare, respektvolle Alternative ersetzbar. Nutzer
				belohnen Transparenz. Gestalte für Menschen, nicht für Konversions-Tricks.
			</p>
			<a
				href={`${base}/`}
				class="inline-block rounded-full px-6 py-2 text-sm font-bold tracking-wide uppercase transition-transform hover:scale-105"
				style="background-color: white; color: var(--color-primary)"
			>
				Mehr Muster erkunden
			</a>
		</div>
	</section>

	<!-- Footer Note -->
	<footer class="container mx-auto px-6 py-8 text-center text-sm" style="color: var(--text-muted)">
		<p>
			Lerne mehr auf <a
				href="https://www.darkpatterns.org"
				target="_blank"
				rel="noopener"
				class="font-bold"
				style="color: var(--color-primary)"
			>
				darkpatterns.org
			</a>
			— Harry Brignulls umfassende Sammlung täuschender Muster.
		</p>
	</footer>

	<div class="container mx-auto px-6 pb-12 text-center">
		<a
			href={`${base}/`}
			class="inline-block rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase"
			style="background-color: var(--color-primary); color: var(--text-inverse)"
		>
			Zur Startseite
		</a>
	</div>
</div>

<style>
	:global(body) {
		background-color: white;
	}

	button {
		text-align: left;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
