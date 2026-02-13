# Source Tree Analysis

**Generated:** 2026-02-10  
**Project:** Agent School Website  
**Type:** Next.js Monolith Application

---

## Annotated Directory Structure

```
website/
├── 📄 Configuration Files (Root)
│   ├── package.json              # Dependencies & scripts
│   ├── next.config.mjs           # Next.js configuration (Turbopack, WSL optimizations)
│   ├── tsconfig.json             # TypeScript config (strict mode, path aliases @/*)
│   ├── tailwind.config.ts        # Tailwind CSS with Cyber Citrus design system
│   ├── .eslintrc.json            # ESLint (next/core-web-vitals)
│   ├── vercel.json               # Vercel deployment config
│   ├── components.json           # shadcn/ui configuration
│   ├── AGENTS.md                 # AI agent context file (241 lines)
│   └── README.md                 # Project overview
│
├── 📦 src/                       # 🔑 Main source code directory
│   │
│   ├── 📱 app/                   # 🔑 Next.js App Router (file-based routing)
│   │   ├── layout.tsx            # Root layout (fonts, theme provider, metadata)
│   │   ├── page.tsx              # Home page (main landing page)
│   │   ├── globals.css           # Global styles & CSS variables
│   │   ├── favicon.ico           # Site favicon
│   │   ├── demos/                # Demo app routes (mock UIs)
│   │   │   ├── hotel-pms/        # Hotel PMS demo page
│   │   │   ├── crm/              # CRM demo page
│   │   │   └── granola/          # Granola demo page
│   │   └── test-notion/          # Test page for Notion demo
│   │
│   ├── 🧩 components/            # 🔑 React components (79 files)
│   │   │
│   │   ├── ui/                   # UI primitives (14 components)
│   │   │   ├── Button.tsx        # Primary action button (CVA variants)
│   │   │   ├── Card.tsx          # Content container (shadcn/ui)
│   │   │   ├── Badge.tsx         # Label/tag component
│   │   │   ├── CodeBlock.tsx     # Syntax-highlighted code display
│   │   │   ├── Input.tsx         # Form input (Radix UI)
│   │   │   ├── MetricCard.tsx    # Stat display card
│   │   │   ├── ProgressRing.tsx  # Circular progress indicator (SVG)
│   │   │   ├── SectionHeader.tsx # Page section title
│   │   │   ├── TabGroup.tsx      # Custom tabs (Framer Motion)
│   │   │   ├── dialog.tsx        # Modal/dialog (Radix UI)
│   │   │   ├── select.tsx        # Dropdown (Radix UI)
│   │   │   ├── slider.tsx        # Range slider (Radix UI)
│   │   │   ├── table.tsx         # Data table (shadcn/ui)
│   │   │   └── tabs.tsx          # Tab interface (Radix UI)
│   │   │
│   │   ├── animations/           # Framer Motion wrappers (5 components)
│   │   │   ├── ScrollReveal.tsx  # Fade/slide on scroll
│   │   │   ├── WordReveal.tsx    # Staggered word animation
│   │   │   ├── AnimatedCounter.tsx  # Number count-up
│   │   │   ├── StaggeredList.tsx    # List with stagger
│   │   │   └── ParallaxLayer.tsx    # Parallax scroll effect
│   │   │
│   │   ├── interactive/          # Stateful demos (6 components)
│   │   │   ├── ROICalculator.tsx    # Cost/savings calculator (complex state)
│   │   │   ├── CertificationDemo.tsx # Agent certification flow
│   │   │   ├── SkillBuilderDemo.tsx # Skill building interface
│   │   │   ├── SelfHealingDemo.tsx  # Self-healing code demo
│   │   │   ├── ScriptViewerDemo.tsx # Script/code viewer
│   │   │   └── SpeedRaceDemo.tsx    # Speed comparison animation
│   │   │
│   │   ├── sections/             # Page sections (6 components)
│   │   │   ├── Hero.tsx          # Above-the-fold hero
│   │   │   ├── Features.tsx      # Product features grid
│   │   │   ├── UseCases.tsx      # Use case carousel
│   │   │   ├── Journey.tsx       # User journey timeline
│   │   │   ├── Differentiation.tsx  # Competitive comparison
│   │   │   └── CTA.tsx           # Call-to-action section
│   │   │
│   │   ├── layout/               # Persistent layout (2 components)
│   │   │   ├── Navbar.tsx        # Top navigation (responsive, scroll behavior)
│   │   │   └── Footer.tsx        # Site footer (links, social)
│   │   │
│   │   ├── aceternity/           # Aceternity UI components (5 components)
│   │   │   ├── background-beams.tsx    # Animated beam background
│   │   │   ├── timeline.tsx            # Vertical timeline
│   │   │   ├── card-spotlight.tsx      # Spotlight hover card
│   │   │   ├── hero-highlight.tsx      # Text highlight effect
│   │   │   └── text-generate-effect.tsx # Typing effect
│   │   │
│   │   ├── magic/                # Magic UI components (3 components)
│   │   │   ├── hyper-text.tsx    # Glitch text effect
│   │   │   ├── number-ticker.tsx # Animated number counter
│   │   │   └── animated-list.tsx # List with animations
│   │   │
│   │   └── mocks/                # Mock UI demos (16 components + framework)
│   │       │
│   │       ├── _framework/       # Shared mock UI framework
│   │       │   ├── MockUIShell.tsx      # Window chrome (macOS dots)
│   │       │   ├── AgentInterface.tsx   # Chat input/output
│   │       │   ├── MockUIContext.tsx    # Shared state
│   │       │   ├── InteractiveElement.tsx # Clickable elements
│   │       │   └── DataDisplay.tsx      # Tables/grids
│   │       │
│   │       ├── hotel-pms/        # Hotel PMS demo (3 components)
│   │       │   ├── HotelPMSDemo.tsx
│   │       │   ├── ReservationsDashboard.tsx
│   │       │   └── README.md
│   │       │
│   │       ├── crm/              # CRM demo (3 components)
│   │       │   ├── CRMDemo.tsx
│   │       │   ├── SalesPipeline.tsx
│   │       │   └── README.md
│   │       │
│   │       ├── instagram/        # Instagram DM demo (3 components)
│   │       │   ├── InstagramDemo.tsx
│   │       │   ├── DMCategorization.tsx
│   │       │   └── README.md
│   │       │
│   │       ├── notion/           # Notion automation demo (3 components)
│   │       │   ├── NotionDemo.tsx
│   │       │   ├── DatabaseView.tsx
│   │       │   └── README.md
│   │       │
│   │       └── granola/          # Granola meeting notes demo (3 components)
│   │           ├── GranolaDemo.tsx
│   │           ├── TranscriptAnalysis.tsx
│   │           └── README.md
│   │
│   ├── 🎨 animations/            # Lottie JSON animation files
│   │   ├── agent-certification.json
│   │   ├── speed-race.json
│   │   └── [other animation assets]
│   │
│   ├── 📚 lib/                   # Utilities & business logic
│   │   ├── constants.ts          # Static content & data (BOOKING_URL, NAV_ITEMS, etc.)
│   │   ├── utils.ts              # Utility functions (cn helper for Tailwind)
│   │   └── [other utilities]
│   │
│   └── 📝 types/                 # TypeScript type definitions
│       ├── agent.ts              # Agent query types
│       └── mock-ui.ts            # Mock UI types
│
├── 🌐 public/                    # 🔑 Static assets (served at root)
│   ├── logo/                     # Logo files (SVG, PNG variants)
│   ├── people/                   # Team photos
│   ├── background/               # Background images
│   ├── favicon/                  # Favicon files
│   └── archived/                 # Old assets
│
├── 📖 docs/                      # 🔑 Project documentation (extensive existing docs)
│   ├── README.md                 # Documentation index
│   ├── architecture/             # Architecture documentation
│   │   └── mock-ui-framework.md  # Mock UI framework design (1790 lines)
│   ├── design/                   # Design system documentation
│   │   └── design-system.md      # Cyber Citrus design system (1042 lines)
│   ├── planning/                 # Planning documents
│   │   └── redesign-roadmap.md   # 7-phase redesign plan (891 lines)
│   ├── guides/                   # Usage guides
│   │   ├── components-guide.md   # Component library usage
│   │   └── mcp-setup.md          # MCP setup instructions
│   └── bugs/                     # Bug tracking
│       ├── readme.md             # Bug index
│       └── build-timeout-2026-02-09.md  # Build issue documentation
│
├── 📦 _bmad-output/              # BMad workflow outputs (excluded from main docs)
│   └── planning-artifacts/       # Planning documentation
│       └── bmm-workflow-status.yaml  # Workflow tracking
│
└── 🚫 Excluded Directories
    ├── remotion-video/           # Video generation tool (separate project)
    ├── _bmad/                    # BMad framework (tooling, not part of website)
    ├── node_modules/             # Dependencies (not tracked)
    └── .next/                    # Next.js build output (not tracked)
```

