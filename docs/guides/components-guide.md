# Component Library Guide

> Comprehensive documentation for the Agent School component library architecture and usage patterns.

## Component Strategy

This project uses a **three-layer component approach** combining industry-standard libraries with custom implementations:

```
Layer 1: shadcn/ui          → Base primitives (Button, Input, Card, etc.)
Layer 2: Aceternity/Magic   → Advanced animations & effects
Layer 3: Custom             → Domain-specific components & demos
```

**Design Philosophy:**
- Start with shadcn/ui for foundational components (free, MIT licensed)
- Add Aceternity UI for sophisticated animations (free tier components)
- Use Magic UI for text effects and micro-interactions (free, MIT licensed)
- Build custom components only when existing solutions don't fit

---

## Layer 1: shadcn/ui Components

[shadcn/ui](https://ui.shadcn.com) provides unstyled, accessible components that you copy into your project. **Not a package dependency** — you own the code.

### Installation Setup

```bash
# Initialize shadcn/ui in your project
npx shadcn@latest init

# Configure when prompted:
# - TypeScript: Yes
# - Style: Default
# - Tailwind base color: Slate
# - CSS variables: Yes
# - Component directory: src/components/ui
# - Path alias: @/
```

This creates:
- `components.json` — shadcn config
- `lib/utils.ts` — `cn()` utility for className merging
- Updated `tailwind.config.ts` with CSS variables

### Core Components

#### Button

```bash
npx shadcn@latest add button
```

**Basic Usage:**
```tsx
import { Button } from "@/components/ui/Button";

<Button variant="primary" size="md">
  Click Me
</Button>

<Button variant="secondary" size="lg" href="/demo">
  View Demo
</Button>

<Button variant="outline" disabled>
  Disabled
</Button>
```

**Available Variants:**
- `primary` — Navy background, white text (main CTA)
- `secondary` — Amber background, navy text (accent CTA)
- `ghost` — Transparent, hover background
- `outline` — Transparent with border, hover accent

**Features:**
- Framer Motion hover/tap animations (`whileHover={{ y: -2 }}`)
- Automatic `<a>` rendering when `href` provided
- External link detection (adds `target="_blank"`)

---

#### Card

```bash
npx shadcn@latest add card
```

**Basic Usage:**
```tsx
import { Card, GlassCard } from "@/components/ui/Card";

// Standard card
<Card padding="md" hover={true}>
  <h3 className="font-display text-heading-md text-navy-800">
    Feature Title
  </h3>
  <p className="text-body-md text-charcoal-500 mt-2">
    Description text
  </p>
</Card>

// Glass morphism variant
<GlassCard padding="lg">
  <div>Frosted glass aesthetic</div>
</GlassCard>
```

**Props:**
- `padding`: `"sm"` | `"md"` | `"lg"` (default: `"md"`)
- `hover`: `boolean` — Enable lift-on-hover effect (default: `true`)
- `className`: Additional Tailwind classes

**When to use:**
- Standard `Card` for feature cards, content blocks
- `GlassCard` for overlays, hero elements, floating panels

---

#### Input

```bash
npx shadcn@latest add input
```

**Basic Usage:**
```tsx
import { Input } from "@/components/ui/Input";

<Input
  type="email"
  placeholder="hello@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

**Common Patterns:**
```tsx
// With label
<div className="space-y-2">
  <label className="text-body-sm font-semibold text-navy-800">
    Email Address
  </label>
  <Input type="email" />
</div>

// With validation state
<Input
  className={cn(
    error && "border-red-500 focus:ring-red-500"
  )}
/>
```

---

#### Select

```bash
npx shadcn@latest add select
```

**Basic Usage:**
```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="simple">Simple</SelectItem>
    <SelectItem value="multi_step">Multi-Step</SelectItem>
    <SelectItem value="complex">Complex</SelectItem>
  </SelectContent>
</Select>
```

---

#### Tabs

```bash
npx shadcn@latest add tabs
```

**Basic Usage:**
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="demo">Demo</TabsTrigger>
    <TabsTrigger value="pricing">Pricing</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    {/* Content */}
  </TabsContent>
  <TabsContent value="demo">
    {/* Content */}
  </TabsContent>
</Tabs>
```

**Custom Tab Indicator (Project Pattern):**
```tsx
"use client";

import { motion } from "framer-motion";

const tabs = ["Overview", "Features", "Pricing"];
const [activeTab, setActiveTab] = useState("Overview");

<div className="flex gap-2 bg-cream-100 p-1 rounded-xl">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className="relative px-4 py-2 text-body-sm font-medium transition-colors"
    >
      {activeTab === tab && (
        <motion.div
          layoutId="tab-indicator"
          className="absolute inset-0 bg-white rounded-lg shadow-soft"
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
      )}
      <span className="relative z-10">{tab}</span>
    </button>
  ))}
</div>
```

---

#### Badge

```bash
npx shadcn@latest add badge
```

**Basic Usage:**
```tsx
import { Badge } from "@/components/ui/Badge";

<Badge variant="default">New</Badge>
<Badge variant="success">Certified</Badge>
<Badge variant="warning">Beta</Badge>
```

**Custom Variants (in this project):**
```tsx
<Badge className="bg-amber-100 text-amber-700 border-amber-200">
  AI-Powered
</Badge>
```

---

#### Slider

```bash
npx shadcn@latest add slider
```

**Basic Usage:**
```tsx
import { Slider } from "@/components/ui/Slider";

<Slider
  min={1}
  max={100}
  step={1}
  value={[value]}
  onValueChange={([newValue]) => setValue(newValue)}
/>
```

**Project Pattern (ROI Calculator):**
```tsx
<div className="space-y-2">
  <label className="text-body-sm font-semibold text-navy-800 flex justify-between">
    <span>Frequency</span>
    <span className="font-mono text-amber-600">{value}/week</span>
  </label>
  <input
    type="range"
    min={1}
    max={500}
    value={value}
    onChange={(e) => setValue(Number(e.target.value))}
    className="w-full"
  />
  <div className="flex justify-between text-caption text-charcoal-400">
    <span>1/wk</span>
    <span>500/wk</span>
  </div>
</div>
```

---

#### Table

```bash
npx shadcn@latest add table
```

**Basic Usage:**
```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Metric</TableHead>
      <TableHead>Today</TableHead>
      <TableHead>Agent School</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Time / task</TableCell>
      <TableCell className="font-mono">10 min</TableCell>
      <TableCell className="font-mono text-green-600">30s</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

#### Dialog (Modal)

```bash
npx shadcn@latest add dialog
```

**Basic Usage:**
```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";

const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <div className="flex gap-3 mt-4">
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="secondary" onClick={handleConfirm}>
        Confirm
      </Button>
    </div>
  </DialogContent>
</Dialog>
```

---

### Other Useful shadcn Components

```bash
# Form elements
npx shadcn@latest add label
npx shadcn@latest add textarea
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch

# Feedback
npx shadcn@latest add toast
npx shadcn@latest add alert
npx shadcn@latest add progress

# Navigation
npx shadcn@latest add dropdown-menu
npx shadcn@latest add popover
npx shadcn@latest add tooltip

# Layout
npx shadcn@latest add separator
npx shadcn@latest add scroll-area
npx shadcn@latest add accordion
```

---

## Layer 2: Aceternity UI Components

[Aceternity UI](https://ui.aceternity.com) provides advanced animation components. **Free tier components** are copy-paste (no attribution required).

### Free Tier Components We Use

#### BackgroundBeams

**Purpose:** Animated gradient beams for hero backgrounds

**How to Install:**
1. Visit: https://ui.aceternity.com/components/background-beams
2. Copy the component code into `src/components/animations/BackgroundBeams.tsx`
3. Copy required dependencies

**Usage:**
```tsx
import { BackgroundBeams } from "@/components/animations/BackgroundBeams";

<section className="relative py-24 bg-navy-900 overflow-hidden">
  <BackgroundBeams />
  <div className="relative z-10">
    <h1 className="font-display text-display-lg text-white">
      AI Agents, Certified
    </h1>
  </div>
</section>
```

**Customization:**
```tsx
// Adjust beam colors in component file
const beamColors = [
  "rgba(254, 159, 77, 0.3)", // amber
  "rgba(27, 41, 81, 0.4)",   // navy
];
```

---

#### Timeline (Vertical)

**Purpose:** Visual journey/progress indicator

**How to Install:**
1. Visit: https://ui.aceternity.com/components/timeline
2. Copy component code into `src/components/animations/Timeline.tsx`

**Usage:**
```tsx
import { Timeline } from "@/components/animations/Timeline";

const steps = [
  {
    title: "Setup",
    description: "Define your workflow in plain English",
    icon: <FileText size={20} />,
  },
  {
    title: "Training",
    description: "Agent learns from real examples",
    icon: <Brain size={20} />,
  },
  {
    title: "Certification",
    description: "Agent passes reliability tests",
    icon: <ShieldCheck size={20} />,
  },
];

<Timeline data={steps} />
```

---

#### CardSpotlight

**Purpose:** Interactive spotlight effect on hover

**How to Install:**
1. Visit: https://ui.aceternity.com/components/card-spotlight
2. Copy into `src/components/animations/CardSpotlight.tsx`

**Usage:**
```tsx
import { CardSpotlight } from "@/components/animations/CardSpotlight";

<CardSpotlight className="p-6">
  <h3 className="font-display text-heading-md">Feature</h3>
  <p className="text-body-md text-charcoal-500 mt-2">
    Description
  </p>
</CardSpotlight>
```

---

#### TextGenerateEffect

**Purpose:** Word-by-word text reveal animation

**How to Install:**
1. Visit: https://ui.aceternity.com/components/text-generate-effect
2. Copy into `src/components/animations/TextGenerateEffect.tsx`

**Usage:**
```tsx
import { TextGenerateEffect } from "@/components/animations/TextGenerateEffect";

<TextGenerateEffect
  words="Train AI agents to automate your workflows"
  className="font-display text-display-lg text-navy-800"
/>
```

---

### Aceternity Copy-Paste Workflow

1. **Browse free components:** https://ui.aceternity.com/components
2. **Copy component code** (click "Copy" button)
3. **Create file in `src/components/animations/`**
4. **Install dependencies** (usually just Framer Motion — already in project)
5. **Customize colors** to match brand palette (navy/amber/cream)
6. **Use in sections**

---

## Layer 3: Magic UI Components

[Magic UI](https://magicui.design) provides MIT-licensed text effects and micro-interactions.

### Components We Use

#### HyperText

**Purpose:** Scramble/decode text animation

**How to Install:**
1. Visit: https://magicui.design/docs/components/hyper-text
2. Copy into `src/components/animations/HyperText.tsx`

**Usage:**
```tsx
import { HyperText } from "@/components/animations/HyperText";

<HyperText
  text="CERTIFIED"
  className="font-mono text-caption uppercase tracking-widest text-amber-500"
/>
```

---

#### NumberTicker

**Purpose:** Smooth animated number counting

**How to Install:**
1. Visit: https://magicui.design/docs/components/number-ticker
2. Copy into `src/components/animations/NumberTicker.tsx`

**Usage:**
```tsx
import { NumberTicker } from "@/components/animations/NumberTicker";

<div className="font-display text-display-sm text-navy-800">
  $<NumberTicker value={45000} />
</div>
```

**Project Implementation (AnimatedCounter.tsx):**
```tsx
"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

export function SmoothNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    });
    return controls.stop;
  }, [value, motionValue]);

  return (
    <motion.span>
      {prefix}
      {Math.round(motionValue.get())}
      {suffix}
    </motion.span>
  );
}
```

---

#### AnimatedList

**Purpose:** Staggered list item animations

**How to Install:**
1. Visit: https://magicui.design/docs/components/animated-list
2. Copy into `src/components/animations/AnimatedList.tsx`

**Usage:**
```tsx
import { AnimatedList } from "@/components/animations/AnimatedList";

