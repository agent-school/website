import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 20], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FAF9F7",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#0A2540",
            margin: 0,
            marginBottom: 30,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Agent School
        </h1>
        <p
          style={{
            fontSize: 48,
            color: "#FE9F4D",
            margin: 0,
            fontWeight: 600,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          hello@agentschool.io
        </p>
      </div>
    </AbsoluteFill>
  );
};
