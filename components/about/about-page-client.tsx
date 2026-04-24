"use client";

import type { Locale } from "@/lib/i18n-config";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

import AboutHero from "./about-hero";
import AboutContent from "./about-content";
import AboutValues from "./about-values";
import AboutCta from "./about-cta";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale | string;
};

export default function AboutPageClient({ dictionary, locale }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  return (
    <div className="min-h-screen bg-slate-50 pt-[88px] text-slate-950">
      <Navbar t={t} />

      <main>
        <AboutHero t={t} />
        <AboutContent t={t} />
        <AboutValues t={t} />
        <AboutCta t={t} locale={String(locale)} />
      </main>

      <SiteFooter t={t} />
    </div>
  );
}