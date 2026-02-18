# Changelog

## [agent-website-consultancy] — 2026-02-17

### Overview

This branch is a focused **copy and messaging experiment** targeting non-technical SMB owners (5–200 employees). The goal is to test whether rewriting the website from a technical/product voice to a plain-English consultancy voice increases discovery call bookings when shown to 1,000 SMB visitors over 1 week.

No design, component structure, or feature code was changed. This is a pure content and messaging experiment.

---

### New Files

#### `COPY.md`
Full copywriting strategy document including:
- The six core SMB copywriting principles applied (NNG, Stripe, conversion research)
- The PASTOR copywriting formula used (Problem → Amplify → Solution → Testimonial → Offer → Response)
- All website copy for every section, documented for future reference
- Notes on what was changed, what was kept, and why

---

### Modified Files

#### `package.json` + `package-lock.json`
- Added `@vercel/analytics` dependency for page view and engagement tracking

---

#### `src/app/layout.tsx`
**SEO Metadata — updated for SMB audience:**
- Page title: `"Agent School — AI Automation for Your Business"` (was: "Turn Human Knowledge Into AI That Never Forgets")
- Meta description: now leads with the business outcome for SMB owners, not the technical product
- Keywords: replaced technical terms (RPA, agent certification, intelligent automation) with SMB search terms (AI for small business, automate repetitive tasks, AI consulting)
- OG/Twitter description: rewritten to be outcome-first, jargon-free
- JSON-LD schema type: changed from `SoftwareApplication` to `ProfessionalService` to accurately reflect the consultancy model

**Analytics — added:**
- `<Analytics />` from `@vercel/analytics/next` — tracks page views and Web Vitals automatically
- Hotjar tracking script added to `<head>` — placeholder `YOUR_HOTJAR_SITE_ID` must be replaced with your actual Hotjar site ID before the experiment goes live

---

#### `src/components/layout/Navbar.tsx`
- Desktop CTA button: `"Book a Demo"` → `"Book a Free Call"`
- Mobile menu CTA button: `"Book a Demo"` → `"Book a Free Call"`

---

#### `src/components/sections/Hero.tsx`
**Badge (overline):**
- `"The Future of AI Automation"` → `"AI Automation Consultancy"`

**Headline:**
- Line 1 (animated): `"Turn Human Knowledge"` → `"Your Team Shouldn't Be"`
- Line 2: `"Into AI That Never Forgets"` → `"Doing This Manually"`

**Subtitles:**
- Rewritten to lead with the business pain ("repetitive tasks that eat up your team's week") and end with the service promise ("show us how you work, we'll build the AI")
- Removed: "deterministic workflows", "fraction of the cost" (jargon), "first platform" (unverifiable claim)

**Primary CTA:**
- `"Join The Revolution"` → `"Book a Free Discovery Call"`

**Secondary CTA:**
- `"Explore Capabilities"` (linked to `#features`) → `"See What We Automate"` (linked to `#use-cases`)

**Hero Stat Cards — redesigned as Benefit Pills:**
- Removed: `NumberTicker` animated counters showing `99%`, `10x`, `95%` (unproven hard claims)
- Added: Three benefit pills with directional language:
  - `"Up to 10x Faster"` / "Than doing it manually"
  - `"A Fraction of the Cost"` / "Compared to hiring"
  - `"Works With Your Tools"` / "No software changes needed"
- Removed `NumberTicker` import (no longer needed)

---

#### `src/lib/constants.ts`

**`FEATURES` array — all 6 cards rewritten:**

| Old Title | New Title |
|---|---|
| Teach Once, Automate Forever | Show Us Once, It Runs Forever |
| 99% Reliability, Guaranteed | Tested Before It Touches Your Business |
| Perfect Transparency | You Always Know What's Happening |
| Software Changes, Agents Adapt | Updates Itself When Your Software Changes |
| Mission Control | One Place to See Everything |
| 7x Speed Breakthrough | Runs Fast — Not Like a Chatbot |

All descriptions and bullets rewritten to:
- Use plain English (no RPA, LLM, deterministic, semantic AI, pixel-matching)
- Lead with the business outcome, not the technical mechanism
- Answer the implicit question: "So what does that mean for my business?"
- Remove all unproven hard metrics (2-second vs 45-second, 95% of changes, Zero LLM calls)

**`JOURNEY_STAGES` array — all 4 steps rewritten:**

