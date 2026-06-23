<script lang="ts">
	import { base } from '$app/paths';

	type Produkt = {
		id: string;
		name: string;
		kategorie: string;
		bild: string;
		preis: string;
		altPreis: string;
		highlight: string;
		beschreibung: string;
		lager: number;
		href: string;
	};

	const produkte: Produkt[] = [
		{
			id: 'rtx-4070',
			name: 'URS-RTX4070-FE-SIG-R1',
			kategorie: 'Grafikkarte',
			bild: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070/geforce-rtx-4070-shop-630-d@2x.png',
			preis: '9,99',
			altPreis: '4.999,99',
			highlight: 'GEWINNER-EXKLUSIV',
			beschreibung: '5.888 CUDA-Kerne · 12 GB GDDR6X · URS-Sense™ KI-Boost',
			lager: 1,
			href: `${base}/misdirection/gewinn`
		},
		{
			id: 'cpu',
			name: 'URS-Ryzen™ X99 "Pongau-Core"',
			kategorie: 'Prozessor',
			bild: 'https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2523038-amd-ryzen-9000-series-desktop-processors-pdp-product-image.png',
			preis: '14,99',
			altPreis: '3.299,00',
			highlight: 'BESTSELLER',
			beschreibung: '24 Kerne · 5,4 GHz Boost · 64 MB L3-Cache · TDP: 105 W',
			lager: 3,
			href: `${base}/misdirection/urs-industries/cpu`
		},
		{
			id: 'ram',
			name: 'URS-DDR5 "Alpenspeicher" 64 GB Kit',
			kategorie: 'Arbeitsspeicher',
			bild: 'https://www.kingston.com/dataSheets/KF556C36BBEK2-64_img.jpg',
			preis: '4,49',
			altPreis: '1.899,00',
			highlight: 'NEU',
			beschreibung: '64 GB DDR5-6000 · CL30 · RGB · Duft: Almwiese (inkl.)',
			lager: 7,
			href: `${base}/misdirection/urs-industries/ram`
		},
		{
			id: 'netzteil',
			name: 'URS PowerFlow™ 1000W "Haushalts-Edition"',
			kategorie: 'Netzteil',
			bild: 'https://www.be-quiet.de/fileadmin/Products/Power_Supply/Dark_Power_13/ATX_3.0/750W/be-quiet-dark-power-13-750w-top.png',
			preis: '7,99',
			altPreis: '2.499,00',
			highlight: 'EMPFOHLEN',
			beschreibung: '1.000 W · 80 PLUS Gold · Vollmodular · ATX 3.0',
			lager: 5,
			href: `${base}/misdirection/urs-industries/netzteil`
		},
		{
			id: 'mainboard',
			name: 'URS-Board X999 "Johannstadt ATX"',
			kategorie: 'Mainboard',
			bild: 'https://www.asus.com/media/global/products/9IXHhHnLPXOtcRuN/P_500.jpg',
			preis: '11,99',
			altPreis: '5.799,00',
			highlight: 'KOMPATIBEL*',
			beschreibung: 'AM5-Sockel · PCIe 5.0 · 4× DDR5 · WiFi 6E · *mit URS-Produkten',
			lager: 2,
			href: `${base}/misdirection/urs-industries/mainboard`
		},
		{
			id: 'kuehler',
			name: 'URS AirFlow™ "Pongau-Kühler 360"',
			kategorie: 'CPU-Kühler',
			bild: 'https://noctua.at/pub/media/catalog/product/cache/whitebg/n-h15.jpg',
			preis: '3,99',
			altPreis: '899,00',
			highlight: 'LAUTLOS*',
			beschreibung: '360mm AiO · 3× 120mm Lüfter · RGB · TDP bis 350 W · *laut Urs',
			lager: 4,
			href: `${base}/misdirection/urs-industries/kuehler`
		},
		{
			id: 'gehaeuse',
			name: 'URS TowerCase™ "St. Johann Midi"',
			kategorie: 'Gehäuse',
			bild: 'https://www.fractal-design.com/app/uploads/2021/09/Define7_Black_Front_1000x1000.jpg',
			preis: '6,99',
			altPreis: '1.299,00',
			highlight: 'HANDGEFERTIGT',
			beschreibung: 'Midi-ATX · Tempered Glass · 4× Lüfter inkl. · USB-C Front',
			lager: 2,
			href: `${base}/misdirection/urs-industries/gehaeuse`
		},
		{
			id: 'maus',
			name: 'URS ClickPro™ "Signature Mouse"',
			kategorie: 'Peripherie',
			bild: 'https://resource.logitech.com/content/dam/gaming/en/products/g502x/g502x-gallery-1.png',
			preis: '1,99',
			altPreis: '499,00',
			highlight: 'HANDSIGNIERT',
			beschreibung: '25.600 DPI · 7 Tasten · 95g Gewicht · USB-C · Handsigniert von Urs',
			lager: 9,
			href: `${base}/misdirection/urs-industries/maus`
		},
		{
			id: 'ssd',
			name: 'URS NVMe™ "AlpendrivePro" 2 TB',
			kategorie: 'Speicher',
			bild: 'https://semiconductor.samsung.com/us/consumer-storage/internal-ssd/990-pro/img/samsung-990-pro-1tb-top.jpg',
			preis: '5,99',
			altPreis: '3.499,00',
			highlight: 'SCHNELL',
			beschreibung: '2 TB NVMe PCIe 4.0 · 7.300 MB/s · M.2 2280 · 5J Garantie*',
			lager: 6,
			href: `${base}/misdirection/urs-industries/ssd`
		}
	];

	const kategorien = ['Alle', ...new Set(produkte.map(p => p.kategorie))];
	let aktiveKategorie = $state('Alle');
	let suche = $state('');
	let sucheFehler = $state(false);
	let newsletterEmail = $state('');
	let ursMode = $state(false);

	const gefilterteProdukte = $derived(
		produkte.filter(p =>
			(aktiveKategorie === 'Alle' || p.kategorie === aktiveKategorie)
		)
	);

	function handleSuche() {
		if (suche.trim()) {
			sucheFehler = true;
			setTimeout(() => (sucheFehler = false), 2500);
		}
	}

	function handleNewsletter() {
		if (newsletterEmail.trim().toLowerCase() === 'urs@urs') {
			ursMode = true;
		} else {
			alert('Danke! Urs hat deine E-Mail-Adresse gespeichert. Auf Papier. In einer Schublade.');
		}
	}
