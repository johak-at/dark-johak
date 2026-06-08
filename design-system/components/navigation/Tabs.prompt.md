**Tabs** — underline tab switcher with petrol active indicator.

```jsx
const [tab, setTab] = React.useState("news");
<Tabs value={tab} onChange={setTab} items={[
  { id: "news", label: "Aktuelles", badge: 3 },
  { id: "termine", label: "Termine" },
]} />
```

Each item: `{ id, label, badge? }`. Controlled or uncontrolled.
