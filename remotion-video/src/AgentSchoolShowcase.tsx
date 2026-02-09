import { AbsoluteFill, Sequence } from "remotion";
import { IntroSceneV2 } from "./scenes/IntroSceneV2";
import { ProblemSceneV2 } from "./scenes/ProblemSceneV2";
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

      {/* TODO: Add remaining scenes
      - Solution (Bento Grid with 5 software types)
      - Certification (Testing Grid)
      - Self-Healing (Side-by-side comparison)
      - Speed Race (Real-time comparison)
      - Dashboard (Platform overview)
      - Stats (Final metrics)
      */}
    </AbsoluteFill>
  );
};
