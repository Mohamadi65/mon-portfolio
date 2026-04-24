"use client";

import type { Locale } from "@/lib/i18n-config";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectsCta from "@/components/projects/projects-cta";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale | string;
};

export default function ProjectsPageClient({ dictionary, locale }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 pt-[88px] text-slate-950">
      <Navbar t={t} />

      <main>
        <ProjectsHero t={t} locale={String(locale)} />
        <ProjectsGrid t={t} locale={String(locale)} />
        <ProjectsCta t={t} locale={String(locale)} />
      </main>

      <SiteFooter t={t} />
    </div>
  );
}