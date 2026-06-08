---
name: johak-design
description: Use this skill to generate well-branded interfaces and assets for JO.HAK (Bundeshandelsakademie / Bundeshandelsschule St. Johann im Pongau), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** JO.HAK — „Gemeinsam Zukunft bilden." Austrian business academy. Warm, smart, grounded, du-form German with confident English claims.
- **Entry point:** link `styles.css` (it `@import`s all tokens + fonts).
- **Colours:** petrol `#005577` (primary), sky `#80CCDB`, signal red `#E4003A` (sparingly), amber `#F7A823`, night blue `#1A2E3C`, warm black `#180F00`. Prefer semantic aliases (`--color-primary`, `--text-strong`, …).
- **Track colours:** BUSINESS plus.HAK → signal red `#E4003A` · IT.HAK → sky `#80CCDB` · PRAXIS.HAS → amber `#F7A823`.
- **Type:** Akzidenz-Grotesk BQ (headlines, ALL-CAPS for punch — `--font-display`), Open Sans (body/UI — readable, matches johak.at), Antro Vectra (claim script, decorative only), Coco Gothic (`--font-logo` — logo & brand artifacts only, **not** headings).
- **Shape:** pill buttons/badges, soft-rounded cards, four-colour accent bar motif, cool low shadows.
- **Components:** `window.JOHAKDesignSystem_<hash>` → Button, Badge, Card, Avatar, Input, Checkbox, Switch, Alert, Tabs, Logo. Each has a `.prompt.md` with usage.
- **Assets:** `assets/logos/` (use the supplied SVGs — never redraw the logo/signet), `assets/fonts/`.
- **Icons:** thin 2px geometric stroke; substitute Lucide. No emoji.

## Notes / substitutions
- **Akzidenz-Grotesk BQ** (headings) uses the **standard** cuts (Regular/Medium/Bold/Super); the condensed cuts are unused (too narrow for screen body, which is why body is Open Sans).
- **Open Sans** (body) is self-hosted (variable woff2) — the readable face used on johak.at.
- **Coco Gothic** is no longer the heading face — reserved for the logo and specific brand artifacts (`--font-logo`).
- **Coco Gothic** is loaded from supplied trial files — swap in the licensed binaries for production.
- No bespoke icon set was provided; Lucide is the recommended match.
