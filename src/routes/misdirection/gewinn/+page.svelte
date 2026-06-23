<script lang="ts">
	import { base } from '$app/paths';
</script>

<main class="seite">
	<div class="shop-header">
		<a class="shop-logo" href={`${base}/misdirection/urs-industries`}>
			<span class="shop-logo__urs">URS</span>
			<span class="shop-logo__industries">Industries</span>
		</a>
		<p class="shop-ort">🏔 St. Johann im Pongau · Geschäftsführerin: Urs</p>
	</div>

	<div class="produkt">
		<div class="produkt__bild-wrap">
			<img
				class="produkt__bild"
				src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070/geforce-rtx-4070-shop-630-d@2x.png"
				alt="URS Edition Ryzen 4070 FE"
			/>
			<span class="produkt__badge">🏆 GEWINNER-EXKLUSIV</span>
			<span class="produkt__ryzen-label">AMD Ryzen™</span>
			<div class="produkt__galerie">
				<img
					class="produkt__thumb"
					src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070/geforce-rtx-4070-shop-630-d@2x.png"
					alt="Ansicht 1"
				/>
				<img
					class="produkt__thumb"
					src="https://images.nvidia.com/aem-dam/Solutions/geforce/ada/rtx-4070/geforce-rtx-4070-ti-super-shop-630-d@2x.png"
					alt="Ansicht 2"
				/>
				<img
					class="produkt__thumb"
					src="https://images.nvidia.com/aem-dam/Solutions/geforce/ada/rtx-4080-super/geforce-rtx-4080-super-shop-630-d@2x.png"
					alt="Ansicht 3"
				/>
			</div>
		</div>

		<div class="produkt__info">
			<p class="produkt__kategorie">Grafikkarten / URS Industries / Premium Segment</p>
			<h1 class="produkt__titel">URS Industries Ryzen RTX 4070 Founders Edition — Signature Series</h1>
			<p class="produkt__untertitel">Designed & engineered by Urs — CEO, URS Industries GmbH, St. Johann im Pongau</p>

			<div class="preis-block">
				<span class="preis__alt">€ 4.999,99</span>
				<span class="preis__neu">€ 9,99</span>
				<span class="preis__hinweis">Nur für verifizierte Gewinner. Versand: € 899,00. Rückgabe ausgeschlossen.</span>
			</div>

			<div class="bewertung">
				⭐⭐⭐⭐⭐ <span class="bewertung__anzahl">(3 verifizierte Käufer · „Beste GPU die ich je hatte" – Urs, CEO)</span>
			</div>

			<table class="specs">
				<caption class="specs__titel">Technische Daten</caption>
				<tbody>
					<tr><th>Modell</th><td>URS-RTX4070-FE-SIG-R1 (Revision B, signiert)</td></tr>
					<tr><th>Architektur</th><td>URS-Ada™ (basierend auf NVIDIA Ada Lovelace, leicht modifiziert von Urs)</td></tr>
					<tr><th>CUDA-Kerne</th><td>5.888 (davon 5.887 aktiv; einer ist für Urs reserviert)</td></tr>
					<tr><th>VRAM</th><td>12 GB GDDR6X — vorinstalliert mit Urs Industries Wallpaper-Pack (11,4 GB)</td></tr>
					<tr><th>Speicherbandbreite</th><td>504 GB/s (gemessen von Urs, eidesstattlich versichert)</td></tr>
					<tr><th>Basis-Takt</th><td>1.920 MHz</td></tr>
					<tr><th>Boost-Takt</th><td>2.610 MHz (steigt auf 2.611 MHz in Anwesenheit von Urs)</td></tr>
					<tr><th>TDP</th><td>200 W — Netzkabel bitte bei URS Industries erwerben (€ 340)</td></tr>
					<tr><th>Kühlsystem</th><td>URS-ThermoFlow™ Dual-Axiallüfter — Betrieb unter 95°C empfohlen, über 95°C garantiert</td></tr>
					<tr><th>Anschlüsse</th><td>3× DisplayPort 1.4a, 1× HDMI 2.1, 1× URS-Link™ Proprietary (Adapter: € 249)</td></tr>
					<tr><th>PCIe</th><td>PCIe 4.0 ×16 (kompatibel mit PCIe 3.0 ×16, Leistungsverlust: 0 %, laut Urs)</td></tr>
					<tr><th>Maximale Auflösung</th><td>7680×4320 @ 60 Hz (empfohlen: 1280×720 für stabilsten Betrieb)</td></tr>
					<tr><th>KI-Feature</th><td>URS-Sense™ — erkennt automatisch ob Urs im Raum ist und erhöht FPS</td></tr>
					<tr><th>Sicherheit</th><td>Holographisches URS-Industries-Echtheitszertifikat aufgedruckt</td></tr>
					<tr><th>Abmessungen</th><td>240 × 112 × 38 mm (passt in alle Gehäuse laut Urs; Garantie entfällt sonst)</td></tr>
					<tr><th>Gewicht</th><td>854 g (ohne Signatur), 855 g (mit Signatur von Urs)</td></tr>
					<tr><th>Kompatibilität</th><td>Windows 11, Linux (getestet auf Urs ihrem Laptop)</td></tr>
					<tr><th>Im Lieferumfang</th><td>GPU, Quick-Start-Guide (1 Seite: „Einbauen. Starten. Urs vertrauen."), 1× Sticker</td></tr>
					<tr><th>Garantie</th><td>2 Jahre — ausgenommen: Betrieb, Transport, Lagerung, Hitze, Kälte, Staub</td></tr>
				</tbody>
			</table>

			<button class="kaufen" type="button" onclick={() => alert('Fehler: Zu gut für deinen PC.')}>
				Jetzt kaufen
			</button>

			<a class="zurueck" href={`${base}/misdirection`}>← Zurück</a>
		</div>
	</div>
</main>

<style>
	.seite {
		max-width: var(--container-xl);
		margin: 0 auto;
		padding: var(--space-6) var(--space-4);
		font-family: var(--font-body);
	}

	.shop-header {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		flex-wrap: wrap;
		margin-bottom: var(--space-6);
		padding-bottom: var(--space-3);
		border-bottom: 3px solid var(--color-primary);
	}

	.shop-logo {
		display: flex;
		align-items: baseline;
		gap: var(--space-2);
		text-decoration: none;
	}

	.shop-logo:hover .shop-logo__urs {
		color: var(--color-primary-hover);
	}

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

	.shop-ort {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	.produkt {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-8);
		align-items: start;
	}

	@media (max-width: 700px) {
		.produkt {
			grid-template-columns: 1fr;
		}
	}

	.produkt__bild-wrap {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.produkt__ryzen-label {
		position: absolute;
		bottom: 3.8rem;
		left: var(--space-3);
		font-family: var(--font-display);
		font-size: var(--text-sm);
		font-weight: var(--fw-bold);
		color: #e6232a;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-shadow: 0 1px 3px rgba(0,0,0,0.6);
		transform: rotate(-5deg);
		pointer-events: none;
	}

	.produkt__galerie {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-2);
	}

	.produkt__thumb {
		width: 100%;
		aspect-ratio: 1;
		object-fit: contain;
		border-radius: var(--radius-md);
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		cursor: pointer;
		opacity: 0.75;
		transition: opacity var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard);
	}

	.produkt__thumb:hover {
		opacity: 1;
		border-color: var(--color-primary);
	}

	.produkt__bild {
		width: 100%;
		border-radius: var(--radius-card);
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
	}

	.produkt__badge {
		position: absolute;
		top: var(--space-3);
		left: var(--space-3);
		background: var(--color-highlight);
		color: var(--color-on-highlight);
		font-size: var(--text-xs);
		font-weight: var(--fw-bold);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-pill);
	}

	.produkt__info {
		display: grid;
		gap: var(--space-4);
	}

	.produkt__kategorie {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wider);
	}

	.produkt__titel {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		line-height: 1.2;
	}

	.produkt__untertitel {
		margin: 0;
		font-size: var(--text-sm);
		color: var(--text-muted);
	}

	.preis-block {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: var(--space-3);
	}

	.preis__alt {
		font-size: var(--text-base);
		color: var(--text-muted);
		text-decoration: line-through;
	}

	.preis__neu {
		font-size: var(--text-3xl);
		font-weight: var(--fw-bold);
		color: var(--color-accent);
	}

	.preis__hinweis {
		font-size: var(--text-xs);
		color: var(--text-muted);
		width: 100%;
	}

	.bewertung {
		font-size: var(--text-sm);
		color: var(--text-body);
	}

	.bewertung__anzahl {
		color: var(--text-muted);
	}

	.specs {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--text-sm);
	}

	.specs__titel {
		text-align: left;
		font-weight: var(--fw-semibold);
		color: var(--text-strong);
		padding-bottom: var(--space-2);
	}

	.specs th,
	.specs td {
		padding: var(--space-2) var(--space-3);
		border-bottom: var(--border-width) solid var(--border);
		text-align: left;
	}

	.specs th {
		color: var(--text-muted);
		font-weight: var(--fw-medium);
		width: 40%;
	}

	.specs td {
		color: var(--text-body);
	}

	.kaufen {
		width: 100%;
		background: var(--color-primary);
		color: var(--color-on-primary);
		border: none;
		border-radius: var(--radius-pill);
		padding: var(--space-3) var(--space-4);
		font-family: var(--font-body);
		font-size: var(--text-base);
		font-weight: var(--fw-semibold);
		cursor: pointer;
		transition: background-color var(--duration-base) var(--ease-standard);
	}

	.kaufen:hover {
		background: var(--color-primary-hover);
	}

	.zurueck {
		justify-self: start;
		font-size: var(--text-sm);
		color: var(--color-primary);
	}

	.zurueck:hover {
		color: var(--color-primary-hover);
	}
</style>
