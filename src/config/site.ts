export const siteConfig = {
  name: "שיר קנבסקי",
  description: "כתיבה, הרצאות, יצירה ובינה מלאכותית",
  email: "hello@example.com",
};

export const navigation = [
  { href: "/", label: "בית" },
  { href: "/book", label: "הספר 2%" },
  { href: "/lectures", label: "הרצאות" },
  { href: "/writing-guidance", label: "ליווי כתיבה" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "יצירת קשר" },
] as const;
