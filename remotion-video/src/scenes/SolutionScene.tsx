import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardScale = interpolate(frame, [30, 60], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const checkmark1 = interpolate(frame, [80, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const checkmark2 = interpolate(frame, [100, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const checkmark3 = interpolate(frame, [120, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A2540",
        padding: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ opacity, textAlign: "center" }}>
        <h2
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#FFFFFF",
            marginBottom: 60,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Agent School: The Best of Both Worlds
        </h2>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            padding: 60,
            opacity: cardOpacity,
            transform: `scale(${cardScale})`,
            maxWidth: 1400,
          }}
        >
          <p
            style={{
              fontSize: 48,
              color: "#FE9F4D",
              fontWeight: 700,
              marginBottom: 40,
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Certified AI Agents That Learn & Adapt
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              textAlign: "left",
            }}
          >
            <div
              style={{
                opacity: checkmark1,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  color: "#10B981",
                }}
              >
                ✓
              </div>
              <p
                style={{
                  fontSize: 36,
                  color: "#0A2540",
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                <strong>Reliable:</strong> Certified skills with deterministic
                execution
              </p>
            </div>

            <div
              style={{
                opacity: checkmark2,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  color: "#10B981",
                }}
              >
                ✓
              </div>
              <p
                style={{
                  fontSize: 36,
                  color: "#0A2540",
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                <strong>Self-Healing:</strong> Automatically adapts to software
                changes
              </p>
            </div>

            <div
              style={{
                opacity: checkmark3,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  color: "#10B981",
                }}
              >
                ✓
              </div>
              <p
                style={{
                  fontSize: 36,
                  color: "#0A2540",
                  margin: 0,
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                <strong>10x Cheaper:</strong> 2 seconds vs. 60 seconds per task
              </p>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
