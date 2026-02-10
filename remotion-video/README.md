# agent school video project

45-second marketing video built with remotion (react-based video framework).

## 🎬 project overview

**duration:** 45 seconds (1350 frames @ 30fps)  
**resolution:** 1920x1080 (full hd)  
**status:** ✅ complete and render-ready  

**content:**
- 7 animated scenes
- 5 interactive software mockups
- particle effects, glassmorphism styling
- frame-accurate timing and transitions

## 🚀 quick start

```bash
# install dependencies
npm install

# start remotion studio (preview video)
npm start
# opens http://localhost:3000

# render full video (45 seconds)
npx remotion render AgentSchoolShowcase out/video.mp4

# render test clip (first 4 seconds)
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-120
```

## 📚 documentation

**comprehensive docs located in:** `docs/`

### start here
- **quickstart:** `docs/01-getting-started/quickstart.md`
- **rendering guide:** `docs/05-rendering/rendering-guide.md`
- **troubleshooting:** `docs/05-rendering/troubleshooting.md`

### key references
- **timeline (frame-by-frame):** `docs/03-video-structure/timeline.md` ⭐
- **file structure:** `docs/04-technical/file-structure.md` ⭐
- **animations:** `docs/04-technical/animations.md` ⭐
- **components:** `docs/04-technical/components.md` ⭐

### full documentation index
see `docs/readme.md` for complete navigation guide

## 🎯 for ai agents

if you're an ai agent editing this project:

1. **read first:** `docs/04-technical/file-structure.md` (know where everything is)
2. **for timing edits:** `docs/03-video-structure/timeline.md` (frame-accurate reference)
3. **for animations:** `docs/04-technical/animations.md` (complete animation system)
4. **when errors occur:** `docs/05-rendering/troubleshooting.md` (common fixes)

**all documentation is lowercase, organized by folders, with no duplicates.**

## 🛠️ tech stack

- **remotion** 4.0.419 - video framework
- **react** 18.3.1 - ui library
- **framer-motion** 12.34.0 - animations
- **tailwind css** 3.4.19 - styling
- **typescript** 5.9.3 - type safety

## 📁 project structure

```
remotion-video/
├── docs/                    # 📚 complete documentation
│   ├── 01-getting-started/  # setup guides
│   ├── 02-project-overview/ # project context
│   ├── 03-video-structure/  # timeline & scenes
│   ├── 04-technical/        # deep technical docs
│   ├── 05-rendering/        # rendering & troubleshooting
│   └── archive/             # historical notes
├── src/                     # source code
│   ├── scenes/              # 7 video scenes
│   ├── components/          # reusable components
│   │   ├── mockups/         # 5 software ui mockups
│   │   └── magic-ui/        # animation components
│   ├── lib/                 # utilities
│   └── styles/              # global css
├── out/                     # rendered videos
└── [config files]           # remotion, tailwind, typescript configs
```

## 🎨 video scenes

| scene | frames | duration | description |
|-------|--------|----------|-------------|
| intro | 0-120 | 0-4s | particle explosion + logo |
| problem | 120-330 | 4-11s | rpa failures vs expensive ai |
| solution | 330-840 | 11-28s | bento grid with 5 mockups (centerpiece) |
| certification | 840-990 | 28-33s | parallel testing grid |
| self-healing | 990-1110 | 33-37s | 4-phase ui adaptation |
| speed | 1110-1290 | 37-43s | performance comparison |
| stats | 1290-1350 | 43-45s | final metrics + cta |

see `docs/03-video-structure/timeline.md` for frame-accurate breakdown.

## ⚡ commands

```bash
# development
npm start                    # preview in remotion studio
npm run build                # production build (webpack)

# rendering
npx remotion render AgentSchoolShowcase out/video.mp4              # full video
npx remotion render AgentSchoolShowcase out/video.mp4 --frames=0-450  # first 15s
npx remotion render AgentSchoolShowcase out/video.mp4 --quality=95     # high quality

# troubleshooting
rm -rf node_modules/.cache .remotion  # clear caches
npm install --force                   # reinstall dependencies
```

## 🐛 common issues

| issue | solution |
|-------|----------|
| build errors | `rm -rf node_modules/.cache .remotion && npm start` |
| slow render | reduce particles in intro scene (line 15 of IntroSceneV2.tsx) |
| tailwind not working | verify `remotion.config.ts` has `enableTailwind()` |
| blank video output | check `src/index.ts` imports `./styles/globals.css` |

**full troubleshooting:** `docs/05-rendering/troubleshooting.md`

## ✅ project status

- ✅ all 7 scenes complete
- ✅ all 5 mockups complete
- ✅ all animations working
- ✅ build working (no errors)
- ✅ preview working in remotion studio
- ✅ comprehensive documentation

**ready to render final video.**

## 📖 documentation features

**for human developers:**
- step-by-step guides
- clear explanations
- troubleshooting tips

**for ai agents:**
- frame-accurate timing
- complete file structure reference
- comprehensive animation documentation
- exact line numbers for editing

**philosophy:** nothing is missing. future editors have complete context.

## 🎓 learning resources

- **remotion docs:** https://remotion.dev/docs
- **framer motion docs:** https://www.framer.com/motion/
- **tailwind docs:** https://tailwindcss.com/docs

## 🤝 for new contributors

1. read `docs/01-getting-started/quickstart.md`
2. run `npm start` and explore in remotion studio
3. read `docs/03-video-structure/video-summary.md`
4. dive into technical docs as needed

---

**start with:** `docs/readme.md` for complete documentation navigation
