/* global React */
// JO.HAK website — three Ausbildungszweige + "Our spirit" section.
const { Button } = window.JOHAKDesignSystem_350c1a;

const PROGRAMS = [
  {
    key: "business", name: "BUSINESS plus.HAK", claim: "Be first in management",
    grad: "linear-gradient(150deg, var(--red-500), var(--johak-red))",
    text: "Die BUSINESS plus.HAK vermittelt betriebswirtschaftliches Knowhow und umfassende Allgemeinbildung. Durch Projekte mit Unternehmen und zeitgemäße IT-Ausstattung erlangst du unternehmerische Handlungskompetenz.",
  },
  {
    key: "it", name: "IT.HAK", claim: "Go digital native",
    grad: "linear-gradient(150deg, var(--sky-600), var(--sky-500))",
    text: "Die Zukunft der Wirtschaft wird digital sein. Die IT.HAK bereitet dich auf Berufe in der digitalen Welt vor, die hohe Wirtschafts- und Technologiekompetenzen verlangen.",
  },
  {
    key: "praxis", name: "PRAXIS.HAS", claim: "You can do it.",
    grad: "linear-gradient(150deg, var(--amber-500), var(--johak-amber))",
    text: "Die PRAXIS.HAS ist eine dreijährige mittlere Schule. Sie bietet eine solide wirtschaftliche Ausbildung, bei der praxisorientiertes Arbeiten im Vordergrund steht.",
  },
];

function Programs() {
  return (
    <section id="ausbildung" style={{ background: "var(--color-surface)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-9) var(--space-6)" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div className="johak-eyebrow" style={{ marginBottom: 12 }}>Unsere Ausbildung</div>
          <h2 style={{ fontSize: "var(--text-3xl)", margin: 0, color: "var(--text-strong)" }}>Drei Zweige, eine Zukunft</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {PROGRAMS.map((p) => (
            <article key={p.key} style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column" }}>
              <div style={{ background: p.grad, padding: "var(--space-7) var(--space-6)", color: "#fff", minHeight: 150 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "var(--text-xl)", letterSpacing: "-0.01em" }}>{p.name}</div>
                <div style={{ fontFamily: "var(--font-script)", fontSize: 30, marginTop: 6, opacity: 0.95 }}>{p.claim}</div>
              </div>
              <div style={{ background: "var(--color-surface)", padding: "var(--space-6)", flex: 1, display: "flex", flexDirection: "column", border: "1px solid var(--border)", borderTop: "none", borderBottomLeftRadius: "var(--radius-xl)", borderBottomRightRadius: "var(--radius-xl)" }}>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: 1.6, margin: "0 0 20px", flex: 1 }}>{p.text}</p>
                <Button variant="ghost" style={{ alignSelf: "flex-start", paddingLeft: 0, paddingRight: 0 }}>Mehr erfahren →</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spirit() {
  return (
    <section id="schule" style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-9) var(--space-6)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-9)", alignItems: "center" }}>
        <image-slot id="johak-spirit" style={{ width: "100%", height: 380 }} shape="rounded" radius="26" placeholder="Foto: Schulalltag / Team"></image-slot>
        <div>
          <div className="johak-eyebrow" style={{ marginBottom: 12 }}>Our spirit · our goals</div>
          <h2 style={{ fontSize: "var(--text-3xl)", margin: "0 0 18px", color: "var(--text-strong)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>Gemeinsam<br />Zukunft bilden.</h2>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-body)", lineHeight: 1.7, margin: "0 0 16px" }}>
            Die HAK ist eine berufsbildende höhere Schule. Sie dient der kaufmännischen Berufsausbildung
            für alle Zweige der Wirtschaft und des öffentlichen Dienstes. Die Wirtschaft braucht <strong>DICH!</strong>
          </p>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
            Wirtschaftskompetenz, beste IT-Kenntnisse, mehrsprachige Kommunikation und fundierte
            Allgemeinbildung machen dich zu einer gefragten Mitarbeiterin / einem gefragten Mitarbeiter.
          </p>
          <span className="johak-accent-bar" style={{ width: 120, height: 8, marginTop: 26 }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Programs, Spirit });
