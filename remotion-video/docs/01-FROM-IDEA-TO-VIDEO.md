# 01 - From Idea to Video: Complete Pipeline

This document outlines the **complete workflow** for creating a video from concept to final export. Use this as your playbook for future video projects.

---

## Pipeline Overview

```
Concept → Storyboard → Design → Build → Test → Render → Export
  (1h)      (2h)        (3h)     (8h)    (1h)   (0.5h)  (0.5h)
```

**Total Time**: ~16 hours for a 45-60 second video

---

## Phase 1: Concept (1 hour)

### Define Objectives
**Questions to Answer**:
- What is the video's primary goal?
- Who is the target audience?
- What is the key message?
- What action should viewers take?

**For Agent School Video**:
- **Goal**: Convert website visitors into demo bookings
- **Audience**: Technical decision-makers, operations leaders, executives
- **Message**: "AI agents that learn once, run repeatedly, with 10x cost reduction"
- **Action**: Book a demo meeting

### Identify Key Scenes
**Framework**: 3-Act Structure
1. **Setup** (15%): Problem identification
2. **Confrontation** (70%): Solution demonstration
3. **Resolution** (15%): Call to action

**For Agent School** (45s video):
- **Setup** (7s): Intro + Problem statement
- **Confrontation** (31s): Solution showcase, certification, self-healing, speed comparison
- **Resolution** (7s): Dashboard + Final stats + CTA

### Content Inventory
**List All Assets Needed**:
- [ ] Brand colors and fonts
- [ ] Logo files
- [ ] UI mockups or references
- [ ] Icons
- [ ] Data/metrics to display
- [ ] Copy/text content

---

## Phase 2: Storyboard (2 hours)

### Scene Breakdown

**Template for Each Scene**:
```markdown
### Scene X: [Name] (Xs-Ys)

**Visual Concept**: [One sentence description]

**Key Elements**:
- Background: [Type and colors]
- Foreground: [Main UI elements]
- Text: [Headlines, body copy]
- Animations: [What moves and how]

**Animation Timing**:
- Frame 0-30: [What happens]
- Frame 30-60: [What happens]
...

**Exit Transition**: [How scene ends]
```

### Timing Spreadsheet

Create a frame-by-frame timing document:

| Scene | Start | End | Duration | Frames | Key Events |
|-------|-------|-----|----------|--------|------------|
| Intro | 0s | 4s | 4s | 120 | Particles → Logo → Tagline |
| Problem | 4s | 11s | 7s | 210 | Split-screen UI failures |
| Solution | 11s | 28s | 17s | 510 | 5-software showcase |
| ... | ... | ... | ... | ... | ... |

### Visual References

**Collect Inspiration**:
- Screenshots of similar videos
- UI mockup references
- Animation style examples
- Color palette inspiration

**For Agent School**:
- Magic UI showcase site
- Linear.app animations
- Stripe marketing videos
- Figma promotional content

---

## Phase 3: Design (3 hours)

### Design System Setup

**1. Color Palette**
```css
/* Define all colors with hex codes */
Navy: #0A2540
Orange: #FE9F4D
Purple: #6631D7
...
```

**2. Typography**
```css
/* Font families and sizes */
Display: system-ui, 80-120px
Heading: system-ui, 48-72px
Body: system-ui, 24-36px
```

**3. Component Styles**
- Glassmorphism treatments
- Border styles
- Shadow specifications
- Animation durations

### UI Mockup Design

**For Each Software Type**:
1. Research actual software (screenshots)
2. Identify key UI elements
3. Simplify while keeping authenticity
4. Design in Figma or directly in code

**Mockup Checklist**:
- [ ] Browser chrome (address bar, tabs)
- [ ] Navigation elements
- [ ] Main content area
- [ ] Interactive elements (buttons, forms)
- [ ] Status indicators
- [ ] Realistic data/content

### Background Designs

**Pattern Library**:
- Animated mesh gradient (Intro)
- Flickering grid (Problem)
- Retro grid (Solution)
- Dot pattern (Certification)
- Warp background (Dashboard)

---

## Phase 4: Build (8 hours)

### Project Setup (30 min)

```bash
# Initialize Remotion project
cd remotion-video
npm install

# Install dependencies
npm install framer-motion tailwindcss lucide-react clsx tailwind-merge

# Setup Tailwind
# Create tailwind.config.js
# Create postcss.config.js
# Create src/styles/globals.css
```

### Component Library (3 hours)

**Build Order** (most reusable first):
1. **Utility Components** (30 min)
   - `cn()` function
   - Color utilities
   - Animation helpers

2. **Background Components** (1 hour)
   - `<AnimatedMeshGradient />`
   - `<FlickeringGrid />`
   - `<RetroGrid />`
   - `<ParticlesBackground />`

3. **UI Components** (1.5 hours)
   - `<GlassmorphCard />`
   - `<BorderBeam />`
   - `<StatusBadge />`
   - `<OverlineGlow />`
   - `<AnimatedBeam />`

### Mockup Components (2 hours)

**Build Each Mockup**:
1. Start with simplest (Healthcare)
2. Build most complex (E-commerce)
3. Test in isolation
4. Add to scene

**Mockup Template**:
```tsx
export const EcommerceMockup: React.FC = () => {
  return (
    <div className="glass-card-ecommerce">
      {/* Browser chrome */}
      <BrowserChrome />
      
      {/* Main content */}
      <ProductGrid>
        {products.map(p => <ProductCard {...p} />)}
      </ProductGrid>
      
      {/* Interactive elements */}
      <CheckoutButton />
      
      {/* Border beam */}
      <BorderBeam color="#FF9800" />
    </div>
  );
};
```

