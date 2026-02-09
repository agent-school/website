# Agent School Website Redesign Roadmap

> **Project Duration:** 28-32 days  
> **Current Phase:** Phase 1 - Foundation  
> **Status:** 🚀 In Progress

---

## 🎯 Project Overview

### Vision
Transform Agent School's marketing website from an academic aesthetic to a **futuristic, visionary platform** that showcases AI agent automation through **5 fully interactive mock UIs**. The redesign positions Agent School as the leader in AI agent education through immersive, hands-on demonstrations.

### Goals
1. **Visual Impact:** Teal-orange gradient system (delve.co inspired), modern & futuristic
2. **Interactivity:** 5 fully functional mock UIs (Hotel PMS, Instagram, CRM, Notion, Granola)
3. **Content Quality:** Rewrite all copy with futuristic/visionary tone (not academic)
4. **Dark Mode:** Auto-detect system preference with seamless theme support
5. **Performance:** Lighthouse 90+, WCAG AA compliant

### Scope

**In Scope:**
- ✅ Complete color system overhaul (navy/amber/cream → teal/orange gradients)
- ✅ Dark mode with auto-detection (no manual toggle)
- ✅ 5 interactive mock UIs (fully functional, not just visual mockups)
- ✅ Reusable mock UI framework (shared architecture for all demos)
- ✅ Content rewrite (futuristic & visionary tone)
- ✅ shadcn/ui + Aceternity UI + Magic UI (free/MIT components only)
- ✅ Comprehensive documentation (4 docs)

**Out of Scope:**
- ❌ 3D/Three.js integration (not required)
- ❌ Backend functionality changes (remains static Next.js)
- ❌ CMS integration
- ❌ User authentication
- ❌ Blog/content publishing
- ❌ Multi-language support

---

## 🎨 Design Direction

### Color System: "Cyber Citrus"

**Primary: Teal (Technology & Trust)**
```
teal-500: #14b8a6  (Primary brand)
teal-600: #0d9488  (delve.co inspired)
teal-700: #0f766e  (Dark mode text)
```

**Accent: Orange (Energy & Action)**
```
orange-400: #fb923c  (Primary accent)
orange-500: #f97316  (CTA hover)
orange-600: #ea580c  (Strong emphasis)
```

**Neutrals: Slate**
```
slate-50 to slate-950  (Light & dark mode compatible)
```

**Gradients:**
- `bg-gradient-to-br from-teal-600 to-orange-500` (Hero, CTAs)
- `bg-gradient-to-r from-teal-500 via-orange-400 to-orange-500` (Accent elements)

### Typography
- **Display (Fraunces):** Headlines, brand moments (use sparingly for modern feel)
- **Body (DM Sans):** Primary text, UI labels
- **Mono (JetBrains Mono):** Code, data, overlines

### Dark Mode Strategy
- Auto-detect system preference via `next-themes`
- CSS variables in `globals.css` (`:root` and `.dark` classes)
- No manual toggle (follows system, seamless)
- All components must support both modes

---

## 📊 Current Status

**Phase:** Phase 1 - Foundation (Days 1-3)  
**Completion:** 0 of 7 phases (0%)  
**Days Elapsed:** 0 / 28-32 days  
**On Track:** ✅ Yes

### Completed Tasks
- [x] DESIGN_SYSTEM.md documentation
- [x] MOCK_UI_FRAMEWORK.md documentation
- [x] COMPONENTS_GUIDE.md documentation
- [x] REDESIGN_ROADMAP.md documentation

### In Progress
- [ ] Install shadcn/ui CLI
- [ ] Update Tailwind config with teal-orange colors
- [ ] Add dark mode support

### Next Up (Phase 1, Days 1-3)
- [ ] Install shadcn/ui components (button, card, input, etc.)
- [ ] Install Aceternity UI components (BackgroundBeams, Timeline, etc.)
- [ ] Install Magic UI components (HyperText, NumberTicker, etc.)
- [ ] Replace existing UI components with shadcn primitives

### Blocked/Issues
- ✅ None

---

## 🗓️ Phase Breakdown

## Phase 1: Foundation & Design System
**Timeline:** Days 1-3 (3 days)  
**Status:** 🚀 In Progress

### Objectives
- Establish teal-orange color system with dark mode
- Install and configure component libraries (shadcn/ui, Aceternity, Magic UI)
- Replace core UI components (Button, Card, Badge)
- Set up ThemeProvider for dark mode

