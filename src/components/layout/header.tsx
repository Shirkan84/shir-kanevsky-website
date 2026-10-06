import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-col justify-center gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav aria-label="ניווט ראשי" className="overflow-x-auto pb-1 md:pb-0">
          <ul className="flex min-w-max items-center gap-6 text-sm text-ink/70">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-rust" href={item.href}>
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
