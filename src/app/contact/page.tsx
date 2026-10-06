import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ExternalLinkIcon, SocialLinks } from "@/components/ui/social-links";
import { siteConfig, storyClub } from "@/config/site";

export const metadata: Metadata = { title: "יצירת קשר" };

export default function ContactPage() {
  return (
    <section className="dark-chapter relative min-h-[calc(100svh-5rem)] overflow-hidden text-cream">
      <div className="fine-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute left-[12%] top-0 h-40 w-px bg-orange" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-5xl items-center px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="mb-7 flex items-center gap-3 text-sm font-semibold tracking-[0.13em] text-gold before:h-px before:w-10 before:bg-orange">יצירת קשר</p>
          <h1 className="max-w-4xl text-5xl leading-[1.08] font-semibold tracking-[-0.025em] sm:text-7xl">יש לכם רעיון, שאלה או הזמנה להרצאה?</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-cream/65">אפשר לכתוב על הספר, הרצאות, ליווי כתיבה או כל שיתוף פעולה יצירתי.</p>
          <Link href={`mailto:${siteConfig.email}`} className="group mt-12 inline-flex items-center gap-3 border-b border-orange pb-2 text-lg text-gold transition-colors hover:text-cream" dir="ltr">
            {siteConfig.email}
            <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
          </Link>
          <div className="mt-12 border-t border-cream/15 pt-8">
            <p className="text-sm tracking-[0.1em] text-cream/60">אפשר למצוא אותי גם כאן</p>
            <SocialLinks className="mt-5" linkClassName="text-cream/65 hover:border-orange/60 hover:text-orange" />
            <a
              href={storyClub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-orange"
            >
              לביקור ב-StoryClub
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ExternalLinkIcon /></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
