type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:px-10 md:py-28">
      <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-rust">{eyebrow}</p>
      <h1 className="max-w-3xl text-5xl leading-[1.1] font-semibold tracking-tight sm:text-6xl">{title}</h1>
      <div className="mt-8 max-w-2xl text-lg leading-8 text-ink/65">{children}</div>
    </section>
  );
}