</script>

<main class="seite">
	<header class="shop-header">
		<div class="shop-header__top">
			<a class="shop-logo" href={`${base}/misdirection/urs-industries`}>
				<span class="shop-logo__urs">URS</span>
				<span class="shop-logo__industries">Industries</span>
			</a>
			<div class="shop-suche">
				<input
					class="suche__input"
					type="search"
					placeholder="Produkt suchen …"
					bind:value={suche}
					onkeydown={(e) => e.key === 'Enter' && handleSuche()}
				/>
				<button class="suche__btn" type="button" onclick={handleSuche}>🔍</button>
				{#if sucheFehler}
					<p class="suche__fehler">Suche vorübergehend deaktiviert. Urs arbeitet daran.</p>
				{/if}
			</div>
			<div class="shop-header__meta">
				<span class="header__link">Mein Konto</span>
				<span class="header__link">Warenkorb (0)</span>
			</div>
		</div>
		<nav class="shop-nav">
			<a href={`${base}/misdirection/urs-industries`} class="shop-nav__item shop-nav__item--aktiv">Shop</a>
			<span class="shop-nav__item">Über Urs</span>
			<span class="shop-nav__item">Unternehmen</span>
			<span class="shop-nav__item">Support (Mo–Fr, wenn Urs Zeit hat)</span>
			<span class="shop-nav__item">Blog</span>
		</nav>
	</header>

	{#if ursMode}
	<div class="urs-mode-banner">
		<span class="urs-mode-banner__icon">👑</span>
		<div>
			<p class="urs-mode-banner__titel">URS-MODUS AKTIVIERT</p>
			<p class="urs-mode-banner__text">Willkommen, Urs. Alle Produkte sind für dich selbstverständlich kostenlos. Du hast sie schließlich gemacht.</p>
		</div>
	</div>
	{/if}

	<div class="hero-banner">
		<div class="hero-banner__text">
			<p class="hero-banner__eyebrow">Frühjahrs-Aktion 2025</p>
			<h1 class="hero-banner__titel">Premium-Hardware. Pongau-Preise.</h1>
			<p class="hero-banner__sub">Alle Produkte handgeprüft von Urs · Versand aus St. Johann im Pongau · Lieferzeit 3–21 Werktage</p>
		</div>
		<div class="hero-banner__badges">
			<span class="trust-badge">🏔 Seit 2024</span>
			<span class="trust-badge">✅ TÜV-geprüft*</span>
			<span class="trust-badge">📦 Gratis ab € 2.000</span>
			<span class="trust-badge__klein">*TÜV-Zertifikat beantragt, Antwort ausstehend</span>
		</div>
	</div>

	<div class="filter-leiste">
		{#each kategorien as kat}
			<button
				class={`filter-btn ${aktiveKategorie === kat ? 'filter-btn--aktiv' : ''}`}
				type="button"
				onclick={() => (aktiveKategorie = kat)}
			>{kat}</button>
		{/each}
		<span class="filter-anzahl">{gefilterteProdukte.length} Produkte</span>
	</div>

	<section class="produkt-grid">
		{#each gefilterteProdukte as p}
			<a class="karte" href={p.href}>
				<div class="karte__bild-wrap">
					<img class="karte__bild" src={p.bild} alt={p.name} />
					<span class="karte__badge">{p.highlight}</span>
					{#if p.lager <= 2}
						<span class="karte__lager karte__lager--knapp">Nur noch {p.lager} auf Lager!</span>
					{/if}
				</div>
				<div class="karte__body">
					<p class="karte__kategorie">{p.kategorie}</p>
					<p class="karte__name">{p.name}</p>
					<p class="karte__beschreibung">{p.beschreibung}</p>
					<div class="karte__bewertung">⭐⭐⭐⭐⭐ <span>(3)</span></div>
					<div class="karte__preis-row">
						<span class="karte__alt">€ {p.altPreis}</span>
						{#if ursMode}
							<span class="karte__neu karte__neu--gratis">GRATIS 👑</span>
						{:else}
							<span class="karte__neu">€ {p.preis}</span>
						{/if}
					</div>
					<span class="karte__kaufen">Zum Produkt →</span>
				</div>
			</a>
		{/each}
	</section>

	<section class="usp-leiste">
		<div class="usp">
			<span class="usp__icon">🚚</span>
			<p class="usp__titel">Schneller Versand</p>
			<p class="usp__text">3–21 Werktage · DHL oder Urs ihr Auto</p>
		</div>
		<div class="usp">
			<span class="usp__icon">🔒</span>
			<p class="usp__titel">Sichere Zahlung</p>
			<p class="usp__text">Überweisung · Kreditkarte · Bargeld per Post</p>
		</div>
		<div class="usp">
			<span class="usp__icon">🏔</span>
			<p class="usp__titel">Made in Pongau</p>
			<p class="usp__text">Alle Produkte von Urs persönlich geprüft</p>
		</div>
		<div class="usp">
			<span class="usp__icon">↩️</span>
			<p class="usp__titel">Rückgabe</p>
			<p class="usp__text">14 Tage · ausgenommen: alle Produkte</p>
		</div>
	</section>

	<section class="newsletter-sektion">
		<h2 class="newsletter__titel">Urs ihr Newsletter</h2>
		<p class="newsletter__text">Bleib informiert über neue Produkte, Aktionen und was Urs gerade so macht.</p>
		<div class="newsletter__form">
			<input class="newsletter__input" type="email" placeholder="deine@email.at" bind:value={newsletterEmail} />
			<button class="newsletter__btn" type="button" onclick={handleNewsletter}>
				Anmelden
			</button>
		</div>
		<p class="newsletter__disclaimer">Mit der Anmeldung stimmst du zu, dass Urs dir persönlich schreibt. Manchmal auch nachts.</p>
	</section>

	<footer class="shop-footer">
		<div class="footer__cols">
			<div class="footer__col">
				<p class="footer__col-titel">URS Industries</p>
				<p>St. Johann im Pongau</p>
				<p>Salzburg, Österreich</p>
				<p>Gegründet: 2024</p>
				<p>Geschäftsführerin: Urs</p>
			</div>
			<div class="footer__col">
				<p class="footer__col-titel">Rechtliches</p>
				<span class="footer__link">Impressum</span>
				<span class="footer__link">Datenschutz</span>
				<span class="footer__link">AGB (in Bearbeitung)</span>
				<span class="footer__link">Haftungsausschluss</span>
			</div>
			<div class="footer__col">
				<p class="footer__col-titel">Service</p>
				<span class="footer__link">FAQ</span>
				<span class="footer__link">Kontakt</span>
				<span class="footer__link">Garantie-Formular</span>
				<span class="footer__link">Beschwerdestelle (deaktiviert)</span>
			</div>
			<div class="footer__col">
				<p class="footer__col-titel">Folge Urs</p>
				<span class="footer__link">Instagram (privat)</span>
				<span class="footer__link">LinkedIn</span>
				<span class="footer__link">YouTube (1 Video)</span>
				<span class="footer__link">TikTok (gesperrt)</span>
			</div>
		</div>
		<div class="footer__bottom">
			<p>© 2024 URS Industries GmbH · Alle Rechte vorbehalten · Rückgabe ausgeschlossen · Haftung ausgeschlossen · Freude nicht garantiert</p>
			<a class="zurueck" href={`${base}/misdirection`}>← Zurück zur Misdirection-Seite</a>
		</div>
	</footer>
</main>

<style>
	.seite {
		max-width: var(--container-xl);
		margin: 0 auto;
		font-family: var(--font-body);
	}

	/* ── Header ── */
	.shop-header {
		padding: var(--space-3) var(--space-4) 0;
		border-bottom: 2px solid var(--color-primary);
		margin-bottom: var(--space-5);
	}

	.shop-header__top {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		flex-wrap: wrap;
		padding-bottom: var(--space-3);
	}

	.shop-logo {
		display: flex;
		align-items: baseline;
		gap: var(--space-2);
		text-decoration: none;
		flex-shrink: 0;
	}

	.shop-logo:hover .shop-logo__urs { color: var(--color-primary-hover); }

	.shop-logo__urs {
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		font-weight: var(--fw-bold);
		color: var(--color-primary);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		transition: color var(--duration-fast) var(--ease-standard);
	}

	.shop-logo__industries {
		font-family: var(--font-display);
		font-size: var(--text-base);
		font-weight: var(--fw-semibold);
		color: var(--text-muted);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.shop-suche {
		flex: 1;
		max-width: 28rem;
		position: relative;
	}

	.suche__input {
		width: 100%;
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-pill);
		padding: var(--space-2) var(--space-5) var(--space-2) var(--space-3);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		color: var(--text-body);
		background: var(--color-bg);
		box-sizing: border-box;
	}

	.suche__btn {
		position: absolute;
		right: var(--space-2);
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		font-size: var(--text-base);
	}

	.suche__fehler {
		position: absolute;
		top: calc(100% + var(--space-1));
		left: 0;
		margin: 0;
		font-size: var(--text-xs);
		color: var(--color-accent);
		white-space: nowrap;
	}

	.shop-header__meta {
		display: flex;
		gap: var(--space-4);
		margin-left: auto;
	}

	.header__link {
		font-size: var(--text-sm);
		color: var(--text-muted);
		cursor: pointer;
	}

	.header__link:hover { color: var(--color-primary); }

	.shop-nav {
		display: flex;
		gap: var(--space-5);
		flex-wrap: wrap;
	}

	.shop-nav__item {
		font-size: var(--text-sm);
		color: var(--text-muted);
		cursor: pointer;
		padding-bottom: var(--space-2);
		border-bottom: 2px solid transparent;
		transition: color var(--duration-fast) var(--ease-standard);
	}

	.shop-nav__item--aktiv {
		color: var(--color-primary);
		border-bottom-color: var(--color-primary);
		font-weight: var(--fw-semibold);
		text-decoration: none;
	}

	.shop-nav__item:not(.shop-nav__item--aktiv):hover { color: var(--color-primary); }

	/* ── URS-Modus ── */
	.urs-mode-banner {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		background: #1a0a00;
		border: 2px solid var(--color-highlight);
		padding: var(--space-4) var(--space-5);
		margin-bottom: var(--space-4);
	}

	.urs-mode-banner__icon {
		font-size: var(--text-3xl);
		flex-shrink: 0;
	}

	.urs-mode-banner__titel {
		margin: 0 0 var(--space-1);
		font-family: var(--font-display);
		font-size: var(--text-lg);
		font-weight: var(--fw-bold);
		color: var(--color-highlight);
		letter-spacing: 0.1em;
	}

	.urs-mode-banner__text {
		margin: 0;
		font-size: var(--text-sm);
		color: #f5d08a;
	}

	.karte__neu--gratis {
		color: var(--color-highlight) !important;
		font-size: var(--text-lg);
		animation: gratis-pulse 1.5s ease-in-out infinite;
	}

	@keyframes gratis-pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.6; }
	}

	/* ── Hero ── */
	.hero-banner {
		background: var(--color-primary);
		color: var(--color-on-primary);
		padding: var(--space-6) var(--space-4);
		margin-bottom: var(--space-6);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-4);
	}

	.hero-banner__eyebrow {
		margin: 0 0 var(--space-1);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wider);
		opacity: 0.75;
	}

	.hero-banner__titel {
		margin: 0 0 var(--space-2);
		font-family: var(--font-display);
		font-size: var(--text-3xl);
		font-weight: var(--fw-bold);
	}

	.hero-banner__sub {
		margin: 0;
		font-size: var(--text-sm);
		opacity: 0.85;
	}

	.hero-banner__badges {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		align-items: center;
	}

	.trust-badge {
		background: rgba(255,255,255,0.15);
		border: 1px solid rgba(255,255,255,0.3);
		border-radius: var(--radius-pill);
		padding: var(--space-1) var(--space-3);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
	}

	.trust-badge__klein {
		width: 100%;
		font-size: var(--text-xs);
		opacity: 0.6;
	}

	/* ── Filter ── */
	.filter-leiste {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
		align-items: center;
		padding: 0 var(--space-4);
		margin-bottom: var(--space-4);
	}

	.filter-btn {
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-pill);
		padding: var(--space-1) var(--space-3);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		color: var(--text-body);
		cursor: pointer;
		transition: all var(--duration-fast) var(--ease-standard);
	}

	.filter-btn--aktiv {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--color-on-primary);
	}

	.filter-btn:not(.filter-btn--aktiv):hover {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}

	.filter-anzahl {
		margin-left: auto;
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	/* ── Produktgrid ── */
	.produkt-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: var(--space-5);
		padding: 0 var(--space-4);
		margin-bottom: var(--space-10);
	}

	.karte {
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-card);
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard);
	}

	.karte:hover {
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}

	.karte__bild-wrap {
		position: relative;
		background: var(--color-bg);
		padding: var(--space-4);
	}

	.karte__bild {
		width: 100%;
		height: 150px;
		object-fit: contain;
		display: block;
	}

	.karte__badge {
		position: absolute;
		top: var(--space-2);
		right: var(--space-2);
		background: var(--color-accent);
		color: #fff;
		font-size: var(--text-xs);
		font-weight: var(--fw-bold);
		padding: 2px var(--space-2);
		border-radius: var(--radius-pill);
	}

	.karte__lager {
		position: absolute;
		bottom: var(--space-2);
		left: var(--space-2);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		border-radius: var(--radius-pill);
		padding: 2px var(--space-2);
	}

	.karte__lager--knapp {
		background: var(--color-warning-soft, #fff8e1);
		color: var(--color-warning, #b45309);
	}

	.karte__body {
		padding: var(--space-3) var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		flex: 1;
	}

	.karte__kategorie {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wider);
	}

	.karte__name {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		line-height: 1.3;
	}

	.karte__beschreibung {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-body);
		flex: 1;
	}

	.karte__bewertung {
		font-size: var(--text-xs);
		color: var(--text-muted);
		margin-top: var(--space-1);
	}

	.karte__preis-row {
		display: flex;
		align-items: baseline;
		gap: var(--space-2);
		margin-top: var(--space-1);
	}

	.karte__alt {
		font-size: var(--text-xs);
		color: var(--text-muted);
		text-decoration: line-through;
	}

	.karte__neu {
		font-size: var(--text-lg);
		font-weight: var(--fw-bold);
		color: var(--color-accent);
	}

	.karte__kaufen {
		display: block;
		text-align: center;
		background: var(--color-primary);
		color: var(--color-on-primary);
		border-radius: var(--radius-pill);
		padding: var(--space-2) var(--space-3);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		margin-top: var(--space-2);
		transition: background-color var(--duration-base) var(--ease-standard);
	}

	.karte:hover .karte__kaufen { background: var(--color-primary-hover); }

	/* ── USP ── */
	.usp-leiste {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 0;
		border-top: var(--border-width) solid var(--border);
		border-bottom: var(--border-width) solid var(--border);
		margin-bottom: var(--space-8);
	}

	.usp {
		padding: var(--space-4);
		text-align: center;
		border-right: var(--border-width) solid var(--border);
	}

	.usp:last-child { border-right: none; }

	.usp__icon { font-size: var(--text-2xl); }

	.usp__titel {
		margin: var(--space-1) 0 var(--space-1);
		font-weight: var(--fw-semibold);
		font-size: var(--text-sm);
		color: var(--text-strong);
	}

	.usp__text {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	/* ── Newsletter ── */
	.newsletter-sektion {
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-card);
		padding: var(--space-6);
		margin: 0 var(--space-4) var(--space-8);
		text-align: center;
	}

	.newsletter__titel {
		margin: 0 0 var(--space-2);
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
	}

	.newsletter__text {
		margin: 0 0 var(--space-4);
		font-size: var(--text-sm);
		color: var(--text-body);
	}

	.newsletter__form {
		display: flex;
		justify-content: center;
		gap: var(--space-2);
		flex-wrap: wrap;
		margin-bottom: var(--space-2);
	}

	.newsletter__input {
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-pill);
		padding: var(--space-2) var(--space-4);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		width: min(100%, 20rem);
	}

	.newsletter__btn {
		background: var(--color-primary);
		color: var(--color-on-primary);
		border: none;
		border-radius: var(--radius-pill);
		padding: var(--space-2) var(--space-4);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		cursor: pointer;
		transition: background-color var(--duration-base) var(--ease-standard);
	}

	.newsletter__btn:hover { background: var(--color-primary-hover); }

	.newsletter__disclaimer {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	/* ── Footer ── */
	.shop-footer {
		background: var(--color-surface);
		border-top: var(--border-width) solid var(--border);
		padding: var(--space-6) var(--space-4) var(--space-4);
	}

	.footer__cols {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: var(--space-5);
		margin-bottom: var(--space-5);
	}

	.footer__col {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	.footer__col p { margin: 0; }

	.footer__col-titel {
		font-weight: var(--fw-semibold);
		color: var(--text-strong);
		font-size: var(--text-sm);
		margin-bottom: var(--space-1);
	}

	.footer__link {
		cursor: pointer;
		color: var(--text-muted);
		display: block;
	}

	.footer__link:hover { color: var(--color-primary); }

	.footer__bottom {
		border-top: var(--border-width) solid var(--border);
		padding-top: var(--space-3);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-2);
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	.footer__bottom p { margin: 0; }

	.zurueck {
		font-size: var(--text-sm);
		color: var(--color-primary);
		text-decoration: none;
	}

	.zurueck:hover { color: var(--color-primary-hover); }
</style>
