"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../pic/Logo.jpeg";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-plum/12 bg-paper/90 backdrop-blur-lg">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl flex-col justify-center gap-3 overflow-hidden px-5 py-3 md:flex-row md:items-center md:justify-start md:gap-12 md:px-10 md:py-4">
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
        <nav aria-label="ניווט ראשי" className="w-full max-w-full pb-1 md:w-auto md:pb-0">
          <ul className="grid grid-cols-3 items-center gap-x-5 gap-y-2.5 text-base font-medium text-copper md:flex md:min-w-max md:gap-8 md:text-[1.0625rem] lg:gap-9">
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    className={`relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:right-0 after:h-px after:bg-orange after:transition-all after:duration-300 hover:text-plum hover:after:w-full ${isActive ? "text-plum after:w-full" : "after:w-0"}`}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
