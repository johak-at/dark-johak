# dark-johak — Agent rules

SvelteKit + Svelte 5 + Tailwind v4 + TypeScript. See [AGENTS.md](AGENTS.md) for the Svelte MCP workflow.

## Rule 1 — Use ONLY the JO.HAK Design System for all styling

This project has a single source of truth for design: the **JO.HAK Design System** in
[`design-system/`](design-system/). It encodes the
official Corporate Identity of the Bundeshandelsakademie/-schule St. Johann im Pongau.

**You must not invent colors, fonts, spacing, radii, shadows, or motion.** Every visual value must
come from the design system's tokens. Before writing any UI, read
[`design-system/readme.md`](design-system/readme.md)
and [`design-system/SKILL.md`](design-system/SKILL.md).

Specifically:

- **Tokens.** Use the CSS custom properties defined in `design-system/tokens/`
  (`colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`). Prefer the **semantic
  aliases** over raw brand values:
  - Color: `--color-primary` (petrol `#005577`), `--color-accent` (signal red, sparingly),
    `--color-highlight` (amber), `--color-sky`, `--text-strong`/`--text-body`/`--text-muted`,
    `--color-bg`/`--color-surface`/`--color-surface-inverse`, `--border`, status `--color-success`/
    `--color-warning`/`--color-error`/`--color-info`.
  - Type: `--font-display` (Coco Gothic — headings, often ALL-CAPS), `--font-body` (Archivo — body/UI),
    `--font-script` (Antro Vectra — decorative claim only, never body). Sizes `--text-xs … --text-5xl`,
    weights `--fw-*`, leading/tracking tokens.
  - Shape & depth: `--radius-pill` (buttons/badges), `--radius-card`/`--radius-lg` (cards),
    `--shadow-sm … --shadow-xl`, `--shadow-focus` (the sky focus ring).
  - Space: 4px grid via `--space-1 … --space-12`; containers `--container-sm … --container-xl`.
  - Motion: `--duration-fast|base|slow`, `--ease-standard|out|in`. Restrained, 120–320ms.
  - Brand motifs: `--gradient-signet`, `--gradient-sky`, and the `.johak-accent-bar` four-colour bar.
- **Wiring.** The design system is already loaded app-wide via a JS import of its single entry point in
  [`src/routes/+layout.svelte`](src/routes/+layout.svelte):
  `import '../../design-system/styles.css';` (imported before `./layout.css`). `styles.css` `@import`s
  every token + font file. **Do not** move this `@import` into the Tailwind entry
  [`layout.css`](src/routes/layout.css) — Tailwind's bundler resolves the design system's *nested*
  relative `@import`s against the wrong base and drops them. Keep it as the component-level JS import.
- **Components.** Reuse the design system's primitives (Button, Badge, Card, Avatar, Input, Checkbox,
  Switch, Alert, Tabs, Logo) under `design-system/components/`. They ship as `.jsx`
  references with a `.prompt.md` describing usage — port them to Svelte 5 components that consume the
  same tokens; do not redesign them. Each component's `.prompt.md` is the spec.
- **Logos.** Use the supplied SVGs in `design-system/assets/logos/`.
  **Never redraw or recolor the logo or signet.**
- **Icons.** Thin 2px geometric stroke (round caps/joins); use Lucide as the substitute set. **No emoji.**

If a design need has no matching token or component, add a new token to the design system (and note it)
rather than hard-coding a one-off value in the app.

## Rule 2 — Use ONLY pnpm

This repo is a pnpm project (`pnpm-lock.yaml`, `pnpm-workspace.yaml`). **Use `pnpm` for every package
and script operation. Never use `npm` or `yarn`.**

- Install: `pnpm install` · Add a dep: `pnpm add <pkg>` (`pnpm add -D <pkg>` for dev).
- Run scripts: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm check`, `pnpm lint`, `pnpm format`.
- Do not create or commit `package-lock.json` or `yarn.lock`, and never suggest `npm install`/`npx`
  (use `pnpm dlx` instead of `npx`).
