/* global React */
// JO.HAK website — "NEWS SPACE." grid + footer.
const { Button, Logo, Badge } = window.JOHAKDesignSystem_350c1a;

const NEWS = [
  { id: "n1", cat: "Erfolg", title: "3. Rang beim diploma-thesis-award der KSW Salzburg" },
  { id: "n2", cat: "Schulleben", title: "Zeugnisverteilung 3AHS" },
  { id: "n3", cat: "Erasmus+", title: "Erasmus Projekt in Riva" },
  { id: "n4", cat: "Sport", title: "JO.HAK glänzt beim Lidl Schullauf im USZ Rif" },
  { id: "n5", cat: "Entrepreneurship", title: "Raiffeisen Finanzakademie" },
  { id: "n6", cat: "Anmeldung", title: "Anmeldung Schuljahr 2026/27" },
];

function News() {
  return (
    <section id="aktuelles" style={{ background: "var(--color-surface)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-9) var(--space-6)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: 0, color: "var(--text-strong)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>News Space.</h2>
          <Button variant="secondary" size="sm">Alle News</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {NEWS.map((n) => (
            <a key={n.id} href="#" style={{ textDecoration: "none", display: "block", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)", border: "1px solid var(--border)", background: "var(--color-surface)" }}>
              <div style={{ position: "relative" }}>
                <image-slot id={`johak-${n.id}`} style={{ width: "100%", height: 230, display: "block" }} shape="rect" fit="cover" placeholder={`Foto · ${n.cat}`}></image-slot>
                <Badge tone="accent" variant="solid" size="sm" style={{ position: "absolute", left: 14, top: 14 }}>{n.cat}</Badge>
              </div>
              <div style={{ padding: "var(--space-5)" }}>
                <h3 style={{ fontSize: "var(--text-md)", margin: "0 0 10px", color: "var(--text-strong)", lineHeight: 1.25 }}>{n.title}</h3>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--color-primary)" }}>Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer id="kontakt" style={{ background: "var(--johak-ink)", color: "rgba(255,255,255,0.66)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-9) var(--space-6)", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "var(--space-7)" }}>
        <div>
          <Logo variant="white" basePath="../../assets/logos" height={104} />
          <p style={{ fontFamily: "var(--font-script)", fontSize: 30, color: "#fff", margin: "18px 0 0" }}>Gemeinsam Zukunft bilden</p>
        </div>
        <div>
          <div style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 14 }}>Kontakt</div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>BHAK / BHAS St. Johann im Pongau<br />5600 St. Johann im Pongau<br />office@johak.at</p>
        </div>
        <div>
          <div style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 14 }}>Schule</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 2 }}>
            <li>Anmeldung</li><li>Komm schnuppern!</li><li>Downloads</li><li>JO.HAK Team</li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", padding: "18px var(--space-6)", textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
        © 2026 BHAK/BHAS St. Johann im Pongau · Kontakt · Impressum · Datenschutz · Barrierefreiheit
      </div>
    </footer>
  );
}

Object.assign(window, { News, SiteFooter });
