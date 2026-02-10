# file structure reference

complete guide to every file and folder in the remotion video project for future ai agents.

## project root structure

```
remotion-video/
├── docs/                    # 📚 comprehensive documentation
├── node_modules/            # 📦 dependencies (auto-generated)
├── out/                     # 🎬 rendered video output files
├── public/                  # 🌐 static assets (if any)
├── src/                     # 💻 all source code (main development)
├── .gitignore              # git ignore rules
├── package.json            # project metadata + dependencies
├── package-lock.json       # locked dependency versions
├── postcss.config.cjs      # postcss configuration (commonjs)
├── remotion.config.ts      # remotion webpack + tailwind config
├── tailwind.config.js      # tailwind css theme configuration
├── tsconfig.json           # typescript compiler configuration
└── README.md               # project overview (root level)
```

---

## 📚 docs/ - documentation folder

**newly organized structure:**

```
docs/
├── 01-getting-started/
│   ├── getting-started.md      # first steps guide
│   ├── quickstart.md           # 5-minute quick start
│   ├── setup.md                # remotion setup details
│   └── readme.md               # main documentation entry
├── 02-project-overview/
│   ├── overview.md             # high-level project summary
│   ├── completion-summary.md   # what was completed + session notes
│   └── status.md               # current project status
├── 03-video-structure/
│   ├── timeline.md             # ⭐ frame-by-frame breakdown
│   ├── scenes.md               # scene descriptions
│   └── video-summary.md        # high-level video overview
├── 04-technical/
│   ├── file-structure.md       # ⭐ this file (explains all files)
│   ├── animations.md           # ⭐ animation system explained
│   ├── design-system.md        # colors, fonts, styles
│   └── components.md           # ⭐ component documentation
├── 05-rendering/
│   ├── rendering-guide.md      # how to render videos
│   └── troubleshooting.md      # ⭐ common issues + fixes
└── archive/
    └── from-idea-to-video.md   # historical development notes
```

**purpose:**
- organized by topic for easy navigation
- all lowercase filenames (no caps)
- comprehensive for future ai agents
- includes both existing and new documentation

---

## 💻 src/ - source code folder

**complete structure with annotations:**

```
src/
├── components/              # reusable react components
│   ├── magic-ui/            # animation components library
│   │   ├── animated-beam.tsx       # beam animation between points
│   │   ├── border-beam.tsx         # rotating border gradient
│   │   ├── number-ticker.tsx       # counting number animation
│   │   ├── particles.tsx           # particle explosion effect
│   │   └── typing-animation.tsx    # typewriter text effect
│   └── mockups/             # software ui mockups (5 total)
│       ├── banking-mockup.tsx      # invoice processing ui (green)
│       ├── crm-mockup.tsx          # sales pipeline ui (blue)
│       ├── ecommerce-mockup.tsx    # product catalog ui (orange)
│       ├── healthcare-mockup.tsx   # patient records ui (magenta)
│       └── hotel-pms-mockup.tsx    # reservations ui (purple)
├── lib/                     # utility functions
│   └── utils.ts                    # cn() classname merger (tailwind)
├── scenes/                  # video scenes (7 total)
│   ├── CertificationScene.tsx      # scene 4: parallel testing (28-33s)
│   ├── IntroSceneV2.tsx            # scene 1: particle intro (0-4s)
│   ├── ProblemSceneV2.tsx          # scene 2: split problem (4-11s)
│   ├── SelfHealingScene.tsx        # scene 5: 4-phase adaptation (33-37s)
│   ├── SolutionScene.tsx           # scene 3: bento grid mockups (11-28s)
│   ├── SpeedRaceScene.tsx          # scene 6: speed comparison (37-43s)
│   └── StatsScene.tsx              # scene 7: final metrics (43-45s)
├── styles/                  # global styles
│   └── globals.css                 # tailwind imports + glassmorphism
├── AgentSchoolShowcase.tsx  # ⭐ main composition (assembles all scenes)
├── index.ts                 # entry point (registers root + imports css)
└── Root.tsx                 # remotion root component (renders composition)
```

---

## detailed file explanations

### 🎯 src/AgentSchoolShowcase.tsx

**purpose:** main video composition that assembles all 7 scenes

**key exports:**
- `AgentSchoolShowcase` component

