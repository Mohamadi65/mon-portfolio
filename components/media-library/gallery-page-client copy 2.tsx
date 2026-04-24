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

  const lang = locale === "en" ? "en-GB" : "fr-FR";

  return d.toLocaleDateString(lang, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function GalleryPageClient({
  dictionary,
  locale,
  galerie,
}: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  const date = formatDate(galerie.created_at ?? null, locale);

  const allImages = (galerie.medias || [])
    .filter((m) => m.kind === "image")
    .sort(
      (a, b) => (a.position_in_block ?? 0) - (b.position_in_block ?? 0),
    );

  const hasPhotos = allImages.length > 0;

  // --- Cover & grille ---
  const coverImage = hasPhotos ? allImages[0] : undefined;
  const coverUrl = galerie.cover_url || coverImage?.url || null;

  // on enlève le cover de la grille pour ne pas l’afficher 2 fois
  const images = coverImage ? allImages.slice(1) : allImages;

  const backHref =
    locale === "fr" ? "/media-library" : `/${locale}/media-library`;

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col">
      <Navbar t={t} />

      <main id="main-content" className="flex-1">
        {/* ------------------------------------------------------------------ */}
        {/* HERO : cover en arrière-plan + dégradé sombre + textes             */}
        {/* ------------------------------------------------------------------ */}
        <section className="relative border-b border-slate-200 bg-slate-900 text-white">
          {coverUrl && (
            <div className="absolute inset-0">
              <Image
                src={coverUrl}
                alt={galerie.titre}
                fill
                priority
                className="object-cover"
              />
              {/* assombrissement + dégradé pour lisibilité du texte */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
            </div>
          )}

          <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:px-6 lg:px-8">
            {/* Fil d’Ariane + bouton retour */}
            <div className="mb-1 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-100/90">
              <div>
                <Link href={backHref} className="hover:underline">
                  {t("nav.mediaLibrary.breadcrumb") || "Médiathèque"}
                </Link>
                <span className="mx-1">/</span>
                <span className="opacity-90">{galerie.titre}</span>
              </div>

              <Link
                href={backHref}
                className="inline-flex items-center gap-1 rounded-full border border-white/60 px-3 py-1.5 text-xs font-medium hover:bg-white/10"
              >
                ← {t("mediaLibrary.backToList") || "Retour aux galeries"}
              </Link>
            </div>

            {/* Titre + méta + texte d’intro directement sur le cover */}
            <header className="space-y-3 max-w-3xl">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {galerie.titre}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-100/90">
                {date && (
                  <span>
                    {t("mediaLibrary.dateLabel") || "Créée le"} {date}
                  </span>
                )}
                {hasPhotos && (
                  <>
                    <span>•</span>
                    <span>
                      {t("mediaLibrary.hasPhotos") || "Galerie photo"}
                    </span>
                  </>
                )}
              </div>

              {galerie.infos && (
                <p className="mt-1 text-sm sm:text-base leading-relaxed text-slate-100/90">
                  {galerie.infos}
                </p>
              )}
            </header>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* GRILLE DE PHOTOS (sans l’image de cover)                           */}
        {/* ------------------------------------------------------------------ */}
        <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 lg:px-8 pb-12">
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
