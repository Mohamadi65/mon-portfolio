// components/media-library/gallery-page-client.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/i18n-config";
import type { Galerie } from "@/lib/api.galeries";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
  galerie: Galerie;
};

function formatDate(value?: string | null, locale: Locale = "fr") {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function GalleryPageClient({ dictionary, locale, galerie }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  const date = formatDate(galerie.created_at ?? null, locale);
  const hasPhotos = (galerie.medias || []).some((m) => m.kind === "image");

  const backHref =
    locale === "fr" ? "/media-library" : `/${locale}/media-library`;

  const images = (galerie.medias || [])
    .filter((m) => m.kind === "image")
    .sort(
      (a, b) => (a.position_in_block ?? 0) - (b.position_in_block ?? 0)
    );

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col">
      <Navbar t={t} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-6 lg:px-8"
      >
        {/* Fil d’Ariane + retour */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            <Link href={backHref} className="hover:underline">
              {t("nav.mediaLibrary.breadcrumb") || "Médiathèque"}
            </Link>
            <span className="mx-1">/</span>
            <span className="text-slate-700">{galerie.titre}</span>
          </div>

          <Link
            href={backHref}
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            ← {t("mediaLibrary.backToList") || "Retour aux galeries"}
          </Link>
        </div>

        {/* En-tête */}
        <header className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-slate-900 mb-3">
            {galerie.titre}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            {date && (
              <span>
                {t("mediaLibrary.dateLabel") || "Créée le"} {date}
              </span>
            )}
            {hasPhotos && (
              <>
                <span>•</span>
                <span>{t("mediaLibrary.hasPhotos") || "Galerie photo"}</span>
              </>
            )}
          </div>

          {galerie.infos && (
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">
              {galerie.infos}
            </p>
          )}
        </header>

        {/* Cover grande */}
        {galerie.cover_url && (
          <section className="mb-8">
            <div className="relative w-full overflow-hidden rounded-3xl bg-slate-200 aspect-[16/9]">
              <Image
                src={galerie.cover_url}
                alt={galerie.titre}
                fill
                className="object-cover"
              />
            </div>
          </section>
        )}

        {/* Grille de photos */}
        <section className="pb-10">
          {images.length === 0 ? (
            <p className="text-sm text-slate-500">
              {t("mediaLibrary.emptyPhotos") ||
                "Cette galerie ne contient pas encore de photos."}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((m) => (
                <figure
                  key={m.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={m.url}
                      alt={m.alt || m.legend || galerie.titre}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {(m.legend || m.alt) && (
                    <figcaption className="px-3 py-2 text-xs text-slate-600">
                      {m.legend || m.alt}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter t={t} />
    </div>
  );
}
