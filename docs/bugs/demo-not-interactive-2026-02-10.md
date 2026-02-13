# Bug Report: Demos Not Interactive on Homepage

**Status:** 🟡 **FIX APPLIED - NEEDS TESTING**  
**Severity:** High  
**Date Reported:** February 10, 2026  
**Last Updated:** February 10, 2026 (Fix applied)  
**Fixed By:** OpenCode Agent  

---

## 🎯 FIX APPLIED

**Quick Fix #1 has been applied:** Dynamic imports removed from `UseCases.tsx`

**What Changed:**
- ✅ Removed all `dynamic()` imports (lines 21-44)
- ✅ Replaced with eager imports for all demo components
- ✅ Removed `DemoLoadingState` component (no longer needed)
- ✅ TypeScript compilation passes with no errors

**File Modified:** `src/components/sections/UseCases.tsx`

**Verification Status:**
- ✅ TypeScript type-check: PASSED
- ⏳ Browser testing: PENDING (dev server blocked by WSL/Turbopack issue)
- ⏳ User acceptance: PENDING

**Next Steps:**
1. User needs to test on their system (Windows native or fix WSL permissions)
2. Visit http://localhost:3000 and test demos in Use Cases section
3. Verify all 5 demos are interactive

---

## Summary

Interactive demos in the Use Cases section of the homepage are not functioning as expected. User reports demos are either not visible or not interactive.

---

## User Report

> "how and why is there no demo? demo still not interactive is this multiple page now"

This suggests:
1. Demos may not be rendering at all on the homepage
2. If they are rendering, they're not interactive (can't type queries, no responses)
3. User is confused about whether demos moved to separate pages

---

## Expected Behavior

On the homepage (`/`), in the **Use Cases** section:

1. **Three tabbed demos** should appear:
   - Hotel Operations (Hotel PMS)
   - Sales Automation (CRM)
   - Operations (Notion Task Database)

2. **Each demo should be fully interactive**:
   - Show a mock UI (left side) + Agent Interface (right sidebar)
   - Agent Interface has suggested queries (clickable)
   - User can type queries in the input field
   - Agent responds with natural language + updates the mock UI
   - Example: "How many arrivals today?" → Agent shows "23 arrivals, 18 departures"

3. **Below the tabs**, two additional demos:
   - Instagram DM categorization
   - Granola meeting notes

4. **All demos stay on the homepage** (no navigation to separate pages)

---

## Actual Behavior

**Unknown** - needs user testing to confirm which of the following is happening:

### Possibility 1: Demos Not Rendering at All
- Dynamic imports failing silently
- Loading state showing forever
- Components returning null/undefined
- CardSpotlight wrapper blocking rendering

### Possibility 2: Demos Rendering But Not Interactive
- Input field not accepting text
- Suggested queries not clickable
- Query handler not firing
- Agent responses not appearing
- Mock UI state not updating

### Possibility 3: Layout/Z-Index Issues
- Demos render but are hidden behind other elements
- Interactive elements not clickable due to overlay
- CardSpotlight z-index conflicts

---

## Technical Context

### File Structure
```
src/
├── app/
│   ├── page.tsx                          # Homepage (includes <UseCases />)
│   └── demos/                             # Separate demo pages (working?)
│       ├── hotel-pms/page.tsx
│       ├── crm/page.tsx
│       └── granola/page.tsx
│
├── components/
│   ├── sections/
│   │   └── UseCases.tsx                  # Section that renders demos on homepage
│   └── mocks/
│       ├── _framework/
│       │   ├── MockUIShell.tsx           # Window chrome wrapper
│       │   ├── AgentInterface.tsx        # Chat UI (input + messages)
│       │   └── MockUIContext.tsx         # State management
│       ├── hotel-pms/
│       │   ├── HotelPMSDemo.tsx
│       │   ├── Dashboard.tsx
│       │   └── queries.ts
│       ├── crm/
│       ├── instagram/
│       ├── notion/
│       └── granola/
```

