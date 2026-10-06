import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "הרצאות",
  description: "הרצאות על כתיבה, יצירתיות, טכנולוגיה, AI והדרך אל הספר 2%.",
};

const lectureConcepts = [
  {
    number: "01",
    title: "מהרעיון לספר: ליצור לפני שמרגישים מוכנים",
    description: [
      "הסיפור שמאחורי 2% והדרך מרעיון ראשוני לספר שלם.",
      "הרצאה על ספק, התמדה, יצירה, כתיבה וההחלטה להפסיק לחכות לרגע שבו הכול יהיה מוכן.",
    ],
    topics: [
      "איך רעיון הופך לפרויקט",
      "למה תחושת חוסר מוכנות אינה סיבה לעצור",
      "יצירה לצד עבודה וחיים מלאים",
      "להתמודד עם ביקורת עצמית",
      "איך ממשיכים כשההתלהבות הראשונית נגמרת",
    ],
  },
  {
    number: "02",
    title: "כש-AI פוגש יצירתיות",
    description: [
      "בינה מלאכותית יכולה לכתוב. היא יכולה ליצור תמונה. היא יכולה להציע רעיון.",
      "אבל האם היא יכולה להיות יוצרת?",
      "הרצאה על המקום החדש שנוצר בין אדם ל-AI — ועל הדרך להשתמש בכלים האלה כדי להרחיב יצירתיות ולא להחליף אותה.",
    ],
    topics: [
      "AI כשותף לחשיבה",
      "יצירה אנושית בעולם גנרטיבי",
      "שמירה על קול אישי",
      "רעיונות, טקסטים ודימויים בעבודה עם AI",
      "הגבול שבין השראה, כלי ויוצר",
    ],
  },
  {
    number: "03",
    title: "2% – אהבה בעידן של בינה מלאכותית",
    description: [
      "הרצאה ומפגש סביב השאלות שנמצאות בלב הספר.",
      "מה הופך קשר לאמיתי? האם אינטימיות מחייבת גוף? ומה קורה כשהטכנולוגיה יודעת עלינו יותר מכפי שאנחנו מספרים לאנשים הקרובים אלינו?",
    ],
    topics: [
      "קריאת קטעים קצרים מהספר",
      "שיחה עם הקהל",
      "AI ומערכות יחסים אנושיות",
      "אינטימיות, זהות וקשר",
      "מאחורי הקלעים של יצירת הרומן",
    ],
  },
];

export default function LecturesPage() {
  return (
    <>
      <section className="dark-chapter relative overflow-hidden py-24 text-cream md:py-36">
        <div className="fine-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-6xl px-5 md:px-10">
          <p className="text-sm tracking-[0.16em] text-gold">הרצאות ומפגשים</p>
          <h1 className="mt-7 max-w-4xl text-6xl leading-[1.06] font-semibold sm:text-7xl lg:text-8xl">סיפורים מתחילים לפעמים<br /><span className="text-orange">במקום שלא תכננו להגיע אליו.</span></h1>
          <div className="mt-12 max-w-3xl space-y-6 border-r-2 border-orange pr-6 text-lg leading-9 text-cream/72 sm:pr-10">
            <p>ההרצאות שלי נמצאות בנקודת המפגש בין כתיבה, יצירתיות, טכנולוגיה ו-AI.</p>
            <p>אני לא מגיעה לדבר על יצירתיות כעל רעיון תאורטי.</p>
            <p>אני מדברת מתוך תהליך: איך מתחילים בלי לדעת בדיוק לאן הולכים, איך בונים משהו מאפס, איך משתמשים בטכנולוגיה בלי לתת לה להחליף אותנו, ומה קורה כשנותנים לרעיון קטן מספיק זמן כדי להפוך למשהו אמיתי.</p>
          </div>
        </Reveal>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">שלושה מפגשים אפשריים</p>
            <h2 className="mt-6 text-5xl font-semibold text-navy sm:text-6xl">כל הרצאה היא פרק אחר בשיחה.</h2>
          </Reveal>
          <div className="mt-16">
            {lectureConcepts.map((lecture) => (
              <Reveal key={lecture.number} className="border-t border-gold/45 py-14 last:border-b md:py-20">
                <article className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="font-serif text-6xl font-semibold text-orange">{lecture.number}</p>
                    <h3 className="mt-6 max-w-md text-4xl leading-tight font-semibold text-navy">{lecture.title}</h3>
                  </div>
                  <div>
                    <div className="space-y-5 text-lg leading-8 text-ink/72">
                      {lecture.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <ul className="mt-9 grid gap-x-8 sm:grid-cols-2">
                      {lecture.topics.map((topic) => (
                        <li key={topic} className="flex gap-3 border-b border-navy/12 py-3 text-ink/75 before:mt-2.5 before:size-1.5 before:shrink-0 before:bg-orange">{topic}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">קהל והקשר</p>
            <h2 className="mt-6 text-5xl leading-tight font-semibold text-navy">למי ההרצאות מתאימות?</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="border-r-2 border-orange pr-6 font-serif text-3xl leading-relaxed text-dusk sm:pr-10">
              לארגונים וחברות טכנולוגיה, קהילות, אירועי תרבות, ספריות, קבוצות נשים, בתי ספר ומסגרות חינוכיות לבוגרים, אירועי חדשנות ו-AI, וערבי ספרות וקריאה.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-20 text-cream md:py-24">
        <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-10">
          <h2 className="max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl">להזמנת הרצאה או התאמת תוכן לקהל שלכם</h2>
          <Link href="/contact" className="group inline-flex w-fit items-center gap-3 bg-orange px-7 py-3.5 text-sm text-cream transition-colors hover:bg-copper">
            בואו נדבר <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
