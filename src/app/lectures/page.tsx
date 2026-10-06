import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "הרצאות" };

export default function LecturesPage() {
  return (
    <PageIntro eyebrow="מפגשים עם קהל" title="הרצאות שממשיכות להדהד גם אחרי שהאולם מתרוקן.">
      <p>כאן יוצגו הרצאות על הספר 2%, כתיבה, יצירתיות והמפגש המשתנה שלנו עם בינה מלאכותית.</p>
    </PageIntro>
  );
}
