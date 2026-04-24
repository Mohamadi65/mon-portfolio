"use client"

import Image from "next/image"
import Link from "next/link"

import type { Locale } from "@/lib/i18n-config"
import { Navbar } from "@/components/layout/navbar"
import { SiteFooter } from "@/components/layout/site-footer"

type Props = {
  dictionary: Record<string, string>
  locale: Locale
}

export default function ChronicleIndexPageClient({ dictionary, locale }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key

  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`

  const links = [
    {
      slug: "chronique-du-club/une-breve-histoire-du-temps",
      label: t("season70.chronicle.link1") || "Une Brève Histoire du Temps…",
    },
    {
      slug: "chronique-du-club/historique-du-judo",
      label: t("season70.chronicle.link2") || "Historique du Judo",
    },
    {
      slug: "chronique-du-club/premiers-tatamis-1950",
      label:
        t("season70.chronicle.link3") ||
        "La pratique des premiers temps : les tatamis en 1950",
    },
    {
      slug: "chronique-du-club/passages-de-grades",
      label:
        t("season70.chronicle.link4") ||
        "Les passages de grades en Judo (par Maître Jacques SEGUIN)",
    },
    {
      slug: "chronique-du-club/arrivee-aikido-mazamet",
      label: t("season70.chronicle.link5") || "Arrivée de l’Aïkido à Mazamet",
    },
    {
      slug: "chronique-du-club/distinctions-dans-le-judo",
      label: t("season70.chronicle.link6") || "Les distinctions dans le Judo",
    },
    {
      slug: "chronique-du-club/disparition-ichiro-abe",
      label: t("season70.chronicle.link7") || "Disparition de Ichiro Abe",
    },
    {
      slug: "chronique-du-club/personnalites-marquantes",
      label:
        t("season70.chronicle.link8") ||
        "PERSONNALITÉS marquantes du Judo Aïkido Mazamet, 1952-2022",
    },
    {
      slug: "chronique-du-club/le-code-moral",
      label: t("season70.chronicle.link9") || "Le Code MORAL",
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col">
      <Navbar t={t} />

      <main
        id="main-content"
        className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 md:px-6"
      >
        {/* Titre + logo 70 ans */}
        <header className="mb-12 text-center">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {t("season70.breadcrumb") || "Spécial 70e saison 1952-2021"}
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-slate-900">
            {t("season70.chronicle.title") ||
              "Spécial 70 ans : la chronique du club"}
          </h1>

          <div className="mt-10 flex justify-center">
            <div className="relative h-48 w-48">
              <Image
                src="/images/special-70/0/0.png"
                alt="70 ans de judo à Mazamet"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="mt-8 text-sm md:text-base leading-relaxed text-slate-700 text-left md:text-center">
            {t("season70.chronicle.intro") ||
              "Une série d’articles pour revenir sur 70 ans d’histoire du club, des débuts d’André Adam jusqu’à la saison 2021-2022."}
          </p>
        </header>

        {/* Liste des liens (1 à 9) */}
        <ol className="space-y-2 text-sm md:text-base text-blue-800">
          {links.map((item, index) => (
            <li key={item.slug} className="flex gap-2">
              <span className="w-6 text-right text-slate-700">
                {index + 1}.
              </span>
              <Link
                href={`${basePath}/${item.slug}`}
                className="underline underline-offset-2 hover:text-blue-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </main>

      <SiteFooter t={t} />
    </div>
  )
}
