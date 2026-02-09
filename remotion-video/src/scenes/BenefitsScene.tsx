import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const BenefitsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const stat1Scale = interpolate(frame, [30, 50], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const stat2Scale = interpolate(frame, [50, 70], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const stat3Scale = interpolate(frame, [70, 90], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A2540",
        padding: 100,
        justifyContent: "center",
      }}
    >
      <div style={{ opacity }}>
        <h2
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#FFFFFF",
            marginBottom: 80,
            textAlign: "center",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Real Results
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 60,
          }}
        >
          <div
            style={{
              textAlign: "center",
              transform: `scale(${stat1Scale})`,
            }}
          >
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: "#FE9F4D",
                marginBottom: 10,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              10x
            </div>
            <p
              style={{
                fontSize: 36,
                color: "#FFFFFF",
                margin: 0,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Cost Reduction
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              transform: `scale(${stat2Scale})`,
            }}
          >
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: "#10B981",
                marginBottom: 10,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              2s
            </div>
            <p
              style={{
                fontSize: 36,
                color: "#FFFFFF",
                margin: 0,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Response Time
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              transform: `scale(${stat3Scale})`,
            }}
          >
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: "#6631D7",
                marginBottom: 10,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              99%
            </div>
            <p
              style={{
                fontSize: 36,
                color: "#FFFFFF",
                margin: 0,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Reliability
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 80,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 42,
              color: "#FE9F4D",
              fontWeight: 600,
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.6,
            }}
          >
            The fastest way to teach and certify agents
            <br />
            how to operate on YOUR software stack reliably
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
