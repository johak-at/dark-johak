import React from "react";

/**
 * JO.HAK Card — primary content container.
 * Soft rounded corners, low cool shadow, optional accent edge that nods to
 * the four-colour signet (top accent bar).
 */
export function Card({
  children,
  elevation = "sm",
  accent = null,        // null | "petrol" | "sky" | "red" | "amber" | "signet"
  padding = "lg",
  interactive = false,
  style = {},
  ...rest
}) {
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  };
  const pads = { none: 0, sm: "var(--space-4)", md: "var(--space-5)", lg: "var(--space-6)" };

  const accentColors = {
    petrol: "var(--johak-petrol)",
    sky: "var(--johak-sky)",
    red: "var(--johak-red)",
    amber: "var(--johak-amber)",
    signet: "linear-gradient(90deg, var(--johak-petrol) 0% 25%, var(--johak-sky) 25% 50%, var(--johak-red) 50% 75%, var(--johak-amber) 75% 100%)",
  };

  const handleEnter = (e) => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const handleLeave = (e) => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = shadows[elevation];
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        background: "var(--color-surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-card)",
        boxShadow: shadows[elevation],
        padding: pads[padding],
        overflow: "hidden",
        transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {accent && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: accentColors[accent] || accentColors.petrol,
          }}
        />
      )}
      {children}
    </div>
  );
}
