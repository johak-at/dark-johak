**Switch** — boolean on/off toggle; petrol track when on.

```jsx
const [on, setOn] = React.useState(false);
<Switch checked={on} onChange={setOn} label="Newsletter abonnieren" />
```

Props: `checked`, `onChange(next)`, `label`, `size` (sm/md), `disabled`.
