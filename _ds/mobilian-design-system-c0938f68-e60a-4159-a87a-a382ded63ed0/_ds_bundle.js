/* @ds-bundle: {"format":3,"namespace":"MobilianDesignSystem_c0938f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"PhotoSlot","sourcePath":"components/data-display/PhotoSlot.jsx"},{"name":"SpecCell","sourcePath":"components/data-display/SpecCell.jsx"},{"name":"StatusDot","sourcePath":"components/data-display/StatusDot.jsx"},{"name":"Stripe","sourcePath":"components/data-display/Stripe.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"73151e08b5d1","components/buttons/IconButton.jsx":"161f731a7988","components/data-display/Badge.jsx":"d5188cccb1c1","components/data-display/Card.jsx":"18ff92c7ede8","components/data-display/PhotoSlot.jsx":"37297f2a62a3","components/data-display/SpecCell.jsx":"5a15ac0c2610","components/data-display/StatusDot.jsx":"9a5d68c520b1","components/data-display/Stripe.jsx":"9df728974c6d","components/forms/Input.jsx":"6de3d332ed95","components/forms/Select.jsx":"bca661c09078","components/navigation/Tabs.jsx":"00c6aa815a38","components/navigation/TopNav.jsx":"be52c8a68a14","ui_kits/marketing/CapabilityGrid.jsx":"861540a24d94","ui_kits/marketing/Hero.jsx":"1206f9e0f31f","ui_kits/marketing/PlatformCTA.jsx":"10dd8943da78","ui_kits/marketing/SpecBand.jsx":"0765c64281be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MobilianDesignSystem_c0938f = window.MobilianDesignSystem_c0938f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian Button — the engineered, 0-radius action control.
 * UPPERCASE, letterspaced label. Filled electric for primary actions,
 * outline over photography, ghost for inline links, charge-green for
 * confirm/charge actions.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  chevron = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 40,
      padding: "0 20px",
      font: 12
    },
    md: {
      height: 48,
      padding: "0 32px",
      font: 13
    },
    lg: {
      height: 56,
      padding: "0 40px",
      font: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--electric)",
      color: "var(--on-electric)",
      border: "1px solid var(--electric)"
    },
    charge: {
      background: "var(--charge)",
      color: "var(--on-accent)",
      border: "1px solid var(--charge)"
    },
    solid: {
      background: "var(--ink)",
      color: "var(--canvas)",
      border: "1px solid var(--ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid transparent",
      padding: "0 4px"
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      height: s.height,
      padding: v.padding || s.padding,
      borderRadius: "var(--radius-none)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--w-semibold)",
      fontSize: s.font,
      lineHeight: 1,
      textTransform: "uppercase",
      letterSpacing: "var(--track-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "filter var(--dur-fast) var(--ease-precise), opacity var(--dur-fast)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(1.12)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.92)";
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(1.12)";
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight, chevron && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-body)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian IconButton — the only non-rectangular control.
 * Circular, surface-card background, used for carousel arrows,
 * favorite, share, and other functional toggles.
 */