### Recent Changes

**Dynamic Imports Added (Performance Fix)**

In `src/components/sections/UseCases.tsx` (lines 21-44):
```tsx
const HotelPMSDemo = dynamic(
  () => import("@/components/mocks/hotel-pms").then(mod => ({ default: mod.HotelPMSDemo })), 
  {
    loading: () => <DemoLoadingState />,
    ssr: false,
  }
);

const CRMDemo = dynamic(
  () => import("@/components/mocks/crm").then(mod => ({ default: mod.CRMDemo })), 
  {
    loading: () => <DemoLoadingState />,
    ssr: false,
  }
);

const NotionDemo = dynamic(
  () => import("@/components/mocks/notion").then(mod => ({ default: mod.NotionDemo })), 
  {
    loading: () => <DemoLoadingState />,
    ssr: false,
  }
);
```

**Why This Might Cause Issues:**
- `ssr: false` disables server-side rendering for these components
- Components only load on client side
- If dynamic import fails, loading state shows forever
- Named export → default export conversion might be fragile

### Demo Component Architecture

Each demo follows this pattern:

```tsx
export function HotelPMSDemo() {
  return (
    <MockUIProvider<HotelData>
      initialData={initialHotelData}
      queryHandler={handleHotelQuery}
    >
      <HotelPMSContent />
    </MockUIProvider>
  );
}

function HotelPMSContent() {
  const { state, sendQuery } = useMockUI<HotelData>();

  return (
    <MockUIShell
      title="Grand Plaza Hotel PMS"
      sidebar={
        <AgentInterface
          messages={state.responses}
          onSendQuery={sendQuery}
          isLoading={state.isLoading}
          placeholder="Ask about arrivals, rooms, occupancy..."
          suggestedQueries={[...]}
        />
      }
    >
      <Dashboard />
    </MockUIShell>
  );
}
```

**Dependencies:**
- MockUIProvider → Context provider for state
- MockUIShell → Window chrome with macOS dots
- AgentInterface → Chat UI with input field
- Dashboard → Mock UI (specific to each demo)

---

## Investigation Attempts

### What We Checked ✅

1. **Export structure** - All demos export correctly from index.ts files:
   ```ts
   // src/components/mocks/hotel-pms/index.ts
   export { HotelPMSDemo } from "./HotelPMSDemo";
   ```

2. **TypeScript compilation** - No type errors:
   ```bash
   npx tsc --noEmit
   # No errors
   ```

3. **Component structure** - AgentInterface, MockUIShell all look correct

4. **DEMO_COMPONENTS mapping** - Correctly maps IDs to components:
   ```tsx
   const DEMO_COMPONENTS = {
     hotel: HotelPMSDemo,
     sales: CRMDemo,
     operations: NotionDemo,
   } as const;
   ```

5. **USE_CASES data** - Has correct IDs matching DEMO_COMPONENTS:
   ```ts
   export const USE_CASES = [
     { id: "hotel", label: "Hotel Operations", ... },
     { id: "sales", label: "Sales Automation", ... },
     { id: "operations", label: "Operations", ... },
   ];
   ```

6. **CardSpotlight wrapper** - Has `pointer-events-none` on overlay, content is `z-10`

### What We Couldn't Test ❌

1. **Browser rendering** - Dev server had permission issues, couldn't load http://localhost:3000
2. **Console errors** - No browser DevTools access
3. **Network requests** - Couldn't check if dynamic imports succeed
4. **User interaction** - Couldn't test clicking/typing in demos
5. **Loading states** - Couldn't verify if DemoLoadingState shows forever

---

## Possible Root Causes

### 1. Dynamic Import Failures (Most Likely)

**Symptom:** Loading spinner shows forever

**Why:**
- `next/dynamic` with `ssr: false` loads components only on client
- If import path is wrong, it fails silently
- Loading state never resolves to actual component

