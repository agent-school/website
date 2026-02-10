# animation system reference

complete guide to all animations in the remotion video project - how they work, how to edit them, and how to create new ones.

## animation stack overview

the video uses **3 layered animation systems:**

1. **remotion core** - frame-based interpolation
2. **framer motion** - react animation library
3. **custom components** - magic ui animation components

---

## 1. remotion core animations

### frame-based system

remotion provides frame-accurate control through the `useCurrentFrame()` hook:

```typescript
import { useCurrentFrame, interpolate } from "remotion";

const frame = useCurrentFrame();  // current frame number (0-1350)
const opacity = interpolate(frame, [0, 30], [0, 1]);  // fade in over 30 frames
```

### `interpolate()` function

**purpose:** map frame ranges to value ranges

**signature:**
```typescript
interpolate(
  input: number,           // current frame
  inputRange: [number, number],  // frame range [start, end]
  outputRange: [number, number], // value range [start, end]
  options?: {
    extrapolateLeft?: "clamp" | "extend" | "identity",
    extrapolateRight?: "clamp" | "extend" | "identity",
    easing?: (t: number) => number
  }
)
```

**examples:**

```typescript
// fade in: frames 0-30, opacity 0→1
const opacity = interpolate(frame, [0, 30], [0, 1]);

// slide in: frames 0-60, x position -100→0
const x = interpolate(frame, [0, 60], [-100, 0]);

// scale up: frames 10-40, scale 0.5→1
const scale = interpolate(frame, [10, 40], [0.5, 1]);

// rotate: frames 0-90, 0deg→360deg
const rotate = interpolate(frame, [0, 90], [0, 360]);
```

**extrapolation modes:**

```typescript
// clamp: stays at boundary values
interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: "clamp" })
// frame -10 → 0 (clamped)
// frame 40 → 1 (clamped)

// extend: continues beyond boundaries
interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "extend" })
// frame 60 → 2 (extended linearly)

// identity: returns input value
interpolate(frame, [0, 30], [0, 1], { extrapolateLeft: "identity" })
// frame -10 → -10 (returns input)
```

**easing functions:**

```typescript
import { Easing } from "remotion";

// ease in-out (smooth start and end)
interpolate(frame, [0, 30], [0, 1], {
  easing: Easing.bezier(0.25, 0.1, 0.25, 1)
});

// ease in (slow start)
interpolate(frame, [0, 30], [0, 1], {
  easing: Easing.in(Easing.ease)
});

// ease out (slow end)
interpolate(frame, [0, 30], [0, 1], {
  easing: Easing.out(Easing.ease)
});
```

### `spring()` function

**purpose:** physics-based spring animations

**signature:**
```typescript
spring({
  frame: number,                // current frame (relative to start)
  fps: number,                  // frames per second (default: 30)
  from?: number,                // start value (default: 0)
  to?: number,                  // end value (default: 1)
  config?: {
    damping?: number,           // spring damping (default: 10)
    mass?: number,              // spring mass (default: 1)
    stiffness?: number,         // spring stiffness (default: 100)
    overshootClamping?: boolean // prevent overshoot (default: false)
  }
})
```

**examples:**

```typescript
import { spring } from "remotion";

// bouncy scale animation
const scale = spring({
  frame: frame - 30,  // start at frame 30
  fps: 30,
  from: 0,
  to: 1,
  config: {
    damping: 8,      // lower = more bouncy
    stiffness: 120,  // higher = faster
  }
});

// smooth scale (no bounce)
const scale = spring({
  frame,
  config: {
    damping: 100,     // high damping = no overshoot
    stiffness: 200,
  }
});
```

**spring presets:**

```typescript
// gentle spring
config: { damping: 20, stiffness: 100 }

// bouncy spring
config: { damping: 5, stiffness: 150 }

// snappy spring
config: { damping: 30, stiffness: 300 }

// wobbly spring
config: { damping: 2, stiffness: 80 }
```

### usage in project

**intro scene - particle motion:**
```typescript
const frame = useCurrentFrame();
const progress = interpolate(frame, [0, 120], [0, 1]);

// particle moves outward from center
const distance = 300;
const x = Math.cos(angle) * distance * progress;
const y = Math.sin(angle) * distance * progress;
```

**intro scene - logo scale:**
```typescript
const scale = spring({
  frame: frame - 30,
  from: 0,
  to: 1,
  config: { damping: 10, stiffness: 100 }
});
```

**problem scene - fade transitions:**
```typescript
const leftOpacity = interpolate(frame, [0, 30], [0, 1]);
const rightOpacity = interpolate(frame, [60, 90], [0, 1]);
```

