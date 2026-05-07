# Agent School Website

> **Futuristic marketing website** showcasing AI automation that adapts, certifies, and never forgets.

A website about Asian school and the work we can
---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development (with Turbopack)
npm run dev              # http://localhost:3000

# Development (no cache - use if Turbopack errors occur)
npm run dev:no-cache

# Production
npm run build            # Build for production
npm run start            # Serve production build

# Linting & Type checking
npm run lint             # ESLint via Next.js
npx tsc --noEmit         # TypeScript type check
```

---

## 🎨 Design System: "Cyber Citrus"

### Colors
- **Teal** (50-950): Primary brand color
  - `teal-600` (#0d9488) - Primary buttons, headings
  - `teal-500` (#14b8a6) - Hover states, accents
  - `teal-950` - Dark mode backgrounds
- **Orange** (50-950): Accent and CTA color
  - `orange-500` (#f97316) - CTAs, highlights
  - `orange-600` (#ea580c) - Hover states
- **Slate** (50-950): Neutral colors for light & dark modes
  - `slate-50` - Light backgrounds
  - `slate-950` - Dark backgrounds
  - `slate-600/400` - Body text

### Typography
- **Fraunces** (serif) - Headings and brand moments (`font-display`)
- **DM Sans** (sans-serif) - Body text, UI elements (`font-body`)
- **JetBrains Mono** - Code, data, overlines (`font-mono`)

### Dark Mode
- Auto-detects system preference via `next-themes`
- No manual toggle—respects user's OS setting
- All components support light + dark modes

### Key Patterns
```tsx
// Gradient backgrounds
bg-gradient-to-br from-teal-600 to-orange-500

// Glass cards
bg-white/10 backdrop-blur-sm dark:bg-slate-900/20

// Section backgrounds
bg-white dark:bg-slate-950

// Text colors
text-slate-900 dark:text-slate-100  // Headings
text-slate-600 dark:text-slate-400  // Body text
```

---

## 🏗️ Architecture

### Tech Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.0 | App Router with Turbopack |
| **React** | 19 | UI framework |
| **TypeScript** | 5 | Type safety (strict mode) |
| **Tailwind CSS** | 3.4 | Styling with custom theme |
| **Framer Motion** | 12 | Animations & transitions |
| **next-themes** | 0.2.1 | Dark mode support |

### Component Libraries
- **shadcn/ui**: Base primitives (`Button`, `Card`, `Input`, `Tabs`, etc.)
- **Aceternity UI**: Animation effects (`BackgroundBeams`, `Timeline`, `CardSpotlight`, `TextGenerateEffect`)
- **Magic UI**: Text animations (`HyperText`, `NumberTicker`, `AnimatedList`)
- **lucide-react**: Icon library

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata & fonts
│   ├── page.tsx                # Homepage (all sections)
│   ├── globals.css             # Tailwind imports + CSS variables
│   ├── sitemap.ts              # Generates sitemap.xml for SEO
│   └── robots.ts               # Generates robots.txt for crawlers
│
├── components/
│   ├── aceternity/             # Aceternity UI components (4 components)
│   ├── magic/                  # Magic UI components (3 components)
│   ├── ui/                     # shadcn/ui primitives (9 components)
│   ├── animations/             # Framer Motion wrappers
│   ├── interactive/            # Stateful demos (ROI Calculator, etc.)
│   ├── layout/                 # Navbar, Footer
│   ├── sections/               # Page sections (Hero, Features, etc.)
│   └── mocks/                  # Interactive Mock UI demos
│       ├── _framework/         # Shared Mock UI Framework
│       ├── hotel-pms/          # Hotel reservation dashboard
│       ├── crm/                # Sales pipeline Kanban
│       ├── instagram/          # DM categorization
│       ├── notion/             # Task database automation
│       └── granola/            # Meeting transcript analysis
│
├── lib/
│   ├── constants.ts            # All website content
│   ├── calculator.ts           # ROI calculation logic
│   └── utils.ts                # Utility functions (cn, etc.)
│
├── types/
│   ├── agent.ts                # Agent query types
│   └── mock-ui.ts              # Mock UI state types
│
└── animations/                 # Lottie JSON files
```

---

## 🎯 Interactive Mock UI Framework

### Overview
A reusable framework for building **fully interactive demo UIs** that users can query with natural language. All 5 demos share common components and state management.

### Framework Components (`src/components/mocks/_framework/`)
1. **MockUIContext.tsx** - React Context with useReducer for state management
2. **MockUIShell.tsx** - Window container with macOS-style chrome (colored dots)
3. **AgentInterface.tsx** - Chat UI for natural language queries
4. **InteractiveElement.tsx** - Wrapper for clickable elements with hover effects
5. **DataDisplay.tsx** - Generic table component with sorting/highlighting
6. **LoadingStates.tsx** - Loading spinner and skeleton components

