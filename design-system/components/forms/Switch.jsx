import React from "react";

/**
 * JO.HAK Switch — boolean toggle. Petrol track when on.
 */
export function Switch({ checked = false, onChange, disabled = false, label, size = "md", id, style = {}, ...rest }) {
  const switchId = id || `johak-switch-${Math.random().toString(36).slice(2, 8)}`;
  const dims = {
    sm: { w: 38, h: 22, knob: 16 },
    md: { w: 48, h: 28, knob: 22 },
  }[size] || { w: 48, h: 28, knob: 22 };

  const toggle = () => { if (!disabled && onChange) onChange(!checked); };

  return (
    <label
      htmlFor={switchId}
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
        role="switch"
        aria-checked={checked}
        id={switchId}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); } }}
        style={{
          position: "relative",
          width: dims.w,
          height: dims.h,
          borderRadius: "var(--radius-pill)",
          background: checked ? "var(--color-primary)" : "var(--neutral-300)",
          transition: "background var(--duration-base) var(--ease-standard)",
          flex: "none",
        }}
        {...rest}
      >
        <span
          style={{
            position: "absolute",
            top: (dims.h - dims.knob) / 2,
            left: checked ? dims.w - dims.knob - (dims.h - dims.knob) / 2 : (dims.h - dims.knob) / 2,
            width: dims.knob,
            height: dims.knob,
            borderRadius: "50%",
            background: "var(--neutral-0)",
            boxShadow: "var(--shadow-sm)",
            transition: "left var(--duration-base) var(--ease-out)",
          }}
        />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
