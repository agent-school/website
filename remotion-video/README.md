# Agent School Promotional Video

This is a Remotion project for creating the Agent School promotional video.

## Video Structure

The video is 30 seconds long (900 frames at 30fps) and consists of 6 scenes:

1. **Intro (5s)**: Agent School branding and tagline
2. **Problem (6s)**: The problems with traditional automation (RPA brittleness, AI agent costs, slow performance)
3. **Solution (6s)**: Agent School's unique value proposition
4. **How It Works (6s)**: The 4-stage process (Teach, Certify, Deploy, Monitor)
5. **Benefits (5s)**: Key metrics and results
6. **Outro (2s)**: Contact information

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the Remotion Studio

```bash
npm start
```

This will open the Remotion Studio in your browser where you can preview and edit the video.

### Render the video

```bash
npm run build -- AgentSchoolVideo
```

This will render the video to the `out` directory.

### Render with custom settings

```bash
npx remotion render AgentSchoolVideo out/agent-school.mp4 --codec h264
```

## Project Structure

```
src/
├── Root.tsx                 # Remotion root component
├── AgentSchoolVideo.tsx     # Main video composition
├── index.ts                 # Entry point
└── scenes/
    ├── IntroScene.tsx       # Scene 1: Introduction
    ├── ProblemScene.tsx     # Scene 2: Problem statement
    ├── SolutionScene.tsx    # Scene 3: Solution overview
    ├── HowItWorksScene.tsx  # Scene 4: Process explanation
    ├── BenefitsScene.tsx    # Scene 5: Key benefits
    └── OutroScene.tsx       # Scene 6: Call to action
```

## Customization

### Timing

To adjust scene timings, edit the `from` and `durationInFrames` props in `AgentSchoolVideo.tsx`.

### Colors

The video uses the Agent School brand colors:
- Navy: `#0A2540`
- Orange/Amber: `#FE9F4D`
- Purple: `#6631D7`
- Cream: `#FAF9F7`
- Green: `#10B981`

### Content

Each scene is in its own component in the `scenes/` directory. Edit these files to update text, animations, or styling.

## Export Options

### MP4 (H.264)
```bash
npx remotion render AgentSchoolVideo out/agent-school.mp4 --codec h264
```

### WebM
```bash
npx remotion render AgentSchoolVideo out/agent-school.webm --codec vp8
```

### GIF
```bash
npx remotion render AgentSchoolVideo out/agent-school.gif --codec gif
```

### Image Sequence
```bash
npx remotion still AgentSchoolVideo --frame=150 out/frame.png
```

## Learn More

- [Remotion Documentation](https://www.remotion.dev/docs)
- [Remotion API Reference](https://www.remotion.dev/docs/api)