**structure:**
```typescript
export const AgentSchoolShowcase: React.FC = () => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={120}>
      <IntroSceneV2 />
    </Sequence>
    <Sequence from={120} durationInFrames={210}>
      <ProblemSceneV2 />
    </Sequence>
    {/* ... more scenes */}
  </AbsoluteFill>
);
```

**what to edit:**
- scene durations: `durationInFrames` prop
- scene order: reorder `<Sequence>` components
- transitions: adjust `from` values for overlap

**line count:** ~80 lines

---

### 🚀 src/index.ts

**purpose:** entry point for remotion (registers root component)

**critical lines:**
```typescript
import "./styles/globals.css";  // line 1: imports tailwind
import { registerRoot } from "remotion";  // line 2
import { RemotionRoot } from "./Root";  // line 3

registerRoot(RemotionRoot);  // line 5: registers root
```

**what to edit:**
- rarely needs changes
- only edit if adding global imports or changing root

**line count:** ~5 lines

---

### 🎨 src/Root.tsx

**purpose:** remotion root that defines available compositions

**key exports:**
- `RemotionRoot` component

**structure:**
```typescript
export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="AgentSchoolShowcase"
      component={AgentSchoolShowcase}
      durationInFrames={1350}  // 45 seconds
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
```

**what to edit:**
- video specs: `durationInFrames`, `fps`, `width`, `height`
- add new compositions (for alternative versions)

**line count:** ~25 lines

---

### 🎬 src/scenes/ - scene files

#### IntroSceneV2.tsx (0-4s, frames 0-120)

**purpose:** dramatic particle explosion intro with logo

**key features:**
- 1000 particles radiating from center
- logo materializes with spring animation
- "agent school" title + subtitle

**critical components:**
- particle system (lines 15-67)
- logo animation (lines 89-112)
- text reveals (lines 134-156)

**dependencies:**
- `src/components/magic-ui/particles.tsx`
- framer-motion for spring animations

**what to edit:**
- particle count: line 15 (`particleCount = 1000`)
- explosion speed: line 45 (`distance * progress`)
- logo appearance: line 89 (frame threshold)

**line count:** ~180 lines

---

#### ProblemSceneV2.tsx (4-11s, frames 120-330)

**purpose:** split-screen showing rpa failures vs expensive ai

**key features:**
- 50/50 split layout
- left: error messages animating
- right: cost numbers counting up
- glassmorphism cards

**critical components:**
- split layout grid (lines 34-56)
- error animation (lines 78-103)
- cost counter (lines 123-145)

**dependencies:**
- framer-motion for animations
- tailwind for styling

**what to edit:**
- split ratio: line 45 (`grid-cols-2`)
- error messages: lines 23-31 (array)
- cost amount: line 134 (`to: 50000`)

**line count:** ~160 lines

---

#### SolutionScene.tsx (11-28s, frames 330-840) ⭐ centerpiece

**purpose:** bento grid showcasing 5 software mockups

**key features:**
- css grid bento layout
- 5 animated mockups with stagger
- border-beam effects
- hover interactions

**critical components:**
- bento grid layout (lines 45-89)
- mockup stagger animation (lines 103-178)
- border-beam integration (lines 189-234)

**dependencies:**
- all 5 mockup components
- `src/components/magic-ui/border-beam.tsx`

**what to edit:**
- grid layout: lines 45-67 (`gridTemplateAreas`)
- stagger timing: line 123 (`delay: index * 60`)
- mockup order: lines 145-189 (array order)

**line count:** ~280 lines

---

#### CertificationScene.tsx (28-33s, frames 840-990)

**purpose:** 3x4 grid showing parallel certification tests

**key features:**
- 12 test panels in grid
- cascading checkmark animations
- 100% success rate metric
- progress bar fills

**critical components:**
- grid layout (lines 34-67)
- checkmark sequence (lines 89-134)
- metric display (lines 156-178)

**dependencies:**
- framer-motion for springs
- lucide-react for icons

**what to edit:**
- grid size: line 45 (`grid-cols-4`)
- checkmark timing: line 103 (`delay: index * 10`)
- success rate: line 167 (`to: 100`)

**line count:** ~200 lines

---

#### SelfHealingScene.tsx (33-37s, frames 990-1110)

**purpose:** 4-phase ui adaptation demonstration

