# video timeline reference

complete breakdown of the 45-second agent school marketing video with precise frame numbers, transitions, and timing for future editing.

## video specifications

- **total duration:** 45 seconds (1350 frames)
- **frame rate:** 30 fps
- **resolution:** 1920x1080 (full hd)
- **composition name:** `AgentSchoolShowcase`

## complete timeline breakdown

### scene 1: intro scene (0-4s, frames 0-120)

**file:** `src/scenes/IntroSceneV2.tsx`

**timing breakdown:**
- frames 0-30 (0-1s): particle explosion from center
- frames 30-60 (1-2s): particles settle, logo materializes
- frames 60-90 (2-3s): "agent school" title fades in
- frames 90-120 (3-4s): subtitle "turn expertise into automation" appears

**key animations:**
- 1000 particles radiating from center (cpu-intensive)
- particle motion: `x: Math.cos(angle) * distance * progress`
- particle opacity fade-in: `opacity: interpolate(frame, [0, 30], [0, 1])`
- logo scale animation: `scale: spring({ frame: frame - 30, from: 0, to: 1 })`

**visual style:**
- black background (`bg-black`)
- orange particles (`bg-gradient-to-r from-orange-500 to-orange-600`)
- navy logo with glow effect

**editing tips:**
- reduce particle count if render is slow (line 15: `particleCount`)
- adjust explosion speed (line 89: `distance * progress`)
- change logo appearance frame (line 45: `frame > 30`)

---

### scene 2: problem scene (4-11s, frames 120-330)

**file:** `src/scenes/ProblemSceneV2.tsx`

**timing breakdown:**
- frames 120-150 (4-5s): split screen setup appears
- frames 150-240 (5-8s): left side: rpa failures animated
- frames 240-300 (8-10s): right side: expensive ai costs shown
- frames 300-330 (10-11s): transition to solution

**key animations:**
- split-screen layout: left 50% vs right 50%
- error icons pulse: `scale: [1, 1.1, 1]` with spring
- cost numbers count up: `useMotionValue()` + `animate()`
- red/orange color coding for pain points

**visual style:**
- left side: red theme (`text-red-500`, `border-red-500`)
- right side: orange theme (`text-orange-500`, `border-orange-500`)
- glassmorphism cards (`backdrop-blur-lg`)

**content:**
- **left:** "traditional rpa breaks when ui changes"
- **right:** "ai costs $50k+ to implement"

**editing tips:**
- adjust split timing (line 67: `frame > 150`)
- change cost numbers (line 103: `from: 0, to: 50000`)
- modify error messages (line 45: `errorMessages` array)

---

### scene 3: solution scene (11-28s, frames 330-840) ⭐ centerpiece

**file:** `src/scenes/SolutionScene.tsx`

**timing breakdown:**
- frames 330-360 (11-12s): bento grid structure fades in
- frames 360-450 (12-15s): headline + value prop appears
- frames 450-690 (15-23s): 5 software mockups animate in sequence
- frames 690-780 (23-26s): mockups show hover interactions
- frames 780-840 (26-28s): call-to-action appears

**layout structure:**
```
┌─────────────────────────────────────┐
│  headline: "teach once, run forever" │
├──────────┬──────────┬───────────────┤
│ e-commerce│   crm   │  hotel pms    │
│ (orange) │  (blue)  │  (purple)     │
├──────────┴──────────┼───────────────┤
│    banking          │  healthcare   │
│    (green)          │  (magenta)    │
└─────────────────────┴───────────────┘
```

**mockup animation sequence:**
1. **ecommerce** (frames 450-510): orange border-beam, product grid
2. **crm** (frames 510-570): blue border-beam, sales pipeline
3. **hotel** (frames 570-630): purple border-beam, reservations table
4. **banking** (frames 630-690): green border-beam, invoice list
5. **healthcare** (frames 690-750): magenta border-beam, patient records

**key animations:**
- stagger delay: 60 frames (2s) between each mockup
- border-beam animation: rotating gradient border (360° rotation)
- glassmorphism effect: `backdrop-blur-md bg-white/10`
- hover lift: `whileHover={{ y: -8, scale: 1.02 }}`

**visual style:**
- bento grid layout: css grid with `grid-template-areas`
- each mockup has color-coded theme
- macOS window chrome (red/yellow/green dots)

**editing tips:**
- adjust mockup stagger (line 89: `delay: index * 60`)
- change grid layout (line 34: `gridTemplateAreas`)
- modify hover effects (line 156: `whileHover` props)
- add/remove mockups (src/components/mockups/)

---

### scene 4: certification scene (28-33s, frames 840-990)

**file:** `src/scenes/CertificationScene.tsx`

