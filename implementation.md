# Implementation Plan (Feb 5, 2026)

## 1) Page Mapping
- Home: Homepage overview, “What FalconBridge does”, “Who it’s built for”.
  - Targets: src/pages/Home.tsx, existing sections in src/components/sections.
- About: “Who We Are”, “Who We Are Not”, Trust/Discretion.
  - Targets: src/pages/About.tsx.
- Ways We Work: “How We Work”, “Decision System”, “Engagement Flow”.
  - Targets: src/pages/WaysWeWork.tsx.
- Research / Capabilities: “Internal Judgement”, “External Signal”, “Execution Reality”.
  - Targets: src/pages/Research.tsx (or split across section components).
- Founders: Founders copy.
  - Targets: src/pages/FoundersBio.tsx.
- Contact: “Where Conversations Begin” + CTA.
  - Targets: src/pages/Contact.tsx and src/components/sections/TrustAndFinalCTA.tsx.

## 2) New / Updated Sections
Create or update section components as needed:
- DecisionSystem
- WhoWeAreNot
- WhyWorkWithUs
- EngagementFlow
- InternalJudgement
- ExternalSignal
- ExecutionReality

Location: src/components/sections

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
  - Note: “Indicative conversion, rounded deliberately.”

Location: src/components (new) and integrate into the appropriate page (likely Ways We Work or a dedicated Pricing section).

## 4) Content Pass
- Insert the full copy with clear headings and structured sections.
- Maintain the tone: authority-preserving, disciplined, decision-led.
- Keep long-form content readable with spacing and subheads.

## 5) Implementation Order
1. Update page/section structure (create new section components).
2. Insert copy into sections and pages.
3. Add PricingCalculator and integrate.
4. Final content polish and consistency pass.