---

## 2. framer motion animations

### motion components

framer motion wraps html elements with animation capabilities:

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  content
</motion.div>
```

### animation props

**`initial`** - starting state:
```typescript
initial={{ opacity: 0, scale: 0.8, y: 20 }}
```

**`animate`** - end state:
```typescript
animate={{ opacity: 1, scale: 1, y: 0 }}
```

**`transition`** - animation config:
```typescript
transition={{
  duration: 0.5,        // seconds
  ease: "easeOut",      // easing curve
  delay: 0.2,           // delay before start
  type: "spring",       // animation type
  stiffness: 100,       // spring stiffness
  damping: 10,          // spring damping
}}
```

### variants system

**purpose:** reusable animation definitions

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>
```

### stagger animations

**purpose:** animate children with delays

```typescript
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1  // 0.1s delay between children
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>item 1</motion.div>
  <motion.div variants={itemVariants}>item 2</motion.div>
  <motion.div variants={itemVariants}>item 3</motion.div>
</motion.div>
```

### hover & tap interactions

```typescript
<motion.div
  whileHover={{
    scale: 1.05,
    y: -8,
    transition: { duration: 0.2 }
  }}
  whileTap={{
    scale: 0.95
  }}
>
  hover me
</motion.div>
```

### layout animations

**purpose:** smooth layout changes

```typescript
<motion.div layout>
  {/* content that changes size/position */}
</motion.div>
```

### usage in project

**solution scene - mockup stagger:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 2,  // 2s between mockups
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
      damping: 15,
      stiffness: 100
    }
  }
};
```

**certification scene - checkmark cascade:**
```typescript
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: [0, 1.2, 1] }}
  transition={{
    delay: index * 0.05,  // stagger by index
    duration: 0.4,
    ease: "easeOut"
  }}
>
  <checkIcon />
