// components/activities/activity-page-client.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/i18n-config";
import type { ActivitySlug } from "@/app/[locale]/activites/[slug]/page";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

type ActivityPageClientProps = {
  dictionary: Record<string, string>;
  locale: Locale;
  slug: ActivitySlug;
};

function getActivityImage(slug: ActivitySlug): string {
  switch (slug) {
    case "judo":
      return "/images/activities/judo.png";
    case "aikido":
      return "/images/activities/aikido.png";
    case "bjj":
    default:
      return "/images/activities/jiu-jitsu-bresilien.png";
  }
}

export default function ActivityPageClient({
  dictionary,
  locale,
  slug,
}: ActivityPageClientProps) {
  const t = (key: string) => dictionary?.[key] ?? key;
  const baseKey = `activities.${slug}`;
  const imageSrc = getActivityImage(slug);

  const heroTitle = t(`${baseKey}.heroTitle`);
  const heroSubtitle = t(`${baseKey}.heroSubtitle`);
  const heroIntro = t(`${baseKey}.heroIntro`);

  const section1Title = t(`${baseKey}.section1.title`);
  const section1Body = t(`${baseKey}.section1.body`);

  const section2Title = t(`${baseKey}.section2.title`);
  const section2Body = t(`${baseKey}.section2.body`);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar t={t} />

      <main className="bg-slate-50 dark:bg-slate-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={t(`${baseKey}.imageAlt`)}
              fill
              priority
              className="h-full w-full object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-900/70" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              {t("activities.breadcrumb")}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              {heroTitle}
            </h1>

            {heroSubtitle && heroSubtitle !== "activities.subtitle.empty" && (
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-sky-200">
                {heroSubtitle}
              </p>
            )}

            {heroIntro && (
              <p className="mt-6 max-w-2xl text-base text-slate-100">
                {heroIntro}
              </p>
            )}
          </div>
        </section>

        {/* CONTENU TEXTE */}
        <section className="mx-auto max-w-5xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
          <article className="space-y-4 text-slate-700 dark:text-slate-100">
            <h2 className="text-xl font-semibold">{section1Title}</h2>
            <p className="text-sm leading-relaxed">{section1Body}</p>
          </article>

          <article className="space-y-4 text-slate-700 dark:text-slate-100">
            <h2 className="text-xl font-semibold">{section2Title}</h2>
            <p className="text-sm leading-relaxed">{section2Body}</p>
          </article>

          {/* Bouton retour liste */}
          <div className="pt-4">
            <Link
              href={locale === "fr" ? "/#activities" : `/${locale}/#activities`}
              className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
            >
              ← {t("activities.backToList")}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter t={t} />
    </div>
  );
}