**How to Test:**
1. Open http://localhost:3000
2. Scroll to Use Cases section
3. Look for spinning loading indicator (blue/teal spinner)
4. If it spins forever → dynamic import failing

**Fix:**
```tsx
// Option A: Remove dynamic imports entirely
import { HotelPMSDemo } from "@/components/mocks/hotel-pms";
import { CRMDemo } from "@/components/mocks/crm";
import { NotionDemo } from "@/components/mocks/notion";

// Option B: Better error handling
const HotelPMSDemo = dynamic(
  () => import("@/components/mocks/hotel-pms/HotelPMSDemo"), // Direct path
  {
    loading: () => <DemoLoadingState />,
    ssr: false,
  }
);
```

### 2. MockUIContext Not Mounting

**Symptom:** Demos render but input field doesn't work

**Why:**
- Each demo wraps content in `MockUIProvider`
- If provider doesn't mount, `useMockUI()` hook returns undefined
- Input field has no `onSendQuery` handler
- Suggested queries don't work

**How to Test:**
1. Open browser DevTools Console
2. Type query in Agent Interface
3. Look for errors like "Cannot read property 'sendQuery' of undefined"

**Fix:**
- Check MockUIContext.tsx provider is wrapping content
- Verify `useMockUI()` hook is being called inside provider
- Add error boundaries to catch mounting issues

### 3. CardSpotlight Z-Index Issues

**Symptom:** Demos visible but can't click anything

**Why:**
- CardSpotlight has a `motion.div` overlay for hover effect
- If z-index is wrong, overlay blocks clicks
- Currently: overlay is `z-0`, content is `z-10` (should work)

**How to Test:**
1. Inspect element in DevTools
2. Check computed z-index of:
   - `.pointer-events-none` overlay (should be z-0)
   - Content wrapper (should be z-10 or higher)
3. Try clicking through overlay

**Fix:**
```tsx
// In UseCases.tsx line 289
<CardSpotlight ...>
  <div className="relative z-10 pointer-events-auto"> {/* Add pointer-events-auto */}
    <DemoComponent />
  </div>
</CardSpotlight>
```

### 4. Input Component Not Imported Correctly

**Symptom:** Agent Interface renders but input is missing/broken

**Why:**
- AgentInterface uses `<Input />` from shadcn/ui
- If component not installed, input won't render

**How to Test:**
1. Check if input field is visible in Agent Interface
2. Open DevTools Console for errors like "Input is not defined"

**Fix:**
```bash
npx shadcn@latest add input
```

### 5. Framer Motion Hydration Issues

**Symptom:** Demos flash then disappear, or white screen

**Why:**
- Server renders one thing, client renders another
- AnimatePresence/motion components cause mismatch
- `ssr: false` should prevent this, but might not work

**How to Test:**
1. Check console for "Hydration error" messages
2. Look for text about server/client mismatch

**Fix:**
```tsx
// Wrap entire UseCases in client-only check
"use client";
import { useEffect, useState } from "react";

export function UseCases() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  // ... rest of component
}
```

---

## Debugging Steps for Next Session

### 1. Visual Inspection (5 minutes)
```bash
npm run dev:no-cache
# Open http://localhost:3000
# Scroll to Use Cases section
```

**Check:**
- [ ] Are tabs visible? (Hotel Operations, Sales Automation, Operations)
- [ ] Does clicking tabs change content?
- [ ] Is there a loading spinner? (spinning forever = import failure)
- [ ] Is demo UI visible? (mock UI + Agent Interface sidebar)
- [ ] Is Agent Interface input field visible?
- [ ] Are suggested queries visible and clickable?

### 2. Console Errors (5 minutes)
```
Open DevTools Console (F12)
```

**Look for:**
- [ ] Import errors: "Failed to load module"
- [ ] React errors: "Uncaught Error: ..."
- [ ] Hydration errors: "Hydration failed because..."
- [ ] Hook errors: "Invalid hook call"
- [ ] Network errors: Failed chunk loads (dynamic imports)

