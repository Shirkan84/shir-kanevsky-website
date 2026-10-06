import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const offerings = [
  { href: "/book", number: "01", title: "הספר 2%", text: "סיפור, רעיון והזמנה להתבונן אחרת." },
  { href: "/lectures", number: "02", title: "הרצאות", text: "מפגשים על כתיבה, יצירתיות ובינה מלאכותית." },
  { href: "/writing-guidance", number: "03", title: "ליווי כתיבה", text: "תהליך אישי לכותבים שרוצים להתקדם." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-10 md:py-28">
        <div>
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-rust">כותב · מרצה · יוצר</p>
          <h1 className="max-w-3xl text-6xl leading-[1.06] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
            מילים שפותחות<br />מקום למחשבה.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">
            הבית של שיר קנבסקי: הספר 2%, הרצאות על כתיבה ויצירתיות, וליווי אישי בדרך אל הטקסט.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/book" className="bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-rust">לספר 2%</Link>
            <Link href="/contact" className="border border-ink/25 px-6 py-3 text-sm transition-colors hover:border-rust hover:text-rust">בואו נדבר</Link>
          </div>
        </div>
        <ImagePlaceholder label="תמונה של שיר / עטיפת הספר" className="min-h-[28rem]" />
      </section>

      <section className="border-y border-ink/10 bg-sand/45">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {offerings.map((item) => (
            <Link key={item.href} href={item.href} className="group border-b border-ink/10 px-5 py-10 transition-colors hover:bg-paper md:border-b-0 md:border-l md:px-8 last:md:border-l-0">
              <span className="text-xs text-rust">{item.number}</span>
              <h2 className="mt-8 text-3xl font-semibold group-hover:text-rust">{item.title}</h2>
              <p className="mt-3 leading-7 text-ink/60">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
