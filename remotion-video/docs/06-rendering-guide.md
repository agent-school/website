# Rendering Guide

Complete guide to exporting your video.

---

## Quick Reference

```bash
# Full video (45s, default settings)
npx remotion render AgentSchoolShowcase out/video.mp4

# High-quality production
npx remotion render AgentSchoolShowcase out/final.mp4 --codec=h264 --quality=100

# Fast preview (lower quality)
npx remotion render AgentSchoolShowcase out/preview.mp4 --quality=50

# Specific frames only
npx remotion render AgentSchoolShowcase out/intro.mp4 --frames=0-120
```

---

## Basic Rendering

### Default Render
```bash
npx remotion render AgentSchoolShowcase out/video.mp4
```

**Output:**
- Codec: H.264
- Quality: 80 (default)
- Resolution: 1920x1080
- Frame rate: 30fps
- Duration: 45 seconds

---

## Quality Options

### Production (Max Quality)
```bash
npx remotion render AgentSchoolShowcase out/final.mp4 --quality=100
```
- Best quality
- Larger file size (~50-100MB)
- Use for final deliverables

### Balanced (Default)
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --quality=80
```
- Good quality
- Reasonable file size (~20-40MB)
- Use for most renders

### Preview (Fast)
```bash
npx remotion render AgentSchoolShowcase out/preview.mp4 --quality=50
```
- Lower quality
- Smaller file size (~10-20MB)
- Use for quick tests

---

## Partial Renders

### By Scene

```bash
# Intro only (4s)
npx remotion render AgentSchoolShowcase out/intro.mp4 --frames=0-120

# Problem only (7s)
npx remotion render AgentSchoolShowcase out/problem.mp4 --frames=120-330

# Solution only (17s)
npx remotion render AgentSchoolShowcase out/solution.mp4 --frames=330-840

# Certification only (5s)
npx remotion render AgentSchoolShowcase out/certification.mp4 --frames=840-990

# Self-Healing only (4s)
npx remotion render AgentSchoolShowcase out/selfhealing.mp4 --frames=990-1110

# Speed Race only (6s)
npx remotion render AgentSchoolShowcase out/speedrace.mp4 --frames=1110-1290

# Stats only (2s)
npx remotion render AgentSchoolShowcase out/stats.mp4 --frames=1290-1350
```

### Custom Range
```bash
# First 10 seconds
npx remotion render AgentSchoolShowcase out/clip.mp4 --frames=0-300

# Middle 20 seconds
npx remotion render AgentSchoolShowcase out/clip.mp4 --frames=300-900
```

---

## Performance Tuning

### Concurrency
Control how many frames render simultaneously:

```bash
# Max concurrency (fast, high CPU usage)
npx remotion render AgentSchoolShowcase out/video.mp4 --concurrency=8

# Lower concurrency (slower, less CPU usage)
npx remotion render AgentSchoolShowcase out/video.mp4 --concurrency=2

# Auto (default: 50% of CPU cores)
npx remotion render AgentSchoolShowcase out/video.mp4
```

### Image Format
Choose render buffer format:

```bash
# PNG (default, lossless)
npx remotion render AgentSchoolShowcase out/video.mp4 --image-format=png

# JPEG (faster, smaller)
npx remotion render AgentSchoolShowcase out/video.mp4 --image-format=jpeg
```

---

## Codec Options

### H.264 (Default, Best Compatibility)
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --codec=h264
```
- ✅ Works everywhere (web, social media, devices)
- ✅ Good compression
- ✅ Hardware acceleration

### H.265 (Smaller Files)
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --codec=h265
```
- ✅ 25-50% smaller files
- ❌ Limited browser support
- ❌ Slower encoding

### ProRes (Professional)
```bash
npx remotion render AgentSchoolShowcase out/video.mov --codec=prores
```
- ✅ Highest quality
- ✅ Post-production friendly
- ❌ Very large files (1-2GB)
- ❌ macOS only

---

## Output Formats

### MP4 (Recommended)
```bash
npx remotion render AgentSchoolShowcase out/video.mp4
```
Universal compatibility.

### MOV (Apple)
```bash
npx remotion render AgentSchoolShowcase out/video.mov
```
Native Apple format.

### WebM (Web)
```bash
npx remotion render AgentSchoolShowcase out/video.webm --codec=vp8
```
Optimized for web playback.

---

## Render Progress

### See Progress
Default shows progress bar:
```
Rendering frames 0-1350...
███████████████████░░░░ 75% (1012/1350 frames)
```

### Verbose Output
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --log=verbose
```

