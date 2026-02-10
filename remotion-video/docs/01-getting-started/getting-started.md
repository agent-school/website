# Getting Started

Quick guide to preview and render the Agent School video.

---

## Prerequisites

- **Node.js 18+** installed
- **npm** or **yarn** package manager
- **Git** (for cloning)

---

## Installation

```bash
# Navigate to project
cd remotion-video

# Install dependencies
npm install
```

---

## Preview in Remotion Studio

The fastest way to see your video:

```bash
npm start
```

This opens Remotion Studio in your browser at `http://localhost:3000`

**Steps:**
1. Wait for compilation (30-60 seconds)
2. Select **"AgentSchoolShowcase"** from composition dropdown
3. Press **Space** to play/pause
4. Use timeline to scrub through scenes

---

## Your First Render

### Quick Test (First 11 seconds)
```bash
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-330
```

### Full Video (45 seconds)
```bash
npx remotion render AgentSchoolShowcase out/agent-school-v2.mp4
```

### High-Quality Production
```bash
npx remotion render AgentSchoolShowcase out/final.mp4 \
  --codec=h264 \
  --quality=100 \
  --concurrency=4
```

---

## Common Issues

### TypeScript Errors in Editor
You may see red squiggles for `@/lib/utils` imports.

**Solution**: These are LSP warnings only. The video will render fine. Remotion's bundler resolves paths correctly.

### Remotion Studio Shows Black Screen
```bash
# Clear cache
rm -rf node_modules/.remotion
npm start
```

### Render Takes Too Long
- Reduce `--concurrency` value (default: 50% of CPU cores)
- Render shorter clips first with `--frames` flag
- Close other applications

---

## What to Watch For

When previewing in Studio:

✅ **Smooth animations** - No stuttering or jerky motion  
✅ **Text readability** - All text is clear at all sizes  
✅ **Color consistency** - Brand colors match across scenes  
✅ **BorderBeam effects** - Glowing borders appear on cards  
✅ **Scene transitions** - Smooth cuts between scenes  

---

## Next Steps

Once you've previewed the video:

1. **Read [Video Structure](./02-video-structure.md)** - Understand scene breakdown
2. **Read [Rendering Guide](./06-rendering-guide.md)** - Learn export options
3. **Read [Customization](./07-customization.md)** - Modify content/timing

---

## Quick Commands Reference

```bash
# Development
npm start                    # Open Remotion Studio
npx tsc --noEmit            # Type-check code

# Rendering
npx remotion render AgentSchoolShowcase out/video.mp4           # Full video
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-120  # Intro only

# Scene-specific renders
npx remotion render AgentSchoolShowcase out/intro.mp4 --frames=0-120      # 4s
npx remotion render AgentSchoolShowcase out/problem.mp4 --frames=120-330   # 7s
npx remotion render AgentSchoolShowcase out/solution.mp4 --frames=330-840  # 17s
```

---

## File Locations

- **Source code**: `src/`
- **Scenes**: `src/scenes/`
- **Mockups**: `src/components/mockups/`
- **Output**: `out/` (created after first render)
- **Docs**: `docs/` (you are here)

---

## Getting Help

- **TypeScript errors?** → See [Troubleshooting](./08-troubleshooting.md)
- **Want to customize?** → See [Customization](./07-customization.md)
- **Render issues?** → See [Rendering Guide](./06-rendering-guide.md)
- **Scene questions?** → See [Scene Guide](./05-scene-guide.md)

---

**Ready to dive deeper?** Continue to [Project Overview →](./01-project-overview.md)
