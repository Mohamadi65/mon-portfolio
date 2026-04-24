"use client";

import type { Locale } from "@/lib/i18n-config";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import ServicesHero from "@/components/services/services-hero";
import ServicesList from "@/components/services/services-list";
import ServicesProcess from "@/components/services/services-process";
import ServicesCta from "@/components/services/services-cta";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale | string;
};

export default function ServicesPageClient({ dictionary, locale }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 pt-[88px] text-slate-950">
      <Navbar t={t} />

      <main>
        <ServicesHero t={t} locale={String(locale)} />
        <ServicesList t={t} />
        <ServicesProcess t={t} />
        <ServicesCta t={t} locale={String(locale)} />
      </main>

      <SiteFooter t={t} />
    </div>
  );
}