function IconButton({
  children,
  size = 48,
  variant = "surface",
  label,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    surface: {
      background: "var(--surface-card)",
      color: "var(--ink)",
      border: "1px solid var(--hairline)"
    },
    electric: {
      background: "var(--electric)",
      color: "#fff",
      border: "1px solid var(--electric)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--hairline)"
    }
  };
  const v = variants[variant] || variants.surface;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "filter var(--dur-fast) var(--ease-precise)",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(1.18)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian Badge — small machined all-caps marker.
 * Optional 3-phase stripe edge for certified/brand moments.
 */
function Badge({
  children,
  tone = "neutral",
  stripe = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--body-strong)",
      border: "1px solid var(--hairline)",
      background: "transparent"
    },
    electric: {
      color: "var(--electric-bright)",
      border: "1px solid var(--electric-dim)",
      background: "rgba(47,128,255,0.10)"
    },
    charge: {
      color: "var(--charge)",
      border: "1px solid var(--charge-dim)",
      background: "rgba(61,220,132,0.10)"
    },
    warning: {
      color: "var(--warning)",
      border: "1px solid var(--warning-dim)",
      background: "rgba(244,180,0,0.10)"
    },
    danger: {
      color: "var(--danger)",
      border: "1px solid var(--danger-dim)",
      background: "rgba(255,68,56,0.10)"
    },
    solid: {
      color: "var(--canvas)",
      border: "1px solid var(--ink)",
      background: "var(--ink)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: stripe ? "5px 12px 5px 16px" : "5px 12px",
      borderRadius: "var(--radius-none)",
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      overflow: "hidden",
      ...t,
      ...style
    }
  }, rest), stripe && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: "var(--stripe-current)"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian Card — flat surface card (no shadow, 0 radius).
 * Composes an optional media header, a machined eyebrow label, a
 * display title, body copy, and a footer slot. `surface` sits on a
 * card fill; `bare` is photo-on-black with no card chrome.
 */
function Card({
  eyebrow,
  title,
  children,
  media = null,
  footer = null,
  tone = "surface",
  stripe = false,
  hover = true,
  style = {},
  ...rest
}) {
  const surfaces = {
    surface: {
      background: "var(--surface-card)",
      border: "1px solid var(--hairline-strong)"
    },
    elevated: {
      background: "var(--surface-elevated)",
      border: "1px solid var(--hairline)"
    },
    bare: {
      background: "transparent",
      border: "none"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--hairline)"
    }
  };
  const t = surfaces[tone] || surfaces.surface;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: "var(--radius-none)",
      overflow: "hidden",
      transition: "transform var(--dur-mid) var(--ease-precise), border-color var(--dur-mid)",
      ...t,
      ...style
    },
    onMouseEnter: e => {
      if (hover) {
        e.currentTarget.style.transform = "translateY(-4px)";
      }
    },
    onMouseLeave: e => {
      if (hover) {
        e.currentTarget.style.transform = "none";
      }
    }
  }, rest), stripe && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      height: 4,
      width: "100%",
      background: "var(--stripe-current)"
    }
  }), media, (eyebrow || title || children) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: tone === "bare" ? "var(--space-md) 0 0" : "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      color: "var(--electric-bright)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--title-lg)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-display)",
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--body-md)",
      color: "var(--body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/PhotoSlot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian PhotoSlot — full-bleed imagery placeholder.
 * The system is photography-led, but ships no stock imagery. Use this
 * to reserve a crop (pass `src` to drop in real photography). Renders a
 * carbon-textured dark block with a machined caption when empty.
 */
