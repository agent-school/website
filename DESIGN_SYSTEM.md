# Design System — Agent School

> **"Cyber Citrus"** — A modern design system built on teal-orange gradients with comprehensive dark mode support. Inspired by delve.co's sophisticated aesthetic.

## Overview

The Agent School design system ("Cyber Citrus") replaces the previous navy/amber/cream palette with a vibrant, modern teal-orange gradient system. The design philosophy centers on:

- **Teal** (`#14b8a6` to `#134e4a`) — Primary brand color representing technology, automation, and trust
- **Orange** (`#fb923c` to `#ea580c`) — Accent color for CTAs, highlights, and energy
- **Gradients** — Smooth teal-to-orange transitions for hero sections, cards, and interactive elements
- **Dark Mode First** — Comprehensive dark mode with auto-detection and manual toggle
- **Glassmorphism** — Frosted glass effects with subtle backdrop blur
- **Depth & Glow** — Layered shadows and colored glows for dimensionality

**Aesthetic References:**
- delve.co — gradient sophistication, dark mode elegance
- Modern SaaS — Vercel, Linear, Stripe
- Premium fintech — Mercury, Ramp

---

## Color System

### Teal Palette (Primary Brand)

| Token | Hex | Usage |
|-------|-----|-------|
| `teal-50` | `#f0fdfa` | Light backgrounds, hover states |
| `teal-100` | `#ccfbf1` | Subtle accents, badges |
| `teal-200` | `#99f6e4` | Light borders, dividers |
| `teal-300` | `#5eead4` | Interactive states, highlights |
| `teal-400` | `#2dd4bf` | Icons, secondary buttons |
| `teal-500` | `#14b8a6` | **Primary brand color**, primary buttons |
| `teal-600` | `#0d9488` | Button hover, active states |
| `teal-700` | `#0f766e` | Text on light backgrounds |
| `teal-800` | `#115e59` | Headings, strong emphasis |
| `teal-900` | `#134e4a` | Dark text, footer backgrounds |
| `teal-950` | `#042f2e` | Deepest brand color, dark mode backgrounds |

### Orange Palette (Accent)

| Token | Hex | Usage |
|-------|-----|-------|
| `orange-50` | `#fff7ed` | Light backgrounds, alerts |
| `orange-100` | `#ffedd5` | Badge backgrounds, highlights |
| `orange-200` | `#fed7aa` | Light borders, dividers |
| `orange-300` | `#fdba74` | Interactive accents |
| `orange-400` | `#fb923c` | **Primary accent**, CTAs |
| `orange-500` | `#f97316` | CTA hover, emphasis |
| `orange-600` | `#ea580c` | Strong CTAs, active states |
| `orange-700` | `#c2410c` | Text on light backgrounds |
| `orange-800` | `#9a3412` | Strong emphasis |
| `orange-900` | `#7c2d12` | Dark text |
| `orange-950` | `#431407` | Deepest orange, dark mode accents |

### Slate Palette (Neutrals)

| Token | Hex | Usage |
|-------|-----|-------|
| `slate-50` | `#f8fafc` | Page backgrounds (light mode) |
| `slate-100` | `#f1f5f9` | Card backgrounds, subtle dividers |
| `slate-200` | `#e2e8f0` | Borders, separators |
| `slate-300` | `#cbd5e1` | Disabled states, placeholders |
| `slate-400` | `#94a3b8` | Muted text, icons |
| `slate-500` | `#64748b` | Secondary text |
| `slate-600` | `#475569` | Body text (light mode) |
| `slate-700` | `#334155` | Headings (light mode) |
| `slate-800` | `#1e293b` | Strong headings, dark elements |
| `slate-900` | `#0f172a` | Footer, dark sections (light mode) |
| `slate-950` | `#020617` | Page backgrounds (dark mode) |

### Semantic Colors

```tsx
// Success (green)
success-50:  #f0fdf4
success-500: #22c55e  // Primary success
success-700: #15803d

// Error (red)
error-50:  #fef2f2
error-500: #ef4444  // Primary error
error-700: #b91c1c

// Warning (amber)
warning-50:  #fffbeb
warning-500: #f59e0b  // Primary warning
warning-700: #b45309

// Info (blue)
info-50:  #eff6ff
info-500: #3b82f6  // Primary info
info-700: #1d4ed8
```

