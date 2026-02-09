# 🚀 Quick Start Guide - Agent School Video

## Step 1: Install Dependencies
```bash
cd remotion-video
npm install
```

## Step 2: Launch Remotion Studio
```bash
npm start
```

The Remotion Studio will open in your browser at `http://localhost:3000`

## Step 3: Preview Your Video
- Use the timeline scrubber to navigate through frames
- Play/pause with the spacebar
- The video is 30 seconds (900 frames)

## Step 4: Make Changes
Edit any scene file in `src/scenes/` and see changes instantly:
- `IntroScene.tsx` - Opening scene
- `ProblemScene.tsx` - Problems with current automation
- `SolutionScene.tsx` - Agent School solution
- `HowItWorksScene.tsx` - 4-step process
- `BenefitsScene.tsx` - Key metrics
- `OutroScene.tsx` - Contact info

## Step 5: Render Final Video
```bash
npm run build -- AgentSchoolVideo
```

Or specify output location:
```bash
npx remotion render AgentSchoolVideo out/agent-school.mp4
```

## 🎬 Scene Timing Reference

| Scene | Start | Duration | End | Content |
|-------|-------|----------|-----|---------|
| Intro | 0s | 5s | 5s | Brand + tagline |
| Problem | 5s | 6s | 11s | Current challenges |
| Solution | 11s | 6s | 17s | Agent School benefits |
| How It Works | 17s | 6s | 23s | 4-step process |
| Benefits | 23s | 5s | 28s | Key metrics |
| Outro | 28s | 2s | 30s | Contact CTA |

## 🎨 Brand Colors Used

```css
Navy:   #0A2540  /* Dark backgrounds */
Orange: #FE9F4D  /* Accent/CTA */
Purple: #6631D7  /* Secondary accent */
Cream:  #FAF9F7  /* Light backgrounds */
Green:  #10B981  /* Success */
Blue:   #0EA5E9  /* Information */
```

## 📤 Common Export Commands

### Web (Optimized)
```bash
npx remotion render AgentSchoolVideo out/agent-school.mp4 --codec h264 --quality 80
```

### High Quality
```bash
npx remotion render AgentSchoolVideo out/agent-school-hq.mp4 --codec h264 --quality 100
```

### Social Media (Square)
```bash
npx remotion render AgentSchoolVideo out/social.mp4 --codec h264 --height 1080 --width 1080
```

### Thumbnail
```bash
npx remotion still AgentSchoolVideo --frame=150 out/thumbnail.png
```

## 🔧 Useful Commands

### Check for TypeScript errors
```bash
npx tsc --noEmit
```

### Upgrade Remotion
```bash
npx remotion upgrade
```

### View all compositions
```bash
npx remotion compositions
```

## 💡 Pro Tips

1. **Frame-by-frame editing**: Click on the timeline to jump to any frame
2. **Keyboard shortcuts**: 
   - Space: Play/Pause
   - Left/Right arrows: Previous/Next frame
   - J/K/L: Rewind/Pause/Forward
3. **Performance**: First load may be slow - this is normal
4. **Live editing**: Changes to scene files update immediately
5. **Console**: Check browser console for any errors

## 🎯 Next Steps

1. ✅ Preview the video in Remotion Studio
2. ✅ Customize text, colors, or timing as needed
3. ✅ Export the final video
4. ✅ Use in website, social media, or presentations

Need help? Check `README.md` or `VIDEO_SUMMARY.md` for more details!
