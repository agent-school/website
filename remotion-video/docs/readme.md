# remotion video documentation

comprehensive documentation for the agent school 45-second marketing video project.

## 📚 documentation structure

### 01-getting-started/

**for:** first-time setup and quick reference

- **getting-started.md** - first steps with the project
- **quickstart.md** - 5-minute quick start guide
- **setup.md** - detailed remotion setup instructions
- **readme.md** - getting started overview

**start here if:** you're new to the project or setting up development environment

---

### 02-project-overview/

**for:** understanding project status and history

- **overview.md** - high-level project summary and architecture
- **completion-summary.md** - what was completed + session notes from development
- **status.md** - current project status and known issues

**read this if:** you need context on what's been built and project timeline

---

### 03-video-structure/

**for:** understanding the video content and timing

- **timeline.md** ⭐ - **frame-by-frame breakdown** of entire 45-second video (critical for editing)
- **scenes.md** - detailed descriptions of all 7 scenes
- **video-summary.md** - high-level video overview and structure

**use this when:** editing video timing, adjusting scene duration, or understanding content flow

**most important:** `timeline.md` has exact frame numbers, animation timings, and editing instructions

---

### 04-technical/

**for:** deep technical understanding of code and systems

- **file-structure.md** ⭐ - **complete guide to every file and folder** in the project
- **animations.md** ⭐ - **comprehensive animation system documentation** (remotion + framer-motion + custom)
- **design-system.md** - colors, fonts, typography, styles
- **components.md** ⭐ - **detailed component reference** for all scenes, mockups, and animations

**use this when:** 
- editing code or creating new components
- understanding how animations work
- modifying visual design or adding features

**most important for ai agents:** 
- `file-structure.md` - know where everything is
- `animations.md` - understand how to create/modify animations
- `components.md` - understand component architecture

---

### 05-rendering/

**for:** rendering videos and troubleshooting

- **rendering-guide.md** - complete rendering instructions and options
- **troubleshooting.md** ⭐ - **common issues and solutions** (check here first when errors occur)

**use this when:** 
- rendering final video or test clips
- encountering build errors or render issues
- optimizing render performance

---

### archive/

**for:** historical context

- **from-idea-to-video.md** - development journey notes (archived)

**read this if:** curious about how the project evolved

---

## 🚀 quick navigation

### "i want to..."

**...set up the project for the first time**
→ read `01-getting-started/quickstart.md`

**...understand what this video is about**
→ read `03-video-structure/video-summary.md`

**...edit scene timing or duration**
→ read `03-video-structure/timeline.md` (frame-by-frame reference)

**...understand how a specific animation works**
→ read `04-technical/animations.md`

**...find where a specific file is**
→ read `04-technical/file-structure.md`

**...create a new component or modify existing one**
→ read `04-technical/components.md`

**...render the final video**
→ read `05-rendering/rendering-guide.md`

**...fix a build error**
→ read `05-rendering/troubleshooting.md`

**...understand the design system (colors, fonts)**
→ read `04-technical/design-system.md`

**...know project status**
→ read `02-project-overview/status.md`

---

## ⭐ most important docs for ai agents

if you're an ai agent working on this project, prioritize these 4 docs:

### 1. file-structure.md (critical)
**why:** know where every file is and what it does  
**location:** `04-technical/file-structure.md`  
**covers:** complete project structure, file purposes, import patterns

### 2. timeline.md (critical for editing)
**why:** frame-accurate reference for timing changes  
**location:** `03-video-structure/timeline.md`  
**covers:** exact frame numbers, scene breakdowns, transition timings

### 3. animations.md (critical for animation work)
**why:** understand animation systems completely  
**location:** `04-technical/animations.md`  
**covers:** remotion, framer-motion, custom components, math, presets

### 4. troubleshooting.md (critical when errors occur)
**why:** quickly fix common issues  
**location:** `05-rendering/troubleshooting.md`  
**covers:** build errors, render issues, performance problems

---

## 📖 reading order for new developers

**day 1: setup & context**
1. `01-getting-started/quickstart.md` - set up environment
2. `02-project-overview/overview.md` - understand project
3. `03-video-structure/video-summary.md` - see what you're building

**day 2: technical deep dive**
4. `04-technical/file-structure.md` - know the codebase
5. `04-technical/design-system.md` - understand styles
6. `03-video-structure/timeline.md` - understand timing

**day 3: advanced topics**
7. `04-technical/animations.md` - master animations
8. `04-technical/components.md` - understand components
9. `05-rendering/rendering-guide.md` - learn rendering

