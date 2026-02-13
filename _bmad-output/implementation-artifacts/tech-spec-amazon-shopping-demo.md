---
title: 'Amazon Shopping Demo - Interactive Agent School Capabilities Showcase'
slug: 'amazon-shopping-demo'
created: '2026-02-12'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['Next.js 16.1.0', 'React 19', 'TypeScript 5', 'Tailwind CSS 3.4', 'Framer Motion 12', 'Magic UI', 'lucide-react']
files_to_create: [
  'src/components/magic/Pointer.tsx',
  'src/components/magic/BorderBeam.tsx',
  'src/components/magic/MagicCard.tsx',
  'src/components/magic/InteractiveGridPattern.tsx',
  'src/components/mocks/amazon/types.ts',
  'src/components/mocks/amazon/data.ts',
  'src/components/mocks/amazon/SearchView.tsx',
  'src/components/mocks/amazon/ProductDetailView.tsx',
  'src/components/mocks/amazon/CartView.tsx',
  'src/components/mocks/amazon/CheckoutView.tsx',
  'src/components/mocks/amazon/ConfirmationView.tsx',
  'src/components/mocks/amazon/StepSelector.tsx',
  'src/components/mocks/amazon/CapabilityBadge.tsx',
  'src/components/mocks/amazon/OverlayTooltip.tsx',
  'src/components/mocks/amazon/queries.ts',
  'src/components/mocks/amazon/capabilities.ts',
  'src/components/mocks/amazon/AmazonDemo.tsx',
  'src/components/mocks/amazon/index.ts'
]
files_to_modify: ['src/components/sections/UseCases.tsx']
code_patterns: ['Mock UI Framework', 'Named exports', 'use client directive', 'Teal/orange gradients', 'Dark mode support', 'Dynamic import pattern']
test_patterns: ['Manual testing only', 'No automated test framework']
---

# Tech-Spec: Amazon Shopping Demo - Interactive Agent School Capabilities Showcase

**Created:** 2026-02-12

## Overview

### Problem Statement

Create a comprehensive interactive demo that showcases all 6 Agent School core capabilities through a universally relatable e-commerce scenario. Users need to see how Agent School trained agents work through a complete purchase flow while demonstrating each capability sequentially with clear visual feedback.

### Solution

Build a new mock UI demo featuring:
- **Left panel**: Agent School branded Amazon UI with full purchase flow (Search → Product Detail → Cart → Checkout → Confirmation)
- **Right panel**: Agent chat interface showing thinking, reasoning, and capability badges
- **Interactive step selection**: User can choose which workflow steps to see
- **Sequential capability showcase**: Each of the 6 capabilities demonstrated with visual indicators/badges
- **Magic UI effects**: Smart pointer, border beams, magic cards, interactive grid background
- **Overlay tooltips**: Contextual explanations of agent decisions

### Scope

**In Scope:**
- New `/mocks/amazon/` directory with all components (following existing demo pattern)
- **Integration with landing page UseCases section** (dynamically imported like other demos)
- **Add Amazon tab** to existing demo tabs (Hotel PMS, CRM, Instagram, Notion, Granola, **+ Amazon**)
- 5 page views: Search, Product Detail, Cart, Checkout, Confirmation
- Multiple product types (not just apples) to show variety
- Complete payment processing flow (mocked but realistic)
- Agent School branded UI (teal/orange, not Amazon colors) matching existing demos
- Magic UI smart pointer component (branded, teleporting animation between interactions)
- Border beam integration on buttons, cards, form fields
- Magic card wrappers for product cards, cart items, order summary
- Interactive grid background effect outside mock shell
- Overlay tooltip system for visual callouts with text
- **Step selector UI**: User can choose which steps to see
- **Capability badges system**: Visual indicators for each of 6 capabilities
- **Sequential capability demonstration**:
  1. **Teach Once, Automate Forever** - Show learned workflow execution
  2. **99% Reliability, Guaranteed** - Display confidence/reliability metrics
  3. **Perfect Transparency** - Show step-by-step with assertions
  4. **Self-Healing** - Simulate UI change and adaptation
  5. **Mission Control** - Show monitoring/metrics
  6. **10x Speed Breakthrough** - Highlight 2-second execution times
- Agent query handler with autonomous multi-step workflow
- Integration with existing Mock UI Framework
- **Match styling/theme of existing mini demos** (consistent with Hotel PMS, CRM, Instagram, Notion, Granola)

**Out of Scope:**
- Real Amazon API integration (mocked data only)
- Real payment processing (mock confirmation only)
- Meteor effects (deprioritized)
- Multiple simultaneous capability displays (sequential only)
- Separate route/page (demo is embedded in landing page only)

## Context for Development

### Technical Preferences

- Follow existing mock pattern from `/mocks/hotel-pms/`, `/mocks/crm/`, etc.
- Use teal/orange gradient system (Cyber Citrus design system)
- Dark mode support required
- Magic UI components need to be sourced/created (smart pointer, border beams, magic cards)
- Interactive grid background is from Aceternity UI or similar
- All components must follow Agent School code style: 2-space indentation, double quotes, @/ imports
- Named exports only (no default exports except page.tsx)

### Codebase Patterns

**Mock UI Framework Architecture:**
- State management: `MockUIProvider` + `MockUIContext` with `useReducer`
- Component structure: `MockUIShell` (window chrome) + `AgentInterface` (chat) + demo content
- Highlight system: `InteractiveElement` wrapper with pulsing teal glow effect
- Query handling: Async `QueryHandler<T>` function returns `QueryResult` with response, highlights, dataUpdates
- Type definitions: `/types/agent.ts` (AgentMessage, QueryResult) + `/types/mock-ui.ts` (MockUIState, actions)

**Code Style Conventions:**
- **Imports**: 3 groups separated by blank lines: (1) directive, (2) external packages, (3) internal @/ imports
- **Exports**: Named exports only (`export function Component()`) - no `export default` except page.tsx
- **Client Components**: `"use client"` directive first line when using hooks, Framer Motion, or browser APIs
- **Indentation**: 2 spaces, double quotes, semicolons, trailing commas
- **Path Aliases**: Always use `@/` imports (never relative paths like `../`)
- **Props**: Interface named `{ComponentName}Props` for complex components, inline types for simpler ones

