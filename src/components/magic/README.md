# Magic UI Components

This directory contains animated components from [Magic UI](https://magicui.design) adapted for the Agent School website redesign.

## Components

### 1. HyperText
**File:** `HyperText.tsx`

Animated text scramble effect that reveals text character by character.

**Usage:**
```tsx
import { HyperText } from "@/components/magic/HyperText";

<HyperText
  className="text-6xl font-display font-bold text-teal-600"
  duration={1000}
  animateOnHover={true}
>
  Turn Human Knowledge Into AI
</HyperText>
```

**Props:**
- `children` (string, required) - Text content to animate
- `className` (string) - Custom CSS classes
- `duration` (number) - Animation duration in milliseconds (default: 800)
- `delay` (number) - Delay before animation starts in ms (default: 0)
- `startOnView` (boolean) - Start animation when element is in view (default: false)
- `animateOnHover` (boolean) - Trigger animation on hover (default: true)
- `characterSet` (string[]) - Custom character set for scramble (default: A-Z)

**Use Case:** Hero headline, section headings, call-to-action text

---

### 2. NumberTicker
**File:** `NumberTicker.tsx`

Animated number counter with smooth spring animation.

**Usage:**
```tsx
import { NumberTicker } from "@/components/magic/NumberTicker";

<NumberTicker
  value={100}
  className="text-5xl font-bold text-orange-500"
  decimalPlaces={0}
/>
```

**Props:**
- `value` (number, required) - Target number to count to
- `startValue` (number) - Starting number (default: 0)
- `direction` ("up" | "down") - Count direction (default: "up")
- `delay` (number) - Delay before counting in seconds (default: 0)
- `decimalPlaces` (number) - Number of decimal places (default: 0)
- `className` (string) - Custom CSS classes

**Use Case:** Metrics, statistics, ROI calculator results, feature numbers

---

### 3. AnimatedList
**File:** `AnimatedList.tsx`

Animated list that displays items sequentially with spring animations.

**Usage:**
```tsx
import { AnimatedList } from "@/components/magic/AnimatedList";

<AnimatedList delay={1000} className="flex flex-col gap-4">
  <div key="item-1">First Item</div>
  <div key="item-2">Second Item</div>
  <div key="item-3">Third Item</div>
</AnimatedList>
```

**Props:**
- `children` (ReactNode, required) - List items (must have unique keys)
- `delay` (number) - Delay between items in milliseconds (default: 1000)
- `className` (string) - Custom CSS classes

**Use Case:** Feature lists, testimonials, notification feeds, task lists

---

## Design System Integration

All components support the **Cyber Citrus** color palette:

**Teal (Primary):**
- `text-teal-600` - Primary brand text
- `bg-teal-600` - Primary background
- `from-teal-600 to-teal-900` - Gradient

**Orange (Accent):**
- `text-orange-500` - Accent text
- `bg-orange-500` - Accent background
- `from-orange-500 to-orange-600` - Gradient

**Dark Mode:**
All components automatically support dark mode via Tailwind's `dark:` prefix.

---

## Dependencies

- **Framer Motion 12** - Animation library (already installed)
- **React 19** - UI framework
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4** - Styling

No additional dependencies required.

---

## Source

Components adapted from [Magic UI](https://magicui.design) - MIT License
- HyperText: https://magicui.design/docs/components/hyper-text
- NumberTicker: https://magicui.design/docs/components/number-ticker
- AnimatedList: https://magicui.design/docs/components/animated-list

**Modifications:**
- Changed imports from `motion/react` to `framer-motion` for compatibility
- Simplified HyperText to use `motion.div` instead of `motion.create`
- Updated formatting to match Agent School code style (2-space indent, double quotes)
- Added TypeScript type annotations for better type safety
