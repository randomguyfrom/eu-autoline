export function CarPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-surface ${className}`}
    >
      <svg
        viewBox="0 0 120 60"
        className="h-1/3 w-1/3 text-muted/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 40h4l6-14a6 6 0 0 1 5.5-3.6h33a6 6 0 0 1 5.2 3l7.6 13.1 8.2 1.6A5 5 0 0 1 112 45v3a2 2 0 0 1-2 2h-6" />
        <path d="M8 40v6a2 2 0 0 0 2 2h6" />
        <path d="M28 48H80" />
        <circle cx="24" cy="48" r="6" />
        <circle cx="86" cy="48" r="6" />
        <path d="M20 22h56" />
      </svg>
    </div>
  );
}
