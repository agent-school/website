---
stepsCompleted: [1, 2, 3]
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-website-2026-02-10.md"
  - "_bmad-output/planning-artifacts/research/market-agent-school-vs-competitors-research-2026-02-12.md"
  - "docs/research/agent-school-vs-manus-n8n-competitive-analysis.md"
  - "docs/index.md"
  - "docs/architecture.md"
  - "docs/design/components-guide.md"
  - "docs/brownfield/redesign-roadmap.md"
workflowType: 'prd'
briefCount: 1
researchCount: 2
brainstormingCount: 0
projectDocsCount: 4
classification:
  projectType: 'web_app'
  domain: 'general'
  complexity: 'low'
  projectContext: 'brownfield'
  rationale: 'B2B/B2C SaaS marketing website (not educational tech). Agent School teaches AI agents, not students. Existing 79-component system undergoing comprehensive redesign.'
elicitationFindings:
  technicalConstraints:
    - 'Build errors: Resolved (no longer blocking)'
    - 'Dark mode: Net-new feature (system preference, no manual toggle)'
    - 'Component strategy: 79 existing components as reference guide, selective reuse'
  team:
    - 'Size: 3 people, all available full-time'
    - 'Timeline: 6-week target (flexible, not hard deadline)'
  mockUIRequirements:
    - 'All 5 demos equally important (Hotel PMS, CRM, Instagram, Notion, Granola)'
    - 'Comprehensive scope: Functionally complete software UI + AI agent'
    - 'Realistic production-like data with production-quality polish'
    - 'Dual demonstration: Software interface + agent capability to operate it'
  designAssets:
    - 'UX design document exists (written specs, no Figma design system)'
    - 'Implementation from DESIGN_SYSTEM.md + UX doc'
  futureIntegrations:
    - 'Phase 2+: CRM (HubSpot/Salesforce), email marketing, Hotjar analytics'
    - 'Not in MVP scope to avoid creep'
  performance:
    - 'Priority: Fast loading (Lighthouse/Core Web Vitals)'
    - 'CDN: Cloudflare or AWS CloudFront for high performance'
    - 'Vercel deployment with edge optimization'
  positioning:
    - 'Subtle competitive positioning (no direct competitor callouts)'
    - 'Stand on own value proposition'
---

# Product Requirements Document - Agent School Website

**Author:** Jack Luo
**Date:** 2026-02-12

---

## Success Criteria

### User Success

**Primary Success Indicator:** Visitors complete one of two success paths to demo booking.

**Success Path #1: Fast Path (Intent-Driven Visitors)**
*For visitors arriving with specific automation needs (e.g., "automate hotel check-ins")*

1. **Homepage** → Identify relevant use case (30 seconds)
2. **Relevant Mock UI** → Interact with matched demo (60 seconds)
3. **Demo Booking** → Click CTA and schedule (30 seconds)

**Total journey time:** ~2 minutes, 2-3 clicks

**Success Path #2: Deep Path (Explorer Visitors)**
*For visitors researching agent automation broadly*

1. **Exploration (Mock UIs):** Interact with multiple mock UIs to understand capabilities
2. **Learning (Teaching Demo):** Watch how agents learn workflows and get certified
3. **Validation (Agent Execution):** See agents successfully execute queries in mock UIs
4. **Trust (Self-Healing Demo):** Witness agent recovery from errors → *"This is trustworthy"*
5. **Confidence (Certificate Comparisons):** Review validation comparisons → *"This is the real deal"*
6. **Conversion (Demo Booking):** React with *"Wow, okay, this is pretty cool"* → Book demo

**Total journey time:** 5+ minutes, multi-touchpoint exploration

**Measurable User Outcomes:**
- **Engagement:** Average time on site > 3 minutes (indicates deep exploration)
- **Mock UI Interaction Rate:** 40%+ of visitors interact with at least one mock UI
- **Demo Completion Rate:** 30%+ of visitors complete watching teaching/certification or self-healing demos
- **Multi-Feature Exploration:** 25%+ of visitors engage with 2+ features (e.g., mock UI + self-healing demo)
- **Path Split:** Track Fast Path vs Deep Path conversion rates to optimize messaging

**Emotional Success States:**
- **Discovery:** "I can automate this workflow without coding"
- **Trust:** "This won't break when my software updates"
- **Confidence:** "This is production-ready, not experimental"
- **Urgency:** "I need to see how this works in my business"

---

### Business Success

**North Star Metric:** Demo Booking Rate

