import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import shirkanPortrait from "../../../pic/shirkan-author-v2.jpeg";
import { Reveal } from "@/components/ui/reveal";
import { ExternalLinkIcon } from "@/components/ui/social-links";
import { storyClub } from "@/config/site";

export const metadata: Metadata = {
  title: "אודות",
  description: "על שיר קנבסקי, סופרת, יוצרת ואשת טכנולוגיה.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute left-0 top-0 hidden h-full w-[32%] bg-navy lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">אודות</p>
            <h1 className="mt-7 max-w-3xl text-5xl leading-[1.08] font-semibold text-navy sm:text-6xl lg:text-7xl">
              אני שיר קנבסקי.<br />אני כותבת כדי להבין אנשים.<br /><span className="text-dusk">ולפעמים גם כדי להבין את עצמי.</span>
            </h1>
          </Reveal>
          <Reveal delay={100} className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden shadow-[0_28px_65px_rgba(74,37,61,0.24)]">
              <Image src={shirkanPortrait} alt="שיר קנבסקי" fill priority sizes="(max-width: 1024px) 90vw, 32vw" className="object-cover object-top" />
            </div>
            <span className="absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-orange" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-gold/25 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.62fr_1.38fr]">
          <Reveal>
            <p className="font-serif text-4xl text-orange">בין עולמות</p>
            <div className="mt-6 h-px w-24 bg-gold" aria-hidden="true" />
          </Reveal>
          <Reveal delay={80} className="space-y-7 text-lg leading-9 text-ink/75">
            <p className="font-serif text-3xl text-navy">אני סופרת, יוצרת ואשת טכנולוגיה.</p>
            <p>במשך שנים אני חיה בתוך עולמות שנראים, לפחות מבחוץ, מאוד שונים זה מזה: טכנולוגיה וסייבר מצד אחד, כתיבה, יצירה ורגש מצד אחר.</p>
            <p>דווקא החיבור ביניהם הוא המקום שהכי מסקרן אותי.</p>
            <p>אני אוהבת לשאול מה קורה כשאנחנו מכניסים אנושיות לתוך טכנולוגיה, ומה קורה כשהטכנולוגיה מתחילה לגעת במקומות הכי אנושיים שלנו: קשר, אינטימיות, בדידות, סקרנות, פחד ואהבה.</p>
          </Reveal>
        </div>
      </section>

      <section className="dark-chapter py-20 text-cream md:py-28">
        <Reveal className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="block h-16 w-px bg-orange" aria-hidden="true" />
          <blockquote className="mt-8 max-w-4xl font-serif text-4xl leading-[1.25] sm:text-5xl">
            ״אני לא מחפשת את הגבול בין אדם לטכנולוגיה.<br />מעניין אותי מה קורה בדיוק ברגע שבו הגבול הזה מתחיל להיטשטש.״
          </blockquote>
        </Reveal>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.62fr_1.38fr]">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">להקשיב למורכב</p>
          </Reveal>
          <Reveal delay={80} className="space-y-7 text-lg leading-9 text-ink/75">
            <p>הקריירה המקצועית שלי נבנתה בעולם הטכנולוגיה והסייבר. התחלתי ממקום שבו הייתי צריכה ללמוד כמעט הכול מאפס, המשכתי לתפקידי תמיכה וניהול, והיום אני עובדת עם לקוחות, אנשים וצוותים סביב פתרונות טכנולוגיים מורכבים.</p>
            <p className="font-serif text-3xl text-navy">העבודה הזאת לימדה אותי הרבה יותר מטכנולוגיה.</p>
            <div className="border-r-2 border-orange pr-6 font-serif text-2xl leading-relaxed text-dusk sm:pr-10">
              <p>היא לימדה אותי להקשיב.</p>
              <p>לשאול את השאלה הנכונה.</p>
              <p>לזהות מה באמת נמצא מאחורי בעיה.</p>
              <p>ולהפוך משהו מורכב למשהו שאפשר להבין, לפרק ולבנות מחדש.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">פרק חדש</p>
            <h2 className="mt-6 text-5xl font-semibold text-navy sm:text-6xl">ואז חזרתי לכתיבה.</h2>
          </Reveal>
          <Reveal delay={80} className="space-y-7 text-lg leading-9 text-ink/75">
            <p>כתיבה תמיד הייתה שם, אבל בשלב מסוים היא הפסיקה להיות משהו שנשאר במגירה.</p>
            <p>החלטתי לקחת רעיון, להישאר איתו גם כשהוא עדיין לא היה ברור, ולתת לו להפוך לסיפור.</p>
            <p className="font-serif text-4xl text-orange">כך נולד 2%.</p>
            <p>הדרך אל הספר חידדה עבורי משהו שאני מאמינה בו מאוד: אנחנו כמעט אף פעם לא מרגישים מוכנים באמת לפני שאנחנו מתחילים.</p>
            <p className="border-r-2 border-gold pr-6 font-serif text-3xl leading-snug text-navy">לפעמים היצירה עצמה היא זו שמכינה אותנו.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-gold/25 bg-paper py-16 md:py-20">
        <Reveal className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-[0.65fr_1.35fr] md:items-start md:px-10">
          <div>
            <p className="text-sm tracking-[0.16em] text-orange">פרויקטים נוספים</p>
            <div className="mt-5 h-px w-20 bg-gold" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-semibold text-plum">{storyClub.name}</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-ink/70">{storyClub.description}</p>
            <a
              href={storyClub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 border-b border-orange pb-1 text-sm text-plum transition-colors hover:text-orange"
            >
              לביקור ב-StoryClub
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ExternalLinkIcon /></span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bg-navy py-20 text-cream md:py-24">
        <Reveal className="mx-auto max-w-5xl px-5 md:px-10">
          <p className="max-w-3xl font-serif text-3xl leading-snug sm:text-4xl">אני ממשיכה לכתוב, ליצור, לחקור AI ולחפש דרכים חדשות לספר סיפורים.</p>
          <p className="mt-5 text-lg text-cream/65">ובמקום הזה נולדו גם ההרצאות וליווי הכתיבה שאני מציעה היום.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/book" className="bg-orange px-6 py-3 text-sm text-cream transition-colors hover:bg-copper">לספר 2%</Link>
            <Link href="/writing-guidance" className="border border-gold/70 px-6 py-3 text-sm text-gold transition-colors hover:border-orange hover:text-orange">ליווי כתיבה</Link>
            <Link href="/contact" className="border border-cream/25 px-6 py-3 text-sm text-cream transition-colors hover:border-gold hover:text-gold">להזמנת הרצאה</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
