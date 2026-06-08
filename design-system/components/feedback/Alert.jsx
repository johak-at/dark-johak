import React from "react";

/**
 * JO.HAK Alert — inline message banner.
 * tone: info (petrol) | success | warning | error | neutral
 */
export function Alert({ children, title, tone = "info", onClose, icon, style = {}, ...rest }) {
  const palette = {
    info:    ["var(--color-info-soft)", "var(--color-info)", "var(--petrol-700)"],
    success: ["var(--color-success-soft)", "var(--color-success)", "#0c5c3e"],
    warning: ["var(--color-warning-soft)", "var(--amber-500)", "var(--amber-600)"],
    error:   ["var(--color-error-soft)", "var(--color-error)", "var(--red-600)"],
    neutral: ["var(--neutral-100)", "var(--neutral-500)", "var(--text-strong)"],
  };
  const [bg, accent, fg] = palette[tone] || palette.info;

  const defaultIcons = {
    info: "i", success: "✓", warning: "!", error: "✕", neutral: "•",
  };

  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        background: bg,
        borderRadius: "var(--radius-md)",
        borderLeft: `4px solid ${accent}`,
        padding: "14px 16px",
        fontFamily: "var(--font-body)",
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          flex: "none",
          borderRadius: "50%",
          background: accent,
          color: "#fff",
          fontSize: 13,
          fontWeight: 700,
          fontFamily: "var(--font-display)",
          marginTop: 1,
        }}
      >
        {icon || defaultIcons[tone]}
      </span>
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--fw-bold)", fontSize: "var(--text-base)", color: fg, marginBottom: children ? 2 : 0 }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: "var(--leading-normal)" }}>
            {children}
          </div>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Schließen"
          style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-muted)", fontSize: 18, lineHeight: 1, padding: 2 }}
        >
          ×
        </button>
      )}
    </div>
  );
}
