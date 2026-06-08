**Checkbox** — single boolean choice with petrol fill.

```jsx
const [agree, setAgree] = React.useState(false);
<Checkbox checked={agree} onChange={setAgree} label="Ich stimme den AGB zu" />
```

Props: `checked`, `onChange(next)`, `label`, `disabled`.
