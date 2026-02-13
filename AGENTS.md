# AGENTS.md — Agent School Website

> Context file for AI coding agents operating in this repository.

## Project Overview

Marketing website for Agent School — a platform that teaches and certifies AI agents to automate software workflows. Single-page Next.js app with interactive demos, scroll animations, and a fully functional ROI calculator.

## 🎨 Recent Redesign (2026)

**Status:** 🚀 In Progress (Phase 1 - Foundation)

A major redesign is underway to transform the website from an academic aesthetic to a **futuristic, visionary platform**. Key changes:

### Design System: "Cyber Citrus"
- **Colors:** Teal-orange gradient system (replacing navy/amber/cream)
  - Teal (`#14b8a6` to `#134e4a`) - Primary brand
  - Orange (`#fb923c` to `#ea580c`) - Accent/CTA
  - Slate (50-950) - Neutrals for light & dark mode
- **Dark Mode:** Auto-detect system preference (no manual toggle)
- **Aesthetic:** Modern, futuristic, gradient-heavy (inspired by delve.co)

### Interactive Mock UIs (New)
Building **5 fully interactive demo UIs** that users can query with natural language:
1. **Hotel PMS** (`/mocks/hotel-pms/`) - Reservations dashboard
2. **CRM** (`/mocks/crm/`) - Sales pipeline Kanban
3. **Instagram** (`/mocks/instagram/`) - DM categorization
4. **Notion** (`/mocks/notion/`) - Task database automation
5. **Granola** (`/mocks/granola/`) - Meeting transcript analysis

All demos share a **Mock UI Framework** (`/mocks/_framework/`) with reusable components:
- `MockUIShell` - Window chrome (macOS dots)
- `AgentInterface` - Chat input/output
- `MockUIContext` - State management
- `InteractiveElement` - Clickable UI elements
- `DataDisplay` - Tables/grids

### Component Libraries (New)
- **shadcn/ui** - Base primitives (button, card, input, etc.)
- **Aceternity UI** - Animation effects (BackgroundBeams, Timeline, CardSpotlight)
- **Magic UI** - Text animations (HyperText, NumberTicker, AnimatedList)

### Content Strategy
Rewriting all copy from "academic precision" to "futuristic & visionary":
- Hero: "Turn Human Knowledge Into AI That Never Forgets"
- Features: "Teach Once, Automate Forever" (not "Skill Builder")
- CTAs: "Join The Revolution" (not "Learn More")

### Key Documentation
- **DESIGN_SYSTEM.md** - Complete color system, typography, effects
- **MOCK_UI_FRAMEWORK.md** - Architecture for interactive demos
- **COMPONENTS_GUIDE.md** - Component library usage
- **REDESIGN_ROADMAP.md** - 7-phase implementation plan (28-32 days)

### File Structure Changes
```
src/components/
├── aceternity/          # NEW: Aceternity UI components
├── magic/               # NEW: Magic UI components
├── mocks/               # NEW: Interactive demo UIs
│   ├── _framework/      # Shared mock UI framework
│   ├── hotel-pms/
│   ├── crm/
│   ├── instagram/
│   ├── notion/
│   └── granola/
├── ThemeProvider.tsx    # NEW: Dark mode provider
src/types/               # NEW: TypeScript interfaces
├── agent.ts             # Agent query types
└── mock-ui.ts           # Mock UI types
```

### ⚠️ Important for Agents
- **Old color palette is deprecated:** navy/amber/cream → Use teal/orange/slate
- **Component migrations:** Old `Button`/`Card`/`Badge` → Replace with shadcn versions
- **Dark mode required:** All new components must support light & dark modes
- **Gradient usage:** Use `bg-gradient-to-br from-teal-600 to-orange-500` for brand moments
- **Content tone:** Write futuristic/visionary, not academic/technical

## Tech Stack

- **Next.js 16.1.0** (App Router, Turbopack)
- **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS 3.4** with custom theme
- **Framer Motion 12** for all animations
- **lucide-react** for icons
- **lottie-react** for Lottie JSON playback
- Deployed on **Vercel**

## Commands

```bash
npm run dev            # Start dev server (Turbopack)
npm run dev:no-cache   # Dev server without persistent caching (use if Turbopack SST errors occur)
npm run build          # Production build
npm run start          # Serve production build
npm run lint           # ESLint via Next.js (next/core-web-vitals)
npx tsc --noEmit       # Type-check without emitting (no script alias exists)
```

No test framework is installed. No Prettier config exists. Formatting is enforced by convention.

## Directory Structure

```
src/
├── app/                      # Next.js App Router (layout, page, globals.css)
├── animations/               # Lottie JSON files (static assets)
├── components/
│   ├── animations/           # Framer Motion wrapper components (ScrollReveal, WordReveal, etc.)
│   ├── interactive/          # Stateful interactive demos (ROICalculator, CertificationDemo, etc.)
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Full-width page sections (Hero, Features, Journey, etc.)
│   └── ui/                   # Small reusable primitives (Button, Badge, Card, TabGroup, etc.)
└── lib/                      # Constants, business logic, utilities
```

