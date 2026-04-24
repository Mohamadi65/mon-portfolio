"use client";

import type { Locale } from "@/lib/i18n-config";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

import ProjectDetailHero from "./project-detail-hero";
import ProjectDetailContent from "./project-detail-content";
import ProjectDetailCta from "./project-detail-cta";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale | string;
  slug: string;
};

export default function ProjectDetailClient({
  dictionary,
  locale,
  slug,
}: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 pt-[88px] text-slate-950">
      <Navbar t={t} />

      <main>
        <ProjectDetailHero t={t} slug={slug} />
        <ProjectDetailContent t={t} slug={slug} />
        <ProjectDetailCta t={t} locale={String(locale)} />
      </main>

      <SiteFooter t={t} />
    </div>
  );
}