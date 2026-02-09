import { Composition } from "remotion";
import { AgentSchoolVideo } from "./AgentSchoolVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AgentSchoolVideo"
        component={AgentSchoolVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
