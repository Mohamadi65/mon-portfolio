// components/season70/chronicle-article-layout.tsx
"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/i18n-config";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

type NavLink = {
  href: string;
  label?: string;
};

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
  breadcrumbKey?: string;
  title: string;
  intro?: ReactNode;
  topImage?: {
    src: string;
    alt: string;
    aspect?: string; // ex: "4/5"
  };
  children: ReactNode;
  prev?: NavLink;
  next?: NavLink;
};

export default function ChronicleArticleLayout({
  dictionary,
  locale, // eslint-disable-line @typescript-eslint/no-unused-vars
  breadcrumbKey = "season70.breadcrumb",
  title,
  intro,
  topImage,
  children,
  prev,
  next,
}: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  const prevText = prev?.label || t("season70.chronicle.prev") || "Article précédent";
  const nextText = next?.label || t("season70.chronicle.next") || "Article suivant";

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col">
      {/* NAVBAR */}
      <Navbar t={t} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 md:px-6"
      >
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          
          {t(breadcrumbKey) || "Spécial 70e saison 1952-2021"}
        </p>

        <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 mb-6">
          {title}
        </h1>

        {topImage && (
          <figure className="mx-auto mb-8 max-w-2xl">
            <div
              className={`relative w-full overflow-hidden bg-slate-200 aspect-[${
                topImage.aspect || "4/5"
              }]`}
            >
              <Image
                src={topImage.src}
                alt={topImage.alt}
                fill
                className="object-cover"
              />
            </div>
          </figure>
        )}

        {intro && (
          <div className="mb-6 text-base leading-relaxed text-slate-800 space-y-4">
            {intro}
          </div>
        )}

        <article className="space-y-4 text-base leading-relaxed text-slate-800">
          {children}
        </article>

        {(prev || next) && (
          <nav className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:justify-between">
            {prev ? (
              <Link
                href={prev.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                ← {prevText}
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                href={next.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {nextText} →
              </Link>
            )}
          </nav>
        )}
      </main>

      {/* FOOTER */}
      <SiteFooter t={t} />
    </div>
  );
}
