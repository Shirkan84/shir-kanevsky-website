import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "ליווי כתיבה ויצירה",
  description: "ליווי אישי בתהליך כתיבה ויצירה. מחשבה משותפת על רעיון, דמויות, מבנה וקול.",
};

const writingTopics = [
  "להפוך רעיון ראשוני לקונספט ברור",
  "בניית דמויות עם קול, עומק ומניעים",
  "חשיבה על עלילה, מבנה וקצב",
  "דיוק של דיאלוגים",
  "זיהוי המקומות שבהם הטקסט עובד והמקומות שבהם הוא עדיין לא יושב נכון",
  "התגברות על תקיעות והחלטה מהו הצעד הבא",
  "קריאה ומשוב על פרקים קיימים",
  "שימוש חכם ב-AI כחלק מתהליך היצירה, מבלי לאבד את הקול האישי של הכותבת",
];

export default function WritingGuidancePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute left-[12%] top-0 h-40 w-px bg-orange" aria-hidden="true" />
        <div className="absolute -left-28 bottom-0 size-80 rounded-full border border-gold/25" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-6xl px-5 md:px-10">
          <p className="text-sm tracking-[0.16em] text-orange">ליווי כתיבה ויצירה</p>
          <h1 className="mt-7 max-w-4xl text-6xl leading-[1.06] font-semibold text-navy sm:text-7xl lg:text-8xl">יש לכם סיפור.<br /><span className="text-dusk">לא תמיד ברור עדיין איך לכתוב אותו.</span></h1>
          <div className="mt-12 max-w-2xl space-y-3 border-r-2 border-orange pr-6 text-xl leading-9 text-ink/72 sm:pr-9">
            <p>לפעמים יש רעיון.</p>
            <p>לפעמים יש דמות.</p>
            <p>לפעמים יש עשרים עמודים.</p>
            <p>ולפעמים יש רק תחושה עקשנית שיש כאן משהו שצריך לצאת החוצה.</p>
          </div>
          <p className="mt-9 max-w-3xl font-serif text-3xl leading-snug text-navy">ליווי הכתיבה שלי מיועד למי שרוצים מישהי שתחשוב איתם על הסיפור, לא במקומם.</p>
        </Reveal>
      </section>

      <section className="dark-chapter py-24 text-cream md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-gold">בתוך התהליך</p>
            <h2 className="mt-6 text-5xl font-semibold sm:text-6xl">מה אנחנו יכולות לעשות יחד?</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2">
            {writingTopics.map((topic, index) => (
              <Reveal key={topic} delay={(index % 2) * 70} className="border-b border-cream/15 md:odd:border-l">
                <div className="flex min-h-32 gap-5 px-0 py-7 md:px-8">
                  <span className="font-serif text-sm text-orange">0{index + 1}</span>
                  <p className="max-w-md font-serif text-2xl leading-snug text-cream/88">{topic}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">הקול נשאר שלכם</p>
            <h2 className="mt-6 text-5xl leading-tight font-semibold text-navy sm:text-6xl">לא לכתוב במקומך</h2>
          </Reveal>
          <Reveal delay={80} className="space-y-7 text-lg leading-9 text-ink/75">
            <p className="font-serif text-3xl text-dusk">אני לא רוצה להפוך את הטקסט שלך לטקסט שלי.</p>
            <p>המטרה היא בדיוק הפוכה.</p>
            <p>למצוא את הדבר שהוא רק שלך: הקול, הקצב, הדמויות והדרך שבה את מסתכלת על העולם, ולעזור לו להיות ברור וחזק יותר.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-deep py-20 md:py-28">
        <Reveal className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="block h-14 w-px bg-orange" aria-hidden="true" />
          <blockquote className="mt-8 max-w-4xl font-serif text-4xl leading-[1.25] text-navy sm:text-5xl">
            ״כתיבה טובה לא מתחילה כשכבר יודעים בדיוק מה רוצים לומר.<br />לפעמים מגלים את זה רק בזמן שכותבים.״
          </blockquote>
        </Reveal>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">בפועל</p>
            <h2 className="mt-6 text-5xl font-semibold text-navy sm:text-6xl">איך זה עובד?</h2>
          </Reveal>
          <Reveal delay={80} className="space-y-6 border-r-2 border-gold pr-6 text-lg leading-9 text-ink/75 sm:pr-10">
            <p>הליווי יכול להיות סביב רעיון חדש, כתב יד בתהליך או מספר פרקים שכבר נכתבו.</p>
            <p>אפשר לעבוד בפגישה חד-פעמית ממוקדת או בתהליך של מספר מפגשים.</p>
            <p>לפני הפגישה ניתן לשלוח חומר רלוונטי, כדי שנוכל להקדיש את הזמן עצמו לחשיבה אמיתית על הטקסט.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream md:py-24">
        <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-10">
          <h2 className="max-w-2xl text-4xl font-semibold sm:text-5xl">בואו נדבר על מה שאתם כותבים</h2>
          <Link href="/contact" className="group inline-flex w-fit items-center gap-3 bg-orange px-7 py-3.5 text-sm text-cream transition-colors hover:bg-copper">
            יצירת קשר <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
