# Agent School Website Redesign Roadmap

> **Project Duration:** 28-32 days  
> **Start Date:** TBD  
> **Target Launch:** TBD  
> **Project Manager:** TBD

---

## 🎯 Project Overview

### Vision
Transform Agent School's marketing website into a cutting-edge, futuristic platform that embodies AI innovation through immersive 3D experiences, sophisticated animations, and a bold teal-orange gradient design system. The redesign positions Agent School as the definitive leader in AI agent education and certification.

### Goals
1. **Visual Impact:** Create a memorable, futuristic brand experience that stands out in the AI education space
2. **Engagement:** Increase user interaction through 3D elements, micro-animations, and immersive storytelling
3. **Conversion:** Improve booking rates for consultations through enhanced UX and trust signals
4. **Performance:** Maintain exceptional Core Web Vitals despite rich visual experiences
5. **Accessibility:** Ensure WCAG 2.1 AA compliance across all new components

### Scope
- **In Scope:**
  - Complete visual redesign with new color system (teal-orange gradients)
  - Dark mode implementation with gradient theming
  - 3D interactive elements (Three.js/R3F integration)
  - Advanced Framer Motion animations and scroll effects
  - Component library enhancements (Aceternity UI, Magic UI, shadcn/ui)
  - ROI calculator redesign with 3D visualizations
  - Responsive design refinements for mobile experiences
  
- **Out of Scope:**
  - Backend functionality changes (remains static Next.js)
  - Content Management System (CMS) integration
  - User authentication or account systems
  - Blog/content publishing features
  - Multi-language support (English only)

---

## 🎨 Design Direction

### Color System: Teal-Orange Gradient

#### Primary Palette
```css
/* Teal Spectrum */
--teal-50:  #E6F9F9   /* Lightest accents */
--teal-100: #B3F0F0   /* Subtle backgrounds */
--teal-200: #80E6E6   /* Card borders */
--teal-300: #4DDDDD   /* Interactive elements */
--teal-400: #26D4D4   /* Primary actions */
--teal-500: #00C7C7   /* Brand teal */
--teal-600: #00A3A3   /* Hover states */
--teal-700: #007F7F   /* Pressed states */
--teal-800: #005C5C   /* Dark mode text */
--teal-900: #003939   /* Deep accents */

/* Orange Spectrum */
--orange-50:  #FFF4E6  /* Light backgrounds */
--orange-100: #FFE4B3  /* Subtle highlights */
--orange-200: #FFD480  /* Card accents */
--orange-300: #FFC44D  /* Secondary actions */
--orange-400: #FFB426  /* Accent elements */
--orange-500: #FE9F4D  /* Brand orange (existing amber-500) */
--orange-600: #E67A00  /* Hover states */
--orange-700: #B35F00  /* Pressed states */
--orange-800: #804400  /* Dark mode accents */
--orange-900: #4D2900  /* Deep shadows */
```

#### Gradient Presets
```css
/* Hero Gradients */
--gradient-hero-light: linear-gradient(135deg, #E6F9F9 0%, #FFF4E6 100%)
--gradient-hero-dark:  linear-gradient(135deg, #003939 0%, #4D2900 100%)

/* Interactive Gradients */
--gradient-cta: linear-gradient(90deg, #00C7C7 0%, #FE9F4D 100%)
--gradient-hover: linear-gradient(90deg, #00A3A3 0%, #E67A00 100%)

/* Background Gradients */
--gradient-mesh-light: radial-gradient(at 0% 0%, #E6F9F9 0%, transparent 50%),
                        radial-gradient(at 100% 100%, #FFF4E6 0%, transparent 50%)
--gradient-mesh-dark:  radial-gradient(at 0% 0%, #003939 0%, transparent 50%),
                        radial-gradient(at 100% 100%, #4D2900 0%, transparent 50%)
```

