/* global React */
// JO.HAK website — utility bar + main navigation (faithful to johak.at IA).
const { Button, Logo } = window.JOHAKDesignSystem_350c1a;

function SocialIcon({ name }) {
  const paths = {
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    youtube: "M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
  };
  if (name === "instagram") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={paths.youtube} /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff" /></svg>
    );
  }
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={paths.facebook} /></svg>;
}

function SiteHeader({ onAnmelden }) {
  const [hover, setHover] = React.useState(null);
  const nav = [
    { id: "aktuelles", label: "Aktuelles", sub: ["News", "Termine"] },
    { id: "ausbildung", label: "Ausbildung", sub: ["Information", "BUSINESS plus.HAK", "IT.HAK", "PRAXIS.HAS"] },
    { id: "schule", label: "Schule", sub: ["JO.HAK Team", "Klassen", "Anmeldung", "Downloads", "Entrepreneurship"] },
    { id: "kontakt", label: "Kontakt", sub: null },
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* Utility bar */}
      <div style={{ background: "var(--johak-navy)", color: "rgba(255,255,255,0.8)" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 var(--space-6)", height: 38, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 18 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            {["facebook", "instagram", "youtube"].map((s) => (
              <a key={s} href="#" style={{ color: "rgba(255,255,255,0.8)", display: "flex" }} aria-label={s}><SocialIcon name={s} /></a>
            ))}
          </div>
          <span style={{ width: 1, height: 18, background: "rgba(255,255,255,0.2)" }} />
          <a href="#" style={{ color: "var(--sky-300)", fontSize: 13, fontWeight: 600, fontFamily: "var(--font-display)", textDecoration: "none", letterSpacing: ".03em" }}>WebUntis ↗</a>
        </div>
      </div>
      {/* Main bar */}
      <div style={{ background: "rgba(255,255,255,0.94)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "0 var(--space-6)", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <a href="#top" style={{ display: "flex" }}><Logo variant="horizontal" basePath="../../assets/logos" height={44} /></a>
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {nav.map((n) => (
              <div key={n.id} style={{ position: "relative" }} onMouseEnter={() => setHover(n.id)} onMouseLeave={() => setHover(null)}>
                <button style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-base)", color: hover === n.id ? "var(--color-primary)" : "var(--text-strong)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 6 }}>
                  {n.label}{n.sub && <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span>}
                </button>
                {n.sub && hover === n.id && (
                  <div style={{ position: "absolute", top: "100%", left: 8, minWidth: 220, background: "var(--color-surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border)", padding: 8, overflow: "hidden" }}>
                    {n.sub.map((s) => (
                      <a key={s} href="#" style={{ display: "block", padding: "9px 12px", borderRadius: "var(--radius-sm)", fontSize: 14, color: "var(--text-body)", textDecoration: "none", fontFamily: "var(--font-body)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-primary-soft)"; e.currentTarget.style.color = "var(--color-primary)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-body)"; }}>{s}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Button variant="accent" size="sm" onClick={onAnmelden}>Anmeldung 26/27</Button>
        </div>
      </div>
    </header>
  );
}

window.SiteHeader = SiteHeader;
