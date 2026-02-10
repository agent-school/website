# Agent School Video Documentation

Complete documentation for the 45-second Agent School marketing video.

---

## 📚 Documentation Index

### Getting Started
- **[00-getting-started.md](./00-getting-started.md)** - Installation, preview, first render

### Core Guides
- **[01-project-overview.md](./01-project-overview.md)** - Tech stack, architecture, goals
- **[02-video-structure.md](./02-video-structure.md)** - Scene breakdown, timing, narrative
- **[03-design-system.md](./03-design-system.md)** - Colors, typography, animations

### Reference
- **[06-rendering-guide.md](./06-rendering-guide.md)** - Export options, codecs, social media specs

---

## Quick Links

### For New Users
1. Start with [Getting Started](./00-getting-started.md)
2. Understand the [Video Structure](./02-video-structure.md)
3. Learn to [Render](./06-rendering-guide.md)

### For Designers
1. Review [Design System](./03-design-system.md)
2. Understand visual guidelines
3. Learn animation principles

### For Developers
1. Read [Project Overview](./01-project-overview.md)
2. Explore component architecture
3. Learn customization patterns

---

## Video Overview

**Duration**: 45 seconds (1350 frames @ 30fps)  
**Resolution**: 1920x1080 (Full HD)  
**Scenes**: 8 complete scenes  
**Tech Stack**: Remotion 4.0, React 19, TypeScript 5, Tailwind CSS 3

### Scene Timeline

| # | Scene | Time | Description |
|---|-------|------|-------------|
| 1 | Intro | 0-4s | Particle explosion + logo |
| 2 | Problem | 4-11s | Split-screen RPA/AI failures |
| 3 | Solution | 11-28s | **Bento Grid showcase** ⭐ |
| 4 | Certification | 28-33s | Parallel testing grid |
| 5 | Self-Healing | 33-37s | 4-phase adaptation |
| 6 | Speed Race | 37-43s | Performance comparison |
| 7 | Stats | 43-45s | Metrics + CTA |

---

## Key Features

### 5 Realistic Software Mockups
- **E-commerce** (Orange) - Amazon-style product page
- **CRM** (Blue) - Salesforce-style interface
- **Hotel PMS** (Purple) - Property management
- **Banking** (Green) - Invoice processing
- **Healthcare** (Magenta) - Patient records

### Professional Effects
- **BorderBeam** - Animated glowing borders
- **Particles** - Dynamic backgrounds
- **Glassmorphism** - Color-coded themes
- **Spring animations** - Physics-based motion

---

## Common Tasks

### Preview Video
```bash
npm start
```
Select "AgentSchoolShowcase" from dropdown.

### Render Full Video
```bash
npx remotion render AgentSchoolShowcase out/video.mp4
```

### Render Test Clip
```bash
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-330
```

### High-Quality Export
```bash
npx remotion render AgentSchoolShowcase out/final.mp4 --quality=100
```

---

## Project Structure

```
remotion-video/
├── docs/                   # Documentation (you are here)
├── src/
│   ├── components/
│   │   ├── magic-ui/       # Animation components (5)
│   │   └── mockups/        # Software UIs (5)
│   ├── scenes/             # Video scenes (8)
│   ├── lib/                # Utilities
│   └── styles/             # Global CSS
├── out/                    # Rendered videos
├── README.md               # Main project readme
└── STATUS.md               # Build progress
```

---

## Documentation Status

| Doc | Status | Purpose |
|-----|--------|---------|
| 00-getting-started.md | ✅ Complete | Quick start guide |
| 01-project-overview.md | ✅ Complete | Architecture overview |
| 02-video-structure.md | ✅ Complete | Scene breakdown |
| 03-design-system.md | ✅ Complete | Visual guidelines |
| 06-rendering-guide.md | ✅ Complete | Export instructions |

### Planned Docs (Optional)
- 04-components-guide.md - Component API reference
- 05-scene-guide.md - Detailed scene docs
- 07-customization.md - How to modify
- 08-troubleshooting.md - Common issues
- 09-development-log.md - Build history

---

## Additional Resources

### In This Repo
- **[../README.md](../README.md)** - Main project readme
- **[../STATUS.md](../STATUS.md)** - Build progress tracker
- **[../COMPLETION_SUMMARY.md](../COMPLETION_SUMMARY.md)** - Detailed build report

### External
- **[Remotion Docs](https://remotion.dev)** - Official Remotion documentation
- **[Tailwind CSS](https://tailwindcss.com)** - Utility CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

---

## Contributing to Docs

### Adding New Documentation
1. Create file: `docs/XX-topic-name.md`
2. Follow existing format
3. Add to this index
4. Link from related docs

### Doc Format
```markdown
# Title

Brief description.

---

## Section 1

Content...

---

## Section 2

Content...

---

**Next**: Link to [Next Doc →](./next-doc.md)
```

---

## Questions?

- **Can't find something?** Check [Getting Started](./00-getting-started.md)
- **Render issues?** See [Rendering Guide](./06-rendering-guide.md)
- **Design questions?** See [Design System](./03-design-system.md)
- **Need overview?** See [Project Overview](./01-project-overview.md)

---

**Ready to start?** → [Getting Started →](./00-getting-started.md)
