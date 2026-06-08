/* global React */
// JO.HAK website — hero with anmeldung + video CTA over a photo slot.
const { Button, Badge } = window.JOHAKDesignSystem_350c1a;

function Hero({ onAnmelden, onVideo }) {
  return (
    <section id="top" style={{ position: "relative", background: "var(--johak-navy)", overflow: "hidden" }}>
      {/* photo */}
      <image-slot id="johak-hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        shape="rect" fit="cover" placeholder="Hero-Foto (Schüler:innen / Schulgebäude)"></image-slot>
      {/* protection gradient */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(16,33,41,0.92) 0%, rgba(16,33,41,0.78) 38%, rgba(16,33,41,0.25) 100%)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-10) var(--space-6)", minHeight: 520, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Badge tone="sky" variant="solid" style={{ alignSelf: "flex-start", marginBottom: 22 }}>
          BHAK / BHAS · St. Johann im Pongau
        </Badge>
        <h1 style={{ fontSize: "var(--text-5xl)", lineHeight: 1.0, letterSpacing: "-0.02em", margin: "0 0 8px", color: "#fff", maxWidth: "16ch" }}>
          Gemeinsam Zukunft bilden
        </h1>
        <p style={{ fontFamily: "var(--font-script)", fontSize: 40, color: "var(--sky-300)", margin: "0 0 26px", lineHeight: 1 }}>
          die erste Adresse für Wirtschaftskompetenz
        </p>
        <p style={{ fontSize: "var(--text-md)", color: "rgba(255,255,255,0.82)", maxWidth: "48ch", margin: "0 0 34px" }}>
          Die Anmeldung für das Schuljahr 2026/27 ist geöffnet. Lerne unsere drei Ausbildungszweige
          kennen und sichere dir deinen Platz.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Button variant="accent" size="lg" onClick={onAnmelden}>Jetzt anmelden</Button>
          <Button variant="inverse" size="lg" iconLeft={<PlayIcon />} onClick={onVideo}>Schau dir das Video an</Button>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
  );
}

window.Hero = Hero;
