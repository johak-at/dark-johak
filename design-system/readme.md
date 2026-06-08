# JO.HAK Design System

A brand & UI design system for **JO.HAK** — the *Bundeshandelsakademie (BHAK)* and *Bundeshandelsschule (BHAS)* in **St. Johann im Pongau, Salzburg, Austria**. Claim: **„Gemeinsam Zukunft bilden.“** ("Building the future together.")

The school positions itself as *„die erste Adresse für Wirtschaftskompetenz“* — the first address for business competence — with three educational tracks. This system turns the school's printed Corporate Identity guidelines into a living set of tokens, components and full-screen recreations.

---

## Sources

- **`uploads/200923_CI-Guidelines_HAK.pdf`** — official Corporate Identity Guidelines (Sept 2020). Primary source for colours, typography, logo usage, claim, and brand personality. Authored by *gipfelgold.com* (DESIGN, St. Johann im Pongau).
- **Logos** — supplied SVG/PNG/JPG lockups (horizontal, vertical, signet, with/without claim, RGB + reversed-white). Copied into `assets/logos/`.
- **Fonts** — Coco Gothic (headline, trial TTFs supplied), Open Sans (body/UI, self-hosted woff2) and Antro Vectra (claim script, OTFs supplied). All self-hosted in `assets/fonts/`. *(The CI's Akzidenz-Grotesk BQ is supplied in `assets/fonts/Akzidenz-Grotesk/` but is condensed and too narrow for screen body copy; johak.at uses Open Sans, which we follow.)*
- **Live website** — <https://www.johak.at/> — referenced for the website UI kit's information architecture and real content (programs, news, navigation).
- Social: [Facebook](https://www.facebook.com/haksanktjohann/) · [Instagram](https://www.instagram.com/johak.pongau/) · [YouTube](https://www.youtube.com/channel/UCqGulRXcMRgynfSrCcYGcFw) · WebUntis (student portal).

---

## The three educational tracks

| Track | Brand colour | English claim | What it is |
|---|---|---|---|
| **BUSINESS plus.HAK** | Signal Red `#E4003A` | *Be first in management* | 5-year higher business school — betriebswirtschaftliches Knowhow + Allgemeinbildung. |
| **IT.HAK** | Sky `#80CCDB` | *Go digital native* | 5-year track focused on the digital economy & technology competence. |
| **PRAXIS.HAS** | Amber `#F7A823` | *You can do it.* | 3-year medium-level school, hands-on, practice-oriented business education. |

---

## CONTENT FUNDAMENTALS

**Language.** German (Austrian), with confident English claims layered on top (*Be first in management*, *Go digital native*, *Our spirit our goals*). The headline claim *Gemeinsam Zukunft bilden* is the anchor everywhere.

**Address & tone.** Speaks directly to prospective students using the informal **„du"** — *„Die Wirtschaft braucht DICH!"*, *„…bereitet dich auf Berufe vor"*, *„Komm schnuppern!"*. Warm, encouraging, grounded, optimistic. Never stiff or bureaucratic despite being a federal school.

**Personality (from the CI's "3 Fragen").** If the school were a person at a party: *bodenständig* (down-to-earth), with a *soziales Gewissen*, *erfolgreich/smart*, *cosmopolitisch*, *jung*, *am Puls der Zeit*. As an animal: a **Golden Retriever** — familial, accompanying, caring, leading. As a personality: **Mike Ross** (Suits) — schlau, authentisch, bodenständig, weltoffen. → The voice is smart but approachable, ambitious but warm.

**Casing.** Headlines often **ALL-CAPS** with a full stop for punch — *„GEMEINSAM ZUKUNFT BILDEN."*, *„NEWS SPACE."*. Program names keep their stylised mixed case (*BUSINESS plus.HAK*, *IT.HAK*, *PRAXIS.HAS*). Eyebrows/labels are uppercase with wide tracking.

**Emoji.** Not used. The brand expresses warmth through colour, the script claim, and photography of real students — not emoji.

**Copy examples.** *„Wir freuen uns, dass du dich für die JO.HAK interessierst."* · *„Die Zukunft der Wirtschaft wird digital sein."* · *„Komm schnuppern! Hier geht's zur Anmeldung…"*

---

## VISUAL FOUNDATIONS

**Colour.** Four brand primaries + two darks (CI Farbdefinitionen):
- **Sky** `#80CCDB` (Farbe 1, hellblau) — light, friendly accents, soft fills; the **IT.HAK** track.
- **Petrol** `#005577` (Farbe 2) — the workhorse primary: buttons, links, headings-on-light.
- **Signal Red** `#E4003A` (Farbe 3) — high-emphasis CTAs and the **BUSINESS plus.HAK** track. Use sparingly.
- **Amber** `#F7A823` (Farbe 4) — highlights, the **PRAXIS.HAS** track, warmth.
- **Night Blue** `#1A2E3C` (Farbe 5) — dark surfaces, footers, hero overlays.
- **Warm Black** `#180F00` (Black 6) — strongest text.

The four primaries appear together as the **signet** (the nested rounded-square "h" mark) and as the recurring **four-colour accent bar** (`.johak-accent-bar`). Neutrals are cool, pulled toward the night blue. Imagery is warm, candid, real — students, classrooms, events — never stocky or cold.

**Type.**
- **Coco Gothic** — headline/display. Geometric, Art-Deco-flavoured, friendly. Weights 200/300/400/700/900. Used for all headings, buttons, nav, stats.
- **Open Sans** — body & UI. Humanist grotesque, highly legible at text sizes, warm and neutral — the face used on johak.at. Self-hosted variable woff2 (weight 400–700, normal + italic). Falls back to Helvetica/Arial. *(Chosen over the CI's Akzidenz-Grotesk BQ Light Condensed, whose condensed cuts read poorly as screen body.)*
- **Antro Vectra** — the claim script. Flowing signature calligraphy. Decorative accents only (the logo's claim is already vectorised). Never for body copy.

**Spacing & shape.** 4px base grid. Corners are softly, confidently rounded (`--radius-lg` 18px for cards, pill for buttons/badges) — echoing the rounded squares of the signet. Buttons are fully pill-shaped.

**Backgrounds.** Mostly clean white / very light cool grey. Dark sections use night blue or the **signet gradient** (`--gradient-signet`: night → petrol → sky) for hero overlays, stat strips and CTAs. Photography sits under a left-weighted protection gradient so white text stays legible. No noise, no busy patterns — the four-colour mark is the texture.

**Shadows.** Cool, low-spread, tinted toward night blue (`rgba(16,33,41,…)`). Subtle on resting cards (`--shadow-sm`), lifting to `--shadow-lg` on hover.

**Motion.** Restrained and purposeful. 120–320ms, `ease-standard` / `ease-out`. Buttons brighten ~7% on hover and shrink to 0.97 on press; cards lift 2px and deepen their shadow. Modals fade + pop (translateY 12→0, scale 0.98→1). No bouncing, no infinite decorative loops.

**States.** Hover = brightness/colour shift (ghost & secondary fill with `--neutral-100`). Focus = sky focus ring (`--shadow-focus`). Press = scale-down. Borders are 1px cool grey; inputs thicken to 1.5px and turn petrol on focus, signal-red on error.

**Cards.** White surface, 1px cool border, soft `--radius-lg` corners, low cool shadow. Optional **top accent edge** (`accent="signet|petrol|sky|red|amber"`) ties a card to the brand.

---

## ICONOGRAPHY

The CI does not ship a bespoke icon font. Approach:
- **Logos & signet** are the primary brand graphics — use the supplied SVGs from `assets/logos/` (never redraw them). The signet (nested rounded squares in the four colours) doubles as an app icon / favicon / social avatar.
- **UI icons** — use a thin, geometric **stroke** style (2px, round caps/joins) that harmonises with Coco Gothic. The website kit uses small inline SVGs for social glyphs (Facebook, Instagram, YouTube) and chevrons. For broader needs substitute **Lucide** (<https://lucide.dev>) — same stroke weight & rounded feel — and keep strokes at 2px. *(Flagged substitution: no brand icon set was provided.)*
- **No emoji** as icons. Unicode arrows (→ ▾ ✓ ×) are used sparingly inside buttons/labels.
- The **four-colour accent bar** is used as a decorative divider/iconographic motif.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` (self-hosted @font-face for all three families), `colors.css`, `typography.css`, `spacing.css` (radii/shadows/motion/layout), `base.css` (element defaults + `.johak-eyebrow`, `.johak-display`, `.johak-claim`, `.johak-accent-bar`).

**`assets/`** — `logos/` (horizontal, vertical, signet, claim & reversed-white variants in SVG/PNG) · `fonts/` (Coco Gothic, Open Sans, Antro Vectra; Akzidenz-Grotesk BQ also supplied but unused).

**`guidelines/`** — foundation specimen cards (Design System tab): Colors (primaries, darks, neutral, ramps, status, gradient), Type (display, body, script, scale), Spacing (scale, radii, shadows), Brand (logo, signet).

**`components/`** — reusable React primitives (namespace `window.JOHAKDesignSystem_350c1a`):
- `core/` — **Button**, **Badge**, **Card**, **Avatar**
- `forms/` — **Input**, **Checkbox**, **Switch**
- `feedback/` — **Alert**
- `navigation/` — **Tabs**
- `brand/` — **Logo**

**`ui_kits/website/`** — interactive recreation of the johak.at homepage: `SiteHeader`, `Hero`, `Programs` + `Spirit`, `News` + `SiteFooter`, composed in `index.html` with a working Anmeldung modal. Photo areas use `<image-slot>` for real images.

---

## Usage

Consumers link the one stylesheet and read components off the global namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Badge, Logo } = window.JOHAKDesignSystem_350c1a;
</script>
```

All colour, type, spacing and shape values are CSS custom properties — prefer the semantic aliases (`--color-primary`, `--text-strong`, `--surface…`, `--radius-card`) over raw brand values.
