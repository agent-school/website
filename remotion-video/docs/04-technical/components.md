# component reference

detailed documentation for every component in the remotion video project.

## component categories

1. **scene components** - full video scenes (src/scenes/)
2. **mockup components** - software ui mockups (src/components/mockups/)
3. **animation components** - reusable animations (src/components/magic-ui/)
4. **utility functions** - helper functions (src/lib/)

---

## scene components (src/scenes/)

### overview

7 scene components that make up the 45-second video. each scene is a self-contained react component that returns visual content for a specific frame range.

---

### IntroSceneV2.tsx

**frames:** 0-120 (0-4 seconds)  
**purpose:** dramatic opening with particle explosion and logo reveal

**props:** none (standalone component)

**structure:**
```typescript
export const IntroSceneV2: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill className="bg-black">
      {/* particle system */}
      {/* logo */}
      {/* title text */}
    </AbsoluteFill>
  );
};
```

**key sections:**

1. **particle explosion (lines 23-89)**
```typescript
const particles = useMemo(() =>
  Array.from({ length: 1000 }, (_, i) => ({
    angle: (Math.PI * 2 * i) / 1000,
    delay: Math.random() * 10
  })), []
);
```

2. **logo animation (lines 103-145)**
```typescript
const logoScale = spring({
  frame: frame - 30,
  from: 0,
  to: 1,
  config: { damping: 12, stiffness: 100 }
});
```

3. **text reveals (lines 167-189)**
```typescript
const titleOpacity = interpolate(frame, [60, 90], [0, 1]);
const subtitleOpacity = interpolate(frame, [90, 120], [0, 1]);
```

**customization points:**

| what to change | where | example |
|----------------|-------|---------|
| particle count | line 15 | `1000` → `500` |
| explosion speed | line 67 | `distance * progress` → `distance * progress * 2` |
| logo delay | line 103 | `frame - 30` → `frame - 60` |
| title text | line 178 | `"Agent School"` → custom |

**dependencies:**
- remotion (`useCurrentFrame`, `interpolate`, `spring`)
- framer-motion (`motion`)

**render time:** ~15 seconds per frame (particle-intensive)

---

### ProblemSceneV2.tsx

**frames:** 120-330 (4-11 seconds)  
**purpose:** show problems with rpa and expensive ai

**props:** none

**structure:**
```typescript
export const ProblemSceneV2: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill>
      <div className="grid grid-cols-2 gap-8">
        {/* left: rpa failures */}
        {/* right: expensive ai */}
      </div>
    </AbsoluteFill>
  );
};
```

**key sections:**

1. **split layout (lines 34-56)**
```typescript
<div className="grid grid-cols-2 gap-8 h-full">
  <div className="glassmorphism-red">
    {/* rpa problems */}
  </div>
  <div className="glassmorphism-orange">
    {/* ai costs */}
  </div>
</div>
```

2. **error animations (lines 78-123)**
```typescript
const errors = [
  { text: "Button moved", delay: 0 },
  { text: "Selector broke", delay: 20 },
  { text: "Workflow failed", delay: 40 }
];

errors.map((error, i) => {
  const opacity = interpolate(frame, [error.delay, error.delay + 20], [0, 1]);
  return <div style={{ opacity }}>{error.text}</div>
});
```

3. **cost counter (lines 145-167)**
```typescript
const cost = interpolate(frame, [60, 120], [0, 50000]);
<NumberTicker value={cost} prefix="$" />
```

**customization points:**

| what to change | where | example |
|----------------|-------|---------|
| split ratio | line 45 | `grid-cols-2` → `grid-cols-3` |
| error messages | lines 23-31 | add/remove errors |
| cost amount | line 156 | `50000` → `75000` |
| colors | lines 56, 78 | `red-500` → `orange-500` |

**dependencies:**
- `@/components/magic-ui/number-ticker`
- framer-motion
- lucide-react (icons)

**render time:** ~5 seconds per frame

---

### SolutionScene.tsx ⭐

**frames:** 330-840 (11-28 seconds)  
**purpose:** showcase 5 software mockups in bento grid (centerpiece scene)

**props:** none

**structure:**
```typescript
export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill>
      <div className="bento-grid">
        {mockups.map((Mockup, i) => (
          <motion.div key={i}>
            <BorderBeam />
            <Mockup />
          </motion.div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
```

**key sections:**

1. **bento grid layout (lines 45-89)**
```typescript
<div style={{
  display: "grid",
  gridTemplateAreas: `
    "header header header"
    "ecom   crm    hotel"
    "banking banking health"
  `,
  gap: "1rem"
}}>
```

