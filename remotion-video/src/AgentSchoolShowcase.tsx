import { AbsoluteFill, Sequence } from "remotion";
import { IntroSceneV2 } from "./scenes/IntroSceneV2";
import { ProblemSceneV2 } from "./scenes/ProblemSceneV2";
import { SolutionScene } from "./scenes/SolutionScene";
import { CertificationScene } from "./scenes/CertificationScene";
import { SelfHealingScene } from "./scenes/SelfHealingScene";
import { SpeedRaceScene } from "./scenes/SpeedRaceScene";
import { StatsScene } from "./scenes/StatsScene";

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

      {/* Certification: 840-990 frames (5 seconds) - Parallel testing grid */}
      <Sequence from={840} durationInFrames={150}>
        <CertificationScene startFrame={840} />
      </Sequence>

      {/* Self-Healing: 990-1110 frames (4 seconds) - UI adaptation demo */}
      <Sequence from={990} durationInFrames={120}>
        <SelfHealingScene startFrame={990} />
      </Sequence>

      {/* Speed Race: 1110-1290 frames (6 seconds) - Performance comparison */}
      <Sequence from={1110} durationInFrames={180}>
        <SpeedRaceScene startFrame={1110} />
      </Sequence>

      {/* Stats: 1290-1350 frames (2 seconds) - Final metrics and CTA */}
      <Sequence from={1290} durationInFrames={60}>
        <StatsScene startFrame={1290} />
      </Sequence>
    </AbsoluteFill>
  );
};