---

## Critical Folders Explained

### 🔑 Primary Development Directories

| Directory | Purpose | Files | Priority |
|-----------|---------|-------|----------|
| **src/app/** | Next.js App Router pages & layouts | ~10 | **CRITICAL** - Entry points |
| **src/components/** | All React components | 79 | **CRITICAL** - Main codebase |
| **src/lib/** | Utilities & constants | ~5 | **HIGH** - Shared logic |
| **public/** | Static assets | ~50+ | **MEDIUM** - Images, logos |
| **docs/** | Project documentation | ~15 | **HIGH** - Comprehensive docs |

### 📱 App Router Structure (src/app/)

**File-based routing** powered by Next.js App Router:

- **`layout.tsx`** - Root layout component
  - Loads custom fonts (Fraunces, DM Sans, JetBrains Mono)
  - Wraps app in ThemeProvider for dark mode
  - Sets metadata (title, description)

- **`page.tsx`** - Main landing page
  - Composes all section components (Hero, Features, Journey, etc.)
  - Single-page marketing site

- **`globals.css`** - Global styles
  - CSS variables for theming
  - Base Tailwind imports
  - Custom utility classes

- **`demos/`** - Demo app routes
  - `/demos/hotel-pms` → Hotel PMS mock UI
  - `/demos/crm` → CRM mock UI
  - `/demos/granola` → Granola mock UI
  - Each demo has its own page.tsx

### 🧩 Component Architecture (src/components/)

**Layered component structure:**

1. **UI Primitives** (`ui/`) - Atomic components (Button, Card, Badge)
2. **Animation Wrappers** (`animations/`) - Reusable Framer Motion patterns
3. **Interactive Demos** (`interactive/`) - Complex stateful components
4. **Page Sections** (`sections/`) - Full-width landing page sections
5. **Layout** (`layout/`) - Navbar, Footer
6. **Third-party** (`aceternity/`, `magic/`) - External component libraries
7. **Mock UIs** (`mocks/`) - Interactive product demos with shared framework

**Component Dependencies:**
- Internal imports use `@/*` path alias
- All components import from `@/lib/constants` for content
- UI primitives use CVA for variant management
- Most components use Tailwind CSS for styling

### 📚 Library Structure (src/lib/)

**Key files:**

- **`constants.ts`** - All static content and data
  - Navigation items
  - Feature lists
  - Use cases
  - FAQ content
  - URLs (booking link, social media)
  - API keys, configuration values

- **`utils.ts`** - Utility functions
  - `cn()` - Tailwind className merger (using clsx + tailwind-merge)
  - Other helper functions

**Pattern:** Centralized content management - all copy/data lives in constants.ts

### 🌐 Public Assets (public/)

**Organized by type:**

- **`logo/`** - Brand assets (SVG, PNG variations)
- **`people/`** - Team member photos
- **`background/`** - Hero background images
- **`favicon/`** - Favicon files (ico, png, svg)
- **`archived/`** - Old/unused assets

**Usage:** Next.js serves public/ at root (`/logo/...` in src code)

### 📖 Documentation (docs/)

**Comprehensive existing documentation:**

| File | Purpose | Lines | Status |
|------|---------|-------|--------|
| **design-system.md** | "Cyber Citrus" design system | 1042 | ✅ Complete |
| **redesign-roadmap.md** | 7-phase redesign plan | 891 | ✅ Complete |
| **mock-ui-framework.md** | Mock UI architecture | 1790 | ✅ Complete |
| **components-guide.md** | Component usage guide | ~200 | ✅ Complete |
| **mcp-setup.md** | MCP configuration | ~100 | ✅ Complete |
| **bugs/readme.md** | Bug tracking index | ~50 | ✅ Active |

**Documentation quality:** Excellent - extensive, well-organized, up-to-date

---

## Entry Points

### Application Entry Point
```
src/app/layout.tsx  →  Sets up root layout
    ├─ Loads fonts (Fraunces, DM Sans, JetBrains Mono)
    ├─ Wraps in ThemeProvider (next-themes)
    └─ Sets metadata

src/app/page.tsx  →  Main landing page
    ├─ <Hero />
    ├─ <Features />
    ├─ <UseCases />
    ├─ <Journey />
    ├─ <Differentiation />
    └─ <CTA />
```

### Build Entry Point
```
next.config.mjs  →  Next.js configuration
    ├─ Turbopack enabled (experimental)
    ├─ React Strict Mode on
    └─ Output file tracing optimized for WSL
```

### Styling Entry Point
```
src/app/globals.css  →  Global styles
    ├─ @import tailwind (base, components, utilities)
    ├─ CSS variables (--background, --foreground, etc.)
    └─ Custom utility classes

tailwind.config.ts  →  Tailwind configuration
    ├─ Cyber Citrus color palette
    ├─ Custom fonts (display, body, mono)
    ├─ Custom animations (float, pulse, shimmer)
    └─ Dark mode strategy (class-based)
```

---

## Directory Sizes & File Counts

| Directory | Total Files | LOC Estimate | Notes |
|-----------|-------------|--------------|-------|
| **src/components/** | 79 | ~15,000 | Largest codebase section |
| **src/app/** | ~10 | ~1,000 | App Router pages |
| **src/lib/** | ~5 | ~500 | Utilities & constants |
| **public/** | ~50+ | N/A | Images, logos, assets |
| **docs/** | ~15 | ~5,000 | Comprehensive documentation |
| **TOTAL (excl. node_modules)** | ~160+ | ~21,500+ | Moderate-sized codebase |

---

## Integration Points

**None (internal only).** This is a static marketing website with no external integrations:

- ❌ No API calls
- ❌ No authentication
- ❌ No database
- ❌ No external services (analytics, CRM, etc.)
- ✅ Deployed to Vercel (automatic deployment)

**Future integrations to consider:**
- Analytics (Vercel Analytics, Posthog)
- Email service (for contact form)
- CRM integration (for lead capture)

---

## Multi-Part Structure

**N/A** - This is a monolith application. No multi-part architecture.

However, there are **separate tools in the repository** (excluded from main docs):
- **remotion-video/** - Video generation tool (separate Node.js project)
- **_bmad/** - BMad workflow framework (development tooling)

These are independent tools, not parts of the website architecture.

---

## Development Workflow

### Directory Navigation Patterns

**Component Development:**
```bash
# Add new UI primitive
src/components/ui/NewComponent.tsx

# Add new page section
src/components/sections/NewSection.tsx

# Add new interactive demo
src/components/interactive/NewDemo.tsx
```

**Page Development:**
```bash
# Add new route
src/app/new-route/page.tsx
src/app/new-route/layout.tsx  # Optional layout
```

**Asset Management:**
```bash
# Add new image
public/images/new-image.png

# Reference in code
<Image src="/images/new-image.png" ... />
```

**Documentation:**
```bash
# Add new guide
docs/guides/new-guide.md

# Update architecture
docs/architecture/*.md
```

### Import Path Conventions

All imports use `@/*` path alias:
```typescript
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";
import type { AgentQuery } from "@/types/agent";
```

**No relative imports** - always use `@/*` from project root.

---

## Known Issues & Warnings

⚠️ **CRITICAL: Site doesn't compile** (build errors exist)  
⚠️ **Redesign untested** - NEW design system hasn't been manually tested  
⚠️ **Mock demos WIP** - Status uncertain, may be incomplete  
⚠️ **No tests** - No testing framework configured  

---

## Exclusions from Documentation

The following directories are intentionally excluded from this documentation:

1. **remotion-video/** - Separate video generation tool (has own README)
2. **_bmad/** - BMad framework tooling (not part of website)
3. **node_modules/** - Dependencies (standard exclusion)
4. **.next/** - Build artifacts (generated, not tracked)
5. **.git/** - Version control (standard exclusion)

---

## Next Steps for Developers

1. **First-time setup:** Read `docs/design-system.md` for design tokens
2. **Component development:** Reference `docs/components-guide.md`
3. **Architecture understanding:** Read `docs/architecture/mock-ui-framework.md`
4. **Planning context:** Check `docs/planning/redesign-roadmap.md`
5. **Fix build:** Resolve compilation errors (see `docs/bugs/`)