### Aesthetic Principles
- **Futuristic Minimalism:** Clean interfaces with strategic complexity
- **Depth & Dimension:** Layered 3D elements, parallax scrolling, z-axis motion
- **Fluid Motion:** Smooth 60fps animations, organic easing curves
- **Luminosity:** Glow effects, light rays, ambient lighting simulation
- **Glassmorphism:** Frosted glass cards with backdrop blur
- **Neumorphism (subtle):** Soft shadows for tactile depth on key CTAs

### Dark Mode Strategy
- **Toggle:** Persistent user preference stored in localStorage
- **Transitions:** Smooth 300ms color transitions on theme change
- **Contrast Ratios:** All text meets WCAG AA (4.5:1 minimum)
- **3D Lighting:** Adjust ambient/directional lights for dark backgrounds
- **Gradient Shifts:** Invert gradient anchors from light → dark

### Typography (Existing + Enhancements)
- **Display (Fraunces):** Hero headlines, section titles
- **Body (DM Sans):** Paragraph text, UI labels
- **Mono (JetBrains Mono):** Code snippets, data displays
- **NEW Variable Font:** Consider Inter Variable for better performance

---

## 📊 Current Status

### Phase Status
- **Current Phase:** Phase 0 - Planning (Pre-start)
- **Completion:** 0 of 7 phases completed (0%)
- **Days Elapsed:** 0 / 28-32 days
- **On Track:** ✅ Yes

### Completed Tasks
- [ ] None yet - project not started

### In Progress
- [x] REDESIGN_ROADMAP.md creation
- [ ] Design system documentation
- [ ] Component inventory audit

### Blocked/Issues
- [ ] None identified yet

### Next Up (Phase 1 - Days 1-4)
- [ ] Design system finalization (color tokens, typography scale)
- [ ] Tailwind config update with teal-orange palette
- [ ] Dark mode provider setup
- [ ] Component library research and selection

---

## 🗓️ Phase Breakdown

### Phase 1: Foundation & Design System
**Timeline:** Days 1-4 (4 days)

#### Objectives
- Establish new color system and design tokens
- Set up dark mode architecture
- Audit existing components for redesign needs
- Install and configure new component libraries

#### Tasks
- [ ] **Design Tokens**
  - [ ] Define teal-orange color variables in Tailwind config
  - [ ] Create gradient utility classes
  - [ ] Update typography scale (if needed)
  - [ ] Define spacing/shadow tokens for glassmorphism
  
- [ ] **Dark Mode Setup**
  - [ ] Install `next-themes` package
  - [ ] Create ThemeProvider component
  - [ ] Add theme toggle UI (Navbar)
  - [ ] Test color contrast ratios (WCAG AA)
  
- [ ] **Component Libraries**
  - [ ] Evaluate Aceternity UI components (bento grids, cards, backgrounds)
  - [ ] Evaluate Magic UI components (animated beams, particles)
  - [ ] Install shadcn/ui primitives (if not already present)
  - [ ] Create integration plan (which library for which use case)
  
- [ ] **Audit Existing Components**
  - [ ] `components/ui/` - identify redesign candidates
  - [ ] `components/sections/` - map to new design system
  - [ ] `components/interactive/` - plan 3D upgrade paths

#### Deliverables
- [ ] Updated `tailwind.config.ts` with new color system
- [ ] `ThemeProvider.tsx` with dark mode support
- [ ] Component library documentation in `lib/component-guide.md`
- [ ] Phase 1 completion report

#### Dependencies
- None (foundational phase)

#### Risk Factors
- **Medium:** Color contrast issues in dark mode → Mitigation: Use contrast checker tools early
- **Low:** Component library conflicts → Mitigation: Isolate libraries by use case

---

### Phase 2: Core Component Redesign
**Timeline:** Days 5-10 (6 days)

#### Objectives
- Redesign foundational UI components with new aesthetic
- Implement glassmorphism and gradient effects
- Add micro-interactions and hover states
- Ensure responsive behavior across breakpoints

#### Tasks
- [ ] **Navigation (Navbar)**
  - [ ] Apply teal-orange gradient to brand logo
  - [ ] Add glassmorphic background on scroll
  - [ ] Implement smooth scroll-to-section behavior
  - [ ] Add theme toggle with animated icon
  - [ ] Mobile menu redesign with slide-in animation
  
