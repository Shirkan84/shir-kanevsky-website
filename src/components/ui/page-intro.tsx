import { Reveal } from "@/components/ui/reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="relative mx-auto max-w-4xl overflow-hidden px-5 py-24 md:px-10 md:py-36">
      <div className="absolute left-10 top-20 hidden h-28 w-28 rounded-full border border-lavender/20 sm:block" aria-hidden="true" />
      <Reveal className="relative">
        <p className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-[0.13em] text-orange before:h-px before:w-9 before:bg-gold">{eyebrow}</p>
        <h1 className="max-w-3xl text-5xl leading-[1.08] font-semibold tracking-[-0.025em] text-plum sm:text-6xl">{title}</h1>
        <div className="mt-8 max-w-2xl text-lg leading-8 text-ink/68">{children}</div>
      </Reveal>
    </section>
  );
}