**Baseline & Targets:**
- **Current Baseline:** 2% (20 bookings per 1,000 visitors)
- **3-Month Milestone:** 3% booking rate (50% improvement, early validation)
- **6-Month Milestone:** 5% booking rate (150% improvement, proven concept)
- **12-Month Target:** 10% booking rate (400% improvement, strong conversion)

**Secondary Business Metrics:**
- **Traffic Growth:** 20% month-over-month organic traffic growth (SEO effectiveness)
- **Lead Quality:** 70%+ of booked demos are qualified leads (Director-level or C-suite decision-makers)
- **Demo Show Rate:** 60%+ of bookings result in completed demos (reducing no-shows)
- **Referral Indicator:** 15%+ of visitors arrive via direct link or social share (word-of-mouth validation)

**Revenue Impact (Downstream):**
- **Demo-to-Customer Conversion:** 20%+ of completed demos convert to paid customers (tracked post-MVP)
- **Customer Lifetime Value:** $50K+ average LTV per customer (Agent School's B2B SaaS pricing)

---

### Technical Success

**Performance Requirements:**
- **Core Web Vitals:**
  - Largest Contentful Paint (LCP): < 2.5 seconds
  - First Input Delay (FID): < 100 milliseconds
  - Cumulative Layout Shift (CLS): < 0.1
  - Time to Interactive (TTI): < 3.5 seconds
- **Lighthouse Score:** > 90 across Performance, Accessibility, Best Practices, SEO
- **Bundle Size:**
  - Initial page load: < 500KB (gzipped)
  - Per mock UI: < 200KB additional (lazy-loaded)
- **JavaScript Performance:**
  - Execution time: < 2 seconds on mid-tier mobile devices (e.g., iPhone 12, Samsung Galaxy S21)
  - Frame rate: 60fps for animations (no jank)
- **Interactive Mock UIs:** Load rich sample data in < 3 seconds per demo

**Mock UI AI Agent Implementation:**
- **Architecture:** Pre-scripted responses using JSON data (no real-time LLM API calls)
- **Response Pattern:** User query → pattern match → return canned response from JSON dataset
- **Data Structure:** Each mock UI has a JSON file with 20-30 common queries and responses
- **Benefits:** Fast (<100ms response time), predictable, no API costs, offline-capable
- **User Experience:** Feels interactive and intelligent through well-crafted response library

**Reliability:**
- **Uptime:** 99.9% availability (Vercel SLA standard)
- **Error Rate:** < 0.1% client-side JavaScript errors
- **Build Success:** 100% deployment success rate (no broken builds)

**Accessibility:**
- **WCAG AA Compliance:** Automated testing (axe-core) passes with 0 critical violations
- **Keyboard Navigation:** All interactive elements accessible via keyboard
- **Screen Reader Support:** Proper ARIA labels and semantic HTML
- **Color Contrast:** Minimum 4.5:1 for body text, 3:1 for large text

**SEO:**
- **Indexing:** All pages indexed by Google within 48 hours of launch
- **Core Keyword Rankings:** Top 20 for "AI agent automation," "teach AI agents," "agent certification" within 3 months
- **Organic Traffic:** 50%+ of traffic from organic search within 6 months
- **Structured Data:** Schema.org markup for rich snippets (Organization, Product, HowTo)

**Browser Support:**
- **Desktop:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile:** iOS Safari, Chrome Mobile (latest versions)
- **Responsive Breakpoints:** Mobile (375px+), Tablet (768px+), Desktop (1024px+)

---

### UX Requirements

**Dual Path Support:**

**Homepage Design:**
- **Primary CTA (Fast Path):** "Book Demo" button - prominent, above the fold, sticky on scroll
- **Secondary CTA (Deep Path):** "Explore How It Works" - scroll-triggered section with value propositions
- **Workflow Selector:** Above the fold on desktop (first 800px), first scroll section on mobile
  - Visual: Card grid or dropdown with 5 automation examples
  - Direct links to relevant mock UIs (max 1 click away)
- **Navigation:** Support both patterns:
  - Quick links (top nav): "Mock Demos," "Book Demo," "How It Works"
  - Full site map (footer): All sections, resources, legal

**Mock UI Accessibility:**
- **Homepage Integration:** Direct links from workflow selector cards
- **Maximum Click Depth:** 1 click from homepage to any mock UI
- **Visual Hierarchy:** Mock UIs featured prominently in hero or first scroll section

**Designed "Aha!" Moments:**

1. **Self-Healing Demo (Trust Moment):**
   - **Visual Drama:** Red error state (workflow breaks) → Agent intervenes with yellow "healing" animation → Green success state (workflow fixed)
   - **Timing:** 3-5 second sequence with clear visual progression
   - **Copy:** "This is trustworthy" callout or user testimonial overlay

2. **Certificate Comparisons (Confidence Moment):**
   - **Layout:** Side-by-side comparison table or split-screen view
   - **Visual:** Checkmarks for Agent School advantages, X marks or dashes for competitor gaps
   - **Copy:** "This is the real deal" validation messaging

3. **Conversion Moment (Wow Moment):**
   - **Peak-End Design:** Success animation, confetti, or celebratory visual after completing interactive demo
   - **Emotional Hook:** User testimonial quote: "Wow, okay, this is pretty cool"
   - **Clear CTA:** Prominent "Book Your Demo" button immediately after "wow" moment

**Interaction Patterns:**
- **Demo Videos:** Click-to-play (not autoplay) - respects Fast Path user control
- **Accordions/Tabs:** For Deep Path explorers - progressive disclosure of information
- **Scroll Animations:** Framer Motion scroll-triggered reveals - reward Deep Path scrolling behavior
- **Hover States:** Clear affordances for clickable elements (buttons, cards, links)

**Mobile Experience:**
- **Fast Path Mobile:** Sticky "Book Demo" button always visible
- **Workflow Selector Mobile:** Horizontal scroll cards or stacked layout
- **Mock UI Mobile:** Optimized for touch interactions (larger tap targets, swipe gestures)
- **Navigation Mobile:** Hamburger menu with both quick links and full site map

---

### Measurable Outcomes

**User Behavior Metrics:**
| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Average Time on Site | > 3 minutes | Google Analytics |
| Mock UI Interaction Rate | 40%+ | Event tracking (clicks, queries) |
| Demo Completion Rate | 30%+ | Video/interaction analytics |
| Multi-Feature Exploration | 25%+ | Session path analysis |
| Bounce Rate | < 40% | Google Analytics |
| Pages per Session | > 2.5 | Google Analytics |
| Fast Path Conversions | Track % | Funnel analysis |
| Deep Path Conversions | Track % | Funnel analysis |

**Path Effectiveness Tracking:**
| Path | % of Visitors | Conversion Rate | Weighted Contribution to Bookings |
|------|---------------|-----------------|-----------------------------------|
| Fast Path (Intent-Driven) | TBD | TBD | TBD |
| Deep Path (Explorers) | TBD | TBD | TBD |

*This table helps prioritize homepage optimization: If Fast Path converts at 5% but only 20% take it, vs Deep Path converts at 2% but 80% take it, you can decide whether to make the homepage more intent-focused or exploratory.*

**Business Metrics:**
| Metric | Baseline | 3-Month | 6-Month | 12-Month |
|--------|----------|---------|---------|----------|
| Demo Booking Rate | 2% | 3% | 5% | 10% |
| Monthly Demo Bookings | 20 | 30 | 50 | 100 |
| Organic Traffic Growth | - | +20% MoM | +20% MoM | +20% MoM |
| Lead Quality Rate | - | 70%+ | 75%+ | 80%+ |

**Technical Metrics:**
| Metric | Target | Monitoring Tool |
|--------|--------|----------------|
| Lighthouse Performance | > 90 | Vercel Analytics, Lighthouse CI |
| LCP | < 2.5s | Core Web Vitals (CrUX) |
| FID | < 100ms | Core Web Vitals (CrUX) |
| CLS | < 0.1 | Core Web Vitals (CrUX) |
| TTI | < 3.5s | Lighthouse, WebPageTest |
| Initial Bundle Size | < 500KB | Webpack Bundle Analyzer |
| Mock UI Bundle Size | < 200KB | Webpack Bundle Analyzer |
| JS Execution Time | < 2s | Chrome DevTools Performance |
| Frame Rate | 60fps | Chrome DevTools FPS meter |
| Uptime | 99.9% | Vercel Status |
| Error Rate | < 0.1% | Sentry/error monitoring |
| Mock UI Response Time | < 100ms | Custom event tracking |

---

## Product Scope

### MVP - Minimum Viable Product (6 Weeks)

**Goal:** Prove the concept and drive qualified demo bookings.

**Core Features (10):**
1. **Homepage** - Hero section with value proposition: "Turn Human Knowledge Into AI That Never Forgets"
   - Dual CTAs: "Book Demo" (primary) + "Explore How It Works" (secondary)
   - Workflow selector above the fold (desktop) or first scroll section (mobile)
2. **Workflow Selector** - 2-3 automation examples with direct links to mock UIs:
   - Hotel check-in automation
   - CRM lead enrichment
   - Instagram DM triage
3. **Interactive Mock UIs (5 Demos):**
   - Hotel PMS (reservations dashboard)
   - CRM (sales pipeline Kanban)
   - Instagram (DM categorization)
   - Notion (task database automation)
   - Granola (meeting transcript analysis)
   - *All 5 demos: Functionally complete software UI + pre-scripted AI agent (JSON responses), realistic production-like data, production-quality polish*
4. **Teaching/Certification Demo** - Visual demonstration of agent learning process with certification validation
   - Certificate comparison: Side-by-side layout showing Agent School vs competitors
5. **Self-Healing Demo** - Interactive demo with designed "aha!" moment:
   - Red error state → Yellow healing animation → Green success state
   - 3-5 second visual sequence
6. **Social Proof Section** - Customer testimonials, case studies, trust badges
7. **Demo Booking CTA** - Prominent Cal.com integration (hello@agentschool.io)
   - Sticky "Book Demo" button (Fast Path support)
8. **Footer** - Email, LinkedIn, legal links, full site map
9. **Responsive Design** - Mobile-first, optimized for 375px-1920px viewports
   - Mobile: Sticky "Book Demo" button, touch-optimized mock UIs
10. **SEO Optimization** - Meta tags, structured data, sitemap, robots.txt

**MVP Success Criteria:**
- All 10 features fully functional and polished
- Demo Booking Rate > 3% within 30 days of launch
- Lighthouse score > 90 across all pages
- Bundle size < 500KB initial load
- 0 critical accessibility violations (WCAG AA)
- Deployed to Vercel with CI/CD pipeline
- Path effectiveness tracking operational (Fast vs Deep Path data collection)

---

### Growth Features (Post-MVP, Weeks 7-18)

**Goal:** Make the site competitive and scale lead generation.

**Phase 2 Features:**
1. **Analytics Integration:**
   - Hotjar for heatmaps and session recordings
   - Mixpanel or Amplitude for funnel analysis
   - Custom event tracking for mock UI interactions
   - Path effectiveness dashboard (Fast vs Deep Path performance)
2. **Email Marketing Integration:**
   - Email capture forms (newsletter, gated content)
   - Mailchimp or ConvertKit integration
   - Automated nurture sequences
3. **CRM Integration:**
   - HubSpot or Salesforce API connection
   - Automatic lead creation from demo bookings
   - Lead scoring based on site behavior (Fast Path vs Deep Path)
4. **Content Marketing:**
   - Blog (Next.js MDX or headless CMS)
   - SEO-optimized articles on agent automation
   - Case studies and customer success stories
5. **Advanced Interactivity:**
   - ROI Calculator expansion (industry-specific calculators)
   - Interactive workflow builder (drag-and-drop demo)
   - Comparison tables (Agent School vs Manus vs n8n)
6. **Multi-Language Support:**
   - Internationalization (i18n) for Spanish, French, German
   - Localized content and demos
7. **Enhanced Social Proof:**
   - Video testimonials
   - Live customer success metrics dashboard
   - Integration logos (systems Agent School connects to)

**Growth Success Criteria:**
- Demo Booking Rate > 5% within 6 months
- 50%+ traffic from organic search
- Email list growth > 500 subscribers/month
- CRM integration tracks 100% of demo bookings
- Path effectiveness data informs homepage optimization decisions

---

### Vision (Future, 6+ Months)

**Goal:** Transform the marketing site into a full platform experience.

**Long-Term Features:**
1. **User Accounts & Authentication:**
   - Sign up / log in (email, OAuth)
   - User dashboard (saved demos, learning progress)
   - Personalized recommendations
2. **Agent Marketplace:**
   - Community-contributed pre-trained agents
   - Browse, search, filter agents by industry/workflow
   - Agent ratings and reviews
3. **Interactive Learning Platform:**
   - Guided tutorials (step-by-step agent training)
   - Certification exams (earn verified credentials)
   - Progress tracking and badges
4. **Payment Processing:**
   - Stripe integration for paid certifications
   - Subscription tiers (Free, Pro, Enterprise)
   - Invoice management
5. **Live Chat Support:**
   - Real-time help (Intercom, Crisp)
   - AI chatbot for common questions
   - Escalation to human support
6. **Advanced Analytics Dashboard:**
   - User behavior insights (cohort analysis, retention curves)
   - A/B testing platform (Optimizely, VWO)
   - Revenue attribution tracking
7. **API & Developer Portal:**
   - Public API for agent integrations
   - Developer documentation
   - Sandbox environment for testing agents
8. **Mobile Apps:**
   - iOS and Android apps (React Native or native)
   - Push notifications for agent status updates
   - Mobile-optimized agent training

**Vision Success Criteria:**
- 10,000+ registered users
- 1,000+ agents in marketplace
- $1M+ ARR from paid subscriptions
- 50+ enterprise customers

