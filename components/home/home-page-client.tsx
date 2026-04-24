"use client";

import type { Locale } from "@/lib/i18n-config";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

import Hero from "@/components/home/home-hero";
import Services from "@/components/home/services";
import Stack from "@/components/home/stack";

type HomePageClientProps = {
  dictionary: Record<string, string>;
  locale: Locale | string;
};

export default function HomePageClient({
  dictionary,
  locale,
}: HomePageClientProps) {
  const t = (key: string) => dictionary?.[key] ?? key;

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Navbar t={t} />

      <main id="main-content" className="bg-slate-50">
        <Hero t={t} locale={String(locale)} />
        <Services t={t} />
        <Stack t={t} />
      </main>

      <SiteFooter t={t} />
    </div>
  );
}