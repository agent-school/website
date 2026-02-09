import { AbsoluteFill, Sequence } from "remotion";
import { IntroScene } from "./scenes/IntroScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { SolutionScene } from "./scenes/SolutionScene";
import { HowItWorksScene } from "./scenes/HowItWorksScene";
import { BenefitsScene } from "./scenes/BenefitsScene";
import { OutroScene } from "./scenes/OutroScene";

export const AgentSchoolVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#FAF9F7" }}>
      {/* Intro: 0-150 frames (5 seconds) */}
      <Sequence from={0} durationInFrames={150}>
        <IntroScene />
      </Sequence>

      {/* Problem: 150-330 frames (6 seconds) */}
      <Sequence from={150} durationInFrames={180}>
        <ProblemScene />
      </Sequence>

      {/* Solution: 330-510 frames (6 seconds) */}
      <Sequence from={330} durationInFrames={180}>
        <SolutionScene />
      </Sequence>

      {/* How It Works: 510-690 frames (6 seconds) */}
      <Sequence from={510} durationInFrames={180}>
        <HowItWorksScene />
      </Sequence>

      {/* Benefits: 690-840 frames (5 seconds) */}
      <Sequence from={690} durationInFrames={150}>
        <BenefitsScene />
      </Sequence>

      {/* Outro: 840-900 frames (2 seconds) */}
      <Sequence from={840} durationInFrames={60}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
