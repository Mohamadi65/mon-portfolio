// components/season70/chronique/historique-du-judo-page-client.tsx
"use client";

import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function HistoriqueDuJudoPageClient({
  dictionary,
  locale,
}: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Historique du Judo"
      topImage={{
        src: "/images/special-70/2/1.png", // adapte le chemin si besoin
        alt: "Jigoro Kano, fondateur du judo",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            Le Judo est un sport de combat créé en 1882 par{" "}
            <strong>Jigoro Kano</strong> (10/12/1868 – 04/05/1938).
          </p>
          <p>
            Après une étude approfondie des techniques ancestrales du{" "}
            <em>Ju Ji Tsu</em>, le plus ancien des Arts Martiaux pratiqué par
            les Samouraïs, Jigoro Kano dégage un ensemble de techniques plus
            adaptées à une pratique sportive et destinées à tous.
          </p>
          <p>
            La traduction de <strong>Judo</strong> donne « Voie de la
            Souplesse », sa meilleure définition.
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/une-breve-histoire-du-temps`,
      }}
      next={{
        href: `${basePath}/chronique-du-club/premiers-tatamis-1950`,
      }}
    >
   
      <p>
        Le but est d’utiliser la force de l’adversaire contre lui-même, sans
        être nanti d’une force équivalente et avec une constitution physique
        plus modeste.
      </p>

      <p>
        Notre fabuliste Jean de La Fontaine aurait sans doute pu devenir un
        excellent judoka, s’il avait imaginé et créé plusieurs siècles
        auparavant une discipline de combat issue de sa fable{" "}
        <em>Le Chêne et le Roseau</em>, qui est la retranscription parfaite du
        principe fondamental du Judo.
      </p>

      <p>
        Jigoro Kano codifie donc cinq manières de projeter l’adversaire à partir
        de techniques de jambe, hanche, bras, épaule ou par{" "}
        <em>sutemi</em> (sacrifice). Une mauvaise projection ne pouvant arrêter
        le combat, apparaît alors le combat au sol, avec immobilisations, clés
        de bras (articulaires) ou étranglements.
      </p>

      <p>
        Assez rapidement, cette discipline conquiert la population japonaise.
        Son arrivée en Europe se fait à la fin des années 1920, avec un
        développement relativement lent dans les années 30.
      </p>

      <p>
        La véritable découverte et les premiers engouements, notamment en
        France, ont lieu après la Seconde Guerre mondiale, grâce à l’arrivée des
        Maîtres Mikinosuke Kawaishi, Shozo Awazu, Abe Ichiro et Ineo Osaki, et à
        la création de la fédération française avec son premier président,
        Monsieur Bonet-Maury.
      </p>

      <p>
        Le développement reste modeste dans les années 50, jusqu’à la percée
        des premiers Européens dans les compétitions internationales, au
        détriment des Japonais, avec en 1963 le judoka néerlandais{" "}
        <strong>Anton Geesink</strong>, Champion du Monde et Champion Olympique
        en 1964.
      </p>

      <p>
        À partir de cette date, la pratique du judo progresse de façon
        fulgurante, en particulier en France. La{" "}
        <strong>
          Fédération Française de Judo et Disciplines Assimilées (F.F.J.D.A.)
        </strong>{" "}
        fait désormais partie des plus importantes fédérations sportives dans
        l’Hexagone, avec des résultats et des champions comme{" "}
        <strong>Jean-Luc Rougé</strong> (premier champion du Monde français),
        puis les champions du Monde et Olympiques{" "}
        <strong>
          Angelo Parisi, David Douillet, Teddy Riner, Lucie Décosse, Clarisse
          Agbégnénou
        </strong>
        , … (pour ne citer que les plus connus).
      </p>

      <p>
        Bien sûr, l’histoire continue avec son cortège de déceptions et de
        réussites, preuve d’un enthousiasme qui n’est pas près de
        s’éteindre&nbsp;!
      </p>
    </ChronicleArticleLayout>
  );
}
