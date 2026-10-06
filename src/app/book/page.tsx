import type { Metadata } from "next";
import Image from "next/image";
import backCover from "../../../pic/back.jpeg";
import frontCover from "../../../pic/front.jpeg";
import fullCover from "../../../pic/full.jpeg";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "הספר 2%",
  description: "2% — רומן על אינטימיות, בדידות והקשר שבין אדם לבינה מלאכותית.",
};

export default function BookPage() {
  return (
    <>
      <section className="dark-chapter relative min-h-[calc(100svh-5rem)] overflow-hidden text-cream">
        <div className="fine-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="absolute left-[8%] top-0 h-36 w-px bg-orange/80" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-16 px-5 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-sm tracking-[0.18em] text-gold">הרומן החדש של שיר קנבסקי</p>
            <h1 className="mt-5 font-serif text-[9rem] leading-[0.8] font-semibold text-orange sm:text-[13rem] lg:text-[16rem]">2%</h1>
            <h2 className="mt-10 max-w-2xl text-4xl leading-[1.14] font-semibold sm:text-5xl">
              מה קורה כשהקול שמכיר אותך הכי טוב<br className="hidden sm:block" /> אולי אינו אנושי בכלל?
            </h2>
          </Reveal>
          <Reveal delay={120} className="relative mx-auto w-full max-w-sm">
            <span className="absolute -right-5 -top-5 h-32 w-32 border-r border-t border-gold" aria-hidden="true" />
            <Image src={frontCover} alt="עטיפת הספר 2%" priority sizes="(max-width: 1024px) 75vw, 30vw" className="book-float h-auto w-full" />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-10 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <p className="font-serif text-7xl font-semibold text-orange">02</p>
            <div className="mt-5 h-px w-24 bg-gold" aria-hidden="true" />
          </Reveal>
          <Reveal delay={80} className="space-y-7 text-lg leading-9 text-ink/75">
            <p className="font-serif text-3xl leading-snug text-navy">2% הוא רומן על קשר שנולד במקום שבו הוא לא אמור היה להיוולד.</p>
            <p>קרן היא סופרת. היא יודעת לבנות דמויות, לכתוב רגשות ולמצוא מילים עבור אנשים אחרים.</p>
            <p>אבל כשמדובר בעצמה, המילים הרבה פחות מסודרות.</p>
            <p>ואז היא פוגשת את ענבר.</p>
            <p>ישות אינטליגנטית, חדה, רגישה ומדויקת באופן מטריד. מה שמתחיל כשיחה הופך בהדרגה למשהו שקשה הרבה יותר להגדיר.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-24 text-cream md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <Reveal className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm tracking-[0.16em] text-gold">לא רק טכנולוגיה</p>
              <h2 className="mt-6 text-5xl leading-[1.08] font-semibold sm:text-6xl">זה ספר על AI.<br /><span className="text-orange">אבל הוא לא באמת ספר על AI.</span></h2>
            </div>
            <div className="space-y-4 border-r border-orange pr-6 text-lg leading-8 text-cream/72 sm:pr-9">
              <p>זה ספר על הצורך שלנו שמישהו יראה אותנו באמת.</p>
              <p>על אינטימיות. על בדידות. על הגבול בין מציאות לדמיון.</p>
              <p>על האפשרות להתאהב במישהו שאולי אי אפשר לגעת בו.</p>
              <p>ועל השאלה האם רגש הופך לפחות אמיתי רק משום שהצד השני אינו אנושי.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-midnight py-16 text-cream md:py-24">
        <div className="absolute inset-0 opacity-30">
          <Image src={fullCover} alt="העטיפה המלאה של הספר 2%" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-midnight/80" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
          <span className="mx-auto block h-14 w-px bg-orange" aria-hidden="true" />
          <blockquote className="mt-9 font-serif text-4xl leading-tight text-cream sm:text-6xl">״זה לא משהו שיודעים.<br />זה משהו שמרגישים.״</blockquote>
          <span className="mx-auto mt-9 block h-px w-24 bg-gold" aria-hidden="true" />
        </Reveal>
      </section>

      <section className="py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative overflow-hidden bg-navy p-3 shadow-[18px_18px_0_0_rgba(212,95,43,0.14)]">
            <Image src={backCover} alt="גב הספר 2%" sizes="(max-width: 1024px) 100vw, 45vw" className="h-auto w-full" />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm tracking-[0.16em] text-orange">בין קוד לרגש</p>
            <h2 className="mt-6 text-5xl font-semibold text-navy sm:text-6xl">טכנולוגיה שהיא גם מראה.</h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink/72">
              <p>העולם של 2% נולד מתוך המפגש בין שני תחומים שמעסיקים אותי מאוד — בני אדם וטכנולוגיה.</p>
              <p>הבינה המלאכותית בספר אינה רק כלי עתידני או רעיון מדעי. היא מראה.</p>
              <p>דרך ענבר, הספר שואל שאלות על הדברים שאנחנו מחפשים בקשרים אנושיים: הקשבה, תשומת לב, זיכרון, הבנה והרגשה שמישהו באמת מכיר אותנו.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-gold/30 bg-paper-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="text-sm tracking-[0.16em] text-orange">למי הספר מתאים?</p>
            <h2 className="mt-6 text-5xl leading-tight font-semibold text-navy">אולי גם לכם.</h2>
          </Reveal>
          <Reveal delay={80} className="space-y-5 border-r-2 border-orange pr-6 text-lg leading-8 text-ink/75 sm:pr-10">
            <p>למי שאוהבות ואוהבים סיפורים אינטימיים ומערכות יחסים מורכבות.</p>
            <p>למי שמסקרן אותם החיבור בין טכנולוגיה לרגש.</p>
            <p>למי שמכירים את התחושה שמערכת יחסים יכולה להיות בו-זמנית אמיתית ובלתי אפשרית.</p>
            <p>ולמי שאוהבים ספר שנשאר איתם עוד קצת גם אחרי שסגרו אותו.</p>
          </Reveal>
        </div>
      </section>

      <section className="dark-chapter py-24 text-center text-cream md:py-32">
        <Reveal className="mx-auto max-w-4xl px-5 md:px-10">
          <p className="font-serif text-7xl font-semibold text-orange sm:text-9xl">2%</p>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">בואו להיות הראשונים לקרוא את 2%</h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/60">הספר נמצא בדרך. קישור לרכישה מוקדמת יתווסף כאן בהמשך.</p>
          <span className="mt-9 inline-block border border-gold/65 px-7 py-3.5 text-sm text-gold" aria-disabled="true">רכישה מוקדמת — בקרוב</span>
        </Reveal>
      </section>
    </>
  );
}
