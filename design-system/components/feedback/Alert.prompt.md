**Alert** — inline message banner with status colour + icon.

```jsx
<Alert tone="success" title="Anmeldung gesendet">Wir melden uns in Kürze.</Alert>
<Alert tone="warning" onClose={dismiss}>Frist endet am 1. März.</Alert>
```

Tones: `info` (petrol), `success`, `warning`, `error`, `neutral`. Optional `title`, `icon`, `onClose`.
