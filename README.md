# Agent School Website

Marketing website for Agent School — a platform that teaches and certifies AI agents to automate software workflows.

## 🚀 Quick Start

```bash
npm install
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run start      # Serve production build
```

## 📁 Project Structure

- **Next.js 16.1.0** (App Router with Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 3.4** (custom navy/amber/cream theme)
- **Framer Motion 12** (scroll animations, interactive counters)
- **Lottie React** (6 custom JSON animations)
- **Deployed on Vercel**

## ✨ Features

- Fully functional ROI calculator with spring-physics animations
- 6 interactive demos (SkillBuilder, Certification, ScriptViewer, SelfHealing, SpeedRace, ROICalculator)
- Scroll-driven animations throughout all sections
- Custom design system: "Academic Precision" aesthetic
- Cal.com booking integration
- Fully responsive (desktop-first design)
- Accessibility: `prefers-reduced-motion` support

## 📚 Documentation

See [AGENTS.md](./AGENTS.md) for:
- Complete code style guide
- Component architecture
- Tailwind conventions
- Development workflows
- File organization rules

## 🎨 Design System

**Fonts:**
- Fraunces (serif) — headings, brand
- DM Sans (sans-serif) — body text
- JetBrains Mono — code, data

**Colors:**
- Navy (50-900) — primary brand
- Amber (50-600) — accent/CTA (#FE9F4D)
- Cream (50-300) — warm backgrounds (#FAF9F7)
- Charcoal (100-900) — neutral grays

## 🔧 Tech Notes

- No test framework (intentional for marketing site)
- No Prettier config (convention-based formatting)
- Named exports only (no `export default` except page/layout)
- Server Components by default (`"use client"` only when needed)
- All imports use `@/*` path alias

## 📞 Contact

- **Booking:** https://cal.com/jackagentschool/15min
- **Email:** hello@agentschool.io
- **LinkedIn:** https://linkedin.com/company/agent-school

## 📄 License

See [LICENSE](./LICENSE)