- [ ] **Buttons & CTAs**
  - [ ] Redesign Button component with gradient variants
  - [ ] Add glow effect on hover (box-shadow + opacity)
  - [ ] Implement loading states with spinner animation
  - [ ] Create icon button variants
  
- [ ] **Cards**
  - [ ] Redesign Card component with glassmorphic background
  - [ ] Add subtle border gradients
  - [ ] Implement hover lift effect (y-axis translation + shadow)
  - [ ] Create GlassCard variant with backdrop-blur
  
- [ ] **Badges & Tags**
  - [ ] Update Badge component with gradient fills
  - [ ] Add pulse animation for "New" badges
  - [ ] Create outline variants
  
- [ ] **Footer**
  - [ ] Redesign layout with gradient mesh background
  - [ ] Add social links with hover animations
  - [ ] Implement newsletter signup (if applicable)
  - [ ] Add "Scroll to Top" button with Framer Motion

#### Deliverables
- [ ] Redesigned components in `components/ui/`
- [ ] Storybook/documentation for each component (optional)
- [ ] Responsive testing checklist completed
- [ ] Phase 2 completion report

#### Dependencies
- Phase 1 design tokens and dark mode setup

#### Risk Factors
- **High:** Glassmorphism performance on low-end devices → Mitigation: Use CSS containment, reduce blur radius on mobile
- **Medium:** Gradient rendering inconsistencies across browsers → Mitigation: Test in Chrome, Firefox, Safari

---

### Phase 3: 3D Integration & Three.js Setup
**Timeline:** Days 11-16 (6 days)

#### Objectives
- Integrate Three.js and React Three Fiber (R3F)
- Create reusable 3D scene wrapper components
- Implement first 3D hero element
- Optimize 3D rendering performance

#### Tasks
- [ ] **Three.js Setup**
  - [ ] Install `three`, `@react-three/fiber`, `@react-three/drei`
  - [ ] Create `components/3d/Scene.tsx` wrapper component
  - [ ] Set up lighting system (ambient, directional, point lights)
  - [ ] Implement camera controls (OrbitControls, limited rotation)
  
- [ ] **3D Hero Element**
  - [ ] Design concept: Floating geometric shapes or abstract agent "brain"
  - [ ] Model 3D objects (use primitives or import GLTF)
  - [ ] Add particle effects (stars, glowing orbs)
  - [ ] Implement mouse parallax interaction
  - [ ] Add scroll-based animation (rotate/scale on scroll)
  
- [ ] **Performance Optimization**
  - [ ] Implement lazy loading for 3D scenes (below fold)
  - [ ] Use `useFrame` sparingly, throttle updates
  - [ ] Enable shadows conditionally (desktop only)
  - [ ] Add loading fallback (skeleton or 2D placeholder)
  
- [ ] **Dark Mode for 3D**
  - [ ] Adjust material emissiveness for dark theme
  - [ ] Update light intensities based on theme
  - [ ] Test visibility of 3D elements on dark backgrounds

#### Deliverables
- [ ] `components/3d/Scene.tsx` - Reusable 3D canvas wrapper
- [ ] `components/3d/HeroScene.tsx` - Hero section 3D element
- [ ] Performance benchmarks (FPS, load time)
- [ ] Phase 3 completion report

#### Dependencies
- Phase 1 dark mode architecture
- Phase 2 Hero section structure

#### Risk Factors
- **Critical:** 3D performance on mobile/tablets → Mitigation: Disable 3D on devices with GPU score < threshold, show static fallback
- **High:** Large bundle size increase → Mitigation: Code-split 3D components, lazy load Three.js
- **Medium:** Learning curve for R3F → Mitigation: Start with simple primitives, reference R3F examples

---

### Phase 4: Advanced Animations & Scroll Effects
**Timeline:** Days 17-20 (4 days)

#### Objectives
- Enhance Framer Motion usage with advanced patterns
- Implement scroll-triggered animations (parallax, reveal, morph)
- Add page transition animations
- Create animated background effects

