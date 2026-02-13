# Documentation Structure — Original vs BMAD Redesign

> **Purpose:** Track which docs belong to the **original website** (cream/orange) vs the **BMAD complete redesign** (Cyber Citrus).

**Last Updated:** 2026-02-12

---

## Quick Reference

| Era | Color Palette | Aesthetic | Status |
|-----|---------------|-----------|--------|
| **Original** | Navy, Amber, Cream, Charcoal | Academic, warm, cream backgrounds | Deprecated |
| **BMAD Redesign** | Teal, Orange, Slate (Cyber Citrus) | Futuristic, visionary, gradient-heavy | 🚀 In Progress |

---

## 📁 Original Website (Cream/Orange)

**Era:** Pre-redesign  
**Palette:** Navy, Amber, Cream, Charcoal  
**Status:** Deprecated — kept for reference during migration

| Document | Path | Purpose |
|----------|------|---------|
| Legacy Design Reference | [legacy/legacy-design-reference.md](legacy/legacy-design-reference.md) | Navy/amber/cream palette, typography, conventions |
| Legacy Folder README | [legacy/README.md](legacy/README.md) | Explains original docs and deprecated design |

---

## 📁 BMAD Complete Redesign (Cyber Citrus)

**Era:** 2026 redesign  
**Palette:** Teal, Orange, Slate  
**Status:** Active — current design system and implementation

### Brownfield (BMAD Project Scan Output)

| Document | Path | Purpose |
|----------|------|---------|
| Redesign Roadmap | [brownfield/redesign-roadmap.md](brownfield/redesign-roadmap.md) | 7-phase redesign plan (28-32 days) |
| Source Tree Analysis | [brownfield/source-tree-analysis.md](brownfield/source-tree-analysis.md) | Annotated directory structure |
| Technology Stack | [brownfield/technology-stack.md](brownfield/technology-stack.md) | Tech stack breakdown |
| Project Overview | [brownfield/roadmap/project-overview.md](brownfield/roadmap/project-overview.md) | Executive summary |
| Session History | [brownfield/roadmap/session-history.md](brownfield/roadmap/session-history.md) | Development session log |

### Design (New Design System)

| Document | Path | Purpose |
|----------|------|---------|
| Design System Proposal | [design/design-system-new-purposal.md](design/design-system-new-purposal.md) | Cyber Citrus tokens, typography, dark mode |
| Components Guide | [design/components-guide.md](design/components-guide.md) | shadcn/ui, Aceternity UI, Magic UI usage |
| Mock UI Framework | [design/mock-ui-framework.md](design/mock-ui-framework.md) | Architecture for 5 interactive demo UIs |
| Component Inventory | [design/component-inventory.md](design/component-inventory.md) | 79 components cataloged |

### Root-Level (Redesign-Aware)

| Document | Path | Purpose |
|----------|------|---------|
| Architecture | [architecture.md](architecture.md) | System architecture (describes current Cyber Citrus stack) |

---

## 📁 Shared / Neutral (Cross-Era)

These docs apply to both original and redesign work.

| Document | Path | Purpose |
|----------|------|---------|
| Development Guide | [dev/development-guide.md](dev/development-guide.md) | Local setup, commands, workflow |
| Deployment Guide | [dev/deployment-guide.md](dev/deployment-guide.md) | Vercel deployment |
| MCP Setup | [dev/mcp-setup.md](dev/mcp-setup.md) | Model Context Protocol config |
| Product Brief | [planning/product-brief.md](planning/product-brief.md) | Product vision, problem statement |
| Sitemap | [sitemap.md](sitemap.md) | Site structure and URLs |
| Bug Index | [bugs/readme.md](bugs/readme.md) | Known issues overview |
| Bug Reports | [bugs/*.md](bugs/) | Individual bug reports |

---

## 📁 Index & Navigation

| Document | Path | Purpose |
|----------|------|---------|
| Documentation README | [README.md](README.md) | Docs hub, quick navigation |
| Master Index | [index.md](index.md) | Comprehensive project index |
| **This File** | [DOCS_STRUCTURE.md](DOCS_STRUCTURE.md) | Original vs BMAD Redesign tracking |

---

## File Tree by Era

```
docs/
├── DOCS_STRUCTURE.md          ← This file (tracking)
├── README.md                  ← Hub (links to both eras)
├── index.md                   ← Master index
├── architecture.md            ← BMAD Redesign
├── sitemap.md                 ← Shared
│
├── legacy/                    ← ORIGINAL (cream/orange)
│   ├── README.md
│   └── legacy-design-reference.md
│
├── brownfield/                ← BMAD REDESIGN
│   ├── redesign-roadmap.md
│   ├── source-tree-analysis.md
│   ├── technology-stack.md
│   └── roadmap/
│       ├── project-overview.md
│       └── session-history.md
│
├── design/                    ← BMAD REDESIGN
│   ├── design-system-new-purposal.md
│   ├── components-guide.md
│   ├── mock-ui-framework.md
│   └── component-inventory.md
│
├── dev/                       ← SHARED
├── planning/                  ← SHARED
└── bugs/                      ← SHARED
```

---

## When to Add New Docs

- **Original/Legacy:** Any doc that describes the pre-redesign navy/amber/cream state → `docs/legacy/`
- **BMAD Redesign:** Any doc about Cyber Citrus, mock UIs, or redesign implementation → `docs/brownfield/` or `docs/design/`
- **Shared:** Dev ops, bugs, product strategy → `docs/dev/`, `docs/bugs/`, `docs/planning/`

**Update this file** when adding or moving docs.