**timing breakdown:**
- frames 840-870 (28-29s): headline "parallel certification" fades in
- frames 870-930 (29-31s): 3x4 grid of test panels appears
- frames 930-960 (31-32s): checkmarks animate across all panels
- frames 960-990 (32-33s): "100% success rate" metric appears

**layout structure:**
```
┌─────┬─────┬─────┬─────┐
│ ui  │ ui  │ ui  │ ui  │
│test │test │test │test │
├─────┼─────┼─────┼─────┤
│ ui  │ ui  │ ui  │ ui  │
│test │test │test │test │
├─────┼─────┼─────┼─────┤
│ ui  │ ui  │ ui  │ ui  │
│test │test │test │test │
└─────┴─────┴─────┴─────┘
```

**key animations:**
- grid fade-in: stagger 10 frames per panel
- checkmark sequence: cascading from top-left to bottom-right
- checkmark spring: `scale: [0, 1.2, 1]` with bounce
- progress bars fill from 0% to 100%

**visual style:**
- navy background with grid pattern
- cyan checkmarks (`text-cyan-400`)
- glassmorphism panels

**editing tips:**
- adjust grid size (line 23: `grid-cols-4`)
- change checkmark timing (line 78: `delay: index * 10`)
- modify success rate (line 145: `to: 100`)

---

### scene 5: self-healing scene (33-37s, frames 990-1110)

**file:** `src/scenes/SelfHealingScene.tsx`

**timing breakdown:**
- frames 990-1020 (33-34s): phase 1 - ui change detected
- frames 1020-1050 (34-35s): phase 2 - analyzing changes
- frames 1050-1080 (35-36s): phase 3 - adapting workflow
- frames 1080-1110 (36-37s): phase 4 - verification complete

**4-phase breakdown:**

**phase 1: detect (frames 990-1020)**
- old ui shown with blue highlight
- "button moved" indicator appears
- red alert icon pulses

**phase 2: analyze (frames 1020-1050)**
- ai brain icon with rotating gears
- scanning animation across ui
- code diff visualization

**phase 3: adapt (frames 1050-1080)**
- new selector generated
- workflow updated animation
- green success indicators

**phase 4: verify (frames 1080-1110)**
- automated test runs
- checkmark confirms success
- "0 downtime" metric displayed

**key animations:**
- phase transitions: `opacity` + `x` translate
- scanning line: horizontal sweep animation
- brain icon: rotating gears inside
- timeline connector: line draws between phases

**visual style:**
- phase colors: red → yellow → blue → green
- timeline layout: horizontal 4-column grid
- glassmorphism cards with borders

**editing tips:**
- adjust phase timing (lines 45-48: frame ranges)
- change phase count (add/remove phases in array)
- modify timeline layout (line 89: `grid-cols-4`)

---

### scene 6: speed race scene (37-43s, frames 1110-1290)

**file:** `src/scenes/SpeedRaceScene.tsx`

**timing breakdown:**
- frames 1110-1140 (37-38s): starting line setup
- frames 1140-1200 (38-40s): agent school completes (2s)
- frames 1200-1290 (40-43s): traditional still loading (45s total)

**visual layout:**
```
┌──────────────────────────────────────┐
│     agent school      vs   traditional│
├──────────────────────────────────────┤
│  ████████████ 2s    |  █░░░░░ 45s    │
│  ✓ complete         |  ... loading   │
└──────────────────────────────────────┘
```

**key animations:**
- progress bar race: different speeds
- agent school: 60 frames (2s) to complete
- traditional: 1350 frames (45s) to complete
- checkmark vs loading spinner
- number ticker for time display

**visual style:**
- left side: cyan progress bar (`bg-cyan-400`)
- right side: gray progress bar (`bg-gray-600`)
- speed comparison: 23x faster badge

**editing tips:**
- adjust completion times (line 67: `agentSchoolDuration`)
- change progress bar colors (line 103: `bg-cyan-400`)
- modify speed multiplier (line 145: `23x faster`)

---

### scene 7: stats scene (43-45s, frames 1290-1350)

**file:** `src/scenes/StatsScene.tsx`

**timing breakdown:**
- frames 1290-1310 (43-43.7s): final metrics fade in
- frames 1310-1330 (43.7-44.3s): numbers animate up
- frames 1330-1350 (44.3-45s): cta button appears

**key metrics:**
- **99.9% accuracy** - animated with NumberTicker
- **23x faster** - compared to traditional automation
- **$0 downtime** - cost savings highlight

**key animations:**
- number ticker: counts from 0 to target value
- metric cards: stagger fade-in with spring
- cta button: glow pulse animation
- background: gradient shift

**visual style:**
- navy gradient background
- cyan accent color for numbers
- large display font (96px)
- glowing cta button