#### Tasks
- [ ] **Scroll Animations**
  - [ ] Implement scroll-linked progress bars (Framer Motion `useScroll`)
  - [ ] Create parallax layers for hero and feature sections
  - [ ] Add fade-in/slide-up reveals for content blocks
  - [ ] Implement SVG path drawing animations
  
- [ ] **Page Transitions**
  - [ ] Set up route transition wrapper (if multi-page in future)
  - [ ] Add section-to-section smooth scrolling
  - [ ] Create modal open/close animations (if applicable)
  
- [ ] **Background Effects**
  - [ ] Animated gradient mesh (CSS or canvas-based)
  - [ ] Floating particle system (Magic UI or custom)
  - [ ] Light beam effects (SVG gradients + motion)
  
- [ ] **Micro-Interactions**
  - [ ] Button ripple effects on click
  - [ ] Card tilt on hover (3D transform)
  - [ ] Input focus animations (border glow)
  - [ ] Loading skeletons with shimmer effect

#### Deliverables
- [ ] Enhanced animation components in `components/animations/`
- [ ] Background effect components in `components/effects/`
- [ ] Animation performance audit (60fps maintained)
- [ ] Phase 4 completion report

#### Dependencies
- Phase 2 component structure
- Phase 3 scroll behavior setup

#### Risk Factors
- **High:** Animation jank on low-end devices → Mitigation: Use `will-change` sparingly, prefer transforms over layout changes
- **Medium:** Overuse of animations (cognitive overload) → Mitigation: Design review for "animation budget" per section

---

### Phase 5: Interactive Demos & ROI Calculator Upgrade
**Timeline:** Days 21-24 (4 days)

#### Objectives
- Redesign ROI Calculator with 3D visualization
- Enhance interactive demos with new animations
- Add real-time data visualizations
- Improve mobile usability of interactive elements

#### Tasks
- [ ] **ROI Calculator Redesign**
  - [ ] Apply glassmorphic card design
  - [ ] Replace static results with animated number counters
  - [ ] Add 3D bar chart or donut chart visualization (R3F or Chart.js 3D)
  - [ ] Implement gradient fill animations for data bars
  - [ ] Add "Export Results" feature (PDF/PNG)
  
- [ ] **Certification Demo Upgrade**
  - [ ] Add terminal typing animation effect
  - [ ] Implement progress bar with gradient fill
  - [ ] Add confetti animation on completion (Magic UI)
  
- [ ] **Self-Healing Demo Upgrade**
  - [ ] Redesign error state UI with pulsing red glow
  - [ ] Add animated "healing" transition (morph + color shift)
  - [ ] Implement code diff visualization
  
- [ ] **Workflow Automation Demo Upgrade**
  - [ ] Add animated flowchart (SVG path drawing)
  - [ ] Implement task node pulse animations
  - [ ] Add real-time progress indicator

#### Deliverables
- [ ] Redesigned `components/interactive/ROICalculator.tsx`
- [ ] Updated demo components with new animations
- [ ] Mobile interaction testing report
- [ ] Phase 5 completion report

#### Dependencies
- Phase 3 3D setup (for calculator visualization)
- Phase 4 animation utilities

#### Risk Factors
- **High:** Complex 3D charts may confuse users → Mitigation: Add 2D fallback toggle, A/B test with users
- **Medium:** Mobile touch interactions with 3D → Mitigation: Simplify 3D controls on touch devices

---

### Phase 6: Section-by-Section Redesign
**Timeline:** Days 25-28 (4 days)

#### Objectives
- Apply new design system to all page sections
- Implement section-specific 3D elements
- Optimize content layout for storytelling flow
- Ensure visual consistency across sections

#### Tasks
- [ ] **Hero Section**
  - [ ] Integrate 3D scene background (Phase 3 deliverable)
  - [ ] Update headline typography with gradient text
  - [ ] Add animated CTA button with glow effect
  - [ ] Implement scroll indicator (animated arrow)
  
- [ ] **Features Section**
  - [ ] Redesign feature cards with glassmorphism
  - [ ] Add Lottie animations for feature icons
  - [ ] Implement bento grid layout (Aceternity UI)
  - [ ] Add hover effects (card lift + glow)
  