function PhotoSlot({
  src,
  alt = "",
  ratio = "16/9",
  label = "Photography",
  caption,
  overlay = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: ratio,
      background: src ? `#000 center/cover no-repeat url(${src})` : "var(--carbon)",
      backgroundImage: src ? `url(${src})` : "var(--carbon-texture)",
      backgroundSize: src ? "cover" : "auto",
      backgroundPosition: "center",
      borderBottom: "1px solid var(--hairline-strong)",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      ...style
    },
    role: "img",
    "aria-label": alt || label
  }, rest), !src && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--muted)",
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 1,
      background: "var(--muted)"
    }
  }), label), (overlay || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      padding: "var(--space-md)",
      background: "linear-gradient(0deg, rgba(0,0,0,0.78), transparent)"
    }
  }, caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--caption)",
      color: "var(--body-strong)",
      letterSpacing: "0.04em"
    }
  }, caption)));
}
Object.assign(__ds_scope, { PhotoSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/PhotoSlot.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SpecCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian SpecCell — technical specification cell.
 * Large value (Saira) over a machined all-caps label. Used in 4-up
 * spec grids on product / model-detail surfaces.
 */
function SpecCell({
  value,
  unit,
  label,
  mono = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-soft)",
      border: "1px solid var(--hairline-strong)",
      padding: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      color: "var(--ink)",
      font: mono ? "var(--w-medium) 28px/1 var(--font-mono)" : "var(--w-bold) 32px/1 var(--font-display)",
      letterSpacing: mono ? "var(--track-mono)" : "var(--track-display)"
    }
  }, /*#__PURE__*/React.createElement("span", null, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--w-light) 15px/1 var(--font-body)",
      color: "var(--muted)"
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      color: "var(--muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { SpecCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SpecCell.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian StatusDot — EV charge-state indicator.
 * available (green) · charging (electric, pulses) · fault (red) · offline (grey).
 */
function StatusDot({
  state = "available",
  size = 9,
  label,
  pulse,
  style = {},
  ...rest
}) {
  const colors = {
    available: "var(--state-available)",
    charging: "var(--state-charging)",
    fault: "var(--state-fault)",
    offline: "var(--state-offline)"
  };
  const c = colors[state] || colors.offline;
  const doPulse = pulse ?? state === "charging";
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      background: c,
      flex: "none"
    }
  }, doPulse && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--radius-full)",
      background: c,
      animation: "mb-pulse 1.6s var(--ease-out) infinite"
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement(React.Fragment, null, dot, /*#__PURE__*/React.createElement("style", null, KEYFRAMES));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, rest), dot, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      color: "var(--body-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("style", null, KEYFRAMES));
}
const KEYFRAMES = `@keyframes mb-pulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.6);opacity:0}}`;
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stripe.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian Stripe — the 3-phase "current" signature.
 * A 4px tricolor band (L1 teal → L2 electric → L3 charge) used as a
 * divider, section marker, or brand-identity moment. Brand accent only —
 * never a button or background fill.
 */
function Stripe({
  height = 4,
  width = "100%",
  soft = false,
  vertical = false,
  style = {},
  ...rest
}) {
  const grad = soft ? "var(--stripe-current-soft)" : "var(--stripe-current)";
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "block",
      width: vertical ? height : width,
      height: vertical ? width : height,
      background: vertical ? soft ? "linear-gradient(180deg, var(--phase-1), var(--phase-2), var(--phase-3))" : "linear-gradient(180deg, var(--phase-1) 0 33.33%, var(--phase-2) 33.33% 66.66%, var(--phase-3) 66.66% 100%)" : grad,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Stripe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stripe.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian Input — 0-radius text field on dark surfaces.
 * Surface-card fill, hairline border that snaps to white on focus.
 * Supports an optional machined label and a mono variant for data entry.
 */
function Input({
  label,
  hint,
  error,
  mono = false,
  prefix,
  style = {},
  id,
  ...rest
}) {
  const inputId = id || (label ? `mb-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      color: "var(--body)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: 48,
      padding: "0 16px",
      background: "var(--surface-card)",
      border: `1px solid ${error ? "var(--danger)" : focused ? "var(--ink)" : "var(--hairline)"}`,
      borderRadius: "var(--radius-none)",
      transition: "border-color var(--dur-fast) var(--ease-precise)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      font: "var(--mono-sm)"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--ink)",
      font: mono ? "var(--mono-md)" : "var(--body-md)",
      letterSpacing: mono ? "var(--track-mono)" : "0",
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--caption)",
      color: error ? "var(--danger)" : "var(--muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mobilian Select — 0-radius native select styled to match Input.
 */
function Select({
  label,
  hint,
  options = [],
  style = {},
  id,
  ...rest
}) {
  const selId = id || (label ? `mb-sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      color: "var(--body)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    style: {
      width: "100%",
      height: 48,
      padding: "0 40px 0 16px",
      background: "var(--surface-card)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-none)",
      color: "var(--ink)",
      font: "var(--body-md)",
      appearance: "none",
      WebkitAppearance: "none",
      outline: "none",
      cursor: "pointer",
      ...style
    },
    onFocus: e => e.currentTarget.style.borderColor = "var(--ink)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--hairline)"
  }, rest), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val,
      style: {
        background: "#16181c"
      }
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--muted)",
      pointerEvents: "none",
      fontFamily: "var(--font-body)"
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--caption)",
      color: "var(--muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Mobilian Tabs — text-only category selector.
 * Machined all-caps labels; active gets white text + the current
 * stripe underline. No fill, no radius.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(value ?? items[0]?.value ?? items[0]);
  const active = value ?? internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-xl)",
      borderBottom: "1px solid var(--hairline-strong)",
      ...style
    }
  }, items.map(it => {
    const val = typeof it === "string" ? it : it.value;
    const lbl = typeof it === "string" ? it : it.label;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(val),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 14px",
        font: "var(--label-upper)",
        textTransform: "uppercase",
        letterSpacing: "var(--track-label)",
        color: on ? "var(--ink)" : "var(--muted)",
        transition: "color var(--dur-fast) var(--ease-precise)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--body)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--muted)";
      }
    }, lbl, on && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        background: "var(--stripe-current)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
