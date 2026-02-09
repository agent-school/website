# Design System

Visual design guidelines for the Agent School video.

---

## Brand Colors

### Primary Palette
```css
Navy:   #0A2540  /* Primary dark background */
Orange: #FE9F4D  /* Accent, CTAs, highlights */
Purple: #6631D7  /* Secondary brand color */
Cream:  #FAF9F7  /* Light backgrounds (unused in video) */
```

### Extended Palette (Scene-Specific)
```css
Cyan:    #06B6D4  /* Stats, speed metrics */
Green:   #10B981  /* Success states, banking theme */
Red:     #EF4444  /* Errors, slow AI comparison */
Yellow:  #F59E0B  /* Warnings, scanning phase */
Blue:    #3B82F6  /* Self-healing match phase */
Magenta: #D946EF  /* Healthcare theme */
```

---

## Software-Specific Colors

Each software mockup has a unique color identity:

| Software | Primary | Light | Border | Glow |
|----------|---------|-------|--------|------|
| **E-commerce** | `#FF9800` | `#FFE0B2` | `#F57C00` | `rgba(255,152,0,0.3)` |
| **CRM** | `#00A1E0` | `#B3E5FC` | `#0288D1` | `rgba(0,161,224,0.3)` |
| **Hotel PMS** | `#6631D7` | `#E1BEE7` | `#9C27B0` | `rgba(102,49,215,0.3)` |
| **Banking** | `#10B981` | `#A7F3D0` | `#059669` | `rgba(16,185,129,0.3)` |
| **Healthcare** | `#D946EF` | `#F3E8FF` | `#A855F7` | `rgba(217,70,239,0.3)` |

---

## Typography

### Font Families
```css
Display: Fraunces (serif)      /* Headings, logos */
Body:    DM Sans (sans-serif)  /* Body text, UI elements */
Mono:    JetBrains Mono        /* Code, data, numbers */
```

### Font Sizes (Remotion Scale)
```css
/* Display */
text-7xl:  72px  /* Main titles */
text-6xl:  60px  /* Scene titles */
text-5xl:  48px  /* Section titles */

/* Headings */
text-4xl:  36px  /* Card titles */
text-3xl:  30px  /* Subsections */
text-2xl:  24px  /* Large body */
text-xl:   20px  /* Emphasized text */

/* Body */
text-lg:   18px  /* Large body */
text-base: 16px  /* Default body */
text-sm:   14px  /* Small body */
text-xs:   12px  /* Captions, labels */
```

### Font Weights
```css
font-bold:   700  /* Headings, emphasis */
font-medium: 500  /* Subheadings */
font-normal: 400  /* Body text */
```

---

## Glassmorphism

Each software type has a unique glassmorphism treatment:

### Formula
```css
background: linear-gradient(135deg, rgba(COLOR, 0.06), rgba(COLOR, 0.03));
backdrop-filter: blur(12px);
border: 1px solid rgba(COLOR, 0.2);
```

### Utility Classes
```css
.glassmorphism-orange   /* E-commerce */
.glassmorphism-blue     /* CRM */
.glassmorphism-purple   /* Hotel PMS */
.glassmorphism-green    /* Banking */
.glassmorphism-magenta  /* Healthcare */
```

### Usage
```tsx
<div className="glassmorphism-orange border border-orange-200 rounded-lg p-4">
  {/* E-commerce content */}
</div>
```

---

## BorderBeam Effect

Animated glowing border that runs around card edges.

### Properties
```tsx
<BorderBeam
  size={250}                  // Beam travel distance
  duration={12}               // Animation duration (seconds)
  colorFrom="#FF9800"         // Start color
  colorTo="#F57C00"           // End color
/>
```

### Usage Pattern
```tsx
<div className="relative overflow-hidden">
  <BorderBeam size={250} duration={12} colorFrom="#FF9800" colorTo="#F57C00" />
  {/* Card content */}
</div>
```

### When to Use
- ✅ Software type cards (Solution scene)
- ✅ Stat cards (Stats scene)
- ✅ Certification badge
- ✅ CTA button
- ❌ Every single element (too busy)

---

## Animation Principles

### Spring Animations
Physics-based natural motion:

