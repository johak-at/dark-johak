/* @ds-bundle: {"format":3,"namespace":"JOHAKDesignSystem_350c1a","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"f3a3069a065f","components/core/Avatar.jsx":"3747c1686de3","components/core/Badge.jsx":"3d7fc8297050","components/core/Button.jsx":"3121e103b83f","components/core/Card.jsx":"1442185a503f","components/feedback/Alert.jsx":"4392075add6b","components/forms/Checkbox.jsx":"25cd322ae1fb","components/forms/Input.jsx":"7e4e639f7197","components/forms/Switch.jsx":"850701e99f1a","components/navigation/Tabs.jsx":"80649fb1b90f","ui_kits/website/Hero.jsx":"a8f01c441aee","ui_kits/website/Programs.jsx":"db18a53040e3","ui_kits/website/Sections.jsx":"4eb78cb8c427","ui_kits/website/SiteHeader.jsx":"f4dc11e9aec4","ui_kits/website/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JOHAKDesignSystem_350c1a = window.JOHAKDesignSystem_350c1a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Logo — renders the official lockups from /assets/logos.
 * `basePath` should point to the assets/logos directory relative to the host page.
 */
function Logo({
  variant = "horizontal",
  // horizontal | horizontalClaim | vertical | verticalClaim | signet | white
  basePath = "assets/logos",
  height = 48,
  alt = "JO.HAK Handelsakademie",
  style = {},
  ...rest
}) {
  const files = {
    horizontal: "johak-horizontal.svg",
    horizontalClaim: "johak-horizontal-claim.svg",
    vertical: "johak-vertical.svg",
    verticalClaim: "johak-vertical-claim.svg",
    signet: "johak-signet.svg",
    white: "johak-vertical-white.svg"
  };
  const src = `${basePath}/${files[variant] || files.horizontal}`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Avatar — user / student initials or image.
 * Falls back to initials on a brand-tinted background.
 */
function Avatar({
  name = "",
  src = null,
  size = "md",
  tone = "petrol",
  square = false,
  style = {},
  ...rest
}) {
  const sizes = {
    xs: 26,
    sm: 34,
    md: 44,
    lg: 56,
    xl: 76
  };
  const px = sizes[size] || sizes.md;
  const tones = {
    petrol: ["var(--petrol-100)", "var(--petrol-600)"],
    sky: ["var(--sky-100)", "var(--petrol-500)"],
    red: ["var(--red-100)", "var(--red-500)"],
    amber: ["var(--amber-100)", "var(--amber-600)"],
    navy: ["var(--neutral-200)", "var(--johak-navy)"]
  };
  const [bg, fg] = tones[tone] || tones.petrol;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(n => n[0]?.toUpperCase()).join("");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Badge — compact status / category label.
 * tones: neutral, primary, accent, highlight, sky, success, warning, error, info
 * variant: soft (default) | solid | outline
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  size = "md",
  style = {},
  ...rest
}) {
  const palette = {
    neutral: ["var(--neutral-100)", "var(--neutral-700)", "var(--neutral-300)"],
    primary: ["var(--color-primary-soft)", "var(--color-primary)", "var(--petrol-300)"],
    accent: ["var(--color-accent-soft)", "var(--red-500)", "var(--red-300)"],
    highlight: ["var(--color-highlight-soft)", "var(--amber-600)", "var(--amber-400)"],
    sky: ["var(--sky-100)", "var(--petrol-500)", "var(--sky-400)"],
    success: ["var(--color-success-soft)", "var(--color-success)", "var(--color-success)"],
    warning: ["var(--color-warning-soft)", "var(--amber-600)", "var(--amber-400)"],
    error: ["var(--color-error-soft)", "var(--red-500)", "var(--red-300)"],
    info: ["var(--color-info-soft)", "var(--color-info)", "var(--petrol-300)"]
  };
  const [soft, fg, ring] = palette[tone] || palette.neutral;
  const sizes = {
    sm: {
      padding: "2px 8px",
      fontSize: "var(--text-2xs)"
    },
    md: {
      padding: "4px 11px",
      fontSize: "var(--text-xs)"
    },
    lg: {
      padding: "6px 14px",
      fontSize: "var(--text-sm)"
    }
  };
  const variants = {
    soft: {
      background: soft,
      color: fg,
      border: "1px solid transparent"
    },
    solid: {
      background: fg,
      color: "var(--neutral-0)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: fg,
      border: `1px solid ${ring}`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Button — primary action component.
 * Variants: primary (petrol), accent (signal red), highlight (amber),
 *           secondary (outline), ghost, inverse (on dark).
 */
function Button({
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
    sm: {
      padding: "8px 16px",
      fontSize: "var(--text-sm)",
      gap: "6px",
      minHeight: "36px"
    },
    md: {
      padding: "11px 22px",
      fontSize: "var(--text-base)",
      gap: "8px",
      minHeight: "44px"
    },
    lg: {
      padding: "15px 30px",
      fontSize: "var(--text-md)",
      gap: "10px",
      minHeight: "52px"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "2px solid var(--color-primary)"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "2px solid var(--color-accent)"
    },
    highlight: {
      background: "var(--color-highlight)",
      color: "var(--color-on-highlight)",
      border: "2px solid var(--color-highlight)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid transparent"
    },
    inverse: {
      background: "var(--neutral-0)",
      color: "var(--color-primary)",
      border: "2px solid var(--neutral-0)"
    }
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
    ...style
  };
  const handleEnter = e => {
    if (disabled) return;
    e.currentTarget.style.filter = "brightness(0.93)";
    if (variant === "secondary" || variant === "ghost") {
      e.currentTarget.style.background = "var(--neutral-100)";
    }
  };
  const handleLeave = e => {
    if (disabled) return;
    e.currentTarget.style.filter = "none";
    if (variant === "secondary" || variant === "ghost") {
      e.currentTarget.style.background = "transparent";
    }
  };
  const handleDown = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
  };
  const handleUp = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(1)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    onMouseDown: handleDown,
    onMouseUp: handleUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Card — primary content container.
 * Soft rounded corners, low cool shadow, optional accent edge that nods to
 * the four-colour signet (top accent bar).
 */
function Card({
  children,
  elevation = "sm",
  accent = null,
  // null | "petrol" | "sky" | "red" | "amber" | "signet"
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
    lg: "var(--shadow-lg)"
  };
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  };
  const accentColors = {
    petrol: "var(--johak-petrol)",
    sky: "var(--johak-sky)",
    red: "var(--johak-red)",
    amber: "var(--johak-amber)",
    signet: "linear-gradient(90deg, var(--johak-petrol) 0% 25%, var(--johak-sky) 25% 50%, var(--johak-red) 50% 75%, var(--johak-amber) 75% 100%)"
  };
  const handleEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const handleLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = shadows[elevation];
    e.currentTarget.style.transform = "translateY(0)";
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    style: {
      position: "relative",
      background: "var(--color-surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-card)",
      boxShadow: shadows[elevation],
      padding: pads[padding],
      overflow: "hidden",
      transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "5px",
      background: accentColors[accent] || accentColors.petrol
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Alert — inline message banner.
 * tone: info (petrol) | success | warning | error | neutral
 */
function Alert({
  children,
  title,
  tone = "info",
  onClose,
  icon,
  style = {},
  ...rest
}) {
  const palette = {
    info: ["var(--color-info-soft)", "var(--color-info)", "var(--petrol-700)"],
    success: ["var(--color-success-soft)", "var(--color-success)", "#0c5c3e"],
    warning: ["var(--color-warning-soft)", "var(--amber-500)", "var(--amber-600)"],
    error: ["var(--color-error-soft)", "var(--color-error)", "var(--red-600)"],
    neutral: ["var(--neutral-100)", "var(--neutral-500)", "var(--text-strong)"]
  };
  const [bg, accent, fg] = palette[tone] || palette.info;
  const defaultIcons = {
    info: "i",
    success: "✓",
    warning: "!",
    error: "✕",
    neutral: "•"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      background: bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${accent}`,
      padding: "14px 16px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
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
      marginTop: 1
    }
  }, icon || defaultIcons[tone]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-base)",
      color: fg,
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--leading-normal)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Schlie\xDFen",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 18,
      lineHeight: 1,
      padding: 2
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Checkbox — petrol fill when checked, with a crisp check glyph.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || `johak-cb-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "checkbox",
    "aria-checked": checked,
    id: cbId,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === " ") {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: checked ? "1.5px solid var(--color-primary)" : "1.5px solid var(--border-strong)",
      background: checked ? "var(--color-primary)" : "var(--color-surface)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Input — single-line text field.
 * Supports label, hint, error, leading/trailing adornments.
 */
function Input({
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
    sm: {
      padding: "8px 12px",
      fontSize: "var(--text-sm)",
      minHeight: "38px"
    },
    md: {
      padding: "11px 14px",
      fontSize: "var(--text-base)",
      minHeight: "46px"
    },
    lg: {
      padding: "14px 16px",
      fontSize: "var(--text-md)",
      minHeight: "54px"
    }
  };
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? "var(--color-error)" : focused ? "var(--color-primary)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
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
      opacity: disabled ? 0.6 : 1
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: sizes[size].fontSize,
      color: "var(--text-strong)",
      ...style
    }
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-muted)"
    }
  }, trailing)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--color-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Switch — boolean toggle. Petrol track when on.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = "md",
  id,
  style = {},
  ...rest
}) {
  const switchId = id || `johak-switch-${Math.random().toString(36).slice(2, 8)}`;
  const dims = {
    sm: {
      w: 38,
      h: 22,
      knob: 16
    },
    md: {
      w: 48,
      h: 28,
      knob: 22
    }
  }[size] || {
    w: 48,
    h: 28,
    knob: 22
  };
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    id: switchId,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      position: "relative",
      width: dims.w,
      height: dims.h,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--color-primary)" : "var(--neutral-300)",
      transition: "background var(--duration-base) var(--ease-standard)",
      flex: "none"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.knob) / 2,
      left: checked ? dims.w - dims.knob - (dims.h - dims.knob) / 2 : (dims.h - dims.knob) / 2,
      width: dims.knob,
      height: dims.knob,
      borderRadius: "50%",
      background: "var(--neutral-0)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * JO.HAK Tabs — underline-style tab switcher.
 * items: [{ id, label, badge? }]
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1.5px solid var(--border)",
      ...style
    }
  }, rest), items.map(item => {
    const isActive = item.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(item.id),
      style: {
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
        transition: "color var(--duration-base) var(--ease-standard)"
      }
    }, item.label, item.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-2xs)",
        fontWeight: "var(--fw-semibold)",
        background: isActive ? "var(--color-primary-soft)" : "var(--neutral-100)",
        color: isActive ? "var(--color-primary)" : "var(--text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 8px"
      }
    }, item.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */
// JO.HAK website — hero with anmeldung + video CTA over a photo slot.
const {
  Button,
  Badge
} = window.JOHAKDesignSystem_350c1a;
function Hero({
  onAnmelden,
  onVideo
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      background: "var(--johak-navy)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "johak-hero",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    shape: "rect",
    fit: "cover",
    placeholder: "Hero-Foto (Sch\xFCler:innen / Schulgeb\xE4ude)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(100deg, rgba(16,33,41,0.92) 0%, rgba(16,33,41,0.78) 38%, rgba(16,33,41,0.25) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-10) var(--space-6)",
      minHeight: 520,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sky",
    variant: "solid",
    style: {
      alignSelf: "flex-start",
      marginBottom: 22
    }
  }, "BHAK / BHAS \xB7 St. Johann im Pongau"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      margin: "0 0 8px",
      color: "#fff",
      maxWidth: "16ch"
    }
  }, "Gemeinsam Zukunft bilden"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 40,
      color: "var(--sky-300)",
      margin: "0 0 26px",
      lineHeight: 1
    }
  }, "die erste Adresse f\xFCr Wirtschaftskompetenz"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "rgba(255,255,255,0.82)",
      maxWidth: "48ch",
      margin: "0 0 34px"
    }
  }, "Die Anmeldung f\xFCr das Schuljahr 2026/27 ist ge\xF6ffnet. Lerne unsere drei Ausbildungszweige kennen und sichere dir deinen Platz."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onAnmelden
  }, "Jetzt anmelden"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(PlayIcon, null),
    onClick: onVideo
  }, "Schau dir das Video an"))));
}
function PlayIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "6 4 20 12 6 20 6 4"
  }));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
