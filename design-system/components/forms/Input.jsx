import React from "react";

/**
 * JO.HAK Input — single-line text field.
 * Supports label, hint, error, leading/trailing adornments.
 */
export function Input({
  label,
  hint,
  error,
  id,
  size = "md",
  leading = null,
  trailing = null,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const inputId = id || `johak-input-${Math.random().toString(36).slice(2, 8)}`;
  const sizes = {
    sm: { padding: "8px 12px", fontSize: "var(--text-sm)", minHeight: "38px" },
    md: { padding: "11px 14px", fontSize: "var(--text-base)", minHeight: "46px" },
    lg: { padding: "14px 16px", fontSize: "var(--text-md)", minHeight: "54px" },
  };
  const [focused, setFocused] = React.useState(false);
  const borderColor = error
    ? "var(--color-error)"
    : focused
    ? "var(--color-primary)"
    : "var(--border-strong)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...containerStyle }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: "var(--fw-semibold)",
            fontSize: "var(--text-sm)",
            color: "var(--text-strong)",
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: disabled ? "var(--neutral-100)" : "var(--color-surface)",
          border: `1.5px solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          padding: sizes[size].padding,
          minHeight: sizes[size].minHeight,
          boxShadow: focused ? "var(--shadow-focus)" : "none",
          transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {leading && <span style={{ display: "flex", color: "var(--text-muted)" }}>{leading}</span>}
        <input
          id={inputId}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            width: "100%",
            fontFamily: "var(--font-body)",
            fontSize: sizes[size].fontSize,
            color: "var(--text-strong)",
            ...style,
          }}
          {...rest}
        />
        {trailing && <span style={{ display: "flex", color: "var(--text-muted)" }}>{trailing}</span>}
      </div>
      {(hint || error) && (
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-xs)",
            color: error ? "var(--color-error)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
