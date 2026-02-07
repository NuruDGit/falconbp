# Design System: FalconBridge Partners (A-Z)

This document is the **Absolute Source of Truth** for the FalconBridge Partners digital ecosystem. It defines the visual, structural, and interactive standards required to maintain a world-class, "elite editorial" brand experience.

---

## A. Architecture (Grid & Layout)
Consistent structural rhythm ensures content flows with authority.

- **Main Container**: `.container-editorial`
  - Max-width: `1280px` (`max-w-300`).
  - Padding: `px-6` (Mobile) to `px-12` (Desktop).
- **The Golden Section**:
  - Main content: 60-65% width.
  - Sidebar/Sidebar-less: Centered content with generous horizontal margins.
- **Vertical Rhythm**:
  - Section Padding: `py-section` (`clamp(6rem, 10vh, 12rem)`).
  - Internal Gaps: `gap-fluid` (`clamp(3rem, 5vh, 6rem)`).

---

## B. Brand (Color & Visual Identity)
A restricted palette that prioritizes depth and trust.

- **Foundational Surfaces**:
  - `brand-navy`: `#151C2F` (The singular, absolute background color for the entire ecosystem).
  - `brand-navy-dark`: `#010614` (Reserved for overlays, modals, and deep blending/masks).
- **Core Accents**:
  - `brand-gold`: `#C7A975` (The technical "Decision" color).
  - `brand-gold-muted`: `rgba(199, 169, 117, 0.4)` (Subtle UI borders/dividers).
- **Typographic Color**:
  - `white`: `#FFFFFF` (Headings/Interactive).
  - `brand-grey`: `#C5C6CB` (Body text / Reduced contrast).
  - `brand-gold/80`: Italic accents / Quote text.

---

## C. Components (Atomic Elements)

### 1. Buttons (CTAs)
- **Primary**: Solid Gold, Black Text, Full Rounding. Scale-up + Shadow on hover.
- **Secondary**: Glassmorphic (Ghost with border). Gold border tint on hover.
- **Technical**: Text + Chevron. Transition X for movement.
- **Padding Specs**:
  - `LG`: 18px vertical / 44px horizontal (`px-11 py-4.5`)
  - `MD`: 14px vertical / 36px horizontal (`px-9 py-3.5`)
  - `SM`: 8px vertical / 20px horizontal (`px-5 py-2`)

### 2. Forms & Inputs
- **Base**: `bg-white/[0.02] border-white/5 rounded-2xl p-6`.
- **Focus**: `border-brand-gold/40 ring-1 ring-brand-gold/10`.
- **Labels**: `label-tech` style.

### 3. Cards (The Frosted Pattern)
- **Style**: `backdrop-blur-xl bg-white/[0.01] border-white/5 rounded-[2rem]`.
- **Hover**: Subtle lift (`-translate-y-1`) + Border glow.

---

## D. Design Tokens (Technical)
Centralized mapping for CSS/Tailwind.

- **Spacing**: `gap-4 (16px)`, `gap-8 (32px)`, `gap-12 (48px)`.
- **Rounding**: `xs: 4px`, `md: 12px`, `lg: 24px`, `section: 48px`.
- **Z-Index**: `base: 0`, `overlay: 10`, `sticky: 50`, `modal: 100`.

---

## E. Editorial (Imagery & Media)
Imagery must feel candid, professional, and atmospheric.

- **Treatment**: 100% Grayscale by default or highly desaturated.
- **Hover**: 100% Color or subtle warming transition.
- **Composition**: Empty space for text overlays, low-depth of field, cinematic lighting.
- **Grain**: Site-wide noise filter at 3% opacity.

---

## F. Fluidity (Motion & Animation)
Motion should be intentional and "heavy," not playful.

- **Timing**: `duration-500` (Standard), `duration-1000` (Hero/Entrance).
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Entrance**: Fade-in-up with 20px offset. Staggered child reveals (100ms delay).

---

## G. Glyph (Iconography)
Icons used sparingly as technical markers.

- **Library**: Lucide React (Stroke width: 1.25px - 1.5px).
- **Color**: `brand-gold` (Active) or `white/20` (Muted).

---

## H. Hierarchy (Information Architecture)
- **H1 (Hero)**: The "Moment of Consequence".
- **H2 (Section)**: The "Technical Foundation".
- **H3 (Accent)**: The "Elite Credibility".
- **Body**: The "Context and Rigour".

---

## Live Updates
This document is updated dynamically. Any new pattern must be documented here before implementation.