**key features:**
- horizontal timeline with 4 phases
- phase-specific animations
- color-coded indicators
- connecting lines between phases

**critical components:**
- phase timeline (lines 45-89)
- phase animations (lines 103-178)
- connector lines (lines 189-212)

**dependencies:**
- framer-motion for transitions
- custom svg icons

**what to edit:**
- phase count: lines 23-34 (phases array)
- phase timing: lines 67-78 (frame ranges)
- phase colors: lines 123-145 (tailwind classes)

**line count:** ~240 lines

---

#### SpeedRaceScene.tsx (37-43s, frames 1110-1290)

**purpose:** speed comparison between agent school and traditional

**key features:**
- dual progress bars racing
- agent school: 2s completion
- traditional: 45s incomplete
- checkmark vs loading spinner

**critical components:**
- progress bar race (lines 45-89)
- time display (lines 103-134)
- completion states (lines 156-178)

**dependencies:**
- `src/components/magic-ui/number-ticker.tsx`

**what to edit:**
- completion times: lines 23-24 (constants)
- progress bar colors: lines 67-78
- speed multiplier: line 145 (`23x`)

**line count:** ~190 lines

---

#### StatsScene.tsx (43-45s, frames 1290-1350)

**purpose:** final metrics and call-to-action

**key features:**
- 3 large metrics animated
- number ticker animations
- glowing cta button
- gradient background

**critical components:**
- metric cards (lines 45-89)
- number animations (lines 103-134)
- cta button (lines 156-178)

**dependencies:**
- `src/components/magic-ui/number-ticker.tsx`
- framer-motion for glows

**what to edit:**
- metrics: lines 23-31 (stats array)
- animation speed: line 67 (`duration`)
- cta text: line 167 (button label)

**line count:** ~180 lines

---

### 🎨 src/components/magic-ui/ - animation components

#### particles.tsx

**purpose:** particle system for explosion effects

**exports:** `Particles` component

**props:**
- `count`: number of particles
- `size`: particle size in pixels
- `color`: particle color
- `speed`: animation speed multiplier

**usage in project:**
- intro scene particle explosion

**line count:** ~120 lines

---

#### border-beam.tsx

**purpose:** animated rotating gradient border

**exports:** `BorderBeam` component

**props:**
- `duration`: rotation duration in seconds
- `colorFrom`: start gradient color
- `colorTo`: end gradient color
- `borderWidth`: border thickness

**usage in project:**
- solution scene mockup borders (5 instances)

**animation math:**
```typescript
// rotates 360° continuously
transform: `rotate(${(frame / duration) * 360}deg)`
```

**line count:** ~90 lines

---

#### number-ticker.tsx

**purpose:** animated counting numbers (odometer effect)

**exports:** `NumberTicker` component

**props:**
- `value`: target number
- `delay`: start delay
- `direction`: "up" or "down"
- `decimalPlaces`: precision

**usage in project:**
- stats scene metrics
- speed scene timers
- problem scene cost counter

**animation logic:**
```typescript
const motionValue = useMotionValue(0);
animate(motionValue, value, { duration: 2, ease: "easeOut" });
```

**line count:** ~70 lines

---

#### animated-beam.tsx

**purpose:** animated line connecting two points

**exports:** `AnimatedBeam` component

**props:**
- `fromRef`: starting element ref
- `toRef`: ending element ref
- `duration`: animation duration
- `curvature`: bezier curve amount

**usage in project:**
- currently unused (available for future edits)

**line count:** ~110 lines

---

#### typing-animation.tsx

**purpose:** typewriter text effect

**exports:** `TypingAnimation` component

**props:**
- `text`: string to animate
- `duration`: typing speed
- `cursor`: show blinking cursor

**usage in project:**
- currently unused (available for future edits)

**line count:** ~80 lines

---

### 🖥️ src/components/mockups/ - software ui mockups

all mockups share common structure:

**common features:**
- macOS window chrome (red/yellow/green dots)
- glassmorphism styling
- color-coded themes
- realistic ui elements

#### ecommerce-mockup.tsx (orange theme)

**represents:** amazon-style product catalog

**ui elements:**
- product grid (3x3)
- product images (placeholder)
- prices, ratings, add-to-cart buttons
- search bar, filters

