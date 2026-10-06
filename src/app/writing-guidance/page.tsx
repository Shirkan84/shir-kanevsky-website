import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = { title: "ליווי כתיבה" };

export default function WritingGuidancePage() {
  return (
    <PageIntro eyebrow="תהליך אישי" title="למצוא את הקול, לדייק את הסיפור, ולהמשיך לכתוב.">
      <p>עמוד לשירותי ליווי והנחיית כתיבה אישיים, משלב הרעיון ועד לטקסט שלם ומגובש.</p>
    </PageIntro>
  );
}