**Color System (Cyber Citrus):**
- Primary: Teal (`#14b8a6` to `#134e4a`) - brand color
- Accent: Orange (`#fb923c` to `#ea580c`) - CTAs and highlights
- Neutrals: Slate (50-950) for light/dark mode
- Gradients: `bg-gradient-to-br from-teal-600 to-orange-500` for brand moments
- Shadows: `shadow-glow-teal`, `shadow-glow-orange`, `shadow-glow-cyber`

**Animation Standards:**
- Easing: `[0.25, 0.1, 0.25, 1]` (cubic-bezier)
- Scroll reveals: `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- Micro-interactions: `whileHover={{ y: -2 }}`, `whileTap={{ scale: 0.97 }}`
- Thinking indicators: 3 pulsing gradient dots (teal-to-orange)

**Existing Mock Demo Pattern (Hotel PMS reference):**
```tsx
// Pattern structure from hotel-pms/HotelPMSDemo.tsx:
<MockUIProvider<DataType>
  initialData={initialData}
  queryHandler={handleQuery}
>
  <MockUIShell
    title="Demo Title"
    sidebar={<AgentInterface {...agentProps} />}
  >
    <DemoContent />
  </MockUIShell>
</MockUIProvider>
```

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `src/components/sections/UseCases.tsx` | **Landing page demo integration pattern** - shows how demos are dynamically imported and embedded |
| `src/components/mocks/_framework/MockUIContext.tsx` | State management pattern with reducer, actions, and query handling |
| `src/components/mocks/_framework/MockUIShell.tsx` | Window chrome wrapper with macOS dots and responsive layout |
| `src/components/mocks/_framework/AgentInterface.tsx` | Chat UI with messages, suggested queries, and thinking indicator |
| `src/components/mocks/_framework/InteractiveElement.tsx` | Clickable wrapper with highlight pulsing effect |
| `src/components/mocks/hotel-pms/HotelPMSDemo.tsx` | Reference implementation of complete mock demo pattern |
| `src/components/mocks/hotel-pms/index.ts` | Export pattern for dynamic import (must create for Amazon demo) |
| `src/components/mocks/hotel-pms/types.ts` | Example of demo-specific data type definitions |
| `src/components/mocks/hotel-pms/data.ts` | Example of mock data generation |
| `src/components/mocks/hotel-pms/queries.ts` | Example of query handler with pattern matching |
| `src/types/agent.ts` | Agent message types, QueryResult, QueryHandler interface |
| `src/types/mock-ui.ts` | MockUIState, MockUIAction, MockUIContextValue types |
| `src/components/aceternity/BackgroundBeams.tsx` | Example of Aceternity UI component integration |
| `src/components/magic/HyperText.tsx` | Existing Magic UI text animation component |
| `src/components/magic/NumberTicker.tsx` | Existing Magic UI number animation component |
| `src/lib/constants.ts` | Agent School FEATURES array (6 capabilities to demonstrate) |
| `tailwind.config.ts` | Cyber Citrus color system, custom animations, typography |

### Technical Decisions

**CLARIFIED IN PARTY MODE REVIEW:**

1. **Magic UI Components Source:**
   - All Magic UI components sourced from Magic UI library (https://magicui.design)
   - Components are copy-paste (not npm packages) - built with React, TypeScript, Tailwind, Framer Motion
   - **Found components needed**:
     - **Pointer**: https://magicui.design/docs/components/pointer
     - **BorderBeam**: https://magicui.design/docs/components/border-beam  
     - **MagicCard**: https://magicui.design/docs/components/magic-card
     - **InteractiveGridPattern**: https://magicui.design/docs/components/interactive-grid-pattern
   - Brand customization: Replace default colors with teal/orange gradients

2. **Step Selector - Tri-Mode Navigation:**
   - **Manual Mode**: Previous/Next buttons for step-by-step navigation
   - **Jump Mode**: Direct navigation to any step (1-5) via step menu
   - **Auto Mode**: Automatic playthrough of entire sequence
   - All three modes must be supported simultaneously

3. **Capability Demonstration:**
   - **Visual simulation required** (not text explanations)
   - Must show actual UI changes for capabilities like "Self-Healing"
   - Component variants needed to simulate UI state changes

4. **Tooltip Behavior:**
   - **Auto-advance** (no manual dismissal)
   - Appear → Explain action → Fade out automatically
   - Queue-based system for sequential tooltips

5. **Payment Processing:**
   - **Confirmation screen only** (no complex payment form)
   - Show order summary + confirmation message
   - Keep focus on agent capabilities, not form complexity

6. **State Management Architecture (RESOLVED F4):**
   - `stepMode: 'manual' | 'jump' | 'auto'` (navigation mode - renamed from 'mode' for clarity)
   - `currentStep: 1-5` (step number in workflow: 1=Search, 2=Product, 3=Cart, 4=Checkout, 5=Confirmation)
   - `currentView: 'search' | 'product' | 'cart' | 'checkout' | 'confirmation'` (current page view - ALWAYS synchronized 1:1 with currentStep)
   - `currentCapability: 0-6` (which capability is being demonstrated, 0=none, 1-6=active capability)
   - `tooltipQueue: TooltipData[]` (queue of auto-advancing tooltips with id, text, targetElement, position)
   - **State Synchronization Rule**: currentView and currentStep must ALWAYS map 1:1 (step 1 → 'search', step 2 → 'product', etc.)

## Detailed Technical Specifications (Addressing Critical & High Findings)

### Magic UI Component Verification (RESOLVED F1)

**Component Availability Check:**
- ✅ Pointer: https://magicui.design/docs/components/pointer (verified available, React 19 compatible)
- ✅ BorderBeam: https://magicui.design/docs/components/border-beam (verified available)
- ✅ MagicCard: https://magicui.design/docs/components/magic-card (verified available)
- ✅ InteractiveGridPattern: https://magicui.design/docs/components/interactive-grid-pattern (verified available)

**Customization Requirements:**
- **Pointer**: Props `className` for teal/orange gradient, custom SVG children for Agent School logo mark (32x32px icon)
- **BorderBeam**: Props `colorFrom="#14b8a6"`, `colorTo="#fb923c"`, `duration={15}`, `size={200}`
- **MagicCard**: Props `gradientColor="#14b8a6"`, spotlight size 400px
- **InteractiveGridPattern**: Props `width={40}`, `height={40}`, `squaresClassName="fill-teal-500/20 dark:fill-teal-400/10"`

### Amazon UI Layout Structure (RESOLVED F5)

**Design Approach:** Replicate Amazon's core layout structure with Agent School branding (teal/orange colors, NOT Amazon's orange/yellow).

**Layout Specifications:**

1. **SearchView** (Step 1):
   - Top: Search bar (full width, rounded, BorderBeam effect)
   - Main: Product grid (4 columns desktop, 2 tablet, 1 mobile)
   - Products: MagicCard wrapped, image + title + price + rating
   - Layout: Standard e-commerce grid, resembles Amazon's search results

2. **ProductDetailView** (Step 2):
   - Left: Product image (large, 500x500px on desktop)
   - Right: Product details panel (title, price, rating, description, "Add to Cart" button with BorderBeam)
   - Layout: Two-column split (60/40), resembles Amazon's product page

3. **CartView** (Step 3):
   - Main: Cart items list (left 70%, each item in MagicCard)
   - Sidebar: Order summary (right 30%, MagicCard wrapper)
   - Each item: Image (100x100px) + details + quantity controls + remove button
   - Layout: Resembles Amazon's cart page

4. **CheckoutView** (Step 4):
   - Main: Order summary (simplified, no form)
   - Items list + subtotal + tax + shipping + total
   - Single "Place Order" button (large, BorderBeam)
   - Layout: Single column, centered, MagicCard wrapper

5. **ConfirmationView** (Step 5):
   - Success icon (large checkmark, teal)
   - Order number (e.g., "#AS-2026-12345")
   - Order summary (items, total)
   - "Track Order" button (decorative, no action)
   - Layout: Centered, celebratory design

### Query Handler State Machine (RESOLVED F2)

**State Transitions:**

```typescript
type QueryHandlerState = {
  stepMode: 'manual' | 'jump' | 'auto';
  currentStep: 1 | 2 | 3 | 4 | 5;
  isAutoPlaying: boolean;
  autoPlayTimeout?: NodeJS.Timeout;
};

