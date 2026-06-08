import React from "react";

/**
 * JO.HAK Button — primary action component.
 * Variants: primary (petrol), accent (signal red), highlight (amber),
 *           secondary (outline), ghost, inverse (on dark).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: "var(--text-sm)", gap: "6px", minHeight: "36px" },
    md: { padding: "11px 22px", fontSize: "var(--text-base)", gap: "8px", minHeight: "44px" },
    lg: { padding: "15px 30px", fontSize: "var(--text-md)", gap: "10px", minHeight: "52px" },
  };

  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "2px solid var(--color-primary)",
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "2px solid var(--color-accent)",
    },
    highlight: {
      background: "var(--color-highlight)",
      color: "var(--color-on-highlight)",
      border: "2px solid var(--color-highlight)",
    },
    secondary: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid transparent",
    },
    inverse: {
      background: "var(--neutral-0)",
      color: "var(--color-primary)",
      border: "2px solid var(--neutral-0)",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-display)",
    fontWeight: "var(--fw-bold)",
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "transform var(--duration-fast) var(--ease-standard), filter var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)",
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    minHeight: sizes[size].minHeight,
    ...variants[variant],
    ...style,
  };

  const handleEnter = (e) => {
    if (disabled) return;
    e.currentTarget.style.filter = "brightness(0.93)";
    if (variant === "secondary" || variant === "ghost") {
      e.currentTarget.style.background = "var(--neutral-100)";
    }
  };
  const handleLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.filter = "none";
    if (variant === "secondary" || variant === "ghost") {
      e.currentTarget.style.background = "transparent";
    }
  };
  const handleDown = (e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; };
  const handleUp = (e) => { if (!disabled) e.currentTarget.style.transform = "scale(1)"; };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