**color scheme:**
- primary: orange (`#FF9800`)
- accent: amber
- glassmorphism: orange tint

**line count:** ~240 lines

---

#### crm-mockup.tsx (blue theme)

**represents:** salesforce-style sales pipeline

**ui elements:**
- kanban board (3 columns)
- deal cards with drag affordance
- stage indicators (lead/qualify/close)
- revenue amounts

**color scheme:**
- primary: blue (`#00A1E0`)
- accent: cyan
- glassmorphism: blue tint

**line count:** ~260 lines

---

#### hotel-pms-mockup.tsx (purple theme)

**represents:** hotel property management system

**ui elements:**
- reservations table
- room status indicators
- guest information
- check-in/check-out dates

**color scheme:**
- primary: purple (`#6631D7`)
- accent: violet
- glassmorphism: purple tint

**line count:** ~220 lines

---

#### banking-mockup.tsx (green theme)

**represents:** invoice processing dashboard

**ui elements:**
- invoice list table
- approval buttons
- payment status badges
- total amounts

**color scheme:**
- primary: green (`#10B981`)
- accent: emerald
- glassmorphism: green tint

**line count:** ~210 lines

---

#### healthcare-mockup.tsx (magenta theme)

**represents:** patient records system

**ui elements:**
- patient list
- medical history cards
- appointment schedule
- prescription details

**color scheme:**
- primary: magenta (`#D946EF`)
- accent: fuchsia
- glassmorphism: magenta tint

**line count:** ~230 lines

---

### 🛠️ src/lib/utils.ts

**purpose:** utility functions (currently just classname merger)

**exports:**
```typescript
export function cn(...inputs: ClassValue[]): string
```

**usage:** merge tailwind classes with conflict resolution

**example:**
```typescript
cn("px-4 py-2", "px-6") // returns "py-2 px-6" (px-6 wins)
```

**dependencies:**
- `clsx` package
- `tailwind-merge` package

**line count:** ~8 lines

---

### 🎨 src/styles/globals.css

**purpose:** global styles, tailwind imports, custom utilities

**structure:**
```css
/* tailwind imports */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* custom glassmorphism utilities */
@layer utilities {
  .glassmorphism-orange { ... }
  .glassmorphism-blue { ... }
  .glassmorphism-purple { ... }
  .glassmorphism-green { ... }
  .glassmorphism-magenta { ... }
}
```

**glassmorphism classes:**
- semi-transparent backgrounds
- backdrop blur effects
- subtle borders
- used in all mockups

**line count:** ~60 lines

---

## ⚙️ configuration files

### remotion.config.ts ⭐ critical

**purpose:** webpack + tailwind configuration for remotion

**key sections:**

1. **imports:**
```typescript
import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind";
import * as path from "path";  // important: not default import
```

2. **tailwind integration:**
```typescript
enableTailwind(config);  // enables tailwind processing
```

3. **webpack aliases:**
```typescript
config.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      alias: {
        ...currentConfiguration.resolve?.alias,
        "@": path.join(process.cwd(), "src"),  // @ alias for imports
      },
    },
  };
});
```

**what to edit:**
- add new webpack loaders
- configure additional aliases
- adjust build optimization

**line count:** ~35 lines

**⚠️ important:** must use `import * as path` not `import path` (es modules)

---

### postcss.config.cjs ⭐ critical

**purpose:** postcss configuration for tailwind

**extension:** `.cjs` (commonjs) because `package.json` has `"type": "module"`

**structure:**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**what to edit:**
- add new postcss plugins (rare)

**line count:** ~6 lines

**⚠️ important:** must be `.cjs` not `.js` for es module compatibility

---

### tailwind.config.js

**purpose:** tailwind theme customization

**key sections:**

1. **content paths:**
```javascript
content: ["./src/**/*.{ts,tsx}"]
```

2. **custom colors:**
```javascript
theme: {
  extend: {
    colors: {
      navy: { 50: "#...", ..., 900: "#0A2540" },
      orange: { 500: "#FE9F4D", ... },
      purple: { 600: "#6631D7", ... },
      cyan: { 400: "#06B6D4", ... },
    }
  }
}
```

3. **custom animations:**
```javascript
animation: {
  "border-beam": "border-beam 3s ease-in-out infinite",
  "shimmer": "shimmer 2s linear infinite",
  "pulse-glow": "pulse-glow 2s ease-in-out infinite",
}
```