- [ ] **Journey/Process Section**
  - [ ] Create animated timeline (SVG path + markers)
  - [ ] Add step-by-step reveal on scroll
  - [ ] Implement gradient progress line
  
- [ ] **Use Cases Section**
  - [ ] Redesign use case cards with image overlays
  - [ ] Add gradient borders and hover states
  - [ ] Implement carousel/slider (if applicable)
  
- [ ] **Metrics/Stats Section**
  - [ ] Animate numbers with count-up effect
  - [ ] Add gradient backgrounds to stat cards
  - [ ] Implement pulsing icons
  
- [ ] **Testimonials Section**
  - [ ] Redesign testimonial cards with glassmorphism
  - [ ] Add avatar glow effects
  - [ ] Implement auto-rotating carousel (if applicable)
  
- [ ] **CTA Section**
  - [ ] Large gradient button with glow animation
  - [ ] Add background particle effect
  - [ ] Implement urgency timer (if applicable)

#### Deliverables
- [ ] All section components redesigned in `components/sections/`
- [ ] Visual consistency checklist completed
- [ ] Section performance audit
- [ ] Phase 6 completion report

#### Dependencies
- All previous phases (design system, 3D, animations)

#### Risk Factors
- **Medium:** Timeline pressure - may need to prioritize critical sections → Mitigation: Focus on Hero, Features, CTA first
- **Low:** Content changes required for new layouts → Mitigation: Coordinate with content team early

---

### Phase 7: Polish, Testing & Launch Prep
**Timeline:** Days 29-32 (4 days)

#### Objectives
- Fix bugs and visual inconsistencies
- Optimize performance (Lighthouse scores)
- Ensure accessibility compliance
- Prepare for production deployment

#### Tasks
- [ ] **Quality Assurance**
  - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - [ ] Mobile device testing (iOS Safari, Android Chrome)
  - [ ] Tablet testing (iPad, Android tablets)
  - [ ] Keyboard navigation testing
  
- [ ] **Performance Optimization**
  - [ ] Run Lighthouse audits (target: 90+ for all metrics)
  - [ ] Optimize images (WebP conversion, lazy loading)
  - [ ] Code-split large components
  - [ ] Reduce JavaScript bundle size (analyze with `@next/bundle-analyzer`)
  - [ ] Implement font preloading
  
- [ ] **Accessibility Audit**
  - [ ] WAVE tool scan for WCAG violations
  - [ ] Screen reader testing (NVDA, VoiceOver)
  - [ ] Color contrast verification (all text 4.5:1 minimum)
  - [ ] Focus indicator visibility
  - [ ] ARIA labels on interactive elements
  
- [ ] **SEO & Metadata**
  - [ ] Update Open Graph images with new design
  - [ ] Verify structured data (JSON-LD)
  - [ ] Check meta descriptions and titles
  - [ ] Generate sitemap (if applicable)
  
- [ ] **Final Polish**
  - [ ] Review all animations for timing consistency
  - [ ] Fix any visual glitches or alignment issues
  - [ ] Update AGENTS.md with new design system
  - [ ] Write deployment guide
  
- [ ] **Deployment Prep**
  - [ ] Test production build locally (`npm run build && npm run start`)
  - [ ] Environment variable verification
  - [ ] Vercel preview deployment
  - [ ] Stakeholder review and feedback
  - [ ] Final approval for production launch

#### Deliverables
- [ ] QA testing report with browser/device matrix
- [ ] Lighthouse performance report
- [ ] Accessibility audit report (WCAG 2.1 AA compliance)
- [ ] Deployment checklist
- [ ] Phase 7 completion report
- [ ] **🚀 Production Launch**

#### Dependencies
- All previous phases completed

#### Risk Factors
- **Critical:** Performance regressions not caught until final testing → Mitigation: Run Lighthouse after each phase
- **High:** Accessibility issues discovered late → Mitigation: Use automated tools throughout development
- **Medium:** Browser-specific bugs → Mitigation: Test in all browsers earlier in process

