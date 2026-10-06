import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sans = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const serif = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-frank-ruhl",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shir-kanevsky-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "סופרת, יוצרת ומרצה. הספר 2%, הרצאות וליווי כתיבה.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: "סופרת, יוצרת ומרצה. הספר 2%, הרצאות וליווי כתיבה.",
    images: [
      {
        url: "/images/Brand.png",
        width: 1732,
        height: 909,
        alt: "שיר קנבסקי - סופרת, יוצרת ומרצה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "סופרת, יוצרת ומרצה. הספר 2%, הרצאות וליווי כתיבה.",
    images: ["/images/Brand.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${sans.variable} ${serif.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