const items = [
  "Self-healing code execution",
  "Multi-framework support",
  "Human-in-the-loop fallback",
];

<AnimatedList>
  {items.map((item) => (
    <li key={item}>{item}</li>
  ))}
</AnimatedList>
```

**Project Implementation (StaggeredList.tsx):**
```tsx
"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function StaggeredList({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Layer 4: Custom Components

Components built specifically for Agent School that don't fit existing libraries.

### Animation Wrappers

Located in: `src/components/animations/`

#### ScrollReveal

**Purpose:** Fade-in animations on scroll

```tsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

<ScrollReveal direction="up" delay={0.2}>
  <div>Content that animates in on scroll</div>
</ScrollReveal>
```

**Props:**
- `direction`: `"up"` | `"down"` | `"left"` | `"right"`
- `delay`: Number (seconds)
- `className`: Additional classes

---

#### WordReveal

**Purpose:** Word-by-word reveal animation (custom implementation)

```tsx
import { WordReveal } from "@/components/animations/WordReveal";

<WordReveal
  text="Build. Test. Deploy. Scale."
  className="font-display text-display-md"
/>
```

---

#### ParallaxLayer

**Purpose:** Parallax scroll effects

```tsx
import { ParallaxLayer } from "@/components/animations/ParallaxLayer";

<ParallaxLayer offset={-50}>
  <div>Moves slower than page scroll</div>
</ParallaxLayer>
```

