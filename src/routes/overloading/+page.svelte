<script lang="ts">
	import {
		ShoppingCart,
		Star,
		Shield,
		Truck,
		Gift,
		Bell,
		Tag,
		Clock,
		Users,
		ChevronRight,
		ChevronDown,
		ChevronUp,
		Check,
		X,
		Info,
		Zap,
		Heart,
		Award,
		Package,
		CreditCard,
		Lock,
		AlertTriangle,
		Sparkles,
		BadgePercent,
		ThumbsUp
	} from 'lucide-svelte';
	import { base } from '$app/paths';

	// ── Step state ───────────────────────────────────────────────
	let step = $state(1);
	const totalSteps = 4;

	// ── Product ──────────────────────────────────────────────────
	let quantity = $state(1);
	let selectedColor = $state('Petrol Blue');
	let selectedSize = $state('M');
	const colors = ['Petrol Blue', 'Signal Red', 'Amber Gold', 'Night Black', 'Sky Mint'];
	const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

	// ── Add-ons (all pre-checked — deceptive!) ───────────────────
	let premiumWrap = $state(true);
	let extendedWarranty = $state(true);
	let expressDelivery = $state(true);
	let loyaltyProgram = $state(true);
	let insurancePackage = $state(true);
	let prioritySupport = $state(true);
	let carbonOffset = $state(true);
	let giftMessage = $state(true);

	// ── Fake urgency / social proof ───────────────────────────────
	let viewersNow = $state(47);
	let cartCount = $state(12);
	let stockLeft = $state(3);
	let countdown = $state(14 * 60 + 37); // seconds

	// Jitter the viewer count every few seconds
	$effect(() => {
		const t = setInterval(() => {
			viewersNow = Math.max(30, viewersNow + Math.floor(Math.random() * 7) - 3);
			cartCount = Math.max(5, cartCount + (Math.random() > 0.7 ? 1 : 0));
		}, 2800);
		return () => clearInterval(t);
	});

	// Countdown timer
	$effect(() => {
		const t = setInterval(() => {
			if (countdown > 0) countdown--;
		}, 1000);
		return () => clearInterval(t);
	});

	function fmtTime(s: number) {
		const m = Math.floor(s / 60);
		const sec = s % 60;
		return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
	}

	// ── Ratings breakdown ─────────────────────────────────────────
	const ratingBars = [
		{ stars: 5, pct: 68 },
		{ stars: 4, pct: 19 },
		{ stars: 3, pct: 8 },
		{ stars: 2, pct: 3 },
		{ stars: 1, pct: 2 }
	];

	// ── Pricing ───────────────────────────────────────────────────
	const basePrice = 89.99;
	const extras = $derived(
		(premiumWrap ? 4.99 : 0) +
			(extendedWarranty ? 12.99 : 0) +
			(expressDelivery ? 9.99 : 0) +
			(loyaltyProgram ? 3.99 : 0) +
			(insurancePackage ? 7.99 : 0) +
			(prioritySupport ? 5.99 : 0) +
			(carbonOffset ? 1.99 : 0) +
			(giftMessage ? 2.49 : 0)
	);
	const subtotal = $derived(basePrice * quantity + extras);
	const vat = $derived(subtotal * 0.2);
	const total = $derived(subtotal + vat);

	// ── FAQ accordion ─────────────────────────────────────────────
	let openFaq = $state<number | null>(null);
	const faqs = [
		{
			q: 'What is your return policy?',
			a: 'Returns are accepted within 14 days if the item is unused, in original packaging, with all tags attached, accompanied by the original receipt and a completed return form (available on our website). Items marked as final sale, personalised items, underwear, swimwear, and digital downloads are non-returnable. Return shipping costs are the responsibility of the customer unless the item is faulty. Refunds are processed within 7–10 business days after we receive and inspect the returned item.'
		},
		{
			q: 'How long does delivery take?',
			a: 'Standard delivery takes 5–7 business days. Express delivery (currently selected) takes 1–2 business days. Please note that delivery times may vary during peak seasons, public holidays, or due to unforeseen logistics disruptions. We will send a tracking link to your email once your order has been dispatched.'
		},
		{
			q: 'Is my payment information secure?',
			a: 'All payment data is encrypted with TLS 1.3 and processed by our PCI-DSS-compliant payment partner. We never store your full card details on our servers. Transactions are protected by 3D Secure authentication where applicable.'
		},
		{
			q: 'Can I change or cancel my order?',
			a: 'Orders can be amended or cancelled within 30 minutes of placement by contacting our support team. After this window, the order enters our fulfilment pipeline and changes may not be possible. A €4.99 modification fee applies for changes made after the 30-minute window.'
		},
		{
			q: 'Do you offer a price match guarantee?',
			a: 'Yes! If you find the same item cheaper at an authorised retailer within 7 days of your purchase, contact us with a screenshot and we will refund the difference. Excludes marketplace sellers, outlet stores, and promotional pricing.'
		}
	];

	// ── Recently viewed carousel ──────────────────────────────────
	const related = [
		{ name: 'ProMax Jacket', price: 129.99, rating: 4.7, reviews: 312 },
		{ name: 'Urban Hoodie', price: 74.99, rating: 4.5, reviews: 208 },
		{ name: 'Sport Tee 3-Pack', price: 44.99, rating: 4.8, reviews: 891 },
		{ name: 'Cargo Trousers', price: 99.99, rating: 4.3, reviews: 145 },
		{ name: 'Classic Sneakers', price: 159.99, rating: 4.9, reviews: 1203 }
	];

	// ── Reviews ───────────────────────────────────────────────────
	const reviews = [
		{
			name: 'Markus H.',
			date: '12. Juni 2025',
			rating: 5,
			text: 'Absolut fantastisches Produkt! Qualität top, Lieferung super schnell. Habe es meiner ganzen Familie empfohlen. Werde definitiv wieder kaufen!'
		},
		{
			name: 'Sophie W.',
			date: '3. Mai 2025',
			rating: 4,
			text: 'Sehr gute Qualität, passt genau wie beschrieben. Einziger Kritikpunkt: die Verpackung könnte etwas nachhaltiger sein. Ansonsten voll zufrieden.'
		},
		{
			name: 'Thomas K.',
			date: '28. April 2025',
			rating: 5,
			text: 'Bin begeistert! Das beste Produkt in dieser Preisklasse. Der Kundendienst hat mir auch bei einer kleinen Frage sehr schnell geholfen. 10/10!'
		},
		{
			name: 'Anna L.',
			date: '15. April 2025',
			rating: 5,
			text: 'Perfekte Passform, tolle Farben. Habe die Petrol Blue gewählt und bin sehr zufrieden. Das Material fühlt sich hochwertig an und die Nähte sind sauber.'
		}
	];

	// ── Form fields ───────────────────────────────────────────────
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let address = $state('');
	let city = $state('');
	let zip = $state('');
	let country = $state('Österreich');

	let cardNumber = $state('');
	let cardName = $state('');
	let cardExpiry = $state('');
	let cardCvc = $state('');

	// ── Newsletter & marketing toggles (all pre-checked) ─────────
	let newsletterGeneral = $state(true);
	let newsletterDeals = $state(true);
	let newsletterPartners = $state(true);
	let smsMarketing = $state(true);
	let phoneMarketing = $state(true);
	let dataSharingPartners = $state(true);
	let profilingConsent = $state(true);

	// ── Popup / banner state ──────────────────────────────────────
	let showPopup = $state(false);
	let popupDismissed = $state(false);
	let showTopBanner = $state(true);
	let showFloatingBadge = $state(true);

	$effect(() => {
		const t = setTimeout(() => {
			if (!popupDismissed) showPopup = true;
		}, 3500);
		return () => clearTimeout(t);
	});

	function dismissPopup() {
		showPopup = false;
		popupDismissed = true;
	}

	// ── Pulse animation trigger for CTA ──────────────────────────
	let ctaPulse = $state(false);
	$effect(() => {
		const t = setInterval(() => {
			ctaPulse = true;
			setTimeout(() => (ctaPulse = false), 600);
		}, 4000);
		return () => clearInterval(t);
	});

	// ── Notification ticker ───────────────────────────────────────
	const notifications = [
		'🛒 Luisa aus Wien hat gerade gekauft!',
		'🔥 12 Personen schauen sich dieses Produkt an',
		'✅ Max aus Salzburg hat eine 5-Sterne-Bewertung hinterlassen',
		'⚡ Nur noch 3 auf Lager!',
		'🎁 Anna hat die Premium-Verpackung hinzugefügt',
		'🏆 Bestseller in der Kategorie "Lifestyle"',
		'🚀 Stefan aus Graz hat gerade bestellt!'
	];
	let notifIdx = $state(0);
	let notifVisible = $state(true);
	$effect(() => {
		const t = setInterval(() => {
			notifVisible = false;
			setTimeout(() => {
				notifIdx = (notifIdx + 1) % notifications.length;
				notifVisible = true;
			}, 400);
		}, 3000);
		return () => clearInterval(t);
	});

	// ── Cookie consent ────────────────────────────────────────────
	let showCookieConsent = $state(true);

	// ── Lucky wheel popup ─────────────────────────────────────────
	let showWheelPopup = $state(false);
	let wheelSpinning = $state(false);
	let wheelResult = $state('');
	let wheelDismissed = $state(false);
	$effect(() => {
		const t = setTimeout(() => {
			if (!wheelDismissed) showWheelPopup = true;
		}, 10000);
		return () => clearTimeout(t);
	});

	// ── Second popup (re-engagement after first dismissed) ────────
	let showSecondPopup = $state(false);
	$effect(() => {
		if (popupDismissed) {
			const t = setTimeout(() => { showSecondPopup = true; }, 9000);
			return () => clearTimeout(t);
		}
	});
	function dismissSecondPopup() { showSecondPopup = false; }

	// ── Toast notifications (both sides) ─────────────────────────
	const toastQueue = [
		{ text: '🛒 Lena aus Linz hat gerade gekauft!', color: 'green' },
		{ text: '🔥 Nur noch 3 auf Lager!', color: 'red' },
		{ text: '⚡ 23 Personen haben es im Warenkorb', color: 'amber' },
		{ text: '🎉 Felix hat 5 Sterne gegeben!', color: 'green' },
		{ text: '💸 Preis steigt in 2 Minuten!', color: 'red' },
		{ text: '👀 52 schauen sich das gerade an', color: 'amber' },
		{ text: '🏆 #1 Bestseller der Woche!', color: 'green' },
		{ text: '⏰ Angebot läuft gleich ab!', color: 'red' },
		{ text: '🎁 Maria hat Premium-Verpackung gewählt', color: 'green' },
		{ text: '🚀 Heute bereits 128× verkauft', color: 'amber' },
	];
	interface Toast { id: number; text: string; color: string; side: 'left' | 'right'; }
	let toasts = $state<Toast[]>([]);
	let toastId = $state(0);
	$effect(() => {
		const t = setInterval(() => {
			const id = ++toastId;
			const msg = toastQueue[id % toastQueue.length];
			const side: 'left' | 'right' = id % 2 === 0 ? 'right' : 'left';
			toasts = [...toasts, { id, text: msg.text, color: msg.color, side }];
			setTimeout(() => { toasts = toasts.filter(x => x.id !== id); }, 3500);
		}, 2500);
		return () => clearInterval(t);
	});

	// ── Chat widget ───────────────────────────────────────────────
	let showChat = $state(false);
	let chatOpen = $state(false);
	$effect(() => {
		const t = setTimeout(() => { showChat = true; }, 5000);
		return () => clearTimeout(t);
	});

	// ── Confetti bursts ───────────────────────────────────────────
	let showConfetti = $state(false);
	let confettiKey = $state(0);
	$effect(() => {
		const t = setInterval(() => {
			confettiKey++;
			showConfetti = true;
			setTimeout(() => { showConfetti = false; }, 3000);
		}, 14000);
		return () => clearInterval(t);
	});

	// ── Screenshake ───────────────────────────────────────────────
	let pageShake = $state(false);
	$effect(() => {
		const t = setInterval(() => {
			pageShake = true;
			setTimeout(() => { pageShake = false; }, 500);
		}, 7000);
		return () => clearInterval(t);
	});

	// ── Sticky buy bar ────────────────────────────────────────────
	let showStickyBar = $state(false);
	$effect(() => {
		const t = setTimeout(() => { showStickyBar = true; }, 6000);
		return () => clearTimeout(t);
	});

	// ── Survey popup ──────────────────────────────────────────────
	let showSurvey = $state(false);
	let surveyDismissed = $state(false);
	$effect(() => {
		const t = setTimeout(() => { if (!surveyDismissed) showSurvey = true; }, 18000);
		return () => clearTimeout(t);
	});

	// ── App download popup ────────────────────────────────────────
	let showAppPopup = $state(false);
	let appPopupDismissed = $state(false);
	$effect(() => {
		const t = setTimeout(() => { if (!appPopupDismissed) showAppPopup = true; }, 26000);
		return () => clearTimeout(t);
	});

	// ── Floating sparkle particles ────────────────────────────────
	interface Particle { id: number; x: number; y: number; }
	let particles = $state<Particle[]>([]);
	let particleId = $state(0);
	$effect(() => {
		const t = setInterval(() => {
			const id = ++particleId;
			particles = [...particles, {
				id,
				x: Math.random() * 100,
				y: Math.random() * 100
			}];
			setTimeout(() => { particles = particles.filter(p => p.id !== id); }, 2000);
		}, 600);
		return () => clearInterval(t);
	});

	// ── Bouncing urgent badge position ───────────────────────────
	let urgentX = $state(50);
	let urgentY = $state(30);
	let urgentDx = $state(1.2);
	let urgentDy = $state(0.9);
	$effect(() => {
		const t = setInterval(() => {
			urgentX += urgentDx;
			urgentY += urgentDy;
			if (urgentX > 85 || urgentX < 5)  urgentDx = -urgentDx;
			if (urgentY > 80 || urgentY < 10) urgentDy = -urgentDy;
		}, 30);
		return () => clearInterval(t);
	});

	// ── Make confetti fire faster & screenshake more often ───────
	// (already declared above — these are the corrected intervals)
	let showConfetti2 = $state(false);
	$effect(() => {
		const t = setInterval(() => {
			showConfetti2 = true;
			setTimeout(() => { showConfetti2 = false; }, 2500);
		}, 8000);
		return () => clearInterval(t);
	});

	let pageShake2 = $state(false);
	$effect(() => {
		const t = setInterval(() => {
			pageShake2 = true;
			setTimeout(() => { pageShake2 = false; }, 400);
		}, 4500);
		return () => clearInterval(t);
	});

	// ── Rainbow price flicker ─────────────────────────────────────
	const rainbowColors = ['#E4003A','#F7A823','#005577','#6b21a8','#E4003A'];
	let rainbowIdx = $state(0);
	$effect(() => {
		const t = setInterval(() => {
			rainbowIdx = (rainbowIdx + 1) % rainbowColors.length;
		}, 300);
		return () => clearInterval(t);
	});
