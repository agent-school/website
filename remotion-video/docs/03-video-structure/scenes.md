# Video Structure

Complete breakdown of the 45-second Agent School video.

---

## Overview

- **Total Duration**: 45 seconds
- **Frame Count**: 1350 frames @ 30fps
- **Resolution**: 1920x1080 (Full HD)
- **Codec**: H.264 (MP4)
- **Scenes**: 8 complete scenes

---

## Scene Timeline

| Scene | Frames | Time | Duration | Purpose |
|-------|--------|------|----------|---------|
| **1. Intro** | 0-120 | 0-4s | 4s | Brand introduction + logo |
| **2. Problem** | 120-330 | 4-11s | 7s | Show RPA & AI failures |
| **3. Solution** | 330-840 | 11-28s | 17s | Bento Grid showcase |
| **4. Certification** | 840-990 | 28-33s | 5s | Parallel testing demo |
| **5. Self-Healing** | 990-1110 | 33-37s | 4s | UI adaptation demo |
| **6. Speed Race** | 1110-1290 | 37-43s | 6s | Performance comparison |
| **7. Stats** | 1290-1350 | 43-45s | 2s | Metrics + CTA |

---

## Scene 1: Intro (0-4s)

### Purpose
Establish brand identity with dynamic visual hook.

### Visual Elements
- **Background**: Gradient (navy → purple)
- **Particles**: Explosion effect converging to center
- **Logo**: "Agent School" text formation
- **Tagline**: Typing animation
- **Border**: Glowing BorderBeam around frame

### Animation Timeline
- **0-0.5s**: Particle explosion starts
- **0.5-2s**: Particles converge to center
- **2-3s**: Logo fades in
- **3-4s**: Tagline types out

### Key Technologies
- `Particles` component
- `BorderBeam` component
- `TypingAnimation` component
- Spring animations for logo

---

## Scene 2: Problem (4-11s)

### Purpose
Demonstrate the two failure modes Agent School solves.

### Layout
Split-screen comparison (left vs right).

### Left Panel: RPA Failure
- **Mockup**: E-commerce checkout page
- **Visual**: Orange glassmorphism theme
- **Error Overlay**: "Element not found" message
- **Message**: "RPA scripts break when UI changes"

### Right Panel: AI Agent Cost
- **Mockup**: CRM interface
- **Visual**: Blue glassmorphism theme
- **Thinking Overlay**: Token counter + cost tracker
- **Message**: "AI agents are slow and expensive"

### Animation Timeline
- **4-4.5s**: Title slides in
- **4.5-6s**: Left panel (E-commerce) fades in
- **6-7.5s**: Right panel (CRM) fades in
- **7.5-11s**: Error/cost overlays appear

### Key Technologies
- `EcommerceMockup` component
- `CRMMockup` component
- Glassmorphism styling
- Error state overlays

---

## Scene 3: Solution (11-28s) ⭐ CENTERPIECE

### Purpose
Showcase platform breadth with 5 software types in modern layout.

### Layout
**3x2 Bento Grid** with variable card sizes:
- **Top Row**: E-commerce (1x1), CRM (1x1), Hotel PMS (1x2 TALL)
- **Bottom Row**: Banking (2x1 WIDE), Healthcare (1x1)
- **Center**: "Agent School" hub badge (overlays grid)

### Each Card Contains
1. Software icon + name
2. 3-4 workflow steps (numbered)
3. "Certified" badge (green)
4. BorderBeam with unique color
5. Connection point (small circle for beams)