// Transition Rules:
// 1. Manual Mode:
//    - Previous button: currentStep > 1 → currentStep - 1
//    - Next button: currentStep < 5 → currentStep + 1
//    - No auto-play, user controls all transitions

// 2. Jump Mode:
//    - Click step N: currentStep → N (direct jump)
//    - Cancels auto-play if active
//    - No validation, any step accessible

// 3. Auto Mode:
//    - Play button: Start auto-progression from currentStep
//    - Progression: currentStep → currentStep + 1 (every 3s after tooltip dismissal)
//    - Pause: Stops auto-play, stays at currentStep, can resume
//    - Manual/Jump interaction: Pauses auto mode, switches to manual/jump

// 4. Mode Switching:
//    - Any manual button click → stepMode = 'manual', stops auto-play
//    - Any step pill click → stepMode = 'jump', stops auto-play
//    - Play button → stepMode = 'auto', starts auto-play
//    - Pause button → isAutoPlaying = false, stays in stepMode = 'auto'

// 5. Edge Cases:
//    - currentStep === 5 && stepMode === 'auto' → Stop auto-play, show completion message
//    - Rapid mode switching → Debounce transitions (200ms), cancel pending timeouts
```

**Error Handling (RESOLVED F8):**
```typescript
// Query Handler Error Recovery:
try {
  const result = await handleQuery(query);
  return result;
} catch (error) {
  // Fallback response
  return {
    response: "I encountered an issue processing that request. Please try again or choose a different action.",
    highlight: [],
    dataUpdate: undefined,
    error: true
  };
}

// State Update Error Recovery:
try {
  dispatch({ type: 'UPDATE_STATE', payload: newState });
} catch (error) {
  console.error('State update failed:', error);
  // Revert to last known good state
  dispatch({ type: 'REVERT_STATE' });
}

// Timeout Handling:
const QUERY_TIMEOUT = 5000; // 5 seconds
const queryWithTimeout = Promise.race([
  handleQuery(query),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Query timeout')), QUERY_TIMEOUT)
  )
]);
```

### Capability Simulation Return Type (RESOLVED F3)

```typescript
// Capability simulation interface:
interface CapabilitySimulation {
  capabilityId: 1 | 2 | 3 | 4 | 5 | 6;
  tooltips: TooltipData[];
  uiUpdates: {
    overlayComponent?: React.ComponentType;
    highlightElements?: string[]; // CSS selectors
    animationTriggers?: AnimationTrigger[];
  };
  visualEffects: {
    type: 'workflow-checklist' | 'confidence-meter' | 'assertions-panel' | 
          'self-healing-demo' | 'metrics-dashboard' | 'speed-comparison';
    duration: number; // milliseconds
    data: Record<string, any>;
  };
  agentMessage: string;
}

interface TooltipData {
  id: string;
  text: string;
  targetElement: string; // CSS selector
  position: 'top' | 'bottom' | 'left' | 'right';
  duration: number; // milliseconds
}

interface AnimationTrigger {
  elementSelector: string;
  animation: Variants; // Framer Motion variants
  delay: number;
}
```

### Pointer Teleport Logic (RESOLVED F6)

**Implementation Specification:**

```typescript
// Pointer positioning system:
const teleportPointer = (targetSelector: string) => {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  
  // Get target position relative to viewport
  const rect = target.getBoundingClientRect();
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  
  // Calculate center of target element
  const targetX = rect.left + scrollX + (rect.width / 2);
  const targetY = rect.top + scrollY + (rect.height / 2);
  
  // Animate pointer to target
  pointerControls.start({
    x: targetX,
    y: targetY,
    opacity: [0, 1], // Fade in at destination
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  });
};

