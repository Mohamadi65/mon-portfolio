// components/media-library/media-library-page-client.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ImageIcon, Loader2 } from "lucide-react";

import type { Locale } from "@/lib/i18n-config";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { listGaleries, type Galerie } from "@/lib/api.galeries";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function MediaLibraryPageClient({ dictionary, locale }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  const [galeries, setGaleries] = useState<Galerie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  // chargement des galeries photo
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const raw = await listGaleries({ per_page: 200 });
        const items: Galerie[] = (raw as any)?.data ?? (raw as any) ?? [];
        const photosOnly = items.filter((g) => g.kind === "photo");

        if (!cancelled) setGaleries(photosOnly);
      } catch (e) {
        console.error(e);
        if (!cancelled) {
          setError(
            "Impossible de charger la médiathèque pour le moment."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return galeries;
    return galeries.filter((g) => (g.titre || "").toLowerCase().includes(q));
  }, [galeries, search]);

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col">
      {/* NAVBAR */}
      <Navbar t={t} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-6 md:py-16"
      >
        {/* Header page */}
        <header className="mb-10">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">
            {t("nav.mediaLibrary.breadcrumb") || "Médiathèque"}
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">
                {t("mediaLibrary.title") || "Médiathèque photos"}
              </h1>
              <p className="mt-3 text-sm md:text-base text-slate-700 max-w-2xl">
                {t("mediaLibrary.subtitle") ||
                  "Plongez dans les souvenirs du dojo : stages, compétitions, cours, démonstrations et moments de convivialité."}
              </p>
            </div>

            {/* Barre de recherche */}
            <div className="w-full md:w-72">
              <label className="block text-xs font-medium text-slate-500 mb-1">
                {t("mediaLibrary.searchLabel") || "Rechercher une galerie"}
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  t("mediaLibrary.searchPlaceholder") ||
                  "Titre de la galerie..."
                }
                className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>
        </header>

        {/* États de chargement / erreur */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="flex items-center gap-3 text-slate-500">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>
                {t("mediaLibrary.loading") || "Chargement des galeries..."}
              </span>
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="rounded-md border border-slate-200 bg-white px-4 py-10 text-center text-sm text-slate-600">
            {search
              ? t("mediaLibrary.emptySearch") ||
                "Aucune galerie ne correspond à votre recherche."
              : t("mediaLibrary.empty") ||
                "Aucune galerie photo n’est disponible pour le moment."}
          </div>
        )}

        {/* Grille des galeries */}
        {!loading && !error && filtered.length > 0 && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g) => {
              const cover =
                g.cover_url ||
                g.medias?.[0]?.url ||
                "/images/placeholders/gallery-cover.jpg";

              const photosCount = g.medias?.length ?? 0;

              return (
                <article
                  key={g.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                    <Image
                      src={cover}
                      alt={g.titre || ""}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />

                    {/* Badge nb de photos */}
                    <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      <ImageIcon className="h-3 w-3" />
                      <span>
                        {photosCount > 0
                          ? `${photosCount} ${
                              photosCount > 1 ? "photos" : "photo"
                            }`
                          : t("mediaLibrary.noPhotos") || "Aucune photo"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 px-4 py-4">
                    <h2 className="text-sm font-semibold leading-snug text-slate-900 line-clamp-2">
                      {g.titre}
                    </h2>

                    {g.infos && (
                      <p className="text-xs text-slate-600 line-clamp-3">
                        {g.infos}
                      </p>
                    )}

                    <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                      <span>
                        {new Date(
                          g.created_at ?? g.updated_at ?? ""
                        ).toLocaleDateString(
                          locale === "fr" ? "fr-FR" : "en-US"
                        )}
                      </span>

                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-900 underline underline-offset-2"
                      >
                        {t("mediaLibrary.viewGallery") || "Voir la galerie"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </main>

      {/* FOOTER */}
      <SiteFooter t={t} />
    </div>
  );
}
