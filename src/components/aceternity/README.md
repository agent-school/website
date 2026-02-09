# Aceternity UI Components

This directory contains components copied from [Aceternity UI](https://ui.aceternity.com) for the Agent School website redesign.

## Components

### 1. BackgroundBeams
**File:** `BackgroundBeams.tsx`  
**Status:** ✅ Ready to use  
**Dependencies:** framer-motion (already installed)

Animated background beams that follow SVG paths. Great for hero sections.

**Usage:**
```tsx
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";

<div className="relative h-screen">
  <BackgroundBeams className="z-0" />
  <div className="relative z-10">Your content here</div>
</div>
```

**Props:**
- `className?: string` - Additional CSS classes

---

### 2. Timeline
**File:** `Timeline.tsx`  
**Status:** ✅ Ready to use  
**Dependencies:** framer-motion (already installed)

Vertical timeline with scroll-based animations and sticky headers.

**Usage:**
```tsx
import { Timeline } from "@/components/aceternity/Timeline";

const data = [
  {
    title: "2024",
    content: <div>Your content here</div>,
  },
  {
    title: "2023",
    content: <div>More content</div>,
  },
];

<Timeline data={data} />
```

**Props:**
- `data: TimelineEntry[]` - Array of timeline entries
  - `title: string` - Timeline entry title
  - `content: React.ReactNode` - Timeline entry content

---

### 3. TextGenerateEffect
**File:** `TextGenerateEffect.tsx`  
**Status:** ✅ Ready to use  
**Dependencies:** framer-motion (already installed)

Animated text that fades in word-by-word with optional blur effect.

**Usage:**
```tsx
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";

<TextGenerateEffect 
  words="Turn Human Knowledge Into AI That Never Forgets"
  className="text-4xl font-display"
  filter={true}
  duration={0.5}
/>
```

**Props:**
- `words: string` - Text to animate (will be split by spaces)
- `className?: string` - Additional CSS classes
- `filter?: boolean` - Apply blur filter (default: true)
- `duration?: number` - Animation duration in seconds (default: 0.5)

---

### 4. CardSpotlight
**File:** `CardSpotlight.tsx`  
**Status:** ⚠️ Partial (spotlight works, canvas effect requires deps)  
**Dependencies:** 
- framer-motion (already installed)
- @react-three/fiber (not installed) - optional for CanvasRevealEffect
- three (not installed) - optional for CanvasRevealEffect

Card component with mouse-tracking spotlight effect.

**Basic Usage (works now):**
```tsx
import { CardSpotlight } from "@/components/aceternity/CardSpotlight";

<CardSpotlight 
  radius={350}
  color="#262626"
  className="p-8"
>
  <h3>Your card content</h3>
  <p>More content</p>
</CardSpotlight>
```

**Props:**
- `children: React.ReactNode` - Card content
- `radius?: number` - Spotlight radius in pixels (default: 350)
- `color?: string` - Spotlight background color (default: "#262626")
- `className?: string` - Additional CSS classes
- `...props` - All other HTML div attributes

**To enable CanvasRevealEffect:**
```bash
npm install @react-three/fiber three
npm install --save-dev @types/three
```

Then uncomment the CanvasRevealEffect code in `CardSpotlight.tsx` and `CanvasRevealEffect.tsx`.

---

### 5. CanvasRevealEffect (Helper)
**File:** `CanvasRevealEffect.tsx`  
**Status:** ⚠️ Requires dependencies  
**Dependencies:** @react-three/fiber, three (not installed)

WebGL-based animated dot matrix effect (used by CardSpotlight).

Currently shows a placeholder. Install dependencies and uncomment the code to enable.

---

## Code Adjustments Made

All components have been adapted from Aceternity UI with these modifications:

1. **Import changes:** Changed `motion/react` → `framer-motion` (project uses framer-motion v12)
2. **Path aliases:** All imports use `@/` alias (matches project convention)
3. **Code style:** 
   - 2-space indentation
   - Double quotes
   - Named exports only
4. **TypeScript:** All components are fully typed
5. **"use client" directive:** Added where needed for React 19 compatibility

---

## Integration with Design System

These components will be used in the redesign:

- **BackgroundBeams** → Hero section background
- **Timeline** → Journey section (agent learning progression)
- **TextGenerateEffect** → Hero headline animation
- **CardSpotlight** → Feature cards with interactive spotlight

Refer to `DESIGN_SYSTEM.md` for color palette integration with these components.

---

## Notes

- All components support dark mode via Tailwind's `dark:` classes
- Components use Framer Motion 12 for animations
- No additional configuration needed in `tailwind.config.ts`
- CardSpotlight's canvas effect is optional and can be enabled later if needed

---

## Source

Components sourced from [Aceternity UI](https://ui.aceternity.com) on Feb 9, 2026.

Author: Manu Arora ([@mannupaaji](https://twitter.com/mannupaaji))