---

### Interactive Demos

Located in: `src/components/interactive/`

#### ROICalculator

**Purpose:** Full-featured ROI calculator with sliders and live results

```tsx
import { ROICalculator } from "@/components/interactive/ROICalculator";

<section className="py-24">
  <ROICalculator />
</section>
```

**Features:**
- Multi-select complexity
- Range sliders (frequency, employees, hourly rate)
- Live calculation with animated numbers
- Comparison table
- CTA button to booking

**Business Logic:** See `src/lib/calculator.ts`

---

#### CertificationDemo

**Purpose:** Interactive certification flow visualization

```tsx
import { CertificationDemo } from "@/components/interactive/CertificationDemo";

<CertificationDemo />
```

---

#### SelfHealingDemo

**Purpose:** Animated demo of error recovery

```tsx
import { SelfHealingDemo } from "@/components/interactive/SelfHealingDemo";

<SelfHealingDemo />
```

---

### UI Primitives

Located in: `src/components/ui/`

#### TabGroup

**Purpose:** Custom tab component with sliding indicator

```tsx
import { TabGroup } from "@/components/ui/TabGroup";

const tabs = [
  { id: "setup", label: "Setup", icon: <FileText size={16} /> },
  { id: "train", label: "Train", icon: <Brain size={16} /> },
];

<TabGroup
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
/>
```

