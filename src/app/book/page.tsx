import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export const metadata: Metadata = { title: "הספר 2%" };

export default function BookPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-28">
      <ImagePlaceholder label="עטיפת הספר 2%" className="min-h-[32rem]" />
      <div>
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-rust">הספר</p>
        <h1 className="text-7xl font-semibold tracking-tight sm:text-8xl">2%</h1>
        <p className="mt-8 text-xl leading-9 text-ink/65">
          עמוד ראשוני להצגת הספר, הסיפור שמאחוריו, המלצות ואפשרויות רכישה.
        </p>
        <p className="mt-6 text-sm text-ink/45">פרטי הספר וקישור הרכישה יתווספו בהמשך.</p>
      </div>
    </section>
  );
}