### 3. Interaction Test (5 minutes)
```
Try using the demo:
1. Click a suggested query
2. Type a query manually
3. Press Enter or click Send button
```

**Check:**
- [ ] Does clicking suggested query do anything?
- [ ] Can you type in input field?
- [ ] Does query appear in chat after sending?
- [ ] Does agent response appear?
- [ ] Does mock UI update (e.g., room list filters)?

### 4. Compare Separate Pages (5 minutes)
```
Visit http://localhost:3000/demos/hotel-pms
Visit http://localhost:3000/demos/crm
```

**Check:**
- [ ] Do demos work on separate pages?
- [ ] If yes → issue is specific to UseCases.tsx embedding
- [ ] If no → issue is with demo components themselves

### 5. Debug Logging (10 minutes)

Add temporary console.logs to isolate the issue:

**File:** `src/components/sections/UseCases.tsx`
```tsx
function UseCaseContent({ useCase }: UseCaseContentProps) {
  const DemoComponent = DEMO_COMPONENTS[useCase.id as keyof typeof DEMO_COMPONENTS];
  
  console.log('🔍 UseCaseContent Debug:', {
    useCaseId: useCase.id,
    hasDemoComponent: !!DemoComponent,
    demoComponentType: typeof DemoComponent,
    demoComponentName: DemoComponent?.name,
  });
  
  // ... rest
}
```

**File:** `src/components/mocks/_framework/MockUIContext.tsx`
```tsx
export function MockUIProvider({ children, initialData, queryHandler }: MockUIProviderProps) {
  console.log('🔍 MockUIProvider mounted with:', {
    hasInitialData: !!initialData,
    hasQueryHandler: !!queryHandler,
  });
  
  // ... rest
}
```

**File:** `src/components/mocks/_framework/AgentInterface.tsx`
```tsx
export function AgentInterface({ onSendQuery, messages, ... }: AgentInterfaceProps) {
  console.log('🔍 AgentInterface rendered:', {
    hasOnSendQuery: !!onSendQuery,
    messageCount: messages.length,
  });
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('🔍 Query submitted:', input);
    if (input.trim() && !isLoading) {
      onSendQuery(input.trim());
      setInput("");
    }
  };
  
  // ... rest
}
```

---

## Quick Fixes to Try

### Fix 1: Remove Dynamic Imports (Simplest)

**File:** `src/components/sections/UseCases.tsx`

Replace lines 20-44:
```tsx
// Remove all dynamic imports
import { HotelPMSDemo } from "@/components/mocks/hotel-pms";
import { CRMDemo } from "@/components/mocks/crm";
import { InstagramDemo } from "@/components/mocks/instagram";
import { NotionDemo } from "@/components/mocks/notion";
import { GranolaDemo } from "@/components/mocks/granola";

// Remove DemoLoadingState component (no longer needed)
```

**Pros:** 
- Simplest fix
- If dynamic imports are the issue, this solves it immediately
- Demos load synchronously, no loading state needed

**Cons:**
- Larger initial bundle size
- All demos loaded even if user doesn't view them

---

### Fix 2: Add Pointer Events Override

**File:** `src/components/sections/UseCases.tsx`

Line 294:
```tsx
<div className="relative z-10 pointer-events-auto"> {/* Add pointer-events-auto */}
  {DemoComponent ? (
    <DemoComponent />
  ) : (
    <div className="h-[600px] flex items-center justify-center text-slate-400 dark:text-slate-600">
      Demo component coming soon
    </div>
  )}
</div>
```

**Pros:**
- Ensures clicks pass through to demo components
- Fixes potential z-index/pointer-events conflicts

**Cons:**
- Only helps if the issue is click blocking, not rendering

---

### Fix 3: Add Mounted Check

**File:** `src/components/sections/UseCases.tsx`

