import { notFound } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n-config";
import fr from "@/lib/dictionaries/fr.json";
import en from "@/lib/dictionaries/en.json";

import ProjectDetailClient from "@/components/projects/project-detail-client";

type Messages = Record<string, string>;

const dictionaries: Record<Locale, Messages> = {
  fr: fr as Messages,
  en: en as Messages,
};

const projects = [
  "portfolio-multilingue",
  "dashboard-saas",
  "site-vitrine-premium",
];

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !projects.includes(slug)) {
    notFound();
  }

  return (
    <ProjectDetailClient
      dictionary={dictionaries[locale]}
      locale={locale}
      slug={slug}
    />
  );
}

export const dynamic = "force-static";
export const dynamicParams = false;