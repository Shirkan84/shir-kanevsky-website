import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = { title: "הספר 2%" };

export default function BookPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-2 md:items-center md:px-10 md:py-36">
      <Reveal delay={100}><ImagePlaceholder label="עטיפת הספר 2%" className="min-h-[32rem]" /></Reveal>
      <Reveal>
        <p className="mb-6 flex items-center gap-3 text-sm font-semibold tracking-[0.13em] text-orange before:h-px before:w-9 before:bg-gold">הספר</p>
        <h1 className="text-7xl font-semibold tracking-[-0.03em] text-plum sm:text-8xl"><span className="text-orange">2</span>%</h1>
        <p className="mt-8 text-xl leading-9 text-ink/68">
          עמוד ראשוני להצגת הספר, הסיפור שמאחוריו, המלצות ואפשרויות רכישה.
        </p>
        <p className="mt-6 text-sm text-ink/45">פרטי הספר וקישור הרכישה יתווספו בהמשך.</p>
      </Reveal>
    </section>
  );
}