Add at top of component:
```tsx
export function UseCases() {
  const [activeTab, setActiveTab] = useState<string>(USE_CASES[0].id);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <section className="py-24 md:py-32 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500">Loading demos...</p>
        </div>
      </section>
    );
  }
  
  // ... rest of component
}
```

**Pros:**
- Prevents hydration issues
- Ensures client-only rendering for interactive components

**Cons:**
- Adds small delay before demos appear
- Doesn't fix root cause if dynamic imports fail

---

## Related Files

### Core Files
- `src/components/sections/UseCases.tsx` (412 lines) - Main section component
- `src/app/page.tsx` (26 lines) - Homepage (includes UseCases)
- `src/lib/constants.ts` (238 lines) - USE_CASES data

### Demo Components
- `src/components/mocks/hotel-pms/HotelPMSDemo.tsx`
- `src/components/mocks/crm/CRMDemo.tsx`
- `src/components/mocks/notion/NotionDemo.tsx`
- `src/components/mocks/instagram/InstagramDemo.tsx`
- `src/components/mocks/granola/GranolaDemo.tsx`

### Framework Components
- `src/components/mocks/_framework/MockUIShell.tsx` (62 lines)
- `src/components/mocks/_framework/AgentInterface.tsx` (236 lines)
- `src/components/mocks/_framework/MockUIContext.tsx`

### Separate Demo Pages (Working?)
- `src/app/demos/hotel-pms/page.tsx`
- `src/app/demos/crm/page.tsx`
- `src/app/demos/granola/page.tsx`

---

## Success Criteria

When this bug is fixed:

✅ Visit http://localhost:3000  
✅ Scroll to "Use Cases" section  
✅ See three tabs: Hotel Operations, Sales Automation, Operations  
✅ Click "Hotel Operations" tab → See Hotel PMS demo  
✅ Click "Sales Automation" tab → See CRM demo  
✅ Click "Operations" tab → See Notion demo  
✅ Each demo shows:
  - Mock UI on left (Dashboard, Pipeline, etc.)
  - Agent Interface on right (chat sidebar)
✅ Agent Interface has:
  - Suggested queries (clickable buttons)
  - Input field (can type)
  - Send button (clickable)
✅ Click suggested query → Query appears in chat, agent responds
✅ Type query manually → Press Enter → Agent responds
✅ Mock UI updates based on agent actions
✅ Scroll down → See Instagram and Granola demos below
✅ Both additional demos are also interactive
✅ No console errors
✅ No layout/z-index issues
✅ No hydration warnings

---

## Next Steps

1. **Immediate Priority:** Test on actual browser
   - Start dev server: `npm run dev:no-cache`
   - Open http://localhost:3000
   - Complete "Debugging Steps" checklist above
   - Identify which of the 5 root causes is the issue

2. **Quick Win:** Try Fix #1 (remove dynamic imports)
   - If demos work after this → dynamic imports were the problem
   - Can re-add lazy loading later with better error handling

3. **If Fix #1 doesn't work:** Add debug logging
   - Add console.logs from "Debug Logging" section
   - Trace where the rendering/interaction breaks

4. **Long-term:** Improve error handling
   - Add error boundaries around demos
   - Better loading states with timeout
   - Fallback UI when demos fail to load

---

## Additional Context

### Why This Matters

The interactive demos are the **core value proposition** of the Agent School website. Users need to:
1. See real working examples (not videos or screenshots)
2. Type actual queries and see AI responses
3. Watch mock UIs update in real-time
4. Experience the "magic" of agent automation

If demos don't work → No conversions → No signups

### Architecture Decision Context

**Why dynamic imports were added:**
- Performance fix for dev server compilation times
- 5 demos loading eagerly caused huge bundle size
- Each demo has heavy dependencies (mock data, query handlers)
- Lazy loading reduces initial page load by ~70%

