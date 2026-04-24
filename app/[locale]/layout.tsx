// app/[locale]/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { locales, defaultLocale, type Locale } from "@/lib/i18n-config";

import fr from "@/lib/dictionaries/fr.json";
import en from "@/lib/dictionaries/en.json";

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

  if (!env) return new URL("http://localhost:3000");

  return new URL(env.startsWith("http") ? env : `https://${env}`);
}

function t(dict: Messages, key: string, fallback: string) {
  return dict[key] ?? fallback;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = dictionaries[locale];
  const base = getBaseUrl();

  const pathname = `/${locale}`;
  const canonical = new URL(pathname, base);

  const title = t(
    dict,
    "homepage.seo.title",
    "Développeur Full Stack Freelance — Next.js & Laravel"
  );

  const description = t(
    dict,
    "homepage.seo.description",
    "Portfolio freelance spécialisé en développement web moderne avec Next.js, Laravel, TypeScript et Tailwind CSS."
  );

  const languages: Record<string, string> = {};

  for (const l of locales) {
    languages[l] = `${base.origin}/${l}`;
  }

  languages["x-default"] = `${base.origin}/${defaultLocale}`;

  return {
    metadataBase: base,
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "Portfolio",
      locale,
      images: [
        {
          url: `/opengraph-image?locale=${locale}`,
          width: 1200,
          height: 630,
          alt: "Portfolio développeur Full Stack",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/opengraph-image?locale=${locale}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}

export const dynamic = "force-static";
export const dynamicParams = false;