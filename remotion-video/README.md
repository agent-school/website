# Agent School Video v2.0

**45-second marketing video** showcasing Agent School's platform through realistic software mockups and professional animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start Remotion Studio (preview & edit)
npm start

# Render full video (45 seconds)
npx remotion render AgentSchoolShowcase out/video.mp4
```

---

## 📹 Video Structure

**Total Duration**: 45 seconds (1350 frames @ 30fps)

| Scene | Duration | Description |
|-------|----------|-------------|
| **Intro** | 0-4s | Particle explosion + logo formation |
| **Problem** | 4-11s | Split-screen: RPA failures vs expensive AI |
| **Solution** | 11-28s | Bento Grid with 5 software types |
| **Certification** | 28-33s | 3x4 grid of parallel tests |
| **Self-Healing** | 33-37s | 4-phase UI adaptation demo |
| **Speed Race** | 37-43s | 2s vs 45s performance comparison |
| **Stats** | 43-45s | Final metrics + CTA |

---

## 🎨 Key Features

### 5 Realistic Software Mockups
Each mockup is a fully styled, authentic-looking UI:

1. **E-commerce** (Orange) - Amazon-style product page
2. **CRM** (Blue) - Salesforce-style interface
3. **Hotel PMS** (Purple) - Property management dashboard
4. **Banking** (Green) - Invoice processing & payments
5. **Healthcare** (Magenta) - Electronic health records

### Professional Visual Effects
- **BorderBeam**: Animated glowing borders
- **Particles**: Dynamic background system
- **Glassmorphism**: Color-coded per software type
- **Spring animations**: Physics-based natural motion
- **Bento Grid**: Modern card layout

---

## 📁 Project Structure

```
src/
├── components/
│   ├── magic-ui/          # Animation components (5)
│   └── mockups/           # Software UIs (5)
├── scenes/                # Video scenes (8)
│   ├── IntroSceneV2.tsx
│   ├── ProblemSceneV2.tsx
│   ├── SolutionScene.tsx
│   ├── CertificationScene.tsx
│   ├── SelfHealingScene.tsx
│   ├── SpeedRaceScene.tsx
│   └── StatsScene.tsx
├── lib/                   # Utilities
├── styles/                # Global CSS
├── AgentSchoolShowcase.tsx  # Main composition (v2.0)
└── Root.tsx               # Remotion entry
```

---

## 🛠️ Common Commands

### Development
```bash
# Start Remotion Studio
npm start

# Type-check without building
npx tsc --noEmit
```

### Rendering

```bash
# Render full video (45 seconds)
npx remotion render AgentSchoolShowcase out/agent-school-v2.mp4

# Render test clip (first 11 seconds)
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-330

# High-quality production render
npx remotion render AgentSchoolShowcase out/final.mp4 \
  --codec=h264 \
  --quality=100 \
  --concurrency=4
```

### Scene-Specific Renders
```bash
# Intro only (4 seconds)
npx remotion render AgentSchoolShowcase out/intro.mp4 --frames=0-120

# Problem only (7 seconds)
npx remotion render AgentSchoolShowcase out/problem.mp4 --frames=120-330

# Solution only (17 seconds)
npx remotion render AgentSchoolShowcase out/solution.mp4 --frames=330-840
```

---

## 📐 Design System

### Colors
- **Navy**: `#0A2540` (primary dark)
- **Orange**: `#FE9F4D` (accent/CTA)
- **Purple**: `#6631D7` (secondary)
- **Cream**: `#FAF9F7` (light background)

### Glassmorphism Per Software
- E-commerce: Orange tint (`#FF9800`)
- CRM: Blue tint (`#00A1E0`)
- Hotel: Purple tint (`#6631D7`)
- Banking: Green tint (`#10B981`)
- Healthcare: Magenta tint (`#D946EF`)

### Typography
- **Display**: Fraunces (serif) - headings
- **Body**: DM Sans (sans) - text
- **Mono**: JetBrains Mono - code/data

---

## 📚 Documentation

- **[STATUS.md](./STATUS.md)** - Build progress tracker
- **[COMPLETION_SUMMARY.md](./COMPLETION_SUMMARY.md)** - Detailed completion report
- **[docs/00-OVERVIEW.md](./docs/00-OVERVIEW.md)** - Project overview
- **[docs/01-FROM-IDEA-TO-VIDEO.md](./docs/01-FROM-IDEA-TO-VIDEO.md)** - Complete pipeline guide

---

## 🎬 Creating Variations

### 30-Second LinkedIn Version
Edit `src/AgentSchoolShowcase.tsx`:
```tsx
// Remove CertificationScene (5s) to get 40s
// Speed up Solution scene to 12s instead of 17s
// Total: 30 seconds
```

### 15-Second Twitter Version
```tsx
// Keep: Intro (4s) + Problem (7s) + Stats (2s) = 13s
// Add quick 2s transition
// Total: 15 seconds
```

---

## 🐛 Troubleshooting

### TypeScript Errors
You may see errors like:
```
Cannot find module '@/lib/utils'
```
**These are LSP warnings only.** Remotion's bundler resolves `@/*` paths correctly at runtime.

### Remotion Studio Won't Start
```bash
# Clear cache and restart
rm -rf node_modules/.remotion
npm start
```

### Video Renders Black Screen
- Check console for errors
- Verify all imports are correct
- Test individual scenes in Studio

### Animations Feel Choppy
- Adjust spring config (damping: 12-20, stiffness: 100-300)
- Reduce particle count in Intro scene
- Simplify backdrop-blur effects

---

## 🔄 Version History

### v2.0 (Current)
- ✅ 8 complete scenes (45 seconds)
- ✅ 5 realistic software mockups
- ✅ Magic UI animation components
- ✅ Bento Grid layout
- ✅ Professional glassmorphism design

### v1.0 (Baseline)
- 6 basic scenes (30 seconds)
- Text-based content
- Simple animations
- Generic design

---

## 🚀 Next Steps

### Immediate
1. **Test in Studio**: `npm start` → Watch full video
2. **First render**: Export and review
3. **Timing tweaks**: Adjust animation speeds if needed
4. **Production render**: Final export at max quality

### Optional Enhancements
- Add sound effects / music
- Complete remaining Magic UI components
- Add subtitles/captions
- Create alternate versions (30s, 15s)

---

## 📞 Support

**Questions?** Check the docs:
- [STATUS.md](./STATUS.md) - Current progress
- [COMPLETION_SUMMARY.md](./COMPLETION_SUMMARY.md) - Full build report
- [Remotion Docs](https://remotion.dev)

**Issues?** Run type-check first:
```bash
npx tsc --noEmit
```

---

## 📄 License

This project is part of the Agent School marketing materials.

---

**Built with**: Remotion 4.0 • React 19 • TypeScript 5 • Tailwind CSS 3 • Framer Motion 12

**Video specs**: 1920x1080 @ 30fps • H.264 codec • 45 seconds

**Ready to render?** Run `npm start` and select "AgentSchoolShowcase"! 🎬