---

#### CodeBlock

**Purpose:** Syntax-highlighted code display

```tsx
import { CodeBlock } from "@/components/ui/CodeBlock";

<CodeBlock
  language="python"
  code={`
def automate_workflow():
    agent = AgentSchool.train("invoice_processing")
    result = agent.execute()
    return result
  `}
/>
```

---

#### MetricCard

**Purpose:** Data visualization cards (used in ROI results)

```tsx
import { MetricCard } from "@/components/ui/MetricCard";

<MetricCard
  icon={<DollarSign size={18} />}
  value="$45,000"
  label="Yearly Savings"
  color="green"
/>
```

---

#### ProgressRing

**Purpose:** Circular progress indicator

```tsx
import { ProgressRing } from "@/components/ui/ProgressRing";

<ProgressRing
  progress={75}
  size={120}
  strokeWidth={8}
  color="amber"
/>
```

---

#### SectionHeader

**Purpose:** Consistent section heading format

```tsx
import { SectionHeader } from "@/components/ui/SectionHeader";

<SectionHeader
  overline="HOW IT WORKS"
  title="Train Agents in Minutes"
  description="From setup to deployment, get certified agents running in less time than writing traditional code."
/>
```

**Output:**
```
┌─ Overline (font-mono, uppercase, amber)
│
├─ Title (font-display, large, navy)
│
└─ Description (body text, charcoal)
```

