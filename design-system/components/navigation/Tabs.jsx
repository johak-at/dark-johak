import React from "react";

/**
 * JO.HAK Tabs — underline-style tab switcher.
 * items: [{ id, label, badge? }]
 */
export function Tabs({ items = [], value, onChange, style = {}, ...rest }) {
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = (id) => {
    if (value === undefined) setInternal(id);
    if (onChange) onChange(id);
  };

  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: "4px",
        borderBottom: "1.5px solid var(--border)",
        ...style,
      }}
      {...rest}
    >
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => select(item.id)}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: "12px 16px",
              marginBottom: "-1.5px",
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-bold)",
              fontSize: "var(--text-base)",
              color: isActive ? "var(--color-primary)" : "var(--text-muted)",
              borderBottom: isActive ? "3px solid var(--color-primary)" : "3px solid transparent",
              transition: "color var(--duration-base) var(--ease-standard)",
            }}
          >
            {item.label}
            {item.badge != null && (
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-2xs)",
                  fontWeight: "var(--fw-semibold)",
                  background: isActive ? "var(--color-primary-soft)" : "var(--neutral-100)",
                  color: isActive ? "var(--color-primary)" : "var(--text-muted)",
                  borderRadius: "var(--radius-pill)",
                  padding: "1px 8px",
                }}
              >
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
