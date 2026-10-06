import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export const metadata: Metadata = { title: "אודות" };

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-10 md:py-28">
      <ImagePlaceholder label="צילום דיוקן של שיר" className="min-h-[30rem]" />
      <div>
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-rust">אודות</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">שיר קנבסקי</h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">
          המקום לסיפור האישי והמקצועי: הדרך אל הכתיבה, הספר, ההרצאות והעבודה עם יוצרים.
        </p>
      </div>
    </section>
  );
}