### Software Types & Colors
| Software | Color | Icon | Steps |
|----------|-------|------|-------|
| E-commerce | Orange (#FF9800) | ShoppingCart | Browse, Add to cart, Checkout |
| CRM | Blue (#00A1E0) | Users | Search, Update, Send email |
| Hotel PMS | Purple (#6631D7) | Building2 | Check-in, Assign room, Payment, Update status |
| Banking | Green (#10B981) | DollarSign | Review invoice, Approve, Process |
| Healthcare | Magenta (#D946EF) | Heart | Review chart, Update vitals, Prescribe |

### Animation Timeline
- **11-11.5s**: Title slides in
- **11.5-12s**: Grid scales up
- **12-14s**: Cards appear (staggered, 0.27s apart)
- **14-20s**: Workflow steps fade in per card
- **20-26s**: Center badge rotates in
- **26-28s**: Tagline fades in ("Teach once. Automate forever.")

### Key Technologies
- Bento Grid CSS layout (3x2)
- BorderBeam on each card
- Spring animations for cards
- Staggered reveals
- Central hub badge with rotation

---

## Scene 4: Certification (28-33s)

### Purpose
Prove reliability through parallel test execution.

### Layout
**3x4 grid** of test cards (12 tests total).

### Test Card Contains
- Test name + software type
- Progress bar (animated)
- Duration (e.g., "1.2s")
- Status indicator (running → complete)
- Checkmark on completion

### Tests Shown
1. Login Flow (E-commerce)
2. Add to Cart (E-commerce)
3. Checkout (E-commerce)
4. Contact Search (CRM)
5. Update Record (CRM)
6. Send Email (CRM)
7. Room Assignment (Hotel PMS)
8. Check-in Guest (Hotel PMS)
9. Invoice Processing (Banking)
10. Payment Auth (Banking)
11. Chart Update (Healthcare)
12. Prescription (Healthcare)

### Animation Timeline
- **28-28.5s**: Title fades in
- **28.5-29s**: Grid appears
- **29-32s**: Tests run in wave pattern (staggered)
- **32-33s**: "99% Pass Rate" badge scales in

### Key Technologies
- Grid layout (3x4)
- Progress bars
- Wave animation pattern
- Spring animations for badge
- BorderBeam on badge

---

## Scene 5: Self-Healing (33-37s)

### Purpose
Demonstrate automatic UI adaptation when software changes.

### Layout
Split-screen with center healing process.

### Left Panel: Before (v1.0)
- Checkout UI with button in position A
- Version badge: "v1.0"
- Old UI structure

### Right Panel: After (v1.1)
- Same checkout UI with button in position B
- Version badge: "v1.1" (green, animated)
- New UI structure

### Center: 4-Phase Healing Process
1. **⚠ Error Detected** (red) - "Button not found"
2. **🔍 Scanning UI** (yellow) - "Analyzing structure..."
3. **🎯 Match Found** (blue) - "94% confidence"
4. **✓ Self-Healed** (green) - "Updated to v1.1"

### Animation Timeline
- **33-33.5s**: Title fades in
- **33.5-34s**: Panels slide in
- **34-35s**: Phase 1 activates (red)
- **35-36s**: Phase 2 activates (yellow)
- **36-36.5s**: Phase 3 activates (blue)
- **36.5-37s**: Phase 4 activates (green), version badge updates

### Key Technologies
- Split-screen layout
- Phase indicators with icons
- Spring animations for phases
- Version badge transition
- Glassmorphism panels

---

## Scene 6: Speed Race (37-43s)

### Purpose
Prove performance advantage with real-time comparison.

### Layout
Split-screen race (left vs right).

### Left Panel: Generic AI (Slow)
- **Duration**: 45 seconds
- **Visual**: Red theme, loading spinner
- **Thinking steps**: 4 steps shown progressively
- **Metrics**: Token count (climbing to 8500), Cost ($0.50)
- **Status**: Completes at frame 160 (37s + 5.3s)

### Right Panel: Agent School (Fast)
- **Duration**: 2 seconds
- **Visual**: Green theme, rocket icon
- **Execution**: Instant
- **Metrics**: Token count (50), Cost ($0.05)
- **Status**: Completes at frame 40 (37s + 0.67s)

### Center
- **VS badge**: Orange gradient circle

### Bottom: Final Stats (appears after race)
- "22.5x Faster Execution" (cyan gradient)
- "10x Cost Reduction" (green gradient)

### Animation Timeline
- **37-37.5s**: Title fades in
- **37.5-38s**: Panels appear
- **38-41s**: Race runs (Generic AI slow, Agent School fast)
- **41-42s**: Agent School completes (rocket icon)
- **42-43s**: Stat cards scale in

### Key Technologies
- Progress bars
- Real-time number counting
- Staggered completion
- Spring animations for stats
- Gradient badges

---

## Scene 7: Stats (43-45s)

### Purpose
Close with key metrics and clear CTA.

### Layout
Centered content with 3 stat cards + logo + CTA.

### 3 Stat Cards (Top)
1. **10x Cost Reduction** (orange theme)
   - Icon: TrendingDown
   - BorderBeam effect
2. **2s Response Time** (cyan theme)
   - Icon: Zap
   - BorderBeam effect
3. **99% Reliability** (purple theme)
   - Icon: Shield
   - BorderBeam effect

### Logo (Center)
- "Agent School" large text
- "Turn Human Knowledge Into AI That Never Forgets" tagline

### CTA (Bottom)
- Email: "hello@agentschool.io"
- BorderBeam button effect
- Mail icon
- Subtitle: "Book a demo • Start automating in days, not months"

### Animation Timeline
- **43-43.3s**: Stat card 1 scales in
- **43.3-43.6s**: Stat card 2 scales in
- **43.6-44s**: Stat card 3 scales in
- **44-44.5s**: Logo scales in
- **44.5-45s**: CTA fades in

### Key Technologies
- Spring animations (staggered)
- BorderBeam on cards + button
- Gradient backgrounds
- Decorative pulsing dots

---

## Narrative Arc

The video tells a complete story:

1. **Hook** (Intro) - Grab attention with dynamic visuals
2. **Problem** (Problem) - Show pain points (RPA breaks, AI costs)
3. **Solution** (Solution) - Demonstrate platform breadth
4. **Proof** (Certification) - Prove reliability
5. **Innovation** (Self-Healing) - Show adaptability
6. **Performance** (Speed Race) - Prove speed + cost savings
7. **Close** (Stats) - Reinforce value, drive action

---

## Key Design Decisions

### Why This Structure?
- **4s intro**: Long enough to establish brand, short enough to keep attention
- **7s problem**: Shows both failure modes clearly
- **17s solution**: Longest scene - centerpiece showcasing breadth
- **5s certification**: Enough time to show 12 tests in wave
- **4s self-healing**: Quick demo of 4-phase process
- **6s speed race**: Enough time for dramatic comparison
- **2s stats**: Quick, punchy close

### Why This Order?
- Problem → Solution (classic story structure)
- Breadth → Depth (show what, then prove how)
- Features → Benefits (capabilities → results)
- Build to climax (Speed Race is most dramatic)
- End with CTA (clear next step)

---

## Customizing Scene Order

To reorder scenes, edit `src/AgentSchoolShowcase.tsx`:

```tsx
<Sequence from={0} durationInFrames={120}>
  <IntroSceneV2 />
</Sequence>

<Sequence from={120} durationInFrames={210}>
  <ProblemSceneV2 />
</Sequence>

// Add/remove/reorder Sequence blocks
```

**Important**: Update `startFrame` prop when reordering!

---

## Creating Shorter Versions

### 30-Second Version
Remove Certification scene (5s), shorten Solution to 12s:
- Intro: 4s
- Problem: 7s
- Solution: 12s ✂️ (was 17s)
- ~~Certification: 5s~~ ❌ (removed)
- Self-Healing: 4s
- Speed Race: 6s
- Stats: 2s
- **Total: 30s**

### 15-Second Version
Keep only essentials:
- Intro: 4s
- Problem: 7s
- Stats: 4s ✂️ (extended)
- **Total: 15s**

---

**Next**: Learn about the [Design System →](./03-design-system.md)
