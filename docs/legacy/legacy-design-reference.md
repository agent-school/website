# Legacy Design Reference — Original Website

> **Era:** Original (cream/orange)  
> **Status:** Deprecated — replaced by Cyber Citrus (teal/orange/slate)  
> **Use:** Reference only during migration

---

## Overview

The original Agent School website used a warm, academic aesthetic with navy, amber, cream, and charcoal colors. This document preserves the palette and conventions for reference during the BMAD redesign migration.

---

## Color Palettes

### Navy (Primary Brand)

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-50` | `#EEF1F8` | Light backgrounds |
| `navy-100` | `#DCE3F2` | Subtle accents |
| `navy-200` | `#B5C4E3` | Borders |
| `navy-300` | `#8AA2D0` | Interactive states |
| `navy-400` | `#5A7AB8` | Icons |
| `navy-500` | `#3A5C9E` | Primary |
| `navy-600` | `#2F4B83` | Hover |
| `navy-700` | `#253A6A` | Active |
| `navy-800` | `#1B2951` | Text, headings |
| `navy-900` | `#0F1B33` | Dark sections |

### Amber (Accent/CTA)

| Token | Hex | Usage |
|-------|-----|-------|
| `amber-50` | `#FFF9F2` | Light backgrounds |
| `amber-100` | `#FFF3E8` | Badges, highlights |
| `amber-200` | `#FFE4C7` | Borders |
| `amber-300` | `#FFD0A0` | Interactive |
| `amber-400` | `#FFB876` | Secondary accent |
| `amber-500` | `#FE9F4D` | **Primary accent** (CTAs) |
| `amber-600` | `#E88A38` | Hover, active |

### Cream (Backgrounds)

| Token | Hex | Usage |
|-------|-----|-------|
| `cream-50` | `#FAF9F7` | Base page background |
| `cream-100` | `#F5F3EF` | Card backgrounds |
| `cream-200` | `#EBE7DF` | Borders, dividers |
| `cream-300` | `#E0DCD4` | Subtle borders |

### Charcoal (Neutrals)

| Token | Hex | Usage |
|-------|-----|-------|
| `charcoal-100` | `#F3F4F6` | Light neutrals |
| `charcoal-500` | `#6B7280` | Secondary text |
| `charcoal-900` | `#1A1A1A` | Footer, dark elements |

---

## Typography

- **Display:** Fraunces (serif) — headings, brand
- **Body:** DM Sans (sans) — body text (default on `<body>`)
- **Mono:** JetBrains Mono — code, data, overlines

---

## Common Patterns (Original)

```tsx
// Section wrapper
<section className="py-24 md:py-32 px-6 bg-cream-50">

// Card
<div className="bg-white rounded-2xl border border-cream-200 shadow-soft p-6">

// Heading
<h2 className="font-display text-display-md md:text-display-lg text-navy-800">

// Overline
<p className="font-mono text-caption uppercase tracking-widest text-amber-500 mb-4">

// Body text
<p className="text-body-md text-charcoal-500">

// Demo panel header (macOS window dots)
<div className="flex items-center gap-2 px-5 py-3 bg-cream-50 border-b border-cream-200">
```

---

## Migration Notes

- **Replacement:** Navy/Amber/Cream → Teal/Orange/Slate (Cyber Citrus)
- **New design system:** See [design/design-system-new-purposal.md](../design/design-system-new-purposal.md)
- **AGENTS.md:** Marks old palette as deprecated
