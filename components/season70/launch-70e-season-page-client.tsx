// components/season70/launch-70e-season-page-client.tsx
"use client";

import Image from "next/image";

import type { Locale } from "@/lib/i18n-config";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function Launch70eSeasonPageClient({
  dictionary,
  locale,
}: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;

  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <div className="min-h-screen bg-[#faf7f2] dark:bg-slate-950 flex flex-col">
      {/* NAVBAR */}
      <Navbar t={t} />

      {/* CONTENU */}
      <main
        id="main-content"
        className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 md:px-6"
      >
        {/* PHOTO D’INTRO */}
        <figure className="mx-auto mb-10 max-w-md">
          <div className="relative w-full aspect-[2/4] overflow-hidden bg-slate-200 dark:bg-slate-800">
            <Image
              src="/images/special-70/Roger_Medaille.png"
              alt="Roger Olazabal médaillé"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        {/* TITRE + INTRO */}
        <header className="mb-10">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {t("season70.breadcrumb") || "Spécial 70e saison 1952-2021"}
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50">
            Lancement de la 70e saison&nbsp;! Roger Olazabal Médaillé&nbsp;!
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-800 dark:text-slate-200">
            L’année 2021 marque une étape importante dans la vie de notre club,
            puisqu’elle correspond à la <strong>70e saison</strong>&nbsp;!
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-800 dark:text-slate-200">
            C’est ce que nous a rappelé notre Président, M. Christophe Batut, et
            nous la souhaitons riche et émaillée d’évènements et de
            surprises&nbsp;!
          </p>
        </header>

        {/* PHOTO DE LA CÉRÉMONIE */}
        <figure className="mx-auto mb-10 max-w-2xl">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200 dark:bg-slate-800">
            <Image
              src="/images/special-70/roger-olazabal-ceremonie-dojo.jpg"
              alt="Cérémonie de remise des Palmes d’Or à Roger Olazabal"
              fill
              className="object-cover"
            />
          </div>
        </figure>

        {/* TEXTE PRINCIPAL */}
        <section className="space-y-4 text-base leading-relaxed text-slate-800 dark:text-slate-200">
          <p>
            Une des premières surprises de cette année nous a permis de
            récompenser l’engagement de notre Président d’Honneur, Monsieur
            Roger Olazabal, qui a reçu des mains de Bernard Alibert (Vice
            Président en charge de la Culture du Tarn, et membre du Comité
            d’Administration de la Ligue Occitanie) les{" "}
            <strong>Palmes d’Or</strong> de la Fédération française de judo,
            jujitsu, kendo et disciplines associées.
          </p>

          <p>
            S’étaient joints à cette remise, M. Olivier Fabre, Maire de Mazamet,
            Mme Agnès Maurel, adjointe à la Jeunesse et aux sports, M. Bertrand
            Escande, Président du Comité Tarn de la FFDJA, et bien entendu, les
            enseignants actuels du club, M. Régis Pistre, ancien Président, mais
            aussi d’anciens membres du club qui avaient voulu par leur présence
            témoigner de leur amitié et de leur reconnaissance, sans oublier
            bien sûr les nombreux adhérents actuels&nbsp;!
          </p>

          <p className="mt-6">
            Les photos sont visibles{" "}
            <a
              href="https://photos.google.com/share/AF1QipPai384sLtXRZiO0erstbZVR8vAqLd1AHMKUN6Mbxop8gyuSCD-wZDts3yaOh_69g?pli=1&key=R2Q4dGZjY25aQWNSc0tIbHg3TUE4LVRWcXRaLWdB"
              className="underline underline-offset-2 text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            >
              ici
            </a>
            .
          </p>

          <p className="mt-4">
            À très bientôt donc, pour d’autres évènements&nbsp;!
          </p>
        </section>

        {/* Lien vers la chronique */}
        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6">
          <a
            href={`${basePath}/chronique-du-club`}
            className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {t("season70.chronicle.link") || "Voir la chronique du club"}
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <SiteFooter t={t} />
    </div>
  );
}