2. **mockup array (lines 103-134)**
```typescript
const mockups = [
  { Component: EcommerceMockup, color: "orange" },
  { Component: CRMMockup, color: "blue" },
  { Component: HotelPMSMockup, color: "purple" },
  { Component: BankingMockup, color: "green" },
  { Component: HealthcareMockup, color: "magenta" }
];
```

3. **stagger animation (lines 156-189)**
```typescript
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 2,  // 2s delay between children
      delayChildren: 0.5
    }
  }
};

const mockupVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15
    }
  }
};
```

4. **border beam integration (lines 212-234)**
```typescript
<BorderBeam
  duration={3}
  colorFrom={mockup.color}
  colorTo={mockup.color}
  size={200}
/>
```

**customization points:**

| what to change | where | example |
|----------------|-------|---------|
| grid layout | lines 45-67 | change `gridTemplateAreas` |
| mockup order | lines 103-134 | reorder array |
| stagger delay | line 167 | `2` → `1.5` (faster) |
| hover effect | lines 189-201 | adjust `whileHover` |
| border colors | lines 223-224 | change `colorFrom`/`colorTo` |

**dependencies:**
- all 5 mockup components
- `@/components/magic-ui/border-beam`
- framer-motion

**render time:** ~8 seconds per frame (5 complex mockups)

---

### CertificationScene.tsx

**frames:** 840-990 (28-33 seconds)  
**purpose:** show parallel certification testing (3x4 grid)

**props:** none

**structure:**
```typescript
export const CertificationScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {testPanels.map((panel, i) => (
          <TestPanel key={i} index={i} frame={frame} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
```

**key sections:**

1. **grid setup (lines 34-56)**
```typescript
const testPanels = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  status: "testing",
  progress: 0
}));
```

2. **checkmark animation (lines 78-123)**
```typescript
const checkmarkDelay = index * 10;  // frames
const checkmarkProgress = interpolate(
  frame,
  [checkmarkDelay, checkmarkDelay + 20],
  [0, 1]
);

<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: [0, 1.2, 1] }}  // bounce effect
  transition={{ delay: checkmarkDelay / 30 }}
>
  <Check className="text-cyan-400" />
</motion.div>
```

3. **progress bars (lines 145-167)**
```typescript
const progress = interpolate(
  frame,
  [0, 60],
  [0, 100],
  { extrapolateRight: "clamp" }
);

<div className="bg-cyan-400" style={{ width: `${progress}%` }} />
```

**customization points:**

| what to change | where | example |
|----------------|-------|---------|
| grid size | line 45 | `grid-cols-4` → `grid-cols-5` |
| panel count | line 34 | `12` → `16` |
| checkmark speed | line 89 | `* 10` → `* 5` (faster) |
| success rate | line 156 | `100` → `99` |

**dependencies:**
- lucide-react (`Check` icon)
- framer-motion

**render time:** ~5 seconds per frame

---

### SelfHealingScene.tsx

**frames:** 990-1110 (33-37 seconds)  
**purpose:** demonstrate 4-phase ui adaptation process

**props:** none

**structure:**
```typescript
export const SelfHealingScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill>
      <div className="grid grid-cols-4 gap-6">
        {phases.map((phase, i) => (
          <PhaseCard key={i} phase={phase} index={i} frame={frame} />
        ))}
      </div>
      <TimelineConnector />
    </AbsoluteFill>
  );
};
```

**key sections:**

1. **phase definitions (lines 23-56)**
```typescript
const phases = [
  {
    title: "Detect",
    description: "UI change detected",
    icon: <AlertCircle />,
    color: "red",
    frameRange: [0, 30]
  },
  {
    title: "Analyze",
    description: "AI analyzes changes",
    icon: <Brain />,
    color: "yellow",
    frameRange: [30, 60]
  },
  {
    title: "Adapt",
    description: "Workflow updated",
    icon: <Zap />,
    color: "blue",
    frameRange: [60, 90]
  },
  {
    title: "Verify",
    description: "Tests confirm success",
    icon: <CheckCircle />,
    color: "green",
    frameRange: [90, 120]
  }
];
```

2. **phase cards (lines 78-134)**
```typescript
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{
    opacity: isActive ? 1 : 0.3,
    x: 0
  }}
  className={`glassmorphism-${phase.color}`}
>
  {phase.icon}
  <h3>{phase.title}</h3>
  <p>{phase.description}</p>
</motion.div>
```

