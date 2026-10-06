import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <Link className="transition-colors hover:text-rust" href="/contact">
          יצירת קשר
        </Link>
      </div>
    </footer>
  );
}
