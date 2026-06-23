<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	type Produkt = {
		name: string;
		kategorie: string;
		bild: string;
		preis: string;
		altPreis: string;
		highlight: string;
		slogan: string;
		features: string[];
		beschreibung: string;
		specs: [string, string][];
		lager: number;
		lieferzeit: string;
		reviews: { autor: string; titel: string; text: string; sterne: number; datum: string }[];
		faq: { frage: string; antwort: string }[];
		empfehlungen: string[];
	};

	const katalog: Record<string, Produkt> = {
		cpu: {
			name: 'URS-Ryzen™ X99 "Pongau-Core"',
			kategorie: 'Prozessor',
			bild: 'https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2523038-amd-ryzen-9000-series-desktop-processors-pdp-product-image.png',
			preis: '14,99',
			altPreis: '3.299,00',
			highlight: 'BESTSELLER',
			slogan: '„24 Kerne. Alle von Urs persönlich aktiviert."',
			features: ['24 Kerne / 48 Threads', '5,4 GHz Boost', 'PCIe 5.0', 'DDR5-Support', 'URS-Sense™ KI'],
			beschreibung: `Der URS-Ryzen™ X99 „Pongau-Core" ist ein 24-Kern-Prozessor mit einer Boost-Taktrate von 5,4 GHz — entwickelt auf Basis der AMD Zen 4-Architektur, leicht modifiziert von Urs in St. Johann im Pongau. Urs beschreibt die Modifikationen als „subtil aber spürbar, vor allem wenn ich in der Nähe bin".

Mit 64 MB L3-Cache und einem TDP von 105 W ist der X99 für anspruchsvolle Workloads ausgelegt. Der integrierte URS-Sense™-Coprozessor erkennt in Echtzeit ob Urs im selben Raum ist und erhöht in diesem Fall den Boost-Takt um bis zu 0,1 MHz — eine Funktion, die Urs als „messbaren Unterschied" bezeichnet, auf Nachfrage jedoch keine Messdaten vorlegen konnte.

Der X99 ist vollständig kompatibel mit AM5-Mainboards, allerdings empfiehlt Urs aus „Kompatibilitätsgründen" ausschließlich das URS-Board X999 „Johannstadt ATX" zu verwenden. „Mit anderen Boards funktioniert er auch", schreibt Urs im Handbuch, „aber ich kann nicht dafür einstehen."`,
			specs: [
				['Architektur', 'Zen 4 (URS-modifiziert, Rev. B)'],
				['Kerne / Threads', '24 / 48'],
				['Basis-Takt', '4,7 GHz'],
				['Boost-Takt', '5,4 GHz (5,5 GHz mit URS-Sense™ aktiv)'],
				['L3-Cache', '64 MB (davon 1 MB für URS-Sense™ reserviert)'],
				['TDP', '105 W (PPT: 142 W)'],
				['Fertigung', 'TSMC 4nm (URS-validiert)'],
				['Sockel', 'AM5 (LGA 1718)'],
				['Speicher-Support', 'DDR5-5600 offiziell, DDR5-6000 laut Urs „auch kein Problem"'],
				['PCIe', 'PCIe 5.0 ×16 für GPU, ×4 für NVMe'],
				['Integrierte Grafik', 'RDNA 2, 2 CUs — für Notfälle laut Urs'],
				['Lieferumfang', 'CPU, Urs ihr Visitenkärtchen, Wärmepaste (aufgetragen mit Daumen)'],
				['Garantie', '3 Jahre (erlischt wenn Daumen-Wärmepaste entfernt wird)']
			],
			lager: 3,
			lieferzeit: '3–5 Werktage (Urs prüft persönlich vor dem Versand)',
			reviews: [
				{ autor: 'Urs (CEO)', titel: 'Mein bestes Produkt', sterne: 5, datum: '14. März 2025', text: 'Läuft bei mir einwandfrei. Habe ihn selbst entworfen, daher bin ich befangen — aber objektiv gesehen ist er exzellent.' },
				{ autor: 'Urs (Qualitätskontrolle)', titel: 'Hat die QS bestanden', sterne: 5, datum: '14. März 2025', text: 'Ich bin die Qualitätskontrolle. Er hat bestanden. 5 Sterne.' },
				{ autor: 'Urs (Käuferin, verifiziert)', titel: 'Sehr warm', sterne: 4, datum: '15. März 2025', text: 'Funktioniert gut. Wird etwas warm bei Volllast, aber Urs sagt das ist normal und nennt es „Wärmeleistung".' }
			],
			faq: [
				{ frage: 'Passt der X99 in mein bestehendes AM5-Mainboard?', antwort: 'Ja, AM5 ist AM5. Urs empfiehlt dennoch das URS-Board X999 — „damit ich weiß was auf dem anderen Ende ist", so Urs.' },
				{ frage: 'Was ist URS-Sense™?', antwort: 'Ein proprietärer Coprozessor der erkennt ob Urs im Raum ist. Funktioniert über WLAN. Datenschutzerklärung: in Bearbeitung.' },
				{ frage: 'Warum ist Wärmepaste mit Daumen aufgetragen?', antwort: 'Urs findet das „präziser als eine Spritze". Wer die Paste entfernt, verliert die Garantie.' }
			],
			empfehlungen: ['mainboard', 'ram', 'kuehler']
		},
		ram: {
			name: 'URS-DDR5 "Alpenspeicher" 64 GB Kit',
			kategorie: 'Arbeitsspeicher',
			bild: 'https://www.kingston.com/dataSheets/KF556C36BBEK2-64_img.jpg',
			preis: '4,49',
			altPreis: '1.899,00',
			highlight: 'NEU',
			slogan: '„Schneller. Größer. Riecht nach Almwiese."',
			features: ['64 GB DDR5-6000', 'CL30-36-36-80', 'RGB AuroraGlow™', 'XMP 3.0 / EXPO', 'Duft: Almwiese'],
			beschreibung: `Das URS-DDR5 „Alpenspeicher" Kit ist ein 64-GB-Dual-Channel-Kit (2× 32 GB) mit DDR5-6000-Taktrate und CL30-Latenzen. Die Module wurden laut Urs „in Salzburger Bergluft gelagert, was die Elektronen frischer macht" — eine Aussage, für die es keine wissenschaftliche Grundlage gibt, die Urs aber weiterhin aufrecht erhält.

Das RGB-Beleuchtungssystem „AuroraGlow by Urs" zeigt per Farbcode den Systemstatus an: Grün bedeutet alles in Ordnung, Rot bedeutet zu heiß, Blau bedeutet dass Urs stolz auf dich ist. Das Blau erscheint laut Handbuch automatisch „wenn der PC besonders gut läuft oder wenn Urs gerade draufschaut".

Die Module sind XMP 3.0 und AMD EXPO kompatibel, wobei Urs darauf hinweist, dass EXPO-Profile „von mir persönlich eingestellt wurden und daher zuverlässiger sind als die von AMD". Auf Rückfrage wie das technisch möglich ist, schrieb Urs: „Vertrauen Sie mir."`,
			specs: [
				['Kapazität', '64 GB (2× 32 GB)'],
				['Typ', 'DDR5'],
				['Taktrate', 'DDR5-6000 (JEDEC: DDR5-4800)'],
				['Latenz', 'CL30-36-36-80 (XMP), CL40 (JEDEC)'],
				['Spannung', '1,35 V (XMP) / 1,1 V (JEDEC)'],
				['Profil', 'XMP 3.0 + AMD EXPO (eingestellt von Urs persönlich)'],
				['RGB', 'AuroraGlow™ — 16,8 Mio. Farben + 3 Urs-Spezialfarben'],
				['Duft', 'Almwiese — zertifiziert von Urs Industries QS-Abteilung (= Urs)'],
				['Formfaktor', 'UDIMM 288-Pin'],
				['Höhe', '44mm (prüfen bei Low-Profile-Kühler)'],
				['Kompatibilität', 'Intel 700/800 Series, AMD 600 Series — plus alle URS-Boards'],
				['Lieferumfang', '2× RAM-Modul, Duftbeschreibungskarte, 1× Sticker „Ich liebe RAM"'],
				['Garantie', 'Lebenslang — ausgenommen: Oxidation, ESD, Montage, Betrieb']
			],
			lager: 7,
			lieferzeit: '2–4 Werktage',
			reviews: [
				{ autor: 'Urs (CEO)', titel: 'Riecht wirklich nach Almwiese', sterne: 5, datum: '2. April 2025', text: 'Das war meine Idee mit dem Duft. Ich bin sehr zufrieden damit. 5 Sterne für meine eigene Idee.' },
				{ autor: 'Urs (Testerin)', titel: 'Stabil unter Last', sterne: 5, datum: '2. April 2025', text: 'Habe ihn 20 Minuten mit Cinebench belastet. Kein Absturz. Für mich Beweis genug.' },
				{ autor: 'Urs (Mama)', titel: 'Ich verstehe es nicht aber es ist schön', sterne: 5, datum: '3. April 2025', text: 'Urs hat mir erklärt was das ist. Ich habs nicht ganz verstanden aber es leuchtet hübsch blau. 5 Sterne.' }
			],
			faq: [
				{ frage: 'Muss ich XMP/EXPO im BIOS aktivieren?', antwort: 'Ja. Urs empfiehlt das URS-BIOS™ im URS-Board X999, das XMP automatisch aktiviert — aber nur für URS-RAM.' },
				{ frage: 'Woher kommt der Almwiesenduft?', antwort: 'Die Module werden vor dem Versand in einem Zimmer gelagert, in dem Urs eine Almwiesen-Kerze brennt. Urs nennt das „Produktpflege".' },
				{ frage: 'Was bedeutet „Blau = Urs ist stolz auf dich"?', antwort: 'Der Blau-Modus aktiviert sich wenn die Speicherauslastung unter 40% liegt. Urs findet das „lobenswert".' }
			],
			empfehlungen: ['cpu', 'mainboard', 'ssd']
		},
		netzteil: {
			name: 'URS PowerFlow™ 1000W "Haushalts-Edition"',
			kategorie: 'Netzteil',
			bild: 'https://www.be-quiet.de/fileadmin/Products/Power_Supply/Dark_Power_13/ATX_3.0/750W/be-quiet-dark-power-13-750w-top.png',
			preis: '7,99',
			altPreis: '2.499,00',
			highlight: 'EMPFOHLEN',
			slogan: '„1.000 Watt. Weil 999 sich nach Niederlage anfühlt."',
			features: ['1.000 W', '80 PLUS Gold', 'Vollmodular', 'ATX 3.0 / PCIe 5.0', '16-Pin Connector'],
			beschreibung: `Das URS PowerFlow™ 1000W ist ein vollmodulares ATX-3.0-Netzteil mit 80-PLUS-Gold-Zertifizierung und einer Ausgangsleistung von 1.000 Watt — entwickelt nach dem Prinzip, das Urs als „lieber zu viel als zu wenig" bezeichnet.

Das Netzteil verfügt über einen nativen 16-Pin-PCIe-5.0-Connector für aktuelle High-End-GPUs sowie über ein vollständig modulares Kabelsystem mit URS-branded Flachkabeln. Urs weist im Handbuch darauf hin, dass „die Kabel von mir persönlich auf Durchgangswiderstand geprüft wurden, mit einem Multimeter, das ich mir geliehen habe".

Besonderheit: Das PowerFlow™ 1000W ist auch als „Notfallheizung" einsetzbar — bei voller Last erzeugt es laut Urs messbare Wärme. „Das ist kein Bug, das ist ein Feature", so Urs im beiliegenden FAQ. „Im Winter sehr angenehm."`,
			specs: [
				['Ausgangsleistung', '1.000 W (kontinuierlich, gemessen bei 25°C)'],
				['Effizienz', '80 PLUS Gold (90% bei 50% Last, laut Urs „auch bei 100% ungefähr so")'],
				['Modularität', 'Vollmodular — alle Kabel abnehmbar inkl. dem man braucht'],
				['Lüfter', '135mm FDB-Lager, semi-passiv unter 20% Last'],
				['PCIe-Connector', '1× 16-Pin (12VHPWR / ATX 3.0), 4× 8-Pin'],
				['ATX-Stecker', '1× 24-Pin ATX, 2× 8-Pin EPS'],
				['SATA', '6× SATA, 4× Molex'],
				['Schutzfunktionen', 'OVP, UVP, OCP, OPP, SCP, OTP — alle aktiv'],
				['Lüfterkurve', 'Semi-passiv bis ~300W, danach linear (hörbar ab ~600W)'],
				['Kabelmanagement', 'Vollmodular + 1× Kabelbinderpack (Urs ihr eigenes Design)'],
				['Abmessungen', '150 × 86 × 160mm (ATX-Standard)'],
				['Lieferumfang', 'Netzteil, Kabelset, Schrauben, FAQ-Zettel von Urs'],
				['Garantie', '10 Jahre — ausgenommen: Überspannung durch Hausinstallation']
			],
			lager: 5,
			lieferzeit: '2–4 Werktage',
			reviews: [
				{ autor: 'Urs (CEO)', titel: 'Warm und zuverlässig', sterne: 5, datum: '5. April 2025', text: 'Mein Büro ist im Winter seitdem angenehm temperiert. Das war nicht der Plan aber ich sehe es positiv.' },
				{ autor: 'Urs (Elektrikerin, selbsternannt)', titel: 'Multimeter-Test bestanden', sterne: 5, datum: '5. April 2025', text: 'Habe alle Kabel durchgemessen. Alle haben Durchgang. Das ist gut. 5 Sterne.' },
				{ autor: 'Urs (Käuferin, zufrieden)', titel: 'Läuft seit 3 Wochen', sterne: 5, datum: '6. April 2025', text: 'Kein einziger Neustart seitdem. Urs hat recht, mehr Watt = mehr Stabilität. Das klingt falsch ist aber meine Erfahrung.' }
			],
			faq: [
				{ frage: 'Ist 1000W genug für eine RTX 4090?', antwort: 'Ja, laut Urs sogar „großzügig". Sie empfiehlt dennoch das PowerFlow™ 1000W und nicht das PowerFlow™ 850W (noch nicht erhältlich).' },
				{ frage: 'Wie laut ist der Lüfter?', antwort: 'Semi-passiv bis ca. 300W, danach hörbar. Bei Volllast „klingt er nach Arbeit", so Urs.' },
				{ frage: 'Kann ich eigene Kabel verwenden?', antwort: 'Nein. Urs empfiehlt ausschließlich URS-Originalkabel. „Andere Kabel kenne ich nicht und kann daher nicht dafür stehen."' }
			],
			empfehlungen: ['mainboard', 'gehaeuse', 'rtx-4070']
		},
		mainboard: {
			name: 'URS-Board X999 "Johannstadt ATX"',
			kategorie: 'Mainboard',
			bild: 'https://www.asus.com/media/global/products/9IXHhHnLPXOtcRuN/P_500.jpg',
			preis: '11,99',
			altPreis: '5.799,00',
			highlight: 'KOMPATIBEL*',
			slogan: '„Das Fundament jedes URS-Systems. *Kompatibilität mit Nicht-URS-Produkten: möglich, aber Urs schaut dann weg."',
			features: ['AM5-Sockel', 'PCIe 5.0 ×16', 'DDR5 4× Slots', 'WiFi 6E', 'USB4 40Gbps'],
			beschreibung: `Das URS-Board X999 „Johannstadt ATX" ist ein AM5-Mainboard mit dem X670E-Chipsatz, PCIe 5.0 für GPU und NVMe sowie WiFi 6E und Bluetooth 5.3. Es unterstützt alle aktuellen AMD Ryzen 7000-Prozessoren — sowie natürlich den URS-Ryzen™ X99 „Pongau-Core", den Urs als „das primäre Einsatzszenario" bezeichnet.

Das Board verfügt über vier DDR5-Slots für bis zu 192 GB Arbeitsspeicher, ein 20+2-Phasen-Spannungsversorgungssystem und einen BIOS-Flashback-Button — letzteres ergänzt um den proprietären „URS-Modus", der laut BIOS-Dokumentation „das Board in einen Zustand versetzt, den nur Urs vollständig versteht".

Besonderheit: Das Handbuch enthält auf Seite 47 eine persönliche Notiz von Urs: „Wenn etwas nicht funktioniert, zuerst aus- und einschalten. Wenn das nicht hilft, mich kontaktieren. Ich bin meistens erreichbar."`,
			specs: [
				['Chipsatz', 'AMD X670E'],
				['Sockel', 'AM5 (LGA 1718)'],
				['CPU-Support', 'AMD Ryzen 7000 Series + URS-Ryzen™ X99'],
				['RAM-Slots', '4× DDR5, max. 192 GB (DDR5-6000+ mit XMP/EXPO)'],
				['PCIe', '1× PCIe 5.0 ×16 (GPU), 1× PCIe 4.0 ×16 (×4 elek.), 2× PCIe 4.0 ×1'],
				['M.2', '3× M.2 PCIe 5.0/4.0 (1× mit Heatsink, 2× ohne weil vergessen)'],
				['USB', '2× USB4 40Gbps, 2× USB 3.2 Gen2×2 (20G), 4× USB-A 3.2, 4× USB 2.0'],
				['Audio', 'ROG SupremeFX 7.1 (umbeschriftet als URS-Sound™ Pro)'],
				['LAN', '2.5 GbE Intel I225-V'],
				['WLAN', 'WiFi 6E (802.11ax), Bluetooth 5.3'],
				['Spannungsversorgung', '20+2 Phasen, 80A-MOSFETs'],
				['BIOS', 'UEFI mit URS-Modus™ (Funktion: unklar, laut Urs "wichtig")'],
				['Lieferumfang', 'Mainboard, I/O-Shield, SATA-Kabel (2 Stück), Schrauben (8 Stück), Urs ihr Handbuch'],
				['Garantie', '3 Jahre (URS-Modus™ nicht von Garantie ausgenommen, aber Schäden durch ihn schon)']
			],
			lager: 2,
			lieferzeit: '3–5 Werktage (Urs prüft POST-Fähigkeit vor Versand)',
			reviews: [
				{ autor: 'Urs (CEO & Designerin)', titel: 'Mein liebstes Produkt', sterne: 5, datum: '20. März 2025', text: 'Ich habe jeden Aspekt des Layouts mitbestimmt. Die Platzierung der M.2-Schrauben war meine Idee. Hat beim dritten Versuch geklappt.' },
				{ autor: 'Urs (BIOS-Entwicklerin)', titel: 'URS-Modus erklärt', sterne: 5, datum: '20. März 2025', text: 'URS-Modus erhöht heimlich das RAM-Profil auf XMP. Das wollte ich erst erwähnen wenn jemand fragt.' },
				{ autor: 'Urs (Käuferin, Systembuilder)', titel: 'Solides Board mit Persönlichkeit', sterne: 4, datum: '22. März 2025', text: 'Funktioniert einwandfrei. Einen Stern Abzug weil das Handbuch auf Seite 47 eine Notiz von Urs enthält die ich erst bei der dritten Fehlerbehebung entdeckt habe.' }
			],
			faq: [
				{ frage: 'Funktioniert das Board mit Standard-AM5-CPUs?', antwort: 'Ja. Urs empfiehlt jedoch den URS-Ryzen™ X99. „Alles andere ist technisch möglich aber emotional schwierig für mich."' },
				{ frage: 'Was macht der URS-Modus™?', antwort: 'Das ist nicht vollständig dokumentiert. Urs sagt er sei „wichtig" und „man merkt es wenn er fehlt".' },
				{ frage: 'Warum fehlt die M.2-Schrauben für Slot 2 und 3?', antwort: 'Urs hat es „vergessen". Die Schrauben sind als Zubehör für € 12 erhältlich (URS-M2-SCREW-KIT-V1).' }
			],
			empfehlungen: ['cpu', 'ram', 'kuehler']
		},
		kuehler: {
			name: 'URS AirFlow™ "Pongau-Kühler 360"',
			kategorie: 'CPU-Kühler',
			bild: 'https://noctua.at/pub/media/catalog/product/cache/whitebg/n-h15.jpg',
			preis: '3,99',
			altPreis: '899,00',
			highlight: 'LAUTLOS*',
			slogan: '„360mm. 3 Lüfter. 1 Pumpe. Unendlich Stolz von Urs."',
			features: ['360mm Radiator', '3× 120mm Lüfter', 'ARGB', 'AM5 / LGA1700 kompatibel', 'Pumpe: 2.800 RPM'],
			beschreibung: `Der URS AirFlow™ „Pongau-Kühler 360" ist eine All-in-One-Wasserkühlung mit 360mm-Radiator, drei 120mm-ARGB-Lüftern und einer keramikgelagerten Pumpe mit 2.800 RPM. Er wurde laut Urs entwickelt „weil Luftkühler laut sind und Urs das stört" — was insofern interessant ist, als die drei Lüfter des AirFlow 360 bei Volllast durchaus hörbar sind.

Der Kühler unterstützt alle aktuellen Sockel von Intel (LGA 1700, 1200, 115x) und AMD (AM5, AM4) — die Halterungen sind im Lieferumfang enthalten, allerdings weist Urs im Handbuch darauf hin, dass „die Montage beim ersten Mal etwas fummelig ist, beim zweiten Mal schon besser, und beim dritten Mal macht man es wie ich".

Die ARGB-Beleuchtung ist kompatibel mit ASUS Aura Sync, MSI Mystic Light und Gigabyte RGB Fusion — sowie mit dem proprietären „URS-Glow™"-System, das die Farbe automatisch auf Urs ihre Lieblingsfarbe (Petrolblau) setzt wenn kein anderes Profil aktiv ist.`,
			specs: [
				['Typ', 'AIO Wasserkühlung'],
				['Radiatorgröße', '360mm (120mm × 3)'],
				['Lüfter', '3× 120mm ARGB, 500–2.000 RPM (PWM)'],
				['Lüfter-Lautstärke', '16–32 dBA (je nach Last)'],
				['Pumpe', 'Keramikgelagert, 2.800 RPM fix, 20 dBA'],
				['Kühlleistung', 'Bis 350W TDP'],
				['Sockels', 'AM5, AM4, LGA 1700, LGA 1200, LGA 115x'],
				['Schlauch', '400mm, ummanteltes Nylon, „sehr biegsam laut Urs"'],
				['ARGB', '5V ARGB Header (3-Pin) — Aura Sync / Mystic Light / URS-Glow™'],
				['Kühlerflüssigkeit', 'Vorgemischt, refill-fähig (Urs empfiehlt das aber nicht)'],
				['Abmessungen Radiator', '394 × 120 × 27mm'],
				['Lieferumfang', 'Kühler, Lüfter, alle Halterungen, Wärmepaste URS-ThermalPaste™'],
				['Garantie', '5 Jahre — Pumpe: 3 Jahre, Schläuche: 2 Jahre, Glow™: gefühlt für immer laut Urs']
			],
			lager: 4,
			lieferzeit: '2–4 Werktage',
			reviews: [
				{ autor: 'Urs (CEO)', titel: 'Still und effizient', sterne: 5, datum: '10. April 2025', text: 'Mein CPU hat seitdem 15°C weniger. Das war das Ziel. Erreicht. 5 Sterne.' },
				{ autor: 'Urs (Overclockerin)', titel: 'Gut genug für 5,8 GHz', sterne: 5, datum: '10. April 2025', text: 'Ich habe den X99 auf 5,8 GHz übertaktet. Kühler hat mitgespielt. CPU dann nicht mehr aber das ist eine andere Geschichte.' },
				{ autor: 'Urs (Farbbegeistert)', titel: 'Petrolblau ist perfekt', sterne: 5, datum: '11. April 2025', text: 'URS-Glow™ hat automatisch Petrolblau eingestellt. Ich habe Urs gefragt wie das geht. Sie hat nur gelächelt.' }
			],
			faq: [
				{ frage: 'Passt der 360mm-Radiator in mein Gehäuse?', antwort: 'Prüfen Sie ob Ihr Gehäuse einen 360mm-Radiator vorne oder oben unterstützt. Urs empfiehlt das URS-TowerCase™ „St. Johann Midi" — es „passt meistens".' },
				{ frage: 'Wie laut ist die Pumpe?', antwort: '20 dBA fix. Urs bezeichnet das als „Hintergrundgeräusch mit Charakter".' },
				{ frage: 'Kann ich die Kühlflüssigkeit nachfüllen?', antwort: 'Technisch ja, Urs rät aber davon ab: „Das ist Vertrauenssache zwischen mir und dem Kühler."' }
			],
			empfehlungen: ['cpu', 'mainboard', 'gehaeuse']
		},
		gehaeuse: {
			name: 'URS TowerCase™ "St. Johann Midi"',
			kategorie: 'Gehäuse',
			bild: 'https://www.fractal-design.com/app/uploads/2021/09/Define7_Black_Front_1000x1000.jpg',
			preis: '6,99',
			altPreis: '1.299,00',
			highlight: 'HANDGEFERTIGT',
			slogan: '„Jede Schweißnaht ein Unikat. Jedes Unikat von Urs."',
			features: ['Midi Tower ATX', 'Tempered Glass Seitenteil', '4× Lüfter inklusive', 'USB-C Front-Panel', 'Tool-less Design*'],
			beschreibung: `Das URS TowerCase™ „St. Johann Midi" ist ein Midi-Tower-Gehäuse aus 1,2mm SECC-Stahl mit einem gehärteten Glasseitenteil (Tempered Glass, 4mm) und einem umfangreichen Lüfterframework. Es fasst ATX-, mATX- und ITX-Mainboards und bietet Platz für GPUs bis 400mm Länge.

Im Lieferumfang enthalten sind vier 120mm-ARGB-Lüfter (2× Front, 1× Oben, 1× Hinten), die mit dem Lüfter-Hub-Controller kompatibel sind. Der Hub-Controller nimmt ein einzelnes SATA-Kabel als Stromversorgung und bis zu sechs Lüfter — Urs schreibt im Handbuch: „Ich habe vier mitgegeben. Mehr ist Verschwendung. Weniger ist zu wenig. Vier ist perfekt."

Das „Tool-less Design" bezieht sich laut Urs auf das seitenlose Laufwerksschienen-System für 3,5"- und 2,5"-Laufwerke — die Montage des Mainboards und der PCIe-Karten erfordert weiterhin einen Schraubenzieher, was Urs als „ein Werkzeug, das jeder hat" bezeichnet.`,
			specs: [
				['Formfaktor', 'Midi Tower (ATX, mATX, ITX)'],
				['Material', '1,2mm SECC-Stahl + 4mm Tempered Glass'],
				['Abmessungen', '465 × 215 × 465mm (H×B×T)'],
				['GPU-Länge', 'max. 400mm'],
				['CPU-Kühlerhöhe', 'max. 170mm (Urs AirFlow™ 360 passt: ja)'],
				['Radiator-Support', 'Front: 360/280/240mm, Top: 240/120mm, Rear: 120mm'],
				['Lüfter-Slots', '7 Slots gesamt (4× Lüfter enthalten)'],
				['Laufwerke', '2× 3,5" HDD, 3× 2,5" SSD (1× Rückseite)'],
				['Front I/O', '1× USB-C 10Gbps, 2× USB-A 3.0, HD Audio'],
				['Kabelmanagement', '30mm Kammern hinter Mainboard-Tray'],
				['PSU-Shroud', 'Ja, mit Lüftungsschlitzen (Urs nennt ihn „das schwarze Ding unten")'],
				['Farbe', 'Schwarz (URS-Schwarz™ — RAL 9005)'],
				['Lieferumfang', 'Gehäuse, 4× Lüfter, Hub-Controller, Schraubenset, Urs-Sticker'],
				['Garantie', '2 Jahre — nicht auf Kratzer, Beulen oder „normale Abnutzung durch Urs"']
			],
			lager: 2,
			lieferzeit: '5–10 Werktage (Urs prüft und poliert persönlich vor dem Versand)',
			reviews: [
				{ autor: 'Urs (CEO & Schweißerin)', titel: 'Schönstes Gehäuse auf dem Markt', sterne: 5, datum: '1. April 2025', text: 'Ich habe es selbst gebaut. Natürlich 5 Sterne.' },
				{ autor: 'Urs (Systembuilder)', titel: 'Viel Platz, gutes Kabelmanagement', sterne: 5, datum: '2. April 2025', text: 'Alle Komponenten haben gepasst. Der 400mm-GPU-Slot ist großzügig. Hätte nicht erwartet dass Urs so vorausschauend plant.' },
				{ autor: 'Urs (ehrliche Käuferin)', titel: 'Tool-less ist Ansichtssache', sterne: 4, datum: '3. April 2025', text: 'Das Mainboard habe ich dann doch mit Schrauben montiert. Urs hat recht dass jeder einen Schraubenzieher hat. Trotzdem einen Stern Abzug für die Erwartungshaltung.' }
			],
			faq: [
				{ frage: 'Passt eine RTX 4090 rein?', antwort: 'Ja, bis 400mm GPU-Länge. Die RTX 4090 FE ist 336mm. Urs hat es gemessen.' },
				{ frage: 'Kann ich den PSU-Shroud entfernen?', antwort: '2 Schrauben, dann ab. Urs empfiehlt es aber nicht: „Das schwarze Ding unten hat einen Grund."' },
				{ frage: 'Wieso dauert die Lieferung 5–10 Werktage?', antwort: 'Urs poliert jedes Gehäuse einzeln. „Ich möchte dass es schön ankommt. Das braucht Zeit."' }
			],
			empfehlungen: ['netzteil', 'kuehler', 'mainboard']
		},
		maus: {
			name: 'URS ClickPro™ "Signature Mouse"',
			kategorie: 'Peripherie',
			bild: 'https://resource.logitech.com/content/dam/gaming/en/products/g502x/g502x-gallery-1.png',
			preis: '1,99',
			altPreis: '499,00',
			highlight: 'HANDSIGNIERT',
			slogan: '„25.600 DPI. Jeder Klick von Urs autorisiert."',
			features: ['25.600 DPI HERO-Sensor', '7 programmierbare Tasten', '95g Gewicht', 'USB-C Kabel', 'Handsigniert von Urs'],
			beschreibung: `Die URS ClickPro™ „Signature Mouse" basiert auf dem HERO-25K-Sensor mit einer Auflösung von 25.600 DPI und einer Abtastrate von 1.000 Hz. Sie verfügt über sieben programmierbare Tasten, eine Hyperscroll-Funktion und ein Gewicht von 95g — laut Urs „die perfekte Balance zwischen leicht genug für lange Sessions und schwer genug dass man sie spürt".

Jede ClickPro™ wird vor dem Versand von Urs persönlich geprüft: Sensorkalibrierung, Klick-Test (100 Klicks pro Taste), Scroll-Test und Unterseiten-Check. Am Ende des Prüfprozesses signiert Urs die Maus auf der Unterseite mit permanentem Marker — was die Lieferzeit auf 1–8 Wochen verlängert, je nachdem wie viel Urs gerade um die Ohren hat.

Das mitgelieferte USB-C-Kabel ist 1,8m lang und „paracord-ummantelt" — wobei Urs darauf hinweist, dass „paracord-ähnlich" präziser wäre, da es sich um ein handelsübliches geflochtenes Kabel handelt, das optisch ähnlich aussieht.`,
			specs: [
				['Sensor', 'HERO 25K (optisch)'],
				['DPI', '100–25.600 DPI (in 50-DPI-Schritten)'],
				['Abtastrate', '1.000 Hz (125/250/500/1000 Hz wählbar)'],
				['Beschleunigung', '> 40G'],
				['Geschwindigkeit', '> 400 IPS'],
				['Tasten', '7 programmierbar (Mitte: Hyperscroll)'],
				['Scroll', 'Hyperscroll-Ratchet (Freilauf bis 5.000 RPM)'],
				['Gewicht', '95g ohne Kabel (signiert: 95,3g)'],
				['Kabel', '1,8m USB-C, geflochtenes Paracord™-artiges Kabel'],
				['RGB', 'Ja — 2 Zonen, 16,8 Mio. Farben'],
				['Akku', 'Kabelgebunden (kein Akku, „Kabel macht Sinn", laut Urs)'],
				['Kompatibel', 'Windows, macOS, Linux — und URS-Systems™'],
				['Lieferumfang', 'Maus, USB-C Kabel, Echtheitszertifikat (handgeschrieben), 1× Ersatz-Fußpad'],
				['Garantie', '2 Jahre — erlischt wenn Signatur entfernt wird']
			],
			lager: 9,
			lieferzeit: '1–8 Wochen (Urs signiert persönlich, Wartezeit variiert)',
			reviews: [
				{ autor: 'Urs (CEO)', titel: 'Beste Maus die ich je gehalten habe', sterne: 5, datum: '15. April 2025', text: 'Habe sie selbst designed, daher nicht überraschend dass sie in meiner Hand perfekt liegt. 5 Sterne.' },
				{ autor: 'Urs (Grafik-Designerin)', titel: 'Präzise, leicht, schön', sterne: 5, datum: '16. April 2025', text: '25.600 DPI für Grafikarbeit ist overkill aber ich benutze 800 DPI und der Sensor ist auch dabei exzellent.' },
				{ autor: 'Urs (geduldig)', titel: '7 Wochen Wartezeit — war es wert', sterne: 5, datum: '17. April 2025', text: 'Habe 7 Wochen auf die Signatur gewartet. Urs hatte viel zu tun laut eigener Auskunft. Die Signatur ist schön. Kein Grund zur Beschwerde.' }
			],
			faq: [
				{ frage: 'Warum dauert die Lieferung so lange?', antwort: 'Urs signiert jede Maus persönlich. In ruhigen Wochen: 1–2 Wochen. In stressigen Wochen (Messen, Produktlaunch, Urlaub): bis zu 8 Wochen.' },
				{ frage: 'Kann ich die DPI-Stufen konfigurieren?', antwort: 'Ja, über die URS-Hub™-Software (Windows, 64-bit, in Entwicklung — aktuell per BIOS einstellbar laut Urs, was technisch nicht stimmt).' },
				{ frage: 'Was passiert wenn ich die Signatur entferne?', antwort: 'Garantieverlust. Urs: „Die Signatur ist ein Qualitätsmerkmal. Wer sie entfernt, entwertet das Produkt."' }
			],
			empfehlungen: ['ssd', 'ram', 'cpu']
		},
		ssd: {
			name: 'URS NVMe™ "AlpendrivePro" 2 TB',
			kategorie: 'Speicher',
			bild: 'https://semiconductor.samsung.com/us/consumer-storage/internal-ssd/990-pro/img/samsung-990-pro-1tb-top.jpg',
			preis: '5,99',
			altPreis: '3.499,00',
			highlight: 'SCHNELL',
			slogan: '„7.300 MB/s. Schneller als Urs tippt. Das ist schnell."',
			features: ['2 TB NVMe PCIe 4.0 ×4', '7.300 MB/s Lesen', '6.900 MB/s Schreiben', 'DRAM-Cache 2 GB', '5J Garantie'],
			beschreibung: `Die URS NVMe™ „AlpendrivePro" ist eine NVMe-SSD im M.2-2280-Formfaktor mit PCIe 4.0 ×4-Anbindung und einer sequenziellen Lesegeschwindigkeit von 7.300 MB/s sowie einer Schreibgeschwindigkeit von 6.900 MB/s — gemessen nach Standard-SSD-Benchmark-Methoden, „und einmal auch beim Urlaubsfotos-Kopieren, da war es auch schnell", ergänzt Urs im Produktdatenblatt.

Die AlpendrivePro verfügt über einen 2-GB-LPDDR4-DRAM-Cache, ein 3D-NAND-Flash (TLC, 176-Layer) und einen proprietären URS-Controller™, der auf einem Samsung-Referenzdesign basiert, „von mir aber leicht angepasst", so Urs, wobei unklar ist worin die Anpassung besteht.

Besonderheit: Die SSD ist werksseitig mit dem „URS Industries Willkommens-Paket" vorinstalliert (ca. 2,3 GB), bestehend aus einem Wallpaper-Pack (30 Fotos von St. Johann im Pongau), einer README-Datei von Urs und einem Gutscheincode für 5% auf die nächste Bestellung. Urs weist darauf hin, dass das Willkommens-Paket „problemlos löschbar ist, es aber schade wäre".`,
			specs: [
				['Kapazität', '2 TB (1,86 TiB formatiert, davon 2,3 GB: URS-Willkommens-Paket)'],
				['Interface', 'NVMe 1.4, PCIe 4.0 ×4'],
				['Formfaktor', 'M.2 2280'],
				['Seq. Lesen', '7.300 MB/s'],
				['Seq. Schreiben', '6.900 MB/s'],
				['Random Read 4K', '1.400.000 IOPS'],
				['Random Write 4K', '1.300.000 IOPS'],
				['NAND', '3D TLC NAND, 176-Layer'],
				['DRAM-Cache', '2 GB LPDDR4'],
				['Controller', 'URS-Controller™ V1 (Samsung-Basis, „leicht modifiziert von Urs")'],
				['TBW', '1.200 TBW (2 TB Modell)'],
				['MTBF', '1.500.000 Stunden'],
				['Betriebstemp.', '0–70°C'],
				['Lieferumfang', 'SSD, M.2-Schraube (1 Stück), URS-Willkommens-Paket (vorinstalliert)'],
				['Garantie', '5 Jahre — erlischt wenn Willkommens-Paket gelöscht wird laut Urs (stimmt rechtlich nicht)']
			],
			lager: 6,
			lieferzeit: '2–3 Werktage',
			reviews: [
				{ autor: 'Urs (CEO)', titel: 'Schnell, stabil, schön', sterne: 5, datum: '8. April 2025', text: 'Meine eigenen Urlaubsfotos sind bei der Lesegeschwindigkeitsmessung mitgeflossen. Das ist Wissenschaft.' },
				{ autor: 'Urs (Fotografin)', titel: 'RAW-Dateien laden instant', sterne: 5, datum: '9. April 2025', text: '7300 MB/s sind messbar. Ich habe gemessen. Mit CrystalDiskMark. 5 Sterne sind angemessen.' },
				{ autor: 'Urs (IT, neugierig)', titel: 'Wallpaper-Pack ist wirklich schön', sterne: 4, datum: '10. April 2025', text: 'Ich wollte das Willkommens-Paket sofort löschen aber die St.-Johann-Fotos sind tatsächlich hübsch. Einen Stern Abzug für die fragwürdige Garantieklausel.' }
			],
			faq: [
				{ frage: 'Verliere ich wirklich die Garantie wenn ich das Willkommens-Paket lösche?', antwort: 'Nein, rechtlich nicht. Urs: „Ich sage das nur um es zu schützen. Die Fotos sind schön." ' },
				{ frage: 'Was ist der URS-Controller™?', antwort: 'Ein Samsung-Referenzdesign mit angepasster Firmware. Was angepasst wurde: Urs hat es nicht spezifiziert. „Vertrauen Sie mir." ' },
				{ frage: 'Wie hoch ist die Hitzeentwicklung?', antwort: 'Bei sequenziellem Lesen ca. 60–65°C. Urs empfiehlt den Heatsink im URS-Board X999 (Slot 1) zu nutzen. Slot 2 und 3 haben keinen.' }
			],
			empfehlungen: ['cpu', 'mainboard', 'ram']
		}
	};

	const alleProdukte = [
		{ id: 'rtx-4070', name: 'URS-RTX4070-FE-SIG-R1', bild: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070/geforce-rtx-4070-shop-630-d@2x.png', preis: '9,99', href: `${base}/misdirection/gewinn` },
		{ id: 'cpu', name: 'URS-Ryzen™ X99', bild: 'https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2523038-amd-ryzen-9000-series-desktop-processors-pdp-product-image.png', preis: '14,99', href: `${base}/misdirection/urs-industries/cpu` },
		{ id: 'ram', name: 'URS-DDR5 "Alpenspeicher"', bild: 'https://www.kingston.com/dataSheets/KF556C36BBEK2-64_img.jpg', preis: '4,49', href: `${base}/misdirection/urs-industries/ram` },
		{ id: 'netzteil', name: 'URS PowerFlow™ 1000W', bild: 'https://www.be-quiet.de/fileadmin/Products/Power_Supply/Dark_Power_13/ATX_3.0/750W/be-quiet-dark-power-13-750w-top.png', preis: '7,99', href: `${base}/misdirection/urs-industries/netzteil` },
		{ id: 'mainboard', name: 'URS-Board X999', bild: 'https://www.asus.com/media/global/products/9IXHhHnLPXOtcRuN/P_500.jpg', preis: '11,99', href: `${base}/misdirection/urs-industries/mainboard` },
		{ id: 'kuehler', name: 'URS AirFlow™ 360', bild: 'https://noctua.at/pub/media/catalog/product/cache/whitebg/n-h15.jpg', preis: '3,99', href: `${base}/misdirection/urs-industries/kuehler` },
		{ id: 'gehaeuse', name: 'URS TowerCase™', bild: 'https://www.fractal-design.com/app/uploads/2021/09/Define7_Black_Front_1000x1000.jpg', preis: '6,99', href: `${base}/misdirection/urs-industries/gehaeuse` },
		{ id: 'maus', name: 'URS ClickPro™', bild: 'https://resource.logitech.com/content/dam/gaming/en/products/g502x/g502x-gallery-1.png', preis: '1,99', href: `${base}/misdirection/urs-industries/maus` },
		{ id: 'ssd', name: 'URS AlpendrivePro™', bild: 'https://semiconductor.samsung.com/us/consumer-storage/internal-ssd/990-pro/img/samsung-990-pro-1tb-top.jpg', preis: '5,99', href: `${base}/misdirection/urs-industries/ssd` }
	];

	const produkt = $derived(katalog[$page.params.id]);
	const empfehlungen = $derived(
		produkt ? produkt.empfehlungen.map(id => alleProdukte.find(p => p.id === id)).filter(Boolean) : []
	);

	let menge = $state(1);
	let aktivesTab = $state<'beschreibung' | 'specs' | 'reviews' | 'faq'>('beschreibung');
	let warenkorb = $state(false);

	function inWarenkorb() {
		warenkorb = true;
		setTimeout(() => (warenkorb = false), 3000);
	}
</script>

{#if produkt}
<main class="seite">
	<header class="shop-header">
		<a class="shop-logo" href={`${base}/misdirection/urs-industries`}>
			<span class="shop-logo__urs">URS</span>
			<span class="shop-logo__industries">Industries</span>
		</a>
		<p class="shop-ort">🏔 St. Johann im Pongau · Geschäftsführerin: Urs</p>
		<div class="header-rechts">
			<span class="header__link">Mein Konto</span>
			<span class="header__link">Warenkorb (0)</span>
		</div>
	</header>

	<nav class="breadcrumb">
		<a href={`${base}/misdirection/urs-industries`}>Shop</a>
		<span>›</span>
		<a href={`${base}/misdirection/urs-industries`}>{produkt.kategorie}</a>
		<span>›</span>
		<span>{produkt.name}</span>
	</nav>

	<div class="produkt">
		<div class="produkt__bild-wrap">
			<img class="produkt__bild" src={produkt.bild} alt={produkt.name} />
			<span class="produkt__badge">{produkt.highlight}</span>
		</div>

		<div class="produkt__info">
			<p class="produkt__kategorie">{produkt.kategorie} · URS Industries · St. Johann im Pongau</p>
			<h1 class="produkt__titel">{produkt.name}</h1>
			<p class="produkt__slogan">{produkt.slogan}</p>

			<div class="bewertung">
				⭐⭐⭐⭐⭐
				<span class="bewertung__anzahl">({produkt.reviews.length} Bewertungen — alle von Urs)</span>
				<span class="bewertung__verifiziert">✅ Verifizierte Käuferinnen</span>
			</div>

			<div class="feature-pills">
				{#each produkt.features as f}
					<span class="pill">{f}</span>
				{/each}
			</div>

			<div class="preis-block">
				<span class="preis__alt">€ {produkt.altPreis}</span>
				<span class="preis__neu">€ {produkt.preis}</span>
				<span class="preis__rabatt">-{Math.round((1 - parseFloat(produkt.preis.replace(',', '.')) / parseFloat(produkt.altPreis.replace(/\./g, '').replace(',', '.'))) * 100)}%</span>
			</div>
			<p class="preis__hinweis">Inkl. MwSt. · Versand: € 899,00 · Rückgabe: ausgeschlossen</p>

			<div class={`lager ${produkt.lager <= 2 ? 'lager--knapp' : 'lager--ok'}`}>
				{#if produkt.lager <= 2}
					⚠️ Nur noch {produkt.lager} auf Lager!
				{:else}
					✅ Auf Lager ({produkt.lager} Stück)
				{/if}
			</div>

			<div class="liefer-info">
				🚚 Lieferzeit: <strong>{produkt.lieferzeit}</strong>
			</div>

			<div class="menge-row">
				<button class="menge-btn" type="button" onclick={() => menge = Math.max(1, menge - 1)}>−</button>
				<span class="menge-zahl">{menge}</span>
				<button class="menge-btn" type="button" onclick={() => menge = Math.min(produkt.lager, menge + 1)}>+</button>
			</div>

			{#if warenkorb}
				<div class="warenkorb-bestaetigung">
					✅ {menge}× {produkt.name} im Warenkorb. Bezahlung: derzeit nicht möglich. Urs arbeitet daran.
				</div>
			{:else}
				<button class="kaufen" type="button" onclick={inWarenkorb}>
					In den Warenkorb — € {produkt.preis}
				</button>
			{/if}

			<a class="zurueck" href={`${base}/misdirection/urs-industries`}>← Zurück zum Shop</a>
		</div>
	</div>

	<!-- Tabs -->
	<div class="tabs">
		{#each [['beschreibung', 'Beschreibung'], ['specs', 'Technische Daten'], ['reviews', `Bewertungen (${produkt.reviews.length})`], ['faq', 'FAQ']] as [id, label]}
			<button
				class={`tab ${aktivesTab === id ? 'tab--aktiv' : ''}`}
				type="button"
				onclick={() => (aktivesTab = id as typeof aktivesTab)}
			>{label}</button>
		{/each}
	</div>

	<div class="tab-inhalt">
		{#if aktivesTab === 'beschreibung'}
			<div class="beschreibung-sektion">
				{#each produkt.beschreibung.split('\n\n') as absatz}
					<p>{absatz}</p>
				{/each}
			</div>

		{:else if aktivesTab === 'specs'}
			<table class="specs">
				<tbody>
					{#each produkt.specs as [key, val]}
						<tr><th>{key}</th><td>{val}</td></tr>
					{/each}
				</tbody>
			</table>

		{:else if aktivesTab === 'reviews'}
			<div class="reviews">
				{#each produkt.reviews as r}
					<div class="review">
						<div class="review__header">
							<span class="review__autor">{r.autor}</span>
							<span class="review__sterne">{'⭐'.repeat(r.sterne)}</span>
							<span class="review__datum">{r.datum}</span>
						</div>
						<p class="review__titel">{r.titel}</p>
						<p class="review__text">„{r.text}"</p>
					</div>
				{/each}
			</div>

		{:else if aktivesTab === 'faq'}
			<div class="faq">
				{#each produkt.faq as f}
					<div class="faq__item">
						<p class="faq__frage">❓ {f.frage}</p>
						<p class="faq__antwort">{f.antwort}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	{#if empfehlungen.length}
	<section class="empfehlungen-sektion">
		<h2 class="sektion__titel">Das kauften andere Kundinnen auch</h2>
		<p class="sektion__sub">Empfohlen von Urs · „Diese Kombination macht Sinn. Vertrauen Sie mir."</p>
		<div class="empfehlungen-grid">
			{#each empfehlungen as e}
				{#if e}
				<a class="emp-karte" href={e.href}>
					<img class="emp-karte__bild" src={e.bild} alt={e.name} />
					<p class="emp-karte__name">{e.name}</p>
					<p class="emp-karte__preis">€ {e.preis}</p>
				</a>
				{/if}
			{/each}
		</div>
	</section>
	{/if}

	<section class="ueber-urs">
		<div class="ueber-urs__text">
			<p class="ueber-urs__eyebrow">Über die Marke</p>
			<h2 class="ueber-urs__titel">URS Industries GmbH</h2>
			<p>URS Industries wurde 2024 von Urs in St. Johann im Pongau gegründet — mit dem Ziel, „Hardware zu bauen, die ich selbst gerne hätte, zu Preisen, die sich niemand erklären kann". Jedes Produkt wird von Urs persönlich entwickelt, getestet und — sofern es sich um die Signature Mouse handelt — signiert.</p>
			<p>Der Firmensitz befindet sich in St. Johann im Pongau, Salzburg. Urs ist die einzige Mitarbeiterin, die Qualitätskontrolleurin, die Logistik-Abteilung und die Beschwerdestelle (aktuell deaktiviert).</p>
		</div>
	</section>

	<footer class="shop-footer">
		<p>© 2024 URS Industries GmbH · St. Johann im Pongau · Alle Rechte vorbehalten · Rückgabe ausgeschlossen · Haftung ausgeschlossen</p>
		<a class="zurueck" href={`${base}/misdirection`}>← Zurück zur Misdirection-Seite</a>
	</footer>
</main>
{:else}
<main class="seite">
	<header class="shop-header">
		<a class="shop-logo" href={`${base}/misdirection/urs-industries`}>
			<span class="shop-logo__urs">URS</span>
			<span class="shop-logo__industries">Industries</span>
		</a>
	</header>
	<p class="nicht-gefunden">Produkt nicht gefunden. Urs arbeitet daran.</p>
	<a class="zurueck" href={`${base}/misdirection/urs-industries`}>← Zurück zum Shop</a>
</main>
{/if}

<style>
	.seite {
		max-width: var(--container-xl);
		margin: 0 auto;
		font-family: var(--font-body);
	}

	.shop-header {
		display: flex;
		align-items: center;
		gap: var(--space-4);
		flex-wrap: wrap;
		padding: var(--space-3) var(--space-4);
		border-bottom: 3px solid var(--color-primary);
		margin-bottom: var(--space-4);
	}

	.shop-logo {
		display: flex;
		align-items: baseline;
		gap: var(--space-2);
		text-decoration: none;
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

	.shop-ort {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	.header-rechts {
		display: flex;
		gap: var(--space-4);
		margin-left: auto;
	}

	.header__link {
		font-size: var(--text-sm);
		color: var(--text-muted);
		cursor: pointer;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-xs);
		color: var(--text-muted);
		padding: 0 var(--space-4);
		margin-bottom: var(--space-5);
	}

	.breadcrumb a { color: var(--color-primary); text-decoration: none; }
	.breadcrumb a:hover { text-decoration: underline; }

	.produkt {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-8);
		align-items: start;
		padding: 0 var(--space-4);
		margin-bottom: var(--space-6);
	}

	@media (max-width: 700px) { .produkt { grid-template-columns: 1fr; } }

	.produkt__bild-wrap { position: relative; }

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

	.produkt__info { display: grid; gap: var(--space-3); }

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

	.produkt__slogan {
		margin: 0;
		font-size: var(--text-base);
		font-style: italic;
		color: var(--color-primary);
	}

	.bewertung { font-size: var(--text-sm); color: var(--text-body); display: flex; flex-wrap: wrap; gap: var(--space-2); align-items: center; }
	.bewertung__anzahl { color: var(--text-muted); }
	.bewertung__verifiziert { font-size: var(--text-xs); color: var(--color-success, #16a34a); }

	.feature-pills { display: flex; flex-wrap: wrap; gap: var(--space-2); }

	.pill {
		background: var(--color-sky-soft, #e0f2fe);
		color: var(--color-primary);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-pill);
		border: 1px solid var(--color-primary);
	}

	.preis-block { display: flex; align-items: baseline; gap: var(--space-3); flex-wrap: wrap; }

	.preis__alt { font-size: var(--text-base); color: var(--text-muted); text-decoration: line-through; }

	.preis__neu { font-size: var(--text-3xl); font-weight: var(--fw-bold); color: var(--color-accent); }

	.preis__rabatt {
		background: var(--color-accent);
		color: #fff;
		font-size: var(--text-xs);
		font-weight: var(--fw-bold);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-pill);
	}

	.preis__hinweis { margin: 0; font-size: var(--text-xs); color: var(--text-muted); }

	.lager {
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-md);
	}

	.lager--ok { background: var(--color-success-soft, #dcfce7); color: var(--color-success, #16a34a); }
	.lager--knapp { background: var(--color-warning-soft, #fff8e1); color: var(--color-warning, #b45309); }

	.liefer-info { font-size: var(--text-sm); color: var(--text-body); }

	.menge-row { display: flex; align-items: center; gap: var(--space-3); }

	.menge-btn {
		width: 2rem;
		height: 2rem;
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-md);
		background: var(--color-surface);
		font-size: var(--text-lg);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: border-color var(--duration-fast) var(--ease-standard);
	}

	.menge-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }

	.menge-zahl { font-size: var(--text-base); font-weight: var(--fw-semibold); min-width: 2rem; text-align: center; }

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

	.kaufen:hover { background: var(--color-primary-hover); }

	.warenkorb-bestaetigung {
		background: var(--color-success-soft, #dcfce7);
		color: var(--color-success, #16a34a);
		border-radius: var(--radius-md);
		padding: var(--space-3);
		font-size: var(--text-sm);
		font-weight: var(--fw-semibold);
	}

	.zurueck { justify-self: start; font-size: var(--text-sm); color: var(--color-primary); text-decoration: none; }
	.zurueck:hover { color: var(--color-primary-hover); }

	/* Tabs */
	.tabs {
		display: flex;
		gap: 0;
		border-bottom: var(--border-width) solid var(--border);
		padding: 0 var(--space-4);
		margin-bottom: var(--space-6);
		overflow-x: auto;
	}

	.tab {
		background: none;
		border: none;
		border-bottom: 3px solid transparent;
		padding: var(--space-3) var(--space-4);
		font-family: var(--font-body);
		font-size: var(--text-sm);
		color: var(--text-muted);
		cursor: pointer;
		white-space: nowrap;
		transition: color var(--duration-fast) var(--ease-standard);
	}

	.tab--aktiv { color: var(--color-primary); border-bottom-color: var(--color-primary); font-weight: var(--fw-semibold); }
	.tab:not(.tab--aktiv):hover { color: var(--text-strong); }

	.tab-inhalt { padding: 0 var(--space-4); margin-bottom: var(--space-8); }

	.beschreibung-sektion { display: grid; gap: var(--space-3); }
	.beschreibung-sektion p { margin: 0; font-size: var(--text-base); color: var(--text-body); line-height: 1.7; }

	.specs { width: 100%; border-collapse: collapse; font-size: var(--text-sm); }
	.specs th, .specs td { padding: var(--space-2) var(--space-3); border-bottom: var(--border-width) solid var(--border); text-align: left; }
	.specs th { color: var(--text-muted); font-weight: var(--fw-medium); width: 30%; }
	.specs td { color: var(--text-body); }

	.reviews { display: grid; gap: var(--space-4); }

	.review {
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-card);
		padding: var(--space-4);
	}

	.review__header {
		display: flex;
		gap: var(--space-3);
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: var(--space-1);
	}

	.review__autor { font-weight: var(--fw-semibold); color: var(--text-strong); font-size: var(--text-sm); }
	.review__sterne { font-size: var(--text-sm); }
	.review__datum { font-size: var(--text-xs); color: var(--text-muted); margin-left: auto; }
	.review__titel { margin: 0 0 var(--space-1); font-weight: var(--fw-semibold); font-size: var(--text-sm); color: var(--text-strong); }
	.review__text { margin: 0; font-size: var(--text-sm); color: var(--text-body); font-style: italic; }

	.faq { display: grid; gap: var(--space-4); }

	.faq__item {
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-card);
		padding: var(--space-4);
	}

	.faq__frage { margin: 0 0 var(--space-2); font-weight: var(--fw-semibold); color: var(--text-strong); font-size: var(--text-sm); }
	.faq__antwort { margin: 0; font-size: var(--text-sm); color: var(--text-body); line-height: 1.6; }

	/* Empfehlungen */
	.empfehlungen-sektion { padding: 0 var(--space-4); margin-bottom: var(--space-8); }

	.sektion__titel {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
		margin: 0 0 var(--space-1);
	}

	.sektion__sub { margin: 0 0 var(--space-4); font-size: var(--text-sm); color: var(--text-muted); font-style: italic; }

	.empfehlungen-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); }

	.emp-karte {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-2);
		background: var(--color-surface);
		border: var(--border-width) solid var(--border);
		border-radius: var(--radius-card);
		padding: var(--space-3);
		text-decoration: none;
		color: inherit;
		transition: box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard);
	}

	.emp-karte:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }

	.emp-karte__bild { width: 100%; height: 100px; object-fit: contain; }
	.emp-karte__name { margin: 0; font-size: var(--text-xs); font-weight: var(--fw-semibold); color: var(--text-strong); }
	.emp-karte__preis { margin: 0; font-size: var(--text-sm); font-weight: var(--fw-bold); color: var(--color-accent); }

	/* Über Urs */
	.ueber-urs {
		background: var(--color-surface);
		border-top: var(--border-width) solid var(--border);
		padding: var(--space-6) var(--space-4);
		margin-bottom: var(--space-6);
	}

	.ueber-urs__eyebrow {
		margin: 0 0 var(--space-1);
		font-size: var(--text-xs);
		font-weight: var(--fw-semibold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wider);
		color: var(--color-primary);
	}

	.ueber-urs__titel {
		margin: 0 0 var(--space-3);
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: var(--fw-bold);
		color: var(--text-strong);
	}

	.ueber-urs__text { display: grid; gap: var(--space-3); }
	.ueber-urs__text p { margin: 0; font-size: var(--text-sm); color: var(--text-body); line-height: 1.7; }

	/* Footer */
	.shop-footer {
		background: var(--color-surface);
		border-top: var(--border-width) solid var(--border);
		padding: var(--space-4);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-2);
		font-size: var(--text-xs);
		color: var(--text-muted);
	}

	.shop-footer p { margin: 0; }

	.nicht-gefunden { font-size: var(--text-lg); color: var(--text-muted); margin: var(--space-8) var(--space-4); }
</style>