### Tasks

#### Design System (Day 1)
- [ ] Update `tailwind.config.ts`
  - [ ] Add teal color palette (50-950)
  - [ ] Add orange color palette (50-950)
  - [ ] Add slate for neutrals
  - [ ] Define gradient utilities
  - [ ] Add glassmorphism/glow shadow tokens
- [ ] Update `globals.css`
  - [ ] Add CSS variables for light mode (`:root`)
  - [ ] Add CSS variables for dark mode (`.dark`)
  - [ ] Define gradient classes
  - [ ] Add animation keyframes (shimmer, glow-pulse, scan-line)
- [ ] Install `next-themes` for dark mode
- [ ] Create `src/components/ThemeProvider.tsx`
- [ ] Add ThemeProvider to `src/app/layout.tsx`

#### shadcn/ui Setup (Day 1)
- [ ] Install shadcn/ui CLI: `npx shadcn@latest init`
- [ ] Configure for existing project (select options)
- [ ] Install core components:
  - [ ] `npx shadcn@latest add button`
  - [ ] `npx shadcn@latest add card`
  - [ ] `npx shadcn@latest add input`
  - [ ] `npx shadcn@latest add select`
  - [ ] `npx shadcn@latest add tabs`
  - [ ] `npx shadcn@latest add badge`
  - [ ] `npx shadcn@latest add slider`
  - [ ] `npx shadcn@latest add table`
  - [ ] `npx shadcn@latest add dialog`
- [ ] Test components render correctly