**Where to put new code:**
- New reusable UI primitive → `components/ui/`
- New animation wrapper → `components/animations/`
- New interactive demo → `components/interactive/`
- New page section → `components/sections/`
- New data/content → `lib/constants.ts`
- New utility/logic → `lib/` (new file)
- New page route → `app/` (new directory with `page.tsx`)

## Code Style

### Formatting
- **2-space indentation**, double quotes, semicolons, trailing commas
- Line length generally under 120 characters
- Multi-line JSX wrapped in parentheses after `return (`

### Imports — 3 groups, separated by blank lines
```tsx
"use client";                                    // 1. Directive (if needed)

import { useState, useMemo } from "react";       // 2. External packages
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

import { ScrollReveal } from "@/components/animations/ScrollReveal";  // 3. Internal (@/ alias)
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";
```

- Always use `@/*` path alias (never relative imports)
- Use inline `type` modifier: `import { type ReactNode } from "react"`
- Import icons individually by name from `lucide-react`
- No barrel/index files — import from direct file paths

### Components
- **Named exports only**: `export function ComponentName()` — never `export default` (except `page.tsx` and `layout.tsx` which Next.js requires)
- Multiple related exports per file are fine (e.g., `Card` + `GlassCard`)
- File-private helpers are non-exported functions in the same file
- Props interface named `{ComponentName}Props` for complex components
- Inline prop types for simpler animation/utility components

### "use client" Directive
- **First line of file** when the component uses: React hooks, Framer Motion, or browser APIs
- Server Components by default — only add `"use client"` when necessary
- `page.tsx` and `layout.tsx` remain Server Components

### TypeScript
- `interface` for object shapes and component props
- `type` for unions and aliases: `type Variant = "primary" | "secondary"`
- `as const` on content/data arrays in `lib/constants.ts`
- `Record<K, V>` for typed lookup maps
- Indexed access for array item types: `(typeof USE_CASES)[number]`
- Export types from lib files; inline types in simpler components

### Naming
| Entity | Convention | Example |
|--------|-----------|---------|
| Component files | PascalCase `.tsx` | `ROICalculator.tsx` |
| Utility files | camelCase `.ts` | `calculator.ts` |
| Components/types | PascalCase | `SelfHealingDemo`, `CalcInputs` |
| Variables/functions | camelCase | `handleTabChange`, `variantStyles` |
| Global constants | UPPER_SNAKE_CASE | `NAV_ITEMS`, `BOOKING_URL` |
| Lookup maps | UPPER_SNAKE_CASE | `TIME_MAP`, `SETUP_COST` |
| Props interfaces | `{Name}Props` | `ButtonProps`, `CardProps` |
| CSS classes | Tailwind utilities | No custom CSS class names besides globals.css |

## Tailwind Conventions

### Custom Color Palettes
- **navy** (50–900): Primary brand. `navy-800` for text/buttons, `navy-900` for dark sections.
- **amber** (50–600): Accent/CTA. `amber-500` (`#FE9F4D`) is the primary accent.
- **cream** (50–300): Warm backgrounds. `cream-50` (`#FAF9F7`) is the base page bg.
- **charcoal** (100–900): Neutral grays. `charcoal-500` for secondary text, `charcoal-900` for footer.

### Font Families
- `font-display` → Fraunces (serif) — headings, brand
- `font-body` → DM Sans (sans) — body text (default on `<body>`)
- `font-mono` → JetBrains Mono — code, data, overlines

### Common Patterns
```tsx
// Section wrapper
<section className="py-24 md:py-32 px-6 bg-cream-50">
  <div className="max-w-7xl mx-auto">

// Card
<div className="bg-white rounded-2xl border border-cream-200 shadow-soft p-6">

// Heading
<h2 className="font-display text-display-md md:text-display-lg text-navy-800">

// Overline
<p className="font-mono text-caption uppercase tracking-widest text-amber-500 mb-4">

// Body text
<p className="text-body-md text-charcoal-500">

// Demo panel header (macOS window dots)
<div className="flex items-center gap-2 px-5 py-3 bg-cream-50 border-b border-cream-200">
  <div className="flex gap-1.5">
    <div className="w-3 h-3 rounded-full bg-red-300" />
    <div className="w-3 h-3 rounded-full bg-amber-300" />
    <div className="w-3 h-3 rounded-full bg-green-300" />
  </div>
```

### Responsive
- Mobile-first: base → `md:` → `lg:`
- Common: `hidden md:flex`, `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`, `flex-col sm:flex-row`

## Framer Motion Conventions

- Standard easing: `[0.25, 0.1, 0.25, 1]`
- Scroll reveals: `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- Micro-interactions: `whileHover={{ y: -2 }}`, `whileTap={{ scale: 0.97 }}`
- Stagger pattern: parent `variants` with `staggerChildren`, children inherit variant labels
- Tab indicators: `layoutId="tab-indicator"` for sliding pill
- Number animation: `useMotionValue` + `animate` (avoids React re-renders)
- Presence: `AnimatePresence mode="popLayout"` for tab/content transitions

## Key URLs
- **Booking**: `https://cal.com/jackagentschool/15min` (stored in `lib/constants.ts` as `BOOKING_URL`)
- **Email**: `hello@agentschool.io`
- **LinkedIn**: `https://linkedin.com/company/agentschool`
