import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-paper-deep/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-9 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <Link className="relative transition-colors after:absolute after:-bottom-1 after:right-0 after:h-px after:w-full after:bg-gold hover:text-orange" href="/contact">
          יצירת קשר
        </Link>
      </div>
    </footer>
  );
}