### Scene Implementation (2.5 hours)

**Build Scenes in Order**:
1. Intro (easiest - particles + text)
2. Outro (simple - stats + CTA)
3. Problem (split-screen mockups)
4. Solution (bento grid)
5. Certification (grid)
6. Self-Healing (comparison)
7. Speed Race (animation heavy)
8. Dashboard (complex layout)

**Scene Template**:
```tsx
export const SceneName: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Animation values
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  
  return (
    <AbsoluteFill>
      {/* Background */}
      <Background type="..." />
      
      {/* Content */}
      <div style={{ opacity }}>
        {/* Scene content */}
      </div>
    </AbsoluteFill>
  );
};
```

### Integration (1 hour)

**Combine All Scenes**:
```tsx
// src/AgentSchoolShowcase.tsx
<AbsoluteFill>
  <Sequence from={0} durationInFrames={120}>
    <IntroScene />
  </Sequence>
  <Sequence from={120} durationInFrames={210}>
    <ProblemScene />
  </Sequence>
  {/* ... more scenes */}
</AbsoluteFill>
```

---

## Phase 5: Test (1 hour)

### Visual QA

**Check Each Scene**:
- [ ] Animations smooth at 30fps
- [ ] No flickering or artifacts
- [ ] Text readable at all times
- [ ] Colors consistent
- [ ] Timing feels right

### Technical QA

**Run Checks**:
```bash
# TypeScript check
npx tsc --noEmit

# Test render
npm run build

# Preview specific frames
npx remotion still AgentSchoolShowcase --frame=0 out/frame-0.png
npx remotion still AgentSchoolShowcase --frame=600 out/frame-600.png
npx remotion still AgentSchoolShowcase --frame=1350 out/frame-1350.png
```

### Timing Adjustments

**Common Issues**:
- Animations too slow → Reduce duration
- Text appears too late → Adjust delay
- Scene transition jarring → Add overlap
- Overall pacing off → Rebalance scene durations

---

## Phase 6: Render (30 min)

### Test Render

**Small section first**:
```bash
npx remotion render AgentSchoolShowcase out/test.mp4 \
  --frames=0-300 \
  --codec=h264
```

### Full Render

**Production quality**:
```bash
npx remotion render AgentSchoolShowcase out/agent-school-v2.mp4 \
  --codec=h264 \
  --quality=90
```

**Rendering Options**:
- `--quality`: 0-100 (recommend 80-90)
- `--codec`: h264 (compatibility) or h265 (smaller file)
- `--concurrency`: Number of threads (default: auto)
- `--log`: verbose for debugging

---

## Phase 7: Export (30 min)

### Format Variations

**Multiple Exports for Different Uses**:

```bash
# Web optimized
npx remotion render AgentSchoolShowcase out/web.mp4 \
  --codec=h264 \
  --quality=80

# High quality
npx remotion render AgentSchoolShowcase out/hq.mp4 \
  --codec=h265 \
  --quality=95

# Social media (square)
npx remotion render AgentSchoolShowcase out/social.mp4 \
  --width=1080 \
  --height=1080

# GIF preview
npx remotion render AgentSchoolShowcase out/preview.gif \
  --codec=gif \
  --every-nth-frame=2
```

### Delivery

**Final Checklist**:
- [ ] File size < 50MB for web
- [ ] Plays in all major browsers
- [ ] Thumbnail image extracted
- [ ] Backup copies created
- [ ] Uploaded to hosting
- [ ] Shared with stakeholders

---

## Continuous Improvement

### Gather Feedback

**Questions to Ask**:
- Does the message come across clearly?
- Are the animations too fast/slow?
- Which scene is most compelling?
- What's confusing or unclear?
- Would you take the desired action?

### Iterate

**Version Control**:
```bash
# After each major change
git add .
git commit -m "feat(video): improve scene transitions"

# Tag versions
git tag v2.1
git push --tags
```

### Document Learnings

**Maintain a changelog**:
```markdown
## v2.1 (2026-02-10)
- Sped up Problem scene by 2 seconds
- Added more realistic CRM mockup details
- Improved certification grid animations
- Changed outro CTA button style
```

---

## Troubleshooting

### Common Issues

**Slow Rendering**:
- Reduce complexity of animations
- Simplify background effects
- Use `--concurrency=2` to limit CPU usage

**Out of Memory**:
- Render in smaller chunks
- Reduce video resolution
- Close other applications

**TypeScript Errors**:
- Check component props
- Verify import paths
- Run `npm install` if missing types

**Animation Jank**:
- Use `interpolate()` instead of state
- Avoid re-renders in animation loops
- Simplify complex SVGs

---

## Next Steps

1. Review [02-DESIGN-SYSTEM.md](./02-DESIGN-SYSTEM.md) for visual guidelines
2. Check [05-SCENE-BREAKDOWN.md](./05-SCENE-BREAKDOWN.md) for detailed scene specs
3. See [07-COMPONENT-LIBRARY.md](./07-COMPONENT-LIBRARY.md) for all components
4. Follow [09-EDITING-WORKFLOW.md](./09-EDITING-WORKFLOW.md) to make changes

---

**Remember**: Start simple, iterate quickly, gather feedback early! 🚀
