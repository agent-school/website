import { useCurrentFrame } from "remotion";
import { interpolate } from "remotion";

interface NumberTickerProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  className?: string;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({
  from,
  to,
  duration = 60,
  delay = 0,
  decimals = 0,
  className = "",
}) => {
  const frame = useCurrentFrame();

  const value = interpolate(
    frame - delay,
    [0, duration],
    [from, to],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const displayValue = decimals > 0 
    ? value.toFixed(decimals)
    : Math.floor(value);

  return <span className={className}>{displayValue}</span>;
};