/**
 * Mobilian TopNav — black 64px nav bar pinned to the top.
 * Current-mark glyph + MOBILIAN wordmark at left, sentence-case menu,
 * right-side action cluster.
 */
function TopNav({
  items = [],
  active,
  cta = null,
  right = null,
  onNavigate,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xl)",
      padding: "0 var(--space-xl)",
      background: "var(--canvas)",
      borderBottom: "1px solid var(--hairline-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 3,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 5,
      height: 15,
      background: "var(--phase-1)"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 5,
      height: 19,
      background: "var(--phase-2)"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 5,
      height: 24,
      background: "var(--phase-3)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--w-bold) 20px/1 var(--font-display)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, "Mobilian")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      marginLeft: "var(--space-md)"
    }
  }, items.map(it => {
    const val = typeof it === "string" ? it : it.value;
    const lbl = typeof it === "string" ? it : it.label;
    const on = val === active;
    return /*#__PURE__*/React.createElement("a", {
      key: val,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(val);
      },
      style: {
        font: "var(--w-regular) 14px/1.4 var(--font-body)",
        color: on ? "var(--ink)" : "var(--body)",
        textDecoration: "none",
        letterSpacing: "0.01em",
        transition: "color var(--dur-fast)"
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--ink)",
      onMouseLeave: e => e.currentTarget.style.color = on ? "var(--ink)" : "var(--body)"
    }, lbl);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)"
    }
  }, right, cta));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CapabilityGrid.jsx
