# Development Guide

**Generated:** 2026-02-10  
**Project:** Agent School Website  
**Framework:** Next.js 16.1.0

---

## Prerequisites

### Required Software

| Software | Version | Purpose | Installation |
|----------|---------|---------|--------------|
| **Node.js** | v18+ (recommended) | JavaScript runtime | [nodejs.org](https://nodejs.org/) |
| **npm** | v9+ (comes with Node) | Package manager | Included with Node.js |
| **Git** | Latest | Version control | [git-scm.com](https://git-scm.com/) |

**Operating System:** 
- ✅ macOS
- ✅ Linux
- ✅ Windows (WSL recommended for better performance)

**Note:** Project includes WSL-specific optimizations in `next.config.mjs`

---

## Initial Setup

### 1. Clone Repository
```bash
git clone [repository-url]
cd website
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- Production dependencies (16 packages)
- Development dependencies (10 packages)
- Total: ~26 direct dependencies + their transitive deps

**Expected install time:** 1-3 minutes (depending on network speed)

### 3. Environment Setup

**No environment variables required** for local development.

This is a static marketing site with no API keys or secrets. If you need to add environment variables in the future:

```bash
# Create .env.local (gitignored by default)
touch .env.local
```

**Example .env.local (if needed):**
```env
# Analytics (example)
NEXT_PUBLIC_ANALYTICS_ID=your-id

# Custom configuration
NEXT_PUBLIC_API_URL=https://example.com/api
```

---

## Development Commands

### Start Development Server
```bash
npm run dev
```

- **URL:** http://localhost:3000
- **Features:**
  - Hot Module Replacement (HMR) with Turbopack
  - Fast Refresh for instant updates
  - Error overlay for debugging
- **Note:** Uses Turbopack by default with persistent caching disabled (see `NEXT_TURBOPACK_PERSISTENT_CACHING=0`)

**Alternative dev commands:**
```bash
# Dev with Turbopack (default)
npm run dev:turbo

# Dev with Webpack (legacy)
npm run dev:webpack

# Dev with clean cache
npm run dev:clean
```

### Build for Production
```bash
npm run build
```

- **Output:** `.next/` directory
- **Process:**
  1. Type-checking (TypeScript)
  2. Linting (ESLint)
  3. Compiling pages and components
  4. Optimizing bundles
  5. Generating static pages
- **Expected time:** 30-60 seconds

**⚠️ Known Issue:** Site currently doesn't compile (build errors exist)

### Start Production Server (Local)
```bash
npm run start
```

- **URL:** http://localhost:3000
- **Purpose:** Test production build locally
- **Note:** Must run `npm run build` first

### Linting
```bash
npm run lint
```

- **Rules:** `next/core-web-vitals` (Next.js recommended)
- **Checks:**
  - React best practices
  - Next.js-specific rules
  - Core Web Vitals optimizations

**⚠️ Note:** No Prettier or additional linting rules configured

### Type Checking
```bash
# Manual type check (no script alias)
npx tsc --noEmit
```

- **Mode:** Check only (no JavaScript output)
- **Config:** Strict mode enabled in `tsconfig.json`

### Clean Cache
```bash
npm run clean:cache
```

- **Purpose:** Delete `.next/` build cache
- **Use case:** Fix build issues or stale cache problems

---

## Development Workflow

### Typical Development Cycle

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Make changes:**
   - Edit files in `src/`
   - See changes instantly with HMR

3. **Check types periodically:**
   ```bash
   npx tsc --noEmit
   ```

4. **Lint before commit:**
   ```bash
   npm run lint
   ```

5. **Test build locally:**
   ```bash
   npm run build
   npm run start
   ```

### Adding New Features

**New Page:**
```bash
# Create new route
touch src/app/new-page/page.tsx

# Optional: Add layout
touch src/app/new-page/layout.tsx
```

**New Component:**
```bash
# UI primitive
touch src/components/ui/NewComponent.tsx

# Page section
touch src/components/sections/NewSection.tsx

# Interactive demo
touch src/components/interactive/NewDemo.tsx
```

**New Content/Data:**
```typescript
// Add to src/lib/constants.ts
export const NEW_DATA = [ /* ... */ ];
```

**New Types:**
```typescript
// Add to src/types/
// e.g., src/types/new-feature.ts
export interface NewFeature {
  // ...
}
```

---

## Project Structure for Developers

### Path Aliases
Use `@/*` for all imports:
```typescript
// ✅ Good
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";

// ❌ Avoid relative paths
import { Button } from "../../components/ui/Button";
```

### Component Creation Pattern

**UI Primitive Example:**
```typescript
// src/components/ui/NewButton.tsx
"use client";  // If using hooks or Framer Motion

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "base-styles...",
  {
    variants: {
      variant: {
        primary: "...",
        secondary: "...",
      },
      size: {
        sm: "...",
        lg: "...",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface NewButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function NewButton({ 
  className, 
  variant, 
  size, 
  ...props 
}: NewButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

### Animation Wrapper Pattern
```typescript
// src/components/animations/NewAnimation.tsx
"use client";

import { motion } from "framer-motion";

export function NewAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Testing

**⚠️ No testing framework configured.**

### Recommended Setup (Future)

1. **Unit/Integration Tests:**
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```

2. **E2E Tests:**
   ```bash
   npm install --save-dev @playwright/test
   ```

3. **Visual Regression:**
   - Chromatic or Percy

### Manual Testing Checklist

- [ ] Dev server runs without errors
- [ ] All pages load correctly
- [ ] Components render as expected
- [ ] Animations work smoothly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark mode toggles properly
- [ ] Build succeeds without errors
- [ ] Production build runs correctly

---

## Common Development Tasks

### Adding a shadcn/ui Component
```bash
# Example: Add new Radix UI component via shadcn
npx shadcn@latest add [component-name]

# This will:
# 1. Download component to src/components/ui/
# 2. Update components.json
# 3. Install required dependencies
```

### Updating Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all to latest (use with caution)
npm update

# Update specific package
npm install [package]@latest
```

### Debugging Build Issues

**If build fails:**

1. **Clean cache:**
   ```bash
   npm run clean:cache
   ```

2. **Check TypeScript errors:**
   ```bash
   npx tsc --noEmit
   ```

3. **Check ESLint errors:**
   ```bash
   npm run lint
   ```

4. **Delete node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

5. **Check for WSL-specific issues** (if on Windows):
   - Verify `next.config.mjs` has `outputFileTracingRoot: process.cwd()`
   - Ensure project is in WSL filesystem, not `/mnt/c/`

---

## Performance Optimization

### Development Performance

**Turbopack (Default):**
- Fast HMR (~200ms updates)
- Persistent caching disabled for stability

**Webpack (Fallback):**
```bash
npm run dev:webpack
```

### Build Performance

**Current config optimizations:**
- `webpackBuildWorker: true` - Parallel compilation
- `outputFileTracingRoot` - Limit file tracing scope
- Type-checking enabled (catches errors early)

**Potential improvements:**
- Enable `swcMinify` (already default in Next.js 13+)
- Use `modularizeImports` for large libraries
- Implement dynamic imports for heavy components

---

## Code Quality

### TypeScript

**Strict mode enabled:**
- No implicit any
- Strict null checks
- Strict function types
- Strict bind/call/apply

**Path aliases:**
- `@/*` → `./src/*`

### ESLint

**Rules:** `next/core-web-vitals`

**Included checks:**
- React Hooks rules
- Next.js specific warnings
- Core Web Vitals optimizations
- Accessibility warnings

### Code Style

**Conventions** (not enforced, but followed):
- 2-space indentation
- Double quotes for strings
- Semicolons
- Trailing commas
- Named exports (except page.tsx/layout.tsx)

**Recommended:** Add Prettier for consistent formatting

---

## Troubleshooting

### Common Issues

**1. "Module not found" errors**
- Check import paths use `@/*` alias
- Verify file extension (.tsx vs .ts)
- Run `npm install` to ensure deps are installed

**2. Turbopack errors**
- Try Webpack: `npm run dev:webpack`
- Clear cache: `npm run clean:cache`
- Update Next.js: `npm install next@latest`

**3. Type errors**
- Run `npx tsc --noEmit` to see full error list
- Check `tsconfig.json` for strict mode settings
- Verify all types are properly imported

**4. Styling doesn't apply**
- Verify Tailwind class names are correct
- Check `tailwind.config.ts` for custom classes
- Ensure component has `className` prop forwarding

**5. Build timeout (WSL)**
- See `docs/bugs/build-timeout-2026-02-09.md`
- Verify `next.config.mjs` has WSL optimizations
- Move project to WSL filesystem (not /mnt/c/)

---

## Git Workflow

### Branch Strategy

**Recommended:**
```bash
# Feature branch
git checkout -b feature/new-feature

# Bug fix
git checkout -b fix/bug-description

# Refactor
git checkout -b refactor/description
```

### Commit Messages

**Convention** (suggested):
```bash
# Format: <type>: <description>

# Examples:
git commit -m "feat: add new ROI calculator component"
git commit -m "fix: resolve TypeScript error in Button"
git commit -m "refactor: extract constants from Hero section"
git commit -m "docs: update component guide"
git commit -m "style: format code with Prettier"
git commit -m "perf: optimize image loading"
```

### Pre-commit Checklist

- [ ] Run `npm run lint` (no errors)
- [ ] Run `npx tsc --noEmit` (no type errors)
- [ ] Test locally (`npm run dev`)
- [ ] Check responsive design
- [ ] Review git diff
- [ ] Write descriptive commit message

---

## Environment-Specific Notes

### macOS
- No special setup required
- Use Terminal or iTerm2

### Linux
- No special setup required
- Use any shell (bash, zsh, fish)

### Windows (WSL)
- **Recommended:** Develop inside WSL2
- **Config:** WSL optimizations included in `next.config.mjs`
- **Avoid:** Running from `/mnt/c/` (slow file I/O)
- **Best Practice:** Clone repo to `~/projects/` in WSL

---

## Resources

### Internal Documentation
- **Design System:** `docs/design/design-system.md`
- **Component Guide:** `docs/guides/components-guide.md`
- **Architecture:** `docs/architecture/mock-ui-framework.md`
- **Redesign Plan:** `docs/planning/redesign-roadmap.md`

### External Resources
- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Radix UI:** https://www.radix-ui.com/primitives/docs/overview/introduction
- **shadcn/ui:** https://ui.shadcn.com/

---

## Getting Help

### Known Issues
- Check `docs/bugs/` for documented issues
- See `docs/bugs/build-timeout-2026-02-09.md` for build problems

### Questions
- Read `AGENTS.md` for AI agent context
- Check existing documentation in `docs/`
- Review component code for examples

---

## Next Steps

1. **First time?** Read `docs/design-system.md` to understand design tokens
2. **Building features?** Reference `docs/components-guide.md` for patterns
3. **Need architecture context?** Read `docs/architecture/mock-ui-framework.md`
4. **Planning work?** Check `docs/planning/redesign-roadmap.md`

**⚠️ Critical:** Fix compilation errors before adding new features (see `docs/bugs/`)