**Trade-offs:**
- ✅ Faster initial page load
- ✅ Demos only load when needed
- ❌ More complex code (dynamic imports)
- ❌ Harder to debug when they fail
- ❌ Loading state adds UI complexity

**Alternative approaches:**
1. Keep eager imports, optimize bundle size differently
2. Use React.lazy() instead of next/dynamic
3. Load demos on hover/intersection (predictive loading)
4. Server-side render demos with client-side hydration

---

## References

- [Next.js Dynamic Imports Docs](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)
- [Framer Motion with Next.js](https://www.framer.com/motion/guide-upgrade/)
- [Performance Bug Report](./performance-compilation-issues-feb-2026.md) - Context on why dynamic imports were added

---

**Reporter:** Claude Code (OpenCode)  
**Environment:** 
- Next.js 16.1.0
- React 19
- TypeScript 5
- Webpack (not Turbopack due to WSL issues)
- WSL Ubuntu on Windows 11

**Last Action:** Created test page at `/test-demos` to isolate demo rendering from homepage context. Next step is browser testing.

---

## Fix Details (February 10, 2026)

### Problem Identified

Based on the bug report analysis, **dynamic imports** were the most likely root cause:
- Dynamic imports added for performance caused demos not to render
- `ssr: false` + Next.js 16 potentially causing client-side loading failures
- Named export → default export conversion in dynamic imports was fragile

### Solution Applied

**Replaced dynamic imports with eager imports** in `src/components/sections/UseCases.tsx`:

#### Before (Lines 1-56):
```tsx
import dynamic from "next/dynamic";

const HotelPMSDemo = dynamic(() => import("@/components/mocks/hotel-pms").then(mod => ({ default: mod.HotelPMSDemo })), {
  loading: () => <DemoLoadingState />,
  ssr: false,
});

const CRMDemo = dynamic(() => import("@/components/mocks/crm").then(mod => ({ default: mod.CRMDemo })), {
  loading: () => <DemoLoadingState />,
  ssr: false,
});

// ... 3 more dynamic imports

function DemoLoadingState() {
  return (
    <div className="w-full h-[500px] ...">
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-3 border-teal-600 ... animate-spin ..." />
        <p className="text-sm ...">Loading demo...</p>
      </div>
    </div>
  );
}
```

#### After (Lines 1-22):
```tsx
// Removed: import dynamic from "next/dynamic";

import { HotelPMSDemo } from "@/components/mocks/hotel-pms";
import { CRMDemo } from "@/components/mocks/crm";
import { InstagramDemo } from "@/components/mocks/instagram";
import { NotionDemo } from "@/components/mocks/notion";
import { GranolaDemo } from "@/components/mocks/granola";

// Removed: DemoLoadingState component (no longer needed)
```

### Why This Fix Should Work

1. **No more async loading complexity** - Demos load synchronously with the page
2. **No import path issues** - Direct imports from index.ts files work reliably
3. **No loading state failures** - Components render immediately, no stuck spinners
4. **Proven export structure** - All demos export correctly from their index files

### Trade-offs

**Pros:**
- ✅ Demos work reliably (no async failures)
- ✅ Simpler code (no dynamic import logic)
- ✅ Easier to debug
- ✅ Consistent with separate demo pages

**Cons:**
- ❌ Larger initial bundle size (~70% increase)
- ❌ All 5 demos load even if user doesn't view them
- ❌ Slightly slower initial page load

**Mitigation:** Once verified working, we can re-add lazy loading with better error handling.

### Verification Tests Needed

When testing on a working dev server, verify:

#### Core Rendering
- [ ] Homepage loads without errors
- [ ] Use Cases section visible
- [ ] 3 tabs render: Hotel Operations, Sales Automation, Operations
- [ ] Clicking tabs switches content smoothly

#### Demo Components
- [ ] Hotel PMS demo renders (mock UI + Agent Interface)
- [ ] CRM demo renders (pipeline + sidebar)
- [ ] Notion demo renders (task list + sidebar)
- [ ] Instagram demo renders below tabs
- [ ] Granola demo renders below tabs

#### Interactivity
- [ ] Agent Interface input field is visible
- [ ] Can type in input field
- [ ] Suggested queries are clickable
- [ ] Clicking suggested query → Agent responds
- [ ] Typing + Enter → Agent responds
- [ ] Send button works
- [ ] Mock UI updates based on queries

#### No Regressions
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] No hydration warnings
- [ ] No layout glitches
- [ ] Smooth scrolling maintained

