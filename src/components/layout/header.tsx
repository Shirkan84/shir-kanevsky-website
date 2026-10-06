import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-paper/88 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-col justify-center gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="group flex w-fit items-center gap-3 text-plum" aria-label={`${siteConfig.name} — דף הבית`}>
          <span className="relative grid size-9 place-items-center border border-gold/55 transition-colors duration-300 group-hover:border-orange" aria-hidden="true">
            <svg viewBox="0 0 32 32" className="size-6" fill="none">
              <path d="M8 9h7v7H8zM17 16h7v7h-7z" stroke="currentColor" strokeWidth="1.25" />
              <path d="M15 9h9M8 23h9" stroke="#c45f32" strokeWidth="1.25" />
            </svg>
          </span>
          <span className="font-serif text-2xl font-semibold tracking-[-0.02em] sm:text-[1.7rem]">{siteConfig.name}</span>
        </Link>
        <nav aria-label="ניווט ראשי" className="overflow-x-auto pb-1 md:pb-0">
          <ul className="flex min-w-max items-center gap-6 text-sm text-ink/70 lg:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:right-0 after:h-px after:w-0 after:bg-orange after:transition-all after:duration-300 hover:text-plum hover:after:w-full" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
