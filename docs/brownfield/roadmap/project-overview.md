# Project Overview

**Generated:** 2026-02-10  
**Project Name:** Agent School Website  
**Repository Type:** Monolith  
**Project Type:** Next.js Web Application

---

## Quick Summary

Agent School Website is a modern marketing website built with Next.js 16 and React 19, featuring advanced animations, a comprehensive design system ("Cyber Citrus"), and interactive component demos. It serves as the primary web presence for Agent School, a platform that teaches and certifies AI agents to automate software workflows.

---

## Project Purpose

**Primary Goal:** Market and promote Agent School's AI agent training platform

**Target Audience:**
- Software teams looking to automate workflows
- CTOs/Engineering leaders evaluating AI solutions
- Developers interested in AI agent technology

**Key Features:**
- Interactive ROI calculator
- Live product demos (5 mock UIs)
- Educational content (use cases, journey)
- Call-to-action for booking demos

---

## Project Metadata

| Attribute | Value |
|-----------|-------|
| **Type** | Marketing Website (SPA with SSR) |
| **Framework** | Next.js 16.1.0 |
| **Language** | TypeScript 5 (strict mode) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 3.4 + Custom Design System |
| **Animation** | Framer Motion 12 |
| **Deployment** | Vercel (automatic) |
| **Repository** | Monolith (single codebase) |
| **Total Files** | ~160+ (excluding node_modules) |
| **Components** | 79 React components |
| **LOC Estimate** | ~21,500+ lines |

---

## Executive Summary

### Strengths

✅ **Comprehensive Documentation** - Extensive existing docs (design system, roadmap, architecture)  
✅ **Modern Tech Stack** - Latest Next.js, React 19, TypeScript 5  
✅ **Rich Component Library** - 79 components with clear organization  
✅ **Advanced Animations** - Framer Motion, Lottie, custom effects  
✅ **Design System** - "Cyber Citrus" with teal/orange gradients  
✅ **Easy Deployment** - Automatic Vercel deployments  

### Challenges

⚠️ **Build Issues** - Site currently doesn't compile (known errors)  
⚠️ **No Testing** - No automated test framework configured  
⚠️ **No CI/CD** - Beyond Vercel's automatic deployment  
⚠️ **Untested Redesign** - NEW design system hasn't been manually tested  
⚠️ **Mock Demos WIP** - Status of 5 mock UIs uncertain  

---

## Technology Stack Summary

### Core Technologies

```
Next.js 16.1.0
├── React 19 (UI library)
├── TypeScript 5 (language)
├── Turbopack (build tool)
└── Vercel (deployment)
```

### Styling & Design

```
Tailwind CSS 3.4.1
├── "Cyber Citrus" Design System (custom)
├── next-themes (dark mode)
└── CVA (variant management)
```

### Component Libraries

```
UI Components
├── Radix UI (accessibility primitives)
├── shadcn/ui (customizable components)
├── Aceternity UI (animation effects)
└── Magic UI (text animations)
```

### Animation

```
Framer Motion 12
├── Scroll reveals
├── Staggered animations
├── Micro-interactions
└── Number counters

Lottie React 2.4
└── JSON vector animations
```

---

## Architecture Type

**Component-Based Single Page Application with Server-Side Rendering**

### Layered Architecture

```
┌─────────────────────────────────────────┐
│  Presentation Layer (Sections)          │ ← Hero, Features, Journey
├─────────────────────────────────────────┤
│  Component Layer (UI + Interactive)     │ ← Button, Card, ROICalculator
├─────────────────────────────────────────┤
│  Layout Layer (Navbar, Footer)          │ ← Persistent elements
├─────────────────────────────────────────┤
│  Application Layer (App Router)         │ ← Next.js pages, routes
├─────────────────────────────────────────┤
│  Utility Layer (lib/, types/)           │ ← Constants, utilities, types
└─────────────────────────────────────────┘
```

### Key Architectural Characteristics

- **Server Components First** - Default to server rendering
- **Client Components** - Only when needed (hooks, animations)
- **File-Based Routing** - Next.js App Router
- **Static Content** - No database, all content in constants
- **Local State** - No global state management library
- **Edge Deployment** - Vercel global CDN

---

## Repository Structure

### High-Level Organization

```
website/
├── src/                  # Main source code (79 components)
│   ├── app/              # Next.js App Router (pages, layouts)
│   ├── components/       # React components (UI, sections, demos)
│   ├── lib/              # Utilities, constants, helpers
│   ├── types/            # TypeScript type definitions
│   └── animations/       # Lottie JSON files
│
├── public/               # Static assets (images, logos)
├── docs/                 # Project documentation (existing + generated)
├── _bmad-output/         # BMad workflow artifacts
│
└── Configuration Files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.mjs
    └── vercel.json
```

### Critical Directories