**what to edit:**
- add new colors
- add new animations
- extend theme utilities

**line count:** ~120 lines

---

### tsconfig.json

**purpose:** typescript compiler configuration

**key settings:**

1. **path aliases:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

2. **strict mode:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true
  }
}
```

**what to edit:**
- add new path aliases
- adjust strictness settings

**line count:** ~30 lines

---

### package.json

**purpose:** project metadata and dependencies

**key sections:**

1. **scripts:**
```json
{
  "scripts": {
    "start": "remotion studio",
    "build": "remotion build",
    "render": "remotion render"
  }
}
```

2. **dependencies:**
```json
{
  "dependencies": {
    "@remotion/cli": "4.0.419",
    "@remotion/tailwind": "4.0.419",
    "remotion": "4.0.419",
    "react": "18.3.1",
    "tailwindcss": "3.4.19",
    "framer-motion": "12.34.0"
  }
}
```

3. **module type:**
```json
{
  "type": "module"  // es modules (requires .cjs for commonjs files)
}
```

**what to edit:**
- add new dependencies (`npm install <package>`)
- update versions (careful with breaking changes)

**line count:** ~45 lines

---

## 🎯 output folders

### out/ - rendered videos

**purpose:** stores exported video files

**typical contents:**
```
out/
├── agent-school-final.mp4      # full 45s render
├── test-intro.mp4              # test render of intro scene
├── solution-scene.mp4          # just solution scene
└── social-30s.mp4              # 30s version for linkedin
```

**created by:** `npx remotion render` command

**gitignored:** yes (videos are large, don't commit)

---

### .remotion/ - cache folder

**purpose:** remotion build cache for faster rebuilds

**typical contents:**
- webpack cache
- bundled assets
- temporary files

**should delete if:** 
- experiencing build errors
- want to force clean rebuild

**gitignored:** yes

---

## 📦 node_modules/ - dependencies

**purpose:** all npm packages installed

**size:** ~500mb

**should delete if:**
- need to reinstall packages
- troubleshooting dependency issues

**gitignored:** yes

**restore with:** `npm install`

---

## 🔍 import path patterns

### @ alias imports (preferred)

```typescript
import { cn } from "@/lib/utils";
import { Particles } from "@/components/magic-ui/particles";
import { EcommerceMockup } from "@/components/mockups/ecommerce-mockup";
```

### relative imports (avoid)

```typescript
import { cn } from "../../lib/utils";  // bad: hard to refactor
```

**why @ alias:**
- cleaner imports
- easier refactoring
- consistent across files

---

## 🚀 most frequently edited files

for typical video edits, you'll mainly touch:

1. **src/AgentSchoolShowcase.tsx** - adjust scene timing
2. **src/scenes/*.tsx** - modify scene content
3. **tailwind.config.js** - change colors/theme
4. **src/components/mockups/*.tsx** - update ui mockups
5. **remotion.config.ts** - build configuration

---

## 🎓 file naming conventions

- **scene files:** `PascalCase` + `Scene` suffix (e.g., `IntroSceneV2.tsx`)
- **component files:** `PascalCase` + descriptive (e.g., `BorderBeam.tsx`)
- **mockup files:** `kebab-case` + `-mockup` suffix (e.g., `ecommerce-mockup.tsx`)
- **utility files:** `kebab-case.ts` (e.g., `utils.ts`)
- **config files:** lowercase (e.g., `remotion.config.ts`)
- **docs:** lowercase + hyphens (e.g., `file-structure.md`)

---

## 🔧 dependency tree (important packages)

```
project
├── @remotion/cli@4.0.419          # remotion command line
├── @remotion/tailwind@4.0.419     # tailwind integration
├── remotion@4.0.419                # core remotion library
├── react@18.3.1                    # react framework
├── framer-motion@12.34.0           # animation library
├── tailwindcss@3.4.19             # css framework (downgraded from v4)
├── lucide-react                    # icon library
├── clsx                            # classname utility
└── tailwind-merge                  # tailwind class merger
```

**version notes:**
- tailwind downgraded from v4 → v3 for postcss compatibility
- remotion packages must match versions (4.0.419)

---

this file structure documentation provides complete context for navigating and editing the remotion video project.