### Quiet Mode
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --log=error
```

---

## Social Media Specs

### LinkedIn
```bash
# Recommended: 30s, H.264, 1920x1080
npx remotion render AgentSchoolShowcase out/linkedin.mp4 \
  --frames=0-900 \
  --codec=h264 \
  --quality=85
```

**Requirements:**
- Max duration: 10 minutes
- Max file size: 200MB
- Aspect ratio: 16:9 or 1:1

### Twitter/X
```bash
# Recommended: 15s, H.264, 1920x1080
npx remotion render AgentSchoolShowcase out/twitter.mp4 \
  --frames=0-450 \
  --codec=h264 \
  --quality=80
```

**Requirements:**
- Max duration: 2min 20s
- Max file size: 512MB
- Aspect ratio: 16:9, 1:1, or 9:16

### Instagram Feed
```bash
# Recommended: 30s, H.264, 1080x1080 (1:1)
# Note: Requires custom composition for 1:1 aspect ratio
npx remotion render AgentSchoolShowcase out/instagram.mp4 \
  --codec=h264 \
  --quality=85
```

**Requirements:**
- Max duration: 60s
- Aspect ratio: 1:1 or 4:5

---

## Troubleshooting

### Render Fails Immediately
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Clear Remotion cache
rm -rf node_modules/.remotion
npm start
```

### Render Hangs / Slow
```bash
# Reduce concurrency
npx remotion render AgentSchoolShowcase out/video.mp4 --concurrency=2

# Use JPEG instead of PNG
npx remotion render AgentSchoolShowcase out/video.mp4 --image-format=jpeg

# Render shorter clip first
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-120
```

### Out of Memory
```bash
# Lower concurrency
npx remotion render AgentSchoolShowcase out/video.mp4 --concurrency=1

# Increase Node memory
NODE_OPTIONS=--max-old-space-size=8192 npx remotion render AgentSchoolShowcase out/video.mp4
```

### Black Screen
- Check imports in scene files
- Verify all components render in Studio first
- Check console for React errors

---

## Advanced Options

### Custom Output Dir
```bash
npx remotion render AgentSchoolShowcase ./exports/final.mp4
```

### Override Props
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --props='{"customProp": "value"}'
```

### Custom FPS
```bash
# 60fps (smoother, larger files)
npx remotion render AgentSchoolShowcase out/video.mp4 --fps=60

# 24fps (cinematic, smaller files)
npx remotion render AgentSchoolShowcase out/video.mp4 --fps=24
```

### Custom Resolution
```bash
# 4K (3840x2160)
npx remotion render AgentSchoolShowcase out/video.mp4 --width=3840 --height=2160

# 720p (1280x720)
npx remotion render AgentSchoolShowcase out/video.mp4 --width=1280 --height=720
```

---

## Batch Rendering

### Multiple Versions Script
Create `render-all.sh`:

```bash
#!/bin/bash

# Full video
npx remotion render AgentSchoolShowcase out/full.mp4 --quality=100

# LinkedIn (30s)
npx remotion render AgentSchoolShowcase out/linkedin.mp4 --frames=0-900 --quality=85

# Twitter (15s)
npx remotion render AgentSchoolShowcase out/twitter.mp4 --frames=0-450 --quality=80

# Preview (low quality)
npx remotion render AgentSchoolShowcase out/preview.mp4 --quality=50

echo "All renders complete!"
```

Run:
```bash
chmod +x render-all.sh
./render-all.sh
```

---

## Render Time Estimates

**45-second video @ 1920x1080:**

| CPU | Concurrency | Time |
|-----|-------------|------|
| Apple M2 | 8 | ~2-3 min |
| Intel i7 (8-core) | 4 | ~4-6 min |
| Intel i5 (4-core) | 2 | ~8-12 min |

**Factors:**
- Particle effects (Intro) are slowest
- Simple scenes (Stats) are fastest
- Quality setting affects encode time, not render time
- Concurrency = biggest performance lever

---

**Next**: Learn about [Troubleshooting →](./08-troubleshooting.md)
