import Image from "next/image";
import Link from "next/link";
import backCover from "../../pic/back.jpeg";
import frontCover from "../../pic/front.jpeg";
import shirkanPortrait from "../../pic/Shirkan.jpeg";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const lectures = [
  "מהרעיון לספר: ליצור לפני שמרגישים מוכנים",
  "כש-AI פוגש יצירתיות",
  "2%: אהבה בעידן של בינה מלאכותית",
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-paper">
        <div className="absolute -left-8 top-8 hidden font-serif text-[26rem] leading-none text-plum/[0.035] select-none lg:block" aria-hidden="true">02</div>
        <div className="absolute right-[7%] top-0 h-28 w-px bg-orange" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[90rem] items-center gap-14 px-5 py-14 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0 lg:py-16">
          <Reveal className="relative z-20 lg:-ml-8">
            <p className="mb-7 flex items-center gap-3 text-base font-semibold tracking-[0.12em] text-orange before:h-px before:w-12 before:bg-gold sm:text-lg">
              יוצרת * כותבת * מרצה
            </p>
            <h1 className="font-serif text-[clamp(1.7rem,6vw,4rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-plum">
              <span className="block lg:whitespace-nowrap">אל תחכו לרגע שבו תרגישו מוכנים.{" "}</span>
              <span className="mt-3 block text-ink lg:whitespace-nowrap">צרו אותו תוך כדי תנועה.</span>
            </h1>
            <p className="mt-9 max-w-lg text-lg leading-8 text-ink/68">
              ספרות, יצירה וטכנולוגיה נפגשות במקום שבו רעיון קטן מתחיל לקבל צורה.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/book" className="group inline-flex items-center gap-4 bg-orange px-8 py-4 text-sm font-medium text-cream shadow-[6px_6px_0_0_#4a253d] transition-all duration-300 hover:-translate-y-1 hover:bg-copper hover:shadow-[9px_9px_0_0_#4a253d]">
                לספר 2% <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
              </Link>
              <Link href="/about" className="group relative py-2 text-sm text-plum after:absolute after:bottom-0 after:right-0 after:h-px after:w-full after:origin-right after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-50">
                להכיר אותי
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="group relative z-10 mx-auto h-[35rem] w-full max-w-xl sm:h-[43rem] lg:-left-10 lg:h-[46rem]">
            <div className="absolute inset-y-8 left-0 w-[88%] bg-plum" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 h-[92%] w-[82%] overflow-hidden shadow-[0_35px_75px_rgba(53,45,47,0.25)]">
              <Image src={shirkanPortrait} alt="שיר קנבסקי" fill priority sizes="(max-width: 1024px) 82vw, 36vw" className="image-zoom object-cover object-[center_22%]" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-plum/45 to-transparent" aria-hidden="true" />
            </div>
            <div className="book-float absolute bottom-6 left-0 w-[34%] sm:w-[30%] lg:-left-4 lg:w-[34%]">
              <Image src={frontCover} alt="עטיפת הספר 2%" priority sizes="(max-width: 1024px) 30vw, 14vw" className="h-auto w-full border border-cream/20" />
            </div>
            <span className="absolute right-[8%] top-0 h-24 w-px bg-orange" aria-hidden="true" />
            <span className="absolute right-[8%] top-0 h-px w-28 bg-orange" aria-hidden="true" />
          </Reveal>
        </div>
        <p className="absolute bottom-8 right-5 hidden origin-right rotate-90 text-[0.65rem] tracking-[0.3em] text-plum/45 xl:block" aria-hidden="true">STORIES / PEOPLE / TECHNOLOGY</p>
      </section>

      <section id="book-feature" className="relative scroll-mt-20 overflow-hidden bg-plum py-24 text-cream md:py-36">
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 font-serif text-[18rem] leading-none font-semibold text-cream/[0.035] sm:text-[28rem]" aria-hidden="true">2%</div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold/35" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-sm lg:translate-y-10">
            <div className="absolute -inset-6 border border-gold/25" aria-hidden="true" />
            <div className="group relative overflow-hidden">
              <Image src={frontCover} alt="עטיפת הספר 2%" sizes="(max-width: 1024px) 75vw, 28vw" className="image-zoom h-auto w-full shadow-[0_35px_65px_rgba(24,10,19,0.45)]" />
            </div>
            <span className="absolute -right-10 top-16 h-px w-20 bg-orange" aria-hidden="true" />
          </Reveal>
          <Reveal delay={100} className="lg:-translate-y-8">
            <p className="text-sm tracking-[0.18em] text-gold">01 / הספר</p>
            <p className="mt-5 font-serif text-[8rem] leading-[0.8] font-semibold text-orange sm:text-[12rem]">2%</p>
            <h2 className="mt-8 max-w-2xl text-4xl leading-tight font-semibold sm:text-6xl">בואו להיות הראשונים לקרוא את הספר</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-cream/68">
              רומן על קשר בלתי אפשרי, על אינטימיות בעידן של בינה מלאכותית, ועל השאלה אם רגש נעשה פחות אמיתי כשהצד השני אינו אנושי.
            </p>
            <Link href="/book" className="group mt-10 inline-flex items-center gap-4 text-sm text-gold transition-colors hover:text-cream">
              <span className="h-px w-12 bg-orange transition-all duration-300 group-hover:w-20" aria-hidden="true" />
              להיכנס לעולם של 2%
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="about-feature" className="relative scroll-mt-20 overflow-hidden bg-paper py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="group relative z-10 lg:translate-x-8">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={shirkanPortrait} alt="שיר קנבסקי, סופרת, יוצרת ואשת טכנולוגיה" fill sizes="(max-width: 1024px) 100vw, 38vw" className="image-zoom object-cover object-top" />
            </div>
            <span className="absolute -bottom-5 -left-5 h-32 w-32 border-b border-l border-orange" aria-hidden="true" />
            <span className="absolute -right-7 top-12 font-serif text-7xl text-gold/65" aria-hidden="true">״</span>
          </Reveal>
          <Reveal delay={100} className="relative z-20 -mt-12 bg-cream px-6 py-12 shadow-[0_22px_55px_rgba(74,37,61,0.12)] sm:px-12 lg:-mr-14 lg:mt-0 lg:px-16 lg:py-16">
            <p className="text-sm tracking-[0.18em] text-orange">02 / אודות</p>
            <h2 className="mt-7 max-w-2xl text-5xl leading-[1.05] font-semibold text-plum sm:text-7xl">כותבת כדי להבין אנשים.</h2>
            <blockquote className="mt-7 border-r-2 border-gold pr-6 font-serif text-3xl leading-snug text-dusk">ולפעמים גם כדי להבין את עצמי.</blockquote>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/70">
              אני סופרת, יוצרת ואשת טכנולוגיה. מעניין אותי המרחב שבין קוד לרגש, ומה קורה כשהטכנולוגיה מתחילה לגעת במקומות הכי אנושיים שלנו.
            </p>
            <Link href="/about" className="group mt-9 inline-flex items-center gap-4 text-sm text-plum">
              <span className="h-px w-10 bg-orange transition-all duration-300 group-hover:w-16" aria-hidden="true" />
              להכיר אותי קצת יותר
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="lectures-feature" className="relative scroll-mt-20 overflow-hidden bg-midnight py-24 text-cream md:py-36">
        <div className="absolute -right-20 -top-28 size-[28rem] rounded-full border border-gold/10" aria-hidden="true" />
        <div className="absolute bottom-0 left-[12%] h-32 w-px bg-orange" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm tracking-[0.18em] text-gold">03 / הרצאות</p>
              <h2 className="mt-7 max-w-3xl text-5xl leading-[1.04] font-semibold sm:text-7xl">סיפורים מתחילים לפעמים במקום שלא תכננו להגיע אליו.</h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-cream/62">מפגשים שנולדו מתוך כתיבה, טכנולוגיה, יצירת הספר והשאלות שנפתחות ביניהם.</p>
              <Link href="/lectures" className="mt-10 inline-flex items-center gap-3 border border-gold/55 px-7 py-3.5 text-sm text-gold transition-colors hover:border-orange hover:text-orange">
                לכל ההרצאות <span aria-hidden="true">←</span>
              </Link>
            </div>
            <div className="border-r border-orange/70 pr-6 sm:pr-10">
              {lectures.map((lecture, index) => (
                <p key={lecture} className="flex items-start gap-5 border-b border-cream/12 py-7 font-serif text-2xl leading-snug text-cream/85 first:pt-0">
                  <span className="mt-1 min-w-6 shrink-0 font-sans text-xs text-orange">0{index + 1}</span>
                  <span>{lecture}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="guidance-feature" className="relative scroll-mt-20 overflow-hidden bg-paper py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="relative z-10 lg:-ml-10">
            <p className="text-sm tracking-[0.18em] text-orange">04 / ליווי כתיבה ויצירה</p>
            <h2 className="mt-7 max-w-3xl text-5xl leading-[1.06] font-semibold text-plum sm:text-7xl">יש לכם סיפור.<br /><span className="text-ink">לא תמיד ברור עדיין איך לכתוב אותו.</span></h2>
            <blockquote className="mt-9 max-w-2xl border-r-2 border-gold pr-6 font-serif text-2xl leading-relaxed text-dusk sm:text-3xl">
              ״כתיבה טובה לא מתחילה כשכבר יודעים בדיוק מה רוצים לומר. לפעמים מגלים את זה רק בזמן שכותבים.״
            </blockquote>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/68">ליווי למי שרוצים מישהי שתחשוב איתם על הסיפור, לא במקומם.</p>
            <Link href="/writing-guidance" className="group mt-9 inline-flex items-center gap-4 text-sm text-plum">
              <span className="h-px w-10 bg-orange transition-all duration-300 group-hover:w-16" aria-hidden="true" />
              איך אפשר לעבוד יחד
            </Link>
          </Reveal>
          <Reveal delay={100} className="group relative mx-auto aspect-[2/3] w-full max-w-lg">
            <div className="absolute inset-0 overflow-hidden bg-plum">
              <Image src={backCover} alt="שולחן כתיבה בלילה מתוך העולם החזותי של 2%" fill sizes="(max-width: 1024px) 100vw, 40vw" className="image-zoom object-contain object-top opacity-90" />
              <div className="absolute inset-0 bg-plum/18" aria-hidden="true" />
            </div>
            <span className="absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-orange" aria-hidden="true" />
            <span className="absolute -left-4 -top-4 h-20 w-px bg-gold" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-plum/15 bg-paper-deep py-20 md:py-24">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="text-sm tracking-[0.18em] text-orange">05 / יצירת קשר</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-semibold text-plum sm:text-5xl">רעיון, שאלה או שיחה שעוד לא ברור לאן תוביל.</h2>
          </div>
          <a href={`mailto:${siteConfig.email}`} className="w-fit border-b border-orange pb-2 text-lg text-plum transition-colors hover:text-copper" dir="ltr">
            {siteConfig.email}
          </a>
        </Reveal>
      </section>
    </>
  );
}
