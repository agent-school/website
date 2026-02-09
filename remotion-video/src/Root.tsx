import { Composition } from "remotion";
import { AgentSchoolVideo } from "./AgentSchoolVideo";
import { AgentSchoolShowcase } from "./AgentSchoolShowcase";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* v1.0: Basic text-based video */}
      <Composition
        id="AgentSchoolVideo"
        component={AgentSchoolVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* v2.0: Enhanced with realistic UI mockups and Magic UI */}
      <Composition
        id="AgentSchoolShowcase"
        component={AgentSchoolShowcase}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
