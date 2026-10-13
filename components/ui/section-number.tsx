export function SectionNumber({
  index,
  className = "",
}: {
  index: number;
  className?: string;
}) {
  return (
    <span
      className={`select-none font-mono font-semibold text-accent/10 ${className}`}
      aria-hidden="true"
    >
      {String(index).padStart(2, "0")}
    </span>
  );
}
