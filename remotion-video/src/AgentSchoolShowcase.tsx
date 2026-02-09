import { AbsoluteFill, Sequence } from "remotion";
import { IntroSceneV2 } from "./scenes/IntroSceneV2";
import { ProblemSceneV2 } from "./scenes/ProblemSceneV2";
import { SolutionScene } from "./scenes/SolutionScene";
// More scenes will be added as we build them

export const AgentSchoolShowcase: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Intro: 0-120 frames (4 seconds) */}
      <Sequence from={0} durationInFrames={120}>
        <IntroSceneV2 />
      </Sequence>

      {/* Problem: 120-330 frames (7 seconds) */}
      <Sequence from={120} durationInFrames={210}>
        <ProblemSceneV2 />
      </Sequence>

      {/* Solution: 330-840 frames (17 seconds) - Bento Grid with 5 software types */}
      <Sequence from={330} durationInFrames={510}>
        <SolutionScene startFrame={330} />
      </Sequence>

      {/* TODO: Add remaining scenes
      - Certification (Testing Grid)
      - Self-Healing (Side-by-side comparison)
      - Speed Race (Real-time comparison)
      - Dashboard (Platform overview)
      - Stats (Final metrics)
      */}
    </AbsoluteFill>
  );
};
