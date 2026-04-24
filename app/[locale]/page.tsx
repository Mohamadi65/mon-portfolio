// app/[locale]/page.tsx
import { notFound } from "next/navigation";
import Script from "next/script";

import { locales, defaultLocale, type Locale } from "@/lib/i18n-config";

import fr from "@/lib/dictionaries/fr.json";
import en from "@/lib/dictionaries/en.json";

import HomePageClient from "@/components/home/home-page-client";

type Messages = Record<string, string>;

const dictionaries: Record<Locale, Messages> = {
  fr: fr as Messages,
  en: en as Messages,
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function getBaseUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;

  if (!env) return "http://localhost:3000";

  return env.startsWith("http") ? env : `https://${env}`;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = dictionaries[locale];

  const base = getBaseUrl();
  const url = `${base}/${locale}`;

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ton Nom",
    jobTitle: "Développeur Full Stack Freelance",
    url,
    knowsAbout: ["Next.js", "Laravel", "TypeScript", "Tailwind CSS"],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Portfolio",
    url: `${base}/${defaultLocale}`,
    inLanguage: locale,
  };

  return (
    <>
      <Script
        id="ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />

      <HomePageClient dictionary={dictionary} locale={locale} />
    </>
  );
}

export const dynamic = "force-static";