// Z-index layering: Pointer at z-50, tooltips at z-40, UI at z-10
// Scroll handling: Pointer position updates on scroll events
// Off-screen targets: Scroll target into view before teleport
```

**Position Calculation:**
- Use `getBoundingClientRect()` for viewport-relative coordinates
- Add `window.pageXOffset/pageYOffset` for document-relative position
- Target center point: `left + width/2`, `top + height/2`
- Pointer offset: -16px x, -16px y (to center 32x32px pointer on target)

### Capability Visual Specifications (RESOLVED F7)

**Detailed Visual Requirements:**

1. **Capability 1: Teach Once, Automate Forever**
   - Display: Floating panel (300px wide, top-right corner)
   - Content: 5 workflow steps with animated checkmarks
   - Animation: Checkmarks appear sequentially (0.5s stagger)
   - Steps: "Navigate to Amazon" ✓ → "Search for product" ✓ → "Add to cart" ✓ → "Checkout" ✓ → "Confirm order" ✓
   - Style: White panel, teal checkmarks, MagicCard wrapper

2. **Capability 2: 99% Reliability**
   - Display: Confidence meter overlay (200px wide, center-top)
   - Content: Circular progress gauge showing "99.2%"
   - Animation: Number counts from 0 to 99.2 (NumberTicker component)
   - Colors: Teal gauge fill, gradient from teal to orange
   - Duration: 2 seconds

3. **Capability 3: Perfect Transparency**
   - Display: Assertions panel (400px wide, right sidebar overlay)
   - Content: 8-10 assertion statements with checkmarks
   - Example: "✓ Product found: 'Organic Apples'" → "✓ Price matches: $5.99" → "✓ Cart updated: 1 item"
   - Animation: Each assertion appears sequentially (0.3s stagger)
   - Style: Code-like monospace font, teal checkmarks

4. **Capability 4: Self-Healing**
   - Display: Side-by-side comparison (split screen effect)
   - Left: "Before" - Button at original position (top-right)
   - Right: "After" - Button moved to bottom-left
   - Animation: Button slides to new position, pointer follows and clicks
   - Duration: 3 seconds total (1s move, 1s pointer follow, 1s click)
   - Overlay text: "UI changed → Agent adapted"

5. **Capability 5: Mission Control**
   - Display: Metrics dashboard overlay (500px wide, full-height right panel)
   - Content: 4 metric cards:
     - Steps executed: 5/5
     - Success rate: 100%
     - Avg. step time: 2.1s
     - Total time: 10.5s
   - Animation: Metrics count up simultaneously (NumberTicker)
   - Style: Dark panel, teal accent lines, gradient borders

6. **Capability 6: 10x Speed**
   - Display: Speed comparison bars (300px wide, center overlay)
   - Content: Two horizontal bars showing "Manual: 45s" vs "Agent School: 2s"
   - Animation: Bars grow from left to right, agent bar grows much faster
   - Colors: Gray for manual, gradient teal-to-orange for agent
   - Label: "22.5x faster" appears after animation
   - Duration: 3 seconds

### Auto Mode Timing Specification (RESOLVED F9)

**Precise Timing Rules:**

```typescript
// Auto mode progression sequence:
// 1. Step render completes
// 2. Agent message appears in chat (instant)
// 3. Wait 1 second
// 4. Capability demonstration starts (if applicable)
// 5. Capability demo completes (2-3 seconds)
// 6. Tooltips appear sequentially (3 seconds each)
// 7. Last tooltip dismisses
// 8. Wait 3 seconds (PAUSE HERE - this is the "3-second pause between steps")
// 9. Transition to next step

// Total time per step: 1s + capability_duration + (num_tooltips * 3s) + 3s
// Example: Step 2 with capability + 2 tooltips = 1s + 3s + 6s + 3s = 13s

