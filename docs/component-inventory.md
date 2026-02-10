# UI Component Inventory

**Generated:** 2026-02-10  
**Project:** Agent School Website  
**Total Components:** 79 files across 15 directories

---

## Overview

This project contains a comprehensive component library organized into functional categories. Components are built with React 19, TypeScript, Tailwind CSS, Framer Motion, and various UI libraries (Radix UI, shadcn/ui, Aceternity UI, Magic UI).

---

## Component Categories

### 1. UI Primitives (`src/components/ui/`) — 14 components
**Purpose:** Reusable, low-level building blocks for the interface

| Component | File | Purpose | Based On |
|-----------|------|---------|----------|
| **Button** | `Button.tsx` | Primary action button with variants | shadcn/ui + Radix |
| **Badge** | `Badge.tsx` | Label/tag component | Custom |
| **Card** | `Card.tsx` | Content container with styling | shadcn/ui |
| **CodeBlock** | `CodeBlock.tsx` | Syntax-highlighted code display | Custom |
| **Input** | `input.tsx` | Form input field | shadcn/ui + Radix |
| **MetricCard** | `MetricCard.tsx` | Stat display card | Custom |
| **ProgressRing** | `ProgressRing.tsx` | Circular progress indicator | Custom SVG |
| **SectionHeader** | `SectionHeader.tsx` | Page section title component | Custom |
| **TabGroup** | `TabGroup.tsx` | Custom tab component | Custom + Framer Motion |
| **Dialog** | `dialog.tsx` | Modal/dialog component | shadcn/ui + Radix |
| **Select** | `select.tsx` | Dropdown selection | shadcn/ui + Radix |
| **Slider** | `slider.tsx` | Range slider input | shadcn/ui + Radix |
| **Table** | `table.tsx` | Data table component | shadcn/ui |
| **Tabs** | `tabs.tsx` | Tab interface | shadcn/ui + Radix |

**Design Pattern:** Variant-based styling with CVA (class-variance-authority), Radix UI for accessibility primitives

---

### 2. Animation Wrappers (`src/components/animations/`) — 5 components
**Purpose:** Reusable Framer Motion animation patterns

| Component | File | Purpose | Animation Type |
|-----------|------|---------|----------------|
| **ScrollReveal** | `ScrollReveal.tsx` | Fade/slide in on scroll | Viewport trigger |
| **WordReveal** | `WordReveal.tsx` | Staggered word animation | Text reveal |
| **AnimatedCounter** | `AnimatedCounter.tsx` | Number count-up animation | Motion value |
| **StaggeredList** | `StaggeredList.tsx` | List items with stagger | Children stagger |
| **ParallaxLayer** | `ParallaxLayer.tsx` | Parallax scroll effect | Transform on scroll |

**Design Pattern:** Wrapper components that add animation behavior to children

---

### 3. Interactive Demos (`src/components/interactive/`) — 6 components
**Purpose:** Stateful, interactive feature demonstrations

| Component | File | Purpose | State Complexity |
|-----------|------|---------|------------------|
| **ROICalculator** | `ROICalculator.tsx` | Cost/savings calculator with inputs | High (multiple inputs, calculations) |
| **CertificationDemo** | `CertificationDemo.tsx` | Agent certification flow demo | Medium (multi-step) |
| **SkillBuilderDemo** | `SkillBuilderDemo.tsx` | Skill building interface demo | Medium (interactive UI) |
| **SelfHealingDemo** | `SelfHealingDemo.tsx` | Self-healing code demonstration | Low (animation sequence) |
| **ScriptViewerDemo** | `ScriptViewerDemo.tsx` | Script/code viewer with syntax highlighting | Low (display only) |
| **SpeedRaceDemo** | `SpeedRaceDemo.tsx` | Speed comparison animation | Low (animation sequence) |

**Design Pattern:** Component-scoped state with React hooks (useState, useMemo, useCallback)

---

### 4. Page Sections (`src/components/sections/`) — 6 components
**Purpose:** Full-width page sections for landing page

