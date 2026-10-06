type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative grid min-h-72 place-items-center overflow-hidden border border-gold/35 bg-paper-deep text-center shadow-[12px_12px_0_0_rgba(177,142,79,0.09)] ${className}`}
      role="img"
      aria-label={`מיקום שמור לתמונה: ${label}`}
    >
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-orange/30" />
      <div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-lavender/10" />
      <div className="absolute right-8 top-0 h-20 w-px bg-orange/65" />
      <span className="relative max-w-44 text-xs tracking-[0.16em] text-plum/50">
        {label}
      </span>
    </div>
  );
}
