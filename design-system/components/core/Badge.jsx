import React from "react";

/**
 * JO.HAK Badge — compact status / category label.
 * tones: neutral, primary, accent, highlight, sky, success, warning, error, info
 * variant: soft (default) | solid | outline
 */
export function Badge({ children, tone = "neutral", variant = "soft", size = "md", style = {}, ...rest }) {
  const palette = {
    neutral:  ["var(--neutral-100)", "var(--neutral-700)", "var(--neutral-300)"],
    primary:  ["var(--color-primary-soft)", "var(--color-primary)", "var(--petrol-300)"],
    accent:   ["var(--color-accent-soft)", "var(--red-500)", "var(--red-300)"],
    highlight:["var(--color-highlight-soft)", "var(--amber-600)", "var(--amber-400)"],
    sky:      ["var(--sky-100)", "var(--petrol-500)", "var(--sky-400)"],
    success:  ["var(--color-success-soft)", "var(--color-success)", "var(--color-success)"],
    warning:  ["var(--color-warning-soft)", "var(--amber-600)", "var(--amber-400)"],
    error:    ["var(--color-error-soft)", "var(--red-500)", "var(--red-300)"],
    info:     ["var(--color-info-soft)", "var(--color-info)", "var(--petrol-300)"],
  };
  const [soft, fg, ring] = palette[tone] || palette.neutral;

  const sizes = {
    sm: { padding: "2px 8px", fontSize: "var(--text-2xs)" },
    md: { padding: "4px 11px", fontSize: "var(--text-xs)" },
    lg: { padding: "6px 14px", fontSize: "var(--text-sm)" },
  };

  const variants = {
    soft:    { background: soft, color: fg, border: "1px solid transparent" },
    solid:   { background: fg, color: "var(--neutral-0)", border: "1px solid transparent" },
    outline: { background: "transparent", color: fg, border: `1px solid ${ring}` },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-semibold)",
        lineHeight: 1.4,
        letterSpacing: "0.02em",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
