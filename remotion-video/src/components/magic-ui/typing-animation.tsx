import { useCurrentFrame } from "remotion";
import { interpolate } from "remotion";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  duration = 60,
  delay = 0,
  className = "",
  cursor = true,
}) => {
  const frame = useCurrentFrame();

  const charsToShow = Math.floor(
    interpolate(
      frame - delay,
      [0, duration],
      [0, text.length],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }
    )
  );

  const displayText = text.substring(0, charsToShow);
  const showCursor = cursor && charsToShow < text.length && frame % 20 < 10;

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};