| Component | File | Purpose | Content Type |
|-----------|------|---------|--------------|
| **Hero** | `Hero.tsx` | Above-the-fold hero section | Marketing headline + CTA |
| **Features** | `Features.tsx` | Product features showcase | Feature grid |
| **UseCases** | `UseCases.tsx` | Use case examples | Card carousel |
| **Journey** | `Journey.tsx` | User journey timeline | Step-by-step flow |
| **Differentiation** | `Differentiation.tsx` | Competitive differentiation | Comparison table |
| **CTA** | `CTA.tsx` | Call-to-action section | Conversion-focused |

**Design Pattern:** Large, composition-heavy components with embedded animations

---

### 5. Layout Components (`src/components/layout/`) — 2 components
**Purpose:** Persistent layout elements

| Component | File | Purpose | Features |
|-----------|------|---------|----------|
| **Navbar** | `Navbar.tsx` | Top navigation bar | Responsive, scroll behavior, CTA button |
| **Footer** | `Footer.tsx` | Site footer | Links, social, copyright |

**Design Pattern:** Persistent layout, responsive breakpoints

---

### 6. Aceternity UI (`src/components/aceternity/`) — 5 components
**Purpose:** Advanced animation effects from Aceternity UI library

| Component | Purpose |
|-----------|---------|
| **BackgroundBeams** | Animated beam/ray background effect |
| **Timeline** | Vertical timeline with animations |
| **CardSpotlight** | Card with spotlight hover effect |
| **HeroHighlight** | Text highlight animation effect |
| **TextGenerateEffect** | Text generation typing effect |

**Source:** https://ui.aceternity.com  
**Design Pattern:** Pre-built animation components with TypeScript

---

### 7. Magic UI (`src/components/magic/`) — 3 components
**Purpose:** Text animation components from Magic UI library

| Component | Purpose |
|-----------|---------|
| **HyperText** | Glitch/scramble text effect |
| **NumberTicker** | Animated number counting |
| **AnimatedList** | List with item animations |

**Source:** https://magicui.design  
**Design Pattern:** Specialized text animation components

---

### 8. Mock UI Demos (`src/components/mocks/`) — 16 components + Framework
**Purpose:** Interactive demo UIs for Agent School product showcase

#### Framework Components (`_framework/`)
- **MockUIShell** - Window chrome with macOS-style dots
- **AgentInterface** - Chat input/output for agent queries
- **MockUIContext** - Shared state management for mocks
- **InteractiveElement** - Clickable UI elements
- **DataDisplay** - Tables/grids for data

#### Demo Applications (5 mock UIs)

**1. Hotel PMS (`mocks/hotel-pms/`)** — 3 components
- Hotel property management system
- Reservations dashboard
- Booking management interface

**2. CRM (`mocks/crm/`)** — 3 components
- Sales pipeline Kanban board
- Lead management
- Deal tracking

**3. Instagram (`mocks/instagram/`)** — 3 components
- DM categorization interface
- Social media inbox
- Message filtering

**4. Notion (`mocks/notion/`)** — 3 components
- Task database automation
- Workspace management
- Database views

**5. Granola (`mocks/granola/`)** — 3 components
- Meeting transcript analysis
- Note-taking interface
- Action item extraction

**Status:** Work in progress (per user), pure frontend simulations (no backend)  
**Design Pattern:** Shared framework for consistent mock UI structure

---

## Component Dependencies

### External Libraries Used
- **Radix UI** - Accessibility primitives (Dialog, Select, Slider, Tabs)
- **Framer Motion** - Animation library (used in ~50% of components)
- **Lucide React** - Icons (used throughout)
- **CVA** - Variant management (UI primitives)
- **Tailwind CSS** - Styling (all components)
- **next-themes** - Dark mode support (ThemeProvider)

### Internal Dependencies
- `@/lib/constants.ts` - Content/data constants
- `@/lib/utils.ts` - Utility functions (cn helper)
- `@/types/` - TypeScript type definitions

