// components/season70/chronique/passages-de-grades-page-client.tsx
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function PassagesDeGradesPageClient({
  dictionary,
  locale,
}: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Les passages de grades en Judo (Par Maître Jacques SEGUIN)"
      topImage={{
        src: "/images/special-70/4/1.jpg", // 👉 adapte le chemin si besoin
        alt: "Passage de grades en Judo",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            Lors d’une conversation avec les membres du Bureau et les
            enseignants de l’Association, ceux-ci m’ont suggéré de parler des
            différentes méthodes de passages de grade au niveau de la ceinture
            noire, et ce depuis les débuts du Judo en France.
          </p>
          <p>
            Quand j’ai cherché les renseignements nécessaires, j’ai été sidéré
            du travail que cela me demanderait, avec en plus des risques
            d’erreur qui auraient mis à mal l’intérêt du sujet. J’ai donc
            demandé à Maître Jacques Seguin de me faire parvenir les
            connaissances indispensables pour effectuer un travail sérieux.
          </p>
          <p>
            Dès la lecture de sa réponse, j’ai pensé qu’il était difficile, voire
            impossible de la retranscrire d’une manière aussi précise et claire
            que celle que l’on apprécie de trouver dans son texte. Donc, je me
            suis remis en relation avec Maître Seguin pour lui demander
            l’autorisation de publier, sans intervention de ma part, ses
            écrits. Avec beaucoup de générosité, il a accepté. Qu’il en soit
            grandement remercié.
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/premiers-tatamis-1950`,
      }}
      next={{
        href: `${basePath}/chronique-du-club/arrivee-aikido-mazamet`,
      }}
    >
      <p>
        Avant toute chose, il est important de rappeler certains événements dans
        l’historique du club, concernant les passages de grades.
      </p>

      <p>
        Aux alentours de 1955, M. Jean GASTON, élève d’André ADAM, passe et
        réussit son examen pour la ceinture noire 1er dan. Alors qu’il allait
        ceindre celle-ci, il se retourne vers le Maître japonais Ineo Osaki qui
        présidait la journée, et lui dit&nbsp;:
      </p>

      <p className="italic">
        « Maître, il m’est difficile de recevoir cette ceinture noire, alors que
        mon professeur, qui m’a tout appris, n’est que ceinture marron ».
      </p>

      <p>
        Ineo OSAKI réfléchit un court instant et, en pointant son doigt en
        direction d’André Adam, déclare&nbsp;:
      </p>

      <p className="italic">« Adam ! Ceinture Noire ! »</p>

      <p>
        … et c’est ainsi que, grâce à Jean GASTON, le club s’est retrouvé nanti
        de deux ceintures noires 1er dan le même jour.
      </p>

      {/* [photo 1] [photo 2] côte à côte */}
      {/* <div className="my-8 grid gap-4 md:grid-cols-2">
        <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-slate-200">
          <Image
            src="/images/special-70/4/2.jpg" // 👉 remplace par ta vraie image
            alt="Ancienne photo de passage de grade au club"
            fill
            className="object-cover"
          />
          <figcaption className="mt-2 text-center text-sm text-slate-600">
      Passage de grade – années 50
    </figcaption>
        </figure>
        <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-slate-200">
          <Image
            src="/images/special-70/4/3.jpg" // 👉 remplace par ta vraie image
            alt="Judokas du club lors d’une cérémonie"
            fill
            className="object-cover"
          />
          <figcaption className="mt-2 text-center text-sm text-slate-600">
      Cérémonie au dojo de Mazamet
    </figcaption>
        </figure>
      </div> */}

<div className="my-8 grid gap-4 md:grid-cols-2">
  <figure className="my-6">
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-slate-200">
      <Image
        src="/images/special-70/4/2.jpg"
        alt="Ancienne photo de passage de grade au club"
        fill
        className="object-cover"
      />
    </div>
    <figcaption className="mt-2 text-center text-sm text-slate-600">
      Jean GASTON
    </figcaption>
  </figure>

  <figure className="my-6">
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-slate-200">
      <Image
        src="/images/special-70/4/3.jpg"
        alt="Judokas du club lors d’une cérémonie"
        fill
        className="object-cover"
      />
    </div>
    <figcaption className="mt-2 text-center text-sm text-slate-600">
   André ADAM
    </figcaption>
  </figure>
</div>

      <p>
        L’association se distinguera plusieurs années plus tard avec Danielle
        Sanchez, première femme judoka du Tarn à atteindre ce qui était un très
        haut niveau pour l’époque, surtout pour une femme.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">
        Passages de grades – par Maître Jacques SEGUIN
      </h2>

      {/* [photo] Maître Jacques Seguin */}
      <figure className="my-6">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg bg-slate-200">
          <Image
            src="/images/special-70/4/4.jpg" // 👉 remplace par ta vraie image
            alt="Maître Jacques Seguin"
            fill
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-center text-sm text-slate-600">
          Par Maître Jacques SEGUIN
        </figcaption>
      </figure>

      <p>
        L’histoire du Judo en France est longue et chaotique. Dans les années
        50 et 60, on passait la ceinture noire 1er dan en commençant par une
        épreuve de kata qui portait sur les cinq séries, suivie d’un test
        compétition sous forme de poules de six, soit cinq combats chacun, et il
        fallait un minimum de 40 points avec un nul autorisé.
      </p>

      <p>
        Une seule défaite par ippon écartait le candidat. Il n’y avait pas de
        catégories de poids, mais les organisateurs répartissaient par
        catégories morphologiques, « au pif »…
      </p>

      <p>
        Il y avait à cette époque peu de prétendants, sur trois ou quatre
        poules au maximum. J’étais passé 1er dan à Avignon en octobre 1960 avec
        quatre ippon et un match nul, contre un « gros » marseillais de 135 kg&nbsp;!
      </p>

      <p>
        Au début des années 1960, le Directeur Technique National de l’époque,
        Monsieur Robert BOULAT, plus axé sur l’aspect sportif que technique, a
        supprimé les kata. On pouvait donc passer les dan uniquement en
        compétition, ou choisir l’option technique, qui était une deuxième voie.
      </p>

      <p>
        Les catégories de poids, prônées par Robert BOULAT, ont vu le jour au
        début des années 1960 et ont été admises au niveau de la Fédération
        internationale après bien des atermoiements et des échanges musclés
        entre « pour » et « contre ».
      </p>

      <p>
        Mais dans les passages de grades, elles n’étaient respectées que dans
        « la mesure du possible » et disparaissaient vers les 3e et 4e dan, qui
        avaient moins de candidats.
      </p>

      <p>
        En 1968-72, pour le 4e dan, il fallait marquer 50 points dans une poule
        de six, deux fois&nbsp;! Si l’on marquait 50 points, ou 44 minimum avec
        trois ippon et deux waza-ari, il fallait recommencer lors d’un autre
        test.
      </p>

      {/* [photo] illustration 4e dan / compétition */}
      <figure className="my-6">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-2xl overflow-hidden rounded-lg bg-slate-200">
          <Image
            src="/images/special-70/4/5.jpg" // 👉 remplace par ta vraie image
            alt="Compétition de Judo lors d’un passage de grade"
            fill
            className="object-cover"
          />
        </div>
      </figure>

      <p>
        Par exemple, j’avais marqué cinq ippon en poule, à Marseille, et lorsque
        je me suis présenté pour le deuxième essai en juin 1969 à Montpellier,
        nous n’étions que deux candidats : Roger CADIERE et moi.
      </p>

      <p>
        Devant l’impossibilité de former une poule de six, le règlement imposait
        de prendre une « ligne d’équivalence », soit combattre contre dix
        ceintures noires, alternées 1er, 2e et 3e dan. Tout s’arrêtait au bout
        d’une seule défaite par ippon, ou bien au bout de deux matches nuls.
      </p>

      <p>
        J’étais passé 4e dan dans ces conditions, ayant réussi à marquer dix
        ippon à la file. Il n’y avait toujours pas d’épreuve de kata.
      </p>

      <p>
        Les kata ont été remis à l’honneur au début des années 70-72 lorsque le
        président PFEIFER a organisé la réunification du Judo français, sous la
        pression des dirigeants du Collège des ceintures noires, beaucoup plus
        attachés aux traditions et à l’aspect technique du Judo.
      </p>

      <p>
        Le Judo fédéral et les « dissidents » du Collège des Ceintures Noires se
        sont regroupés avec des accords assujettis à des concessions
        mutuelles. Les kata ont donc été réintroduits dans les passages de
        grades sous forme d’épreuve probatoire pour pouvoir se présenter ensuite
        dans les poules.
      </p>

      <p>
        Les catégories de poids en passages de grades ont alors été préconisées
        dans la mesure du possible, mais sans être obligatoires. Ainsi, au fil
        du temps, l’équilibre entre technicité, tradition et performance
        sportive a peu à peu façonné les modalités actuelles de passage de
        grades en Judo.
      </p>
    </ChronicleArticleLayout>
  );
}