---

## Dark Mode

### Strategy

**Auto-detection with manual override:**
1. Detect system preference via `prefers-color-scheme`
2. Store user preference in `localStorage` if manually toggled
3. Apply dark mode via `dark` class on `<html>` element
4. Use CSS custom properties for theme-aware colors

### CSS Variables Approach

```css
/* globals.css */
:root {
  /* Light mode (default) */
  --color-background: 248 250 252;      /* slate-50 */
  --color-foreground: 15 23 42;         /* slate-900 */
  --color-card: 255 255 255;
  --color-card-foreground: 15 23 42;
  --color-primary: 20 184 166;          /* teal-500 */
  --color-primary-foreground: 255 255 255;
  --color-accent: 251 146 60;           /* orange-400 */
  --color-accent-foreground: 255 255 255;
  --color-muted: 241 245 249;           /* slate-100 */
  --color-muted-foreground: 100 116 139; /* slate-400 */
  --color-border: 226 232 240;          /* slate-200 */
}

.dark {
  /* Dark mode */
  --color-background: 2 6 23;           /* slate-950 */
  --color-foreground: 248 250 252;      /* slate-50 */
  --color-card: 15 23 42;               /* slate-900 */
  --color-card-foreground: 248 250 252;
  --color-primary: 45 212 191;          /* teal-400 (brighter for dark) */
  --color-primary-foreground: 2 6 23;
  --color-accent: 251 146 60;           /* orange-400 */
  --color-accent-foreground: 2 6 23;
  --color-muted: 30 41 59;              /* slate-800 */
  --color-muted-foreground: 148 163 184; /* slate-400 */
  --color-border: 51 65 85;             /* slate-700 */
}
```

### Implementation Example

```tsx
// app/providers.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({ theme: "system", setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    // Load saved preference
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

### Usage in Components

```tsx
// Light/dark aware background
<div className="bg-slate-50 dark:bg-slate-950">

// Adaptive text colors
<p className="text-slate-700 dark:text-slate-300">

// Border colors
<div className="border border-slate-200 dark:border-slate-700">

// Using CSS variables directly
<div className="bg-[rgb(var(--color-background))]">
```

---

## Typography

### Font Families

```tsx
// tailwind.config.ts
fontFamily: {
  display: ["Fraunces", "serif"],        // Headings, brand elements
  body: ["DM Sans", "sans-serif"],       // Body text, UI (default)
  mono: ["JetBrains Mono", "monospace"], // Code, overlines, data
}
```

### Font Loading

```tsx
// app/layout.tsx
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
```

### Type Scale

```tsx
// tailwind.config.ts
fontSize: {
  // Display (Headings — Fraunces)
  "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],   // 72px
  "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],   // 60px
  "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],     // 48px
  "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],   // 36px
  "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "0" }],        // 30px

  // Body (Text — DM Sans)
  "body-xl": ["1.25rem", { lineHeight: "1.7" }],      // 20px
  "body-lg": ["1.125rem", { lineHeight: "1.7" }],     // 18px
  "body-md": ["1rem", { lineHeight: "1.7" }],         // 16px (default)
  "body-sm": ["0.875rem", { lineHeight: "1.6" }],     // 14px
  "body-xs": ["0.75rem", { lineHeight: "1.5" }],      // 12px

  // Mono (Overlines, code — JetBrains Mono)
  "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],  // 12px uppercase
  "code": ["0.875rem", { lineHeight: "1.6" }],        // 14px
}
```

### Typography Patterns

```tsx
// Hero Heading
<h1 className="font-display text-display-xl md:text-display-2xl text-slate-900 dark:text-slate-50">

// Section Heading
<h2 className="font-display text-display-md md:text-display-lg text-slate-800 dark:text-slate-100">

// Overline Label
<p className="font-mono text-caption uppercase tracking-widest text-teal-500 dark:text-teal-400 mb-4">