</script>

<!-- ═══════════════════════════════════════════════════════════════
     TOP PROMO BANNER
═══════════════════════════════════════════════════════════════ -->
{#if showTopBanner}
	<div class="top-banner">
		<span class="top-banner__text">
			🎉 SOMMER-SALE — BIS ZU 70% RABATT &nbsp;|&nbsp; Kostenloser Versand ab €49 &nbsp;|&nbsp;
			Jetzt kaufen &amp; im August bezahlen &nbsp;|&nbsp; Code: <strong>MEGA2025</strong>
			&nbsp;|&nbsp; Nur noch {fmtTime(countdown)} gültig!
		</span>
		<button class="top-banner__close" onclick={() => (showTopBanner = false)} aria-label="Schließen">
			<X size={14} />
		</button>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     NOTIFICATION TICKER
═══════════════════════════════════════════════════════════════ -->
<div class="ticker-wrap" class:visible={notifVisible}>
	<Bell size={13} />
	<span>{notifications[notifIdx]}</span>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     FLOATING BADGE
═══════════════════════════════════════════════════════════════ -->
{#if showFloatingBadge}
	<div class="floating-badge">
		<Award size={18} />
		<span>Bestseller <br />#1 in 12 Kategorien</span>
		<button onclick={() => (showFloatingBadge = false)} aria-label="Schließen"><X size={12} /></button>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     POPUP
═══════════════════════════════════════════════════════════════ -->
{#if showPopup}
	<div class="popup-overlay" onclick={dismissPopup}>
		<div class="popup" onclick={(e) => e.stopPropagation()}>
			<button class="popup__close" onclick={dismissPopup} aria-label="Schließen"><X size={16} /></button>
			<div class="popup__badge">EXKLUSIV</div>
			<h2 class="popup__title">Warte! 🎁</h2>
			<p class="popup__body">
				Du verlässt fast unsere Seite.<br />
				Melde dich jetzt an und erhalte <strong>10 % Rabatt</strong> auf deine erste Bestellung +
				kostenlosen Versand für immer!
			</p>
			<input class="popup__input" type="email" placeholder="Deine E-Mail-Adresse" />
			<button class="popup__cta btn-primary">JA, ICH WILL SPAREN!</button>
			<p class="popup__decline">Nein danke, ich zahle lieber den vollen Preis.</p>
		</div>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     COOKIE CONSENT BAR
═══════════════════════════════════════════════════════════════ -->
{#if showCookieConsent}
	<div class="cookie-bar">
		<div class="cookie-bar__text">
			🍪 Wir verwenden Cookies für Personalisierung, Werbung und Analyse. <strong>247 Partner</strong> erhalten Zugriff auf deine Daten.
			Details in unserer <a href="#">Cookie-Richtlinie</a>.
		</div>
		<div class="cookie-bar__actions">
			<button class="btn-primary cookie-bar__accept" onclick={() => showCookieConsent = false}>Alle akzeptieren ✓</button>
			<button class="cookie-bar__manage" onclick={() => showCookieConsent = false}>Einstellungen</button>
			<button class="cookie-bar__reject" onclick={() => showCookieConsent = false}>Ablehnen</button>
		</div>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     LUCKY WHEEL POPUP
═══════════════════════════════════════════════════════════════ -->
{#if showWheelPopup}
	<div class="popup-overlay" onclick={() => { showWheelPopup = false; wheelDismissed = true; }}>
		<div class="wheel-popup" onclick={(e) => e.stopPropagation()}>
			<button class="popup__close" onclick={() => { showWheelPopup = false; wheelDismissed = true; }} aria-label="Schließen"><X size={16} /></button>
			<div class="popup__badge" style="background:var(--color-highlight);color:var(--color-surface-inverse)">🎰 EXKLUSIV FÜR DICH</div>
			<h2 class="wheel-popup__title">Dreh das Glücksrad!</h2>
			<p class="wheel-popup__sub">Gewinne bis zu <strong>50 % Rabatt</strong> auf deine Bestellung!</p>
			<div class="wheel-wrap">
				<div class="wheel" class:wheel--spinning={wheelSpinning}>
					<div class="wheel-labels">
						{#each ['10%','20%','5%','50%','15%','30%','25%','GRATIS'] as seg, i}
							<div class="wheel-label" style="--i:{i}">{seg}</div>
						{/each}
					</div>
				</div>
				<div class="wheel-pointer">▼</div>
			</div>
			{#if wheelResult}
				<div class="wheel-result">🎉 Du gewinnst: <strong>{wheelResult}</strong>!</div>
			{/if}
			<button
				class="btn-primary wheel-popup__btn"
				disabled={wheelSpinning}
				onclick={() => {
					if (!wheelSpinning && !wheelResult) {
						wheelSpinning = true;
						const results = ['10% Rabatt','20% Rabatt','5% Rabatt','50% Rabatt','15% Rabatt','30% Rabatt','25% Rabatt','GRATIS Versand'];
						setTimeout(() => {
							wheelSpinning = false;
							wheelResult = results[Math.floor(Math.random() * results.length)];
						}, 3000);
					}
				}}
			>
				{#if wheelSpinning}⏳ Drehen…{:else if wheelResult}📋 CODE KOPIEREN{:else}🎰 JETZT DREHEN!{/if}
			</button>
			<p class="popup__decline" onclick={() => { showWheelPopup = false; wheelDismissed = true; }}>Nein danke, ich möchte nicht sparen.</p>
		</div>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     SECOND POPUP (re-engagement)
═══════════════════════════════════════════════════════════════ -->
{#if showSecondPopup}
	<div class="popup-overlay" onclick={dismissSecondPopup}>
		<div class="popup second-popup" onclick={(e) => e.stopPropagation()}>
			<button class="popup__close" onclick={dismissSecondPopup} aria-label="Schließen"><X size={16} /></button>
			<div class="popup__badge">⚡ LETZTE CHANCE</div>
			<h2 class="popup__title">Nur noch <span class="countdown">{fmtTime(countdown)}</span>!</h2>
			<p class="popup__body">
				<strong>{viewersNow} andere Nutzer</strong> schauen gerade auf das gleiche Produkt.<br/>
				Dein Warenkorb wird in Kürze zurückgesetzt!
			</p>
			<button class="popup__cta btn-primary second-popup__btn" onclick={dismissSecondPopup}>
				JETZT SICHERN — € {(basePrice * quantity).toFixed(2)} →
			</button>
			<p class="popup__decline" onclick={dismissSecondPopup}>Ich riskiere es und schaue später nochmal.</p>
		</div>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     TOAST NOTIFICATIONS
═══════════════════════════════════════════════════════════════ -->
<div class="toasts toasts--left">
	{#each toasts.filter(t => t.side === 'left') as toast (toast.id)}
		<div class="toast toast--{toast.color}">{toast.text}</div>
	{/each}
</div>
<div class="toasts toasts--right">
	{#each toasts.filter(t => t.side === 'right') as toast (toast.id)}
		<div class="toast toast--{toast.color}">{toast.text}</div>
	{/each}
</div>

<!-- ═══════════════════════════════════════════════════════════════
     STICKY BUY BAR
═══════════════════════════════════════════════════════════════ -->
{#if showStickyBar}
	<div class="sticky-bar" class:sticky-bar--pulse={ctaPulse}>
		<div class="sticky-bar__product">
			<Package size={20} style="opacity:0.5"/>
			<span><strong>JO.HAK Premium Jacket</strong> · {selectedColor} · {selectedSize}</span>
		</div>
		<div class="sticky-bar__price">€ {(basePrice * quantity).toFixed(2)}</div>
		<button class="btn-primary sticky-bar__btn" onclick={() => step = 2}>
			<ShoppingCart size={16}/> IN DEN WARENKORB
		</button>
		<button class="sticky-bar__close" onclick={() => showStickyBar = false}><X size={14}/></button>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     CHAT WIDGET
═══════════════════════════════════════════════════════════════ -->
{#if showChat}
	<div class="chat-widget">
		{#if !chatOpen}
			<div class="chat-bubble">💬 Sarah wartet auf dich! <span class="chat-online">● Online</span></div>
		{/if}
		<button class="chat-btn" onclick={() => { chatOpen = !chatOpen; }} aria-label="Chat öffnen">
			{#if chatOpen}<X size={22}/>{:else}💬{/if}
			{#if !chatOpen}<span class="chat-badge">1</span>{/if}
		</button>
		{#if chatOpen}
			<div class="chat-window">
				<div class="chat-window__header">
					<div class="chat-window__avatar">S</div>
					<div>
						<strong>Sarah · Support</strong>
						<span class="chat-online">● Online</span>
					</div>
					<button onclick={() => chatOpen = false} class="popup__close" style="position:static;color:#fff"><X size={14}/></button>
				</div>
				<div class="chat-window__body">
					<div class="chat-msg">👋 Hallo! Ich sehe du schaust dir die <strong>Premium Jacket</strong> an. Darf ich helfen?</div>
					<div class="chat-msg">Ich kann dir einen <strong>exklusiven Rabattcode</strong> geben! 🎁 Gib einfach deine E-Mail ein.</div>
					<div class="chat-msg chat-typing"><span></span><span></span><span></span></div>
				</div>
				<div class="chat-window__input">
					<input type="text" placeholder="Nachricht eingeben…" />
					<button class="btn-primary" style="padding:var(--space-2) var(--space-3);font-size:var(--text-xs);flex-shrink:0">Senden</button>
				</div>
			</div>
		{/if}
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     CONFETTI
═══════════════════════════════════════════════════════════════ -->
{#if showConfetti}
	<div class="confetti" aria-hidden="true">
		{#each Array(50) as _, i}
			<div class="confetti-piece" style="--i:{i};--hue:{(i*37)%360};--delay:{(i*0.06).toFixed(2)}s;--left:{(i*2)%100}%"></div>
		{/each}
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     SURVEY POPUP
═══════════════════════════════════════════════════════════════ -->
{#if showSurvey}
	<div class="popup-overlay" onclick={() => { showSurvey = false; surveyDismissed = true; }}>
		<div class="popup survey-popup" onclick={(e) => e.stopPropagation()}>
			<button class="popup__close" onclick={() => { showSurvey = false; surveyDismissed = true; }} aria-label="Schließen"><X size={16} /></button>
			<div class="popup__badge" style="background:#6b21a8">⭐ SCHNELLE UMFRAGE</div>
			<h2 class="popup__title" style="font-size:var(--text-xl)">Wie zufrieden bist du?</h2>
			<p class="popup__body" style="font-size:var(--text-sm)">Nur 2 Fragen — dauert 10 Sekunden! Als Dankeschön erhältst du <strong>5 € Gutschein</strong>.</p>
			<div class="survey-stars">
				{#each [1,2,3,4,5] as s}
					<button class="survey-star">⭐</button>
				{/each}
			</div>
			<button class="btn-primary survey-popup__btn" onclick={() => { showSurvey = false; surveyDismissed = true; }}>
				WEITER ZUR FRAGE 2 →
			</button>
			<p class="popup__decline" onclick={() => { showSurvey = false; surveyDismissed = true; }}>Überspringen (kein Gutschein)</p>
		</div>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     APP DOWNLOAD POPUP
═══════════════════════════════════════════════════════════════ -->
{#if showAppPopup}
	<div class="popup-overlay" onclick={() => { showAppPopup = false; appPopupDismissed = true; }}>
		<div class="popup app-popup" onclick={(e) => e.stopPropagation()}>
			<button class="popup__close" onclick={() => { showAppPopup = false; appPopupDismissed = true; }} aria-label="Schließen"><X size={16} /></button>
			<div class="app-popup__icon">📱</div>
			<h2 class="popup__title" style="font-size:var(--text-xl)">Hol dir die App!</h2>
			<p class="popup__body" style="font-size:var(--text-sm)">
				Exklusiv in der App: <strong>Extra 15 % Rabatt</strong> + Push-Benachrichtigungen bei Preissenkungen!<br/>
				⭐⭐⭐⭐⭐ 4.9 · 128.000 Downloads
			</p>
			<div class="app-popup__btns">
				<button class="btn-primary app-popup__store" onclick={() => { showAppPopup = false; appPopupDismissed = true; }}>
					🍎 App Store
				</button>
				<button class="btn-primary app-popup__store" onclick={() => { showAppPopup = false; appPopupDismissed = true; }}>
					🤖 Google Play
				</button>
			</div>
			<p class="popup__decline" onclick={() => { showAppPopup = false; appPopupDismissed = true; }}>Nein danke, ich shoppe lieber langsam.</p>
		</div>
	</div>
{/if}

<!-- ═══════════════════════════════════════════════════════════════
     FLOATING SPARKLE PARTICLES
═══════════════════════════════════════════════════════════════ -->
<div class="sparkle-layer" aria-hidden="true">
	{#each particles as p (p.id)}
		<div class="sparkle-dot" style="left:{p.x}%;top:{p.y}%">✨</div>
	{/each}
</div>

<!-- ═══════════════════════════════════════════════════════════════
     BOUNCING URGENT BADGE
═══════════════════════════════════════════════════════════════ -->
<div class="bounce-badge" style="left:{urgentX}%;top:{urgentY}%">
	🔥 NUR NOCH {stockLeft}!
</div>

<!-- ═══════════════════════════════════════════════════════════════
     EXTRA CONFETTI BURST
═══════════════════════════════════════════════════════════════ -->
{#if showConfetti2}
	<div class="confetti" aria-hidden="true">
		{#each Array(60) as _, i}
			<div class="confetti-piece" style="--i:{i};--hue:{(i*41+120)%360};--delay:{(i*0.04).toFixed(2)}s;--left:{(i*1.7)%100}%"></div>
		{/each}
	</div>
{/if}

<!-- PAGE WRAPPER -->
<div class="page" class:shake={pageShake} class:shake2={pageShake2}>

	<!-- SHOP HEADER -->
	<header class="shop-header">
		<div class="shop-header__logo">
			<Sparkles size={22} />
			<span>MEGA<strong>SHOP</strong></span>
		</div>
		<nav class="shop-header__nav">
			<a href="#">Sale</a>
			<a href="#">Neu</a>
			<a href="#">Herren</a>
			<a href="#">Damen</a>
			<a href="#">Sport</a>
			<a href="#">Marken</a>
			<a href="#">Outlet</a>
		</nav>
		<div class="shop-header__actions">
			<button class="icon-btn"><Heart size={18} /></button>
			<button class="icon-btn cart-btn">
				<ShoppingCart size={18} />
				<span class="cart-badge">{cartCount}</span>
			</button>
		</div>
	</header>

	<!-- STEP INDICATOR -->
	<div class="stepper">
		{#each Array(totalSteps) as _, i}
			<div class="stepper__item" class:active={step === i + 1} class:done={step > i + 1}>
				<div class="stepper__circle">
					{#if step > i + 1}<Check size={14} />{:else}{i + 1}{/if}
				</div>
				<span>{['Produkt', 'Extras', 'Lieferung', 'Zahlung'][i]}</span>
			</div>
			{#if i < totalSteps - 1}
				<div class="stepper__line" class:done={step > i + 1}></div>
			{/if}
		{/each}
	</div>

	<main class="main">

		<!-- ─────────────────────────────────────────────────────────
		     STEP 1 — PRODUCT
		───────────────────────────────────────────────────────── -->
		{#if step === 1}
		<div class="step-content">

			<!-- Left: Product image + badges -->
			<div class="product-media">
				<div class="product-image-wrap">
					<div class="product-image">
						<Package size={80} style="color: var(--color-primary); opacity:0.3" />
						<span class="product-image__label">JO.HAK Premium Jacket</span>
					</div>
					<!-- Floating badges on image -->
					<div class="img-badge img-badge--sale">-40%</div>
					<div class="img-badge img-badge--new">NEU</div>
					<div class="img-badge img-badge--hot">🔥 HOT</div>
				</div>
				<!-- Trust signals row -->
				<div class="trust-row">
					<div class="trust-item"><Shield size={14}/> Käuferschutz</div>
					<div class="trust-item"><Truck size={14}/> Gratis Versand</div>
					<div class="trust-item"><Lock size={14}/> SSL Sicher</div>
					<div class="trust-item"><Award size={14}/> Testsieger</div>
				</div>
				<!-- Rating summary -->
				<div class="rating-box">
					<div class="rating-box__score">4.8</div>
					<div class="rating-box__stars">
						{#each [1,2,3,4,5] as _}<Star size={14} fill="var(--color-highlight)" color="var(--color-highlight)" />{/each}
					</div>
					<div class="rating-box__count">2.847 Bewertungen</div>
				</div>
				<!-- Rating bars -->
				<div class="rating-bars">
					{#each ratingBars as rb}
						<div class="rating-bar-row">
							<span>{rb.stars}★</span>
							<div class="rating-bar-track">
								<div class="rating-bar-fill" style="width:{rb.pct}%"></div>
							</div>
							<span>{rb.pct}%</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right: Product config -->
			<div class="product-config">
				<!-- Breadcrumb -->
				<div class="breadcrumb">
					<span>Home</span><ChevronRight size={12}/><span>Jacken</span><ChevronRight size={12}/><span>Premium</span><ChevronRight size={12}/><span class="breadcrumb__current">JO.HAK Premium Jacket</span>
				</div>

				<!-- Badges row -->
				<div class="badge-row">
					<span class="badge badge--red">SALE</span>
					<span class="badge badge--amber">BESTSELLER</span>
					<span class="badge badge--sky">NEU 2025</span>
					<span class="badge badge--green">ECO</span>
					<span class="badge badge--purple">LIMITED</span>
				</div>

				<h1 class="product-title">JO.HAK Premium Jacket<br/><span class="product-subtitle">„Gemeinsam Zukunft tragen."</span></h1>

				<!-- Social proof -->
				<div class="social-proof">
					<Users size={14}/>
					<span><strong>{viewersNow} Personen</strong> schauen sich das gerade an</span>
					<span class="dot">·</span>
					<Zap size={13} style="color:var(--color-accent)"/>
					<span style="color:var(--color-accent)"><strong>{cartCount}×</strong> im Warenkorb</span>
				</div>

				<!-- Stock warning -->
				<div class="stock-warning">
					<AlertTriangle size={14}/>
					Nur noch <strong>{stockLeft} Stück</strong> auf Lager! Angebot endet in <strong class="countdown">{fmtTime(countdown)}</strong>
				</div>

				<!-- Price block -->
				<div class="price-block">
					<span class="price-block__original">€ 149,99</span>
					<span class="price-block__current" style="color:{rainbowColors[rainbowIdx]}">€ {basePrice.toFixed(2)}</span>
					<span class="price-block__saving">Du sparst € 60,00 (40%)</span>
				</div>

				<!-- Color selector -->
				<div class="option-group">
					<label class="option-label">Farbe: <strong>{selectedColor}</strong></label>
					<div class="color-swatches">
						{#each colors as c}
							<button
								class="swatch"
								class:selected={selectedColor === c}
								style="background: {c==='Petrol Blue'?'#005577':c==='Signal Red'?'#E4003A':c==='Amber Gold'?'#F7A823':c==='Night Black'?'#1A2E3C':'#80CCDB'}"
								onclick={() => selectedColor = c}
								aria-label={c}
							></button>
						{/each}
					</div>
				</div>

				<!-- Size selector -->
				<div class="option-group">
					<label class="option-label">Größe: <strong>{selectedSize}</strong> <a href="#" class="size-guide">Größentabelle →</a></label>
					<div class="size-grid">
						{#each sizes as s}
							<button class="size-btn" class:selected={selectedSize === s} onclick={() => selectedSize = s}>{s}</button>
						{/each}
					</div>
				</div>

				<!-- Quantity -->
				<div class="option-group">
					<label class="option-label">Anzahl</label>
					<div class="qty-control">
						<button onclick={() => quantity = Math.max(1, quantity - 1)}>−</button>
						<span>{quantity}</span>
						<button onclick={() => quantity = Math.min(stockLeft, quantity + 1)}>+</button>
					</div>
				</div>

				<!-- Long description -->
				<div class="product-desc">
					<p>Die <strong>JO.HAK Premium Jacket</strong> ist das Ergebnis jahrelanger Forschung und Innovation. Gefertigt aus 100 % recyceltem Hochleistungs-Polyester mit einer wasserabweisenden DWR-Beschichtung (Durable Water Repellent), bietet sie optimalen Schutz bei minimalem Gewicht.</p>
					<p>Die ergonomisch geschnittene Passform ermöglicht maximale Bewegungsfreiheit, während die verstärkten Nähte und die YKK®-Reißverschlüsse für langlebige Qualität sorgen. Innen wärmt ein Fleece-Futter aus Post-Consumer-Recycling-Material.</p>
					<p>Ausgestattet mit 6 Taschen (2 Brusttaschen mit Reißverschluss, 2 Seitentaschen, 1 Innentasche, 1 versteckte Wertsachentasche), verstellbaren Ärmelbündchen und einem sturmfesten Kragen. Maschinenwaschbar bei 30 °C.</p>
					<p><em>Zertifiziert nach OEKO-TEX® Standard 100, bluesign® zugelassen, Mitglied der Fair Wear Foundation.</em></p>
				</div>

				<!-- Feature pills -->
				<div class="feature-pills">
					{#each ['Wasserdicht','Windresistent','Atmungsaktiv','Leichtgewicht','Recycled','UV-Schutz UPF 50','Anti-Odor','4-Way Stretch','Reflektoren','Packable'] as f}
						<span class="feature-pill"><Check size={11}/> {f}</span>
					{/each}
				</div>

				<!-- CTA -->
				<button class="btn-primary cta-main" class:pulse={ctaPulse} onclick={() => step = 2}>
					<ShoppingCart size={18}/>
					IN DEN WARENKORB — € {(basePrice * quantity).toFixed(2)}
					<ChevronRight size={16}/>
				</button>

				<!-- Secondary actions -->
				<div class="secondary-actions">
					<button class="btn-ghost"><Heart size={15}/> Zur Wunschliste</button>
					<button class="btn-ghost"><Gift size={15}/> Als Geschenk</button>
					<button class="btn-ghost"><Tag size={15}/> Preis-Alarm</button>
				</div>

				<!-- Tiny trust row -->
				<div class="micro-trust">
					<span><Lock size={11}/> Sichere Zahlung</span>
					<span><Truck size={11}/> Gratis Rückversand</span>
					<span><Shield size={11}/> 2 Jahre Garantie</span>
					<span><Clock size={11}/> 30 Tage Rückgabe</span>
				</div>
			</div>

		</div><!-- /step-content -->

		<!-- REVIEWS SECTION (on step 1, below fold) -->
		<section class="reviews-section">
			<h2 class="section-title">KUNDENBEWERTUNGEN <span class="section-count">(2.847)</span></h2>
			<div class="reviews-grid">
				{#each reviews as r}
					<div class="review-card">
						<div class="review-card__header">
							<div class="review-card__avatar">{r.name[0]}</div>
							<div>
								<strong>{r.name}</strong>
								<div class="review-card__stars">
									{#each Array(r.rating) as _}<Star size={12} fill="var(--color-highlight)" color="var(--color-highlight)"/>{/each}
								</div>
							</div>
							<span class="review-card__date">{r.date}</span>
						</div>
						<p class="review-card__text">{r.text}</p>
						<div class="review-card__helpful">
							<ThumbsUp size={12}/> Hilfreich (47)
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- FAQ SECTION -->
		<section class="faq-section">
			<h2 class="section-title">HÄUFIGE FRAGEN</h2>
			<div class="faq-list">
				{#each faqs as faq, i}
					<div class="faq-item">
						<button class="faq-question" onclick={() => openFaq = openFaq === i ? null : i}>
							<Info size={15}/>
							{faq.q}
							{#if openFaq === i}<ChevronUp size={15}/>{:else}<ChevronDown size={15}/>{/if}
						</button>
						{#if openFaq === i}
							<p class="faq-answer">{faq.a}</p>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- RELATED PRODUCTS -->
		<section class="related-section">
			<h2 class="section-title">DAS KÖNNTE DIR AUCH GEFALLEN</h2>
			<div class="related-grid">
				{#each related as p}
					<div class="related-card">
						<div class="related-card__image"><Package size={40} style="opacity:0.25"/></div>
						<p class="related-card__name">{p.name}</p>
						<div class="related-card__stars">
							{#each Array(Math.floor(p.rating)) as _}<Star size={11} fill="var(--color-highlight)" color="var(--color-highlight)"/>{/each}
							<span>({p.reviews})</span>
						</div>
						<p class="related-card__price">€ {p.price.toFixed(2)}</p>
						<button class="btn-ghost-sm">Ansehen</button>
					</div>
				{/each}
			</div>
		</section>

		<!-- ─────────────────────────────────────────────────────────
		     STEP 2 — ADD-ONS (all pre-checked)
		───────────────────────────────────────────────────────── -->
		{:else if step === 2}
		<div class="step-content step-content--full">
			<h2 class="step-heading">Vervollständige deine Bestellung</h2>
			<p class="step-subheading">Folgende Services wurden für dich <strong>automatisch hinzugefügt</strong>, um das beste Erlebnis zu gewährleisten. Du kannst sie jederzeit entfernen.</p>

			<div class="addons-grid">
				<!-- Each add-on is pre-checked -->
				{#each [
					{ label: 'Premium Geschenkverpackung', desc: 'Edle Box mit Seidenpapier, Schleife und persönlicher Karte. Perfekt für jede Gelegenheit.', price: 4.99, icon: Gift, bind: 'premiumWrap', checked: premiumWrap, toggle: () => premiumWrap = !premiumWrap },
					{ label: 'Erweiterte Garantie (3 Jahre)', desc: 'Schutz gegen Materialfehler, Verschleiß und versehentliche Beschädigungen. Inkl. Vor-Ort-Service.', price: 12.99, icon: Shield, bind: 'extendedWarranty', checked: extendedWarranty, toggle: () => extendedWarranty = !extendedWarranty },
					{ label: 'Express-Lieferung (1–2 Werktage)', desc: 'Prioritätsbehandlung in unserem Lager. Garantierte Lieferung innerhalb von 2 Werktagen.', price: 9.99, icon: Zap, bind: 'expressDelivery', checked: expressDelivery, toggle: () => expressDelivery = !expressDelivery },
					{ label: 'VIP Treueprogramm (1 Monat)', desc: 'Punkte sammeln, exklusive Rabatte und Early-Access zu Sales. Monatlich kündbar.', price: 3.99, icon: Award, bind: 'loyaltyProgram', checked: loyaltyProgram, toggle: () => loyaltyProgram = !loyaltyProgram },
					{ label: 'Versicherungspaket', desc: 'Diebstahlschutz, Verlustschutz und Transportversicherung. Gültig 12 Monate ab Lieferung.', price: 7.99, icon: Lock, bind: 'insurancePackage', checked: insurancePackage, toggle: () => insurancePackage = !insurancePackage },
					{ label: 'Priority-Kundensupport', desc: '24/7 dedizierter Support via Chat, Telefon und E-Mail. Antwort garantiert innerhalb von 1 Stunde.', price: 5.99, icon: Bell, bind: 'prioritySupport', checked: prioritySupport, toggle: () => prioritySupport = !prioritySupport },
					{ label: 'CO₂-Ausgleich (klimaneutral)', desc: 'Dein Kauf wird klimaneutral gestellt. Wir pflanzen 5 Bäume in deinem Namen.', price: 1.99, icon: Sparkles, bind: 'carbonOffset', checked: carbonOffset, toggle: () => carbonOffset = !carbonOffset },
					{ label: 'Grußkarte personalisieren', desc: 'Deine persönliche Nachricht handgeschrieben auf einer Premium-Karte beigelegt.', price: 2.49, icon: Heart, bind: 'giftMessage', checked: giftMessage, toggle: () => giftMessage = !giftMessage },
				] as addon}
					<div class="addon-card" class:addon-card--checked={addon.checked}>
						<div class="addon-card__check">
							<input type="checkbox" checked={addon.checked} onchange={addon.toggle} id="addon-{addon.label}" />
						</div>
						<label for="addon-{addon.label}" class="addon-card__body">
							<div class="addon-card__icon"><addon.icon size={20}/></div>
							<div class="addon-card__info">
								<strong>{addon.label}</strong>
								<p>{addon.desc}</p>
							</div>
							<div class="addon-card__price">+€ {addon.price.toFixed(2)}</div>
						</label>
					</div>
				{/each}
			</div>

			<!-- Running total -->
			<div class="running-total">
				<div class="running-total__row"><span>Produkt (×{quantity})</span><span>€ {(basePrice * quantity).toFixed(2)}</span></div>
				<div class="running-total__row"><span>Zusatzleistungen</span><span>€ {extras.toFixed(2)}</span></div>
				<div class="running-total__row running-total__row--vat"><span>MwSt. (20 %)</span><span>€ {vat.toFixed(2)}</span></div>
				<div class="running-total__row running-total__row--total"><span>Gesamt</span><span>€ {total.toFixed(2)}</span></div>
			</div>

			<div class="step-nav">
				<button class="btn-ghost" onclick={() => step = 1}><ChevronRight size={15} style="transform:rotate(180deg)"/> Zurück</button>
				<button class="btn-primary" onclick={() => step = 3}>Weiter zur Lieferung <ChevronRight size={15}/></button>
			</div>
		</div>

		<!-- ─────────────────────────────────────────────────────────
		     STEP 3 — DELIVERY + MARKETING CONSENTS
		───────────────────────────────────────────────────────── -->
		{:else if step === 3}
		<div class="step-content step-content--full">
			<h2 class="step-heading">Lieferadresse &amp; Einstellungen</h2>

			<div class="form-grid">
				<div class="form-group">
					<label for="fn">Vorname *</label>
					<input id="fn" type="text" bind:value={firstName} placeholder="Max" />
				</div>
				<div class="form-group">
					<label for="ln">Nachname *</label>
					<input id="ln" type="text" bind:value={lastName} placeholder="Mustermann" />
				</div>
				<div class="form-group form-group--full">
					<label for="em">E-Mail *</label>
					<input id="em" type="email" bind:value={email} placeholder="max@example.at" />
				</div>
				<div class="form-group">
					<label for="ph">Telefon *</label>
					<input id="ph" type="tel" bind:value={phone} placeholder="+43 …" />
				</div>
				<div class="form-group form-group--full">
					<label for="addr">Straße &amp; Hausnummer *</label>
					<input id="addr" type="text" bind:value={address} placeholder="Musterstraße 1" />
				</div>
				<div class="form-group">
					<label for="zip">PLZ *</label>
					<input id="zip" type="text" bind:value={zip} placeholder="5600" />
				</div>
				<div class="form-group">
					<label for="city">Ort *</label>
					<input id="city" type="text" bind:value={city} placeholder="St. Johann im Pongau" />
				</div>
				<div class="form-group form-group--full">
					<label for="country">Land *</label>
					<select id="country" bind:value={country}>
						{#each ['Österreich','Deutschland','Schweiz','Liechtenstein','Italien','Slowenien','Ungarn','Tschechien'] as c}
							<option>{c}</option>
						{/each}
					</select>
				</div>
			</div>

			<!-- Marketing consents — all pre-checked, lots of legalese -->
			<div class="consent-section">
				<h3 class="consent-title">Kommunikationseinstellungen &amp; Einwilligungen</h3>
				<p class="consent-intro">
					Um dir das bestmögliche Einkaufserlebnis zu bieten, haben wir folgende Präferenzen vorausgewählt.
					Du kannst sie jederzeit in deinen Kontoeinstellungen unter „Mein Konto → Datenschutz → Kommunikationspräferenzen → Benachrichtigungseinstellungen → Kanal-Einstellungen" anpassen.
				</p>

				{#each [
					{ id: 'nl-general', label: 'Newsletter (allgemein)', desc: 'Ich stimme zu, regelmäßige Newsletter mit allgemeinen Informationen über Produkte, Neuheiten und Serviceleistungen von MegaShop GmbH per E-Mail zu erhalten.', bind: newsletterGeneral, toggle: () => newsletterGeneral = !newsletterGeneral },
					{ id: 'nl-deals', label: 'Angebote &amp; Aktionen', desc: 'Ich willige ein, personalisierte Angebote, Rabattcodes und Aktionsinformationen auf Basis meines Kaufverhaltens und meiner Browsing-Aktivitäten per E-Mail zu erhalten.', bind: newsletterDeals, toggle: () => newsletterDeals = !newsletterDeals },
					{ id: 'nl-partners', label: 'Partner-Angebote', desc: 'Ich stimme zu, Angebote von sorgfältig ausgewählten Partnerunternehmen (Liste der Partner einsehbar unter megashop.at/partner) per E-Mail zu erhalten.', bind: newsletterPartners, toggle: () => newsletterPartners = !newsletterPartners },
					{ id: 'sms', label: 'SMS-Marketing', desc: 'Ich willige ein, Werbebotschaften, Bestellbenachrichtigungen und Angebote per SMS an meine angegebene Mobilnummer zu erhalten. Standardtarife können anfallen.', bind: smsMarketing, toggle: () => smsMarketing = !smsMarketing },
					{ id: 'phone', label: 'Telefonmarketing', desc: 'Ich stimme zu, von MegaShop oder beauftragten Dienstleistern zu Werbe- und Marktforschungszwecken angerufen zu werden.', bind: phoneMarketing, toggle: () => phoneMarketing = !phoneMarketing },
					{ id: 'data', label: 'Datenweitergabe an Partner', desc: 'Ich stimme zu, dass meine Daten (Name, E-Mail, Kaufhistorie, Browsing-Verhalten) an ausgewählte Partner für deren eigene Marketingzwecke weitergegeben werden dürfen.', bind: dataSharingPartners, toggle: () => dataSharingPartners = !dataSharingPartners },
					{ id: 'profiling', label: 'Profilbildung &amp; Personalisierung', desc: 'Ich willige ein, dass MegaShop auf Basis meiner Aktivitäten, Präferenzen und Kaufhistorie ein individuelles Profil erstellt und für personalisierte Werbung, Produktempfehlungen und Preisgestaltung verwendet.', bind: profilingConsent, toggle: () => profilingConsent = !profilingConsent },
				] as consent}
					<div class="consent-item">
						<input type="checkbox" id={consent.id} checked={consent.bind} onchange={consent.toggle} />
						<label for={consent.id}>
							<strong>{@html consent.label}</strong>
							<span>{consent.desc}</span>
						</label>
					</div>
				{/each}

				<p class="consent-legal">
					Mit dem Fortfahren akzeptierst du unsere <a href="#">Allgemeinen Geschäftsbedingungen</a> (zuletzt geändert am 1. März 2025, 47 Seiten),
					unsere <a href="#">Datenschutzerklärung</a> (DSGVO-konform, 23 Seiten), unsere <a href="#">Cookie-Richtlinie</a>,
					unsere <a href="#">Widerrufsbelehrung</a>, unsere <a href="#">Lieferbedingungen</a> sowie alle weiteren unter
					<a href="#">megashop.at/rechtliches</a> aufgeführten Dokumente.
				</p>
			</div>

			<div class="step-nav">
				<button class="btn-ghost" onclick={() => step = 2}><ChevronRight size={15} style="transform:rotate(180deg)"/> Zurück</button>
				<button class="btn-primary" onclick={() => step = 4}>Weiter zur Zahlung <ChevronRight size={15}/></button>
			</div>
		</div>

		<!-- ─────────────────────────────────────────────────────────
		     STEP 4 — PAYMENT
		───────────────────────────────────────────────────────── -->
		{:else if step === 4}
		<div class="step-content step-content--full">
			<h2 class="step-heading">Zahlung &amp; Bestellübersicht</h2>

			<div class="payment-layout">
				<div class="payment-form">
					<div class="payment-methods">
						{#each ['Kreditkarte','PayPal','Klarna','Sofortüberweisung','Apple Pay','Google Pay','Kauf auf Rechnung','Ratenzahlung'] as m, i}
							<button class="payment-method" class:payment-method--selected={i === 0}>{m}</button>
						{/each}
					</div>

					<div class="form-grid" style="margin-top: var(--space-5)">
						<div class="form-group form-group--full">
							<label for="cn">Kartennummer *</label>
							<input id="cn" type="text" bind:value={cardNumber} placeholder="1234 5678 9012 3456" maxlength={19} />
						</div>
						<div class="form-group form-group--full">
							<label for="cname">Name auf der Karte *</label>
							<input id="cname" type="text" bind:value={cardName} placeholder="MAX MUSTERMANN" />
						</div>
						<div class="form-group">
							<label for="exp">Ablaufdatum *</label>
							<input id="exp" type="text" bind:value={cardExpiry} placeholder="MM/JJ" maxlength={5} />
						</div>
						<div class="form-group">
							<label for="cvc">
								CVC *
								<span class="cvc-hint"><Info size={12}/> Was ist das?</span>
							</label>
							<input id="cvc" type="text" bind:value={cardCvc} placeholder="123" maxlength={4} />
						</div>
					</div>

					<div class="security-badges">
						<div class="security-badge"><Lock size={13}/> 256-bit SSL</div>
						<div class="security-badge"><Shield size={13}/> PCI DSS</div>
						<div class="security-badge"><CreditCard size={13}/> 3D Secure</div>
						<div class="security-badge"><Check size={13}/> Käuferschutz</div>
					</div>
				</div>

				<!-- Order summary -->
				<div class="order-summary">
					<h3 class="order-summary__title">BESTELLÜBERSICHT</h3>
					<div class="order-summary__product">
						<div class="order-summary__product-image"><Package size={32} style="opacity:0.3"/></div>
						<div>
							<strong>JO.HAK Premium Jacket</strong>
							<p>{selectedColor} · Größe {selectedSize} · ×{quantity}</p>
						</div>
						<span>€ {(basePrice * quantity).toFixed(2)}</span>
					</div>

					<div class="order-summary__lines">
						{#if premiumWrap}<div class="order-summary__line"><span><Check size={11}/> Premium-Verpackung</span><span>€ 4.99</span></div>{/if}
						{#if extendedWarranty}<div class="order-summary__line"><span><Check size={11}/> Erweiterte Garantie</span><span>€ 12.99</span></div>{/if}
						{#if expressDelivery}<div class="order-summary__line"><span><Check size={11}/> Express-Lieferung</span><span>€ 9.99</span></div>{/if}
						{#if loyaltyProgram}<div class="order-summary__line"><span><Check size={11}/> VIP Treueprogramm</span><span>€ 3.99</span></div>{/if}
						{#if insurancePackage}<div class="order-summary__line"><span><Check size={11}/> Versicherungspaket</span><span>€ 7.99</span></div>{/if}
						{#if prioritySupport}<div class="order-summary__line"><span><Check size={11}/> Priority-Support</span><span>€ 5.99</span></div>{/if}
						{#if carbonOffset}<div class="order-summary__line"><span><Check size={11}/> CO₂-Ausgleich</span><span>€ 1.99</span></div>{/if}
						{#if giftMessage}<div class="order-summary__line"><span><Check size={11}/> Grußkarte</span><span>€ 2.49</span></div>{/if}
					</div>

					<div class="order-summary__totals">
						<div><span>Zwischensumme</span><span>€ {subtotal.toFixed(2)}</span></div>
						<div><span>MwSt. (20 %)</span><span>€ {vat.toFixed(2)}</span></div>
						<div class="order-summary__grand"><span>GESAMT</span><span>€ {total.toFixed(2)}</span></div>
					</div>

					<div class="promo-row">
						<input type="text" placeholder="Gutscheincode eingeben" />
						<button class="btn-ghost-sm"><BadgePercent size={14}/> Einlösen</button>
					</div>

					<button class="btn-primary btn-primary--full cta-main" class:pulse={ctaPulse} onclick={() => step = 1}>
						<Lock size={16}/>
						JETZT KOSTENPFLICHTIG BESTELLEN — € {total.toFixed(2)}
					</button>

					<p class="order-summary__legal">
						Mit Klick auf „Jetzt kostenpflichtig bestellen" bestätigst du, alle oben verlinkten Dokumente
						gelesen und akzeptiert zu haben, und autorisierst MegaShop GmbH zur Belastung deiner
						Zahlungsmethode. Der Kaufvertrag kommt mit Versand der Bestellbestätigung zustande.
						Widerrufsrecht gemäß §11 FAGG besteht für 14 Tage. Ausnahmen gelten für personalisierte Waren.
					</p>
				</div>
			</div>

			<div class="step-nav">
				<button class="btn-ghost" onclick={() => step = 3}><ChevronRight size={15} style="transform:rotate(180deg)"/> Zurück</button>
			</div>
		</div>
		{/if}

	</main>

	<section class="pattern-summary" aria-labelledby="pattern-summary-title">
		<div class="pattern-summary__inner">
			<h2 id="pattern-summary-title">Kurz erklärt: Overloading</h2>
			<p>
				Bei diesem Dark Pattern werden Nutzer:innen mit zu vielen Optionen, Hinweisen und
				drängenden Signalen überladen, damit sie schneller klicken statt bewusst zu entscheiden.
			</p>
			<a class="btn-primary pattern-summary__home" href={`${base}/`}>
				Zurück zur dark-johak Startseite
			</a>
		</div>
	</section>

	<!-- SHOP FOOTER -->
	<footer class="shop-footer">
		<div class="johak-accent-bar"></div>
		<div class="shop-footer__inner">
			<p class="shop-footer__copy">© 2025 MegaShop GmbH · <a href="#">AGB</a> · <a href="#">Datenschutz</a> · <a href="#">Impressum</a> · <a href="#">Cookies</a> · <a href="#">Widerruf</a></p>
			<p class="shop-footer__disclaimer">* Alle Preise inkl. MwSt., zzgl. Versandkosten falls nicht anders angegeben. Angebote gültig solange der Vorrat reicht. Irrtümer und Änderungen vorbehalten.</p>
		</div>
	</footer>

</div><!-- /page -->

<style>
/* ════════════════════════════════════════════════════════════════
   ANIMATIONS
════════════════════════════════════════════════════════════════ */
@keyframes marquee {
	0%   { transform: translateX(0); }
	100% { transform: translateX(-50%); }
}
@keyframes pulse-scale {
	0%, 100% { transform: scale(1); }
	50%       { transform: scale(1.04); box-shadow: var(--shadow-lg); }
}
@keyframes badge-pop {
	0%   { transform: scale(0.8) rotate(-5deg); opacity: 0; }
	60%  { transform: scale(1.1) rotate(2deg); }
	100% { transform: scale(1) rotate(0); opacity: 1; }
}
@keyframes float {
	0%, 100% { transform: translateY(0); }
	50%       { transform: translateY(-6px); }
}
@keyframes wiggle {
	0%, 100% { transform: rotate(0deg); }
	25%       { transform: rotate(-4deg); }
	75%       { transform: rotate(4deg); }
}
@keyframes fade-in-up {
	from { opacity: 0; transform: translateY(8px); }
	to   { opacity: 1; transform: translateY(0); }
}
@keyframes ticker-fade {
	from { opacity: 0; transform: translateY(4px); }
	to   { opacity: 1; transform: translateY(0); }
}
@keyframes countdown-pulse {
	0%, 100% { color: var(--color-accent); }
	50%       { color: var(--color-highlight); }
}
@keyframes bar-grow {
	from { width: 0; }
}
@keyframes glow {
	0%, 100% { box-shadow: 0 0 0 0 rgba(228,0,58,0); }
	50%       { box-shadow: 0 0 0 6px rgba(228,0,58,0.25); }
}

/* ════════════════════════════════════════════════════════════════
   BASE PAGE
════════════════════════════════════════════════════════════════ */
.page {
	font-family: var(--font-body);
	background: var(--color-bg);
	color: var(--text-body);
	min-height: 100vh;
	padding-bottom: var(--space-12);
	position: relative;
	overflow-x: hidden;
}

/* ════════════════════════════════════════════════════════════════
   DARK PATTERN LABEL
════════════════════════════════════════════════════════════════ */
.pattern-label {
	display: flex;
	align-items: flex-start;
	gap: var(--space-3);
	background: var(--color-warning-soft, #FDEDD0);
	border-left: 4px solid var(--color-highlight);
	padding: var(--space-3) var(--space-5);
	font-size: var(--text-sm);
	color: var(--text-strong);
}
.pattern-label strong {
	display: block;
	font-family: var(--font-display);
	font-weight: var(--fw-bold);
	font-size: var(--text-base);
	margin-bottom: 2px;
}
.pattern-label span {
	color: var(--text-muted);
}

/* ════════════════════════════════════════════════════════════════
   TOP PROMO BANNER
════════════════════════════════════════════════════════════════ */
.top-banner {
	background: var(--color-accent);
	color: #fff;
	padding: var(--space-2) var(--space-5);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: var(--space-3);
	font-size: var(--text-xs);
	font-weight: var(--fw-semibold);
	letter-spacing: var(--tracking-wide);
	overflow: hidden;
	position: relative;
}
.top-banner__text {
	white-space: nowrap;
	animation: marquee 22s linear infinite;
	display: inline-block;
}
.top-banner__close {
	position: absolute;
	right: var(--space-3);
	background: none;
	border: none;
	color: #fff;
	cursor: pointer;
	opacity: 0.8;
	padding: var(--space-1);
	flex-shrink: 0;
}

/* ════════════════════════════════════════════════════════════════
   NOTIFICATION TICKER
════════════════════════════════════════════════════════════════ */
.ticker-wrap {
	background: var(--color-surface-sunken, #EAF0F2);
	border-bottom: 1px solid var(--border);
	padding: var(--space-2) var(--space-5);
	display: flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--text-xs);
	color: var(--text-muted);
	opacity: 0;
	transition: opacity 0.3s;
}
.ticker-wrap.visible {
	opacity: 1;
	animation: ticker-fade 0.4s var(--ease-out) both;
}

/* ════════════════════════════════════════════════════════════════
   FLOATING BADGE
════════════════════════════════════════════════════════════════ */
.floating-badge {
	position: fixed;
	bottom: var(--space-6);
	left: var(--space-5);
	background: var(--color-primary);
	color: #fff;
	border-radius: var(--radius-lg);
	padding: var(--space-3) var(--space-4);
	display: flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--text-xs);
	font-weight: var(--fw-bold);
	box-shadow: var(--shadow-lg);
	z-index: 40;
	animation: float 3s ease-in-out infinite;
}
.floating-badge button {
	background: none;
	border: none;
	color: rgba(255,255,255,0.7);
	cursor: pointer;
	margin-left: var(--space-1);
	padding: 0;
}

/* ════════════════════════════════════════════════════════════════
   POPUP
════════════════════════════════════════════════════════════════ */
.popup-overlay {
	position: fixed;
	inset: 0;
	background: rgba(26,46,60,0.55);
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	animation: fade-in-up 0.3s var(--ease-out) both;
}
.popup {
	background: var(--color-surface);
	border-radius: var(--radius-xl);
	padding: var(--space-8) var(--space-7);
	max-width: 420px;
	width: 90%;
	position: relative;
	box-shadow: var(--shadow-xl);
	text-align: center;
	animation: fade-in-up 0.35s var(--ease-out) both;
}
.popup__close {
	position: absolute;
	top: var(--space-3);
	right: var(--space-3);
	background: none;
	border: none;
	cursor: pointer;
	color: var(--text-muted);
	padding: var(--space-1);
}
.popup__badge {
	display: inline-block;
	background: var(--color-accent);
	color: #fff;
	font-size: var(--text-xs);
	font-weight: var(--fw-bold);
	letter-spacing: var(--tracking-wider);
	padding: var(--space-1) var(--space-3);
	border-radius: var(--radius-pill);
	margin-bottom: var(--space-3);
	animation: badge-pop 0.5s var(--ease-out) 0.2s both;
}
.popup__title {
	font-family: var(--font-display);
	font-size: var(--text-2xl);
	font-weight: var(--fw-heavy);
	color: var(--text-strong);
	margin-bottom: var(--space-3);
}
.popup__body {
	color: var(--text-body);
	font-size: var(--text-base);
	margin-bottom: var(--space-4);
	line-height: var(--leading-normal);
}
.popup__input {
	width: 100%;
	padding: var(--space-3) var(--space-4);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-pill);
	font-size: var(--text-base);
	margin-bottom: var(--space-3);
	outline: none;
	box-sizing: border-box;
}
.popup__cta { width: 100%; }
.popup__decline {
	margin-top: var(--space-3);
	font-size: var(--text-xs);
	color: var(--text-subtle);
	cursor: pointer;
	text-decoration: underline;
}

/* ════════════════════════════════════════════════════════════════
   SHOP HEADER
════════════════════════════════════════════════════════════════ */
.shop-header {
	background: var(--color-surface-inverse);
	color: #fff;
	display: flex;
	align-items: center;
	gap: var(--space-5);
	padding: var(--space-4) var(--space-6);
}
.shop-header__logo {
	display: flex;
	align-items: center;
	gap: var(--space-2);
	font-family: var(--font-display);
	font-size: var(--text-xl);
	font-weight: var(--fw-heavy);
	letter-spacing: var(--tracking-tight);
	color: #fff;
	animation: wiggle 4s ease-in-out infinite;
	animation-delay: 2s;
	white-space: nowrap;
}
.shop-header__nav {
	display: flex;
	gap: var(--space-4);
	flex: 1;
	overflow-x: auto;
}
.shop-header__nav a {
	color: rgba(255,255,255,0.75);
	text-decoration: none;
	font-size: var(--text-sm);
	font-weight: var(--fw-medium);
	white-space: nowrap;
	transition: color var(--duration-fast);
}
.shop-header__nav a:hover { color: #fff; }
.shop-header__actions {
	display: flex;
	gap: var(--space-3);
}
.icon-btn {
	background: none;
	border: none;
	color: #fff;
	cursor: pointer;
	padding: var(--space-2);
	opacity: 0.8;
	transition: opacity var(--duration-fast);
}
.icon-btn:hover { opacity: 1; }
.cart-btn { position: relative; }
.cart-badge {
	position: absolute;
	top: 0; right: 0;
	background: var(--color-accent);
	color: #fff;
	font-size: 10px;
	font-weight: var(--fw-bold);
	width: 16px; height: 16px;
	border-radius: 50%;
	display: flex; align-items: center; justify-content: center;
	animation: glow 2s ease-in-out infinite;
}

/* ════════════════════════════════════════════════════════════════
   STEPPER
════════════════════════════════════════════════════════════════ */
.stepper {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0;
	padding: var(--space-5) var(--space-6);
	background: var(--color-surface);
	border-bottom: 1px solid var(--border);
}
.stepper__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-1);
	font-size: var(--text-xs);
	font-weight: var(--fw-semibold);
	color: var(--text-muted);
	transition: color var(--duration-base);
}
.stepper__item.active { color: var(--color-primary); }
.stepper__item.done  { color: var(--color-success); }
.stepper__circle {
	width: 32px; height: 32px;
	border-radius: 50%;
	border: 2px solid var(--border);
	display: flex; align-items: center; justify-content: center;
	font-size: var(--text-sm);
	font-weight: var(--fw-bold);
	background: var(--color-surface);
	transition: all var(--duration-base);
}
.stepper__item.active .stepper__circle {
	border-color: var(--color-primary);
	background: var(--color-primary);
	color: #fff;
}
.stepper__item.done .stepper__circle {
	border-color: var(--color-success);
	background: var(--color-success);
	color: #fff;
}
.stepper__line {
	flex: 1;
	height: 2px;
	background: var(--border);
	min-width: 40px;
	max-width: 80px;
	transition: background var(--duration-base);
}
.stepper__line.done { background: var(--color-success); }

/* ════════════════════════════════════════════════════════════════
   MAIN
════════════════════════════════════════════════════════════════ */
.main {
	max-width: var(--container-xl);
	margin: 0 auto;
	padding: var(--space-7) var(--space-6);
}

/* ════════════════════════════════════════════════════════════════
   STEP 1 LAYOUT
════════════════════════════════════════════════════════════════ */
.step-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--space-8);
	animation: fade-in-up 0.3s var(--ease-out) both;
}
.step-content--full {
	grid-template-columns: 1fr;
}

/* ═══ Product media (left column) ═══ */
.product-media {
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
}
.product-image-wrap {
	position: relative;
}
.product-image {
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	aspect-ratio: 1;
	max-height: 420px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: var(--space-3);
	box-shadow: var(--shadow-md);
}
.product-image__label {
	font-family: var(--font-display);
	font-size: var(--text-lg);
	font-weight: var(--fw-bold);
	color: var(--color-primary);
	letter-spacing: var(--tracking-tight);
	text-align: center;
	padding: 0 var(--space-4);
}
.img-badge {
	position: absolute;
	font-size: var(--text-xs);
	font-weight: var(--fw-heavy);
	letter-spacing: var(--tracking-wide);
	padding: var(--space-1) var(--space-3);
	border-radius: var(--radius-pill);
	animation: badge-pop 0.5s var(--ease-out) both;
}
.img-badge--sale {
	top: var(--space-3); left: var(--space-3);
	background: var(--color-accent); color: #fff;
	animation-delay: 0.1s;
}
.img-badge--new {
	top: var(--space-3); right: var(--space-3);
	background: var(--color-primary); color: #fff;
	animation-delay: 0.2s;
}
.img-badge--hot {
	bottom: var(--space-3); left: var(--space-3);
	background: var(--color-highlight); color: var(--text-strong);
	animation-delay: 0.3s;
}

/* Trust row */
.trust-row {
	display: flex;
	gap: var(--space-2);
	flex-wrap: wrap;
}
.trust-item {
	display: flex;
	align-items: center;
	gap: var(--space-1);
	font-size: var(--text-xs);
	color: var(--text-muted);
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-pill);
	padding: var(--space-1) var(--space-3);
}

/* Rating */
.rating-box {
	display: flex;
	align-items: center;
	gap: var(--space-3);
}
.rating-box__score {
	font-family: var(--font-display);
	font-size: var(--text-3xl);
	font-weight: var(--fw-heavy);
	color: var(--text-strong);
}
.rating-box__stars { display: flex; gap: 2px; }
.rating-box__count { font-size: var(--text-sm); color: var(--text-muted); }

.rating-bars { display: flex; flex-direction: column; gap: var(--space-1); }
.rating-bar-row {
	display: flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--text-xs);
	color: var(--text-muted);
}
.rating-bar-track {
	flex: 1;
	height: 6px;
	background: var(--color-surface-sunken);
	border-radius: var(--radius-pill);
	overflow: hidden;
}
.rating-bar-fill {
	height: 100%;
	background: var(--color-highlight);
	border-radius: var(--radius-pill);
	animation: bar-grow 0.8s var(--ease-out) both;
}

/* ═══ Product config (right column) ═══ */
.product-config {
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
}
.breadcrumb {
	display: flex;
	align-items: center;
	gap: var(--space-1);
	font-size: var(--text-xs);
	color: var(--text-muted);
	flex-wrap: wrap;
}
.breadcrumb__current { color: var(--text-body); font-weight: var(--fw-medium); }

.badge-row {
	display: flex;
	gap: var(--space-2);
	flex-wrap: wrap;
}
.badge {
	font-size: var(--text-2xs);
	font-weight: var(--fw-bold);
	letter-spacing: var(--tracking-wider);
	padding: 2px var(--space-2);
	border-radius: var(--radius-pill);
	animation: badge-pop 0.4s var(--ease-out) both;
}
.badge--red    { background: var(--color-accent-soft); color: var(--color-accent); animation-delay: 0.1s; }
.badge--amber  { background: var(--color-highlight-soft); color: #96620a; animation-delay: 0.15s; }
.badge--sky    { background: var(--sky-100); color: var(--petrol-600); animation-delay: 0.2s; }
.badge--green  { background: var(--color-success-soft, #DCF1E8); color: var(--color-success); animation-delay: 0.25s; }
.badge--purple { background: #f0e8ff; color: #6b21a8; animation-delay: 0.3s; }

.product-title {
	font-family: var(--font-display);
	font-size: var(--text-2xl);
	font-weight: var(--fw-heavy);
	color: var(--text-strong);
	line-height: var(--leading-snug);
	letter-spacing: var(--tracking-tight);
}
.product-subtitle {
	font-family: var(--font-script);
	font-size: var(--text-lg);
	font-weight: var(--fw-regular);
	color: var(--color-primary);
	letter-spacing: 0;
}

.social-proof {
	display: flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--text-sm);
	color: var(--text-muted);
	background: var(--sky-100);
	border: 1px solid var(--sky-200);
	border-radius: var(--radius-md);
	padding: var(--space-2) var(--space-3);
}
.dot { color: var(--border-strong); }

.stock-warning {
	display: flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--text-sm);
	background: var(--color-error-soft);
	border: 1px solid var(--red-200);
	border-radius: var(--radius-md);
	padding: var(--space-2) var(--space-3);
	color: var(--color-accent);
}
.countdown {
	animation: countdown-pulse 1.5s ease-in-out infinite;
}

.price-block {
	display: flex;
	align-items: baseline;
	gap: var(--space-3);
	flex-wrap: wrap;
}
.price-block__original {
	font-size: var(--text-lg);
	color: var(--text-subtle);
	text-decoration: line-through;
}
.price-block__current {
	font-family: var(--font-display);
	font-size: var(--text-3xl);
	font-weight: var(--fw-heavy);
	color: var(--color-accent);
}
.price-block__saving {
	font-size: var(--text-sm);
	color: var(--color-success);
	font-weight: var(--fw-semibold);
	background: var(--color-success-soft);
	padding: 2px var(--space-2);
	border-radius: var(--radius-pill);
}

.option-group { display: flex; flex-direction: column; gap: var(--space-2); }
.option-label {
	font-size: var(--text-sm);
	font-weight: var(--fw-semibold);
	color: var(--text-body);
}
.size-guide {
	font-size: var(--text-xs);
	color: var(--color-primary);
	font-weight: var(--fw-regular);
	margin-left: var(--space-2);
}

.color-swatches { display: flex; gap: var(--space-2); }
.swatch {
	width: 28px; height: 28px;
	border-radius: 50%;
	border: 2px solid transparent;
	cursor: pointer;
	transition: transform var(--duration-fast), border-color var(--duration-fast);
}
.swatch:hover { transform: scale(1.15); }
.swatch.selected { border-color: var(--text-strong); transform: scale(1.2); }

.size-grid { display: flex; gap: var(--space-2); flex-wrap: wrap; }
.size-btn {
	padding: var(--space-1) var(--space-3);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-sm);
	background: var(--color-surface);
	font-size: var(--text-sm);
	font-weight: var(--fw-medium);
	cursor: pointer;
	transition: all var(--duration-fast);
}
.size-btn:hover { border-color: var(--color-primary); color: var(--color-primary); }
.size-btn.selected { border-color: var(--color-primary); background: var(--color-primary); color: #fff; }

.qty-control {
	display: flex;
	align-items: center;
	gap: 0;
	width: fit-content;
	border: 1.5px solid var(--border);
	border-radius: var(--radius-md);
	overflow: hidden;
}
.qty-control button {
	background: var(--color-surface-sunken);
	border: none;
	padding: var(--space-2) var(--space-3);
	font-size: var(--text-lg);
	cursor: pointer;
	font-weight: var(--fw-bold);
	color: var(--color-primary);
	transition: background var(--duration-fast);
}
.qty-control button:hover { background: var(--petrol-100); }
.qty-control span {
	padding: var(--space-2) var(--space-4);
	font-weight: var(--fw-bold);
	min-width: 40px;
	text-align: center;
}

.product-desc {
	font-size: var(--text-sm);
	color: var(--text-muted);
	line-height: var(--leading-relaxed);
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
}

.feature-pills {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-2);
}
.feature-pill {
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: var(--text-xs);
	font-weight: var(--fw-medium);
	background: var(--petrol-100);
	color: var(--color-primary);
	border-radius: var(--radius-pill);
	padding: 3px var(--space-2);
}

/* ─── Buttons ─── */
.btn-primary {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: var(--space-2);
	background: var(--color-primary);
	color: #fff;
	border: none;
	border-radius: var(--radius-pill);
	padding: var(--space-4) var(--space-6);
	font-family: var(--font-display);
	font-size: var(--text-base);
	font-weight: var(--fw-bold);
	letter-spacing: var(--tracking-wide);
	cursor: pointer;
	transition: background var(--duration-fast), transform var(--duration-fast), box-shadow var(--duration-fast);
	box-shadow: var(--shadow-md);
}
.btn-primary:hover {
	background: var(--color-primary-hover);
	transform: translateY(-1px);
	box-shadow: var(--shadow-lg);
}
.btn-primary:active { transform: scale(0.97); }
.btn-primary--full { width: 100%; }
.btn-primary.pulse { animation: pulse-scale 0.6s var(--ease-out); }

.cta-main {
	width: 100%;
	padding: var(--space-4) var(--space-5);
	font-size: var(--text-md);
}

.btn-ghost {
	display: inline-flex;
	align-items: center;
	gap: var(--space-2);
	background: none;
	border: 1.5px solid var(--border);
	border-radius: var(--radius-pill);
	padding: var(--space-2) var(--space-4);
	font-size: var(--text-sm);
	font-weight: var(--fw-medium);
	color: var(--text-body);
	cursor: pointer;
	transition: all var(--duration-fast);
}
.btn-ghost:hover { border-color: var(--color-primary); color: var(--color-primary); background: var(--petrol-100); }

.btn-ghost-sm {
	display: inline-flex;
	align-items: center;
	gap: var(--space-1);
	background: none;
	border: 1px solid var(--border);
	border-radius: var(--radius-pill);
	padding: var(--space-1) var(--space-3);
	font-size: var(--text-xs);
	font-weight: var(--fw-medium);
	color: var(--text-muted);
	cursor: pointer;
	transition: all var(--duration-fast);
}
.btn-ghost-sm:hover { border-color: var(--color-primary); color: var(--color-primary); }

.secondary-actions {
	display: flex;
	gap: var(--space-3);
	flex-wrap: wrap;
}
.micro-trust {
	display: flex;
	gap: var(--space-4);
	flex-wrap: wrap;
	font-size: var(--text-xs);
	color: var(--text-muted);
}
.micro-trust span {
	display: flex;
	align-items: center;
	gap: 4px;
}

/* ════════════════════════════════════════════════════════════════
   REVIEWS
════════════════════════════════════════════════════════════════ */
.reviews-section, .faq-section, .related-section {
	margin-top: var(--space-10);
}
.section-title {
	font-family: var(--font-display);
	font-size: var(--text-xl);
	font-weight: var(--fw-heavy);
	letter-spacing: var(--tracking-tight);
	color: var(--text-strong);
	margin-bottom: var(--space-5);
}
.section-count {
	font-weight: var(--fw-regular);
	font-size: var(--text-lg);
	color: var(--text-muted);
}

.reviews-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: var(--space-4);
}
.review-card {
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	padding: var(--space-5);
	box-shadow: var(--shadow-xs);
	transition: box-shadow var(--duration-base), transform var(--duration-base);
}
.review-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.review-card__header {
	display: flex;
	align-items: flex-start;
	gap: var(--space-3);
	margin-bottom: var(--space-3);
}
.review-card__avatar {
	width: 36px; height: 36px;
	background: var(--gradient-signet);
	color: #fff;
	border-radius: 50%;
	display: flex; align-items: center; justify-content: center;
	font-weight: var(--fw-bold);
	font-size: var(--text-sm);
	flex-shrink: 0;
}
.review-card__stars { display: flex; gap: 2px; margin-top: 2px; }
.review-card__date { font-size: var(--text-xs); color: var(--text-subtle); margin-left: auto; }
.review-card__text { font-size: var(--text-sm); color: var(--text-body); line-height: var(--leading-relaxed); }
.review-card__helpful {
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: var(--text-xs);
	color: var(--text-muted);
	margin-top: var(--space-3);
	cursor: pointer;
}

/* ════════════════════════════════════════════════════════════════
   FAQ
════════════════════════════════════════════════════════════════ */
.faq-list { display: flex; flex-direction: column; gap: var(--space-2); }
.faq-item {
	border: 1px solid var(--border);
	border-radius: var(--radius-md);
	overflow: hidden;
}
.faq-question {
	display: flex;
	align-items: center;
	gap: var(--space-3);
	width: 100%;
	padding: var(--space-4) var(--space-5);
	background: var(--color-surface);
	border: none;
	cursor: pointer;
	font-size: var(--text-base);
	font-weight: var(--fw-semibold);
	color: var(--text-strong);
	text-align: left;
	transition: background var(--duration-fast);
}
.faq-question:hover { background: var(--color-surface-sunken); }
.faq-question :global(:last-child) { margin-left: auto; flex-shrink: 0; }
.faq-answer {
	padding: var(--space-4) var(--space-5);
	font-size: var(--text-sm);
	color: var(--text-muted);
	line-height: var(--leading-relaxed);
	border-top: 1px solid var(--border);
	background: var(--color-surface-sunken);
	animation: fade-in-up 0.2s var(--ease-out) both;
}

/* ════════════════════════════════════════════════════════════════
   RELATED PRODUCTS
════════════════════════════════════════════════════════════════ */
.related-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	gap: var(--space-4);
}
.related-card {
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	padding: var(--space-4);
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--space-2);
	transition: all var(--duration-base);
}
.related-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.related-card__image {
	width: 80px; height: 80px;
	background: var(--color-surface-sunken);
	border-radius: var(--radius-md);
	display: flex; align-items: center; justify-content: center;
}
.related-card__name { font-size: var(--text-sm); font-weight: var(--fw-semibold); color: var(--text-strong); }
.related-card__stars { display: flex; align-items: center; gap: 2px; font-size: var(--text-xs); color: var(--text-muted); }
.related-card__price { font-weight: var(--fw-bold); color: var(--color-primary); font-size: var(--text-sm); }

/* ════════════════════════════════════════════════════════════════
   STEP HEADING
════════════════════════════════════════════════════════════════ */
.step-heading {
	font-family: var(--font-display);
	font-size: var(--text-2xl);
	font-weight: var(--fw-heavy);
	color: var(--text-strong);
	letter-spacing: var(--tracking-tight);
	margin-bottom: var(--space-2);
}
.step-subheading {
	font-size: var(--text-base);
	color: var(--text-muted);
	margin-bottom: var(--space-6);
	max-width: 640px;
}

/* ════════════════════════════════════════════════════════════════
   ADD-ONS (Step 2)
════════════════════════════════════════════════════════════════ */
.addons-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
	gap: var(--space-4);
	margin-bottom: var(--space-6);
}
.addon-card {
	display: flex;
	gap: var(--space-3);
	background: var(--color-surface);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-card);
	padding: var(--space-4);
	transition: all var(--duration-base);
	box-shadow: var(--shadow-xs);
}
.addon-card--checked {
	border-color: var(--color-primary);
	background: var(--petrol-100);
	box-shadow: var(--shadow-sm);
}
.addon-card__check input { margin-top: 3px; accent-color: var(--color-primary); cursor: pointer; }
.addon-card__body {
	display: flex;
	align-items: flex-start;
	gap: var(--space-3);
	flex: 1;
	cursor: pointer;
}
.addon-card__icon {
	color: var(--color-primary);
	flex-shrink: 0;
	margin-top: 2px;
}
.addon-card__info strong { font-size: var(--text-base); color: var(--text-strong); display: block; margin-bottom: 2px; }
.addon-card__info p { font-size: var(--text-xs); color: var(--text-muted); line-height: var(--leading-relaxed); margin: 0; }
.addon-card__price {
	font-weight: var(--fw-bold);
	color: var(--color-accent);
	white-space: nowrap;
	font-size: var(--text-sm);
	margin-left: auto;
	flex-shrink: 0;
}

.running-total {
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	padding: var(--space-5);
	max-width: 420px;
	margin-bottom: var(--space-6);
}
.running-total__row {
	display: flex;
	justify-content: space-between;
	font-size: var(--text-sm);
	padding: var(--space-2) 0;
	border-bottom: 1px solid var(--border);
	color: var(--text-muted);
}
.running-total__row:last-child { border-bottom: none; }
.running-total__row--vat { color: var(--text-subtle); font-size: var(--text-xs); }
.running-total__row--total {
	font-family: var(--font-display);
	font-size: var(--text-lg);
	font-weight: var(--fw-heavy);
	color: var(--text-strong);
	padding-top: var(--space-3);
}

/* ════════════════════════════════════════════════════════════════
   FORM GRID (Step 3)
════════════════════════════════════════════════════════════════ */
.form-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--space-4);
	margin-bottom: var(--space-6);
}
.form-group { display: flex; flex-direction: column; gap: var(--space-1); }
.form-group--full { grid-column: 1 / -1; }
.form-group label {
	font-size: var(--text-sm);
	font-weight: var(--fw-semibold);
	color: var(--text-body);
	display: flex;
	align-items: center;
	gap: var(--space-2);
}
.form-group input,
.form-group select {
	padding: var(--space-3) var(--space-4);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-md);
	font-size: var(--text-base);
	font-family: var(--font-body);
	background: var(--color-surface);
	color: var(--text-strong);
	outline: none;
	transition: border-color var(--duration-fast), box-shadow var(--duration-fast);
}
.form-group input:focus,
.form-group select:focus {
	border-color: var(--color-primary);
	box-shadow: var(--shadow-focus);
}

/* ─── Consent section ─── */
.consent-section {
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	padding: var(--space-6);
	margin-bottom: var(--space-6);
}
.consent-title {
	font-family: var(--font-display);
	font-size: var(--text-lg);
	font-weight: var(--fw-bold);
	color: var(--text-strong);
	margin-bottom: var(--space-3);
}
.consent-intro {
	font-size: var(--text-sm);
	color: var(--text-muted);
	margin-bottom: var(--space-5);
	line-height: var(--leading-relaxed);
}
.consent-item {
	display: flex;
	gap: var(--space-3);
	padding: var(--space-3) 0;
	border-bottom: 1px solid var(--border);
	font-size: var(--text-sm);
}
.consent-item:last-of-type { border-bottom: none; }
.consent-item input { accent-color: var(--color-primary); flex-shrink: 0; margin-top: 3px; cursor: pointer; }
.consent-item label { cursor: pointer; line-height: var(--leading-relaxed); }
.consent-item label strong { display: block; color: var(--text-strong); margin-bottom: 2px; }
.consent-item label span { color: var(--text-muted); font-size: var(--text-xs); }
.consent-legal {
	margin-top: var(--space-4);
	font-size: var(--text-xs);
	color: var(--text-subtle);
	line-height: var(--leading-relaxed);
}
.consent-legal a { color: var(--color-primary); }

/* ════════════════════════════════════════════════════════════════
   PAYMENT (Step 4)
════════════════════════════════════════════════════════════════ */
.payment-layout {
	display: grid;
	grid-template-columns: 1fr 380px;
	gap: var(--space-8);
	animation: fade-in-up 0.3s var(--ease-out) both;
}
.payment-methods {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-2);
}
.payment-method {
	padding: var(--space-2) var(--space-4);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-pill);
	background: var(--color-surface);
	font-size: var(--text-sm);
	font-weight: var(--fw-medium);
	cursor: pointer;
	transition: all var(--duration-fast);
	color: var(--text-body);
}
.payment-method:hover { border-color: var(--color-primary); }
.payment-method--selected {
	border-color: var(--color-primary);
	background: var(--petrol-100);
	color: var(--color-primary);
	font-weight: var(--fw-bold);
}
.cvc-hint {
	display: inline-flex;
	align-items: center;
	gap: 3px;
	font-size: var(--text-xs);
	color: var(--color-primary);
	font-weight: var(--fw-regular);
	cursor: pointer;
}
.security-badges {
	display: flex;
	gap: var(--space-3);
	flex-wrap: wrap;
	margin-top: var(--space-4);
}
.security-badge {
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: var(--text-xs);
	font-weight: var(--fw-semibold);
	color: var(--text-muted);
	background: var(--color-surface-sunken);
	border: 1px solid var(--border);
	border-radius: var(--radius-pill);
	padding: var(--space-1) var(--space-3);
}

/* Order summary */
.order-summary {
	background: var(--color-surface);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-card);
	padding: var(--space-5);
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
	box-shadow: var(--shadow-sm);
	height: fit-content;
	position: sticky;
	top: var(--space-4);
}
.order-summary__title {
	font-family: var(--font-display);
	font-size: var(--text-sm);
	font-weight: var(--fw-heavy);
	letter-spacing: var(--tracking-wider);
	color: var(--text-muted);
}
.order-summary__product {
	display: flex;
	align-items: center;
	gap: var(--space-3);
	font-size: var(--text-sm);
}
.order-summary__product-image {
	width: 56px; height: 56px;
	background: var(--color-surface-sunken);
	border-radius: var(--radius-md);
	display: flex; align-items: center; justify-content: center;
	flex-shrink: 0;
}
.order-summary__product strong { color: var(--text-strong); }
.order-summary__product p { color: var(--text-muted); font-size: var(--text-xs); margin: 2px 0 0; }
.order-summary__product > span { margin-left: auto; font-weight: var(--fw-bold); }
.order-summary__lines { display: flex; flex-direction: column; gap: var(--space-1); }
.order-summary__line {
	display: flex;
	justify-content: space-between;
	font-size: var(--text-xs);
	color: var(--text-muted);
}
.order-summary__line span:first-child {
	display: flex;
	align-items: center;
	gap: 4px;
	color: var(--color-success);
}
.order-summary__totals {
	border-top: 1px solid var(--border);
	padding-top: var(--space-3);
	display: flex;
	flex-direction: column;
	gap: var(--space-1);
	font-size: var(--text-sm);
	color: var(--text-muted);
}
.order-summary__totals > div {
	display: flex;
	justify-content: space-between;
}
.order-summary__grand {
	font-family: var(--font-display);
	font-size: var(--text-xl);
	font-weight: var(--fw-heavy);
	color: var(--text-strong) !important;
	padding-top: var(--space-2);
	border-top: 2px solid var(--text-strong);
	margin-top: var(--space-1);
}
.promo-row {
	display: flex;
	gap: var(--space-2);
}
.promo-row input {
	flex: 1;
	padding: var(--space-2) var(--space-3);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-pill);
	font-size: var(--text-sm);
	font-family: var(--font-body);
	outline: none;
}
.order-summary__legal {
	font-size: var(--text-2xs);
	color: var(--text-subtle);
	line-height: var(--leading-relaxed);
}

/* ════════════════════════════════════════════════════════════════
   STEP NAV
════════════════════════════════════════════════════════════════ */
.step-nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: var(--space-5);
	border-top: 1px solid var(--border);
	margin-top: var(--space-2);
}

/* ════════════════════════════════════════════════════════════════
   DARK-PATTERN SUMMARY
════════════════════════════════════════════════════════════════ */
.pattern-summary {
	margin-top: var(--space-10);
	padding: 0 var(--space-5);
}
.pattern-summary__inner {
	max-width: var(--container-md);
	margin: 0 auto;
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	box-shadow: var(--shadow-sm);
	padding: var(--space-6);
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
}
.pattern-summary__inner h2 {
	margin: 0;
	font-family: var(--font-display);
	font-size: var(--text-xl);
	letter-spacing: var(--tracking-wide);
	text-transform: uppercase;
	color: var(--text-strong);
}
.pattern-summary__inner p {
	margin: 0;
	font-size: var(--text-base);
	line-height: var(--leading-relaxed);
	color: var(--text-body);
}
.pattern-summary__home {
	align-self: flex-start;
	text-decoration: none;
}

/* ════════════════════════════════════════════════════════════════
   SHOP FOOTER
════════════════════════════════════════════════════════════════ */
.shop-footer {
	margin-top: var(--space-12);
	background: var(--color-surface-inverse);
	color: rgba(255,255,255,0.6);
}
.shop-footer__inner {
	max-width: var(--container-xl);
	margin: 0 auto;
	padding: var(--space-6);
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
}
.shop-footer__copy {
	font-size: var(--text-sm);
}
.shop-footer__copy a {
	color: rgba(255,255,255,0.5);
	margin: 0 var(--space-1);
}
.shop-footer__disclaimer {
	font-size: var(--text-xs);
	color: rgba(255,255,255,0.4);
}

/* ════════════════════════════════════════════════════════════════
   NEW KEYFRAMES — CHAOS ADDITIONS
════════════════════════════════════════════════════════════════ */
@keyframes shake {
	0%, 100% { transform: translateX(0); }
	10%, 50%, 90% { transform: translateX(-5px) rotate(-0.5deg); }
	30%, 70%       { transform: translateX(5px) rotate(0.5deg); }
}
@keyframes rainbow-text {
	0%   { color: var(--color-accent); }
	25%  { color: var(--color-highlight); }
	50%  { color: var(--color-primary); }
	75%  { color: #6b21a8; }
	100% { color: var(--color-accent); }
}
@keyframes blink {
	0%, 100% { opacity: 1; }
	50%       { opacity: 0.15; }
}
@keyframes slide-in-left {
	from { transform: translateX(-120%); opacity: 0; }
	to   { transform: translateX(0); opacity: 1; }
}
@keyframes slide-in-right {
	from { transform: translateX(120%); opacity: 0; }
	to   { transform: translateX(0); opacity: 1; }
}
@keyframes slide-out-left {
	from { transform: translateX(0); opacity: 1; }
	to   { transform: translateX(-120%); opacity: 0; }
}
@keyframes slide-out-right {
	from { transform: translateX(0); opacity: 1; }
	to   { transform: translateX(120%); opacity: 0; }
}
@keyframes confetti-fall {
	0%   { transform: translateY(-20px) rotate(0deg) scale(1); opacity: 1; }
	100% { transform: translateY(110vh) rotate(720deg) scale(0.4); opacity: 0; }
}
@keyframes wheel-spin {
	0%   { transform: rotate(0deg); }
	100% { transform: rotate(1440deg); }
}
@keyframes bounce-in {
	0%   { transform: scale(0.3); opacity: 0; }
	50%  { transform: scale(1.12); }
	70%  { transform: scale(0.92); }
	100% { transform: scale(1); opacity: 1; }
}
@keyframes slide-up {
	from { transform: translateY(100%); opacity: 0; }
	to   { transform: translateY(0); opacity: 1; }
}
@keyframes typing-dot {
	0%, 80%, 100% { transform: scale(0); opacity: 0.4; }
	40%            { transform: scale(1); opacity: 1; }
}
@keyframes price-flash {
	0%, 100% { color: var(--color-accent); }
	33%       { color: var(--color-highlight); }
	66%       { color: #6b21a8; }
}

/* ── Chaos overrides for existing elements ───────────────── */
.page.shake { animation: shake 0.5s ease-in-out; }

.price-block__current { animation: price-flash 2.5s linear infinite; }

.stock-warning { animation: blink 3s ease-in-out infinite; }

/* ════════════════════════════════════════════════════════════════
   COOKIE CONSENT BAR
════════════════════════════════════════════════════════════════ */
.cookie-bar {
	position: fixed;
	bottom: 0; left: 0; right: 0;
	background: var(--color-surface-inverse);
	color: #fff;
	padding: var(--space-4) var(--space-6);
	display: flex;
	align-items: center;
	gap: var(--space-4);
	z-index: 90;
	box-shadow: 0 -4px 24px rgba(0,0,0,0.35);
	animation: slide-up 0.4s var(--ease-out) both;
	flex-wrap: wrap;
}
.cookie-bar__text {
	flex: 1;
	font-size: var(--text-sm);
	color: rgba(255,255,255,0.85);
	min-width: 200px;
}
.cookie-bar__text a { color: var(--color-sky); }
.cookie-bar__actions {
	display: flex;
	gap: var(--space-2);
	align-items: center;
	flex-shrink: 0;
}
.cookie-bar__accept {
	padding: var(--space-2) var(--space-5);
	font-size: var(--text-sm);
	animation: pulse-scale 1.8s ease-in-out infinite;
}
.cookie-bar__manage {
	background: none;
	border: 1px solid rgba(255,255,255,0.3);
	color: rgba(255,255,255,0.7);
	border-radius: var(--radius-pill);
	padding: var(--space-2) var(--space-4);
	font-size: var(--text-xs);
	cursor: pointer;
}
.cookie-bar__reject {
	background: none;
	border: none;
	color: rgba(255,255,255,0.25);
	font-size: var(--text-2xs);
	cursor: pointer;
	text-decoration: underline;
}

/* ════════════════════════════════════════════════════════════════
   LUCKY WHEEL POPUP
════════════════════════════════════════════════════════════════ */
.wheel-popup {
	background: var(--color-surface);
	border-radius: var(--radius-xl);
	padding: var(--space-7);
	max-width: 460px;
	width: 90%;
	position: relative;
	box-shadow: var(--shadow-xl);
	text-align: center;
	animation: bounce-in 0.5s var(--ease-out) both;
}
.wheel-popup__title {
	font-family: var(--font-display);
	font-size: var(--text-2xl);
	font-weight: var(--fw-heavy);
	margin: var(--space-3) 0 var(--space-2);
	animation: rainbow-text 2s linear infinite;
}
.wheel-popup__sub {
	font-size: var(--text-base);
	color: var(--text-muted);
	margin-bottom: var(--space-5);
}
.wheel-wrap {
	position: relative;
	width: 200px;
	height: 200px;
	margin: 0 auto var(--space-5);
}
.wheel {
	width: 200px; height: 200px;
	border-radius: 50%;
	background: conic-gradient(
		#E4003A 0deg 45deg,
		#F7A823 45deg 90deg,
		#005577 90deg 135deg,
		#80CCDB 135deg 180deg,
		#E4003A 180deg 225deg,
		#F7A823 225deg 270deg,
		#005577 270deg 315deg,
		#80CCDB 315deg 360deg
	);
	border: 5px solid var(--color-surface-inverse);
	box-shadow: var(--shadow-xl);
	position: relative;
}
.wheel--spinning { animation: wheel-spin 3s cubic-bezier(0.1, 0.8, 0.3, 1) forwards; }
.wheel-labels { position: absolute; inset: 0; border-radius: 50%; }
.wheel-label {
	position: absolute;
	top: 50%; left: 50%;
	transform-origin: 0 0;
	transform: rotate(calc(var(--i) * 45deg + 22.5deg)) translateY(-70px) translateX(-50%);
	font-size: 10px;
	font-weight: var(--fw-heavy);
	color: #fff;
	text-shadow: 0 1px 3px rgba(0,0,0,0.6);
	white-space: nowrap;
}
.wheel-pointer {
	position: absolute;
	top: -18px; left: 50%;
	transform: translateX(-50%);
	font-size: 22px;
	color: var(--color-accent);
	filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}
.wheel-result {
	background: var(--color-success-soft, #DCF1E8);
	border: 1px solid var(--color-success);
	border-radius: var(--radius-md);
	padding: var(--space-3) var(--space-4);
	color: var(--color-success);
	font-weight: var(--fw-semibold);
	margin-bottom: var(--space-4);
	animation: bounce-in 0.4s var(--ease-out) both;
}
.wheel-popup__btn {
	width: 100%;
	animation: pulse-scale 1.5s ease-in-out infinite;
}

/* ════════════════════════════════════════════════════════════════
   SECOND POPUP
════════════════════════════════════════════════════════════════ */
.second-popup .popup__title .countdown { animation: rainbow-text 1s linear infinite; }
.second-popup__btn {
	width: 100%;
	animation: pulse-scale 0.8s ease-in-out infinite;
}

/* ════════════════════════════════════════════════════════════════
   TOAST NOTIFICATIONS
════════════════════════════════════════════════════════════════ */
.toasts {
	position: fixed;
	bottom: 160px;
	display: flex;
	flex-direction: column;
	gap: var(--space-2);
	z-index: 50;
	pointer-events: none;
	max-width: 260px;
}
.toasts--left  { left: var(--space-4); }
.toasts--right { right: var(--space-4); }
.toast {
	padding: var(--space-3) var(--space-4);
	border-radius: var(--radius-card);
	font-size: var(--text-xs);
	font-weight: var(--fw-semibold);
	box-shadow: var(--shadow-lg);
	line-height: var(--leading-snug);
}
.toasts--left .toast {
	animation: slide-in-left 0.4s var(--ease-out) both, slide-out-left 0.3s var(--ease-in) 3.2s both;
}
.toasts--right .toast {
	animation: slide-in-right 0.4s var(--ease-out) both, slide-out-right 0.3s var(--ease-in) 3.2s both;
}
.toast--green { background: var(--color-success-soft, #DCF1E8); color: var(--color-success); border: 1px solid var(--color-success); }
.toast--red   { background: var(--color-error-soft, #FDEDF2);   color: var(--color-accent);  border: 1px solid var(--color-accent); }
.toast--amber { background: #FEF3CD; color: #96620a; border: 1px solid var(--color-highlight); }

/* ════════════════════════════════════════════════════════════════
   STICKY BUY BAR
════════════════════════════════════════════════════════════════ */
.sticky-bar {
	position: fixed;
	bottom: 68px; left: 0; right: 0;
	background: var(--color-surface);
	border-top: 2px solid var(--color-primary);
	padding: var(--space-3) var(--space-6);
	display: flex;
	align-items: center;
	gap: var(--space-4);
	z-index: 45;
	box-shadow: 0 -4px 20px rgba(0,0,0,0.12);
	animation: slide-up 0.4s var(--ease-out) 0.2s both;
}
.sticky-bar__product {
	display: flex;
	align-items: center;
	gap: var(--space-2);
	flex: 1;
	font-size: var(--text-sm);
	color: var(--text-body);
	overflow: hidden;
}
.sticky-bar__product span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sticky-bar__price {
	font-family: var(--font-display);
	font-size: var(--text-xl);
	font-weight: var(--fw-heavy);
	color: var(--color-accent);
	white-space: nowrap;
	animation: price-flash 2.5s linear infinite;
}
.sticky-bar__btn {
	padding: var(--space-3) var(--space-5);
	font-size: var(--text-sm);
	white-space: nowrap;
}
.sticky-bar--pulse .sticky-bar__btn { animation: pulse-scale 0.6s var(--ease-out); }
.sticky-bar__close {
	background: none;
	border: none;
	color: var(--text-muted);
	cursor: pointer;
	padding: var(--space-1);
}

/* ════════════════════════════════════════════════════════════════
   CHAT WIDGET
════════════════════════════════════════════════════════════════ */
.chat-widget {
	position: fixed;
	bottom: var(--space-6);
	right: var(--space-5);
	z-index: 60;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: var(--space-2);
}
.chat-bubble {
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	padding: var(--space-3) var(--space-4);
	font-size: var(--text-xs);
	font-weight: var(--fw-semibold);
	color: var(--text-body);
	box-shadow: var(--shadow-md);
	max-width: 200px;
	animation: bounce-in 0.5s var(--ease-out) both, float 3s ease-in-out 0.5s infinite;
}
.chat-online {
	color: var(--color-success);
	font-size: var(--text-2xs);
	animation: blink 2s ease-in-out infinite;
}
.chat-btn {
	width: 52px; height: 52px;
	border-radius: 50%;
	background: var(--color-primary);
	color: #fff;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 22px;
	box-shadow: var(--shadow-lg);
	position: relative;
	animation: float 3s ease-in-out infinite, glow 2s ease-in-out infinite;
}
.chat-badge {
	position: absolute;
	top: -2px; right: -2px;
	background: var(--color-accent);
	color: #fff;
	font-size: 10px;
	font-weight: var(--fw-bold);
	width: 18px; height: 18px;
	border-radius: 50%;
	display: flex; align-items: center; justify-content: center;
	animation: glow 1.5s ease-in-out infinite;
}
.chat-window {
	position: absolute;
	bottom: 64px; right: 0;
	width: 300px;
	background: var(--color-surface);
	border: 1px solid var(--border);
	border-radius: var(--radius-card);
	box-shadow: var(--shadow-xl);
	overflow: hidden;
	animation: bounce-in 0.35s var(--ease-out) both;
}
.chat-window__header {
	background: var(--color-primary);
	color: #fff;
	padding: var(--space-3) var(--space-4);
	display: flex;
	align-items: center;
	gap: var(--space-2);
}
.chat-window__avatar {
	width: 32px; height: 32px;
	background: var(--color-highlight);
	border-radius: 50%;
	display: flex; align-items: center; justify-content: center;
	font-weight: var(--fw-bold);
	color: var(--color-surface-inverse);
	flex-shrink: 0;
}
.chat-window__header strong { font-size: var(--text-sm); display: block; }
.chat-window__body {
	padding: var(--space-4);
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
	min-height: 120px;
}
.chat-msg {
	background: var(--petrol-100);
	border-radius: var(--radius-md);
	padding: var(--space-2) var(--space-3);
	font-size: var(--text-sm);
	color: var(--text-body);
	max-width: 85%;
	animation: fade-in-up 0.3s var(--ease-out) both;
}
.chat-msg:nth-child(2) { animation-delay: 0.9s; opacity: 0; animation-fill-mode: both; }
.chat-msg:nth-child(3) { animation-delay: 1.8s; opacity: 0; animation-fill-mode: both; }
.chat-typing {
	display: flex;
	gap: 4px;
	padding: var(--space-3) var(--space-4);
	background: var(--petrol-100);
	border-radius: var(--radius-md);
	max-width: 64px;
}
.chat-typing span {
	width: 6px; height: 6px;
	border-radius: 50%;
	background: var(--color-primary);
	animation: typing-dot 1.2s ease-in-out infinite;
}
.chat-typing span:nth-child(2) { animation-delay: 0.2s; }
.chat-typing span:nth-child(3) { animation-delay: 0.4s; }
.chat-window__input {
	padding: var(--space-3);
	border-top: 1px solid var(--border);
	display: flex;
	gap: var(--space-2);
}
.chat-window__input input {
	flex: 1;
	padding: var(--space-2) var(--space-3);
	border: 1.5px solid var(--border);
	border-radius: var(--radius-pill);
	font-size: var(--text-sm);
	font-family: var(--font-body);
	outline: none;
}

/* ════════════════════════════════════════════════════════════════
   CONFETTI
════════════════════════════════════════════════════════════════ */
.confetti {
	position: fixed;
	top: 0; left: 0; right: 0; bottom: 0;
	pointer-events: none;
	z-index: 200;
	overflow: hidden;
}
.confetti-piece {
	position: absolute;
	top: -20px;
	left: var(--left);
	width: 8px;
	height: 14px;
	background: hsl(var(--hue), 80%, 55%);
	border-radius: 2px;
	animation: confetti-fall calc(1.8s + var(--i) * 0.03s) var(--delay) ease-in forwards;
}

/* ════════════════════════════════════════════════════════════════
   EXTRA SHAKE VARIANT
════════════════════════════════════════════════════════════════ */
.page.shake2 { animation: shake 0.4s ease-in-out; }

/* ════════════════════════════════════════════════════════════════
   BOUNCING URGENT BADGE
════════════════════════════════════════════════════════════════ */
.bounce-badge {
	position: fixed;
	z-index: 55;
	background: var(--color-accent);
	color: #fff;
	font-size: var(--text-xs);
	font-weight: var(--fw-heavy);
	letter-spacing: var(--tracking-wide);
	padding: var(--space-2) var(--space-3);
	border-radius: var(--radius-pill);
	box-shadow: var(--shadow-lg);
	pointer-events: none;
	white-space: nowrap;
	animation: pulse-scale 0.8s ease-in-out infinite;
	transform: translate(-50%, -50%);
}

/* ════════════════════════════════════════════════════════════════
   FLOATING SPARKLE PARTICLES
════════════════════════════════════════════════════════════════ */
.sparkle-layer {
	position: fixed;
	inset: 0;
	pointer-events: none;
	z-index: 30;
	overflow: hidden;
}
.sparkle-dot {
	position: absolute;
	font-size: 18px;
	animation: sparkle-pop 2s ease-out forwards;
	transform: translate(-50%, -50%);
}
@keyframes sparkle-pop {
	0%   { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 1; }
	40%  { transform: translate(-50%, -50%) scale(1.4) rotate(180deg); opacity: 1; }
	100% { transform: translate(-50%, calc(-50% - 60px)) scale(0.2) rotate(360deg); opacity: 0; }
}

/* ════════════════════════════════════════════════════════════════
   SURVEY POPUP
════════════════════════════════════════════════════════════════ */
.survey-popup { animation: bounce-in 0.5s var(--ease-out) both; }
.survey-stars {
	display: flex;
	justify-content: center;
	gap: var(--space-2);
	margin: var(--space-4) 0;
}
.survey-star {
	font-size: 28px;
	background: none;
	border: none;
	cursor: pointer;
	transition: transform var(--duration-fast);
	animation: wiggle 1.5s ease-in-out infinite;
}
.survey-star:nth-child(1) { animation-delay: 0s; }
.survey-star:nth-child(2) { animation-delay: 0.1s; }
.survey-star:nth-child(3) { animation-delay: 0.2s; }
.survey-star:nth-child(4) { animation-delay: 0.3s; }
.survey-star:nth-child(5) { animation-delay: 0.4s; }
.survey-star:hover { transform: scale(1.4); }
.survey-popup__btn {
	width: 100%;
	animation: pulse-scale 1.2s ease-in-out infinite;
}

/* ════════════════════════════════════════════════════════════════
   APP DOWNLOAD POPUP
════════════════════════════════════════════════════════════════ */
.app-popup { animation: bounce-in 0.45s var(--ease-out) both; }
.app-popup__icon {
	font-size: 52px;
	margin-bottom: var(--space-2);
	animation: float 2s ease-in-out infinite;
	display: block;
}
.app-popup__btns {
	display: flex;
	gap: var(--space-3);
	margin-bottom: var(--space-3);
}
.app-popup__store {
	flex: 1;
	font-size: var(--text-sm);
	padding: var(--space-3) var(--space-4);
}
.app-popup__store:first-child { animation: pulse-scale 1.3s ease-in-out infinite; }
.app-popup__store:last-child  { animation: pulse-scale 1.3s ease-in-out 0.15s infinite; }

/* ════════════════════════════════════════════════════════════════
   PATTERN LABEL (hidden now — kept selector so no orphan refs)
════════════════════════════════════════════════════════════════ */
.pattern-label { display: none; }
</style>
