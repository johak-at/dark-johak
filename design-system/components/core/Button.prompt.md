**Button** — the primary pill-shaped action control for JO.HAK; Coco Gothic label, four-colour brand variants.

```jsx
<Button variant="primary" size="md" onClick={save}>Jetzt anmelden</Button>
<Button variant="secondary" iconLeft={<DownloadIcon/>}>Download</Button>
<Button variant="accent" size="lg">Tag der offenen Tür</Button>
```

Variants: `primary` (petrol, default), `accent` (signal red — high emphasis, use sparingly), `highlight` (amber), `secondary` (outline), `ghost` (text-only), `inverse` (white, for dark backgrounds).
Sizes: `sm` / `md` / `lg`. Props: `disabled`, `fullWidth`, `iconLeft`, `iconRight`.