---

## Installation Guide

### Step 1: Initialize shadcn/ui

```bash
npx shadcn@latest init
```

**Configuration:**
- TypeScript: ✅ Yes
- Style: Default
- Base color: Slate
- CSS variables: ✅ Yes
- Tailwind config: `tailwind.config.ts`
- Component directory: `src/components/ui`
- Utilities: `src/lib/utils.ts`
- React Server Components: ✅ Yes
- Import alias: `@/`

### Step 2: Install Core Components

```bash
npx shadcn@latest add button input card select tabs badge slider table dialog
```

### Step 3: Add Aceternity Components

**Method 1: Manual Copy**
1. Browse: https://ui.aceternity.com/components
2. Click component → Copy code
3. Create file in `src/components/animations/[ComponentName].tsx`
4. Paste code
5. Adjust imports to use `@/` alias

**Method 2: CLI (if available)**
```bash
npx aceternity-ui add background-beams
npx aceternity-ui add timeline
```

### Step 4: Add Magic UI Components

1. Visit: https://magicui.design/docs/components
2. Copy component code
3. Create file in `src/components/animations/[ComponentName].tsx`
4. Install any peer dependencies

**Common Dependencies (already in project):**
- `framer-motion` ✅
- `lucide-react` ✅
- `react` ✅

### Step 5: Verify Installation

Create test page:

```tsx
// src/app/test/page.tsx
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function TestPage() {
  return (
    <div className="p-8 bg-cream-50 min-h-screen">
      <ScrollReveal>
        <Card>
          <h1 className="font-display text-display-md text-navy-800 mb-4">
            Component Test
          </h1>
          <Button variant="primary">Test Button</Button>
        </Card>
      </ScrollReveal>
    </div>
  );
}
```

Run dev server:
```bash
npm run dev
```

Visit: `http://localhost:3000/test`

---

## Usage Patterns

### Pattern 1: Section Layout

**Standard Structure:**
```tsx
<section className="py-24 md:py-32 px-6 bg-cream-50">
  <div className="max-w-7xl mx-auto">
    <SectionHeader
      overline="FEATURES"
      title="Why Agent School"
      description="Built for production reliability"
    />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <ScrollReveal delay={0}>
        <Card>
          {/* Feature 1 */}
        </Card>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Card>
          {/* Feature 2 */}
        </Card>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Card>
          {/* Feature 3 */}
        </Card>
      </ScrollReveal>
    </div>
  </div>
</section>
```

---

### Pattern 2: Interactive Demo Panel

**macOS-Style Window:**
```tsx
<div className="bg-white rounded-2xl border border-cream-200 shadow-medium overflow-hidden">
  {/* Window Header */}
  <div className="flex items-center gap-2 px-5 py-3 bg-cream-50 border-b border-cream-200">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-300" />
      <div className="w-3 h-3 rounded-full bg-amber-300" />
      <div className="w-3 h-3 rounded-full bg-green-300" />
    </div>
    <span className="text-caption text-charcoal-500 ml-2">
      agent_training.py
    </span>
  </div>

  {/* Content */}
  <div className="p-6">
    <CodeBlock
      language="python"
      code={demoCode}
    />
  </div>
</div>
```

---

### Pattern 3: Responsive Grid

**Feature Grid:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((feature, i) => (
    <ScrollReveal key={feature.id} delay={i * 0.1}>
      <Card hover padding="lg">
        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
          {feature.icon}
        </div>
        <h3 className="font-display text-heading-sm text-navy-800 mb-2">
          {feature.title}
        </h3>
        <p className="text-body-sm text-charcoal-500">
          {feature.description}
        </p>
      </Card>
    </ScrollReveal>
  ))}
</div>
```

---

### Pattern 4: Animated Number Display

**Live Metrics:**
```tsx
import { SmoothNumber } from "@/components/animations/AnimatedCounter";

