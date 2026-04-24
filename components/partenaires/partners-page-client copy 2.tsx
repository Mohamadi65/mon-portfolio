// components/partenaires/partners-page-client.tsx
"use client"

import Image from "next/image"
import { Phone, Globe, MapPin } from "lucide-react"

import type { Locale } from "@/lib/i18n-config"
import type { Partenaire } from "@/lib/api.partenaires"

import { Navbar } from "@/components/layout/navbar"
import { SiteFooter } from "@/components/layout/site-footer"

type Props = {
  dictionary: Record<string, string>
  locale: Locale
  partners: Partenaire[]
}

export default function PartnersPageClient({
  dictionary,
  locale,
  partners,
}: Props) {
  const t = (key: string) => dictionary?.[key] ?? key

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      {/* NAVBAR */}
      <Navbar t={t} />

      {/* CONTENU PRINCIPAL */}
      <main
        id="main-content"
        className="mx-auto flex-1 w-full max-w-6xl px-4 py-10 md:px-6 lg:px-8"
      >
        {/* HEADER */}
        <header className="mb-8 text-center md:text-left">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {t("partners.breadcrumb") || "Partenaires"}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-50">
            {t("partners.title") || "Nos partenaires"}
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-200 max-w-2xl mx-auto md:mx-0">
            {t("partners.description") ||
              "Ils nous soutiennent au quotidien dans le développement du club."}
          </p>
        </header>

        {/* LISTE DES PARTENAIRES */}
        {partners.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-300">
            {t("partners.empty") ||
              "Aucun partenaire n’a encore été enregistré."}
          </p>
        ) : (
          <section className="grid gap-6 md:grid-cols-2 items-stretch">
            {partners.map((p) => {
              const phone = p.telephone?.trim() || ""
              const site = p.lienWeb?.trim() || ""

              return (
                <article
                  key={p.id}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900 h-full"
                >
                  {/* Logo partenaire (2x plus grand) */}
                  <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    {p.logo_url ? (
                      <Image
                        src={p.logo_url}
                        alt={p.nom}
                        fill
                        className="object-contain p-2"
                        sizes="160px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-500">
                        {p.nom?.slice(0, 3) ?? "??? "}
                      </div>
                    )}
                  </div>

                  {/* Infos texte */}
                  <div className="flex min-w-0 flex-1 flex-col h-full">
                    {/* Haut de la card : nom + description */}
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                        {p.nom}
                      </h2>

                      {p.description && (
                        <p className="mt-1 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                          {p.description}
                        </p>
                      )}
                    </div>

                    {/* Bas de la card : adresse + téléphone + site, collés en bas */}
                    <div className="mt-auto pt-4 flex flex-col gap-2 text-xs">
                      {/* Adresse (optionnelle) juste au-dessus des boutons */}
                      {p.adresse && (
                        <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400">
                          <MapPin className="mt-[1px] h-4 w-4 flex-shrink-0" />
                          <span className="break-words">{p.adresse}</span>
                        </div>
                      )}

                      {/* Téléphone + site */}
                      <div className="flex flex-wrap gap-3">
                        {phone && (
                          <a
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-3 py-1 font-medium text-pink-700 hover:bg-pink-100 dark:bg-pink-900/30 dark:text-pink-300 dark:hover:bg-pink-900/50"
                          >
                            <Phone className="h-3 w-3" />
                            <span>{phone}</span>
                          </a>
                        )}

                        {site && (
                          <a
                            href={site}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                          >
                            <Globe className="h-3 w-3" />
                            <span className="truncate max-w-[180px]">
                              {site.replace(/^https?:\/\//, "")}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </section>
        )}
      </main>

      {/* FOOTER */}
      <SiteFooter t={t} />
    </div>
  )
}
