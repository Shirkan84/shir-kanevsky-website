import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-plum/12 bg-paper/90 backdrop-blur-lg">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col justify-center gap-4 overflow-hidden px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="group flex w-fit max-w-full shrink-0 items-center gap-3 text-plum" aria-label={`${siteConfig.name}, דף הבית`}>
          <span className="relative block size-10" aria-hidden="true">
            <span className="absolute right-0 top-0 font-serif text-[1.65rem] leading-none text-plum transition-transform duration-500 group-hover:-translate-y-0.5">ש</span>
            <span className="absolute bottom-0 left-0 font-serif text-[1.65rem] leading-none text-orange transition-transform duration-500 group-hover:translate-y-0.5">ק</span>
            <span className="absolute bottom-1 right-1 h-px w-7 origin-right bg-gold transition-transform duration-500 group-hover:scale-x-75" />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-[-0.02em] sm:text-[1.7rem]">{siteConfig.name}</span>
        </Link>
        <nav aria-label="ניווט ראשי" className="w-full max-w-full overflow-x-auto pb-1 md:w-auto md:pb-0">
          <ul className="flex min-w-max items-center gap-6 text-sm text-ink/68 lg:gap-8">
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