3. **timeline connector (lines 156-189)**
```typescript
<svg className="absolute top-1/2 left-0 w-full">
  <motion.line
    x1="0"
    y1="0"
    x2="100%"
    y2="0"
    stroke="white"
    strokeWidth="2"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: progress }}
  />
</svg>
```

**customization points:**

| what to change | where | example |
|----------------|-------|---------|
| phase count | lines 23-56 | add/remove phases |
| phase timing | lines 31,41,51,61 | adjust `frameRange` |
| phase colors | lines 34,44,54,64 | change color |
| layout | line 89 | `grid-cols-4` → `grid-rows-4` (vertical) |

**dependencies:**
- lucide-react (all icons)
- framer-motion

**render time:** ~6 seconds per frame

---

### SpeedRaceScene.tsx

**frames:** 1110-1290 (37-43 seconds)  
**purpose:** speed comparison visualization

**props:** none

**structure:**
```typescript
export const SpeedRaceScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill>
      <div className="grid grid-cols-2 gap-8">
        {/* left: agent school (fast) */}
        {/* right: traditional (slow) */}
      </div>
    </AbsoluteFill>
  );
};
```

**key sections:**

1. **timing constants (lines 23-26)**
```typescript
const AGENT_SCHOOL_FRAMES = 60;  // 2 seconds
const TRADITIONAL_FRAMES = 1350;  // 45 seconds
const RACE_START_FRAME = 0;
const RACE_DURATION_FRAMES = 180;  // 6 seconds
```

2. **progress bars (lines 45-89)**
```typescript
// agent school (fast)
const agentProgress = interpolate(
  frame,
  [0, AGENT_SCHOOL_FRAMES],
  [0, 100],
  { extrapolateRight: "clamp" }
);

// traditional (slow)
const traditionalProgress = interpolate(
  frame,
  [0, RACE_DURATION_FRAMES],
  [0, (AGENT_SCHOOL_FRAMES / TRADITIONAL_FRAMES) * 100]
);
```

3. **completion states (lines 103-134)**
```typescript
const agentComplete = frame >= AGENT_SCHOOL_FRAMES;
const traditionalComplete = false;  // never completes in 6s

{agentComplete ? (
  <Check className="text-cyan-400" />
) : (
  <Loader className="animate-spin" />
)}
```

4. **time display (lines 156-178)**
```typescript
<NumberTicker
  value={agentComplete ? 2 : frame / 30}
  decimalPlaces={1}
  suffix="s"
/>
```

**customization points:**

| what to change | where | example |
|----------------|-------|---------|
| completion times | lines 23-24 | adjust constants |
| race duration | line 25 | show longer race |
| progress colors | lines 67, 78 | change bar colors |
| speed label | line 145 | `"23x faster"` → custom |

**dependencies:**
- `@/components/magic-ui/number-ticker`
- lucide-react (`Check`, `Loader`)

**render time:** ~4 seconds per frame

---

### StatsScene.tsx

**frames:** 1290-1350 (43-45 seconds)  
**purpose:** final metrics and call-to-action

**props:** none

**structure:**
```typescript
export const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill className="bg-gradient-to-br from-navy-900 to-navy-800">
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} frame={frame} />
        ))}
      </div>
      <CTAButton />
    </AbsoluteFill>
  );
};
```

**key sections:**

1. **stats definitions (lines 23-39)**
```typescript
const stats = [
  {
    value: 99.9,
    suffix: "%",
    label: "Accuracy",
    color: "cyan"
  },
  {
    value: 23,
    suffix: "x",
    label: "Faster",
    color: "orange"
  },
  {
    value: 0,
    prefix: "$",
    label: "Downtime",
    color: "green"
  }
];
```

2. **stat cards (lines 56-89)**
```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: index * 0.2 }}
  className="glassmorphism"
>
  <NumberTicker
    value={stat.value}
    prefix={stat.prefix}
    suffix={stat.suffix}
    className={`text-9xl text-${stat.color}-400`}
  />
  <p className="text-2xl">{stat.label}</p>
</motion.div>
```

3. **cta button (lines 103-134)**
```typescript
<motion.button
  animate={{
    boxShadow: [
      "0 0 20px rgba(6, 182, 212, 0.3)",
      "0 0 40px rgba(6, 182, 212, 0.6)",
      "0 0 20px rgba(6, 182, 212, 0.3)"
    ]
  }}
  transition={{
    duration: 2,
    repeat: Infinity
  }}
  className="px-12 py-6 text-2xl"
>
  Get Started →
</motion.button>
```

**customization points:**

