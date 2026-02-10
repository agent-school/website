# troubleshooting guide

common issues and solutions for the remotion video project.

## quick fixes

| problem | solution |
|---------|----------|
| build errors | `rm -rf node_modules/.cache .remotion && npm start` |
| typescript errors | ignore in editor, webpack resolves them |
| slow render | reduce particle count, disable border-beams |
| tailwind not working | check `remotion.config.ts` has `enableTailwind()` |
| postcss errors | ensure `postcss.config.cjs` (not `.js`) |

---

## build & startup errors

### error: "cannot find module '@/lib/utils'"

**symptoms:**
```
ERROR in ./src/components/ui/button.tsx
Module not found: Error: Can't resolve '@/lib/utils'
```

**cause:** webpack doesn't know about `@` alias

**solution:**
verify `remotion.config.ts` has:
```typescript
import * as path from "path";  // important: not default import

config.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      alias: {
        ...currentConfiguration.resolve?.alias,
        "@": path.join(process.cwd(), "src"),
      },
    },
  };
});
```

**git commit:** `ba03acb` (already fixed)

---

### error: "module is not defined in es module scope"

**symptoms:**
```
ReferenceError: module is not defined in ES module scope
    at postcss.config.js:1:1
```

**cause:** `package.json` has `"type": "module"` but `postcss.config.js` uses commonjs syntax

**solution:**
rename `postcss.config.js` → `postcss.config.cjs`

**command:**
```bash
mv postcss.config.js postcss.config.cjs
```

**git commit:** `f4dfe6f` (already fixed)

---

### error: "tailwindcss directly as a postcss plugin"

**symptoms:**
```
ERROR: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
The PostCSS plugin has moved to a separate package
```

**cause:** tailwind css v4 changed postcss integration

**solution:**
downgrade to tailwind v3:
```bash
npm uninstall tailwindcss
npm install tailwindcss@^3.4.1
```

**git commit:** `ba03acb` (already fixed)

**current version:** `tailwindcss@3.4.19`

---

### error: "cannot find remotion studio"

**symptoms:**
```
sh: 1: remotion: not found
```

**cause:** dependencies not installed

**solution:**
```bash
npm install
npm start
```

---

### error: "esbuild binary not found"

**symptoms:**
```
Error: The package "@esbuild/linux-x64" could not be found
```

**cause:** platform-specific binaries not installed

**solution (wsl/linux):**
```bash
npm install --force
```

**solution (windows):**
```bash
npm install @esbuild/win32-x64
```

---

## runtime errors

### error: "frame is undefined"

**symptoms:**
```
TypeError: Cannot read property 'frame' of undefined
```

**cause:** using `frame` outside remotion component context

**solution:**
only use `useCurrentFrame()` inside components rendered by remotion:
```typescript
// ✓ correct
export const MyScene: React.FC = () => {
  const frame = useCurrentFrame();
  return <div>{frame}</div>;
};

// ✗ wrong
const frame = useCurrentFrame();  // outside component
export const MyScene: React.FC = () => {
  return <div>{frame}</div>;
};
```

---

### error: "maximum update depth exceeded"

**symptoms:**
```
Error: Maximum update depth exceeded.
This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
```

**cause:** infinite re-render loop in animation logic

**solution:**
wrap expensive calculations in `useMemo`:
```typescript
// ✗ wrong - recalculates every frame
{particles.map((p, i) => {
  const angle = (Math.PI * 2 * i) / particles.length;
  return <Particle angle={angle} />;
})}

// ✓ correct - calculates once
const particleData = useMemo(() =>
  particles.map((p, i) => ({
    angle: (Math.PI * 2 * i) / particles.length
  })), [particles]
);

{particleData.map(({ angle }, i) => (
  <Particle angle={angle} />
))}
```

---

### error: "interpolate: input is nan"

**symptoms:**
```
Error: interpolate(): input is NaN
```

**cause:** passing `NaN` to `interpolate()` function

**solution:**
add guard condition:
```typescript
// ✗ wrong
const opacity = interpolate(frame, [0, 30], [0, 1]);

// ✓ correct
const frame = useCurrentFrame();
if (isNaN(frame)) return null;
const opacity = interpolate(frame, [0, 30], [0, 1]);
```

---

## rendering issues

### slow render (15+ seconds per frame)

**cause:** too many particles or complex animations