| Directory | Purpose | Files | Priority |
|-----------|---------|-------|----------|
| **src/app/** | App Router pages & layouts | ~10 | CRITICAL |
| **src/components/** | All React components | 79 | CRITICAL |
| **src/lib/** | Utilities & constants | ~5 | HIGH |
| **public/** | Static assets | ~50+ | MEDIUM |
| **docs/** | Documentation | ~20 | HIGH |

---

## Component Breakdown

### Component Categories (79 total)

| Category | Count | Examples |
|----------|-------|----------|
| **UI Primitives** | 14 | Button, Card, Badge, Input |
| **Animation Wrappers** | 5 | ScrollReveal, WordReveal |
| **Interactive Demos** | 6 | ROICalculator, CertificationDemo |
| **Page Sections** | 6 | Hero, Features, Journey |
| **Layout** | 2 | Navbar, Footer |
| **Aceternity UI** | 5 | BackgroundBeams, Timeline |
| **Magic UI** | 3 | HyperText, NumberTicker |
| **Mock UIs** | 16 | Hotel PMS, CRM, Instagram, Notion, Granola |
| **Framework** | 5 | MockUIShell, AgentInterface |

---

## Integration Points

**None.** This is a static marketing website.

- ❌ No API integrations
- ❌ No authentication system
- ❌ No backend/database
- ❌ No external services (analytics, CRM, etc.)
- ✅ Deployed to Vercel (automatic)

**Future Integrations (Planned):**
- Analytics (Vercel Analytics, Posthog)
- Email service (contact form)
- CRM integration (lead capture)

---

## Development Status

### Current Phase

**Phase 1 of 7-Phase Redesign** (Days 1-3 / 28-32 days total)

**Focus:** Foundation & Design System
- Migrating from Navy/Amber/Cream → Teal/Orange/Slate
- Implementing "Cyber Citrus" design tokens
- Building component library with new styling

### Known Issues

🚨 **P0: Build Errors** - Site doesn't compile  
⚠️ **P1: Redesign Untested** - NEW design system needs QA  
⚠️ **P1: No Testing** - No automated tests  
⚠️ **P2: Mock Demos** - Status uncertain, may be incomplete  

---

## Getting Started

### For Developers

1. **Read Design System:** `docs/design/design-system.md`
2. **Review Component Guide:** `docs/guides/components-guide.md`
3. **Understand Architecture:** `docs/architecture/mock-ui-framework.md`
4. **Setup Local Dev:** See `docs/development-guide.md`

### For New Team Members

1. **Project Context:** Read this document (you are here!)
2. **Technology Stack:** `docs/technology-stack.md`
3. **Component Inventory:** `docs/component-inventory.md`
4. **Source Tree:** `docs/source-tree-analysis.md`
5. **AI Agent Context:** Read `AGENTS.md` (241 lines)

### For Product/Design

1. **Redesign Plan:** `docs/planning/redesign-roadmap.md` (891 lines)
2. **Design System:** `docs/design/design-system.md` (1042 lines)
3. **Mock UI Framework:** `docs/architecture/mock-ui-framework.md` (1790 lines)

---

## Links to Documentation

### Generated Documentation (This Workflow)

- **[Technology Stack](./technology-stack.md)** - Complete tech stack breakdown
- **[Component Inventory](./component-inventory.md)** - All 79 components cataloged
- **[Source Tree Analysis](./source-tree-analysis.md)** - Annotated directory structure
- **[Architecture](./architecture.md)** - Comprehensive architecture document
- **[Development Guide](./development-guide.md)** - Local dev setup & workflow
- **[Deployment Guide](./deployment-guide.md)** - Vercel deployment process

### Existing Documentation

- **[Design System](./design/design-system.md)** - Cyber Citrus design tokens (1042 lines)
- **[Redesign Roadmap](./planning/redesign-roadmap.md)** - 7-phase plan (891 lines)
- **[Mock UI Framework](./architecture/mock-ui-framework.md)** - Architecture (1790 lines)
- **[Components Guide](./guides/components-guide.md)** - Component usage patterns
- **[MCP Setup](./guides/mcp-setup.md)** - MCP configuration
- **[Bug Tracking](./bugs/readme.md)** - Known issues & tracking

---

## Quick Reference

### Tech Stack One-Liner

**Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS + Framer Motion → Vercel**

### Project Type

**Marketing SPA** - Single-page application with server-side rendering, no backend

### Repository Type

**Monolith** - Single cohesive codebase (not monorepo, not multi-part)

### Architecture Pattern

**Component-based layered architecture** with file-based routing (App Router)

### Entry Point

```
src/app/layout.tsx  →  Root layout
src/app/page.tsx    →  Homepage
```

### Main Technologies

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + Cyber Citrus |
| Animation | Framer Motion + Lottie |
| Components | Radix UI + shadcn/ui |
| Deployment | Vercel |

### Component Count

**79 components** across 15 directories

### Documentation Quality

**Excellent** - Extensive existing docs (5,000+ lines)

---

## Next Steps

### Immediate Actions

1. **Fix Compilation Errors** (P0 blocker)
2. **Manual QA Pass** (test redesign)
3. **Add Testing Framework** (Jest + RTL)
4. **Deploy to Production** (after fixes)

### Short-Term Goals (1-3 months)

1. Complete Phase 1 of redesign
2. Set up automated testing
3. Add Prettier + pre-commit hooks
4. Performance audit + optimizations
5. Accessibility audit

### Long-Term Vision (6-12 months)

1. Migrate to headless CMS
2. Add blog section (MDX)
3. Implement A/B testing
4. Add analytics & user tracking
5. Internationalization (i18n)

---

## Contact & Support

**AI Agent Context:** See `AGENTS.md` for detailed context  
**Bug Tracking:** See `docs/bugs/` for known issues  
**Design Questions:** Reference `docs/design/design-system.md`  
**Architecture Questions:** Reference `docs/architecture.md`  

---

**Document Version:** 1.0.0  
**Generated:** 2026-02-10  
**Next Review:** After compilation errors resolved
