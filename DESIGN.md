---
version: alpha
name: Shuuk Design System
description: >
  Visual identity for shuuk — basketball league, team, and tournament
  software. Forked from Gumroad's open design system (community beta), with
  brand identity swapped to shuuk pink (#EE028B), display type changed to
  Plein, and brutalist hard-shadow primitives kept intact (they match the
  3x3 jam zine aesthetic).

colors:
  # Brand
  brand-pink: "#EE028B"
  brand-pink-subtle: "#FBE5F0"
  brand-pink-deep: "#CC0277"
  brand-pink-light: "#FF4FA8"

  # Surfaces (light theme)
  bg-body: "#F4F4F0"
  bg-filled: "#FFFFFF"
  bg-paper: "#F6F3EC"
  bg-backdrop: "#000000"

  # Surfaces (dark theme)
  bg-body-dark: "#08080A"
  bg-filled-dark: "#0F0F12"

  # Ink (text + foreground)
  ink: "#0A0A0A"
  ink-soft: "#242423"
  text-primary: "#000000"
  text-secondary: "#78716C"
  text-muted: "#808080"
  text-inverse: "#FFFFFF"
  text-disabled: "#B2B2B2"
  text-placeholder: "#808080"

  # Neutrals (light scale)
  neutral-100: "#E5E5E5"
  neutral-200: "#CCCCCC"
  neutral-300: "#B2B2B2"
  neutral-500: "#808080"
  neutral-1000: "#000000"

  # Neutrals (dark scale, inverted)
  neutral-dark-100: "#131313"
  neutral-dark-200: "#2C2C2C"
  neutral-dark-300: "#424242"
  neutral-dark-350: "#4D4D4D"
  neutral-dark-500: "#6F6F6F"
  neutral-dark-1000: "#DDDDDD"

  # Semantic — accent
  accent: "#EE028B"
  accent-subtle: "#FBE5F0"

  # Semantic — feedback
  success: "#23A094"
  success-subtle: "#D3F3F0"
  warning: "#FFC900"
  warning-subtle: "#FDF4D0"
  info: "#90A8ED"
  info-subtle: "#E9EEFA"
  danger: "#DC341E"
  danger-subtle: "#F8D6D2"

  # Borders
  border: "#CCCCCC"
  border-strong: "#000000"

typography:
  display:
    fontFamily: "Plein, 'Outfit', sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: "48px"
    letterSpacing: "-0.005em"
  display-bold:
    fontFamily: "Plein, 'Outfit', sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: "48px"
    letterSpacing: "-0.005em"
  heading-2:
    fontFamily: "Plein, 'Outfit', sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: "31.2px"
    letterSpacing: "0em"
  heading-2-bold:
    fontFamily: "Plein, 'Outfit', sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "31.2px"
    letterSpacing: "0em"
  heading-3:
    fontFamily: "Plein, 'Outfit', sans-serif"
    fontSize: "20px"
    fontWeight: 800
    lineHeight: "28px"
    letterSpacing: "0em"
  heading-3-bold:
    fontFamily: "Plein, 'Outfit', sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "26px"
    letterSpacing: "0em"
  body:
    fontFamily: "'Outfit', -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: "22.4px"
    letterSpacing: "0em"
  body-bold:
    fontFamily: "'Outfit', -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: "22.4px"
    letterSpacing: "0em"
  small:
    fontFamily: "'Outfit', -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 800
    lineHeight: "18.2px"
    letterSpacing: "0em"
  small-bold:
    fontFamily: "'Outfit', -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "18.2px"
    letterSpacing: "0em"
  caption:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: "14.4px"
    letterSpacing: "0.18em"
  caption-bold:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "14.4px"
    letterSpacing: "0.18em"

rounded:
  sm: "4px"
  lg: "8px"
  pill: "100px"
  full: "9999px"

spacing:
  0: "0"
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
  10: "40px"
  12: "48px"
  16: "64px"
  20: "80px"
  24: "96px"

motion:
  duration-instant: "0ms"
  duration-snap: "140ms"
  duration-medium: "240ms"
  duration-slow: "400ms"
  easing-default: "cubic-bezier(0.4, 0, 0.2, 1)"
  easing-out: "cubic-bezier(0, 0, 0.2, 1)"
  easing-out-expo: "cubic-bezier(0.16, 1, 0.3, 1)"
  hover-lift-distance: "4px"

focus:
  ring-color: accent
  ring-width: "2px"
  ring-offset: "2px"
  ring-style: solid

z:
  base: 0
  overlay: 1
  above-overlay: 2
  header: 3
  menubar: 10
  modal: 20
  tooltip: 30
  banner: 1100
  theme-toggle: 1500

components:
  # Buttons
  button-default:
    background: bg-filled
    color: ink
    border: border-strong
    border-width: "1px"
    radius: sm
    typography: body-bold
    padding-x: "16px"
    padding-y: "12px"
    height: "48px"
    transition: transform 140ms ease-out
    hover: lift-and-shadow
    active: reset
    disabled: opacity-30
  button-primary:
    background: brand-pink
    color: text-inverse
    border: brand-pink
    radius: sm
    typography: body-bold
    hover: lift-and-shadow
  button-outline:
    background: transparent
    color: ink
    border: border-strong
    radius: sm
    typography: body-bold
    hover: invert-fill-and-lift
  button-secondary:
    background: bg-filled
    color: ink
    border: border-strong
    radius: pill
    typography: body-bold
    hover: lift-and-shadow
  button-icon:
    width: "48px"
    height: "48px"
    radius: sm
    padding: "0"
  button-sm:
    padding-x: "8px"
    padding-y: "8px"
    typography: small-bold

  # Forms
  input:
    background: bg-filled
    color: ink
    border: border-strong
    border-width: "1px"
    radius: sm
    padding-x: "16px"
    padding-y: "12px"
    fontSize: "16px"
    height: "48px"
    placeholder-color: text-muted
    focus: ring-accent
  input-error:
    border: danger
    color: danger
    focus: ring-danger
  textarea:
    extends: input
    minHeight: "96px"
    resize: vertical
    line-height: "1.4"
  select:
    extends: input
    appearance: none-with-chevron
    chevron-color: text-secondary
  checkbox:
    size: "20px"
    radius: sm
    border: border-strong
    checked-background: brand-pink
    checked-mark: text-inverse
  radio:
    size: "20px"
    radius: full
    border: border-strong
    checked-dot: brand-pink
    checked-dot-size: "10px"
  switch:
    track-width: "44px"
    track-height: "24px"
    thumb-size: "20px"
    radius: full
    on-background: brand-pink
    off-background: neutral-300
  fieldset:
    gap: "16px"
    label-typography: small-bold
    label-color: ink
    helper-color: text-secondary
    helper-typography: small

  # Cards (the outline/shadow combo you like)
  card-outline:
    background: bg-filled
    color: ink
    border: border-strong
    border-width: "1px"
    radius: lg
    padding: "24px"
  card-outline-shadow:
    extends: card-outline
    shadow: hard-sm
    transition: transform 140ms ease-out
    hover: lift-and-grow-shadow
  card-paper:
    background: bg-paper
    color: ink
    border: border-strong
    shadow: hard-pink
  card-feature:
    extends: card-paper
    layout: 2-column-photo-right
  card-elevated:
    background: bg-card-glass
    border: border-glass
    backdrop-filter: blur-24px
    radius: pill
    use: marketing-floating-nav-only

  # Overlays
  modal:
    background: bg-filled
    color: ink
    border: border-strong
    radius: lg
    shadow: hard-lg
    padding: "32px 28px"
    max-width: "440px"
    backdrop: bg-backdrop
    z: modal
    transition: opacity 240ms ease-out
  tooltip:
    background: ink
    color: text-inverse
    border: ink
    radius: sm
    padding-x: "10px"
    padding-y: "6px"
    typography: caption-bold
    z: tooltip
  dropdown:
    background: bg-filled
    color: ink
    border: border-strong
    radius: sm
    shadow: hard-sm
    z: above-overlay

  # Navigation + chrome
  nav-floating-pill:
    background: bg-card-glass
    backdrop-filter: blur-24px
    border: border-glass-gradient
    radius: pill
    z: header
  nav-editorial:
    background: bg-paper
    border-bottom: border-strong
    typography: caption-bold
    z: header
  banner-event:
    background: ink
    color: text-inverse
    accent: brand-pink
    typography: caption-bold
    z: banner

  # Badges
  badge:
    background: ink
    color: text-inverse
    radius: sm
    padding-x: "10px"
    padding-y: "6px"
    typography: caption-bold
  badge-accent:
    background: brand-pink
    color: text-inverse
  badge-subtle:
    background: accent-subtle
    color: brand-pink-deep
---

## Overview

Shuuk is a basketball platform — leagues, teams & clubs, and tournaments.
The visual identity carries two voices that share the same primitives:

- **Marketing surfaces** (home, teams, tournaments): dark-mode default,
  saturated **shuuk pink** (`#EE028B`) on near-black, glassmorphic floating
  navigation, **Plein** display headings paired with Outfit body.
- **Event surfaces** (the 3x3 jam, future event landings): paper background
  (`#F6F3EC`), brutalist hard-offset drop shadows (`-6px 7px 0 0` in ink),
  hot pink stickers, **JetBrains Mono** all-caps labels with wide tracking.

Both surfaces draw from the same token set defined here. The aesthetic
reference is Gumroad's design system — chunky shadows, no-frills sticker
buttons, mono-typed metadata — remixed with shuuk's color and type identity.

## Colors

### Brand

`brand-pink` (`#EE028B`) is the only color the user should remember from
the entire system. Every CTA, every accent stripe, every event banner pulls
from it. Subtle variants exist for tinted surfaces; the `deep` and `light`
variants are for hover states and sticker-style two-tone treatments.

### Surfaces

Light theme uses `bg-body` (#F4F4F0) for the dominant background and
`bg-filled` (#FFFFFF) for elevated cards. Dark theme uses `bg-body-dark`
(#08080A) — slightly warmer than pure black to feel less hostile under
the pink accent. Event surfaces use `bg-paper` (#F6F3EC), a creamier
neutral that reads as physical paper.

### Semantic

`success` / `warning` / `info` / `danger` follow Gumroad's mapping —
desaturated, paired with a `-subtle` background variant for badges and
tinted notifications. `accent` is an alias for `brand-pink` so that
component declarations don't have to know about brand naming.

### Neutrals

Two parallel ten-step scales (light + dark, named `100`–`1000`). Use
the `-A##` alpha tokens (added at runtime — pattern: `rgba(ink, 0.10)`)
for hover overlays and dimmed backdrops rather than picking a flat gray.

## Typography

**Display family**: Plein (4 weights: Regular 400, Medium 500, Bold 700,
Black 900 — self-hosted from `public/fonts/plein/`). No italic, so we vary
visual weight via stroke (font-weight) primarily and size for hierarchy.
Used for `h1`–`h6` and any sticker-style heading on event surfaces.

**Body family**: Outfit (400/500/600/700). Used for paragraphs,
buttons, and most UI affordances.

**Mono family**: JetBrains Mono. Used exclusively for metadata captions,
event chips, and code-adjacent UI. Always uppercased with wide letter
spacing (`0.18em`+).

The scale has 13 tokens covering 6 sizes × 1–2 weights + a caption tier.
This is more than the DESIGN.md typical floor of 9 levels and at the
upper bound of the typical 9–15 range — driven by needing both regular
and bold for body/heading-2/heading-3 to support inline emphasis without
italics (Plein has no italic; emphasis comes from font-weight).

## Layout

### Breakpoints

- **mobile**: up to 640px
- **tablet**: 641px–1024px
- **desktop**: 1025px–1280px
- **wide**: 1281px+

Marketing surfaces clamp content width to 1200px. Event surfaces (jam
zine) run edge-to-edge at all sizes.

### Spacing

Base unit is 4px. The scale (`spacing.1` = 4px → `spacing.24` = 96px)
covers component-internal padding, gap, and section margins. Section
padding (between major page regions) defaults to `spacing.16` mobile,
`spacing.24` desktop.

## Elevation & Depth

Shuuk uses **brutalist hard-offset shadows** (no blur, no spread, solid
ink color), not soft elevation. This is the system's most distinctive
visual choice and the place where it diverges most from generic SaaS
design systems.

| Token | Value | Use |
|---|---|---|
| `shadow-hard-sm` | `4px 4px 0 0 var(--ink)` | Inputs, small cards, dropdowns, default button hover |
| `shadow-hard-lg` | `8px 8px 0 0 var(--ink)` | Major cards, modals, primary button hover |
| `shadow-hard-pink` | `12px 12px 0 0 var(--color-brand-pink)` | Featured cards (jam, event CTA) |
| `shadow-sticker` | `7px 7px 0 0 var(--color-ink), 7px 7px 0 4px white, 11px 11px 0 4px var(--color-ink)` | Sticker-style chips and pill buttons (event surfaces only) |

There is no `shadow-md`. If you reach for one, use `shadow-hard-sm` or
re-think the elevation hierarchy.

**The lift-and-shadow pattern.** Buttons and shadowable cards live at
rest with no shadow. On hover they translate `-4px` up-left
(`translate(-4px, -4px)`) and gain a `shadow-hard-sm` shadow exactly
filling the space they vacated — which makes the element appear to
physically pop off the page. On `:active` they reset to `translate(0, 0)`
with no shadow, simulating being pressed back down. This is the single
most recognizable interaction pattern in the system. Don't replace it
with a generic `transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.1)`.

## Shapes

Three rounded tokens, used sparingly:

- `rounded.sm` (4px) — inputs, buttons, badges, table cells, small cards, modals
- `rounded.lg` (8px) — major cards, panels (use restraint)
- `rounded.pill` (100px) — only the floating marketing nav and capsule chips
- `rounded.full` (9999px) — circular avatars, dots, status indicators

Event surfaces (jam zine) use sharp-cornered rectangles and 4px
sticker corners — they should NOT use `rounded.lg` or `rounded.pill`,
as these break the brutalist character.

## Components

### Buttons

The button is the system's most-touched surface. Every variant inherits
the same affordance: **rest flat → hover lift up-left + hard-offset
shadow appears → active reset to flat**. Don't deviate from this on any
button anywhere.

#### Variants

| Variant | At rest | On hover | Use |
|---|---|---|---|
| `button-default` | white bg, 1px ink border, no shadow | translate `-4px,-4px`, gains `shadow-hard-sm` | Most actions |
| `button-primary` | pink bg, white text, pink border | same lift, `shadow-hard-sm` in ink | One per fold, the main CTA |
| `button-outline` | transparent, ink border, ink text | inverts to ink fill + white text, then lifts | Secondary action when primary present |
| `button-secondary` | white bg, ink border, pill-radius | lift + shadow | Marketing nav button |
| `button-icon` | square 48×48, default styling | same lift | Icon-only actions |
| `button-destructive` | red bg, white text | lift, `shadow-hard-sm` | Delete, destroy, irreversible |

#### Sizes

- **`default`**: 16px × 12px padding, body-bold (16px). Height ~48px.
- **`sm`**: 8px padding all sides, small-bold (14px). For dense UI.
- **`icon`**: 48×48 square, no padding.

#### States

```css
.btn {
  border: 1px solid var(--ink);
  border-radius: var(--rounded-sm);
  padding: 12px 16px;
  background: var(--bg-filled);
  color: var(--ink);
  transition: transform var(--duration-snap, 140ms) ease-out;
}
.btn:hover  { transform: translate(-4px, -4px); box-shadow: var(--shadow-hard-sm); }
.btn:active { transform: translate(0, 0);       box-shadow: none; }
.btn:focus-visible {
  outline: var(--focus-ring-width) solid var(--accent);
  outline-offset: var(--focus-ring-offset);
}
.btn:disabled { opacity: 0.3; pointer-events: none; transform: none; box-shadow: none; }
```

The translate distance (`spacer-1` = 4px) and direction (up-left, not
straight up) are non-negotiable. Up-left lets the shadow extend
down-right exactly filling the vacated space, which is what creates the
"physical button" effect.

### Forms

Inputs share the same border + radius + padding as buttons so a
horizontally-stacked input + button row aligns by default.

#### Input

```css
input, select, textarea {
  background: var(--bg-filled);
  color: var(--ink);
  border: 1px solid var(--ink);
  border-radius: var(--rounded-sm);
  padding: 12px 16px;
  height: 48px;
  font: 16px/1.4 var(--font-body);
}
input::placeholder { color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
input:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
input[aria-invalid="true"], .input-error {
  border-color: var(--danger);
  color: var(--danger);
}
input[aria-invalid="true"]:focus-visible { outline-color: var(--danger); }
input:disabled { opacity: 0.3; cursor: not-allowed; }
```

The pink focus ring is mandatory for keyboard accessibility. Don't
remove `outline` and don't replace with a `box-shadow`-based ring —
`outline` survives `overflow: hidden` containers.

#### Select, textarea, fieldset

- **`textarea`**: same as input, `min-height: 96px`, `resize: vertical`.
- **`select`**: same as input, `appearance: none`, paint a custom
  chevron (mono `▼` or SVG) in `text-secondary` on the right edge.
- **`fieldset`**: vertical stack with `gap: 16px`. Labels above inputs
  in `small-bold`. Helper text below in `small`, `text-secondary`.
  Error message replaces helper, in `danger` color.

#### Checkbox, radio, switch

- **Checkbox**: 20px square, `rounded.sm`, 1px ink border. Checked: pink
  fill, white check mark. No "indeterminate" state in the design system.
- **Radio**: 20px circle, 1px ink border. Checked: white background,
  10px pink dot centered.
- **Switch**: 44×24 track in `neutral-300`, 20px circular thumb. On =
  pink track, thumb at right. Animate thumb position with
  `var(--duration-snap)` `ease-out`.

### Cards

You called out the outlined card as the look you like. Three variants
follow that pattern, ordered from quietest to loudest:

#### `card-outline`

The base. White background, 1px ink border, `rounded.lg`, 24px padding.
No shadow, no hover effect. Use this for content blocks that don't
invite interaction (a stat tile, a definition, a static feature card).

```css
.card-outline {
  background: var(--bg-filled);
  color: var(--ink);
  border: 1px solid var(--ink);
  border-radius: var(--rounded-lg);
  padding: 24px;
}
```

#### `card-outline-shadow`

`card-outline` + `shadow-hard-sm` at rest. Tap target. On hover lifts
`-4px,-4px` and the shadow grows to `shadow-hard-lg`. Use for
clickable cards (a feature tile that links to a sub-page, a pricing
plan card).

```css
.card-outline-shadow {
  background: var(--bg-filled);
  border: 1px solid var(--ink);
  border-radius: var(--rounded-lg);
  padding: 24px;
  box-shadow: var(--shadow-hard-sm);
  transition: transform var(--duration-snap) ease-out, box-shadow var(--duration-snap) ease-out;
}
.card-outline-shadow:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--shadow-hard-lg);
}
```

#### `card-paper`

For event surfaces only. Paper background (`bg-paper`), 3px ink border,
`shadow-hard-pink` (10px down-left in pink). Use for the jam home
feature block, the tournaments-page flagship event card, and the
event-detail header on event landings.

#### `card-feature`

A two-column variant of `card-paper`: copy on the left, photo on the
right, ink border, pink offset shadow, hover lift. The home page jam
block and the tournaments flagship card both use this.

#### `card-elevated` (glass)

Reserved for the marketing floating navigation pill — translucent
background with backdrop-blur, faint white border-image gradient.
This is the ONLY place glassmorphism appears in the system. Don't
introduce it anywhere else.

### Modals & Overlays

A small set, all governed by the z-index scale:

| Token | z-index | Notes |
|---|---|---|
| `z.base` | 0 | Default content |
| `z.overlay` | 1 | Sticky elements within content |
| `z.above-overlay` | 2 | Dropdowns above sticky |
| `z.header` | 3 | Floating nav |
| `z.menubar` | 10 | Mobile nav drawer |
| `z.modal` | 20 | Modal + backdrop |
| `z.tooltip` | 30 | Tooltips |
| `z.banner` | 1100 | Permanent event banner |
| `z.theme-toggle` | 1500 | Floating theme toggle (top of stack) |

#### Modal

White card, ink border, `shadow-hard-lg`, 32px padding, max 440px wide,
on a `bg-backdrop` (rgba(0,0,0,0.78)) backdrop. Fade in with 240ms
ease-out. Close on Escape, on backdrop click, and on close button.

#### Tooltip

Ink background, white text, 6×10 padding, `caption-bold` typography
(mono, uppercase, tracked). Show on hover/focus with no animation
(instant) — Gumroad's tradition.

#### Dropdown

White bg, ink border, `shadow-hard-sm`, `rounded.sm`. Options use
`body` typography. Hover row gets `accent-subtle` background. Selected
row gets a pink left-border (3px).

### Navigation

- **`nav-floating-pill`** (marketing, dark mode dominant): glass
  background, blur-24px, pill-radius, position fixed at top of
  viewport (offset by banner height).
- **`nav-editorial`** (event surfaces): full-width zine masthead, paper
  background, ink border-bottom, mono nav links with pink active
  underline.

### Banners + badges

- **`banner-event`**: persistent black bar at viewport top promoting
  the next event. Pink accent on tag and CTA. `z.banner` keeps it
  above nav. Hardcoded across 6 pages — extract to one partial when
  the copy diverges.
- **`badge`**: ink background, white text, `caption-bold`.
  `badge-accent` swaps to pink. `badge-subtle` swaps to `accent-subtle`
  background with `brand-pink-deep` text.

## Motion

Three duration tokens cover everything:

- **`duration-snap`** (140ms) — micro-interactions: hover lifts, button
  reset, focus rings, dropdown open. The default.
- **`duration-medium`** (240ms) — modal fade-in, drawer slide, page
  transitions, accordion expand.
- **`duration-slow`** (400ms) — only for ambient effects (parallax
  scroll, marquee). Never for interactions; user-initiated motion
  shouldn't take longer than 240ms.

Default easing is `ease-out` (slow finish, fast start). Use the
`easing-out-expo` cubic-bezier when you want a more dramatic deceleration
(modal entry, hero reveal). **Never use `ease-in`** for things the user
triggered — it feels laggy.

### Animation primitives

- **Lift-and-shadow** (the signature). Documented under Buttons and
  Cards. Don't reinvent this anywhere.
- **Fade**: opacity 0 → 1 over `duration-medium`, `easing-out-expo`.
  For modals, toasts, popovers.
- **Slide-in**: translate ±20px → 0 over `duration-medium`. For drawers
  and toasts entering from a screen edge.
- **Scroll-driven** (jam landing page only): `animation-timeline: view()`
  with `parallax-scroll` and `marquee` keyframes for the photo banner
  and "all city all day" marquee. CSS-native; don't pull in a library.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

The lift effect becomes an instant snap. The shadow still appears, the
button still feels tactile, but no movement. **Don't ship without this
block** on any page.

## Do's and Don'ts

### Do

- Use `brand-pink` for one CTA per fold, not three. The color works because
  it's rare in the layout, not because it's everywhere.
- Pair Plein with Outfit body. Don't introduce a third sans.
- Use the lift-and-shadow hover on every button and every interactive
  card. Consistent affordance is the system's voice.
- Use brutalist shadows on event surfaces and on featured cards. They
  carry the brand voice more than the pink does.
- Use mono captions (`caption-bold`) for any small label that's
  metadata-shaped: dates, locations, status, kicker text.
- Always include `:focus-visible` outlines (2px pink, 2px offset) on
  buttons, inputs, links. Don't remove the outline — that's a WCAG fail.
- Always include the `prefers-reduced-motion` reset block.

### Don't

- Don't use soft drop shadows (`0 4px 24px rgba(0,0,0,0.1)`-style). They
  read as generic SaaS and undercut the brutalist primitives.
- Don't add blur radius to shadows. Hard-offset only.
- Don't use Plein for body text. The font has no italic, awkward
  small-size kerning, and reads as a banner font under 18px.
- Don't introduce a new accent color. If you need a second emphasis,
  use `ink` (the black) or stretch the existing semantic palette
  (success/warning/info/danger).
- Don't use system shadows on event surfaces — they look like CSS
  defaults and break the zine voice.
- Don't replace the lift-and-shadow hover with `translateY(-2px)` and
  a soft shadow. The "no-shadow rest → shadow on hover" two-state is
  what makes the affordance feel mechanical.
- Don't transition `width`, `height`, or `box-shadow` color/spread
  values — they're expensive. Animate `transform`, `opacity`, and
  composited shadow size only.
- Don't introduce glass/blur effects outside the marketing floating
  nav. One use. That's enough.
- Don't add a `box-shadow` to inputs at rest. Inputs are flat. Their
  border carries the affordance; the focus ring is the only added
  visual on interaction.

## Source

Tokens forked from Gumroad's Design System (Community Beta, Figma file
`zy9NdfjqWL0dkRLgMVeB0p`). Component patterns, hover behavior, motion
durations, and z-index scale extracted from Gumroad's open-source repo
([antiwork/gumroad](https://github.com/antiwork/gumroad)) — specifically
`app/javascript/stylesheets/_definitions.scss`, `_global.scss`,
`tailwind.css`, and `app/javascript/components/Button.tsx`.

Brand identity (pink, display + body type families) replaced for shuuk;
semantic structure, neutrals, shadow primitives, breakpoints, the
lift-and-shadow hover pattern, the 140ms transition duration, and the
z-index scale all kept as-is. shuuk uses Next.js 15 + Tailwind v4
(CSS-first, `@theme` tokens) with hand-rolled React components.