try { (() => {
/* Mobilian marketing — five business axes, filterable. */
const CG_DS = window.MobilianDesignSystem_c0938f;
const MB_AXES = [{
  cat: "Education",
  eyebrow: "Education · Maker",
  title: "Coding robots",
  body: "ELIO, MUSA & neoFlash — kids' robots that build embedded + AI skills from the ground up.",
  link: "Meet the robots"
}, {
  cat: "Charging",
  eyebrow: "Charge Infrastructure",
  title: "OCPP + V2G firmware",
  body: "Production charger firmware with V2G and KVAS conformance built in, fleet-tested at scale.",
  link: "Explore firmware"
}, {
  cat: "Simulation",
  eyebrow: "Vehicle · Simulation",
  title: "PEV / EVSE simulators",
  body: "Validate chargers without a real vehicle. The S3 board emulates the car so you don't have to ship one.",
  link: "See simulators"
}, {
  cat: "Testing",
  eyebrow: "Test · Diagnostics",
  title: "EVCT conformance tester",
  body: "Automated standards conformance with HIL and a GUI — proof a charger meets the spec, case by case.",
  link: "View test bench"
}, {
  cat: "Platform",
  eyebrow: "Platform",
  title: "Field diagnostics cloud",
  body: "Productized field diagnostics — cloud + app + service matching that turns a fault into a dispatch.",
  link: "Tour the platform"
}];
function CapabilityGrid() {
  const {
    Card,
    Tabs,
    Button,
    PhotoSlot
  } = CG_DS;
  const [cat, setCat] = React.useState("All");
  const tabs = ["All", "Education", "Charging", "Simulation", "Testing", "Platform"];
  const shown = cat === "All" ? MB_AXES : MB_AXES.filter(a => a.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Capabilities",
    style: {
      background: "var(--canvas)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      color: "var(--electric-bright)"
    }
  }, "Five axes, one stack"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-lg)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-display)",
      margin: "12px 0 0",
      maxWidth: 720
    }
  }, "The full charging lifecycle")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    chevron: true
  }, "All capabilities")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: tabs,
    value: cat,
    onChange: setCat
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-lg)"
    }
  }, shown.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.title,
    tone: "surface",
    stripe: a.cat === "Charging",
    eyebrow: a.eyebrow,
    title: a.title,
    media: /*#__PURE__*/React.createElement(PhotoSlot, {
      ratio: "16/10",
      label: a.cat
    }),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      chevron: true
    }, a.link)
  }, a.body)))));
}
window.CapabilityGrid = CapabilityGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CapabilityGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Mobilian marketing — Hero band. Full-bleed photo, machined headline. */
const DS = window.MobilianDesignSystem_c0938f;
function Hero() {
  const {
    Button,
    Badge,
    PhotoSlot,
    StatusDot
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: "relative",
      background: "var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 600,
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "auto",
    label: "EV charging infrastructure",
    style: {
      height: "100%",
      aspectRatio: "auto",
      borderBottom: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(0deg, rgba(0,0,0,0.9), transparent 40%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1440,
      margin: "0 auto",
      width: "100%",
      padding: "0 var(--space-xl) var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 4,
      width: 120,
      background: "var(--stripe-current)",
      display: "block",
      marginBottom: "var(--space-lg)"
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "charge",
    stripe: true,
    style: {
      marginBottom: "var(--space-lg)"
    }
  }, "EV Charging Infrastructure"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--display-xl)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-display)",
      maxWidth: 900,
      margin: "0 0 var(--space-lg)"
    }
  }, "Charge with proof"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body-lg)",
      color: "var(--body-strong)",
      maxWidth: 580,
      margin: "0 0 var(--space-xl)"
    }
  }, "We solve EV-charging-infrastructure quality with data and automated test results \u2014 not gut feel. Embedded hardware, protocol software, and the platform that ties them together."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    chevron: true
  }, "Explore platform"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Book a test session")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--hairline-strong)",
      borderBottom: "1px solid var(--hairline-strong)",
      background: "var(--surface-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      display: "flex",
      gap: "var(--space-xl)",
      padding: "var(--space-md) var(--space-xl)",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--mono-sm)",
      color: "var(--muted)",
      letterSpacing: "var(--track-mono)"
    }
  }, "LIVE FLEET"), /*#__PURE__*/React.createElement(StatusDot, {
    state: "charging",
    label: "1,284 charging"
  }), /*#__PURE__*/React.createElement(StatusDot, {
    state: "available",
    label: "6,902 available"
  }), /*#__PURE__*/React.createElement(StatusDot, {
    state: "fault",
    label: "11 fault"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--mono-sm)",
      color: "var(--body)"
    }
  }, "uptime ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--charge)"
    }
  }, "99.95%"), " \xB7 OCPP 2.0.1 \xB7 ISO 15118-20"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/PlatformCTA.jsx