const AUTO_MODE_DELAYS = {
  afterStepRender: 1000,        // 1s delay after step renders
  capabilityDuration: 3000,     // 3s for capability demo
  tooltipDuration: 3000,        // 3s per tooltip
  betweenSteps: 3000,           // 3s pause before next step
};
```

### Dark Mode Color Validation (RESOLVED F10)

**WCAG 2.1 AA Compliance Requirements:**

- **Minimum contrast ratio**: 4.5:1 for text, 3:1 for UI components
- **Teal colors** (dark mode):
  - Primary teal: `#14b8a6` (adjust to `#2dd4bf` for better contrast on dark backgrounds)
  - Text on dark: Use `text-teal-300` (#5eead4) instead of `text-teal-600`
- **Orange colors** (dark mode):
  - Primary orange: `#fb923c` (passes contrast on slate-900)
  - No adjustments needed
- **Validation tool**: Use WebAIM Contrast Checker before finalizing colors
- **Testing requirement**: All text must pass 4.5:1 contrast in both light and dark modes

**Dark Mode Specific Classes:**
```css
/* Light mode (default) */
.bg-primary { @apply bg-teal-600; }
.text-primary { @apply text-teal-700; }

/* Dark mode (adjusted for contrast) */
.dark .bg-primary { @apply bg-teal-500; } /* Lighter for visibility */
.dark .text-primary { @apply text-teal-300; } /* Lighter for readability */
```

### Important Medium Findings (Partial Resolution)

**Tooltip Queue Implementation (RESOLVED F11):**
```typescript
// Queue data structure and processing:
class TooltipQueue {
  private queue: TooltipData[] = [];
  private isProcessing = false;
  private currentTimeout?: NodeJS.Timeout;

  enqueue(tooltip: TooltipData) {
    this.queue.push(tooltip);
    if (!this.isProcessing) this.processNext();
  }

  private async processNext() {
    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }

    this.isProcessing = true;
    const tooltip = this.queue.shift()!;
    
    // Show tooltip
    showTooltip(tooltip);
    
    // Auto-dismiss after duration
    this.currentTimeout = setTimeout(() => {
      hideTooltip(tooltip.id);
      this.processNext(); // Process next in queue
    }, tooltip.duration);
  }

  clear() {
    this.queue = [];
    if (this.currentTimeout) clearTimeout(this.currentTimeout);
    this.isProcessing = false;
  }
}
```

**Product Image Requirements (RESOLVED F13):**
- Source: Use placeholder images from Unsplash (https://source.unsplash.com/400x400/?product,[category])
- Dimensions: 400x400px (square, consistent sizing)
- Format: JPEG, optimized for web (<100KB per image)
- Hosting: External URLs (Unsplash CDN), no local hosting needed
- Alt text pattern: "{product.name} - {product.category}" (e.g., "Organic Apples - Grocery")
- Categories for Unsplash: grocery, electronics, books, home, fashion

**Suggested Queries (RESOLVED F16):**
```typescript
// Step-specific suggested queries:
const SUGGESTED_QUERIES = {
  search: [
    "Show me grocery items under $10",
    "Find the highest rated electronics",
    "Search for 'apple'",
  ],
  product: [
    "Add this to my cart",
    "Show me similar products",
    "What's the rating?",
  ],
  cart: [
    "Update quantity to 3",
    "Remove the first item",
    "Proceed to checkout",
  ],
  checkout: [
    "Place this order",
    "Show order summary",
    "What's the total cost?",
  ],
  confirmation: [
    "Show my order details",
    "Start a new order",
    "What was my order number?",
  ],
};
```

**Cart State Persistence (RESOLVED F19):**
- Cart state persists across ALL step navigation (manual, jump, auto modes)
- When jumping from step 2 to step 4, cart contains items added at step 2
- Cart is part of global AmazonData state, not step-specific
- Cart clears only when demo fully restarts (user refreshes page or clicks "Start New Order")
- Sequential progression NOT required - jump mode still maintains cart state

## Implementation Plan

### Tasks

**Phase 1: Magic UI Components Integration**

- [ ] Task 1: Add Pointer component from Magic UI
  - File: `src/components/magic/Pointer.tsx`
  - Action: Copy Pointer component code from https://magicui.design/docs/components/pointer
  - Notes: Customize with teal/orange gradient, add Agent School branding (logo SVG shape)

- [ ] Task 2: Add BorderBeam component from Magic UI
  - File: `src/components/magic/BorderBeam.tsx`
  - Action: Copy BorderBeam component code from https://magicui.design/docs/components/border-beam
  - Notes: Set default colors to `colorFrom="#14b8a6"` (teal), `colorTo="#fb923c"` (orange)

- [ ] Task 3: Add MagicCard component from Magic UI
  - File: `src/components/magic/MagicCard.tsx`
  - Action: Copy MagicCard component code from https://magicui.design/docs/components/magic-card
  - Notes: Set gradient colors to teal/orange theme

- [ ] Task 4: Add InteractiveGridPattern component from Magic UI
  - File: `src/components/magic/InteractiveGridPattern.tsx`
  - Action: Copy InteractiveGridPattern code from https://magicui.design/docs/components/interactive-grid-pattern
  - Notes: Customize with teal/slate colors for dark mode support

**Phase 2: Amazon Demo Type Definitions**

- [ ] Task 5: Create Amazon data types
  - File: `src/components/mocks/amazon/types.ts`
  - Action: Define TypeScript interfaces for:
    - `Product` (id, name, price, rating, image, category)
    - `CartItem` (product, quantity)
    - `Order` (items, subtotal, tax, shipping, total)
    - `TooltipData` (id, text, targetElement, position, duration)
    - `CapabilitySimulation` (see "Detailed Technical Specifications" section for full interface)
    - `AmazonData` extends `MockData` (products, cart, order, currentView, currentStep, currentCapability, stepMode, tooltipQueue)
  - Notes: Includes all interfaces from RESOLVED F3 and F4 specifications

**Phase 3: Amazon Mock Data**

- [ ] Task 6: Create mock product catalog
  - File: `src/components/mocks/amazon/data.ts`
  - Action: Generate mock data with 15-20 products across categories (Electronics, Grocery, Books, Home, Fashion)
  - Notes: 
    - Include apples in Grocery, variety of price points ($5-$500)
    - Product images from Unsplash: `https://source.unsplash.com/400x400/?product,{category}` (see RESOLVED F13)
    - Alt text pattern: "{product.name} - {product.category}"
    - Realistic product names and ratings (4.0-5.0 stars)

**Phase 4: Amazon UI Components (5 Page Views)**

- [ ] Task 7: Create SearchView component
  - File: `src/components/mocks/amazon/SearchView.tsx`
  - Action: Build search bar + product grid with MagicCard wrappers
  - Notes: Products wrapped in MagicCard, search bar with BorderBeam, use InteractiveElement for clickable products

- [ ] Task 8: Create ProductDetailView component
  - File: `src/components/mocks/amazon/ProductDetailView.tsx`
  - Action: Build product page with image, title, price, rating, description, "Add to Cart" button
  - Notes: BorderBeam on "Add to Cart" button, product image with glow effect

- [ ] Task 9: Create CartView component
  - File: `src/components/mocks/amazon/CartView.tsx`
  - Action: Build cart with item list (MagicCard wrapped), quantity controls, subtotal, "Proceed to Checkout" button
  - Notes: Each cart item is a MagicCard, BorderBeam on checkout button

- [ ] Task 10: Create CheckoutView component
  - File: `src/components/mocks/amazon/CheckoutView.tsx`
  - Action: Build order summary (no payment form, just confirmation button)
  - Notes: Order summary in MagicCard, BorderBeam on "Place Order" button

- [ ] Task 11: Create ConfirmationView component
  - File: `src/components/mocks/amazon/ConfirmationView.tsx`
  - Action: Build success screen with order number, summary, and "Track Order" CTA
  - Notes: Success message with gradient text, order details in MagicCard

**Phase 5: Navigation & Control Components**

- [ ] Task 12: Create StepSelector component
  - File: `src/components/mocks/amazon/StepSelector.tsx`
  - Action: Build tri-mode navigation (manual prev/next, jump menu, auto play button)
  - Notes: 
    - Manual: ← → buttons
    - Jump: [1][2][3][4][5] step pills
    - Auto: ▶ Play button with pause/resume
    - Show current step with teal highlight
    - BorderBeam on active step

- [ ] Task 13: Create CapabilityBadge component
  - File: `src/components/mocks/amazon/CapabilityBadge.tsx`
  - Action: Build badge showing active capability (1-6 from FEATURES constants)
  - Notes: Display capability icon, title, mini progress (e.g., "3/6"), gradient border when active

- [ ] Task 14: Create OverlayTooltip component
  - File: `src/components/mocks/amazon/OverlayTooltip.tsx`
  - Action: Build auto-advancing tooltip with position, text, and fade animations
  - Notes: 
    - Framer Motion AnimatePresence for enter/exit
    - Auto-dismiss after 3 seconds
    - Queue system for sequential tooltips
    - Arrow pointer to target element
    - BorderBeam on tooltip container

**Phase 6: Query Handler & Workflow Logic**

- [ ] Task 15: Create Amazon query handler
  - File: `src/components/mocks/amazon/queries.ts`
  - Action: Implement autonomous workflow logic:
    - Parse user commands ("order an apple", "start demo", "show checkout")
    - Implement state machine from RESOLVED F2 (see "Detailed Technical Specifications")
    - Handle tri-mode navigation (manual, jump, auto) with proper transitions
    - Progress through 5 steps sequentially in auto mode with precise timing (RESOLVED F9)
    - Trigger capability demonstrations at appropriate steps
    - Queue tooltips using TooltipQueue class (RESOLVED F11)
    - Update state (currentView synchronized with currentStep per RESOLVED F4)
    - Error handling with fallbacks (RESOLVED F8)
  - Notes: Reference hotel-pms/queries.ts pattern, return QueryResult with response, dataUpdate, highlight

**Phase 7: Capability Demonstration Logic**

- [ ] Task 16: Create capability simulation helpers
  - File: `src/components/mocks/amazon/capabilities.ts`
  - Action: Implement visual simulation functions for each of 6 capabilities (return CapabilitySimulation interface from RESOLVED F3):
    1. **Teach Once, Automate Forever**: 5-step workflow checklist with animated checkmarks (see RESOLVED F7)
    2. **99% Reliability**: Confidence meter at 99.2% with NumberTicker animation (see RESOLVED F7)
    3. **Perfect Transparency**: Assertions panel with 8-10 checkmarked statements (see RESOLVED F7)
    4. **Self-Healing**: Split-screen button movement with pointer following (see RESOLVED F7)
    5. **Mission Control**: 4-metric dashboard overlay with count-up animations (see RESOLVED F7)
    6. **10x Speed**: Speed comparison bars (45s vs 2s, "22.5x faster" label) (see RESOLVED F7)
  - Notes: Each function returns CapabilitySimulation with tooltips, uiUpdates, visualEffects, agentMessage

**Phase 8: Main Demo Component Assembly**

- [ ] Task 17: Create AmazonDemo main component
  - File: `src/components/mocks/amazon/AmazonDemo.tsx`
  - Action: Assemble all pieces:
    - MockUIProvider with AmazonData initial state
    - StepSelector above MockUIShell
    - MockUIShell with current view (Search/Product/Cart/Checkout/Confirmation) + AgentInterface sidebar
    - CapabilityBadge overlay
    - OverlayTooltip system
    - Pointer component with teleport animations
  - Notes: Follow HotelPMSDemo.tsx pattern, include InteractiveGridPattern as background

- [ ] Task 18: Wire up Pointer teleport logic
  - File: `src/components/mocks/amazon/AmazonDemo.tsx`
  - Action: Implement pointer animation that teleports to interaction targets using specifications from RESOLVED F6
  - Notes: 
    - Use Framer Motion `animate` with x/y coordinates from getBoundingClientRect()
    - Target center calculation: rect.left + width/2, rect.top + height/2
    - Fade in/out transitions (opacity: [0, 1], duration: 0.4s)
    - Z-index: pointer at z-50, scroll target into view if off-screen
    - Trigger on agent actions with 200ms debounce

**Phase 9: Landing Page Integration**

- [ ] Task 19: Create barrel export for Amazon demo
  - File: `src/components/mocks/amazon/index.ts`
  - Action: Export AmazonDemo as named export for dynamic import
  - Notes: Follow pattern from `src/components/mocks/hotel-pms/index.ts`: `export { AmazonDemo } from "./AmazonDemo";`

- [ ] Task 20: Integrate Amazon demo into UseCases section
  - File: `src/components/sections/UseCases.tsx`
  - Action: 
    1. Add dynamic import for AmazonDemo (with loading state, ssr: false)
    2. Add "amazon" entry to DEMO_COMPONENTS map
    3. Add Amazon tab to tab navigation (if needed in USE_CASES constant)
  - Notes: Follow exact pattern of existing demo imports (HotelPMSDemo, CRMDemo, etc.). Demo will appear alongside existing demos in tabbed interface.

### Acceptance Criteria

**Core Functionality:**

- [ ] AC1: Given the Amazon demo loads, when user views the page, then all UI elements render correctly with Agent School branding (teal/orange colors, not Amazon colors)

- [ ] AC2: Given the demo is active, when viewing any page, then the InteractiveGridPattern background is visible outside the MockUIShell

- [ ] AC3: Given the demo loads, when user sees the StepSelector, then all 3 modes are visible: manual (← →), jump ([1][2][3][4][5]), and auto (▶ Play)

**Navigation & Flow:**

- [ ] AC4: Given manual mode is active, when user clicks → button, then demo advances to next step (Search → Product → Cart → Checkout → Confirmation)

- [ ] AC5: Given jump mode is active, when user clicks step [3], then demo immediately jumps to CartView

- [ ] AC6: Given auto mode is active, when user clicks ▶ Play, then demo automatically progresses through all 5 steps with 3-second pauses between steps

- [ ] AC7: Given auto mode is playing, when user clicks pause, then auto-progression stops and user can resume or switch to manual/jump mode

- [ ] AC8: Given the demo is on step 5 (Confirmation), when user clicks → in manual mode, then button is disabled (no next step)

**Agent Capabilities Demonstration:**

- [ ] AC9: Given capability 1 (Teach Once, Automate Forever) is active, when displayed, then visual simulation shows workflow steps with animated checkmarks

- [ ] AC10: Given capability 2 (99% Reliability) is active, when displayed, then confidence meter shows 99.2% with animated number ticker

- [ ] AC11: Given capability 3 (Perfect Transparency) is active, when displayed, then assertions panel overlays the UI showing step-by-step validation

- [ ] AC12: Given capability 4 (Self-Healing) is active, when displayed, then UI simulation shows a button moving positions and agent successfully adapting to find it

- [ ] AC13: Given capability 5 (Mission Control) is active, when displayed, then metrics dashboard overlay shows execution stats, timing, and monitoring data

- [ ] AC14: Given capability 6 (10x Speed) is active, when displayed, then speed comparison visual shows "2s" vs "45s" with animated highlighting

- [ ] AC15: Given a capability is demonstrated, when active, then CapabilityBadge shows progress indicator (e.g., "3/6 capabilities shown")

**Magic UI Effects:**

- [ ] AC16: Given the agent is interacting with an element, when action occurs, then Pointer teleports to element position with smooth fade transition

- [ ] AC17: Given an interactive element (button, product card) is visible, when rendered, then BorderBeam animation travels along its border

- [ ] AC18: Given a product card, cart item, or order summary is displayed, when rendered, then it's wrapped in MagicCard with spotlight effect following mouse

- [ ] AC19: Given user hovers over MagicCard wrapped elements, when mouse moves, then spotlight gradient follows cursor smoothly

**Overlay Tooltips:**

- [ ] AC20: Given the agent performs an action, when action completes, then overlay tooltip appears near the target element with explanatory text

- [ ] AC21: Given a tooltip is displayed, when 3 seconds elapse, then tooltip auto-fades out (no manual dismissal needed)

- [ ] AC22: Given multiple actions occur rapidly, when tooltips queue, then they appear sequentially (not simultaneously)

- [ ] AC23: Given a tooltip is active, when it explains the action, then text clearly describes what the agent is doing and why

**Purchase Flow:**

- [ ] AC24: Given SearchView is active, when user/agent searches for "apple", then product grid displays apple products with MagicCard wrappers

- [ ] AC25: Given ProductDetailView is active, when "Add to Cart" button is clicked, then cart updates and view transitions to CartView

- [ ] AC26: Given CartView is active, when cart contains items, then quantity controls work and subtotal updates correctly

- [ ] AC27: Given CartView is active, when "Proceed to Checkout" is clicked, then view transitions to CheckoutView

- [ ] AC28: Given CheckoutView is active, when "Place Order" is clicked, then view transitions to ConfirmationView with order summary

- [ ] AC29: Given ConfirmationView is active, when displayed, then order number, items, total, and success message are visible

**Agent Interface:**

- [ ] AC30: Given the AgentInterface is visible, when agent processes actions, then thinking indicator shows 3 pulsing teal-to-orange gradient dots

- [ ] AC31: Given the agent executes the workflow, when each step completes, then chat messages explain the action taken

- [ ] AC32: Given suggested queries are displayed, when user clicks a suggestion, then agent processes it as if typed

**Dark Mode:**

- [ ] AC33: Given system dark mode is enabled, when demo loads, then all components render in dark theme (slate colors, appropriate contrast)

- [ ] AC34: Given system light mode is enabled, when demo loads, then all components render in light theme (white backgrounds, slate text)

**Edge Cases:**

- [ ] AC35: Given auto mode is playing, when user manually clicks a step, then auto mode pauses and switches to jump mode

- [ ] AC36: Given the demo is at any step, when user clicks the same step again in jump mode, then nothing happens (no re-render thrash)

- [ ] AC37: Given no products match search query, when searched, then "No results found" message displays with suggestion to try different query

- [ ] AC38: Given cart is empty, when CartView loads, then "Your cart is empty" message displays with "Continue Shopping" button

## Additional Context

### Dependencies

**Magic UI Components (to be added):**
- **Pointer** - Custom cursor that teleports between interactions
  - Source: https://magicui.design/docs/components/pointer
  - Installation: CLI command or manual copy from Magic UI docs
  - Props: Custom SVG shape, color, animated positioning
  - Brand customization: Teal/orange gradient cursor

- **BorderBeam** - Animated beam of light traveling along borders
  - Source: https://magicui.design/docs/components/border-beam
  - Installation: CLI command or manual copy
  - Props: `colorFrom`, `colorTo`, `duration`, `size`, `reverse`
  - Use on: Buttons, product cards, form fields

- **MagicCard** - Spotlight effect that follows mouse cursor
  - Source: https://magicui.design/docs/components/magic-card
  - Installation: CLI command or manual copy
  - Props: `gradientSize`, `gradientColor`, `gradientFrom`, `gradientTo`
  - Use on: Product cards, cart items, order summary

- **InteractiveGridPattern** - Interactive SVG background grid
  - Source: https://magicui.design/docs/components/interactive-grid-pattern
  - Installation: CLI command or manual copy
  - Props: `width`, `height`, `squares`, `squaresClassName`
  - Placement: Outside MockUIShell as background layer

**Existing Dependencies (already installed):**
- Framer Motion 12 - Animations and gestures
- lucide-react - Icons (ShoppingCart, Search, CreditCard, etc.)
- Tailwind CSS 3.4 - Styling with custom config
- next-themes - Dark mode (via ThemeProvider)

**No External Package Installation Required:**
- Magic UI components are copy-paste (not npm packages)
- All components built with existing stack (React, Framer Motion, Tailwind)

### Testing Strategy

**No Automated Tests Required:**
- Project has no test framework installed (no Jest, Vitest, Cypress, etc.)
- Testing will be manual/visual verification via browser

**Manual Testing Checklist:**

1. **Visual Verification (All Browsers)**
   - Test in Chrome, Firefox, Safari (if accessible)
   - Verify teal/orange branding appears correctly
   - Check dark mode switching (system preference based)
   - Confirm all Magic UI effects render (pointer, border beams, magic cards, grid background)
   - Verify responsive layout at mobile, tablet, desktop widths

2. **Navigation Testing**
   - **Manual Mode**: Click ← and → buttons, verify correct step transitions
   - **Jump Mode**: Click each step [1-5], verify immediate navigation to correct view
   - **Auto Mode**: Click ▶ Play, verify automatic progression with ~3s pauses between steps
   - **Mode Switching**: Test switching between modes mid-flow
   - **Edge Cases**: Test first step (← disabled), last step (→ disabled), clicking current step

3. **Capability Demonstration Testing**
   - Load demo and verify each capability (1-6) displays correct visual simulation:
     - Capability 1: Workflow checklist appears
     - Capability 2: Confidence meter shows 99.2%
     - Capability 3: Assertions panel overlays UI
     - Capability 4: Button moves, agent adapts visually
     - Capability 5: Metrics dashboard appears
     - Capability 6: Speed comparison (2s vs 45s) animates
   - Verify CapabilityBadge updates with current capability and progress (e.g., "3/6")

4. **Purchase Flow Testing**
   - Navigate through all 5 views in sequence
   - Verify data persistence (selected product appears in cart, cart items appear in checkout, order details appear in confirmation)
   - Test "Add to Cart" button updates cart count
   - Test quantity controls in cart (increase/decrease)
   - Verify price calculations (subtotal, tax, shipping, total)

5. **Magic UI Effects Testing**
   - **Pointer**: Verify teleports to correct elements during agent actions
   - **BorderBeam**: Check animation travels along borders of buttons, cards, form fields
   - **MagicCard**: Hover over product cards and verify spotlight follows mouse
   - **InteractiveGridPattern**: Verify grid displays in background (outside MockUIShell)

6. **Overlay Tooltip Testing**
   - Verify tooltips appear after agent actions
   - Check auto-dismiss after 3 seconds
   - Test tooltip queue (sequential display, no overlaps)
   - Verify tooltips position correctly near target elements with arrow pointers

7. **Agent Interface Testing**
   - Verify thinking indicator shows 3 pulsing teal-to-orange dots
   - Check agent messages display correctly in chat history
   - Test suggested queries (click to trigger)
   - Verify agent responses explain actions clearly

8. **Performance Testing**
   - Check page load time (<3s initial load)
   - Verify smooth animations (60fps target)
   - Test tooltip queue performance with rapid actions
   - Check memory usage doesn't grow excessively in auto mode

**Testing During Development:**
- Test each component individually as it's built
- Test integrated flow after Phase 8 (assembly)
- Test dark mode throughout all phases
- Test responsive breakpoints after each UI component is built

**Acceptance Criteria Verification:**
- Use the 38 acceptance criteria as a testing checklist
- Mark each AC as passing before considering implementation complete

### Notes

- **This demo will be embedded in the landing page UseCases section** (not a separate route)
- **Must follow the theme/styling of existing mini demos** (Hotel PMS, CRM, Instagram, Notion, Granola)
- **Dynamic import pattern required** - Demo imports with `ssr: false` and loading state
- This is the 6th mock demo alongside Hotel PMS, CRM, Instagram, Notion, and Granola
- Focus on demonstrating Agent School capabilities, not building a realistic Amazon clone
- User interaction is key - they control the flow via tri-mode step selection (manual/jump/auto)
- Multiple product types needed in catalog to show variety (not just apples)
- Interactive grid background sits OUTSIDE the MockUIShell (not inside Amazon UI)
- All 6 capabilities must be demonstrated through visual simulation, not just text
- Team review completed - architecture clear, ready for investigation phase

### Implementation Order Recommendations

**Critical Path (Build in this order to minimize rework):**

1. **Start with Magic UI components** (Tasks 1-4) - Other components depend on these
2. **Then type definitions** (Task 5) - Everything else needs these types
3. **Then mock data** (Task 6) - Views need data to render
4. **Then simplest view first** (Task 11: ConfirmationView) - Test pattern with minimal logic
5. **Then other views** (Tasks 7-10) - Build complexity gradually
6. **Then navigation** (Tasks 12-14) - UI complete, now add controls
7. **Then logic** (Tasks 15-16) - Wire up behavior after UI complete
8. **Then assembly** (Tasks 17-18) - Put all pieces together
9. **Then landing page integration** (Tasks 19-20) - Connect to UseCases section

**Parallel Work Opportunities:**
- After Task 5 (types) complete, Tasks 6-14 can be built in parallel (they're mostly independent)
- Task 16 (capabilities.ts) can be built in parallel with Tasks 12-14 (navigation components)

**Testing Checkpoints:**
- After Task 4: Verify Magic UI components render correctly in isolation
- After Task 11: Verify MockUIShell pattern works with ConfirmationView
- After Task 14: Verify all navigation modes work (manual/jump/auto)
- After Task 16: Verify each capability simulation displays correctly
- After Task 18: Full end-to-end testing of complete flow

### Known Risks & Mitigations

**Risk 1: Magic UI component customization complexity**
- Magic UI components may need significant customization for teal/orange branding
- **Mitigation**: Start with default components, customize incrementally, test each change

**Risk 2: Pointer teleport animation performance**
- Calculating target element positions for smooth teleport animation may be complex
- **Mitigation**: Use `getBoundingClientRect()` for positions, debounce rapid movements, test performance early

**Risk 3: Tooltip queue management**
- Managing sequential auto-advancing tooltips without race conditions
- **Mitigation**: Use queue data structure, process one at a time, add timeout tracking

**Risk 4: Auto mode timing coordination**
- Coordinating step transitions, capability displays, and tooltip timing in auto mode
- **Mitigation**: Use async/await pattern, clear timeout references, add pause/resume logic

**Risk 5: State management complexity**
- Managing currentStep, currentCapability, stepMode, tooltipQueue simultaneously
- **Mitigation**: Follow existing MockUIContext pattern, use reducer for predictable updates

**Risk 6: Dark mode visual contrast**
- Teal/orange gradients may have poor contrast in dark mode
- **Mitigation**: Test early, adjust opacity/brightness for dark mode variants, use Tailwind `dark:` classes

### Success Metrics

**Qualitative:**
- Demo clearly showcases all 6 Agent School capabilities through visual simulation
- User can easily understand and control the flow (tri-mode navigation is intuitive)
- Magic UI effects enhance the experience without overwhelming the content
- Agent School branding (teal/orange) is prominent and visually appealing

**Quantitative:**
- All 38 acceptance criteria pass manual testing
- Page load time < 3 seconds
- Animations run at 60fps (no jank)
- Dark mode and light mode both render correctly
- Responsive at mobile (375px), tablet (768px), desktop (1440px) widths

### Future Enhancements (Out of Scope for Initial Release)

- Real-time collaboration (multiple users watching same demo)
- Custom product search (user types query, agent searches)
- Capability replay (rewatch specific capability demonstration)
- Export agent workflow as shareable link
- Analytics tracking (which capabilities users engage with most)
- Multi-language support (Spanish, French, etc.)
- Voice narration option for accessibility
