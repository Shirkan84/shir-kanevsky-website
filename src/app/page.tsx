import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Reveal } from "@/components/ui/reveal";

const offerings = [
  { href: "/book", number: "01", title: "הספר", accent: "2%", text: "בואו להיות הראשונים לקרוא את הספר" },
  { href: "/lectures", number: "02", title: "הרצאות", text: "מפגשים על כתיבה, יצירתיות ובינה מלאכותית." },
  { href: "/writing-guidance", number: "03", title: "ליווי כתיבה", text: "תהליך אישי לכותבים שרוצים להתקדם." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-14 size-80 rounded-full bg-lavender/8" aria-hidden="true" />
        <div className="pointer-events-none absolute left-[12%] top-0 h-24 w-px bg-gold/45" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-10 md:py-28 lg:gap-20">
          <Reveal>
            <p className="mb-7 flex items-center gap-3 text-base font-semibold tracking-[0.1em] text-orange before:h-px before:w-10 before:bg-gold sm:text-lg">יוצרת * כותבת * מרצה</p>
            <h1 className="max-w-4xl text-5xl leading-[1.08] font-semibold tracking-[-0.03em] text-plum sm:text-6xl lg:text-[5.25rem]">
              <span className="block">אל תחכו לרגע שבו תרגישו מוכנים.</span>
              <span className="block">צרו אותו תוך כדי תנועה</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/68">
              הבית של שיר קנבסקי: הספר 2%, הרצאות על כתיבה ויצירתיות, וליווי אישי בדרך אל הטקסט.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/book" className="group inline-flex items-center gap-3 bg-plum px-7 py-3.5 text-sm text-paper shadow-[4px_4px_0_0_rgba(177,142,79,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange hover:shadow-[6px_6px_0_0_rgba(177,142,79,0.25)]">
                לספר 2% <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
              </Link>
              <Link href="/contact" className="px-7 py-3.5 text-sm text-plum ring-1 ring-inset ring-gold/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 hover:ring-orange">בואו נדבר</Link>
            </div>
          </Reveal>
          <Reveal delay={140} className="relative mx-3 sm:mx-10 md:mx-0">
            <span className="absolute -right-3 -top-3 z-10 h-24 w-px bg-orange" aria-hidden="true" />
            <span className="absolute -right-3 -top-3 z-10 h-px w-24 bg-orange" aria-hidden="true" />
            <ImagePlaceholder label="תמונה של שיר / עטיפת הספר" className="min-h-[25rem] sm:min-h-[30rem]" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-paper-deep/55">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {offerings.map((item, index) => (
            <Reveal key={item.href} delay={index * 90} className="border-b border-gold/25 md:border-b-0 md:border-l last:md:border-l-0">
              <Link href={item.href} className="group relative block h-full overflow-hidden px-5 py-11 transition-all duration-300 hover:-translate-y-1 hover:bg-paper hover:shadow-[0_14px_30px_rgba(78,48,72,0.06)] md:px-9 md:py-14">
                <span className="absolute right-0 top-0 h-0.5 w-10 bg-orange transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                <span className="font-serif text-sm font-semibold tracking-[0.12em] text-gold">{item.number}</span>
                <h2 className="mt-9 text-3xl font-semibold text-plum transition-colors duration-300 group-hover:text-ink">
                  {item.title} {item.accent && <span className="text-orange">{item.accent}</span>}
                </h2>
                <p className="mt-3 leading-7 text-ink/65">{item.text}</p>
                <span className="mt-8 inline-block text-orange opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100" aria-hidden="true">←</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