| what to change | where | example |
|----------------|-------|---------|
| stat values | lines 23-39 | change metrics |
| stat count | lines 23-39 | add/remove stats |
| animation delay | line 67 | `* 0.2` → `* 0.1` (faster) |
| cta text | line 123 | change button label |
| glow color | line 115 | change rgba values |

**dependencies:**
- `@/components/magic-ui/number-ticker`
- framer-motion

**render time:** ~4 seconds per frame

---

## mockup components (src/components/mockups/)

### common structure

all mockup components follow this pattern:

```typescript
export const MockupName: React.FC = () => {
  return (
    <div className="w-full h-full">
      {/* macOS window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 bg-cream-50 border-b">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-300" />
          <div className="w-3 h-3 rounded-full bg-amber-300" />
          <div className="w-3 h-3 rounded-full bg-green-300" />
        </div>
      </div>
      
      {/* mockup content */}
      <div className="p-6 glassmorphism-{color}">
        {/* ui elements */}
      </div>
    </div>
  );
};
```

---

### EcommerceMockup.tsx

**purpose:** amazon-style product catalog interface  
**color theme:** orange (#FF9800)

**ui elements:**
- product grid (3x3 layout)
- product cards with images
- prices, ratings (stars)
- "add to cart" buttons
- search bar
- category filters

**key classes:**
- `.glassmorphism-orange` - semi-transparent orange background
- `.grid-cols-3` - 3-column product grid
- `.aspect-square` - square product images

**line count:** ~240 lines

---

### CRMMockup.tsx

**purpose:** salesforce-style sales pipeline kanban  
**color theme:** blue (#00A1E0)

**ui elements:**
- kanban board (3 columns)
- deal cards (draggable appearance)
- stage labels: lead / qualify / close
- revenue amounts per deal
- progress indicators

**key classes:**
- `.glassmorphism-blue` - semi-transparent blue background
- `.grid-cols-3` - 3-column kanban layout
- `.flex-col` - vertical card stacks

**line count:** ~260 lines

---

### HotelPMSMockup.tsx

**purpose:** hotel property management system  
**color theme:** purple (#6631D7)

**ui elements:**
- reservations table
- room status badges (occupied/vacant)
- guest names
- check-in/check-out dates
- room numbers
- action buttons

**key classes:**
- `.glassmorphism-purple` - semi-transparent purple background
- `.table` - reservation table layout
- `.badge` - status indicators

**line count:** ~220 lines

---

### BankingMockup.tsx

**purpose:** invoice processing dashboard  
**color theme:** green (#10B981)

**ui elements:**
- invoice list table
- invoice numbers
- amounts
- approval buttons
- payment status badges
- date information

**key classes:**
- `.glassmorphism-green` - semi-transparent green background
- `.table` - invoice table layout
- `.justify-between` - button alignment

**line count:** ~210 lines

---

### HealthcareMockup.tsx

**purpose:** patient records system  
**color theme:** magenta (#D946EF)

**ui elements:**
- patient list
- medical history cards
- appointment schedule
- prescription details
- vital signs
- doctor notes

**key classes:**
- `.glassmorphism-magenta` - semi-transparent magenta background
- `.grid-rows-auto` - patient card layout
- `.text-sm` - compact information display

**line count:** ~230 lines

---

## animation components (src/components/magic-ui/)

see `animations.md` for detailed documentation of:
- particles.tsx
- border-beam.tsx
- number-ticker.tsx
- animated-beam.tsx
- typing-animation.tsx

---

## utility functions (src/lib/utils.ts)

### cn() function

**purpose:** merge tailwind classes with conflict resolution

**signature:**
```typescript
function cn(...inputs: ClassValue[]): string
```

**usage:**
```typescript
// basic merge
cn("px-4 py-2", "bg-blue-500")
// → "px-4 py-2 bg-blue-500"

// conflict resolution (last wins)
cn("px-4", "px-6")
// → "px-6"

// conditional classes
cn("px-4", isActive && "bg-blue-500", !isActive && "bg-gray-500")
// → "px-4 bg-blue-500" (if isActive)
// → "px-4 bg-gray-500" (if not isActive)

// array of classes
cn(["px-4", "py-2"], "bg-blue-500")
// → "px-4 py-2 bg-blue-500"
```

**implementation:**
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**how it works:**
1. `clsx` - combines class names, handles conditionals
2. `twMerge` - resolves tailwind conflicts

**dependencies:**
- `clsx` package
- `tailwind-merge` package

---

this component reference provides detailed documentation for all components in the remotion video project.
