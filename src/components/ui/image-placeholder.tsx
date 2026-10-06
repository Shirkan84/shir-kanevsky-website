type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative grid min-h-72 place-items-center overflow-hidden border border-ink/15 bg-sand text-center ${className}`}
      role="img"
      aria-label={`מיקום שמור לתמונה: ${label}`}
    >
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-rust/25" />
      <div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-rust/8" />
      <span className="relative max-w-44 text-xs tracking-[0.18em] text-ink/45">
        {label}
      </span>
    </div>
  );
}