**editing tips:**
- change metrics (lines 34-36: stat values)
- adjust animation speed (line 78: `duration`)
- modify cta text (line 123: button label)

---

## transition system

all scene transitions use **crossfade** with 30-frame overlap:

```typescript
<sequence>
  <sequence.sequence from={0} durationInFrames={150}>
    <introScene />
  </sequence.sequence>
  <sequence.sequence from={120} durationInFrames={240}>
    {/* 30-frame overlap (120-150) creates crossfade */}
    <problemScene />
  </sequence.sequence>
</sequence>
```

**transition timing:**
- intro → problem: frames 120-150 (1s crossfade)
- problem → solution: frames 300-330 (1s crossfade)
- solution → certification: frames 810-840 (1s crossfade)
- certification → self-healing: frames 960-990 (1s crossfade)
- self-healing → speed: frames 1080-1110 (1s crossfade)
- speed → stats: frames 1260-1290 (1s crossfade)

---

## audio sync points (no audio currently)

if adding audio/music in the future:

- **0-4s:** dramatic intro (crescendo)
- **4-11s:** tension (problem music)
- **11-28s:** uplifting (solution showcase)
- **28-37s:** fast-paced (technical demonstration)
- **37-43s:** exciting (speed comparison)
- **43-45s:** triumphant (call-to-action)

---

## frame-by-frame editing guide

### to extend a scene:

1. **open** `src/AgentSchoolShowcase.tsx`
2. **find** the scene's `durationInFrames` prop
3. **increase** the duration (30 frames = 1 second)
4. **adjust** all subsequent scene `from` values

example:
```typescript
// extend solution scene by 3 seconds (90 frames)
<Sequence from={330} durationInFrames={600}> {/* was 510 */}
  <SolutionScene />
</Sequence>
// shift all scenes after by 90 frames
<Sequence from={930} durationInFrames={150}> {/* was 840 */}
  <CertificationScene />
</Sequence>
```

### to add a new scene:

1. **create** new scene file in `src/scenes/`
2. **import** in `src/AgentSchoolShowcase.tsx`
3. **add** `<Sequence>` with frame range
4. **ensure** transitions overlap by 30 frames

### to change timing of animations within a scene:

- find `interpolate()` calls in scene file
- adjust frame ranges in second parameter
- example: `interpolate(frame, [0, 60], [0, 1])` → `[0, 90]` for slower fade

---

## performance considerations

**slowest scenes (render time):**
1. intro scene (particle system): ~15s/frame
2. solution scene (5 mockups + animations): ~8s/frame
3. certification scene (12 panels): ~5s/frame

**optimization tips:**
- reduce particle count in intro (line 15 of IntroSceneV2.tsx)
- disable border-beam animations for faster preview
- use lower quality codec for test renders

---

## common editing tasks

### change scene duration

**location:** `src/AgentSchoolShowcase.tsx`
**lines:** 23-67 (all Sequence components)
**method:** adjust `durationInFrames` prop

### swap scene order

**location:** `src/AgentSchoolShowcase.tsx`
**method:** 
1. reorder `<Sequence>` components
2. recalculate `from` values to maintain flow
3. keep 30-frame overlaps for transitions

### change colors

**location:** individual scene files
**method:** find tailwind classes like `bg-orange-500` and replace

### modify text content

**location:** scene files (look for `<h1>`, `<h2>`, `<p>` tags)
**method:** directly edit text between jsx tags

### adjust animation speed

**location:** scene files
**method:** 
- find `transition={{ duration: 0.5 }}` in framer motion components
- find `interpolate(frame, [0, 60], ...)` ranges
- adjust duration or frame ranges

---

## exporting specific timeline ranges

```bash
# export only solution scene (frames 330-840)
npx remotion render AgentSchoolShowcase out/solution.mp4 --frames=330-840

# export first 15 seconds (frames 0-450)
npx remotion render AgentSchoolShowcase out/first-15s.mp4 --frames=0-450

# export last 5 seconds (frames 1200-1350)
npx remotion render AgentSchoolShowcase out/last-5s.mp4 --frames=1200-1350
```

---

## frame-accurate editing reference

**frame to time conversion:**
- 30 frames = 1 second
- 1 frame = 0.033 seconds
- to convert seconds to frames: `seconds * 30`
- to convert frames to seconds: `frames / 30`

**quick reference table:**

| seconds | frames |
|---------|--------|
| 0.5s    | 15     |
| 1s      | 30     |
| 2s      | 60     |
| 3s      | 90     |
| 5s      | 150    |
| 10s     | 300    |
| 15s     | 450    |
| 30s     | 900    |
| 45s     | 1350   |

---

this timeline documentation provides frame-accurate reference for any future edits to the agent school video.
