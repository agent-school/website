# Magic UI Component Examples

Example implementations for the Agent School website redesign.

## Hero Section - HyperText

**Use Case:** Futuristic animated headline

```tsx
import { HyperText } from "@/components/magic/HyperText";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="text-center">
        <HyperText
          className="text-6xl md:text-8xl font-display font-bold bg-gradient-to-br from-teal-400 to-orange-500 bg-clip-text text-transparent"
          duration={1200}
          startOnView={true}
          animateOnHover={false}
        >
          Turn Human Knowledge Into AI
        </HyperText>
        <p className="mt-6 text-xl text-slate-400">
          That Never Forgets
        </p>
      </div>
    </section>
  );
}
```

---

## Stats Section - NumberTicker

**Use Case:** Animated metrics/statistics

```tsx
import { NumberTicker } from "@/components/magic/NumberTicker";

export function Stats() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <NumberTicker
            value={10000}
            className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent"
          />
          <p className="mt-4 text-slate-400">Hours Saved</p>
        </div>

        <div className="text-center">
          <NumberTicker
            value={95}
            className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          />
          <span className="text-6xl font-bold text-orange-400">%</span>
          <p className="mt-4 text-slate-400">Accuracy Rate</p>
        </div>

        <div className="text-center">
          <NumberTicker
            value={2.5}
            decimalPlaces={1}
            className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text text-transparent"
          />
          <span className="text-6xl font-bold text-teal-400">x</span>
          <p className="mt-4 text-slate-400">Faster Workflows</p>
        </div>
      </div>
    </section>
  );
}
```

---

## Features List - AnimatedList

**Use Case:** Sequential feature reveal

```tsx
import { AnimatedList } from "@/components/magic/AnimatedList";
import { Check } from "lucide-react";

export function Features() {
  const features = [
    "Teach agents your workflow once",
    "Automate repetitive tasks forever",
    "Self-healing code that adapts",
    "Certification for reliability",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-display font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text text-transparent">
          Features
        </h2>

        <AnimatedList delay={500} className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="flex items-center gap-4 p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-xl text-slate-200">{feature}</p>
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
```

---

## ROI Calculator - NumberTicker

**Use Case:** Dynamic calculation results

```tsx
"use client";

import { useState } from "react";
import { NumberTicker } from "@/components/magic/NumberTicker";

export function ROICalculator() {
  const [hours, setHours] = useState(10);
  const savedHours = hours * 52; // weeks per year
  const savedCost = savedHours * 50; // $50/hour

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-white">
          Calculate Your ROI
        </h2>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <label className="block text-slate-300 mb-4">
            Hours spent on repetitive tasks per week:
          </label>
          <input
            type="range"
            min="1"
            max="40"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-center text-3xl font-bold text-teal-400 mt-4">
            {hours} hours/week
          </p>

          <div className="mt-12 p-6 bg-gradient-to-br from-teal-900/30 to-orange-900/30 rounded-xl border border-teal-500/20">
            <p className="text-slate-400 mb-2">Annual time saved:</p>
            <div className="flex items-baseline gap-2">
              <NumberTicker
                value={savedHours}
                className="text-5xl font-bold text-teal-400"
              />
              <span className="text-2xl text-slate-400">hours</span>
            </div>

            <p className="text-slate-400 mb-2 mt-6">Annual cost saved:</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl text-orange-400">$</span>
              <NumberTicker
                value={savedCost}
                className="text-5xl font-bold text-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Notification Feed - AnimatedList

**Use Case:** Real-time activity feed

```tsx
import { AnimatedList } from "@/components/magic/AnimatedList";

export function ActivityFeed() {
  const activities = [
    { icon: "🤖", text: "Agent certified: Hotel PMS Booking", time: "2m ago" },
    { icon: "✅", text: "Self-test passed: 100% success rate", time: "5m ago" },
    { icon: "🔧", text: "Agent healed: Fixed API timeout issue", time: "12m ago" },
    { icon: "📊", text: "Weekly report: 500 tasks automated", time: "1h ago" },
  ];

  return (
    <div className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
      <h3 className="text-xl font-bold text-white mb-6">Live Activity</h3>

      <AnimatedList delay={800} className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={`activity-${index}`}
            className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-700"
          >
            <span className="text-2xl">{activity.icon}</span>
            <div className="flex-1">
              <p className="text-sm text-slate-200">{activity.text}</p>
              <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  );
}
```

---

## Color Palette Reference

**Teal (Primary):**
```css
from-teal-400 to-teal-600   /* Gradient text */
bg-teal-500                  /* Solid background */
border-teal-500              /* Borders */
text-teal-400                /* Light text */
```

**Orange (Accent):**
```css
from-orange-400 to-orange-600  /* Gradient text */
bg-orange-500                   /* Solid background */
border-orange-500               /* Borders */
text-orange-400                 /* Light text */
```

**Slate (Neutrals):**
```css
bg-slate-950                 /* Darkest background */
bg-slate-900                 /* Dark background */
bg-slate-800                 /* Medium dark */
text-slate-400               /* Body text */
text-slate-200               /* Light text */
border-slate-700             /* Borders */
```

---

## Best Practices

1. **HyperText:**
   - Use `startOnView={true}` for headlines that appear on scroll
   - Use `animateOnHover={true}` for interactive CTAs
   - Keep text short (1-2 lines) for best effect

2. **NumberTicker:**
   - Always animate on scroll (component uses `useInView` by default)
   - Use `decimalPlaces` for percentages and currency
   - Pair with labels/units for context

3. **AnimatedList:**
   - Always provide unique `key` props to children
   - Use `delay={500-1000}` for optimal reveal timing
   - Limit to 5-8 items for best UX
   - Works great with card layouts

---

## Performance Tips

- All components use Framer Motion's optimized animations
- `AnimatePresence` minimizes layout shifts
- `useInView` prevents off-screen animations
- Spring animations use GPU acceleration
- No additional bundle size impact (Framer Motion already included)
