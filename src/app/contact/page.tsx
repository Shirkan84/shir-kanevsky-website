import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "יצירת קשר" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:px-10 md:py-28">
      <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-rust">יצירת קשר</p>
      <h1 className="max-w-3xl text-5xl leading-[1.12] font-semibold tracking-tight sm:text-7xl">יש לכם רעיון, שאלה או הזמנה להרצאה?</h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">אפשר לכתוב על הספר, הרצאות, ליווי כתיבה או כל שיתוף פעולה יצירתי.</p>
      <Link href={`mailto:${siteConfig.email}`} className="mt-10 inline-block border-b border-rust pb-1 text-lg text-rust">
        {siteConfig.email}
      </Link>
      <p className="mt-4 text-xs text-ink/40">יש לעדכן את כתובת הדוא״ל בקובץ ההגדרות.</p>
    </section>
  );
}