// Body Text
<p className="text-body-md text-slate-600 dark:text-slate-300">

// Small Muted Text
<p className="text-body-sm text-slate-500 dark:text-slate-400">
```

---

## Spacing & Layout

### Container System

```tsx
// Max-width containers
<div className="max-w-7xl mx-auto px-6">    // Standard content (1280px)
<div className="max-w-6xl mx-auto px-6">    // Narrower content (1152px)
<div className="max-w-4xl mx-auto px-6">    // Article width (896px)
<div className="max-w-prose mx-auto px-6">  // Reading width (65ch)
```

### Section Padding

```tsx
// Standard section
<section className="py-24 md:py-32 px-6">

// Dense section
<section className="py-16 md:py-24 px-6">

// Hero section
<section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">

// Footer
<footer className="py-16 md:py-20 px-6">
```

### Spacing Scale

```tsx
// tailwind.config.ts (extends default)
spacing: {
  // Additional custom spacing
  18: "4.5rem",   // 72px
  22: "5.5rem",   // 88px
  26: "6.5rem",   // 104px
  30: "7.5rem",   // 120px
}
```

### Grid Patterns

```tsx
// 2-column split (50/50)
<div className="grid md:grid-cols-2 gap-12 items-center">

// 3-column cards
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// 4-column features
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// 12-column layout
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12 lg:col-span-8">
  <div className="col-span-12 lg:col-span-4">
```

---

## Effects

### Gradient System

#### Primary Gradient (Teal → Orange)

```tsx
// Background gradient
<div className="bg-gradient-to-r from-teal-500 to-orange-400">

// Text gradient
<h1 className="bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent">

// Diagonal gradient
<div className="bg-gradient-to-br from-teal-600 via-teal-500 to-orange-500">

// Radial gradient (hero backgrounds)
<div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/20 via-slate-900 to-slate-950">
```

#### Dark Mode Gradients

```tsx
// Adaptive gradient
<div className="bg-gradient-to-r from-teal-500 to-orange-400 dark:from-teal-400 dark:to-orange-500">

// Subtle dark mode glow
<div className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black">
```

### Shadow System

```tsx
// tailwind.config.ts
boxShadow: {
  // Light mode shadows
  "soft": "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
  "medium": "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)",
  "large": "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)",
  
  // Colored glows
  "glow-teal": "0 0 24px rgba(20, 184, 166, 0.3), 0 0 48px rgba(20, 184, 166, 0.15)",
  "glow-orange": "0 0 24px rgba(251, 146, 60, 0.3), 0 0 48px rgba(251, 146, 60, 0.15)",
  
  // Dark mode shadows (deeper, more contrast)
  "dark-soft": "0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)",
  "dark-medium": "0 4px 16px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.5)",
  "dark-large": "0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.5)",
}
```

#### Usage

```tsx
// Standard card shadow
<div className="shadow-soft dark:shadow-dark-soft">

// Elevated card
<div className="shadow-medium dark:shadow-dark-medium">

// Modal/dropdown
<div className="shadow-large dark:shadow-dark-large">

// Teal glow on hover
<button className="hover:shadow-glow-teal transition-shadow">

// Orange glow (CTA)
<button className="shadow-glow-orange dark:shadow-glow-orange">
```

### Glassmorphism

```tsx
// Glass card
<div className="bg-white/10 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/50">

// Frosted navbar
<nav className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50">

// Glass button
<button className="bg-teal-500/10 hover:bg-teal-500/20 backdrop-blur-sm border border-teal-500/30">
```

### Animation Presets

```tsx
// tailwind.config.ts
animation: {
  "fade-in": "fade-in 0.6s ease-out",
  "slide-up": "slide-up 0.6s ease-out",
  "scale-in": "scale-in 0.4s ease-out",
  "glow-pulse": "glow-pulse 2s ease-in-out infinite",
}

