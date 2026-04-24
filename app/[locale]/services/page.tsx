import { notFound } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n-config";
import fr from "@/lib/dictionaries/fr.json";
import en from "@/lib/dictionaries/en.json";

import ServicesPageClient from "@/components/services/services-page-client";

type Messages = Record<string, string>;

const dictionaries: Record<Locale, Messages> = {
  fr: fr as Messages,
  en: en as Messages,
};

function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <ServicesPageClient
      dictionary={dictionaries[locale]}
      locale={locale}
    />
  );
}

export const dynamic = "force-static";