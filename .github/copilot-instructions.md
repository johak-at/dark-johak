# Copilot instructions — dark-johak

SvelteKit + Svelte 5 + Tailwind v4 + TypeScript. These rules are mandatory for all suggestions.

## Rule 1 — Use ONLY the JO.HAK Design System for styling

The single source of truth for all design is the **JO.HAK Design System** at
`design-system/` (the official Corporate Identity of the BHAK/BHAS
St. Johann im Pongau). **Do not invent colors, fonts, spacing, radii, shadows, or motion** — every
visual value must come from the design system's tokens.

Read `design-system/readme.md` and `SKILL.md` before producing UI.

- **Tokens** live in `design-system/tokens/` (`colors.css`, `typography.css`,
  `spacing.css`, `fonts.css`, `base.css`). Prefer semantic aliases over raw brand hex:
  - Color: `--color-primary` (petrol `#005577`), `--color-accent` (signal red — sparingly),
    `--color-highlight` (amber), `--color-sky`, `--text-strong|body|muted`,
    `--color-bg|surface|surface-inverse`, `--border`, and status `--color-success|warning|error|info`.
  - Type: `--font-display` (Coco Gothic, headings, often ALL-CAPS), `--font-body` (Archivo, body/UI),
    `--font-script` (Antro Vectra, decorative claim only). Sizes `--text-xs … --text-5xl`, weights `--fw-*`.
  - Shape/depth: `--radius-pill` (buttons/badges), `--radius-card` (cards), `--shadow-sm … --shadow-xl`,
    `--shadow-focus`.
  - Space: 4px grid `--space-1 … --space-12`; containers `--container-sm … --container-xl`.
  - Motion: `--duration-fast|base|slow`, `--ease-standard|out|in` (restrained, 120–320ms).
  - Motifs: `--gradient-signet`, `--gradient-sky`, `.johak-accent-bar`.
- **Wiring:** already loaded app-wide via `import '../../design-system/styles.css';` in
  `src/routes/+layout.svelte` (before `./layout.css`); it is the single entry point that pulls in all
  tokens and fonts. Keep it as a JS import here — do not move it into the Tailwind `layout.css`.
- **Components:** reuse the primitives in `design-system/components/` (Button, Badge,
  Card, Avatar, Input, Checkbox, Switch, Alert, Tabs, Logo). Each has a `.prompt.md` spec — port to
  Svelte 5 using the same tokens; do not redesign.
- **Logos:** use the SVGs in `assets/logos/` — never redraw or recolor the logo/signet.
- **Icons:** thin 2px geometric stroke; use Lucide. **No emoji.**

If nothing matches, add a token to the design system rather than hard-coding a one-off value.

## Rule 2 — Use ONLY pnpm

This is a pnpm repo (`pnpm-lock.yaml`). **Always use `pnpm`; never `npm` or `yarn`.**

- `pnpm install`, `pnpm add <pkg>` / `pnpm add -D <pkg>`, `pnpm dlx <cmd>` (not `npx`).
- Scripts: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm check`, `pnpm lint`, `pnpm format`.
- Never produce `package-lock.json` or `yarn.lock`, and never suggest `npm install`/`npx`.