keyframes: {
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  "slide-up": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "scale-in": {
    "0%": { opacity: "0", transform: "scale(0.95)" },
    "100%": { opacity: "1", transform: "scale(1)" },
  },
  "glow-pulse": {
    "0%, 100%": { opacity: "1", boxShadow: "0 0 24px rgba(20, 184, 166, 0.3)" },
    "50%": { opacity: "0.8", boxShadow: "0 0 48px rgba(20, 184, 166, 0.5)" },
  },
}
```

---

## Components

### Button Variants

```tsx
// Primary CTA (gradient)
<button className="
  px-6 py-3 rounded-full font-medium
  bg-gradient-to-r from-teal-500 to-orange-400
  text-white shadow-medium
  hover:shadow-glow-teal hover:scale-105
  active:scale-100
  transition-all duration-200
">

// Secondary (outline)
<button className="
  px-6 py-3 rounded-full font-medium
  bg-transparent border-2 border-teal-500 dark:border-teal-400
  text-teal-600 dark:text-teal-400
  hover:bg-teal-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-slate-900
  transition-all duration-200
">

// Ghost (subtle)
<button className="
  px-6 py-3 rounded-full font-medium
  bg-slate-100 dark:bg-slate-800
  text-slate-700 dark:text-slate-300
  hover:bg-slate-200 dark:hover:bg-slate-700
  transition-colors duration-200
">
```

### Card Styles

```tsx
// Standard card
<div className="
  bg-white dark:bg-slate-900
  border border-slate-200 dark:border-slate-800
  rounded-2xl shadow-soft dark:shadow-dark-soft
  p-6
">

// Glass card
<div className="
  bg-white/60 dark:bg-slate-900/50
  backdrop-blur-xl
  border border-slate-200/50 dark:border-slate-700/50
  rounded-2xl shadow-medium
  p-6
">

// Hover card (interactive)
<div className="
  bg-white dark:bg-slate-900
  border border-slate-200 dark:border-slate-800
  rounded-2xl shadow-soft dark:shadow-dark-soft
  hover:shadow-medium hover:border-teal-300 dark:hover:border-teal-700
  hover:-translate-y-1
  transition-all duration-300
  p-6 cursor-pointer
">

// Gradient card (featured)
<div className="
  bg-gradient-to-br from-teal-500 to-orange-400
  rounded-2xl shadow-glow-teal
  p-6 text-white
">
```

### Input Fields

```tsx
// Text input
<input className="
  w-full px-4 py-3 rounded-xl
  bg-white dark:bg-slate-900
  border border-slate-300 dark:border-slate-700
  text-slate-900 dark:text-slate-100
  placeholder:text-slate-400 dark:placeholder:text-slate-500
  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
  transition-all duration-200
" />

// Select dropdown
<select className="
  w-full px-4 py-3 rounded-xl
  bg-white dark:bg-slate-900
  border border-slate-300 dark:border-slate-700
  text-slate-900 dark:text-slate-100
  focus:outline-none focus:ring-2 focus:ring-teal-500
  transition-all duration-200
">

// Textarea
<textarea className="
  w-full px-4 py-3 rounded-xl
  bg-white dark:bg-slate-900
  border border-slate-300 dark:border-slate-700
  text-slate-900 dark:text-slate-100
  placeholder:text-slate-400 dark:placeholder:text-slate-500
  focus:outline-none focus:ring-2 focus:ring-teal-500
  resize-none
  transition-all duration-200
  min-h-[120px]
" />
```

### Badge Styles

```tsx
// Teal badge
<span className="
  inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  bg-teal-100 dark:bg-teal-950
  text-teal-700 dark:text-teal-300
  text-body-sm font-medium
">

// Orange badge (accent)
<span className="
  inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  bg-orange-100 dark:bg-orange-950
  text-orange-700 dark:text-orange-300
  text-body-sm font-medium
">

// Neutral badge
<span className="
  inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  bg-slate-100 dark:bg-slate-800
  text-slate-700 dark:text-slate-300
  text-body-sm font-medium
">

// Gradient badge (featured)
<span className="
  inline-flex items-center gap-1.5 px-3 py-1 rounded-full
  bg-gradient-to-r from-teal-500 to-orange-400
  text-white text-body-sm font-medium
  shadow-glow-teal
">
```

### Demo Panel (macOS Window)

```tsx
<div className="
  bg-white dark:bg-slate-900
  border border-slate-200 dark:border-slate-800
  rounded-2xl shadow-large overflow-hidden