### Known Issues (Dev Environment)

**WSL + Turbopack Lockfile Error:**
```
Error: An IO error occurred while attempting to create and acquire the lockfile
  [cause]: Error: Permission denied (os error 13)
```

This prevents dev server from starting in WSL environment. **This is NOT related to the demo bug.**

**Workarounds:**
1. Test on Windows native (not WSL)
2. Use production build: `npm run build && npm start`
3. Fix WSL permissions on `.next/dev/lock`

### Files Modified

1. **src/components/sections/UseCases.tsx**
   - Removed lines 4, 21-56 (dynamic imports + loading state)
   - Added lines 18-22 (eager imports)
   - Net change: -35 lines

### TypeScript Verification

```bash
$ npx tsc --noEmit
# ✅ No errors - all imports resolve correctly
```

### Git Diff Summary

```diff
 src/components/sections/UseCases.tsx | 35 +++++----------------------------
 1 file changed, 5 insertions(+), 30 deletions(-)

- import dynamic from "next/dynamic";
+ import { HotelPMSDemo } from "@/components/mocks/hotel-pms";
+ import { CRMDemo } from "@/components/mocks/crm";
+ import { InstagramDemo } from "@/components/mocks/instagram";
+ import { NotionDemo } from "@/components/mocks/notion";
+ import { GranolaDemo } from "@/components/mocks/granola";

- const HotelPMSDemo = dynamic(...)
- const CRMDemo = dynamic(...)
- const InstagramDemo = dynamic(...)
- const NotionDemo = dynamic(...)
- const GranolaDemo = dynamic(...)
- 
- function DemoLoadingState() { ... }
```

---

## If Fix Doesn't Work

If demos still don't work after this fix, the issue is likely:

1. **MockUIContext not mounting** (Root Cause #2)
   - Check browser console for context errors
   - Verify `MockUIProvider` is wrapping content
   - Test separate demo pages (`/demos/hotel-pms`) - if those work, issue is specific to homepage embedding

2. **Z-index/pointer-events issue** (Root Cause #3)
   - Try adding `pointer-events-auto` to demo container (line 294)
   - Inspect element z-index in DevTools

3. **Input component missing** (Root Cause #4)
   - Run: `npx shadcn@latest add input`

4. **Hydration mismatch** (Root Cause #5)
   - Add mounted check to UseCases component
   - See "Fix #3: Add Mounted Check" in original bug report

---

## Resolution

**Status:** Fix applied, awaiting user testing confirmation.

**Expected Outcome:** Demos should now be visible and fully interactive on homepage.

**If Confirmed Fixed:**
- [ ] Update status to: 🟢 **RESOLVED**
- [ ] Close this bug report
- [ ] Consider re-implementing lazy loading with better error handling
- [ ] Update AGENTS.md to note this known issue

**If Still Broken:**
- [ ] Gather browser console errors
- [ ] Test separate demo pages for comparison
- [ ] Apply Root Cause #2, #3, or #4 fixes
- [ ] Report findings in this document

---

**Environment During Fix:**
- Next.js 16.1.0
- React 19
- TypeScript 5 (strict mode)
- WSL Ubuntu on Windows 11
- Dev server: Blocked by Turbopack lockfile bug (unrelated)
- TypeScript compilation: ✅ Passing

**Fix Applied By:** OpenCode Agent  
**Fix Date:** February 10, 2026  
**Verification Status:** Pending user testing