**ongoing reference:**
- `05-rendering/troubleshooting.md` - when issues occur

---

## 🎯 documentation philosophy

this documentation is designed for:

### human developers
- clear explanations of "why" and "how"
- step-by-step guides
- troubleshooting tips

### ai agents (future editors)
- comprehensive technical details
- exact file paths and line numbers
- complete animation math and logic
- frame-accurate timing information

### future maintainers
- project history and context
- design decisions
- known issues and solutions

---

## 🔍 finding information

### by topic

| topic | documentation |
|-------|---------------|
| setup & installation | `01-getting-started/` |
| project status | `02-project-overview/status.md` |
| video content | `03-video-structure/` |
| frame timing | `03-video-structure/timeline.md` |
| code structure | `04-technical/file-structure.md` |
| animations | `04-technical/animations.md` |
| components | `04-technical/components.md` |
| styles & design | `04-technical/design-system.md` |
| rendering | `05-rendering/rendering-guide.md` |
| troubleshooting | `05-rendering/troubleshooting.md` |

### by file type

| file type | where documented |
|-----------|------------------|
| scene files (src/scenes/) | `04-technical/components.md` |
| mockup files (src/components/mockups/) | `04-technical/components.md` |
| animation files (src/components/magic-ui/) | `04-technical/animations.md` + `04-technical/components.md` |
| config files (*.config.*) | `04-technical/file-structure.md` |
| style files (globals.css) | `04-technical/design-system.md` |

### by task

| task | relevant docs |
|------|---------------|
| edit scene duration | `timeline.md` + `components.md` |
| add new scene | `timeline.md` + `components.md` + `animations.md` |
| change colors | `design-system.md` + `file-structure.md` |
| fix build error | `troubleshooting.md` |
| optimize render | `rendering-guide.md` + `troubleshooting.md` |
| create animation | `animations.md` + `components.md` |

---

## 📝 documentation conventions

### file naming
- **all lowercase** - no capitals in filenames
- **hyphens for spaces** - `file-structure.md` not `file_structure.md`
- **descriptive names** - `timeline.md` not `doc3.md`

### folder structure
- **numbered prefixes** - `01-`, `02-`, `03-` for logical ordering
- **grouped by purpose** - related docs in same folder
- **archive folder** - for historical docs no longer actively used

### markdown format
- **headers** - clear hierarchy (h1 → h2 → h3)
- **code blocks** - language-specific highlighting
- **tables** - for structured comparison data
- **examples** - inline code and full examples
- **emojis** - sparingly for visual navigation (⭐, 📚, 🎯)

---

## 🔄 keeping docs updated

when making changes to the project:

1. **code changes** → update relevant technical docs
2. **timing changes** → update `timeline.md`
3. **new components** → update `components.md`
4. **new animations** → update `animations.md`
5. **new issues** → update `troubleshooting.md`
6. **design changes** → update `design-system.md`

---

## 🤖 for ai agents: documentation guidelines

when editing this project as an ai agent:

### before editing code
1. read `file-structure.md` - know where files are
2. read `timeline.md` - understand timing constraints
3. read `components.md` - understand component architecture

### when creating new features
1. follow patterns in existing components
2. document new code inline (comments)
3. update relevant documentation files

### when encountering errors
1. check `troubleshooting.md` first
2. verify file paths with `file-structure.md`
3. check animation logic in `animations.md`

### after making changes
1. test in remotion studio (`npm start`)
2. verify render works (`npx remotion render ...`)
3. update docs if you added features

---

## 📦 documentation completeness

this documentation is **comprehensive and production-ready**:

- ✅ all files documented
- ✅ all scenes explained
- ✅ all animations detailed
- ✅ frame-accurate timing reference
- ✅ troubleshooting guide
- ✅ component reference
- ✅ setup instructions
- ✅ rendering guide

**nothing is missing.** future editors have complete context to work with this project.

---

## 🎓 project summary

**what:** 45-second marketing video for agent school  
**tech:** remotion (react-based video framework) + framer-motion + tailwind css  
**content:** 7 scenes showcasing ai agent automation platform  
**status:** complete and render-ready  

**key features:**
- particle explosion intro
- 5 interactive software mockups
- parallel certification visualization
- self-healing ui demonstration
- performance comparison
- final metrics + cta

**rendering:**
- 1350 frames @ 30fps
- 1920x1080 resolution
- ~5-10 minute render time (full video)

---

start with **`01-getting-started/quickstart.md`** if you're new, or jump directly to the doc you need using the navigation above!
