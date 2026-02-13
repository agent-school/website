# Technology Stack

**Generated:** 2026-02-10  
**Project:** Agent School Website  
**Type:** Next.js Web Application

---

## Overview

This is a modern React-based marketing website built with Next.js 16 and React 19, featuring advanced animations, a comprehensive design system, and interactive component demos.

---

## Core Technologies

| Category | Technology | Version | Purpose/Justification |
|----------|-----------|---------|----------------------|
| **Framework** | Next.js | 16.1.0 | React framework with App Router, SSR, and Turbopack for fast development |
| **Language** | TypeScript | 5.x | Type-safe development with strict mode enabled |
| **UI Library** | React | 19.x | Latest React with concurrent features and improved hydration |
| **Build Tool** | Turbopack | (Next.js 16) | Next-generation bundler for fast HMR (fallback: Webpack) |
| **Package Manager** | npm | latest | Standard Node.js package manager |
| **Deployment** | Vercel | latest | Optimized hosting for Next.js with automatic CI/CD |

---

## Styling & Design

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework with extensive customization |
| **next-themes** | 0.4.6 | Dark mode support with system preference detection |
| **tailwind-merge** | 3.4.0 | Utility for merging Tailwind classes |
| **tailwindcss-animate** | 1.0.7 | Animation utilities for Tailwind |
| **Custom Design System** | - | "Cyber Citrus" - Teal/orange gradient system with custom tokens |

### Design System Features
- **Color Palette:** Teal (primary), Orange (accent), Slate (neutrals), Navy/Amber/Cream (legacy)
- **Typography:** Fraunces (display), DM Sans (body), JetBrains Mono (code)
- **Custom Animations:** Float, pulse, shimmer, glow-pulse, scan-line
- **Dark Mode:** Automatic system preference detection with manual override

---

## Animation & Interaction

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Framer Motion** | 12.0.0 | Advanced React animation library for scroll reveals, transitions, micro-interactions |
| **Lottie React** | 2.4.0 | JSON-based animations (vector graphics) |
| **Lucide React** | 0.468.0 | Icon library (SVG icons) |

---

## Component Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| **Radix UI** | Various | Unstyled, accessible component primitives (Dialog, Select, Slider, Slot, Tabs) |
| **shadcn/ui** | - | Customizable components built on Radix UI |
| **Aceternity UI** | - | Animation effects (BackgroundBeams, Timeline, CardSpotlight) |
| **Magic UI** | - | Text animations (HyperText, NumberTicker, AnimatedList) |
| **class-variance-authority** | 0.7.1 | Type-safe variant management for components |
| **clsx** | 2.1.1 | Utility for constructing className strings |

---

## Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.x | Code linting with next/core-web-vitals rules |
| **cross-env** | 10.1.0 | Cross-platform environment variable management |
| **PostCSS** | 8.x | CSS transformation (for Tailwind) |

### ⚠️ Missing Tooling
- **No Test Framework:** No Jest, Vitest, or Playwright configured
- **No CI/CD:** Beyond Vercel's automatic deployment (no custom GitHub Actions)
- **No Formatter:** No Prettier configuration

---

## Architecture Pattern

**Type:** Component-Based Single Page Application (SPA) with Server-Side Rendering (SSR)

### Key Architectural Characteristics

1. **Next.js App Router**
   - File-based routing in `src/app/`
   - Server Components by default with selective "use client" directives
   - Automatic code splitting and lazy loading

2. **Layered Component Architecture**
   ```
   src/components/
   ├── animations/      # Framer Motion wrappers (ScrollReveal, WordReveal)
   ├── interactive/     # Stateful demos (ROICalculator, CertificationDemo)
   ├── layout/          # Navbar, Footer
   ├── sections/        # Full-width page sections (Hero, Features, Journey)
   ├── ui/              # Reusable primitives (Button, Badge, Card)
   ├── aceternity/      # Aceternity UI components
   ├── magic/           # Magic UI components
   └── mocks/           # Interactive mock UI demos (hotel-pms, crm, etc.)
   ```

3. **Separation of Concerns**
   - **`src/lib/`** - Constants, business logic, utilities
   - **`src/types/`** - TypeScript type definitions
   - **`src/animations/`** - Lottie JSON assets
   - **`public/`** - Static assets (images, logos, backgrounds)

4. **Design System Integration**
   - Custom Tailwind theme with design tokens
   - Consistent color palette, typography, spacing
   - Reusable component variants via CVA

5. **State Management**
   - **No global state library** (no Redux, Zustand, etc.)
   - Local component state with React hooks
   - Theme state managed by next-themes

6. **Data Flow**
   - Static content from `lib/constants.ts`
   - No API calls or database (public marketing site)
   - No authentication or user management

---

## Build Configuration

### Next.js Config Highlights
- **React Strict Mode:** Enabled
- **Output File Tracing:** Limited to project root (WSL optimization)
- **TypeScript:** Build-time type checking enabled
- **Experimental:** `webpackBuildWorker` for parallel compilation
- **Turbopack:** Enabled by default with fallback to Webpack

### TypeScript Config Highlights
- **Strict Mode:** Enabled (full type safety)
- **Target:** ES2017
- **Module Resolution:** Bundler strategy
- **Path Aliases:** `@/*` → `./src/*`
- **JSX:** `react-jsx` (automatic runtime)

---

## Runtime Environment

- **Node.js:** Required (version not specified in package.json)
- **Browser Targets:** Modern browsers (ES2017+)
- **Deployment Platform:** Vercel
- **Environment Variables:** `.env*` files (not committed to repo)

---

## Dependencies Summary

### Production Dependencies (16 total)
- UI Libraries: React 19, Next.js 16, Framer Motion 12
- Component Libraries: Radix UI suite, next-themes
- Utilities: clsx, tailwind-merge, CVA
- Icons/Media: Lucide React, Lottie React

### Development Dependencies (10 total)
- TypeScript toolchain
- ESLint with Next.js config
- Tailwind CSS + PostCSS
- cross-env for scripts

---

## Known Issues

⚠️ **CRITICAL:** Website does not currently compile  
⚠️ **Testing:** No automated testing framework configured  
⚠️ **CI/CD:** No custom CI/CD pipeline beyond Vercel deployment  
⚠️ **Linting:** May need additional ESLint rules setup  

---

## Integration Points

**None.** This is a static marketing website with:
- ❌ No API integrations
- ❌ No authentication system
- ❌ No backend/database
- ❌ No external services (analytics, CRM, etc.)
- ✅ Deployed to Vercel (automatic)

---

## Future Considerations

1. **Testing:** Add Jest + React Testing Library + Playwright
2. **CI/CD:** Setup GitHub Actions for PR checks
3. **Linting:** Configure additional ESLint rules + Prettier
4. **Performance:** Add Lighthouse CI for performance monitoring
5. **Analytics:** Consider adding analytics (Vercel Analytics, Posthog, etc.)