| Old Title | New Title |
|---|---|
| Teach Once | You Tell Us What's Eating Your Time |
| AI Transforms | We Build the Automation for You |
| Certify & Deploy | We Test It Until We're Confident It Works |
| Run Forever | It Runs. You Don't Think About It Again. |

Steps rewritten to feel like a real client experience, not a product feature flow.

---

#### `src/components/sections/UseCases.tsx`

**Section header rewritten:**
- Overline: `"Use Cases"` → `"Real Business Workflows"`
- H2: `"Real Workflows, Real Results"` → `"What Could Your Team Stop Doing Manually?"`
- Description: rewritten to invite visitors to find their own scenario, not to describe the product

**Bottom industry note simplified:**
- Removed "Agent School works with any software stack" product-speak
- Replaced with: "We work with businesses in any industry. These are just examples — every engagement starts with a conversation about what's costing you the most time."

---

#### `src/components/sections/CTA.tsx`

**Section headline:**
- `"Train Your First Agent in 30 Days"` → `"Let's Find the First Thing We Can Automate For You"`

**Section body:**
- Removed "risk-free pilot" / "satisfaction guaranteed" (product language)
- Replaced with a concrete pain-point hook: "Most businesses have 2–3 tasks that eat hours every week without anyone realizing it. In a free 30-minute call, we'll find yours..."

**Card 1:**
- Title: `"Try Interactive Demo"` → `"See It In Action"`
- Description: rewritten to describe what's in the demos without product jargon
- Link: `#features` → `#use-cases` (sends to the demos, not the feature cards)

**Card 2 (highlighted):**
- Title: `"Book a Pilot Meeting"` → `"Book a Free Discovery Call"`
- Description: rewritten around the visitor's context ("tell us what your team spends the most time on") vs. our process language

**Card 3:**
- Title: `"Start a Conversation"` → `"Just Send Us a Message"`
- Description: made warmer and lower-commitment for visitors not yet ready to book

---

#### `src/components/layout/Footer.tsx`

**Brand tagline (under logo):**
- `"The fastest way to teach and certify AI agents to operate on your software stack reliably."` → `"We help businesses automate their most time-consuming workflows with AI — faster, cheaper, and without the complexity."`

**Footer CTA link:**
- `"Book a Demo"` → `"Book a Free Call"`

**Large footer CTA text (Playfair Display, orange background):**
- `"Creating the future."` → `"Working smarter starts here."`

---

#### `src/app/page.tsx`

**`<Differentiation />` section hidden:**
- Commented out with a detailed note explaining why (too technical for SMB audience, references RPA and LLM tokens)
- Code is preserved in full for easy re-activation
- Note instructs when to re-enable: when targeting technical buyers with real benchmark data

---

### What Was NOT Changed

- All interactive demo components (HotelPMS, CRM, Instagram, Notion, Granola) — kept as-is
- All design tokens, colors, animations, Framer Motion config — unchanged
- Blog posts and blog listing page — unchanged
- Comparison pages (`/vs/manus`, `/vs/n8n`) — unchanged
- Geometry Solution case study — unchanged (real numbers, real credibility)
- Navbar links — unchanged
- `LogosSection` and `Testimonials` remain commented out (no new logos or verified quotes)

---

### Experiment Setup Checklist

Before sending traffic:
- [ ] Replace `YOUR_HOTJAR_SITE_ID` in `src/app/layout.tsx` with your real Hotjar site ID
- [ ] Deploy this branch to a Vercel preview URL or swap to production
- [ ] Confirm Vercel Analytics is showing data in the Vercel dashboard
- [ ] Confirm Hotjar session recordings are live

### How to Measure Results (1-week test, ~1,000 visitors)

**Primary metric:** Discovery call bookings via `cal.com/jackagentschool/30min`

**Secondary metrics (via Vercel Analytics + Hotjar):**
- Bounce rate vs. main branch
- Scroll depth (do visitors reach Use Cases / CTA sections?)
- CTA click-through rate on hero ("Book a Free Discovery Call")
- Hotjar heatmap: where do visitors click / stop reading?
- Session recordings: where do visitors drop off?

**Verdict criteria:**
- If booking rate > 0 calls per 100 visitors → messaging resonates, continue iterating
- If bounce rate > 80% → headline/hero isn't connecting, test a new opening hook
- If visitors reach Use Cases but don't convert → CTA needs work, not the content