**solutions:**

1. **reduce particle count:**
```typescript
// in IntroSceneV2.tsx line 15
const particleCount = 200;  // was 1000
```

2. **disable border-beams for test render:**
```typescript
// in SolutionScene.tsx, comment out:
// <BorderBeam ... />
```

3. **use lower quality codec:**
```bash
npx remotion render AgentSchoolShowcase out/test.mp4 --codec=h264-mkv
```

4. **render without intro scene:**
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --frames=120-1350
```

---

### render hangs at 0%

**symptoms:**
```
Rendering 0/1350 frames (0%)
[hangs indefinitely]
```

**cause:** webpack compilation error or memory issue

**solutions:**

1. **check for compilation errors:**
```bash
npm run build
```

2. **increase node memory:**
```bash
NODE_OPTIONS=--max-old-space-size=8192 npx remotion render AgentSchoolShowcase out/video.mp4
```

3. **clear caches:**
```bash
rm -rf node_modules/.cache .remotion
npm start
```

---

### render produces blank video

**symptoms:**
video file created but is all black/blank

**cause:** missing css imports or component errors

**solutions:**

1. **verify css import in `src/index.ts`:**
```typescript
import "./styles/globals.css";  // must be first line
```

2. **check for runtime errors:**
```bash
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-30
# watch for errors in output
```

3. **test in studio first:**
```bash
npm start
# verify video plays correctly at http://localhost:3000
```

---

### render crashes with "out of memory"

**symptoms:**
```
FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
```

**cause:** not enough memory for render

**solutions:**

1. **increase node memory:**
```bash
NODE_OPTIONS=--max-old-space-size=16384 npx remotion render AgentSchoolShowcase out/video.mp4
```

2. **reduce concurrency:**
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --concurrency=1
```

3. **close other applications**

---

## preview issues

### remotion studio shows blank screen

**cause:** compilation error or css not loading

**solutions:**

1. **check terminal for errors:**
look for webpack compilation errors in terminal where `npm start` is running

2. **hard refresh browser:**
- chrome: `ctrl + shift + r` (windows/linux) or `cmd + shift + r` (mac)
- firefox: `ctrl + f5` (windows/linux) or `cmd + shift + r` (mac)

3. **clear remotion cache:**
```bash
rm -rf .remotion
npm start
```

---

### animations not playing smoothly in studio

**cause:** browser performance or too many elements

**solutions:**

1. **reduce playback quality:**
in remotion studio, click "quality" dropdown → select "low"

2. **disable real-time playback:**
click "render" → render short clip to check smoothness

3. **close browser tabs:**
free up browser resources

---

### video jumps or skips in preview

**cause:** frame drops due to performance

**solution:**
this is normal in preview. final render will be smooth.

to verify:
```bash
npx remotion render AgentSchoolShowcase out/test.mp4 --frames=0-120
# play rendered video (will be smooth)
```

---

## style & css issues

### tailwind classes not working

**symptoms:**
classes like `bg-navy-800` don't apply styles

**solutions:**

1. **verify tailwind enabled in `remotion.config.ts`:**
```typescript
import { enableTailwind } from "@remotion/tailwind";
enableTailwind(config);
```

2. **check `postcss.config.cjs` exists:**
```bash
ls postcss.config.cjs  # should exist
```

3. **verify css import in `src/index.ts`:**
```typescript
import "./styles/globals.css";
```

4. **restart remotion studio:**
```bash
# ctrl+c to stop
npm start
```

---

### custom colors not working

**symptoms:**
colors like `text-navy-800` don't work

**solution:**
check `tailwind.config.js` has custom colors defined:
```javascript
theme: {
  extend: {
    colors: {
      navy: {
        50: "#F0F4F8",
        // ...
        900: "#0A2540"
      }
    }
  }
}
```

---

### glassmorphism classes not applying

**symptoms:**
`.glassmorphism-orange` class doesn't work

**solution:**
verify `src/styles/globals.css` has:
```css
@layer utilities {
  .glassmorphism-orange {
    background: rgba(255, 152, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 152, 0, 0.2);
  }
  /* ... other glassmorphism classes */
}
```

---

## typescript issues

### editor shows "cannot find module '@/lib/utils'"

**cause:** typescript doesn't know about `@` alias

