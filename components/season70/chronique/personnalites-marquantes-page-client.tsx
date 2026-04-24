// components/season70/chronique/personnalites-marquantes-page-client.tsx
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function PersonnalitesMarquantesPageClient({
  dictionary,
  locale,
}: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Personnalités marquantes du Judo Aïkido Mazamet (1952–2022)"
      topImage={{
        src: "/images/special-70/8/1.png", // 👉 logo / montage 70 ans si tu en as un
        alt: "Judokas et dirigeants marquants du club de Mazamet",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            Il y a quelque temps, une démarche avait été lancée avec l’aide des
            médias locaux pour retrouver d’anciens licenciés ayant eu un
            parcours sportif ou administratif marquant au sein du Judo Aïkido
            Mazamet. L’objectif était de remettre à l’honneur celles et ceux qui
            ont contribué à écrire l’histoire du club.
          </p>
          <p>
            Les réponses n’ont pas été aussi nombreuses qu’espéré, mais cette
            recherche a ravivé les souvenirs de nombreuses figures importantes.
            Cette page ne prétend pas être exhaustive, mais elle souhaite rendre
            hommage à quelques-unes des personnalités qui ont marqué le club
            entre 1952 et 2022.
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/disparition-ichiro-abe`,
      }}
      next={{
        href: `${basePath}/chronique-du-club/le-code-moral`,
      }}
    >
      {/* André Adam */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/8/3.png" // 👉 André Adam
            alt="André ADAM, fondateur du club"
            fill
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          André ADAM – fondateur du Judo Club de Mazamet
        </figcaption>
      </figure>

      <p>
        La toute première personnalité marquante est bien entendu{" "}
        <strong>André ADAM</strong>. Amoureux de cette discipline, il fonde le
        Judo Club de Mazamet en 1951, pratiquement à ses frais, et le fait vivre
        jusqu’en 1963. Durant cette période, des personnalités diverses mais
        importantes vont l’accompagner pour assurer la bonne marche des débuts
        du club.
      </p>

      {/* Jean Gaston / Roger Olazabal */}
      <div className="my-8 grid gap-4 md:grid-cols-2">
        <figure className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
            <Image
              src="/images/special-70/8/4.jpg" // 👉 Jean Gaston
              alt="Jean GASTON, premier ceinture noire mazamétain"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-600 text-center">
            Jean GASTON – premier judoka ceinture noire du club
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
            <Image
              src="/images/special-70/8/5.jpg" // 👉 Roger Olazabal
              alt="Roger OLAZABAL, figure majeure du club"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-600 text-center">
            Roger OLAZABAL – dirigeant et pilier historique du club
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Jean GASTON</strong> deviendra le premier judoka ceinture noire
        mazamétain. Le même jour, il signalera à Maître Ineo Osaki que son
        professeur, André Adam, n’est que ceinture marron et mérite au moins
        autant que lui le 1<sup>er</sup> dan. Maître Osaki acceptera
        immédiatement, et le club se retrouvera ainsi nanti de deux ceintures
        noires le même jour.
      </p>

      <p>
        <strong>Roger OLAZABAL</strong>, quant à lui, verra son importance aller
        en grandissant. Après le départ d’André Adam, il deviendra le véritable
        leader du club, très impliqué à la fois localement, au sein du Comité du
        Tarn, puis de la Ligue. Son rôle est central dans la construction de
        l’identité du Judo Mazamétain.
      </p>

      <p>
        D’autres personnages marquants apparaissent également, comme{" "}
        <strong>Monsieur Beaufils</strong>, déjà 1<sup>er</sup> dan, excellent
        judoka et pédagogue, qui quittera Mazamet pour s’établir en Australie,
        ou encore <strong>Monsieur Bataillou</strong>, président durant un an
        après le départ d’André Adam, puis <strong>Monsieur Farenc</strong> qui
        lui succédera jusqu’en 1970.
      </p>

      <p>
        Parmi les licenciés très impliqués,{" "}
        <strong>Michel Gau</strong> deviendra trésorier et vice-président
        jusqu’en 1995, laissant le souvenir d’un travail très sérieux et d’une
        grande amitié partagée.
      </p>

      {/* Judokates et compétiteurs */}
      <p>
        Les années 1970–1980 ont malheureusement laissé peu de témoignages
        écrits, alors même que la pratique y était importante en effectifs. On
        y trouve cependant des parcours remarquables, notamment chez les
        judokates.
      </p>

      <p>
        La première femme tarnaise à ceindre la ceinture noire est{" "}
        <strong>Danièle SANCHEZ</strong>, mazamétaine. D’autres suivront : Cathy
        Pradel, Sophie Bousquet, Aurélie Lemouzy, Martine Déjean, Mallorie
        Redon, <strong>Anaïs LEPETIT</strong> – qui entame une carrière
        prometteuse dans les équipes de France – et bien d’autres encore.
      </p>

      <div className="my-8 grid gap-4 md:grid-cols-3">
        {[
          { src: "Anais.jpg", name: "Anaïs LEPETIT" },
          { src: "Malorie.jpg", name: "Mallorie REDON" },
          { src: "Vincent.jpg", name: "Vincent CHALINE" },
        ].map((p) => (
          <figure key={p.name} className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
              <Image
                src={`/images/special-70/8/${p.src}`} // 👉 adapte les fichiers si besoin
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-slate-600 text-center">
              {p.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <p>
        Côté masculin, citons les parcours remarqués de{" "}
        <strong>Melle Meaucourt</strong> et <strong>Virginie Py</strong> (toutes
        deux parvenues aux championnats de France à Paris au début des années
        2000), mais aussi celui d’<strong>Alain VIDAL</strong>, 2<sup>e</sup>{" "}
        dan, qui atteindra le plus haut niveau national.
      </p>

      <p>
        Parmi les 2<sup>e</sup> dan du club, on retrouve Roger Olazabal, Robert
        Alcaraz, Jean Noël Lapeyre, Jean-Luc Llobregat, Gaëtan Llobregat,
        Nicolas Vidal et Gauthier Barthès, certains étant également enseignants.
      </p>

      {/* Jean-Luc / Gauthier / Gaëtan */}
      <div className="my-8 grid gap-4 md:grid-cols-3">
        {[
          { src: "Jean-Luc.jpg", name: "Jean-Luc LLOBREGAT" },
          { src: "Gauthier.jpg", name: "Gauthier BARTHES" },
          { src: "Gaëtan.jpg", name: "Gaëtan LLOBREGAT" },
        ].map((p) => (
          <figure key={p.name} className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
              <Image
                src={`/images/special-70/8/${p.src}`} // 👉 adapte les fichiers
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-slate-600 text-center">
              {p.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <p>
        Plus tôt dans le temps, obtiendront le 1<sup>er</sup> dan :{" "}
        <strong>Michel Lanet</strong>, <strong>Jean-François Lujan</strong>{" "}
        (1<sup>er</sup> dan en 1987), le docteur <strong>Chambat</strong>,{" "}
        <strong>Selami</strong>, <strong>Djillali Bouhamama</strong>.{" "}
        <strong>Vincent CHALINE</strong>, quant à lui, obtient le 2<sup>e</sup>{" "}
        dan licencié chez nous après un premier dan obtenu dans un autre club.
      </p>

      {/* Grégory Staffoni */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/8/Grégory.jpg" // 👉 Grégory Staffoni
            alt="Grégory STAFFONI, enseignant principal"
            fill
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Grégory STAFFONI – enseignant principal, 3ᵉ dan
        </figcaption>
      </figure>

      <p>
        L’enseignant principal du club, <strong>Grégory STAFFONI</strong>, est
        parvenu au <strong>3ᵉ dan</strong> et incarne la continuité de
        l’enseignement, dans l’esprit des générations précédentes.
      </p>

      <p>
        À partir de 2014, l’arrivée de l’Aïkido au sein du club avec{" "}
        <strong>Maxime Ridel</strong> (4<sup>e</sup> dan) et{" "}
        <strong>Yohan Gomez</strong> (2<sup>e</sup> dan) ajoutera de nouvelles
        figures marquantes. Deux Aïkidokas, <strong>Stéphane David</strong> et{" "}
        <strong>Antoine Zacharias</strong>, obtiendront leur 1<sup>er</sup> dan
        en 2016 puis leur 2<sup>e</sup> dan en 2018.
      </p>

      <p>
        Parmi les licenciés qui ont beaucoup compté dans la vie du club, il faut
        aussi citer <strong>Dominique Breuer</strong> et{" "}
        <strong>Pierrot Démoulin</strong>, qui ont énormément donné de leur
        temps et de leur énergie.
      </p>

      {/* Régis / Christophe */}
      <div className="my-8 grid gap-4 md:grid-cols-2">
        <figure className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
            <Image
              src="/images/special-70/8/Régis.jpg" // 👉 Régis Pistre
              alt="Régis PISTRE, ancien président du club"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-600 text-center">
            Régis PISTRE – président de 1993 à 2020
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
            <Image
              src="/images/special-70/8/Christophe.png" // 👉 Christophe Batut
              alt="Christophe BATUT, président actuel"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-600 text-center">
            Christophe BATUT – président actuel, 1ᵉʳ dan
          </figcaption>
        </figure>
      </div>

      <p>
        À partir de 1993, la présidence est assurée par{" "}
        <strong>Régis PISTRE</strong> jusqu’en octobre 2020. Depuis, la gestion
        du club est dirigée par le président <strong>Christophe BATUT</strong>,
        1<sup>er</sup> dan.
      </p>

      {/* Jérôme / Bruno Zannier */}
      <div className="my-8 grid gap-4 md:grid-cols-2">
        <figure className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
            <Image
              src="/images/special-70/8/Jérôme.jpg" // 👉 Jérôme Redon
              alt="Jérôme REDON, secrétaire du club"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-600 text-center">
            Jérôme REDON – secrétaire
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
            <Image
              src="/images/special-70/8/BrunoZ.png" // 👉 Bruno Zannier
              alt="Bruno ZANNIER, intendant du club"
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-600 text-center">
            Bruno ZANNIER – intendant, en charge du matériel
          </figcaption>
        </figure>
      </div>

      <p>
        Dans le bureau actuel, on trouve{" "}
        <strong>Jérôme REDON</strong>, secrétaire, et depuis près de trente ans{" "}
        <strong>Jean-Luc LLOBREGAT</strong>, trésorier.{" "}
        <strong>Delphine Martin-David</strong>, Aïkidoka, assure le rôle de
        secrétaire adjointe pour la partie judo et aïkido.{" "}
        <strong>Bruno ZANNIER</strong> remplit la fonction d’intendant, chargé
        de toute la partie matérielle.
      </p>

      {/* Christel / Karine / Bruno Gomez */}
      <div className="my-8 grid gap-4 md:grid-cols-3">
        {[
          { src: "Christel.png", name: "Christel ONRAZAC" },
          { src: "Karine.png", name: "Karine ZANNIER" },
          { src: "Bruno-gomez.jpg", name: "Bruno GOMEZ" },
        ].map((p) => (
          <figure key={p.name} className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
              <Image
                src={`/images/special-70/8/${p.src}`}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-slate-600 text-center">
              {p.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <p>
        Il serait injuste de ne pas citer{" "}
        <strong>Christel ONRAZAC</strong> et{" "}
        <strong>Karine ZANNIER</strong>, qui ont souvent apporté une aide
        précieuse lors des événements du club et continuent de le faire de
        manière ponctuelle mais toujours efficace.
      </p>

      <p>
        <strong>Bruno GOMEZ</strong>, 2<sup>e</sup> dan, rejoint le club et
        prendra en charge les jeunes intéressés par l’arbitrage. Lui-même
        arbitre régional, très apprécié dans la Ligue, il contribue à développer
        cette dimension essentielle du judo.
      </p>

      <p>
        Il ne faut pas non plus oublier les partenaires institutionnels : la
        municipalité et le personnel communal, dont le soutien matériel et
        logistique a été déterminant (dojo, vestiaires, surface de tatami,
        douches, travaux, etc.), ainsi que les élus qui se sont succédé en
        conservant un lien fort avec le club.
      </p>

      <p>
        Enfin, il y a les anonymes : parents, amis de l’association, bénévoles
        de l’ombre qui, avec leurs moyens de transport, leurs mains et leur
        bonne volonté, ont rendu possibles fêtes du club, tournois,
        commémorations et anniversaires. Ceux qui ne disent pas « Si vous avez
        besoin… », mais plutôt « Que faut-il faire ? ».
      </p>

      <p>
        Cette liste est loin d’être complète. Beaucoup de noms nous échappent,
        et c’est parfois une douleur de constater que le temps a pu éloigner
        certains visages de nos mémoires. Mais les quelques personnes citées,
        présentes ou disparues, suffisent à montrer l’image d’une association
        portée par l’énergie et l’enthousiasme de toutes les générations
        confondues.
      </p>

      <p className="mt-6">
        Alors, fêtons ces 70 ans, et en étant raisonnablement optimistes,
        disons-le : <strong>le meilleur est à venir</strong>. En tout cas, nous
        ferons tout pour cela.
      </p>
    </ChronicleArticleLayout>
  );
}