">
  {/* Window header */}
  <div className="
    flex items-center gap-2 px-5 py-3
    bg-slate-100 dark:bg-slate-800
    border-b border-slate-200 dark:border-slate-700
  ">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-amber-400 dark:bg-amber-500" />
      <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500" />
    </div>
    <span className="text-body-sm text-slate-600 dark:text-slate-400 ml-2">
      agent-workflow.py
    </span>
  </div>
  
  {/* Panel content */}
  <div className="p-6">
    {/* Demo content here */}
  </div>
</div>
```

---

## Tailwind Configuration

Complete `tailwind.config.ts` for the Cyber Citrus design system:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Teal (Primary Brand)
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        // Orange (Accent)
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        // Slate (Neutrals)
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Display (Headings)
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "0" }],
        // Body
        "body-xl": ["1.25rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
        // Mono
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
        code: ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      boxShadow: {
        // Light mode shadows
        soft: "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        medium: "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)",
        large: "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)",
        // Colored glows
        "glow-teal": "0 0 24px rgba(20, 184, 166, 0.3), 0 0 48px rgba(20, 184, 166, 0.15)",
        "glow-orange": "0 0 24px rgba(251, 146, 60, 0.3), 0 0 48px rgba(251, 146, 60, 0.15)",
        // Dark mode shadows
        "dark-soft": "0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)",
        "dark-medium": "0 4px 16px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.5)",
        "dark-large": "0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 24px rgba(20, 184, 166, 0.3)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 48px rgba(20, 184, 166, 0.5)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## CSS Variables

Complete `globals.css` with CSS custom properties:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ===========================
   CSS Custom Properties
   =========================== */

:root {
  /* Light Mode Colors */
  --color-background: 248 250 252;        /* slate-50 */
  --color-foreground: 15 23 42;           /* slate-900 */
  --color-card: 255 255 255;              /* white */
  --color-card-foreground: 15 23 42;      /* slate-900 */
  --color-primary: 20 184 166;            /* teal-500 */
  --color-primary-foreground: 255 255 255;
  --color-accent: 251 146 60;             /* orange-400 */
  --color-accent-foreground: 255 255 255;
  --color-muted: 241 245 249;             /* slate-100 */
  --color-muted-foreground: 100 116 139;  /* slate-400 */
  --color-border: 226 232 240;            /* slate-200 */
  --color-input: 226 232 240;             /* slate-200 */
  --color-ring: 20 184 166;               /* teal-500 */

  /* Light Mode Semantic */
  --color-success: 34 197 94;             /* green-500 */
  --color-error: 239 68 68;               /* red-500 */
  --color-warning: 245 158 11;            /* amber-500 */
  --color-info: 59 130 246;               /* blue-500 */

  /* Radius */
  --radius-sm: 0.5rem;                    /* 8px */
  --radius-md: 0.75rem;                   /* 12px */
  --radius-lg: 1rem;                      /* 16px */
  --radius-xl: 1.5rem;                    /* 24px */
  --radius-full: 9999px;                  /* fully rounded */
}

.dark {
  /* Dark Mode Colors */
  --color-background: 2 6 23;             /* slate-950 */
  --color-foreground: 248 250 252;        /* slate-50 */
  --color-card: 15 23 42;                 /* slate-900 */
  --color-card-foreground: 248 250 252;   /* slate-50 */
  --color-primary: 45 212 191;            /* teal-400 (brighter) */
  --color-primary-foreground: 2 6 23;     /* slate-950 */
  --color-accent: 251 146 60;             /* orange-400 */
  --color-accent-foreground: 2 6 23;      /* slate-950 */
  --color-muted: 30 41 59;                /* slate-800 */
  --color-muted-foreground: 148 163 184;  /* slate-400 */
  --color-border: 51 65 85;               /* slate-700 */
  --color-input: 51 65 85;                /* slate-700 */
  --color-ring: 45 212 191;               /* teal-400 */

  /* Dark Mode Semantic */
  --color-success: 34 197 94;             /* green-500 */
  --color-error: 239 68 68;               /* red-500 */
  --color-warning: 245 158 11;            /* amber-500 */
  --color-info: 59 130 246;               /* blue-500 */
}

/* ===========================
   Base Styles
   =========================== */

* {
  @apply border-border;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @apply bg-[rgb(var(--color-background))];
  @apply text-[rgb(var(--color-foreground))];
  @apply font-body;
}

/* ===========================
   Utility Classes
   =========================== */

@layer utilities {
  /* Text gradient utilities */
  .text-gradient-teal-orange {
    @apply bg-gradient-to-r from-teal-500 to-orange-400 bg-clip-text text-transparent;
  }

  .dark .text-gradient-teal-orange {
    @apply from-teal-400 to-orange-500;
  }

  /* Glow effects */
  .glow-teal {
    box-shadow: 0 0 24px rgba(20, 184, 166, 0.3), 0 0 48px rgba(20, 184, 166, 0.15);
  }

  .glow-orange {
    box-shadow: 0 0 24px rgba(251, 146, 60, 0.3), 0 0 48px rgba(251, 146, 60, 0.15);
  }

  /* Glass effect */
  .glass {
    @apply bg-white/60 dark:bg-slate-900/50;
    @apply backdrop-blur-xl;
    @apply border border-slate-200/50 dark:border-slate-700/50;
  }

  /* Smooth transitions */
  .transition-smooth {
    @apply transition-all duration-300 ease-out;
  }
}

/* ===========================
   Custom Component Styles
   =========================== */

/* Remove default input styling */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* Custom scrollbar (webkit browsers) */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-100 dark:bg-slate-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-400 dark:bg-slate-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-500 dark:bg-slate-500;
}

/* Selection styling */
::selection {
  @apply bg-teal-500/20 text-teal-900 dark:text-teal-100;
}

/* Focus visible outline (accessibility) */
*:focus-visible {
  @apply outline-none ring-2 ring-teal-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-950;
}
```