<div className="grid grid-cols-2 gap-4">
  <div className="p-6 rounded-xl bg-white border border-cream-200">
    <DollarSign size={18} className="text-green-500 mb-2" />
    <div className="font-display text-display-sm text-navy-800">
      <SmoothNumber value={yearlySavings} prefix="$" />
    </div>
    <p className="text-caption text-charcoal-500 mt-1">
      Yearly Savings
    </p>
  </div>

  <div className="p-6 rounded-xl bg-white border border-cream-200">
    <Clock size={18} className="text-amber-500 mb-2" />
    <div className="font-display text-display-sm text-navy-800">
      <SmoothNumber value={hoursSaved} suffix="h" />
    </div>
    <p className="text-caption text-charcoal-500 mt-1">
      Hours Saved
    </p>
  </div>
</div>
```

---

### Pattern 5: Staggered List Animation

**Feature List:**
```tsx
<StaggeredList>
  {features.map((feature) => (
    <motion.div
      key={feature.id}
      variants={itemVariants}
      className="flex items-start gap-3 mb-4"
    >
      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
        <Check size={14} className="text-amber-600" />
      </div>
      <div>
        <h4 className="font-semibold text-body-md text-navy-800">
          {feature.title}
        </h4>
        <p className="text-body-sm text-charcoal-500">
          {feature.description}
        </p>
      </div>
    </motion.div>
  ))}
</StaggeredList>
```

---

### Pattern 6: Tab Navigation

**Content Tabs:**
```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Setup", "Train", "Deploy"];
const [activeTab, setActiveTab] = useState("Setup");

<div>
  {/* Tab Bar */}
  <div className="flex gap-2 bg-cream-100 p-1 rounded-xl mb-6">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className="relative px-4 py-2 text-body-sm font-medium transition-colors flex-1"
      >
        {activeTab === tab && (
          <motion.div
            layoutId="tab-indicator"
            className="absolute inset-0 bg-white rounded-lg shadow-soft"
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
        )}
        <span className="relative z-10">{tab}</span>
      </button>
    ))}
  </div>

  {/* Tab Content */}
  <AnimatePresence mode="popLayout">
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {/* Content for {activeTab} */}
    </motion.div>
  </AnimatePresence>
</div>
```

---

## Dark Mode Support

### Current State
This project uses a **light-first design** with custom color palette (navy, amber, cream, charcoal). No dark mode toggle currently implemented.

### Adding Dark Mode (Future)

**Step 1: Update Tailwind Config**

```ts
// tailwind.config.ts
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  // ... rest of config
}
```

**Step 2: Add Dark Mode Variants to Components**

```tsx
// Example: Button.tsx
const variantStyles = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 " +
    "dark:bg-navy-600 dark:hover:bg-navy-500",
  secondary:
    "bg-amber-500 text-navy-900 hover:bg-amber-400 " +
    "dark:bg-amber-400 dark:text-navy-800",
};
```

**Step 3: Create Theme Provider**

```tsx
// src/components/layout/ThemeProvider.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

**Step 4: Add Theme Toggle**

```tsx
// In Navbar.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-cream-100 dark:hover:bg-navy-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} className="text-navy-800 dark:text-cream-100" />
      ) : (
        <Sun size={20} className="text-cream-100" />
      )}
    </button>
  );
}
```

**Step 5: Update Color Palette for Dark Mode**

```ts
// tailwind.config.ts - Add dark mode variants
colors: {
  navy: {
    // ... existing colors
    950: "#0A1122", // Darker navy for dark mode backgrounds
  },
  cream: {
    // ... existing colors
    950: "#1A1816", // Dark mode alternative to cream-50
  },
}
```

**Component-Specific Dark Mode Classes:**

```tsx
// Card.tsx
<div className={cn(
  "bg-white dark:bg-navy-900",
  "border border-cream-200 dark:border-navy-700",
  "shadow-soft dark:shadow-glow-navy"
)}>
```

```tsx
// SectionHeader.tsx
<p className="font-mono text-amber-500 dark:text-amber-400">
<h2 className="text-navy-800 dark:text-cream-50">
<p className="text-charcoal-500 dark:text-charcoal-300">
```