/* global React */
// JO.HAK website — three Ausbildungszweige + "Our spirit" section.
const {
  Button
} = window.JOHAKDesignSystem_350c1a;
const PROGRAMS = [{
  key: "business",
  name: "BUSINESS plus.HAK",
  claim: "Be first in management",
  grad: "linear-gradient(150deg, var(--petrol-600), var(--johak-petrol))",
  text: "Die BUSINESS plus.HAK vermittelt betriebswirtschaftliches Knowhow und umfassende Allgemeinbildung. Durch Projekte mit Unternehmen und zeitgemäße IT-Ausstattung erlangst du unternehmerische Handlungskompetenz."
}, {
  key: "it",
  name: "IT.HAK",
  claim: "Go digital native",
  grad: "linear-gradient(150deg, var(--red-500), var(--johak-red))",
  text: "Die Zukunft der Wirtschaft wird digital sein. Die IT.HAK bereitet dich auf Berufe in der digitalen Welt vor, die hohe Wirtschafts- und Technologiekompetenzen verlangen."
}, {
  key: "praxis",
  name: "PRAXIS.HAS",
  claim: "You can do it.",
  grad: "linear-gradient(150deg, var(--amber-500), var(--johak-amber))",
  text: "Die PRAXIS.HAS ist eine dreijährige mittlere Schule. Sie bietet eine solide wirtschaftliche Ausbildung, bei der praxisorientiertes Arbeiten im Vordergrund steht."
}];
function Programs() {
  return /*#__PURE__*/React.createElement("section", {
    id: "ausbildung",
    style: {
      background: "var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "johak-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Unsere Ausbildung"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: 0,
      color: "var(--text-strong)"
    }
  }, "Drei Zweige, eine Zukunft")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.key,
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.grad,
      padding: "var(--space-7) var(--space-6)",
      color: "#fff",
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: "var(--text-xl)",
      letterSpacing: "-0.01em"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 30,
      marginTop: 6,
      opacity: 0.95
    }
  }, p.claim)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      padding: "var(--space-6)",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      border: "1px solid var(--border)",
      borderTop: "none",
      borderBottomLeftRadius: "var(--radius-xl)",
      borderBottomRightRadius: "var(--radius-xl)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.6,
      margin: "0 0 20px",
      flex: 1
    }
  }, p.text), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      alignSelf: "flex-start",
      paddingLeft: 0,
      paddingRight: 0
    }
  }, "Mehr erfahren \u2192")))))));
}
function Spirit() {
  return /*#__PURE__*/React.createElement("section", {
    id: "schule",
    style: {
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "johak-spirit",
    style: {
      width: "100%",
      height: 380
    },
    shape: "rounded",
    radius: "26",
    placeholder: "Foto: Schulalltag / Team"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "johak-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Our spirit \xB7 our goals"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: "0 0 18px",
      color: "var(--text-strong)",
      textTransform: "uppercase",
      letterSpacing: "-0.01em"
    }
  }, "Gemeinsam", /*#__PURE__*/React.createElement("br", null), "Zukunft bilden."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      lineHeight: 1.7,
      margin: "0 0 16px"
    }
  }, "Die HAK ist eine berufsbildende h\xF6here Schule. Sie dient der kaufm\xE4nnischen Berufsausbildung f\xFCr alle Zweige der Wirtschaft und des \xF6ffentlichen Dienstes. Die Wirtschaft braucht ", /*#__PURE__*/React.createElement("strong", null, "DICH!")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)",
      lineHeight: 1.7,
      margin: 0
    }
  }, "Wirtschaftskompetenz, beste IT-Kenntnisse, mehrsprachige Kommunikation und fundierte Allgemeinbildung machen dich zu einer gefragten Mitarbeiterin / einem gefragten Mitarbeiter."), /*#__PURE__*/React.createElement("span", {
    className: "johak-accent-bar",
    style: {
      width: 120,
      height: 8,
      marginTop: 26
    }
  }))));
}
Object.assign(window, {
  Programs,
  Spirit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* global React */
// JO.HAK website — "NEWS SPACE." grid + footer.
const {
  Button,
  Logo,
  Badge
} = window.JOHAKDesignSystem_350c1a;
const NEWS = [{
  id: "n1",
  cat: "Erfolg",
  title: "3. Rang beim diploma-thesis-award der KSW Salzburg"
}, {
  id: "n2",
  cat: "Schulleben",
  title: "Zeugnisverteilung 3AHS"
}, {
  id: "n3",
  cat: "Erasmus+",
  title: "Erasmus Projekt in Riva"
}, {
  id: "n4",
  cat: "Sport",
  title: "JO.HAK glänzt beim Lidl Schullauf im USZ Rif"
}, {
  id: "n5",
  cat: "Entrepreneurship",
  title: "Raiffeisen Finanzakademie"
}, {
  id: "n6",
  cat: "Anmeldung",
  title: "Anmeldung Schuljahr 2026/27"
}];
function News() {
  return /*#__PURE__*/React.createElement("section", {
    id: "aktuelles",
    style: {
      background: "var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 36,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: 0,
      color: "var(--text-strong)",
      textTransform: "uppercase",
      letterSpacing: "-0.01em"
    }
  }, "News Space."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Alle News")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)"
    }
  }, NEWS.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    style: {
      textDecoration: "none",
      display: "block",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      border: "1px solid var(--border)",
      background: "var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `johak-${n.id}`,
    style: {
      width: "100%",
      height: 230,
      display: "block"
    },
    shape: "rect",
    fit: "cover",
    placeholder: `Foto · ${n.cat}`
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid",
    size: "sm",
    style: {
      position: "absolute",
      left: 14,
      top: 14
    }
  }, n.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)",
      margin: "0 0 10px",
      color: "var(--text-strong)",
      lineHeight: 1.25
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--color-primary)"
    }
  }, "Read more \u2192")))))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    id: "kontakt",
    style: {
      background: "var(--johak-ink)",
      color: "rgba(255,255,255,0.66)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    basePath: "../../assets/logos",
    height: 104
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: 30,
      color: "#fff",
      margin: "18px 0 0"
    }
  }, "Gemeinsam Zukunft bilden")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      marginBottom: 14
    }
  }, "Kontakt"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.8
    }
  }, "BHAK / BHAS St. Johann im Pongau", /*#__PURE__*/React.createElement("br", null), "5600 St. Johann im Pongau", /*#__PURE__*/React.createElement("br", null), "office@johak.at")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      marginBottom: 14
    }
  }, "Schule"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      fontSize: 14,
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("li", null, "Anmeldung"), /*#__PURE__*/React.createElement("li", null, "Komm schnuppern!"), /*#__PURE__*/React.createElement("li", null, "Downloads"), /*#__PURE__*/React.createElement("li", null, "JO.HAK Team")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.12)",
      padding: "18px var(--space-6)",
      textAlign: "center",
      fontSize: 12,
      color: "rgba(255,255,255,0.45)"
    }
  }, "\xA9 2026 BHAK/BHAS St. Johann im Pongau \xB7 Kontakt \xB7 Impressum \xB7 Datenschutz \xB7 Barrierefreiheit"));
}
Object.assign(window, {
  News,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
/* global React */
// JO.HAK website — utility bar + main navigation (faithful to johak.at IA).
const {
  Button,
  Logo
} = window.JOHAKDesignSystem_350c1a;
function SocialIcon({
  name
}) {
  const paths = {
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    youtube: "M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
  };
  if (name === "instagram") {
    return /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.5",
      y2: "6.5"
    }));
  }
  if (name === "youtube") {
    return /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: paths.youtube
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",
      fill: "#fff"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: paths.facebook
  }));
}
function SiteHeader({
  onAnmelden
}) {
  const [hover, setHover] = React.useState(null);
  const nav = [{
    id: "aktuelles",
    label: "Aktuelles",
    sub: ["News", "Termine"]
  }, {
    id: "ausbildung",
    label: "Ausbildung",
    sub: ["Information", "BUSINESS plus.HAK", "IT.HAK", "PRAXIS.HAS"]
  }, {
    id: "schule",
    label: "Schule",
    sub: ["JO.HAK Team", "Klassen", "Anmeldung", "Downloads", "Entrepreneurship"]
  }, {
    id: "kontakt",
    label: "Kontakt",
    sub: null
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--johak-navy)",
      color: "rgba(255,255,255,0.8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 38,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, ["facebook", "instagram", "youtube"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: "rgba(255,255,255,0.8)",
      display: "flex"
    },
    "aria-label": s
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    name: s
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: "rgba(255,255,255,0.2)"
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--sky-300)",
      fontSize: 13,
      fontWeight: 600,
      fontFamily: "var(--font-display)",
      textDecoration: "none",
      letterSpacing: ".03em"
    }
  }, "WebUntis \u2197"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.94)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    basePath: "../../assets/logos",
    height: 44
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    style: {
      position: "relative"
    },
    onMouseEnter: () => setHover(n.id),
    onMouseLeave: () => setHover(null)
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-base)",
      color: hover === n.id ? "var(--color-primary)" : "var(--text-strong)",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, n.label, n.sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      opacity: 0.6
    }
  }, "\u25BE")), n.sub && hover === n.id && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 8,
      minWidth: 220,
      background: "var(--color-surface)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--border)",
      padding: 8,
      overflow: "hidden"
    }
  }, n.sub.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      display: "block",
      padding: "9px 12px",
      borderRadius: "var(--radius-sm)",
      fontSize: 14,
      color: "var(--text-body)",
      textDecoration: "none",
      fontFamily: "var(--font-body)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--color-primary-soft)";
      e.currentTarget.style.color = "var(--color-primary)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "var(--text-body)";
    }
  }, s)))))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: onAnmelden
  }, "Anmeldung 26/27"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