---

## 🛠️ Technical Stack

### Existing Dependencies
```json
{
  "next": "16.1.0",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "typescript": "5.x",
  "tailwindcss": "3.4.x",
  "framer-motion": "12.x",
  "lucide-react": "latest",
  "lottie-react": "latest"
}
```

### New Dependencies (To Install)

#### Phase 1 - Design System
```bash
npm install next-themes                    # Dark mode with no flash
npm install class-variance-authority       # Component variant system (if not present)
npm install clsx tailwind-merge            # Tailwind utility merging (if not present)
```

#### Phase 3 - 3D Integration
```bash
npm install three @types/three             # Three.js core
npm install @react-three/fiber             # React renderer for Three.js
npm install @react-three/drei              # Useful helpers (OrbitControls, etc.)
npm install @react-three/postprocessing    # Post-processing effects (optional)
npm install leva                           # 3D scene debugging (dev only, optional)
```

#### Phase 4 - Advanced Animations
```bash
# Magic UI components (if using npm packages)
npm install magic-ui                       # Animated backgrounds, particles

# OR manually copy components from magicui.design
# (Recommended: Cherry-pick only needed components)
```

#### Phase 5 - Data Visualization (Optional)
```bash
npm install recharts                       # If 2D fallback charts needed
# OR use pure CSS/SVG for data viz
```

#### Development Tools
```bash
npm install -D @next/bundle-analyzer       # Bundle size analysis
npm install -D eslint-plugin-jsx-a11y      # Accessibility linting
```

### Component Library Strategy

| Library | Use Case | Integration Method |
|---------|----------|-------------------|
| **shadcn/ui** | Form inputs, dialogs, dropdowns | Copy components to `components/ui/` |
| **Aceternity UI** | Bento grids, hero backgrounds, spotlight cards | Copy from aceternity.com/components |
| **Magic UI** | Animated backgrounds, particles, beams | Copy from magicui.design |
| **Custom** | 3D scenes, complex interactions | Build from scratch with R3F |

**Philosophy:** Copy and customize rather than install as dependencies. This avoids version conflicts and allows full control over styling.

---

## 📁 File Modifications

### Phase 1 - Foundation
**Created:**
- `components/theme/ThemeProvider.tsx` - Dark mode context provider
- `components/theme/ThemeToggle.tsx` - Toggle button UI
- `lib/theme-utils.ts` - Theme helper functions
- `lib/component-guide.md` - Component library documentation

**Modified:**
- `tailwind.config.ts` - Add teal-orange color system, gradient utilities
- `app/layout.tsx` - Wrap with ThemeProvider
- `app/globals.css` - Add dark mode CSS variables
- `components/layout/Navbar.tsx` - Add ThemeToggle component

---

### Phase 2 - Core Components
**Modified:**
- `components/ui/Button.tsx` - Add gradient variants, glow effects
- `components/ui/Card.tsx` - Glassmorphism, hover animations
- `components/ui/Badge.tsx` - Gradient fills, pulse animation
- `components/layout/Footer.tsx` - Gradient mesh background, animations
- `components/layout/Navbar.tsx` - Glassmorphic scroll effect

---

### Phase 3 - 3D Integration
**Created:**
- `components/3d/Scene.tsx` - R3F canvas wrapper
- `components/3d/HeroScene.tsx` - Hero 3D element
- `components/3d/Lights.tsx` - Lighting setup component
- `components/3d/types.ts` - 3D component types
- `lib/3d-utils.ts` - Performance detection, lazy loading helpers

**Modified:**
- `components/sections/Hero.tsx` - Integrate HeroScene
- `app/layout.tsx` - Add 3D script preloading (if needed)

---

### Phase 4 - Animations
**Created:**
- `components/animations/ParallaxScroll.tsx` - Parallax wrapper
- `components/animations/PathDraw.tsx` - SVG path animation
- `components/effects/GradientMesh.tsx` - Animated background
- `components/effects/ParticleField.tsx` - Floating particles
- `lib/animation-utils.ts` - Custom easing functions, animation configs