---

## Migration Guide

### Replacing Old Components with New Library Components

#### Example 1: Replace Custom Button with shadcn Button

**Before:**
```tsx
<button className="px-6 py-3 bg-navy-800 text-white rounded-xl hover:bg-navy-700">
  Click Me
</button>
```

**After:**
```tsx
import { Button } from "@/components/ui/Button";

<Button variant="primary">Click Me</Button>
```

---

#### Example 2: Replace Manual Animation with ScrollReveal

**Before:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <Card>Content</Card>
</motion.div>
```

**After:**
```tsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

<ScrollReveal>
  <Card>Content</Card>
</ScrollReveal>
```

---

#### Example 3: Replace Static Number with Animated Counter

**Before:**
```tsx
<div className="text-display-sm">
  ${results.yearlySavings.toLocaleString()}
</div>
```

**After:**
```tsx
import { SmoothNumber } from "@/components/animations/AnimatedCounter";

<div className="text-display-sm">
  <SmoothNumber value={results.yearlySavings} prefix="$" />
</div>
```

---

#### Example 4: Replace Custom Tab with shadcn Tabs

**Before:**
```tsx
const [tab, setTab] = useState("overview");

<div className="flex gap-2">
  <button
    onClick={() => setTab("overview")}
    className={tab === "overview" ? "active" : ""}
  >
    Overview
  </button>
  <button
    onClick={() => setTab("features")}
    className={tab === "features" ? "active" : ""}
  >
    Features
  </button>
</div>

{tab === "overview" && <div>Overview content</div>}
{tab === "features" && <div>Features content</div>}
```

**After:**
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="features">Features</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="features">Features content</TabsContent>
</Tabs>
```

---

### Component Comparison Table

| Use Case | Custom Component | Library Component | Benefit |
|----------|-----------------|-------------------|---------|
| Primary CTA button | `<button>` with Tailwind | `<Button variant="primary">` | Consistent variants, built-in animations |
| Container with hover effect | `<motion.div>` | `<Card hover>` | Standardized shadows, spacing |
| Scroll-triggered fade-in | Manual `whileInView` | `<ScrollReveal>` | Consistent viewport margins, easing |
| Number animations | `useState` + interval | `<SmoothNumber>` | Spring physics, no re-renders |
| Tabbed content | State management | `<Tabs>` component | Keyboard nav, ARIA support |
| Modal dialog | Custom overlay | `<Dialog>` | Focus trap, ESC handling |
| Form input | `<input>` | `<Input>` | Validation states, consistent sizing |

---

## Best Practices

### 1. Component Selection Priority

**Decision Tree:**
```
Need a component?
│
├─ Is it a basic UI primitive? (button, input, card)
│  └─ Use shadcn/ui
│
├─ Is it an advanced animation effect?
│  └─ Check Aceternity UI (free tier)
│
├─ Is it a text/number animation?
│  └─ Check Magic UI
│
└─ Is it domain-specific? (ROI calc, certification demo)
   └─ Build custom component
```

---

### 2. Naming Conventions

**Component Files:**
- shadcn components: `Button.tsx`, `Card.tsx` (PascalCase)
- Animation wrappers: `ScrollReveal.tsx`, `AnimatedCounter.tsx`
- Interactive demos: `ROICalculator.tsx`, `CertificationDemo.tsx`

**Imports:**
```tsx
// ✅ Good: Direct named imports
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// ❌ Bad: Default imports or barrel files
import Button from "@/components/ui/button";
import * as UI from "@/components/ui";
```

---

### 3. Customization Strategy

**Prefer Props Over Forking:**
```tsx
// ✅ Good: Extend with props and className
<Button variant="secondary" className="w-full">
  Full Width CTA
</Button>

// ⚠️ Acceptable: Create variant wrapper
export function FullWidthButton(props) {
  return <Button {...props} className="w-full" />;
}

// ❌ Bad: Copy entire component and modify
// (Only do this if truly necessary)
```

---

### 4. Animation Performance