---

## Migration Notes

### From Navy/Amber/Cream to Cyber Citrus

**Color Mappings:**

| Old | New | Notes |
|-----|-----|-------|
| `navy-800` | `teal-600` or `slate-800` | Headings, strong text |
| `amber-500` | `orange-400` | Primary accent, CTAs |
| `cream-50` | `slate-50` | Light backgrounds |
| `charcoal-500` | `slate-500` | Secondary text |

**Component Updates:**

1. **Buttons**: Replace `bg-amber-500` with `bg-gradient-to-r from-teal-500 to-orange-400`
2. **Links**: Replace `text-amber-500` with `text-teal-600 dark:text-teal-400`
3. **Badges**: Update `bg-navy-100` to `bg-teal-100 dark:bg-teal-950`
4. **Cards**: Add dark mode variants: `bg-white dark:bg-slate-900`
5. **Borders**: Update to `border-slate-200 dark:border-slate-800`

**Global Changes:**

```tsx
// Before
<body className="bg-cream-50 text-charcoal-500">

// After
<body className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300">
```

### Testing Checklist

- [ ] All colors have dark mode variants
- [ ] Focus states are visible in both modes
- [ ] Text contrast meets WCAG AA (4.5:1 minimum)
- [ ] Gradients render smoothly across breakpoints
- [ ] Shadows are visible but not overwhelming
- [ ] Glass effects have sufficient contrast
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Dark mode toggle persists across page loads

---

## Resources

**Design References:**
- [delve.co](https://delve.co) — gradient sophistication, dark mode
- [Vercel Design System](https://vercel.com/design) — modern SaaS aesthetic
- [Linear](https://linear.app) — glass effects, micro-interactions
- [Stripe](https://stripe.com) — gradient usage, typography

**Color Tools:**
- [Coolors](https://coolors.co) — palette generation
- [Colormind](http://colormind.io) — AI color schemes
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) — WCAG compliance

**Tailwind Resources:**
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Headless UI](https://headlessui.com) — unstyled components
- [Tailwind UI](https://tailwindui.com) — premium components

---

**Version:** 1.0.0  
**Last Updated:** February 2026  
**Maintained by:** Agent School Design Team