**solution:**
verify `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**note:** these are editor warnings only. remotion's webpack bundler resolves imports correctly. video will render fine.

---

### type errors in scene files

**symptoms:**
```
Property 'frame' does not exist on type '{}'
```

**cause:** missing type annotations

**solution:**
add explicit return type:
```typescript
export const MyScene: React.FC = () => {
  // component logic
  return <div>...</div>;
};
```

---

## git issues

### "fatal: unable to create file" (windows wsl)

**symptoms:**
```
error: unable to create file ... : Invalid argument
```

**cause:** windows file path length limit

**solution:**
shorten project path or enable long paths:
```bash
git config --system core.longpaths true
```

---

### "working tree clean" but changes visible

**cause:** line ending differences (windows crlf vs linux lf)

**solution:**
```bash
git config core.autocrlf input
git rm --cached -r .
git reset --hard
```

---

## dependency issues

### "peer dependency not satisfied"

**symptoms:**
```
npm WARN eslint-plugin-react@7.33.2 requires a peer of eslint@^3 || ^4 || ^5 || ^6 || ^7 || ^8
```

**cause:** version mismatch in dependencies

**solution:**
```bash
npm install --legacy-peer-deps
```

---

### "package not found" after npm install

**symptoms:**
```
Error: Cannot find module '@remotion/cli'
```

**cause:** corrupted node_modules

**solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## performance optimization

### reduce render time

**strategies:**

1. **render specific scenes only:**
```bash
# render just solution scene (frames 330-840)
npx remotion render AgentSchoolShowcase out/solution.mp4 --frames=330-840
```

2. **use faster codec:**
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --codec=h264-mkv
```

3. **reduce particle count:**
edit `src/scenes/IntroSceneV2.tsx` line 15:
```typescript
const particleCount = 200;  // was 1000
```

4. **disable border-beams:**
comment out in `src/scenes/SolutionScene.tsx`:
```typescript
// <BorderBeam ... />
```

5. **increase concurrency (if you have powerful cpu):**
```bash
npx remotion render AgentSchoolShowcase out/video.mp4 --concurrency=4
```

---

## debugging tips

### check remotion version

```bash
npx remotion --version
# should show 4.0.419
```

### check tailwind version

```bash
npm list tailwindcss
# should show 3.4.19 (not v4)
```

### check node version

```bash
node --version
# should be v18+ or v20+
```

### verbose error output

```bash
npx remotion render AgentSchoolShowcase out/test.mp4 --log=verbose
```

### inspect specific frame

in remotion studio:
1. click timeline
2. drag to specific frame
3. inspect elements in browser devtools

---

## common mistakes

### using `cd` in commands

**wrong:**
```bash
cd remotion-video && npm start
```

**right:**
```bash
npm start
# (already in remotion-video directory)
```

---

### editing config files without restart

**mistake:** change `remotion.config.ts` and expect immediate effect

**solution:** always restart after config changes:
```bash
# ctrl+c to stop
npm start
```

---

### forgetting to import css

**mistake:** create new component, forget to use existing styles

**solution:** always use tailwind classes, they're globally available:
```typescript
<div className="bg-navy-800 text-white">
  {/* tailwind works everywhere */}
</div>
```

---

### hard-coding frame numbers

**mistake:**
```typescript
const opacity = frame > 500 ? 1 : 0;  // magic number
```

**better:**
```typescript
const FADE_START = 500;
const opacity = frame > FADE_START ? 1 : 0;
```

**best:**
```typescript
const opacity = interpolate(frame, [500, 530], [0, 1]);
```

---

## getting help

### check existing documentation

1. `docs/01-getting-started/` - setup guides
2. `docs/03-video-structure/timeline.md` - frame-accurate reference
3. `docs/04-technical/` - technical deep dives

### check remotion official docs

- https://remotion.dev/docs
- https://remotion.dev/docs/troubleshooting

### debug checklist

before asking for help, verify:

- [ ] ran `npm install`
- [ ] restarted remotion studio after config changes
- [ ] cleared caches (`rm -rf node_modules/.cache .remotion`)
- [ ] checked terminal for errors
- [ ] verified tailwindcss version is 3.x (not 4.x)
- [ ] verified `postcss.config.cjs` exists (not `.js`)
- [ ] checked `src/index.ts` imports `globals.css`

---

this troubleshooting guide covers most common issues. if you encounter a new issue, add it to this document!