### Architecture
```
MockUIProvider (Context)
└── MockUIShell (Window chrome)
    ├── Demo UI (Left/Main area)
    │   └── InteractiveElements (Clickable with highlights)
    └── AgentInterface (Right sidebar)
        ├── Chat history
        └── Query input
```

### State Management
- Uses `useReducer` with typed actions
- Actions: `EXECUTE_QUERY`, `UPDATE_DATA`, `HIGHLIGHT_ELEMENT`, `CLEAR_HIGHLIGHT`
- Demo-specific reducers extend base state

### Building a New Mock UI
1. Create folder in `src/components/mocks/your-demo/`
2. Define types in `types.ts`
3. Create reducer in `reducer.ts`
4. Build UI component in `DemoUI.tsx`
5. Create query handler in `queryHandler.ts`
6. Assemble in `index.tsx` with `MockUIProvider`

See `docs/MOCK_UI_FRAMEWORK.md` for complete documentation.

---

## 🧩 Component Usage

### shadcn/ui Components
```tsx
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

<Button variant="default" size="lg">Click Me</Button>
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Aceternity UI Effects
```tsx
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { CardSpotlight } from "@/components/aceternity/CardSpotlight";
import { Timeline } from "@/components/aceternity/Timeline";

// Background effect
<div className="relative">
  <BackgroundBeams />
  <YourContent />
</div>

// Spotlight hover effect
<CardSpotlight color="rgba(20, 184, 166, 0.3)">
  <YourCard />
</CardSpotlight>

// Vertical timeline
<Timeline data={timelineData} />
```

### Magic UI Animations
```tsx
import { HyperText } from "@/components/magic/HyperText";
import { NumberTicker } from "@/components/magic/NumberTicker";

<HyperText text="Future of AI" />
<NumberTicker value={425} suffix="x faster" />
```

---

## 📄 Page Sections

### Homepage Sections (in order)
1. **Hero** - Headline with `HyperText`, gradient CTAs, animated stats with `NumberTicker`
2. **Features** - 6 feature cards wrapped in `CardSpotlight`, each with icon + bullets
3. **Journey** - 4-stage timeline using Aceternity `Timeline` component
4. **Differentiation** - Comparison vs RPA & AI agents, includes ROI Calculator
5. **UseCases** - 5 interactive mock UIs embedded (Hotel, CRM, Operations, Instagram, Granola)
6. **CTA** - Final call-to-action with gradient background

### Navigation
- Fixed navbar with auto-hide on scroll down, show on scroll up
- Hash-based navigation to sections: `#features`, `#journey`, `#differentiation`, `#use-cases`
- Smooth scroll enabled globally

---

## 🎨 Styling Conventions

### Tailwind Best Practices
- **Mobile-first**: Base styles → `md:` → `lg:`
- **Dark mode**: Always add `dark:` classes for color tokens
- **Gradients**: Use `from-teal-600 to-orange-500` for brand moments
- **Spacing**: `py-24 md:py-32` for sections, `px-6` for horizontal padding
- **Max width**: `max-w-7xl mx-auto` for content containers

### Animation Patterns
```tsx
// Scroll reveal
<ScrollReveal>
  <YourContent />
</ScrollReveal>

// Micro-interactions
<motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>

// Stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

---

## 🔍 SEO Optimization

### Metadata (src/app/layout.tsx)
- **Title**: "Agent School — Turn Human Knowledge Into AI That Never Forgets"
- **Description**: Futuristic, benefit-focused copy
- **Keywords**: 11 targeted keywords (AI automation, self-healing, etc.)
- **Open Graph**: Full og:image, og:title, og:description
- **Twitter Cards**: summary_large_image with proper metadata

### Sitemap (src/app/sitemap.ts)
- Generates `sitemap.xml` at build time
- Includes homepage + all section anchors
- Change frequency: weekly (homepage), monthly (sections)

### Robots.txt (src/app/robots.ts)
- Allows all crawlers
- Disallows `/api/`, `/_next/`, `/demos/`
- Points to sitemap

### Structured Data (JSON-LD)
- Schema.org `SoftwareApplication` type
- Includes rating, description, publisher info
- Embedded in `<head>` for rich snippets

---

## 💻 Development Guide

### Code Style
- **Indentation**: 2 spaces
- **Quotes**: Double quotes
- **Semicolons**: Always
- **Line length**: ~120 characters
- **Imports**: 3 groups (directives, external, internal with `@/`)

### Component Rules
1. **Named exports only** (except `page.tsx`/`layout.tsx`)
   ```tsx
   // ✅ Good
   export function MyComponent() {}
   
   // ❌ Bad
   export default function MyComponent() {}
   ```

2. **Use "use client" directive** when component uses:
   - React hooks (`useState`, `useEffect`, etc.)
   - Framer Motion
   - Browser APIs
   
3. **Props interfaces** named `{ComponentName}Props`
   ```tsx
   interface ButtonProps { ... }
   export function Button(props: ButtonProps) {}
   ```

### File Naming
| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase.tsx | `Hero.tsx`, `ROICalculator.tsx` |
| Utilities | camelCase.ts | `calculator.ts`, `utils.ts` |
| Constants | camelCase.ts | `constants.ts` |
| Types | camelCase.ts | `agent.ts`, `mock-ui.ts` |

### Import Patterns
```tsx
"use client";  // First line if needed

