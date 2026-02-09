import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const problem1Opacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const problem2Opacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const problem3Opacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FAF9F7",
        padding: 100,
        justifyContent: "center",
      }}
    >
      <div style={{ opacity }}>
        <h2
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#0A2540",
            marginBottom: 60,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          The Problem with Traditional Automation
        </h2>

        <div style={{ opacity: problem1Opacity, marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 30,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                backgroundColor: "#FF6B6B",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
              }}
            >
              ❌
            </div>
            <div>
              <h3
                style={{
                  fontSize: 42,
                  color: "#0A2540",
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                RPA is Brittle
              </h3>
              <p
                style={{
                  fontSize: 32,
                  color: "#666",
                  margin: "10px 0 0 0",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                Breaks every time software updates
              </p>
            </div>
          </div>
        </div>

        <div style={{ opacity: problem2Opacity, marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 30,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                backgroundColor: "#FFB84D",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
              }}
            >
              💸
            </div>
            <div>
              <h3
                style={{
                  fontSize: 42,
                  color: "#0A2540",
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                AI Agents are Expensive
              </h3>
              <p
                style={{
                  fontSize: 32,
                  color: "#666",
                  margin: "10px 0 0 0",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                High token costs for every execution
              </p>
            </div>
          </div>
        </div>

        <div style={{ opacity: problem3Opacity }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 30,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                backgroundColor: "#A78BFA",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
              }}
            >
              ⏰
            </div>
            <div>
              <h3
                style={{
                  fontSize: 42,
                  color: "#0A2540",
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                Unpredictable & Slow
              </h3>
              <p
                style={{
                  fontSize: 32,
                  color: "#666",
                  margin: "10px 0 0 0",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                45-60 seconds for simple queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
