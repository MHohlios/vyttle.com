interface BrambleMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function BrambleMark({
  size = 60,
  className = "",
  style,
  color = "#7B5EA7",
}: BrambleMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      style={style}
      aria-label="Bramble logomark"
    >
      {/* Connection lines */}
      <line x1="30" y1="12" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="30" y1="48" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="12" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="48" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      {/* Outer nodes (open circles) */}
      <circle cx="30" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="30" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="30" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="48" cy="30" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* Center node (filled) */}
      <circle cx="30" cy="30" r="5" fill={color} />
    </svg>
  );
}
