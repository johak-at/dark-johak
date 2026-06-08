import React from "react";

/**
 * JO.HAK Avatar — user / student initials or image.
 * Falls back to initials on a brand-tinted background.
 */
export function Avatar({ name = "", src = null, size = "md", tone = "petrol", square = false, style = {}, ...rest }) {
  const sizes = {
    xs: 26, sm: 34, md: 44, lg: 56, xl: 76,
  };
  const px = sizes[size] || sizes.md;

  const tones = {
    petrol: ["var(--petrol-100)", "var(--petrol-600)"],
    sky:    ["var(--sky-100)", "var(--petrol-500)"],
    red:    ["var(--red-100)", "var(--red-500)"],
    amber:  ["var(--amber-100)", "var(--amber-600)"],
    navy:   ["var(--neutral-200)", "var(--johak-navy)"],
  };
  const [bg, fg] = tones[tone] || tones.petrol;

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: px,
        height: px,
        borderRadius: square ? "var(--radius-md)" : "var(--radius-pill)",
        background: src ? "var(--neutral-200)" : bg,
        color: fg,
        fontFamily: "var(--font-display)",
        fontWeight: "var(--fw-bold)",
        fontSize: px * 0.4,
        lineHeight: 1,
        overflow: "hidden",
        flex: "none",
        userSelect: "none",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || "?"
      )}
    </span>
  );
}
