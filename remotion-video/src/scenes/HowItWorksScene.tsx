import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const HowItWorksScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const step1Opacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const step2Opacity = interpolate(frame, [50, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const step3Opacity = interpolate(frame, [80, 105], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const step4Opacity = interpolate(frame, [110, 135], [0, 1], {
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
      <div style={{ opacity: titleOpacity }}>
        <h2
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#0A2540",
            marginBottom: 60,
            textAlign: "center",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            maxWidth: 1600,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              opacity: step1Opacity,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 40,
              border: "3px solid #FE9F4D",
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#FE9F4D",
                marginBottom: 15,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              1. Teach
            </div>
            <p
              style={{
                fontSize: 28,
                color: "#333",
                margin: 0,
                lineHeight: 1.5,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Demonstrate the workflow or describe it in natural language. AI
              asks questions to ensure understanding.
            </p>
          </div>

          <div
            style={{
              opacity: step2Opacity,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 40,
              border: "3px solid #6631D7",
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#6631D7",
                marginBottom: 15,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              2. Certify
            </div>
            <p
              style={{
                fontSize: 28,
                color: "#333",
                margin: 0,
                lineHeight: 1.5,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              AI converts to deterministic steps and passes certification tests
              to ensure reliability.
            </p>
          </div>

          <div
            style={{
              opacity: step3Opacity,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 40,
              border: "3px solid #10B981",
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#10B981",
                marginBottom: 15,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              3. Deploy
            </div>
            <p
              style={{
                fontSize: 28,
                color: "#333",
                margin: 0,
                lineHeight: 1.5,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Certified skills become available across your organization through
              natural language commands.
            </p>
          </div>

          <div
            style={{
              opacity: step4Opacity,
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: 40,
              border: "3px solid #0EA5E9",
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#0EA5E9",
                marginBottom: 15,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              4. Monitor
            </div>
            <p
              style={{
                fontSize: 28,
                color: "#333",
                margin: 0,
                lineHeight: 1.5,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Self-healing adapts to changes automatically. Full observability
              and audit trails.
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