#### Component Libraries (Day 2)
- [ ] **Aceternity UI** (copy from https://ui.aceternity.com)
  - [ ] Copy `BackgroundBeams.tsx` (hero backgrounds)
  - [ ] Copy `Timeline.tsx` (journey section)
  - [ ] Copy `CardSpotlight.tsx` (feature cards)
  - [ ] Copy `TextGenerateEffect.tsx` (animated text)
  - [ ] Add to `src/components/aceternity/`
- [ ] **Magic UI** (copy from https://magicui.design)
  - [ ] Copy `HyperText.tsx` (scramble animation)
  - [ ] Copy `NumberTicker.tsx` (animated numbers)
  - [ ] Copy `AnimatedList.tsx` (list animations)
  - [ ] Add to `src/components/magic/`
- [ ] Test all copied components in isolation

#### Component Migration (Day 3)
- [ ] Replace `src/components/ui/Button.tsx` with shadcn Button
- [ ] Replace `src/components/ui/Card.tsx` with shadcn Card
- [ ] Replace `src/components/ui/Badge.tsx` with shadcn Badge
- [ ] Update all imports across codebase
- [ ] Test existing pages still work
- [ ] Run `npm run build` to check for errors

### Deliverables
- [x] Updated `tailwind.config.ts` with Cyber Citrus color system
- [x] Updated `globals.css` with CSS variables and dark mode
- [x] ThemeProvider component with auto-detect dark mode
- [x] shadcn/ui components installed and working
- [x] Aceternity UI + Magic UI components copied
- [x] Existing components migrated to shadcn

### Dependencies
- None (foundational phase)

### Risk Factors
- **Medium:** Color contrast issues in dark mode → **Mitigation:** Test with contrast checker early
- **Low:** Component library conflicts → **Mitigation:** Isolate by use case (shadcn = base, Aceternity/Magic = effects)

---

## Phase 2: Mock UI Framework
**Timeline:** Days 4-6 (3 days)  
**Status:** ⏸️ Pending Phase 1

### Objectives
- Build reusable framework for all 5 mock UIs
- Create shared components (MockUIShell, AgentInterface, context)
- Define TypeScript interfaces for agent queries
- Establish patterns for interactivity

### Tasks

#### Framework Architecture (Day 4)
- [ ] Create `src/components/mocks/_framework/` directory
- [ ] **MockUIShell.tsx**
  - [ ] Window container with macOS chrome (red/yellow/green dots)
  - [ ] Collapsible agent sidebar
  - [ ] Content area slot
  - [ ] Responsive layout (mobile/desktop)
- [ ] **AgentInterface.tsx**
  - [ ] Chat input with "Ask agent..." placeholder
  - [ ] Message history display
  - [ ] "Thinking..." loading state
  - [ ] Response rendering with markdown support
- [ ] **MockUIContext.tsx**
  - [ ] React Context for state management
  - [ ] useReducer for query/response flow
  - [ ] Custom hooks: `useMockUI`, `useAgentQuery`

#### Interactive Components (Day 5)
- [ ] **InteractiveElement.tsx**
  - [ ] Wrapper for clickable UI elements
  - [ ] Highlight effect when agent references
  - [ ] Pulse animation on interaction
  - [ ] Tooltip showing element ID
- [ ] **DataDisplay.tsx**
  - [ ] Table component for data grids
  - [ ] Card component for summaries
  - [ ] List component for items
  - [ ] All support agent highlighting
- [ ] **LoadingStates.tsx**
  - [ ] Skeleton loaders for data
  - [ ] Spinner for agent queries
  - [ ] Shimmer effect for loading states

#### Types & Utilities (Day 6)
- [ ] Create `src/types/agent.ts`
  - [ ] `AgentQuery` interface
  - [ ] `QueryResult` interface
  - [ ] `HighlightTarget` type
  - [ ] `AgentAction` union type
- [ ] Create `src/types/mock-ui.ts`
  - [ ] `MockUIState` interface
  - [ ] `MockUIAction` union type
  - [ ] `QueryHandler` function type
- [ ] Create `src/lib/query-utils.ts`
  - [ ] `parseQuery()` - extract intent from user query
  - [ ] `highlightElements()` - trigger UI highlights
  - [ ] `simulateDelay()` - realistic "thinking" delay
- [ ] Write demo template documentation in `MOCK_UI_FRAMEWORK.md`

### Deliverables
- [x] Reusable mock UI framework in `/mocks/_framework/`
- [x] TypeScript interfaces for agent system
- [x] Utility functions for query handling
- [x] Demo template for creating new mock UIs

### Dependencies
- Phase 1 must be complete (design system + component libraries)

### Risk Factors
- **Medium:** Framework too rigid → **Mitigation:** Build iteratively, test with first demo
- **Low:** State management complexity → **Mitigation:** Use simple useReducer, document patterns

---

## Phase 3: Interactive Mock UIs
**Timeline:** Days 7-14 (8 days)  
**Status:** ⏸️ Pending Phase 2

### Objectives
- Build all 5 fully interactive mock UIs
- Implement realistic agent query/response system
- Ensure mobile responsiveness and dark mode support
- Polish interactions and micro-animations

### Tasks

#### Hotel PMS Demo (Days 7-8)
- [ ] Create `src/components/mocks/hotel-pms/` directory
- [ ] **HotelPMSDemo.tsx** (main component)
  - [ ] Use MockUIShell wrapper
  - [ ] Dashboard layout (header, widgets, main content)
- [ ] **Dashboard.tsx**
  - [ ] Summary cards (arrivals, departures, occupancy, revenue)
  - [ ] Room grid (visual room status)
  - [ ] Upcoming reservations table
- [ ] **queries.ts** (query handler)
  - [ ] "How many arrivals today?" → highlight arrivals widget
  - [ ] "Show me available rooms" → filter room grid
  - [ ] "What's our occupancy rate?" → highlight occupancy widget
- [ ] Mock data in `data.ts` (sample reservations, rooms)
- [ ] Test interactivity and agent responses
- [ ] Mobile responsive layout

#### CRM Mock (Days 9-10)
- [ ] Create `src/components/mocks/crm/` directory
- [ ] **CRMDemo.tsx** (main component)
  - [ ] Kanban pipeline (columns: Lead, Qualified, Proposal, Won, Lost)
  - [ ] Deal cards with $ amounts
- [ ] **Pipeline.tsx**
  - [ ] Drag-drop columns (visual only, no actual drag)
  - [ ] Deal cards with company name, amount, stage
  - [ ] Total value per column
- [ ] **queries.ts**
  - [ ] "What deals are in proposal stage?" → highlight Proposal column
  - [ ] "Show me won deals this month" → highlight Won column
  - [ ] "Total pipeline value?" → show sum of all deals
- [ ] Mock data in `data.ts` (sample deals)
- [ ] Test interactivity
- [ ] Mobile responsive layout

#### Instagram Mock (Day 11)
- [ ] Create `src/components/mocks/instagram/` directory
- [ ] **InstagramDemo.tsx** (main component)
  - [ ] DM list sidebar (conversations)
  - [ ] Message thread view
  - [ ] Category labels (Support, Sales, Spam, etc.)
- [ ] **DMList.tsx**
  - [ ] List of conversations with preview
  - [ ] Unread badges
  - [ ] Category tags
- [ ] **queries.ts**
  - [ ] "Show me support requests" → filter to Support category
  - [ ] "How many unread messages?" → highlight unread count
  - [ ] "Mark as spam" → move message to Spam category
- [ ] Mock data in `data.ts` (sample DMs)
- [ ] Test categorization flow
- [ ] Mobile responsive layout

#### Notion Mock (Day 12)
- [ ] Create `src/components/mocks/notion/` directory
- [ ] **NotionDemo.tsx** (main component)
  - [ ] Task database (table view)
  - [ ] Inline editing (simulated)
  - [ ] Property columns (Status, Priority, Assignee, Due Date)
- [ ] **TaskTable.tsx**
  - [ ] Sortable columns
  - [ ] Filters (Status, Priority)
  - [ ] Row selection
- [ ] **queries.ts**
  - [ ] "Add task: Write blog post" → create new task
  - [ ] "Show high priority tasks" → filter Priority = High
  - [ ] "Mark as complete" → update Status to Done
- [ ] Mock data in `data.ts` (sample tasks)
- [ ] Test task creation/updates
- [ ] Mobile responsive layout

#### Granola Mock (Day 13)
- [ ] Create `src/components/mocks/granola/` directory
- [ ] **GranolaDemo.tsx** (main component)
  - [ ] Transcript view (meeting notes)
  - [ ] AI summary panel
  - [ ] Action items list
- [ ] **Transcript.tsx**
  - [ ] Speaker labels
  - [ ] Timestamp navigation
  - [ ] Highlight on selection
- [ ] **queries.ts**
  - [ ] "Summarize this meeting" → show AI summary
  - [ ] "What are the action items?" → highlight action items
  - [ ] "Who said X?" → find speaker in transcript
- [ ] Mock data in `data.ts` (sample transcript)
- [ ] Test transcript interactions
- [ ] Mobile responsive layout

#### Polish & Cross-Demo Consistency (Day 14)
- [ ] **Consistency Pass**
  - [ ] All demos use same color scheme (teal-orange)
  - [ ] Agent sidebar has consistent styling
  - [ ] Loading states match across demos
  - [ ] Error handling is consistent
- [ ] **Mobile Responsiveness**
  - [ ] All demos work on mobile (320px+)
  - [ ] Agent sidebar collapses on mobile
  - [ ] Tables become scrollable
- [ ] **Dark Mode**
  - [ ] All demos support dark mode
  - [ ] No contrast issues
  - [ ] Gradients adjust for dark backgrounds
- [ ] **Accessibility**
  - [ ] Keyboard navigation works
  - [ ] Screen reader labels
  - [ ] Focus indicators visible
- [ ] **Performance**
  - [ ] No lag when typing queries
  - [ ] Smooth animations (60fps)
  - [ ] Code splitting for each demo

### Deliverables
- [x] Hotel PMS Demo (fully interactive)
- [x] CRM Demo (fully interactive)
- [x] Instagram Demo (fully interactive)
- [x] Notion Demo (fully interactive)
- [x] Granola Demo (fully interactive)
- [x] All demos mobile-responsive and dark mode compatible
- [x] Consistent agent interaction patterns

### Dependencies
- Phase 2 must be complete (mock UI framework)

### Risk Factors
- **High:** Scope creep with features → **Mitigation:** Stick to core query patterns, avoid extra features
- **Medium:** Mobile responsiveness challenges → **Mitigation:** Test on mobile early, simplify layouts
- **Low:** Performance issues with 5 demos → **Mitigation:** Code split each demo, lazy load

---

## Phase 4: Core Pages Redesign
**Timeline:** Days 15-18 (4 days)  
**Status:** ⏸️ Pending Phase 3

### Objectives
- Apply new design system to core sections
- Rewrite content with futuristic/visionary tone
- Integrate mock UIs into relevant sections
- Add Aceternity/Magic UI components for visual flair

### Tasks

#### Hero Section (Day 15)
- [ ] Update `src/components/sections/Hero.tsx`
  - [ ] Add BackgroundBeams from Aceternity
  - [ ] Rewrite headline with HyperText animation (Magic UI)
  - [ ] New copy: "Turn Human Knowledge Into AI That Never Forgets"
  - [ ] Update subtitle with visionary tone
  - [ ] Gradient button with teal-orange
  - [ ] Add animated metrics (NumberTicker)
- [ ] Test on mobile
- [ ] Verify dark mode

#### Features Section (Days 15-16)
- [ ] Update `src/components/sections/Features.tsx`
  - [ ] Wrap feature cards in CardSpotlight (Aceternity)
  - [ ] Rewrite feature titles:
    - "Skill Builder" → "Teach Once, Automate Forever"
    - "Certification" → "99% Reliability, Guaranteed"
    - "Self-Healing" → "Software Changes, Agents Adapt"
  - [ ] Add mock UI previews in cards (small screenshots or iframes)
  - [ ] Update descriptions with visionary language
- [ ] Update `src/lib/constants.ts` with new feature content
- [ ] Test feature grid responsiveness

#### Journey Section (Day 16)
- [ ] Update `src/components/sections/Journey.tsx`
  - [ ] Replace with Aceternity Timeline component
  - [ ] Rewrite journey stages with storytelling:
    - "Learn" → "Capture Human Expertise"
    - "Certify" → "Guarantee Superhuman Reliability"
    - "Deploy" → "Unleash 24/7 Automation"
  - [ ] Add icons and visual flourishes
  - [ ] Gradient accents on active stage
- [ ] Test timeline on mobile

#### Use Cases Section (Days 17-18)
- [ ] Update `src/components/sections/UseCases.tsx`
  - [ ] Rewrite use case intros with storytelling
  - [ ] Embed live mock UIs in each use case:
    - Hotel Management → Hotel PMS Demo
    - Sales Automation → CRM Demo
    - Social Media → Instagram Demo
    - Task Automation → Notion Demo
    - Meeting Intelligence → Granola Demo
  - [ ] Add "Try It" CTAs that activate agent query input
  - [ ] Animated transitions between use cases
- [ ] Update `src/lib/constants.ts` with new use case content
- [ ] Test embedded demos work smoothly

### Deliverables
- [x] Hero section redesigned with new design system
- [x] Features section with new copy and CardSpotlight
- [x] Journey section with Timeline component
- [x] Use Cases section with embedded mock UIs
- [x] All sections mobile-responsive and dark mode compatible

### Dependencies
- Phase 3 must be complete (mock UIs ready to embed)

### Risk Factors
- **Medium:** Content rewrite takes longer than expected → **Mitigation:** Focus on key sections first
- **Low:** Embedded demos impact performance → **Mitigation:** Lazy load, use IntersectionObserver

---

## Phase 5: Supporting Pages & Components
**Timeline:** Days 19-21 (3 days)  
**Status:** ⏸️ Pending Phase 4

### Objectives
- Update Navbar and Footer with new branding
- Redesign ROI Calculator with new visual style
- Update Differentiation and CTA sections
- Ensure all supporting components support dark mode

### Tasks

#### Navbar & Footer (Day 19)
- [ ] Update `src/components/layout/Navbar.tsx`
  - [ ] Add logo: `public/agent school logo.png`
  - [ ] Apply teal-orange gradient to active nav items
  - [ ] Smooth scroll behavior
  - [ ] Mobile menu redesign with dark mode
- [ ] Update `src/components/layout/Footer.tsx`
  - [ ] Dark background (slate-900 in light, slate-950 in dark)
  - [ ] Teal-orange accent links
  - [ ] Social icons with gradient hover
  - [ ] Newsletter signup (if applicable)
- [ ] Test both on mobile and dark mode

#### ROI Calculator Redesign (Days 19-20)
- [ ] Update `src/components/interactive/ROICalculator.tsx`
  - [ ] Replace with shadcn Slider components
  - [ ] Wrap in CardSpotlight for visual flair
  - [ ] Add NumberTicker for animated result values
  - [ ] Install `recharts` for visualization: `npm install recharts`
  - [ ] Add bar chart showing cost savings over time
  - [ ] Gradient accent on result cards
  - [ ] Dark mode support for chart
- [ ] Test calculations work correctly
- [ ] Test mobile responsiveness

#### Differentiation & CTA (Day 21)
- [ ] Update `src/components/sections/Differentiation.tsx`
  - [ ] Rewrite copy with visionary tone
  - [ ] "What Makes Agent School Different" → "Join The AI Revolution"
  - [ ] Bullet points become story beats
  - [ ] Add gradient backgrounds
- [ ] Update final CTA section
  - [ ] Headline: "The Future Is Already Here"
  - [ ] Subtext: "Will you lead it, or watch from the sidelines?"
  - [ ] Large gradient button: "Join The Revolution →"
  - [ ] Background: BackgroundBeams
- [ ] Update `src/lib/constants.ts` with new copy

### Deliverables
- [x] Navbar with logo and dark mode
- [x] Footer with dark mode and gradient accents
- [x] ROI Calculator redesigned with charts and animations
- [x] Differentiation and CTA sections redesigned
- [x] All supporting components mobile-responsive

### Dependencies
- Phase 4 must be complete (core pages done)

### Risk Factors
- **Low:** Logo sizing issues → **Mitigation:** Test multiple screen sizes
- **Low:** Chart library integration → **Mitigation:** Use recharts examples as reference

---

## Phase 6: Content Audit & Documentation
**Timeline:** Days 22-24 (3 days)  
**Status:** ⏸️ Pending Phase 5

### Objectives
- Audit all content for tone consistency
- Rewrite remaining copy with futuristic/visionary voice
- Complete all documentation
- Accessibility audit (WCAG AA)

### Tasks

#### Content Audit (Days 22-23)
- [ ] **Copy Review**
  - [ ] Audit all sections for academic tone → rewrite as visionary
  - [ ] Remove jargon, add storytelling
  - [ ] Ensure CTAs are forward-looking ("Join The Revolution" not "Learn More")
  - [ ] Update meta descriptions and page titles
- [ ] **Update `src/lib/constants.ts`**
  - [ ] NAV_ITEMS
  - [ ] FEATURES (titles, descriptions)
  - [ ] USE_CASES (intros, benefits)
  - [ ] JOURNEY_STAGES
  - [ ] DIFFERENTIATION points
  - [ ] CTA_MESSAGES
- [ ] **Proofread**
  - [ ] Spelling/grammar check
  - [ ] Consistent voice across all sections
  - [ ] Call-to-action clarity

#### Documentation (Day 23)
- [x] **DESIGN_SYSTEM.md** (already created)
- [x] **MOCK_UI_FRAMEWORK.md** (already created)
- [x] **COMPONENTS_GUIDE.md** (already created)
- [ ] **Update AGENTS.md**
  - [ ] Add "Recent Redesign (2026)" section
  - [ ] Document new color system
  - [ ] Document mock UI framework location
  - [ ] Document component library setup
  - [ ] Update code style examples with new patterns

#### Accessibility Audit (Day 24)
- [ ] **WCAG AA Compliance**
  - [ ] Color contrast checker (all text meets 4.5:1 ratio)
  - [ ] Keyboard navigation (all interactive elements accessible)
  - [ ] Screen reader testing (alt text, ARIA labels)
  - [ ] Focus indicators (visible on all focusable elements)
  - [ ] Skip links (skip to main content)
- [ ] **Testing Tools**
  - [ ] Use axe DevTools extension
  - [ ] Test with NVDA/VoiceOver screen readers
  - [ ] Manual keyboard-only testing
- [ ] **Fix Issues**
  - [ ] Add missing alt text
  - [ ] Fix color contrast issues
  - [ ] Add ARIA labels where needed
  - [ ] Improve focus indicators

### Deliverables
- [x] All content rewritten with visionary tone
- [x] Updated constants.ts with final copy
- [x] All 4 documentation files complete
- [x] Accessibility audit complete with fixes
- [x] WCAG AA compliance confirmed

### Dependencies
- Phase 5 must be complete (all pages and components done)

### Risk Factors
- **Low:** Content rewrites take longer → **Mitigation:** Prioritize high-traffic sections
- **Low:** Accessibility issues discovered late → **Mitigation:** Test incrementally during earlier phases

---

## Phase 7: Testing, Optimization & Launch
**Timeline:** Days 25-28 (4 days)  
**Status:** ⏸️ Pending Phase 6

### Objectives
- Cross-browser and device testing
- Performance optimization
- User testing and feedback
- Production deployment

### Tasks

#### Cross-Browser Testing (Day 25)
- [ ] **Browsers**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)
- [ ] **Test Cases**
  - [ ] All mock UIs render correctly
  - [ ] Dark mode works in all browsers
  - [ ] Animations are smooth
  - [ ] Forms submit correctly
  - [ ] Mobile responsive on all browsers
- [ ] **Fix Issues**
  - [ ] Document browser-specific bugs
  - [ ] Add polyfills if needed
  - [ ] Test fixes across browsers

#### Performance Optimization (Days 25-26)
- [ ] **Lighthouse Audit**
  - [ ] Run Lighthouse on all pages
  - [ ] Target: Performance 90+, Accessibility 100, Best Practices 100, SEO 100
- [ ] **Optimizations**
  - [ ] Code splitting for mock UI demos
  - [ ] Lazy load images and videos
  - [ ] Optimize fonts (subset, preload)
  - [ ] Minimize bundle size (tree-shake, remove unused code)
  - [ ] Add next/image for all images
  - [ ] Implement loading skeletons
- [ ] **Test Improvements**
  - [ ] Re-run Lighthouse
  - [ ] Verify Core Web Vitals (LCP, FID, CLS)

#### User Testing (Day 26-27)
- [ ] **Test with Real Users**
  - [ ] Recruit 3-5 testers (internal team or friends)
  - [ ] Give tasks: "Find the ROI calculator", "Try a mock UI demo", "Book a consultation"
  - [ ] Observe where they struggle
  - [ ] Collect feedback on design, copy, usability
- [ ] **Feedback Integration**
  - [ ] Prioritize critical issues (blockers, confusing UI)
  - [ ] Fix high-priority issues
  - [ ] Document nice-to-have improvements for future

#### Pre-Launch Checklist (Day 27)
- [ ] **Technical**
  - [ ] Run `npm run build` successfully
  - [ ] Test production build locally (`npm run start`)
  - [ ] No console errors
  - [ ] All links work (no 404s)
  - [ ] Forms submit correctly
  - [ ] Analytics tracking works (if applicable)
- [ ] **Content**
  - [ ] All copy is final and approved
  - [ ] No placeholder text (Lorem ipsum)
  - [ ] Meta tags and OG images set
  - [ ] Favicon updated
- [ ] **SEO**
  - [ ] Sitemap generated
  - [ ] Robots.txt configured
  - [ ] Structured data added (if applicable)

#### Deploy to Production (Day 28)
- [ ] **Vercel Deployment**
  - [ ] Push to main branch (triggers auto-deploy)
  - [ ] Monitor deployment in Vercel dashboard
  - [ ] Verify production URL loads correctly
  - [ ] Test all pages in production
  - [ ] Test mobile on real devices
  - [ ] Test dark mode in production
- [ ] **Post-Launch Monitoring**
  - [ ] Monitor analytics for traffic
  - [ ] Watch for errors in Vercel logs
  - [ ] Collect initial user feedback
  - [ ] Document any issues for hotfix

### Deliverables
- [x] Cross-browser testing complete (all major browsers)
- [x] Lighthouse scores 90+ (all metrics)
- [x] User testing feedback collected and integrated
- [x] Production deployment successful
- [x] Post-launch monitoring active

### Dependencies
- Phase 6 must be complete (all content and docs done)

### Risk Factors
- **Medium:** Performance issues in production → **Mitigation:** Test production build locally first
- **Low:** Last-minute bugs discovered → **Mitigation:** Buffer time in Days 27-28

---

## 📦 Technical Stack

### Existing Packages
```json
{
  "next": "16.1.0",
  "react": "19.0.0",
  "typescript": "5.0.0",
  "tailwindcss": "3.4.0",
  "framer-motion": "12.0.0",
  "lucide-react": "latest",
  "lottie-react": "latest"
}
```

### New Packages (To Install)
```bash
# Dark mode
npm install next-themes

# Charts (ROI Calculator)
npm install recharts

# shadcn/ui CLI (installs components)
npx shadcn@latest init
npx shadcn@latest add button card input select tabs badge slider table dialog

# Aceternity UI (copy components manually from https://ui.aceternity.com)
# - BackgroundBeams
# - Timeline
# - CardSpotlight
# - TextGenerateEffect

# Magic UI (copy components manually from https://magicui.design)
# - HyperText
# - NumberTicker
# - AnimatedList
```

### File Structure Changes
```
src/
├── components/
│   ├── aceternity/           # NEW: Aceternity UI components
│   │   ├── BackgroundBeams.tsx
│   │   ├── Timeline.tsx
│   │   ├── CardSpotlight.tsx
│   │   └── TextGenerateEffect.tsx
│   ├── magic/                # NEW: Magic UI components
│   │   ├── HyperText.tsx
│   │   ├── NumberTicker.tsx
│   │   └── AnimatedList.tsx
│   ├── mocks/                # NEW: Interactive mock UIs
│   │   ├── _framework/       # Shared framework
│   │   │   ├── MockUIShell.tsx
│   │   │   ├── AgentInterface.tsx
│   │   │   ├── MockUIContext.tsx
│   │   │   ├── InteractiveElement.tsx
│   │   │   ├── DataDisplay.tsx
│   │   │   └── LoadingStates.tsx
│   │   ├── hotel-pms/
│   │   │   ├── HotelPMSDemo.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── queries.ts
│   │   │   └── data.ts
│   │   ├── crm/
│   │   ├── instagram/
│   │   ├── notion/
│   │   └── granola/
│   ├── ui/                   # UPDATED: shadcn/ui components replace old
│   ├── ThemeProvider.tsx     # NEW: Dark mode provider
├── types/                    # NEW: TypeScript interfaces
│   ├── agent.ts
│   └── mock-ui.ts
├── lib/
│   ├── utils.ts              # NEW: shadcn utility functions
│   └── query-utils.ts        # NEW: Agent query utilities
```

---

## ✅ Success Criteria

### Visual Design
- [x] Teal-orange gradient system implemented throughout
- [x] Dark mode auto-detects and works flawlessly (no contrast issues)
- [x] Logo (`public/agent school logo.png`) prominently displayed
- [x] Modern, futuristic aesthetic achieved (not academic)

### Interactive Demos
- [x] All 5 mock UIs fully functional (Hotel PMS, CRM, Instagram, Notion, Granola)
- [x] Users can type queries and receive realistic agent responses
- [x] UI elements highlight during agent interactions
- [x] Mobile-responsive (works on 320px+ screens)

### Content Quality
- [x] All copy rewritten with futuristic/visionary tone
- [x] Hero section is inspiring and memorable
- [x] CTAs are forward-looking ("Join The Revolution")
- [x] No academic jargon remains

### Technical Quality
- [x] Lighthouse score 90+ (Performance, Accessibility, Best Practices, SEO)
- [x] WCAG AA compliant (4.5:1 contrast, keyboard nav, screen reader support)
- [x] Works on all major browsers (Chrome, Firefox, Safari, Edge)
- [x] No console errors in production

### Documentation
- [x] DESIGN_SYSTEM.md complete and comprehensive
- [x] MOCK_UI_FRAMEWORK.md complete with code examples
- [x] COMPONENTS_GUIDE.md complete with usage patterns
- [x] AGENTS.md updated with redesign context

---

## 📚 Resources & References

### Design Inspiration
- **delve.co** - Teal-orange gradient system, dark mode elegance
- **Linear** - Minimalist UI, smooth animations
- **Vercel** - Modern SaaS aesthetic
- **Stripe** - Clean, professional design

### Component Libraries
- **shadcn/ui** - https://ui.shadcn.com (base primitives)
- **Aceternity UI** - https://ui.aceternity.com (animation effects)
- **Magic UI** - https://magicui.design (text animations)

### Tools
- **Figma** - Design mockups (if needed)
- **Coolors** - Color palette generator
- **WebAIM Contrast Checker** - https://webaim.org/resources/contrastchecker/
- **axe DevTools** - Accessibility testing
- **Lighthouse** - Performance/accessibility audit

---

## 📝 Notes & Decisions

### Why 5 Mock UIs?
User explicitly requested all 5 demos be fully interactive (not just visual mockups). This showcases Agent School's capabilities across different industries and use cases.

### Why No 3D/Three.js?
User approved plan does NOT include 3D elements. Focus is on interactive demos and gradient design system. Keep it simple, fast, and accessible.

### Why Auto-Detect Dark Mode?
User prefers automatic dark mode (follows system preference) rather than manual toggle. Simplifies UX and reduces UI clutter.

### Why Free Components Only?
No budget for premium components. Use free/MIT licensed libraries: shadcn/ui, Aceternity UI (free tier), Magic UI (free tier).

### Why Rewrite Content?
Current copy has "academic precision" tone. User wants "futuristic & visionary" to inspire, not just inform. Transformation, not iteration.

---

**Last Updated:** 2026-02-09  
**Document Version:** 1.0  
**Status:** Documentation complete, ready for Phase 1 implementation
