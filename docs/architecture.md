# Architecture Document

**Generated:** 2026-02-10  
**Project:** Agent School Website  
**Version:** 1.0.0  
**Type:** Next.js Web Application (Monolith)

---

## Executive Summary

Agent School Website is a modern React-based marketing website built with Next.js 16 and React 19. It serves as the primary web presence for Agent School, a platform that teaches and certifies AI agents to automate software workflows.

**Key Characteristics:**
- **Type:** Single-page application (SPA) with server-side rendering (SSR)
- **Architecture:** Component-based, layered structure
- **Scale:** Moderate complexity with 79 components across 15 directories
- **Deployment:** Vercel (automatic CI/CD)
- **Purpose:** Public marketing site (no authentication, no backend)

**Current Status:**
- ⚠️ **Build State:** Not compiling (known compilation errors)
- 🚧 **Redesign Status:** Phase 1 of 7-phase redesign in progress
- ✅ **Documentation:** Extensive existing documentation
- ❌ **Testing:** No automated testing framework

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Architecture Pattern](#architecture-pattern)
3. [System Components](#system-components)
4. [Data Architecture](#data-architecture)
5. [Component Architecture](#component-architecture)
6. [Routing & Navigation](#routing--navigation)
7. [Styling & Theming](#styling--theming)
8. [Animation System](#animation-system)
9. [Build & Deployment](#build--deployment)
10. [Development Workflow](#development-workflow)
11. [Performance Considerations](#performance-considerations)
12. [Security](#security)
13. [Testing Strategy](#testing-strategy)
14. [Known Issues & Technical Debt](#known-issues--technical-debt)
15. [Future Enhancements](#future-enhancements)

---

## Technology Stack

### Core Framework

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | Next.js | 16.1.0 | React framework with App Router, SSR, and optimal performance |
| **UI Library** | React | 19.x | Latest React with concurrent features and improved hydration |
| **Language** | TypeScript | 5.x | Type-safe development with strict mode enabled |
| **Build Tool** | Turbopack | (Next.js 16) | Next-generation bundler for fast HMR (fallback: Webpack) |

### Styling & Design

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework with custom design system |
| **next-themes** | 0.4.6 | Dark mode support with system preference detection |
| **Design System** | Custom | "Cyber Citrus" - Teal/orange gradient palette |

### Component Libraries

| Library | Purpose |
|---------|---------|
| **Radix UI** | Unstyled, accessible primitives (Dialog, Select, Slider, Tabs) |
| **shadcn/ui** | Customizable components built on Radix UI |
| **Aceternity UI** | Animation effects (BackgroundBeams, Timeline, CardSpotlight) |
| **Magic UI** | Text animations (HyperText, NumberTicker, AnimatedList) |
| **Framer Motion 12** | Advanced React animation library |

### Development Tools

- **ESLint 9.x** - Code linting (next/core-web-vitals)
- **cross-env** - Cross-platform environment variables
- **PostCSS** - CSS transformation for Tailwind

**Missing:**
- ❌ No test framework (Jest, Vitest, Playwright)
- ❌ No CI/CD beyond Vercel
- ❌ No code formatter (Prettier)

---

## Architecture Pattern

### High-Level Pattern

**Component-Based Single Page Application (SPA) with Server-Side Rendering (SSR)**

```
┌─────────────────────────────────────────────────────────────┐
│                      Browser (Client)                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │          Next.js App Router (React 19)                │  │
│  │                                                        │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │  │
│  │  │ Page Sections │  │  Interactive │  │  Mock UIs  │ │  │
│  │  │   (Hero,      │  │    Demos     │  │  (5 demos) │ │  │
│  │  │  Features)    │  │ (Calculator) │  │            │ │  │
│  │  └───────┬───────┘  └───────┬──────┘  └─────┬──────┘ │  │
│  │          │                   │                │        │  │
│  │          └───────────────────┴────────────────┘        │  │
│  │                              │                          │  │
│  │                    ┌─────────▼─────────┐               │  │
│  │                    │  UI Components     │               │  │
│  │                    │  (Button, Card)    │               │  │
│  │                    └────────┬───────────┘               │  │
│  │                             │                           │  │
│  │                    ┌────────▼──────────┐                │  │
│  │                    │  Animation         │                │  │
│  │                    │  (Framer Motion)   │                │  │
│  │                    └────────────────────┘                │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │  Vercel Edge CDN  │
                    │  (Global Network) │
                    └───────────────────┘
```

### Architecture Layers

**1. Presentation Layer** (`src/components/sections/`)
- Full-width page sections
- Composition of smaller components
- Marketing-focused layouts
- Examples: Hero, Features, UseCases, Journey, CTA

**2. Component Layer** (`src/components/ui/`, `src/components/interactive/`)
- Reusable UI primitives (Button, Card, Badge)
- Stateful interactive components (ROICalculator, demos)
- Animation wrappers (ScrollReveal, WordReveal)
- Third-party components (Aceternity, Magic UI)

**3. Layout Layer** (`src/components/layout/`)
- Persistent UI elements (Navbar, Footer)
- Responsive navigation
- Global layout structure

**4. Application Layer** (`src/app/`)
- Next.js App Router pages
- Root layout with font loading and theme provider
- Demo routes for mock UIs
- Global styles and metadata

**5. Utility Layer** (`src/lib/`, `src/types/`)
- Constants and static content
- Utility functions (cn helper)
- TypeScript type definitions
- Shared business logic

---

## System Components

### Logical Component Breakdown

```
Agent School Website
├── Marketing Site (Main Product)
│   ├── Landing Page
│   │   ├── Hero Section
│   │   ├── Features Showcase
│   │   ├── Use Cases
│   │   ├── User Journey
│   │   ├── Differentiation
│   │   └── Call-to-Action
│   ├── Navigation
│   │   ├── Navbar (sticky header)
│   │   └── Footer (links + social)
│   └── Interactive Demos
│       ├── ROI Calculator (complex state)
│       ├── Certification Demo
│       ├── Skill Builder Demo
│       ├── Self-Healing Demo
│       ├── Script Viewer Demo
│       └── Speed Race Demo
│
├── Mock UI Demos (Product Showcase)
│   ├── Framework (shared)
│   │   ├── MockUIShell (window chrome)
│   │   ├── AgentInterface (chat I/O)
│   │   ├── MockUIContext (state)
│   │   ├── InteractiveElement
│   │   └── DataDisplay
│   ├── Hotel PMS Demo
│   ├── CRM Demo
│   ├── Instagram DM Demo
│   ├── Notion Automation Demo
│   └── Granola Notes Demo
│
├── Design System
│   ├── UI Primitives (14 components)
│   ├── Animation Library (5 wrappers)
│   ├── Aceternity Effects (5 components)
│   └── Magic UI Animations (3 components)
│
└── Asset Management
    ├── Static Images (public/)
    ├── Lottie Animations (src/animations/)
    └── Brand Assets (logos, favicons)
```

---

## Data Architecture

### Data Flow

**Static Content Model** - No database, no API calls

```
┌──────────────────────┐
│  lib/constants.ts    │  ← All content/data defined here
│                      │
│  - NAV_ITEMS         │
│  - FEATURES          │
│  - USE_CASES         │
│  - FAQ_ITEMS         │
│  - BOOKING_URL       │
│  - SOCIAL_LINKS      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Components          │  ← Import constants
│  (Pages/Sections)    │
│                      │
│  import {            │
│    NAV_ITEMS         │
│  } from '@/lib/constants' │
└──────────────────────┘
```

### State Management

**Local State Only** - No global state library

| State Type | Solution | Usage |
|-----------|----------|-------|
| **Component State** | `useState` | Form inputs, toggles, local UI state |
| **Derived State** | `useMemo` | Computed values, filtered lists |
| **Side Effects** | `useEffect` | DOM manipulation, subscriptions |
| **Theme State** | `next-themes` | Dark/light mode preference |
| **Mock UI State** | `MockUIContext` | Shared state across mock demos |

**No Redux, Zustand, Jotai, or other state libraries**

### Content Management

**Current:** Hardcoded in `lib/constants.ts`

**Pros:**
- ✅ Type-safe
- ✅ Version controlled
- ✅ No external dependencies
- ✅ Fast (no network requests)

**Cons:**
- ❌ Content changes require code deployment
- ❌ Not editable by non-developers
- ❌ No content preview workflow

**Future:** Consider headless CMS (Contentful, Sanity, Prismic)

---

## Component Architecture

### Component Hierarchy

```
App
├── RootLayout
│   ├── ThemeProvider (next-themes)
│   ├── Fonts (Fraunces, DM Sans, JetBrains Mono)
│   └── Page Content
│       ├── Navbar
│       ├── Hero
│       ├── Features
│       ├── UseCases
│       ├── Journey
│       ├── Differentiation
│       ├── CTA
│       └── Footer
```

### Component Categories

**1. Server Components (Default)**
- All components without "use client" directive
- Rendered on server during build/request
- Reduced JavaScript bundle
- Better SEO and initial load

**2. Client Components ("use client")**
- Components using React hooks
- Components using Framer Motion
- Components with event handlers
- Interactive demos

### Component Communication

**Props Down, Events Up Pattern:**
```typescript
// Parent passes data down
<ChildComponent data={data} onAction={handleAction} />

// Child calls callback up
function ChildComponent({ data, onAction }) {
  return <button onClick={() => onAction(data)}>Click</button>
}
```

**No prop drilling issues** - Flat component structure, no deep nesting

---

## Routing & Navigation

### File-Based Routing (App Router)

```
src/app/
├── layout.tsx          →  Root layout (all pages)
├── page.tsx            →  Homepage (/)
├── globals.css         →  Global styles
├── demos/
│   ├── hotel-pms/
│   │   └── page.tsx    →  /demos/hotel-pms
│   ├── crm/
│   │   └── page.tsx    →  /demos/crm
│   └── granola/
│       └── page.tsx    →  /demos/granola
└── test-notion/
    └── page.tsx        →  /test-notion
```

### Navigation Structure

**Primary Navigation** (Navbar):
- How It Works
- Use Cases  
- Pricing (future)
- Docs (future)
- CTA Button → Book Demo

**Footer Navigation:**
- About/Company links
- Product links
- Resources links
- Social media icons

**Internal Linking:**
```typescript
import Link from "next/link";

// Client-side navigation (no page reload)
<Link href="/demos/hotel-pms">See Demo</Link>
```

---

## Styling & Theming

### Design System: "Cyber Citrus"

**Color Palette:**
```
Primary:   Teal (#14b8a6 to #134e4a)
Accent:    Orange (#fb923c to #ea580c)
Neutrals:  Slate (50-950)
Legacy:    Navy, Amber, Cream (being phased out)
```

**Typography:**
```
Display:  Fraunces (serif) - Headings
Body:     DM Sans (sans-serif) - Body text
Mono:     JetBrains Mono - Code/data
```

**Spacing Scale:** Tailwind default + custom (18, 22, 30, 34, 38)

**Border Radius:** xl=1rem, 2xl=1.25rem, 3xl=1.5rem

### Dark Mode Strategy

**Implementation:** Class-based with `next-themes`

```typescript
// src/app/layout.tsx
import { ThemeProvider } from "next-themes";

<ThemeProvider attribute="class" defaultTheme="system">
  {children}
</ThemeProvider>
```

**Auto-detection:** System preference (prefers-color-scheme)

**Manual Override:** User can toggle via theme switcher (if added)

### CSS Architecture

**Tailwind-First Approach:**
- ✅ Utility classes for 95% of styling
- ✅ Custom utilities via Tailwind config
- ✅ CSS variables for dynamic theming
- ❌ Minimal custom CSS in globals.css

**Component Styling Pattern:**
```typescript
// Inline utilities (most common)
<div className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-900">

// Variant-based (UI primitives)
<Button variant="primary" size="lg" className="custom-class">

// CSS variables (theming)
<div className="bg-[--background] text-[--foreground]">
```

---

## Animation System

### Framer Motion Integration

**Usage:** ~50% of components use animations

**Common Patterns:**

**1. Scroll Reveals:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
>
  {content}
</motion.div>
```

**2. Staggered Children:**
```typescript
<motion.div variants={containerVariants}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**3. Micro-interactions:**
```typescript
<motion.button
  whileHover={{ y: -2, scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
>
  Click Me
</motion.button>
```

**4. Number Animations:**
```typescript
const count = useMotionValue(0);
useEffect(() => {
  animate(count, targetValue, { duration: 2 });
}, [targetValue]);
```

### Lottie Animations

**Purpose:** Complex vector animations (JSON-based)

**Files:** `src/animations/*.json`

**Usage:**
```typescript
import Lottie from "lottie-react";
import animation from "@/animations/agent-certification.json";

<Lottie animationData={animation} />
```

---

## Build & Deployment

### Build Process

**Local Build:**
```bash
npm run build
# 1. Type-check (tsc)
# 2. Lint (eslint)
# 3. Compile pages/components
# 4. Optimize bundles
# 5. Generate .next/ output
```

**Build Optimizations:**
- Code splitting (automatic)
- Tree shaking (remove unused code)
- Minification (JS + CSS)
- Image optimization (Next.js Image component)
- Font optimization (next/font)

### Deployment Pipeline

**Platform:** Vercel (automatic deployment)

```
Git Push (main)
    ↓
Vercel Webhook
    ↓
Clone Repository
    ↓
Install Dependencies (npm install)
    ↓
Build (npm run build)
    ↓
Deploy to Edge Network
    ↓
Assign URL + SSL
    ↓
Live! 🚀
```

**Deployment Time:** 1-3 minutes

**Edge Network:** 40+ global locations

---

## Development Workflow

### Local Development

**Start Server:**
```bash
npm run dev  # Turbopack (fast HMR)
```

**Hot Module Replacement (HMR):**
- Instant updates on file save
- Preserves component state
- Fast Refresh for React components

### Code Organization

**Import Path Pattern:**
```typescript
// ✅ Always use @/* alias
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";

// ❌ Avoid relative imports
import { Button } from "../../components/ui/Button";
```

**File Naming:**
```
PascalCase:  Components (Button.tsx, Hero.tsx)
camelCase:   Utilities (utils.ts, calculator.ts)
kebab-case:  Radix/shadcn components (dialog.tsx, select.tsx)
```

### Development Cycle

```
1. npm run dev              (start server)
2. Edit code in src/        (instant HMR updates)
3. npx tsc --noEmit         (periodic type checking)
4. npm run lint             (before commit)
5. npm run build            (test production build)
6. git commit && git push   (deploy via Vercel)
```

---

## Performance Considerations

### Current Optimizations

✅ **Next.js App Router** - Automatic code splitting  
✅ **Server Components** - Reduced client JS bundle  
✅ **Image Optimization** - next/image component  
✅ **Font Optimization** - next/font (self-hosted)  
✅ **Turbopack** - Fast development builds  
✅ **Static Generation** - Pre-rendered at build time  
✅ **Edge Deployment** - Global CDN via Vercel  

### Performance Metrics (Goals)

| Metric | Target | Current |
|--------|--------|---------|
| **LCP** | < 2.5s | Unknown (site doesn't compile) |
| **FID** | < 100ms | Unknown |
| **CLS** | < 0.1 | Unknown |
| **TTFB** | < 600ms | Unknown |
| **Bundle Size** | < 200KB | Unknown |

**⚠️ Need to measure** once site compiles

### Optimization Opportunities

1. **Lazy Load Heavy Components**
   ```typescript
   const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
     loading: () => <Skeleton />,
   });
   ```

2. **Optimize Images**
   - Convert to WebP/AVIF
   - Use responsive sizes
   - Lazy load off-screen images

3. **Reduce Animation Weight**
   - Use CSS animations where possible
   - Lazy load Lottie animations
   - Optimize Framer Motion usage

4. **Code Splitting**
   - Route-based splitting (automatic)
   - Component-based splitting (manual)

---

## Security

### Current Security Posture

✅ **HTTPS Only** - Enforced by Vercel  
✅ **No Secrets in Code** - Use environment variables  
✅ **Dependency Scanning** - Vercel auto-scans  
✅ **Auto-updates** - Vercel patches infrastructure  
❌ **No Security Headers** - Should add CSP, X-Frame-Options  
❌ **No Rate Limiting** - Public site, no sensitive operations  

### Threat Model

**Low Risk Profile:**
- ❌ No user authentication
- ❌ No database
- ❌ No API endpoints
- ❌ No payment processing
- ❌ No sensitive data

**Potential Risks:**
- XSS via third-party scripts (use CSP)
- Clickjacking (add X-Frame-Options)
- DDoS (Vercel provides protection)

### Recommendations

1. **Add Security Headers** (next.config.mjs)
2. **Implement CSP** for script sources
3. **Enable Vercel Protection** (DDoS mitigation)
4. **Regular dependency updates** (npm audit)

---

## Testing Strategy

### Current State

**⚠️ No Testing Framework Configured**

**Manual Testing Only:**
- Visual QA in browser
- Responsive design checks
- Cross-browser testing

### Recommended Testing Pyramid

**1. Unit Tests (Base)**
- **Tool:** Jest + React Testing Library
- **Target:** UI primitives, utility functions
- **Coverage:** 60-80%

**2. Integration Tests (Middle)**
- **Tool:** React Testing Library
- **Target:** Interactive components, page sections
- **Coverage:** Key user flows

**3. E2E Tests (Top)**
- **Tool:** Playwright
- **Target:** Critical paths (homepage load, demo interactions)
- **Coverage:** Happy paths + edge cases

**4. Visual Regression (Side)**
- **Tool:** Chromatic or Percy
- **Target:** All components, responsive breakpoints
- **Coverage:** Prevent UI regressions

---

## Known Issues & Technical Debt

### Critical Issues

🚨 **Site Doesn't Compile**
- **Impact:** Cannot deploy or run production build
- **Priority:** P0 (blocking)
- **Action:** Fix TypeScript/build errors immediately

🚧 **Redesign Untested**
- **Impact:** NEW design system hasn't been manually tested
- **Priority:** P1
- **Action:** Manual QA pass after compilation fixed

### Technical Debt

**1. No Testing** (High Priority)
- Add Jest + React Testing Library
- Write tests for critical components
- Set up CI/CD for test runs

**2. No Code Formatting** (Medium Priority)
- Add Prettier configuration
- Set up pre-commit hooks (Husky)
- Format existing codebase

**3. Legacy Color Palette** (Medium Priority)
- Navy/Amber/Cream colors still in Tailwind config
- Should remove after full migration to Cyber Citrus
- Search codebase for usage and migrate

**4. Mock Demos Status Uncertain** (Low Priority)
- 5 mock UIs may be incomplete
- Need to assess and document status
- Complete or remove unfinished demos

**5. No Accessibility Audit** (Medium Priority)
- Run axe-core or pa11y
- Fix ARIA issues
- Test keyboard navigation
- Verify color contrast

---

## Future Enhancements

### Short Term (1-3 months)

1. **Fix Compilation Errors** ← P0
2. **Add Testing Framework** ← P1
3. **Complete Redesign Phase 1** ← P1
4. **Add Code Formatting (Prettier)** ← P2
5. **Performance Audit** ← P2

### Medium Term (3-6 months)

1. **Accessibility Audit & Fixes**
2. **Add Analytics** (Vercel Analytics or Posthog)
3. **Implement Contact Form** (email integration)
4. **Add Blog Section** (MDX or CMS)
5. **Optimize Performance** (lazy loading, image optimization)
6. **Add E2E Tests** (Playwright)

### Long Term (6-12 months)

1. **Migrate to Headless CMS** (Contentful/Sanity)
2. **Add Search Functionality** (Algolia)
3. **Implement A/B Testing** (Vercel Edge Middleware)
4. **Add User Analytics** (event tracking)
5. **Internationalization** (i18n support)
6. **Progressive Web App** (PWA features)

---

## Appendices

### Related Documentation

- **Technology Stack:** `docs/technology-stack.md`
- **Component Inventory:** `docs/component-inventory.md`
- **Source Tree:** `docs/source-tree-analysis.md`
- **Development Guide:** `docs/development-guide.md`
- **Deployment Guide:** `docs/deployment-guide.md`
- **Design System:** `docs/design/design-system.md` (existing)
- **Redesign Roadmap:** `docs/planning/redesign-roadmap.md` (existing)
- **Mock UI Framework:** `docs/architecture/mock-ui-framework.md` (existing)

### Glossary

- **App Router:** Next.js 13+ routing system (file-based, server-first)
- **CVA:** class-variance-authority (variant management library)
- **HMR:** Hot Module Replacement (instant code updates)
- **ISR:** Incremental Static Regeneration
- **SPA:** Single Page Application
- **SSR:** Server-Side Rendering
- **CSR:** Client-Side Rendering

---

**Document Version:** 1.0.0  
**Last Updated:** 2026-02-10  
**Next Review:** After compilation errors fixed
