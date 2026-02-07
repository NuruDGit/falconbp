# Implementation Plan (Feb 5, 2026)

## 1) Page Mapping
- Home: Homepage overview, "What FalconBridge does", "Who it's built for".
  - Targets: `app/page.tsx`, existing sections in `src/components/sections`.
- About: "Who We Are", "Who We Are Not", Trust/Discretion.
  - Targets: `app/about/page.tsx`.
- Ways We Work: "How We Work", "Decision System", "Engagement Flow".
  - Targets: `app/how-we-work/page.tsx`.
- Research / Capabilities: "Internal Judgement", "External Signal", "Execution Reality".
  - Targets: `app/research/page.tsx` (or split across section components).
- Founders: Founders copy.
  - Targets: `app/about/page.tsx` or a dedicated `app/founders/page.tsx` if needed.
- Contact: "Where Conversations Begin" + CTA.
  - Targets: `app/contact/page.tsx` and `src/components/sections/TrustAndFinalCTA.tsx`.

## 2) New / Updated Sections
Create or update section components as needed:
- DecisionSystem
- WhoWeAreNot
- WhyWorkWithUs
- EngagementFlow
- InternalJudgement
- ExternalSignal
- ExecutionReality

Location: `src/components/sections`

## 3) Pricing + Calculator (Coaching Only)
Create a PricingCalculator component:
- Base currency: AED
- Options:
  - Single session: AED 2,000
  - 4-session package: AED 7,200
  - 6-session package: AED 10,200
  - 8-session package: AED 12,800
- Currencies: USD, GBP, EUR, SAR, AUD
- Live exchange rates with daily refresh
- Rounding: nearest 10 units of selected currency
- Display:
  - Base price in AED
  - Converted price in selected currency
  - Note: "Indicative conversion, rounded deliberately."

Location: `src/components` (new) and integrate into the appropriate page (likely Ways We Work or a dedicated Pricing section).

## 4) Content Pass
- Insert the full copy with clear headings and structured sections.
- Maintain the tone: authority-preserving, disciplined, decision-led.
- Keep long-form content readable with spacing and subheads.

## 5) Implementation Order
1. Update page/section structure (create new section components).
2. Insert copy into sections and pages.
3. Add PricingCalculator and integrate.
4. Final content polish and consistency pass.

## 6) Research Access Modal (Homepage CTA)
CTA copy and behavior
- Button text: "Explore research capability"
- Supporting line update: "Access to sample research is intentionally controlled and reviewed."
- Behavior: open a modal (do not navigate to a new page).

Modal UX structure and copy (exact)
- Modal title: "Request access to sample research"
- Sub-line: "Access to sample research is intentionally limited to decision-makers and senior sponsors."
- Additional trust line: "All sample material is anonymised and non-client specific."
- Framing copy:
  "FalconBridge research is designed for real decisions.
  Sample briefs are shared selectively and never represent client engagements."

Form fields (keep tight; do not over-qualify)
- Required:
  - Full name
  - Organisation
  - Role / title
  - Work email
- Optional:
  - Label: "What decision are you exploring? (optional)"
  - Helper: "Short note only - no confidential detail required."
  - UI: single short textarea (2 lines tall)

Primary and secondary CTAs
- Primary button: "Request access"
- Microcopy under button: "Access is reviewed manually."

Submit acknowledgement state (no unlock, no redirect)
- Title: "Request received."
- Message:
  "Your request is being reviewed.
  If approved, you will receive access by email.
  We do not automatically release research material."

Email flow (post-approval)
- Provide a private, expiring access link
- No login account
- No public library link

Implementation notes
- Update the homepage research CTA section to open the modal.
- Add a modal component (new UI component if needed) and wire form state + submit state.
- Ensure a lock icon appears on both the CTA button and modal header.

Tech stack snapshot
- Next.js 14 App Router + React 18 + TypeScript
- Tailwind CSS v4 (PostCSS)
- ESLint + TypeScript ESLint
