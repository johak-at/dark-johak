import React from "react";

/**
 * JO.HAK Checkbox — petrol fill when checked, with a crisp check glyph.
 */
export function Checkbox({ checked = false, onChange, disabled = false, label, id, style = {}, ...rest }) {
  const cbId = id || `johak-cb-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };

  return (
    <label
      htmlFor={cbId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--text-strong)",
        ...style,
      }}
    >
      <span
        role="checkbox"
        aria-checked={checked}
        id={cbId}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === " ") { e.preventDefault(); toggle(); } }}
        style={{
          width: 20,
          height: 20,
          flex: "none",
          borderRadius: "var(--radius-xs)",
          border: checked ? "1.5px solid var(--color-primary)" : "1.5px solid var(--border-strong)",
          background: checked ? "var(--color-primary)" : "var(--color-surface)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
        }}
        {...rest}
      >
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