</motion.div>
```

**stats scene - glow pulse:**
```typescript
<motion.div
  animate={{
    boxShadow: [
      "0 0 20px rgba(6, 182, 212, 0.3)",
      "0 0 40px rgba(6, 182, 212, 0.6)",
      "0 0 20px rgba(6, 182, 212, 0.3)"
    ]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  glowing element
</motion.div>
```

---

## 3. magic ui animation components

custom reusable animation components in `src/components/magic-ui/`.

### particles.tsx

**purpose:** particle explosion effect

**usage:**
```typescript
<Particles
  count={1000}           // number of particles
  size={4}               // particle size (px)
  color="#FE9F4D"        // particle color
  speed={1}              // animation speed multiplier
  spread={300}           // explosion radius (px)
/>
```

**animation logic:**
```typescript
// each particle:
const angle = (Math.PI * 2 * i) / count;  // evenly distributed angles
const distance = spread * progress;        // distance increases over time
const x = centerX + Math.cos(angle) * distance;
const y = centerY + Math.sin(angle) * distance;
const opacity = 1 - progress;              // fade out as they spread
```

**customization:**
- **more particles:** increase `count` (warning: cpu intensive)
- **faster explosion:** increase `speed`
- **larger spread:** increase `spread`
- **different pattern:** modify angle calculation

**performance notes:**
- 1000 particles: ~15s/frame render time
- 500 particles: ~8s/frame
- 200 particles: ~3s/frame

---

### border-beam.tsx

**purpose:** rotating gradient border animation

**usage:**
```typescript
<div className="relative rounded-2xl border border-gray-200">
  <BorderBeam
    duration={3}              // rotation duration (seconds)
    size={200}                // beam size (px)
    colorFrom="#FE9F4D"       // gradient start color
    colorTo="#FF6B6B"         // gradient end color
    borderWidth={2}           // border thickness (px)
  />
  content
</div>
```

**animation logic:**
```typescript
const frame = useCurrentFrame();
const fps = 30;
const rotation = (frame / (duration * fps)) * 360;  // degrees

// rotating gradient that follows border
background: `conic-gradient(
  from ${rotation}deg,
  ${colorFrom},
  ${colorTo},
  transparent 70%
)`
```

**customization:**
- **faster rotation:** decrease `duration`
- **thicker beam:** increase `borderWidth`
- **different colors:** change `colorFrom`/`colorTo`
- **beam length:** adjust `transparent` percentage

**used in:**
- solution scene: 5 mockup borders (different colors each)

---

### number-ticker.tsx

**purpose:** animated counting number (odometer effect)

**usage:**
```typescript
<NumberTicker
  value={99.9}              // target number
  delay={0.5}               // start delay (seconds)
  direction="up"            // "up" or "down"
  decimalPlaces={1}         // decimal precision
  className="text-6xl"
/>
```

**animation logic:**
```typescript
const motionValue = useMotionValue(0);
const display = useTransform(motionValue, latest =>
  latest.toFixed(decimalPlaces)
);

useEffect(() => {
  const timeout = setTimeout(() => {
    animate(motionValue, value, {
      duration: 2,
      ease: "easeOut"
    });
  }, delay * 1000);
  return () => clearTimeout(timeout);
}, []);
```

**customization:**
- **faster count:** decrease `duration` in animate
- **different easing:** change `ease` ("linear", "easeIn", etc.)
- **count backwards:** set `direction="down"` + reverse values

**used in:**
- stats scene: 99.9%, 23x, $0
- speed scene: 2s, 45s timers
- problem scene: cost counter

---

### animated-beam.tsx

**purpose:** animated line connecting two elements

**usage:**
```typescript
const fromRef = useRef<HTMLDivElement>(null);
const toRef = useRef<HTMLDivElement>(null);

<div ref={fromRef}>start point</div>
<AnimatedBeam
  fromRef={fromRef}
  toRef={toRef}
  duration={2}
  curvature={0.3}      // bezier curve amount (0-1)
  color="#FE9F4D"
  width={2}            // line thickness
/>
<div ref={toRef}>end point</div>
```

**animation logic:**
```typescript
// calculate positions from refs
const fromRect = fromRef.current?.getBoundingClientRect();
const toRect = toRef.current?.getBoundingClientRect();

// create svg path with bezier curve
const controlX = (fromX + toX) / 2;
const controlY = fromY + curvature * Math.abs(toY - fromY);
const path = `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;

// animate stroke-dashoffset for drawing effect
<motion.path
  d={path}
  strokeDasharray={pathLength}
  strokeDashoffset={pathLength}
  animate={{ strokeDashoffset: 0 }}
  transition={{ duration }}
/>
```

**customization:**
- **straighter line:** reduce `curvature`
- **faster draw:** decrease `duration`
- **dashed line:** set `strokeDasharray="5 5"`

**currently:** unused (available for future features)

---

### typing-animation.tsx

**purpose:** typewriter text effect

**usage:**
```typescript
<TypingAnimation
  text="teach once, automate forever"
  duration={2}              // total typing duration (seconds)
  cursor={true}             // show blinking cursor
  className="text-4xl"
/>
```

**animation logic:**
```typescript
const [displayText, setDisplayText] = useState("");
const charDuration = (duration * 1000) / text.length;

useEffect(() => {
  let charIndex = 0;
  const interval = setInterval(() => {
    if (charIndex < text.length) {
      setDisplayText(text.slice(0, charIndex + 1));
      charIndex++;
    } else {
      clearInterval(interval);
    }
  }, charDuration);
  return () => clearInterval(interval);
}, []);
```

**customization:**
- **faster typing:** decrease `duration`
- **no cursor:** set `cursor={false}`
- **random speed:** add `Math.random()` to `charDuration`

**currently:** unused (available for future features)

---

## combining animation systems

**remotion + framer motion:**

```typescript
const frame = useCurrentFrame();
const progress = interpolate(frame, [0, 60], [0, 1]);

<motion.div
  style={{ opacity: progress }}  // remotion controls opacity
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}         // framer controls scale
  transition={{ duration: 0.5 }}
/>
```

**remotion + spring + framer motion:**

```typescript
const frame = useCurrentFrame();
const scale = spring({ frame, config: { damping: 10 } });

<motion.div
  style={{ scale }}              // remotion spring
  whileHover={{ y: -8 }}         // framer hover
/>
```

---

## animation timing strategies

### 1. frame-based timing (remotion)

**use when:**
- need exact frame control
- synchronizing with other scenes
- linear/calculated animations

**example:**
```typescript
// fade in from frame 30 to 60
const opacity = interpolate(frame, [30, 60], [0, 1]);
```

### 2. duration-based timing (framer motion)

**use when:**
- relative timing (doesn't matter exact frame)
- interactive animations (hover, tap)
- spring physics

**example:**
```typescript
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}  // 0.5 seconds (15 frames @ 30fps)
/>
```

### 3. hybrid approach (best of both)

```typescript
const frame = useCurrentFrame();
const shouldAnimate = frame > 60;  // remotion triggers at frame 60

<motion.div
  animate={shouldAnimate ? "visible" : "hidden"}  // framer animates
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }}
/>
```

---

## animation performance optimization

### reduce calculations

**bad:**
```typescript
{particles.map((p, i) => {
  const angle = (Math.PI * 2 * i) / particles.length;  // recalculated every frame
  const x = Math.cos(angle) * distance * progress;
  ...
})}
```

**good:**
```typescript
const particleData = useMemo(() =>
  particles.map((p, i) => {
    const angle = (Math.PI * 2 * i) / particles.length;  // calculated once
    return { angle };
  }), [particles]
);

{particleData.map(({ angle }, i) => {
  const x = Math.cos(angle) * distance * progress;
  ...
})}
```

### limit animated elements

- **intro particles:** 1000 particles = slow, 200 = fast
- **certification grid:** 12 panels ok, 50 panels = slow
- **solution mockups:** 5 is optimal, 10+ = slow

### use `will-change` css

```typescript
<div style={{ willChange: "transform, opacity" }}>
  {/* frequently animated content */}
</div>
```

### disable animations for preview

```typescript
const PREVIEW_MODE = false;  // toggle for faster preview

{PREVIEW_MODE ? (
  <div style={{ opacity: 1 }}>content</div>
) : (
  <motion.div animate={{ opacity: 1 }}>content</motion.div>
)}
```

---

## animation debugging

### visualize interpolation

```typescript
const value = interpolate(frame, [0, 60], [0, 100]);
console.log(`frame ${frame}: value = ${value}`);
```

### check spring values

```typescript
const scale = spring({ frame, config: { damping: 10 } });
console.log(`frame ${frame}: scale = ${scale}`);
```

### remotion studio timeline

- use timeline scrubber to preview animations
- pause at specific frames to debug
- adjust playback speed (0.25x, 0.5x, 1x, 2x)

---

## creating new animations

### step 1: choose animation system

- **remotion:** frame-accurate timing needed
- **framer motion:** duration-based or interactive
- **custom component:** reusable complex animation

### step 2: define animation parameters

```typescript
// remotion
const startFrame = 30;
const endFrame = 90;
const value = interpolate(frame, [startFrame, endFrame], [0, 1]);

// framer motion
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
```

### step 3: apply to elements

```typescript
// remotion
<div style={{ opacity: value, transform: `translateY(${value * 20}px)` }}>
  content
</div>

// framer motion
<motion.div variants={variants} initial="hidden" animate="visible">
  content
</motion.div>
```

### step 4: test and refine

- preview in remotion studio
- adjust timing parameters
- test at different frame ranges

---

## animation presets library

### fade in

```typescript
// remotion
const opacity = interpolate(frame, [0, 30], [0, 1]);

// framer motion
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}
```

### slide up

```typescript
// remotion
const y = interpolate(frame, [0, 30], [40, 0]);

// framer motion
initial={{ y: 40, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5 }}
```

### scale in

```typescript
// remotion
const scale = spring({ frame, from: 0, to: 1 });

// framer motion
initial={{ scale: 0 }}
animate={{ scale: 1 }}
transition={{ type: "spring", damping: 10 }}
```

### rotate

```typescript
// remotion
const rotate = interpolate(frame, [0, 90], [0, 360]);

// framer motion
animate={{ rotate: 360 }}
transition={{ duration: 1, ease: "linear" }}
```

### pulse glow

```typescript
// framer motion only
animate={{
  boxShadow: [
    "0 0 20px rgba(255, 159, 77, 0.3)",
    "0 0 40px rgba(255, 159, 77, 0.6)",
    "0 0 20px rgba(255, 159, 77, 0.3)"
  ]
}}
transition={{
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

---

## animation math reference

### easing curves

```typescript
// linear: constant speed
t => t

// ease-in: slow start
t => t * t

// ease-out: slow end
t => t * (2 - t)

// ease-in-out: slow start and end
t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

// cubic bezier: custom curve
bezier(0.25, 0.1, 0.25, 1)
```

### spring physics

```typescript
// damping controls bounce
damping = 1   // critical (no oscillation)
damping < 1   // underdamped (bouncy)
damping > 1   // overdamped (slow)

// stiffness controls speed
stiffness = 100   // gentle
stiffness = 200   // normal
stiffness = 400   // snappy
```

### circular motion

```typescript
const angle = (frame / 90) * Math.PI * 2;  // full circle in 90 frames
const radius = 100;
const x = Math.cos(angle) * radius;
const y = Math.sin(angle) * radius;
```

---

this animation documentation provides complete understanding of how all animations work in the video project.