try { (() => {
/* Mobilian marketing — pre-footer CTA band + footer. */
const FT_DS = window.MobilianDesignSystem_c0938f;
function PlatformCTA() {
  const {
    Button,
    PhotoSlot
  } = FT_DS;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "CTA",
    style: {
      position: "relative",
      background: "var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 360,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "auto",
    label: "Charging at the track",
    style: {
      height: "100%",
      aspectRatio: "auto",
      borderBottom: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.66)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 4,
      width: 96,
      background: "var(--stripe-current)",
      display: "block",
      margin: "0 auto var(--space-lg)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-md)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-display)",
      margin: "0 0 var(--space-lg)"
    }
  }, "Build, test, operate \u2014 with proof"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    chevron: true
  }, "Talk to engineering"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Download spec sheet")))));
}
function SiteFooter() {
  const cols = [{
    h: "Products",
    items: ["OCPP firmware", "V2G + KVAS", "EVCT tester", "PEV / EVSE simulator", "S3 board"]
  }, {
    h: "Platform",
    items: ["Field diagnostics", "Operator console", "Service matching", "Mobile app"]
  }, {
    h: "Education",
    items: ["ELIO", "MUSA", "neoFlash", "Maker workshops"]
  }, {
    h: "Company",
    items: ["About Mobilian", "mobilian.biz", "Careers", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--canvas)",
      borderTop: "1px solid var(--hairline-strong)",
      padding: "var(--space-xxl) 0 var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
      gap: "var(--space-xl)",
      paddingBottom: "var(--space-xl)",
      borderBottom: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 28,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 17,
      background: "var(--phase-1)"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 22,
      background: "var(--phase-2)"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 28,
      background: "var(--phase-3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--w-bold) 22px/1 var(--font-display)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, "Mobilian"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--mono-sm)",
      color: "var(--muted)",
      marginTop: 8
    }
  }, "IoT \uC11C\uBE44\uC2A4 \uACF5\uC791\uC18C")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--label-upper)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      color: "var(--body-strong)",
      marginBottom: "var(--space-md)"
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: "var(--body-sm)",
      color: "var(--muted)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--body)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--muted)"
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "var(--space-lg)",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--caption)",
      color: "var(--muted)"
    }
  }, "\xA9 2026 Mobilian. EV-charging infrastructure, tested and proven."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--caption)",
      color: "var(--muted)"
    }
  }, "KO \xB7 EN"))));
}
window.PlatformCTA = PlatformCTA;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/PlatformCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SpecBand.jsx
try { (() => {
/* Mobilian marketing — proof band: spec grid on carbon + quote. */
const SB_DS = window.MobilianDesignSystem_c0938f;
function SpecBand() {
  const {
    SpecCell,
    Badge
  } = SB_DS;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Proof",
    style: {
      background: "var(--surface-soft)",
      borderTop: "1px solid var(--hairline-strong)",
      borderBottom: "1px solid var(--hairline-strong)",
      padding: "var(--space-section) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-xxl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "electric",
    style: {
      marginBottom: "var(--space-md)"
    }
  }, "Tested, not guessed"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--display-md)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-display)",
      margin: "0 0 var(--space-md)"
    }
  }, "Every charger, verified against the standard"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--body-md)",
      color: "var(--body)",
      maxWidth: 460,
      margin: 0
    }
  }, "Conformance is a number, not an opinion. Our EVCT bench runs the full case matrix \u2014 OCPP, V2G, and KVAS \u2014 and reports a result you can hand to a certification lab.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "var(--hairline-strong)",
      border: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement(SpecCell, {
    value: "412/412",
    label: "EVCT cases passed",
    mono: true
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: "22.4",
    unit: "kW",
    label: "Peak session"
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: "ISO 15118-20",
    label: "V2G stack",
    mono: true
  }), /*#__PURE__*/React.createElement(SpecCell, {
    value: "99.95",
    unit: "%",
    label: "Fleet uptime"
  })))));
}
window.SpecBand = SpecBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SpecBand.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PhotoSlot = __ds_scope.PhotoSlot;

__ds_ns.SpecCell = __ds_scope.SpecCell;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Stripe = __ds_scope.Stripe;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
