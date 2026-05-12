import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/contexts/language-context";
import QueryProvider from "@/app/providers/providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mohamadizongo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Développeur Full Stack Freelance dans l’Aude et en Occitanie — Mohamadi Zongo",
    template: "%s | Développeur Full Stack Freelance",
  },

  description:
    "Développeur Full Stack freelance dans l’Aude et en Occitanie, spécialisé en Next.js, Laravel, TypeScript et Tailwind CSS. Création de sites web modernes, applications web, dashboards et plateformes sur mesure.",

  keywords: [
    "développeur full stack freelance",
    "développeur web freelance",
    "développeur web Aude",
    "développeur freelance Aude",
    "développeur web Occitanie",
    "développeur freelance Occitanie",
    "développeur Next.js freelance",
    "développeur Laravel freelance",
    "création site web Aude",
    "création site web Occitanie",
    "application web sur mesure",
    "dashboard web",
    "Mohamadi Zongo",
  ],

  authors: [{ name: "Mohamadi Zongo" }],
  creator: "Mohamadi Zongo",
  publisher: "Mohamadi Zongo",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Développeur Full Stack Freelance",
    title:
      "Développeur Full Stack Freelance dans l’Aude et en Occitanie — Mohamadi Zongo",
    description:
      "Création de sites web modernes, applications web, dashboards et plateformes sur mesure avec Next.js, Laravel, TypeScript et Tailwind CSS.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Développeur Full Stack Freelance dans l’Aude et en Occitanie",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Développeur Full Stack Freelance dans l’Aude et en Occitanie — Mohamadi Zongo",
    description:
      "Création de sites web modernes, applications web et dashboards dans l’Aude et en Occitanie.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body>
        <QueryProvider>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </QueryProvider>
      </body>
    </html>
  );
}