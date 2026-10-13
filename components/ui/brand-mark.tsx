export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground ${className}`}
      aria-hidden="true"
    >
      <span className="text-[0.75em] font-semibold tracking-wide">EU</span>
    </span>
  );
}
