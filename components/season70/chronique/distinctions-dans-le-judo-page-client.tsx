// components/season70/chronique/distinctions-dans-le-judo-page-client.tsx
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function DistinctionsDansLeJudoPageClient({
  dictionary,
  locale,
}: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Les distinctions dans le Judo"
      topImage={{
        src: "/images/special-70/6/1.png", // 👉 photo de cérémonie / distinction
        alt: "Remise de distinctions au Judo Aïkido Mazamet",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            « <strong>Ne pas solliciter une distinction</strong>&nbsp;»,
            «&nbsp;<strong>Ne pas la refuser</strong>&nbsp;», «&nbsp;
            <strong>Ne pas en faire état</strong>&nbsp;». Ces trois conseils
            de sage ont été souvent prononcés par{" "}
            <strong>Octave NAVARRO</strong> lorsqu’il officiait comme président
            du Comité du Tarn de judo, puis responsable de la commission
            Culture Judo.
          </p>
          <p>
            Dans le Tarn, ce n’est pas la ruée vers les médailles qui pose
            problème, mais plutôt le risque d’oubli&nbsp;: sans l’attention de
            certains responsables, beaucoup de bénévoles seraient restés dans
            l’ombre malgré un engagement de longue durée.
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/arrivee-aikido-mazamet`,
      }}
      next={{
        href: `${basePath}/chronique-du-club/disparition-ichiro-abe`,
      }}
    >
      <p>
        Le fait de recevoir une distinction a un double but. D’abord, reconnaître
        le mérite d’une personne durant un mandat ou une fonction particulière.
        Ensuite, faire connaître au plus grand nombre le service apporté à une
        communauté, et mettre en évidence l’homme ou la femme et les actions
        réalisées.
      </p>

      <p>
        À partir de là, on découvre qu’une action effectuée au service des
        autres est officiellement reconnue. Cela évite que celui qui s’investit
        ne se sente ignoré. Le besoin de reconnaissance est normal&nbsp;: c’est
        une réaction naturelle de fierté, bien différente de l’orgueil.
      </p>

      <p>
        Les personnes dont les noms vont apparaître ont donné du temps, des
        efforts et souvent beaucoup de sacrifices pour l’association mazamétaine,
        mais aussi pour le Comité du Tarn de judo ou la Ligue. C’est à la fois
        une source de satisfaction personnelle, et un témoignage de générosité
        envers les autres.
      </p>

      <p>
        Le Judo Aïkido Mazamet, né en 1951 et déclaré officiellement en 1952,
        commémore en 2022 ses <strong>70 ans de vie</strong>.
      </p>

      {/* André ADAM */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/6/2.png"
            alt="André ADAM, fondateur du club"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          André ADAM – fondateur du Judo Club Mazamétain
        </figcaption>
      </figure>

      <p>
        Durant onze ans à la présidence, puis comme membre actif jusqu’à son
        décès en 1998, <strong>André ADAM</strong> a énormément donné, souvent
        sur ses propres deniers, pour équiper et faire vivre l’association.
      </p>

      <p>
        Ce n’est pourtant qu’en 1973 qu’il reçoit une première distinction&nbsp;:
        la <strong>Médaille de Bronze de la Jeunesse et des Sports</strong>.
        Dix ans plus tard, en 1983, il obtient la médaille d’Argent, puis en
        1994 la médaille de Bronze de la Fédération, et enfin la{" "}
        <strong>Médaille d’Or de la Jeunesse et des Sports</strong> en 1997.
      </p>

      {/* Roger OLAZABAL */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/6/3.png"
            alt="Roger OLAZABAL, président d’honneur du club"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Roger OLAZABAL – Président d’honneur du club
        </figcaption>
      </figure>

      <p>
        Son successeur, <strong>Roger OLAZABAL</strong>, œuvrera au sein du club
        et des instances départementales pendant trente ans à partir de 1963.
        Lui aussi devra patienter&nbsp;: il reçoit en 1984 la Médaille de Bronze
        de la Jeunesse et des Sports, les <strong>Palmes de Bronze</strong> de
        la Fédération en 1996, puis la Médaille d’Argent de la Jeunesse et des
        Sports en 1997.
      </p>

      <p>
        Mais la vraie reconnaissance arrivera plus tard. Nul n’ayant oublié ce
        qu’il a représenté, la FFJDA lui décerne en 2021, lors d’une cérémonie
        solennelle en présence de nombreuses personnalités, les{" "}
        <strong>Palmes d’Or de la Fédération</strong>, à la demande du Comité du
        Tarn et avec l’appui très motivé du club mazamétain.
      </p>

      {/* Photo presse */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-2xl aspect-[16/9] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/6/4.png"
            alt="Article de presse sur les distinctions du club"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Photo extraite de «&nbsp;La Dépêche&nbsp;»
        </figcaption>
      </figure>

      <p>
        <strong>Jean-Luc LLOBREGAT</strong>, licencié au début des années 1990,
        s’investit très vite dans la vie du club. Secrétaire adjoint, puis
        trésorier, il officie aussi au sein du Comité du Tarn. Trente ans
        d’activité pour le club, plus de vingt ans pour le département.
      </p>

      <p>
        Nos destins étant parallèles, nous recevrons lui et moi des distinctions
        très proches&nbsp;: en 2003, la{" "}
        <strong>Médaille de Bronze de la FFJDA</strong>. Puis, en 2013 pour moi
        et 2014 pour lui, la Médaille d’Argent. Enfin, la{" "}
        <strong>Médaille de Bronze de la Jeunesse et des Sports</strong> lui est
        remise en 2011, et en 2017 pour moi.
      </p>

      <p>
        En 2016, le <strong>Trophée des Sports du Conseil départemental du
        Tarn</strong> m’est décerné, mettant à l’honneur le travail réalisé au
        service du club et du judo tarnais.
      </p>

      <p>
        Deux autres membres de l’association sont également reconnus&nbsp;:
        <strong> Pierre DESMOULIN</strong>, qui reçoit en 2003 une lettre de
        félicitations fédérale pour son travail au secrétariat et son grand
        dévouement, et <strong>Grégory STAFFONI</strong>, enseignant principal
        en lice depuis 2008, distingué en 2019 par les{" "}
        <strong>Palmes de Bronze de la Fédération</strong>.
      </p>

      {/* Groupe distinctions */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-2xl aspect-[16/9] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/6/5.png"
            alt="Membres du club mis à l’honneur"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Membres du Judo Aïkido Mazamet mis à l’honneur
        </figcaption>
      </figure>

      <p>
        Le Judo Club de Mazamet reçoit aussi le{" "}
        <strong>Trophée du Comité du Tarn</strong> en 2012. Quand on fait le
        bilan de toutes ces distinctions, on a l’impression que c’est beaucoup.
        Pourtant, la grande majorité a été attribuée depuis les années 1990, et
        de nombreuses personnes auraient également mérité d’y figurer.
      </p>

      <p>
        Beaucoup sont parties trop tôt pour être officiellement mises en avant.
        D’autres responsables en activité aujourd’hui n’ont pas encore été
        primés, mais ils ne sont pas oubliés. Les délais, les usages et les
        procédures rendent parfois les choses plus longues que l’on ne le
        souhaiterait.
      </p>

      <p>
        On n’a jamais sollicité de distinction à titre personnel, mais on en a
        souvent réclamé pour les autres. On ne les a jamais refusées non plus,
        car toutes étaient méritées. Et si l’on en a fait état, ce n’est pas
        pour flatter des egos, mais pour assurer à tous ces récipiendaires une
        notoriété légitime, là où le silence les aurait lentement éloignés de la
        mémoire collective.
      </p>

      <p>
        Ce n’est que justice de remettre au premier rang les pionniers comme{" "}
        <strong>André ADAM</strong> et <strong>Roger OLAZABAL</strong>, sans
        lesquels le judo ne serait peut-être pas ce qu’il est aujourd’hui à
        Mazamet. Avec d’autres André et d’autres Roger, ils ont posé les
        fondations d’un judo français devenu, au fil du temps, un des géants
        mondiaux de la discipline.
      </p>
    </ChronicleArticleLayout>
  );
}