**Modified:**
- `components/animations/ScrollReveal.tsx` - Enhanced with parallax
- `components/ui/Button.tsx` - Add ripple effect
- `components/ui/Card.tsx` - Add tilt effect

---

### Phase 5 - Interactive Demos
**Modified:**
- `components/interactive/ROICalculator.tsx` - 3D chart, gradient UI
- `components/interactive/CertificationDemo.tsx` - Terminal animation, confetti
- `components/interactive/SelfHealingDemo.tsx` - Glow effects, morph animation
- `components/interactive/WorkflowDemo.tsx` - Animated flowchart
- `lib/calculator.ts` - Add export functionality (if applicable)

---

### Phase 6 - Sections
**Modified:**
- `components/sections/Hero.tsx` - 3D background, gradient text
- `components/sections/Features.tsx` - Bento grid, glassmorphism
- `components/sections/Journey.tsx` - Animated timeline
- `components/sections/UseCases.tsx` - Gradient borders, hover effects
- `components/sections/Metrics.tsx` - Count-up animations
- `components/sections/Testimonials.tsx` - Glassmorphic cards
- `components/sections/CTA.tsx` - Large gradient button, particles

---

### Phase 7 - Polish
**Created:**
- `docs/PERFORMANCE.md` - Performance optimization guide
- `docs/ACCESSIBILITY.md` - Accessibility checklist
- `docs/DEPLOYMENT.md` - Deployment guide

**Modified:**
- `AGENTS.md` - Update with new design system, component patterns
- `README.md` - Add redesign notes, new dependency list
- `package.json` - Final dependency cleanup
- `next.config.ts` - Production optimizations (if needed)

---

## ✅ Success Criteria

### Performance Metrics
- [ ] Lighthouse Performance Score: **≥ 90**
- [ ] Lighthouse Accessibility Score: **≥ 95**
- [ ] Lighthouse Best Practices Score: **≥ 95**
- [ ] Lighthouse SEO Score: **≥ 95**
- [ ] First Contentful Paint (FCP): **< 1.5s**
- [ ] Largest Contentful Paint (LCP): **< 2.5s**
- [ ] Cumulative Layout Shift (CLS): **< 0.1**
- [ ] Time to Interactive (TTI): **< 3.5s**
- [ ] Total Blocking Time (TBT): **< 300ms**

### Visual Quality
- [ ] All gradients render correctly in Chrome, Firefox, Safari
- [ ] Dark mode has no contrast violations (WCAG AA)
- [ ] Animations run at 60fps on desktop (tested with DevTools)
- [ ] 3D scenes load within 2 seconds on broadband
- [ ] No layout shift during page load or theme toggle

### Accessibility
- [ ] WCAG 2.1 Level AA compliance verified by WAVE tool
- [ ] All interactive elements keyboard-navigable
- [ ] Screen reader announces all content correctly
- [ ] Focus indicators visible on all interactive elements
- [ ] No reliance on color alone for information

### User Experience
- [ ] Booking conversion rate maintained or improved (vs. current site)
- [ ] Average session duration ≥ 2 minutes (engagement metric)
- [ ] Bounce rate ≤ 40%
- [ ] Mobile usability score 100% (Google Search Console)
- [ ] No console errors or warnings in production

### Technical
- [ ] TypeScript strict mode passes with zero errors
- [ ] ESLint passes with zero errors/warnings
- [ ] Bundle size increase < 30% from baseline (despite 3D/animation libraries)
- [ ] All images use next/image with lazy loading
- [ ] No render-blocking resources

---

## 📅 Timeline Overview