import { useState } from "react";              // External packages
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";  // Internal with @/
import { BOOKING_URL } from "@/lib/constants";
```

---

## 🧪 Testing & Quality

### Type Checking
```bash
npx tsc --noEmit
```
- Strict mode enabled
- No `any` types allowed
- All props interfaces required

### Linting
```bash
npm run lint
```
- ESLint with `next/core-web-vitals`
- Auto-fix on save (if configured)

### Performance
- Lighthouse target: 90+ score
- Code splitting via Next.js App Router
- Optimized images with `next/image`
- Lazy-loaded components with `next/dynamic`

### Accessibility
- Semantic HTML throughout
- WCAG AA compliance target
- `prefers-reduced-motion` support for animations
- Keyboard navigation on interactive elements

---

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Auto-deploys on push to `main`
3. Preview deployments for PRs
4. Edge network for global CDN

### Build Command
```bash
npm run build
```

### Environment Variables
None required for production (all URLs hardcoded).

---

## 📚 Documentation

### For Developers
- **AGENTS.md** - Complete context for AI coding agents
- **docs/DESIGN_SYSTEM.md** - Full color palette, typography, effects
- **docs/MOCK_UI_FRAMEWORK.md** - Mock UI architecture & API
- **docs/COMPONENTS_GUIDE.md** - Component library usage
- **docs/REDESIGN_ROADMAP.md** - 7-phase implementation plan

### Key URLs
- **Website**: https://agentschool.io
- **Booking**: https://cal.com/jackagentschool/15min
- **Email**: hello@agentschool.io
- **LinkedIn**: https://linkedin.com/company/agentschool

---

## 🎯 Key Features

### 1. Interactive Mock UIs (5 demos)
- **Hotel PMS**: Reservation dashboard with 50 rooms, arrivals/departures
- **CRM Pipeline**: Kanban board with 33 deals across 5 stages
- **Instagram DMs**: Message inbox with 20 conversations, category filtering
- **Notion Tasks**: Task database with 28 tasks, status/priority tracking
- **Granola Transcript**: Meeting notes with AI summary & action items

All demos support natural language queries like:
- "How many arrivals today?"
- "Show me deals in proposal stage"
- "Create a new task for website redesign"

### 2. ROI Calculator
- Fully functional with real-time calculations
- Interactive sliders: complexity, frequency, employees, hourly rate
- Animated numbers with spring physics
- Comparison table: current vs Agent School metrics
- Direct booking CTA

### 3. Scroll Animations
- `ScrollReveal` with Framer Motion `whileInView`
- Staggered children animations
- Respect `prefers-reduced-motion`
- Smooth parallax effects

### 4. Dark Mode
- Auto-detect system preference
- Smooth transitions between modes
- All components fully styled for dark mode
- No manual toggle (respects user OS setting)

---

## 🛠️ Troubleshooting

### Turbopack SST Errors
If you see persistent Turbopack errors:
```bash
npm run dev:no-cache
```

### TypeScript LSP Warnings (Windows)
Warnings about `Button.tsx` vs `button.tsx` casing are **safe to ignore**—Windows filesystem issue that doesn't affect builds.

### Dark Mode Not Working
Check that `ThemeProvider` wraps your app in `layout.tsx`:
```tsx
<ThemeProvider>{children}</ThemeProvider>
```

---

## 📈 Project Stats

- **Total Lines**: ~13,000+ lines of code
- **Components**: 50+ React components
- **Mock UIs**: 5 fully interactive demos
- **Design System**: 3 color palettes (teal, orange, slate)
- **Animations**: 20+ Framer Motion animations
- **Type Safety**: 100% TypeScript coverage
- **Mobile Responsive**: All breakpoints (sm, md, lg, xl)

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com) - Component primitives
- [Aceternity UI](https://ui.aceternity.com) - Animation components
- [Magic UI](https://magicui.design) - Text animations
- [Lucide Icons](https://lucide.dev) - Icon library

---

## 📄 License

See [LICENSE](./LICENSE) for details.

---

**Built with 🤖 by Agent School** — Turn Human Knowledge Into AI That Never Forgets
