**Input** — single-line text field with label, hint and error.

```jsx
<Input label="E-Mail" type="email" placeholder="name@johak.at" hint="Wir antworten binnen 2 Tagen." />
<Input label="Name" error="Bitte ausfüllen" />
```

Border = petrol on focus, red on error. Props: `label`, `hint`, `error`, `size` (sm/md/lg), `leading`, `trailing`, plus native input attrs.
