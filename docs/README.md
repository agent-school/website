# Agent School Website Documentation

> **Comprehensive documentation for developers, designers, and contributors**

Welcome to the Agent School website documentation hub. This directory contains everything you need to understand, develop, and contribute to the project.

---

## 📚 Quick Navigation

| Category | What's Inside | Start Here |
|----------|---------------|------------|
| [🎨 Design](#design) | Visual design system, colors, typography, branding | [`design/design-system.md`](design/design-system.md) |
| [🏗️ Architecture](#architecture) | Technical architecture, frameworks, patterns | [`architecture/mock-ui-framework.md`](architecture/mock-ui-framework.md) |
| [📖 Guides](#guides) | How-to guides, tutorials, development workflows | [`guides/components-guide.md`](guides/components-guide.md) |
| [📋 Planning](#planning) | Roadmaps, feature planning, project timelines | [`planning/redesign-roadmap.md`](planning/redesign-roadmap.md) |
| [🐛 Bugs](#bugs) | Bug reports, fixes, known issues | [`bugs/readme.md`](bugs/readme.md) |

---

## 🎨 Design

**Visual design system, color palettes, typography, and branding guidelines**

### Core Documents
- **[Design System](design/design-system.md)** ⭐ START HERE
  - "Cyber Citrus" color palette (teal/orange/slate)
  - Typography system (Fraunces, DM Sans, JetBrains Mono)
  - Dark mode implementation
  - Gradient usage patterns
  - Component styling conventions

### What You'll Learn
- How to use the teal/orange color system
- Typography hierarchy and font families
- Dark mode color mappings
- Gradient patterns and effects
- Spacing and layout principles

### Quick Reference
```tsx
// Primary brand colors
text-teal-600       // Teal primary
text-orange-500     // Orange accent
bg-slate-900        // Dark mode background

// Gradients
bg-gradient-to-br from-teal-600 to-orange-500

// Typography
font-display        // Fraunces (headings)
font-body           // DM Sans (body text)
font-mono           // JetBrains Mono (code/data)
```

---

## 🏗️ Architecture

**Technical architecture, frameworks, design patterns, and system design**

### Core Documents
- **[Mock UI Framework](architecture/mock-ui-framework.md)** ⭐ START HERE
  - Architecture for 5 interactive demo UIs
  - Component hierarchy and data flow
  - State management patterns
  - Reusable framework components
  - Integration with Framer Motion

### What You'll Learn
- How the mock UI demos work
- Component composition patterns
- State management with React Context
- Agent query processing
- Animation architecture

### Quick Reference
```tsx
// Mock UI Structure
<MockUIShell>          // Window chrome (macOS dots)
  <MockUIContext>      // State management
    <DemoUI />         // Specific demo (Hotel PMS, CRM, etc.)
    <AgentInterface /> // Chat input/output
  </MockUIContext>
</MockUIShell>
```

---

## 📖 Guides

**Practical how-to guides, tutorials, and development workflows**

### Core Documents
- **[Components Guide](guides/components-guide.md)** ⭐ START HERE
  - shadcn/ui components usage
  - Aceternity UI animations
  - Magic UI text effects
  - Custom component patterns
  - Best practices

- **[MCP Setup Guide](guides/mcp-setup.md)**
  - Model Context Protocol configuration
  - AI agent integration
  - Tool setup instructions

### What You'll Learn
- How to use shadcn/ui primitives (Button, Card, Input, etc.)
- Aceternity UI animation effects (BackgroundBeams, CardSpotlight, etc.)
- Magic UI text animations (HyperText, NumberTicker, etc.)
- Component composition patterns
- Development workflow tips

### Quick Reference
```bash
# Development commands
npm run dev:webpack      # Start dev server (Windows-safe)
npm run build            # Production build
npm run clean:cache      # Clear Next.js cache
npx tsc --noEmit         # Type check
```

---

## 📋 Planning

**Project roadmaps, feature planning, timelines, and strategic documents**

### Core Documents
- **[Redesign Roadmap](planning/redesign-roadmap.md)** ⭐ START HERE
  - 7-phase redesign plan (28-32 days)
  - Phase 1-4: Completed (design system, mock UIs, core sections)
  - Phase 5-6: Completed (additional sections, content rewrite)
  - Phase 7: In progress (bug fixes, optimization)
  - Detailed task breakdowns per phase

### What You'll Learn
- Overall project timeline and milestones
- Current phase status (85% complete)
- Remaining work and priorities
- Future feature planning

### Quick Reference
**Project Status:** 85% Complete (Phase 7 in progress)

| Phase | Status | Duration | Focus |
|-------|--------|----------|-------|
| 1-2 | ✅ Complete | 8 days | Design system, component libraries |
| 3-4 | ✅ Complete | 10 days | Mock UIs, core sections |
| 5 | ✅ Complete | 2 days | Differentiation, ROI calculator |
| 6 | ✅ Complete | 3 days | Content rewrite, SEO |
| 7 | 🚧 In Progress | 5-7 days | Bug fixes, optimization |

---

## 🐛 Bugs

**Bug reports, fixes, known issues, and troubleshooting**

### Core Documents
- **[Bug Reports Index](bugs/readme.md)** ⭐ START HERE
  - List of all documented bugs
  - Severity levels (Critical, Major, Minor)
  - Status tracking (Fixed, In Progress, Open)
  - Bug report template

- **[Vercel Build Timeout (Feb 2026)](bugs/build-timeout-feb-2026.md)**
  - Critical bug: Vercel deployments timing out after 45 minutes
  - Root cause: Next.js static generation of heavy client-side pages
  - Solution: Added `export const dynamic = 'force-dynamic'` to demo pages
  - Result: Build time 45+ min → 3-5 minutes (100% success rate)

### Known Issues

#### 🔴 Critical
- **Turbopack Dev Server Hang (Windows)** - WORKAROUND AVAILABLE
  - **Problem:** `npm run dev` hangs indefinitely on Windows
  - **Cause:** Turbopack SST cache corruption, Windows-specific bugs
  - **Solution:** Use `npm run dev:webpack` instead
  - **Status:** Workaround in place, Turbopack remains unreliable

#### ✅ Fixed
- **Vercel Build Timeout** - Fixed in commit `f35f13c`
- **Tailwind CSS Error in Remotion** - Fixed in commit `c5364c4`
- **Next.js Config Warnings** - Fixed in commit `88856c3`

### Quick Troubleshooting

```bash
# Dev server won't start
npm run clean:cache
npm run dev:webpack

# Build fails on Vercel
# Make sure demo pages have: export const dynamic = 'force-dynamic'

# Type errors
npx tsc --noEmit

# Nuclear option (full reinstall)
rm -rf node_modules package-lock.json .next
npm install
npm run dev:webpack
```

---

## 🚀 Getting Started

### For New Developers

1. **Read the README** - Start with [`../README.md`](../README.md) for project overview
2. **Understand the Design** - Read [`design/design-system.md`](design/design-system.md)
3. **Learn the Architecture** - Read [`architecture/mock-ui-framework.md`](architecture/mock-ui-framework.md)
4. **Use the Components** - Reference [`guides/components-guide.md`](guides/components-guide.md)
5. **Check Known Issues** - Review [`bugs/readme.md`](bugs/readme.md)

### For Designers

1. **Design System** - [`design/design-system.md`](design/design-system.md) - Complete visual language
2. **Color Palette** - Teal/orange/slate "Cyber Citrus" system
3. **Typography** - Fraunces (display), DM Sans (body), JetBrains Mono (code)
4. **Dark Mode** - Auto-detect system preference, no manual toggle

### For AI Agents

1. **Project Context** - [`../AGENTS.md`](../AGENTS.md) - AI agent instructions
2. **Architecture** - [`architecture/mock-ui-framework.md`](architecture/mock-ui-framework.md)
3. **Components** - [`guides/components-guide.md`](guides/components-guide.md)
4. **Known Issues** - [`bugs/readme.md`](bugs/readme.md)

---

## 📊 Documentation Statistics

- **Total Documents:** 7 markdown files
- **Categories:** 5 (Design, Architecture, Guides, Planning, Bugs)
- **Word Count:** ~15,000 words
- **Last Updated:** February 2026
- **Maintainer:** Agent School Team

---

## 🤝 Contributing to Docs

### Adding New Documentation

**Choose the right folder:**
- **Design** - Visual design, colors, typography, branding
- **Architecture** - Technical architecture, system design, patterns
- **Guides** - How-to guides, tutorials, workflows
- **Planning** - Roadmaps, feature planning, timelines
- **Bugs** - Bug reports, fixes, known issues

**File naming conventions:**
- Use lowercase with hyphens: `design-system.md`, `getting-started.md`
- Be descriptive: `vercel-deployment-guide.md` not `deploy.md`
- Include dates for bug reports: `build-timeout-feb-2026.md`

**Markdown formatting:**
- Use `#` for H1 (title), `##` for H2 (sections)
- Include table of contents for docs >500 words
- Use code blocks with language tags: ```tsx, ```bash
- Add quick reference sections for complex topics
- Link to related docs using relative paths

### Updating This Index

When adding new docs, update:
1. The **Quick Navigation** table at the top
2. The relevant category section
3. The **Documentation Statistics** at the bottom

---

## 📞 Support & Questions

- **Technical Issues:** See [`bugs/readme.md`](bugs/readme.md)
- **Design Questions:** See [`design/design-system.md`](design/design-system.md)
- **Component Help:** See [`guides/components-guide.md`](guides/components-guide.md)
- **General Questions:** Email hello@agentschool.io

---

**Last Updated:** February 9, 2026  
**Documentation Version:** 1.0  
**Project Status:** 85% Complete (Phase 7 - Bug Fixes & Optimization)
