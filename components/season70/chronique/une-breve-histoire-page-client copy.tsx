// components/season70/chronique/une-breve-histoire-page-client.tsx
"use client";

import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";


type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function UneBreveHistoirePageClient({ dictionary, locale }: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Une Brève Histoire du Temps…"
      topImage={{
        src: "/images/special-70/1/1.jpg",
        alt: "Judokas et aïkidokas sur le tatami à Mazamet",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            Après une saison 2019-2020 terminée par obligation au mois de mars
            pour cause de pandémie, la suivante 2020-2021, sans aucune activité
            possible pour la même raison, le Judo Aïkido Club de Mazamet entame
            2021-2022 avec beaucoup de ferveur.
          </p>
          <p>
            Judokas et Aïkidokas ont à cœur de donner le meilleur, pour le
            plaisir d’abord de pratiquer à nouveau leurs disciplines, mais aussi
            réussir pleinement leur parcours afin de célébrer comme il se doit
            le soixante-dixième anniversaire de leur association, créée par
            Monsieur André Adam en juillet 1952.
          </p>
        </>
      }
      next={{
        href: `${basePath}/chronique-du-club/historique-du-judo`,
      }}
    >
      <p>
        Soixante-dix ans durant lesquels nombre de Mazamétains ont occupé les
        tatamis, d’abord rue Galibert Ferret jusqu’en 1977, puis dans l’immeuble
        municipal, rue des Cordes, où il se trouve toujours aujourd’hui.
      </p>

      <p>
        Un tel évènement a suscité chez les dirigeants actuels le désir
        d’évoquer tous les moments vécus depuis les débuts du club jusqu’à
        maintenant, et rappeler ainsi une histoire dans laquelle beaucoup se
        reconnaîtront.
      </p>

      <p>
        Un grand nombre d’anciens licenciés, rencontrés de façon impromptue ou
        lors de réunions de toutes sortes, ont raconté leur passé au sein du
        club, et le ton employé laissait apparaître un regret&nbsp;:
      </p>

      <p className="italic">
        celui de ne pas avoir conservé de contact régulier avec l’association,
        auquel s’ajoute peut-être le fait de passer pour un vieux truc sans
        intérêt…
      </p>

      <p>
        Pourtant, il faut qu’ils retiennent un élément important&nbsp;: le Judo
        est une discipline qui concilie la coutume et le désir de conserver et
        renforcer les liens avec ceux qui en ont fait ce qu’il est devenu, et
        bien sûr, retenir leur souvenir puisqu’ils ont participé activement à
        son évolution extraordinaire dans le temps.
      </p>

      <p>
        Qu’ils sachent qu’en poussant la porte du dojo, ils n’y trouveront que
        des amis prêts à les recevoir comme ils le méritent.
      </p>

      <p>
        Au fur et à mesure, les récits qui vont se succéder rafraîchiront
        l’histoire du club dans les mémoires et seront, nous l’espérons, un
        excellent moment pour tous.
      </p>
    </ChronicleArticleLayout>
  );
}
