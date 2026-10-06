import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "יצירת קשר" };

export default function ContactPage() {
  return (
    <section className="relative mx-auto max-w-4xl overflow-hidden px-5 py-24 md:px-10 md:py-36">
      <div className="absolute left-8 top-24 size-36 rounded-full border border-gold/25" aria-hidden="true" />
      <Reveal className="relative">
        <p className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-[0.13em] text-orange before:h-px before:w-9 before:bg-gold">יצירת קשר</p>
        <h1 className="max-w-3xl text-5xl leading-[1.08] font-semibold tracking-[-0.025em] text-plum sm:text-7xl">יש לכם רעיון, שאלה או הזמנה להרצאה?</h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-ink/68">אפשר לכתוב על הספר, הרצאות, ליווי כתיבה או כל שיתוף פעולה יצירתי.</p>
        <Link href={`mailto:${siteConfig.email}`} className="group mt-10 inline-flex items-center gap-3 border-b border-orange/60 pb-1 text-lg text-plum transition-colors hover:text-orange" dir="ltr">
          {siteConfig.email}
          <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
        </Link>
      </Reveal>
    </section>
  );
}
