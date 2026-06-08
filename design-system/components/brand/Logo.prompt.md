**Logo** — renders official JO.HAK lockups from `assets/logos`.

```jsx
<Logo variant="horizontal" height={44} basePath="../assets/logos" />
<Logo variant="signet" height={36} />
<Logo variant="white" height={120} /> {/* on dark */}
```

Variants: `horizontal`, `horizontalClaim`, `vertical`, `verticalClaim`, `signet`, `white`. Always set `basePath` to wherever the logos were copied relative to the page.
