// components/season70/chronique/premiers-tatamis-1950-page-client.tsx
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function PremiersTatamis1950PageClient({
  dictionary,
  locale,
}: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="La pratique des premiers temps : les tatamis en 1950…"
      topImage={{
        src: "/images/special-70/3/1.png", // 👉 adapte ce chemin si besoin
        alt: "Tatamis des premiers dojos dans les années 1950",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            Nous allons évoquer ici un élément primordial dans la culture Judo.
          </p>
          <p>
            Savez-vous comment on reconnaît un « ancien » ayant commencé son
            parcours de judoka dans la période 1950-1965, et qui continue encore
            à fréquenter les dojos ? Non ? C’est très simple&nbsp;: regardez-le
            s’échauffer. Il passe et passera toujours beaucoup de temps à
            préparer ses pieds et ses chevilles durant l’échauffement, en y
            mettant un soin tout particulier. Pourquoi ?
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/historique-du-judo`,
      }}
      next={{
        href: `${basePath}/chronique-du-club/passages-de-grades`,
      }}
    >
      <p>
        Quand les pionniers du judo français ont décidé de pratiquer cette
        discipline, ils ont d’abord franchi les portes des dojos mis à leur
        disposition. Après avoir revêtu leur judogi, ils sont montés sur le
        tapis.
      </p>

      <p>
        Leurs pieds leur ont envoyé un premier avertissement en faisant
        connaissance avec le tatami, élément incontournable pour la réception
        des chutes (premier pilier de la pratique), qu’elles soient volontaires
        ou subies lors des randori.
      </p>

      <p>
        Pour appréhender au mieux la situation, voici l’état des lieux&nbsp;:
        le tapis qui occupait la majorité de l’espace était formé par une
        surface de plusieurs tatamis de deux mètres sur un mètre, constitués
        d’un amalgame de paille de riz très grossièrement tressée, à plat, et
        particulièrement compacte.
      </p>

      {/* [photo] 1 – tatamis 2m x 1m en paille de riz */}
      <figure className="my-6">
        <div className="relative w-full max-w-2xl mx-auto aspect-[4/5] overflow-hidden bg-slate-200 rounded-lg">
          <Image
            src="/images/special-70/3/2.jpg" // 👉 remplace par ta vraie image
            alt="Ancien tatami en paille de riz"
            fill
            className="object-cover"
          />
        </div>
      </figure>

      <p>
        L’ensemble était très souvent relié par une fine couche de particules de
        liège entre les tatamis, qu’il fallait remettre souvent à leur place
        initiale pour éviter les bosses accidentellement créées. L’installation
        finale était « assurée » par une bâche qui couvrait le tout (ou qui, en
        tout cas, tentait de le faire…).
      </p>

      <p>
        Les premiers contacts étaient suffisamment ressentis pour démontrer
        rapidement la nécessité d’acquérir et de parfaire le contrôle de la
        chute, avec toute l’attention et le sérieux possibles. Sinon, on payait
        cash au prix d’un orteil plus ou moins tordu, d’une cheville
        passablement douloureuse, ou d’une rencontre particulièrement sévère
        avec le tapis, pourtant censé « adoucir » le résultat d’une projection
        contrôlée ou non.
      </p>

      {/* [photo] 2 – tatami + bâche / bosses */}
      <figure className="my-6">
        <div className="relative w-full max-w-2xl mx-auto aspect-[4/5] overflow-hidden bg-slate-200 rounded-lg">
          <Image
            src="/images/special-70/3/3.png" // 👉 remplace par ta vraie image
            alt="Tatami ancien recouvert d’une bâche"
            fill
            className="object-cover"
          />
        </div>
      </figure>

      <p>
        Ce passage obligé était très souvent un élément primordial de sélection
        des nouveaux arrivés. On supportait ou pas, et un nombre certain de
        débutants décidait finalement de rejoindre un terrain de rugby où les
        plaquages se vivaient sur une douce pelouse, laissant là leurs ambitions
        de pratiquer un art martial.
      </p>

      <p>
        Un président départemental racontait avoir débuté le judo chez les
        scouts sur des planches recouvertes d’une bâche. Un « maître » donnait
        des leçons à ses copains, alors qu’il était ceinture blanche, sur une
        fine étendue de liège pilé recouverte d’une bâche. Preuve que la passion
        pour le judo ne faisait pas reculer les plus motivés !
      </p>

      <p>
        Ceci peut paraître très exagéré, mais il suffit de regarder les photos
        prises à l’intérieur des dojos de l’époque, et vous en serez convaincus.
        Équipement spartiate, chauffage très discret (quand il y en avait un et
        s’il voulait bien fonctionner&nbsp;!) ; mais nous, les anciens, avons
        gardé, malgré tout cela, un souvenir très ému de ce temps, et il fait
        partie de nos très grands et meilleurs moments de judo.
      </p>

      {/* [photo] 3 – intérieur de dojo spartiate */}
      <figure className="my-6">
        <div className="relative w-full max-w-2xl mx-auto aspect-[4/5] overflow-hidden bg-slate-200 rounded-lg">
          <Image
            src="/images/special-70/3/4.png" // 👉 remplace par ta vraie image
            alt="Intérieur d’un dojo ancien avec tatamis"
            fill
            className="object-cover"
          />
        </div>
      </figure>

      <p>
        De nos jours, ces tatamis ont rejoint l’armoire des souvenirs. Leurs
        équivalents actuels sont faits de matière plus souple et sont donc plus
        agréables à l’usage, même s’ils restent fermes.
      </p>

      <p>
        Pourtant, la pratique dans ces conditions avait un gros avantage&nbsp;:
        l’entraînement commençait vraiment et plus longuement par la maîtrise de
        la chute. Une fois celle-ci obtenue et confortée régulièrement et
        systématiquement, la réussite n’était pas pour autant plus évidente, mais
        la progression en était facilitée et vécue l’esprit plus tranquille.
      </p>
    </ChronicleArticleLayout>
  );
}