```
Week 1: Foundation & Core Components
├─ Days 1-4   │ Phase 1: Design System & Dark Mode
└─ Days 5-10  │ Phase 2: Core Component Redesign
               ↓ Checkpoint: Design system functional, components styled

Week 2-3: 3D & Advanced Features
├─ Days 11-16 │ Phase 3: 3D Integration (Three.js + R3F)
├─ Days 17-20 │ Phase 4: Advanced Animations & Scroll Effects
└─ Days 21-24 │ Phase 5: Interactive Demos & ROI Calculator
               ↓ Checkpoint: All major features implemented

Week 4: Final Polish & Launch
├─ Days 25-28 │ Phase 6: Section-by-Section Redesign
└─ Days 29-32 │ Phase 7: Polish, Testing & Launch Prep
               ↓ 🚀 Production Launch

Critical Path:
Phase 1 → Phase 2 → Phase 3 ──┬→ Phase 6 → Phase 7
                     ↓         │
              Phase 4 → Phase 5┘
```

### Milestones
- **Day 4:** Design system complete, dark mode functional
- **Day 10:** All core components redesigned
- **Day 16:** 3D hero scene live on staging
- **Day 20:** All animations implemented
- **Day 24:** ROI calculator redesigned
- **Day 28:** All sections updated with new design
- **Day 32:** Production launch ✅

---

## 📚 Resources

### Design Inspiration
- **delve.co** - Reference for teal-orange gradient aesthetic, futuristic layouts
- **aceternity.com** - Component library (bento grids, spotlight cards, hero backgrounds)
- **magicui.design** - Animated backgrounds, particles, magic effects
- **awwwards.com** - Award-winning web design examples

### Component Libraries
- **shadcn/ui:** https://ui.shadcn.com/
  - Use for: Form inputs, dialogs, dropdowns, tooltips
- **Aceternity UI:** https://ui.aceternity.com/components
  - Use for: Hero backgrounds, bento grids, 3D cards
- **Magic UI:** https://magicui.design/
  - Use for: Animated beams, particles, gradient backgrounds

### Three.js / R3F Resources
- **React Three Fiber Docs:** https://docs.pmnd.rs/react-three-fiber
- **Drei Helpers:** https://github.com/pmndrs/drei
- **Three.js Examples:** https://threejs.org/examples/
- **R3F Examples:** https://docs.pmnd.rs/react-three-fiber/getting-started/examples

### Performance & Optimization
- **Lighthouse CI:** https://github.com/GoogleChrome/lighthouse-ci
- **Next.js Bundle Analyzer:** https://www.npmjs.com/package/@next/bundle-analyzer
- **Web Vitals:** https://web.dev/vitals/

### Accessibility
- **WAVE Tool:** https://wave.webaim.org/
- **axe DevTools:** https://www.deque.com/axe/devtools/
- **WCAG 2.1 Checklist:** https://www.a11yproject.com/checklist/

### Animation Libraries
- **Framer Motion Docs:** https://www.framer.com/motion/
- **GSAP (alternative):** https://greensock.com/gsap/
- **Lottie Files:** https://lottiefiles.com/

---

## 🔄 Change Log

### 2025-02-09
- Initial REDESIGN_ROADMAP.md created
- 7-phase plan defined (28-32 day timeline)
- Success criteria established
- Resource links compiled

---

## 📝 Notes

### Design Decisions
- **Why Teal-Orange?** Complements existing amber accent, provides fresh futuristic feel while maintaining brand recognition. Teal = trust/technology, Orange = energy/innovation.
- **Why Three.js over Pure CSS?** Enables true 3D perspective, lighting, and physics. CSS 3D transforms limited to basic rotations.
- **Why Copy Components vs. Install?** Avoids dependency bloat, allows full customization, prevents breaking changes from upstream updates.

### Risk Mitigation Strategy
- **Performance:** Test on real devices early, implement progressive enhancement (3D optional on low-end devices).
- **Timeline:** Build buffer into Phase 7, prioritize critical sections if timeline slips.
- **Scope Creep:** Defer "nice-to-have" features to post-launch iteration.

### Post-Launch Iteration Ideas
- A/B test 3D vs. 2D hero (conversion impact)
- Add blog section with gradient-themed article cards
- Implement client dashboard (if expanding beyond marketing site)
- Multi-language support (i18n)
- Advanced analytics integration (Mixpanel, Amplitude)

---

**Last Updated:** 2025-02-09  
**Maintained By:** OpenCode AI Agent  
**Status:** ✅ Ready for Phase 1 kickoff
