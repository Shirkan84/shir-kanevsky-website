export const siteConfig = {
  name: "שיר קנבסקי",
  description: "כתיבה, הרצאות, יצירה ובינה מלאכותית",
  email: "shir.kanevsky@gmail.com",
};

export const storyClub = {
  name: "StoryClub",
  description: "ספרייה דיגיטלית עצמאית שיצרתי לסיפורים, כתיבה והשראה.",
  href: "https://storyclub.vercel.app/",
};

export const socialLinks = [
  {
    platform: "instagram",
    label: "Instagram - Shir Kanevsky",
    href: "https://www.instagram.com/shirkanevsky/",
  },
  {
    platform: "linkedin",
    label: "LinkedIn - Shir Kanevsky",
    href: "https://www.linkedin.com/in/shirkan1984",
  },
  {
    platform: "facebook",
    label: "Facebook - Shir Kanevsky",
    href: "https://www.facebook.com/shir.kanevsky",
  },
] as const;

export const navigation = [
  { href: "/", label: "בית" },
  { href: "/book", label: "הספר 2%" },
  { href: "/lectures", label: "הרצאות" },
  { href: "/writing-guidance", label: "ליווי כתיבה" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "יצירת קשר" },
] as const;
