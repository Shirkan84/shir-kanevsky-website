import Image from "next/image";
import Link from "next/link";
import logo from "../../../pic/Logo.jpeg";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-plum/12 bg-paper/90 backdrop-blur-lg">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col justify-center gap-4 overflow-hidden px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="group flex w-fit max-w-full shrink-0 items-center" aria-label={`${siteConfig.name}, דף הבית`}>
          <Image
            src={logo}
            alt="הלוגו של שיר קנבסקי"
            priority
            sizes="(max-width: 640px) 128px, 170px"
            className="h-9 w-auto max-w-full object-contain transition-opacity duration-300 group-hover:opacity-80 sm:h-12"
          />
          <span className="sr-only">{siteConfig.name}</span>
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