```tsx
const scale = spring({
  frame: localFrame - delay,
  fps,
  config: {
    damping: 15,    // Higher = less bouncy (10-20 typical)
    stiffness: 200  // Higher = faster (100-300 typical)
  }
});
```

**Guidelines:**
- **Damping 10-12**: Bouncy, playful
- **Damping 15-18**: Balanced, professional
- **Damping 20+**: Minimal bounce, corporate

- **Stiffness 100-150**: Slow, deliberate
- **Stiffness 200-250**: Medium, natural
- **Stiffness 300+**: Fast, snappy

### Interpolate
Linear value transitions:

```tsx
const opacity = interpolate(
  localFrame,
  [0, 20],        // Input range (frames)
  [0, 1],         // Output range (values)
  { extrapolateRight: "clamp" }  // Don't exceed output range
);
```

**Use For:**
- Opacity fades (0 → 1)
- Position (translateY: 30 → 0)
- Progress bars (0% → 100%)
- Color transitions

### Stagger Delays
Sequential reveals for multiple items:

```tsx
const getCardDelay = (index: number) => 30 + index * 8;

// Card 0: frame 30
// Card 1: frame 38
// Card 2: frame 46
// ...
```

**Guidelines:**
- **8-12 frames**: Natural flow
- **5-7 frames**: Fast-paced
- **15-20 frames**: Deliberate

---

## Layout Patterns

### Bento Grid (Solution Scene)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
}

/* Card sizes */
.col-span-1  /* 1 column wide */
.col-span-2  /* 2 columns wide */
.row-span-1  /* 1 row tall */
.row-span-2  /* 2 rows tall */
```

### Split-Screen
```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
```

### Card Grid (Certification)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

---

## Shadows & Glows

### Box Shadows
```css
/* Soft elevation */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Medium elevation */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Dramatic elevation */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### Color Glows
```css
/* Orange glow */
box-shadow: 0 0 30px rgba(255, 152, 0, 0.3);

/* Green glow */
box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);

/* Purple glow */
box-shadow: 0 0 30px rgba(102, 49, 215, 0.3);
```

---

## Gradients

### Background Gradients
```css
/* Navy → Purple */
background: linear-gradient(135deg, #0A2540, #6631D7);

/* Orange → Red */
background: linear-gradient(135deg, #FE9F4D, #F97316);

/* Green → Emerald */
background: linear-gradient(135deg, #10B981, #059669);
```

### Text Gradients
```tsx
<span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
  Highlighted Text
</span>
```

---

## Spacing Scale

```css
0.5 → 2px
1   → 4px
2   → 8px
3   → 12px
4   → 16px
5   → 20px
6   → 24px
8   → 32px
10  → 40px
12  → 48px
16  → 64px
20  → 80px
24  → 96px
```

**Common Patterns:**
- Card padding: `p-6` (24px)
- Card gap: `gap-4` (16px)
- Scene padding: `px-6` (horizontal 24px)
- Section margin: `mb-8` (32px)

---

## Border Radius

```css
rounded-sm   → 2px   /* Small elements */
rounded      → 4px   /* Default */
rounded-md   → 6px   /* Buttons */
rounded-lg   → 8px   /* Cards */
rounded-xl   → 12px  /* Large cards */
rounded-2xl  → 16px  /* Panels */
rounded-full → 9999px /* Circles, pills */
```

---

## Responsive Breakpoints (Not Used)

Video is fixed at 1920x1080, but for reference:

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## Accessibility Notes

### Text Contrast
- White text on navy: ✅ WCAG AAA
- Orange on white: ✅ WCAG AA
- Gray on cream: ✅ WCAG AA

### Animation Duration
- Min duration: 0.2s (quick interactions)
- Max duration: 2s (major scene transitions)
- Most animations: 0.3-0.8s

### Motion
- All animations use `prefers-reduced-motion` safe defaults
- Spring animations automatically respect user preferences

---

## Design Tokens (Tailwind Config)

Located in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E6EEF5",
          // ...
          900: "#0A2540",
        },
        amber: {
          // ...
          500: "#FE9F4D",
        },
        // ... more colors
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
};
```

---

**Next**: Learn about [Components →](./04-components-guide.md)
