import { notFound } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n-config";
import fr from "@/lib/dictionaries/fr.json";
import en from "@/lib/dictionaries/en.json";

import LegalPageClient from "@/components/legal/legal-page-client";

const dictionaries = {
  fr,
  en,
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <LegalPageClient
      dictionary={dictionaries[locale]}
      locale={locale}
      page="legal"
    />
  );
}

export const dynamic = "force-static";