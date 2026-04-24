// components/season70/chronique/arrivee-aikido-mazamet-page-client.tsx
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function ArriveeAikidoMazametPageClient({
  dictionary,
  locale,
}: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Arrivée de l’Aïkido à Mazamet"
      topImage={{
        src: "/images/special-70/5/1.jpg", // 👉 adapte le chemin si besoin
        alt: "Pratique de l’Aïkido sur le tatami à Mazamet",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            L’arrivée des arts martiaux venus du Japon à Mazamet commence avec
            le judo, enseigné par Monsieur André Adam dès 1951. Il faudra
            ensuite attendre les années 1980-1990 pour voir apparaître des clubs
            de karaté, puis d’autres disciplines, et enfin l’Aïkido.
          </p>
          <p>
            Cet art martial, créé au XXᵉ siècle par{" "}
            <strong>Morihei Ueshiba</strong>, allie une grande exigence
            technique à une profonde recherche d’harmonie. Avec le judo, le
            karaté et le kendo, il fait partie du <em>Budo</em> (Bu : combat,
            Dô : voie).
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/passages-de-grades`,
      }}
      next={{
        href: `${basePath}/chronique-du-club/distinctions-dans-le-judo`,
      }}
    >
      {/* Morihei Ueshiba */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/5/2.png" // 👉 photo de Morihei Ueshiba
            alt="Morihei Ueshiba"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Morihei UESHIBA – fondateur de l’Aïkido
        </figcaption>
      </figure>

      <p>
        L’Aïkido naît au XXᵉ siècle, élaboré par{" "}
        <strong>Morihei Ueshiba</strong> entre 1925 et 1969, date de son décès.
        Il allie une rigoureuse canalisation de l’énergie physique à une grande
        maîtrise mentale. Avec le Judo, le Karaté et le Kendo, il fait partie du
        Budo : <em>Bu</em>, le combat, et <em>Dô</em>, la voie.
      </p>

      <p>
        Dans notre agglomération, l’Aïkido apparaît sur les tatamis vers 1995.
        Son initiateur local est un judoka du club de Mazamet,{" "}
        <strong>André Chambat</strong>, médecin rhumatologue mazamétain, qui
        découvre cette discipline à Castres. Vers 1990, il obtient le 1er dan de
        ceinture noire en Aïkido.
      </p>

      <p>
        Son parcours, jalonné de nombreux stages auprès de Maîtres reconnus
        comme <strong>Maître TAMURA</strong> (6ᵉ dan à l’époque) et{" "}
        <strong>Malcom Tiki SHEWAN</strong> (6ᵉ dan), se déroule à Castres, au
        sein de l’Aïkido Club de Castres-Mazamet, membre de la FFAB (Fédération
        Française d’Aïkido et de Budo). Il en sera le président pendant quinze
        ans.
      </p>

      <p>
        À partir de 1995, André Chambat permet à des licenciés locaux de suivre
        des cours d’Aïkido, d’abord en partie au 63 rue des Cordes, les autres
        séances ayant lieu à Castres. Ensuite, les cours se dérouleront
        uniquement dans la sous-préfecture.
      </p>

      <p>
        L’Aïkido devra attendre 2012 pour être à nouveau pratiqué à Mazamet,
        toujours sous l’égide du club castrais, avec comme enseignant{" "}
        <strong>Yohan Gomez</strong>, 2ᵉ dan, mazamétain. En 2014,{" "}
        <strong>Maxime Ridel</strong>, 4ᵉ dan, originaire de Wattrelos, arrive
        à Castres.
      </p>

      <p>
        Cette même année-là, des tensions internes et des lourdeurs entre les
        deux pôles Aïkido de l’agglomération (Castres et Mazamet) rendent la
        situation difficile à vivre. Dès 2014, les deux enseignants rencontrent,
        à leur demande, les dirigeants du Judo Club de Mazamet, et proposent
        une alternative&nbsp;:
      </p>

      <p className="italic">
        soit ils créent un club autonome et demandent à pouvoir continuer dans
        les mêmes conditions, soit le Judo Club de Mazamet accepte une fusion
        des deux entités, dans une seule et même structure.
      </p>

      {/* Photo fusion / groupe Aïkido */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-2xl aspect-[16/9] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/5/3.jpg" // 👉 photo de groupe Aïkido au dojo
            alt="Groupe d’aïkidokas au dojo de Mazamet"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Aïkidokas au dojo de Mazamet après la fusion avec le Judo
        </figcaption>
      </figure>

      <p>
        Les excellentes relations entre les différents responsables des deux
        parties conduisent à choisir unanimement la seconde solution.{" "}
        <strong>Le Judo Aïkido de Mazamet était né.</strong>
      </p>

      <p>
        De cette fusion, tous les protagonistes ne peuvent que se féliciter. Il
        n’y a pas de concurrence : les décisions sont prises dans le meilleur
        esprit possible, avec la participation de tous. Une campagne de
        communication et d’information régulièrement renouvelée fait venir
        suffisamment d’anciens et de nouveaux pratiquants pour que le club
        figure rapidement parmi les tout premiers de la Ligue en nombre de
        licenciés.
      </p>

      <p>
        La qualité de l’entente au sein de l’association surprend nombre de
        responsables régionaux, peu habitués à retrouver ailleurs la même
        ambiance.
      </p>

      <p>
        Depuis ces débuts, le Judo Aïkido Mazamet a connu quelques changements.
        Notre 4ᵉ dan <strong>Maxime Ridel</strong>, pour des raisons
        professionnelles, a dû s’installer loin de nous, mais il reste présent
        dans nos esprits et sa licence est restée mazamétaine.{" "}
        <strong>Yohan Gomez</strong> a donc repris la direction de
        l’enseignement.
      </p>

      {/* Instructeurs Aïkido */}
<figure className="my-8 flex flex-col items-center">
  <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-lg bg-slate-200">
    <Image
      src="/images/special-70/5/4.jpg"
      alt="Yohan GOMEZ, enseignant d’Aïkido"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 400px"
    />
  </div>

</figure>




      <p>
        Deux autres enseignants sortent rapidement des rangs :{" "}
        <strong>Antoine Zacharias</strong> et <strong>Stéphane David</strong>,
        qui apportent un concours apprécié après avoir obtenu les diplômes
        adéquats.
      </p>

      <p>
        <strong>Delphine Martin-David</strong>, épouse de Stéphane, débute
        l’Aïkido à Toulouse en 1993. Pour des raisons professionnelles et
        familiales, elle doit attendre 2015 pour reprendre le chemin des tatamis
        à Mazamet. Son parcours vers le 1er dan est interrompu par la pandémie
        de Covid à deux mois de l’examen, mais ce n’est que partie remise. Elle
        assume depuis un rôle important au sein du secrétariat du club.
      </p>

      <p>
        Stéphane David évoque deux périodes dans son parcours : la première,
        marquée par des dissensions trop lourdes pour avancer sereinement ; la
        seconde, à Mazamet, « remplie d’ondes positives », où il passe 1er dan
        en 2016, 2ᵉ dan en 2018, et obtient le BIFA en 2020, nécessaire pour
        assurer un enseignement rigoureux et sécurisé.
      </p>

      <p>
        Antoine Zacharias débute en 1998, au sein de l’Aïkido Castres-Mazamet.
        Il participe à de nombreux stages auprès de différents Maîtres. Il
        obtient son 1er dan en 2016, le BIFA en 2017, puis le 2ᵉ dan en 2018. Il
        s’occupe du cours des plus jeunes, puis ajoute un cours d’Aïki Taïso
        après la période Covid. Le Taïso est un entraînement destiné à préparer
        physiquement et mentalement la pratique des arts martiaux.
      </p>

      <p>
        Quant à <strong>Yohan Gomez</strong>, il débute en 2000, obtient son 1er
        dan en 2009, son 2ᵉ dan en 2012, puis en 2013, il reçoit son grade
        Aïkikaï devant <strong>Yamada Sensei</strong>. Il décroche un brevet
        fédéral en 2015 et un diplôme « parcours handicap » en 2016. Depuis le
        départ de Maxime Ridel, Yohan assure la direction et l’organisation des
        cours d’Aïkido, et fait désormais partie des responsables de la Ligue
        Occitanie.
      </p>

      <p>
        L’Aïkido n’est pas un sport de compétition, ce qui nuit parfois à sa
        notoriété auprès du grand public. La pratique et le perfectionnement
        reposent sur des stages dirigés par des Maîtres renommés&nbsp;:{" "}
        <strong>Maître TAMURA</strong> (8ᵉ dan, décédé en 2010),{" "}
        <strong>Luc BOUCHAREU</strong> (7ᵉ dan), <strong>Henri AVRIL</strong>{" "}
        (7ᵉ dan), <strong>Jean-François FABRE</strong> (6ᵉ dan), et bien
        d’autres.
      </p>

      <p>
        Comme toutes les disciplines sportives, l’Aïkido a souffert de la
        pandémie après le 13 mars 2020. La saison 2021-2022 post-Covid a eu du
        mal à démarrer, mais l’on observe un redémarrage prometteur. L’optimisme
        est donc de mise.
      </p>

      <p>
        Aujourd’hui, l’Aïkido occupe pleinement sa place au Judo Aïkido Mazamet.
        Le fonctionnement de la discipline est dirigé et réalisé par des
        Mazamétains, à Mazamet. Son destin est tenu fermement en main au niveau
        local, ce qui est une vraie garantie pour l’avenir et la pérennité de
        l’œuvre déjà accomplie.
      </p>

      <p>
        Toutes les personnes désireuses de découvrir un univers nouveau et
        passionnant sont attendues au <strong>63 rue des Cordes</strong>, où
        elles seront les bienvenues pour vivre, dans d’excellentes conditions,
        une nouvelle et très intéressante aventure.
      </p>

      <p className="mt-4">
        … et n’oubliez pas nos sponsors&nbsp;!
      </p>
    </ChronicleArticleLayout>
  );
}
