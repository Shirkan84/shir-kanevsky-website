import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = { title: "אודות" };

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-10 md:py-36">
      <Reveal delay={100}><ImagePlaceholder label="צילום דיוקן של שיר" className="min-h-[30rem]" /></Reveal>
      <Reveal>
        <p className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-[0.13em] text-orange before:h-px before:w-9 before:bg-gold">אודות</p>
        <h1 className="text-5xl font-semibold tracking-[-0.025em] text-plum sm:text-6xl">שיר קנבסקי</h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-ink/68">
          המקום לסיפור האישי והמקצועי: הדרך אל הכתיבה, הספר, ההרצאות והעבודה עם יוצרים.
        </p>
      </Reveal>
    </section>
  );
}
