# Mobilian Design System

> **IoT 서비스 공작소** — an embedded-hardware + protocol-software company that supports the full lifecycle of EV-charging infrastructure: development, testing, and operation. (Plus an education / maker line.)
> Web: mobilian.biz

**Core message:** *We solve EV-charging-infrastructure quality problems with data and automated test results — not gut feel.*

This is the brand's design system: tokens, fonts, reusable React components, foundation specimen cards, and product UI kits. An automated compiler bundles the components and indexes the styles; consumers link the single root `styles.css` and read components from `window.MobilianDesignSystem_c0938f`.

---

## ⚠️ Substitutions & open questions (please confirm)

This system was built from a **motorsport-engineering aesthetic brief** (a BMW M analysis) applied to Mobilian. Because that source brand's assets are trademarked, Mobilian gets its **own** identity in the same spirit. Flagging the judgment calls:

- **Fonts are substitutes.** No Mobilian brand font was provided. I chose **Saira** (engineered display), **IBM Plex Sans** (light body), and **IBM Plex Mono** (technical readouts) from Google Fonts — they read "European-engineered / embedded" and pair well. *If Mobilian has a licensed brand typeface, send the files and I'll swap them in.* (The compiler reports 0 self-hosted fonts because these load from Google's CDN via `@import`.)
- **The accent is a 3-phase "current stripe," not a motorsport tricolor.** Instead of copying the M tricolor, Mobilian's signature is a teal → electric-blue → green band evoking **3-phase EV power (L1/L2/L3)** and charge states — domain-relevant and ownable. Confirm you like this direction.
- **No photography shipped.** The system is photography-led but I have no Mobilian imagery. Every image is a `PhotoSlot` placeholder. *Please provide real photography* (chargers, test benches, lab/track validation, the maker robots) and I'll drop it in.
- **The logo is a working wordmark**, not a final logo — a current-mark glyph + "MOBILIAN" in Saira. Replace with the official logo when available.

---

## Brand context — five business axes

Mobilian is not a single-product company. Five axes share technology and market synergy:

| Axis | What it does | Flagship output |
|---|---|---|
| **Education · Maker** | Builds embedded + AI skills | ELIO, MUSA, neoFlash (kids' coding robots) |
| **Charging infrastructure** | Builds & operates chargers | OCPP + V2G + KVAS firmware |
| **Vehicle · Simulation** | Validates without a real car | PEV/EVSE simulators, S3 board |
| **Test · Diagnostics** | Verifies standards compliance | EVCT tester, HIL, GUI |
| **Platform** | Productizes field diagnostics | Cloud + app + service matching |

**Core customers:** charger manufacturers · charge-point operators (CPO) · certification / test labs · education & makers.

---

## CONTENT FUNDAMENTALS

The voice is **engineered, exact, and quietly confident** — European-engineering, never American-bombastic. It sells proof, not hype.

- **Casing:** Display headlines are **UPPERCASE** (`CHARGE WITH PROOF`). Body and intro copy are sentence case. The UPPERCASE/sentence split is a deliberate brand-voice signal, not decoration.
- **Person:** Speaks as **"we"** about the company's capability; addresses the customer as **"you"** sparingly. Mostly the copy is declarative and impersonal — it states facts and results ("412/412 cases passed"), which is itself the brand argument.
- **Tone:** Precise and technical without being cold. Protocol names (OCPP 2.0.1, ISO 15118-20, KVAS) and hard numbers are used *as copy* — they carry credibility. Data is the rhetoric.
- **Sentence shape:** Short. Verb-first. Cuts qualifiers. "Tested, not guessed." "Charge with proof." Avoid marketing adjectives ("revolutionary," "seamless").
- **Numbers & units:** Always concrete and mono-set when they're data (`22.4 kW`, `99.95%`, `412/412`). Units are muted next to the value.
- **Emoji:** Not used in the serious infrastructure/test surfaces. The Education · Maker line may use a single restrained energy glyph (⚡) on action buttons only — never decorative emoji cards.
- **Bilingual:** Korean and English coexist (tagline "IoT 서비스 공작소"). Keep Korean for brand/identity lines; technical copy is comfortable in either.

**Example copy:**
- Hero: `CHARGE WITH PROOF` / "We solve charging-infrastructure quality with data and automated test results — not gut feel."
- Section eyebrow: `TEST & DIAGNOSTICS`
- Spec: `412/412 · EVCT cases passed · 0 fault`
- CTA: `EXPLORE PLATFORM →`

---

## VISUAL FOUNDATIONS

**Overall vibe:** a motorsport-engineering instrument panel. Near-black canvas, white machined type, electric-current accents. Restraint everywhere; energy comes from photography and the current stripe — never from gradients or decoration.

- **Color:** True-black canvas (`--canvas` #000) with a tight elevation ramp (`--surface-soft` → `--surface-card` → `--surface-elevated` → `--carbon`). Text is white `--ink`, cooling to `--body` (#b4b8bf) and `--muted` (#7c8088). The only chromatic energy is the electric/charge accents — `--electric` #2f80ff for actions, `--charge` #3ddc84 for confirm/charged states — plus the 3-phase stripe.
- **The 3-phase current stripe** (`--stripe-current`: teal #00e0c6 → electric #2f80ff → green #3ddc84) is the signature non-typographic element. Used at 4px as dividers, section markers, badge edges, tab underlines, and the logo mark. **Never** a button fill or page background.
- **Type:** Heavy condensed display (Saira 600/700, UPPERCASE, tight `-0.01em` tracking) against light body (IBM Plex Sans 300). Mono (IBM Plex Mono) for any technical readout. The weight + case contrast is the editorial signature. All-caps labels carry **0.14em** "machined" letterspacing.
- **Spacing:** 4px base. `--space-section` (96px) between major bands; `--space-lg` (24px) inside cards; generous and grid-aligned. Max content width 1440px to give photography room.
- **Backgrounds:** Pure black floor — **no gradients behind type, no atmospheric backdrops.** Depth comes from full-bleed photography (subject + lighting) and the surface elevation ramp. A barely-there `--carbon-texture` (1px 45° hatch) appears only on technical spec surfaces.
- **Borders:** 1px hairlines (`--hairline` #34373d on dark; `--hairline-strong` reads like a one-step elevation). Cards are defined by hairline + surface fill, **not** by shadow.
- **Shadows:** Essentially none. The system uses no drop shadows; depth is photographic + tonal. Protection gradients (bottom-up black) appear only over photography to seat captions.
- **Corner radius:** Binary. `--radius-none` (0px) on virtually everything — buttons, cards, inputs, spec cells. `--radius-full` only on circular icon controls (carousel arrows, charge toggle). Sharp rectangles read as engineered precision.
- **Cards:** Flat, 0-radius, hairline + surface fill, no shadow. Optional 3-phase stripe along the top edge for brand/certified moments. Lift 4px on hover.
- **Hover states:** Buttons brighten (`filter: brightness(1.12)`); cards translateY(-4px); nav/tab labels lighten from muted → ink. No color inversions.
- **Press states:** Buttons darken (`brightness(0.92)`). No shrink/scale bounce — motion stays precise.
- **Animation:** Minimal and machined. `--ease-precise` / `--ease-out`, 140–420ms. No bouncing, no springy overshoot. The only looping animation is the `StatusDot` charge-pulse (a thin expanding ring during an active session). Respects `prefers-reduced-motion`.
- **Transparency & blur:** Used sparingly — tinted accent fills (10% electric/charge) behind badges; protection gradients over photos. No glassmorphism / heavy backdrop-blur.
- **Imagery vibe:** Cool, high-contrast, technical — chargers, test benches, lab/track validation, carbon-fiber detail, cockpit/instrument shots. Edge-to-edge, native aspect ratio, never letterboxed. (Shipped as placeholders pending real assets.)

---

## ICONOGRAPHY

- **Primary set: Lucide** (CDN), chosen for its thin, even **2px stroke** that matches the engineered, machined feel. No filled/duotone icons — outline only, on a dark canvas in `--body`/`--ink`. Mobilian ships no proprietary icon font, so Lucide is the documented substitute; swap for an in-house set if one exists.
  - Load: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or use individual SVGs.
  - Sizing: 20px inline with body, 24px in nav/cards; stroke stays 2px (do not thicken).
- **The current-mark glyph** (three ascending bars in phase colors, `assets/mark-current.svg`) is the one brand "icon" — used as the logo lozenge and favicon. It is identity, not a UI icon.
- **Status uses dots, not icons** — the `StatusDot` colored dot (with charge-pulse) is the canonical charge-state indicator, not a glyph.
- **Emoji:** Avoided in infrastructure/test UI. A single ⚡ is permitted on charge/action buttons in the Education · Maker context. No emoji cards.
- **Unicode arrows** (`→`, `←`, `▾`) are used for link chevrons and select carets — consistent with the machined, low-chrome aesthetic.

---

## INDEX — what's in this project

**Root**
- `styles.css` — global entry point (import lines only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `assets/` — `logo-mobilian.svg`, `mark-current.svg`.
- `readme.md` — this guide. `SKILL.md` — portable Agent-Skill manifest.

**Components** (`window.MobilianDesignSystem_c0938f`)
- `components/buttons/` — **Button**, **IconButton**
- `components/data-display/` — **Card**, **SpecCell**, **Badge**, **StatusDot**, **Stripe**, **PhotoSlot**
- `components/forms/` — **Input**, **Select**
- `components/navigation/` — **TopNav**, **Tabs**

**Foundation cards** (Design System tab) — `guidelines/`: Colors (surfaces, electric/stripe, text, semantic/charge-state), Type (display, body, mono), Spacing (scale, radius), Brand (logo, stripe-in-use).

**UI kits** — `ui_kits/marketing/` — Mobilian marketing site (hero, capability grid, spec band, platform CTA).

**Slides** — `slides/` — motorsport-engineering deck sample (title, section, spec, quote).

**Starting points** — Button, Card, TopNav (components); marketing homepage (screen).