**Optimize for 60fps:**
```tsx
// ✅ Good: Transform-based animations
whileHover={{ y: -2, scale: 1.02 }}

// ❌ Bad: Layout-triggering properties
whileHover={{ marginTop: -2, width: "105%" }}
```

**Use layout animations sparingly:**
```tsx
// ✅ Good: layoutId for position transitions
<motion.div layoutId="tab-indicator" />

// ⚠️ Expensive: layout prop on many elements
<motion.div layout> // Avoid on large lists
```

---

### 5. Accessibility

**Always include:**
- Semantic HTML (`<button>` not `<div onClick>`)
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus states

```tsx
// ✅ Good
<button
  onClick={handleClick}
  aria-label="Close dialog"
  className="focus:ring-2 focus:ring-amber-500"
>
  <X size={20} />
</button>

// ❌ Bad
<div onClick={handleClick}>
  <X size={20} />
</div>
```

---

### 6. Responsive Design

**Mobile-first breakpoints:**
```tsx
<Card className="p-4 md:p-6 lg:p-8">
  <h3 className="text-heading-sm md:text-heading-md lg:text-heading-lg">
    Responsive Title
  </h3>
</Card>
```

**Grid patterns:**
```tsx
// 1 column mobile, 2 tablet, 4 desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
```

---

## Troubleshooting

### Issue: "Module not found" after installing shadcn component

**Solution:** Check `tsconfig.json` has correct path alias:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

### Issue: Framer Motion animations not working

**Solution:** Ensure component has `"use client"` directive:
```tsx
"use client"; // Must be first line

import { motion } from "framer-motion";
```

---

### Issue: Tailwind classes not applying to copied Aceternity components

**Solution:** Verify component directory is in `tailwind.config.ts`:
```ts
content: [
  "./src/components/**/*.{js,ts,jsx,tsx}", // ✅
]
```

---

### Issue: ScrollReveal not triggering

**Solution:** Check viewport margin and `once` prop:
```tsx
<ScrollReveal>
  {/* Element must have height and be in viewport */}
</ScrollReveal>
```

**Debug:**
```tsx
// Temporarily remove viewport margin to test
viewport={{ once: true, margin: "0px" }} // Default: "-80px"
```

---

### Issue: Tab indicator animation jumpy

**Solution:** Ensure shared `layoutId` and proper transition:
```tsx
<motion.div
  layoutId="unique-id" // Must be unique per tab group
  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
/>
```

---

## Additional Resources

### Documentation Links
- **shadcn/ui:** https://ui.shadcn.com
- **Aceternity UI:** https://ui.aceternity.com
- **Magic UI:** https://magicui.design
- **Framer Motion:** https://www.framer.com/motion
- **Tailwind CSS:** https://tailwindcss.com
- **Lucide Icons:** https://lucide.dev

### Project-Specific Files
- **Tailwind Config:** `tailwind.config.ts` (custom color palette, typography)
- **Global Styles:** `src/app/globals.css` (base styles, utilities)
- **Component Directory:** `src/components/` (see AGENTS.md for structure)
- **Constants:** `src/lib/constants.ts` (content, URLs)
- **Calculator Logic:** `src/lib/calculator.ts` (ROI math)

### Related Guides
- **AGENTS.md:** High-level architecture, code style, Tailwind conventions
- **README.md:** Project setup, commands, deployment
- **tsconfig.json:** TypeScript configuration

---

## Checklist: Adding a New Component

- [ ] Determine component layer (shadcn / Aceternity / Magic / Custom)
- [ ] Install/copy component code
- [ ] Add to appropriate directory (`ui/`, `animations/`, `interactive/`)
- [ ] Update imports to use `@/` alias
- [ ] Add `"use client"` if using hooks/motion
- [ ] Customize colors to match brand palette
- [ ] Test on mobile/tablet/desktop
- [ ] Add hover/focus states
- [ ] Document props if complex
- [ ] Use in actual section (not just isolation)

---

**Last Updated:** 2026-02-09  
**Maintainer:** Agent School Team  
**License:** Component libraries are MIT/free tier. This documentation is internal.
