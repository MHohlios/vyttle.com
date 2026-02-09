interface ComingSoonBadgeProps {
  color?: string;
}

export default function ComingSoonBadge({ color }: ComingSoonBadgeProps) {
  const badgeColor = color || "var(--amber)";

  return (
    <div
      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-normal uppercase"
      style={{
        fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
        letterSpacing: "2px",
        border: `1px solid ${badgeColor}`,
        color: badgeColor,
      }}
    >
      <span
        className="w-[5px] h-[5px] rounded-full animate-pulse-dot"
        style={{ background: badgeColor }}
      />
      Coming Soon
    </div>
  );
}