---

## Design System Integration

All components follow the **"Cyber Citrus" design system:**

### Color Usage
- **Teal (primary)** - Buttons, links, accents
- **Orange (accent)** - CTAs, highlights, gradients
- **Slate (neutral)** - Text, borders, backgrounds
- **Legacy colors** - Navy, Amber, Cream (being phased out)

### Typography
- **Fraunces (display font)** - Headings, hero text
- **DM Sans (body font)** - Body text, UI labels
- **JetBrains Mono** - Code blocks, monospace content

### Animation Principles
- Scroll-triggered reveals with `whileInView`
- Micro-interactions on hover/tap
- Staggered children for lists
- Smooth transitions with custom easing

---

## Component Patterns

### 1. Server vs Client Components
- **Default:** Server Components (no "use client" directive)
- **Client Components:** Any component using:
  - React hooks (useState, useEffect, etc.)
  - Framer Motion
  - Browser APIs
  - Event handlers

### 2. Composition Pattern
```tsx
// Large sections compose smaller primitives
<Section>
  <SectionHeader>...</SectionHeader>
  <ScrollReveal>
    <Card>
      <Button>...</Button>
    </Card>
  </ScrollReveal>
</Section>
```

### 3. Variant Pattern (UI Primitives)
```tsx
// CVA-based variants for consistent styling
<Button variant="primary" size="lg">...</Button>
<Badge variant="success">...</Badge>
```

### 4. Animation Wrapper Pattern
```tsx
// Wrap content in animation components
<ScrollReveal>
  <Content />
</ScrollReveal>

<StaggeredList>
  <Item />
  <Item />
</StaggeredList>
```

---

## State Management

**No global state management library.** All state is component-scoped:

- **Local state:** `useState` for component-specific data
- **Derived state:** `useMemo` for computed values
- **Side effects:** `useEffect` for DOM interactions
- **Theme state:** `next-themes` provider for dark mode
- **Mock UI state:** `MockUIContext` for shared demo state

---

## Accessibility

- **Radix UI primitives** provide ARIA attributes and keyboard navigation
- **Focus management** handled by Radix
- **Color contrast** follows WCAG AA standards (per design system)
- **Responsive design** with mobile-first Tailwind breakpoints

---

## Reusability Assessment

| Category | Reusability | Notes |
|----------|-------------|-------|
| UI Primitives | ⭐⭐⭐⭐⭐ | Highly reusable across projects |
| Animation Wrappers | ⭐⭐⭐⭐⭐ | Generic animation patterns |
| Interactive Demos | ⭐⭐⭐ | Specific to Agent School product |
| Page Sections | ⭐⭐ | Tightly coupled to landing page |
| Layout Components | ⭐⭐⭐⭐ | Reusable with minor edits |
| Aceternity/Magic UI | ⭐⭐⭐⭐ | Reusable animation components |
| Mock UI Framework | ⭐⭐⭐⭐ | Reusable demo framework pattern |
| Mock UI Demos | ⭐⭐ | Specific to product showcase |

---

## Component Testing

**⚠️ No testing framework configured.**

Recommended testing approach:
- **Unit tests:** Jest + React Testing Library for UI primitives
- **Integration tests:** Interactive demos and page sections
- **E2E tests:** Playwright for full user flows
- **Visual regression:** Chromatic or Percy for design consistency

---

## Known Issues

⚠️ **Site doesn't compile** (per user) - components may have type errors or import issues  
⚠️ **Redesign untested** - NEW design system components haven't been manually tested  
⚠️ **Mock demos WIP** - Status uncertain, may be incomplete

---

## Future Enhancements

1. **Component Documentation:** Add Storybook for component showcase
2. **Testing:** Implement unit/integration tests
3. **Performance:** Lazy load heavy components (ROICalculator, Mock UIs)
4. **Accessibility Audit:** Run axe-core/pa11y for compliance
5. **Design Tokens:** Extract design system to JSON tokens file
