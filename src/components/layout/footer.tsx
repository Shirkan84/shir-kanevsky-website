import Link from "next/link";
import { ExternalLinkIcon, SocialLinks } from "@/components/ui/social-links";
import { siteConfig, storyClub } from "@/config/site";

const footerNavigation = [
  { href: "/about", label: "אודות" },
  { href: "/book", label: "הספר 2%" },
  { href: "/lectures", label: "הרצאות" },
  { href: "/writing-guidance", label: "ליווי כתיבה" },
  { href: "/contact", label: "יצירת קשר" },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-plum text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-2 md:px-10 lg:grid-cols-[1.15fr_0.8fr_0.95fr_1.15fr] lg:gap-10 lg:py-16">
        <div>
          <p className="font-serif text-3xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 text-sm tracking-[0.12em] text-gold">יוצרת | כותבת | מרצה</p>
        </div>

        <nav aria-label="ניווט תחתון">
          <p className="mb-5 text-xs tracking-[0.16em] text-gold">ניווט</p>
          <ul className="space-y-3 text-sm text-cream/65">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-orange">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-5 text-xs tracking-[0.16em] text-gold">פרויקט נוסף</p>
          <a
            href={storyClub.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-b border-orange/65 pb-1 font-serif text-xl transition-colors hover:text-orange"
          >
            {storyClub.name}
            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ExternalLinkIcon /></span>
          </a>
          <p className="mt-3 max-w-56 text-sm leading-6 text-cream/55">{storyClub.description}</p>
        </div>

        <div>
          <p className="mb-5 text-xs tracking-[0.16em] text-gold">אפשר למצוא אותי גם כאן</p>
          <a href={`mailto:${siteConfig.email}`} className="text-sm text-cream/75 transition-colors hover:text-orange" dir="ltr">
            {siteConfig.email}
          </a>
          <SocialLinks className="mt-5" linkClassName="text-cream/65 hover:border-orange/60 hover:text-orange" />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-cream/40 md:px-10">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
