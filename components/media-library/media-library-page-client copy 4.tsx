// components/media-library/media-library-page-client.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/i18n-config";
import type { Galerie } from "@/lib/api.galeries";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
  galeries?: Galerie[]; // ← peut être undefined, on sécurise
};

export default function MediaLibraryPageClient({
  dictionary,
  locale,
  galeries,
}: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;
  const [search, setSearch] = useState("");

  // 🔒 sécurité : même si galeries est undefined, on travaille toujours avec un tableau
  const list = useMemo<Galerie[]>(
    () => (Array.isArray(galeries) ? galeries : []),
    [galeries],
  );

  // 🔍 recherche par titre
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return list;
    return list.filter((g) => (g.titre ?? "").toLowerCase().includes(q));
  }, [list, search]);

  const buildGalleryHref = (g: Galerie) =>
    locale === "fr"
      ? `/media-library/${g.id}`
      : `/${locale}/media-library/${g.id}`;

  return (
    <div className="min-h-screen bg-[#faf7f2] dark:bg-slate-950 flex flex-col">
      <Navbar t={t} />

      <main className="mx-auto flex-1 w-full max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        {/* Titre + search */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t("nav.mediaLibrary.breadcrumb") || "Médiathèque"}
            </p>
            <h1 className="font-serif text-4xl font-bold text-slate-900 dark:text-slate-50">
              {t("mediaLibrary.title") || "Médiathèque"}
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              {t("mediaLibrary.subtitle") ||
                "Découvrez les galeries photos du club."}
            </p>
          </div>

          <div className="w-full md:w-80">
            <label className="mb-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
              {t("mediaLibrary.searchLabel") || "Rechercher une galerie"}
            </label>
            <input
              type="search"
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              placeholder={
                t("mediaLibrary.searchPlaceholder") ||
                "Rechercher par titre…"
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Liste de galeries */}
        {filtered.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t("mediaLibrary.empty") || "Aucune galerie pour le moment."}
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g) => {
              const href = buildGalleryHref(g);

              // compteur de photos si tu l’as un jour dans l’API
              const photoCount =
                (g as any).medias?.length ?? ((g as any).medias_count ?? 0);

              // ✅ on considère qu’il y a des photos si cover_url existe
              const hasPhotos = !!g.cover_url || photoCount > 0;

              const created = g.created_at ? new Date(g.created_at) : null;
              const dateLabel = created
                ? created.toLocaleDateString(
                    locale === "fr" ? "fr-FR" : "en-US",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    },
                  )
                : null;

              return (
                <article
                  key={g.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  {/* Image de couverture */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    {g.cover_url ? (
                      <Image
                        src={g.cover_url}
                        alt={g.titre}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-slate-500 dark:text-slate-300">
                        {t("mediaLibrary.noCover") || "Pas de couverture"}
                      </div>
                    )}

                    {/* Badge en haut à gauche */}
                    {g.kind === "photo" && (
                      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                        {hasPhotos
                          ? t("mediaLibrary.hasPhotos") || "Galerie photo"
                          : t("mediaLibrary.noPhotos") || "Aucune photo"}
                      </span>
                    )}
                  </div>

                  {/* Contenu de la carte */}
                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <h2 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 dark:text-slate-50 dark:group-hover:text-sky-400">
                      {g.titre}
                    </h2>

                    {g.infos && (
                      <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                        {g.infos}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between pt-4 text-xs text-slate-500 dark:text-slate-400">
                      {dateLabel && <span>{dateLabel}</span>}
                      <Link
                        href={href}
                        className="text-sm font-medium text-sky-600 hover:underline dark:text-sky-400"
                      >
                        {t("mediaLibrary.viewGallery") || "Voir la galerie"} →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      <SiteFooter t={t} />
    </div>
  );
}
