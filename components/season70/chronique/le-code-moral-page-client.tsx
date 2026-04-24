// components/season70/chronique/le-code-moral-page-client.tsx
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function LeCodeMoralPageClient({ dictionary, locale }: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Le Code MORAL"
      topImage={{
        src: "/images/special-70/9/1.png", // 👉 affiche du code moral du judo
        alt: "Affiche du Code Moral du judo",
         aspect: "16/9",       // 👈 plus horizontal
        fit: "contain",       // 👈 affiche l'image entière, sans recadrage
      }}
      intro={
        <>
          <p>
            Quand les responsables du Judo Aïkido Mazamet ont décidé, en début
            de saison 2021-2022, de réaliser des chroniques sur la vie du club
            et le judo en général, il est vite apparu évident qu’il fallait
            évoquer le <strong>Code Moral du Judo</strong>, affiché dans tous
            les dojos de la FFJDA.
          </p>
          <p>
            Surprise&nbsp;: ce Code Moral est en réalité une{" "}
            <strong>initiative française</strong>, née en 1985 de la volonté de
            judokas nationaux de renforcer le sérieux de la discipline par une
            véritable charte de valeurs, inspirée du monde des samouraïs mais
            aussi de philosophies venues d’ailleurs.
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/personnalites-marquantes`,
      }}
      // dernier article → pas de next
    >
      {/* Image explicative / Bushido */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-xl aspect-[16/9] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/9/2.png" // 👉 schéma des vertus / Bushido si tu l’as
            alt="Représentation des vertus du Code Moral et du Bushido"
            fill
            className="object-contain"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Les grandes vertus issues du Bushido et reprises dans le Code Moral
        </figcaption>
      </figure>

      <p>
        Le Code Moral du Judo a été conçu par{" "}
        <strong>Bernard MIDAN</strong> (8ᵉ dan, 1917–1994), élève de Roger
        Piquemal à Paris, avec l’aide de Maître <strong>AWAZU</strong>. Il
        s’inspire de l’esprit du &laquo;&nbsp;Code d’honneur du Collège des
        ceintures noires&nbsp;&raquo;, lui-même nourri du{" "}
        <strong>Bushido</strong> (&laquo; voie du guerrier &raquo;) rédigé par
        Inazô Nitobe en 1899.
      </p>

      <p>
        Autre surprise&nbsp;: les sources de ce Code Moral sont en partie{" "}
        <strong>chinoises</strong> (Confucius) et{" "}
        <strong>hindoues</strong>, et pas uniquement japonaises. Le Bushido lui
        même s’est nourri de ces traditions pour canaliser la mentalité
        japonaise, parfois avec succès… parfois moins, comme l’histoire l’a
        montré.
      </p>

      <p>
        Le Code Moral du Judo, tel que nous le connaissons aujourd’hui, est
        composé de <strong>huit grandes vertus</strong>, chacune étant liée aux
        autres. Dès qu’on en retire une, l’ensemble devient déséquilibré.
      </p>

      {/* POLITESSE */}
      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        LA POLITESSE
      </h2>
      <p>
        La politesse est la première forme de communication avec l’autre, dans
        la vie quotidienne comme sur le tatami. En judo, le cours commence et
        s’achève par le salut au dojo, puis au professeur. Chaque combat démarre
        et se conclut aussi par un salut.
      </p>
      <p>
        Elle impose également le <strong>silence</strong> pendant le cours pour
        ne pas gêner l’enseignement ni la concentration des pratiquants. La
        politesse est une base qui favorise l’application des autres vertus du
        Code Moral.
      </p>

      {/* COURAGE */}
      <h2 className="mt-8 text-xl font-semibold text-slate-900">
        LE COURAGE
      </h2>
      <p>
        Le courage est respecté, la peur est souvent méprisée… mais elle
        n’&eacute;loigne pas le danger. Une phrase illustre bien cette idée&nbsp;:
      </p>
      <p className="italic">
        «&nbsp;La peur n’éloigne pas le danger.&nbsp;»
      </p>
      <p>
        En judo, la crainte de l’adversaire est limitée par les règles qui
        protègent l’intégrité des combattants. Le courage, c’est accepter la
        confrontation, persévérer malgré les difficultés et continuer à se
        présenter sur le tatami, même après des défaites.
      </p>

      {/* SINCÉRITÉ */}
      <h2 className="mt-8 text-xl font-semibold text-slate-900">
        LA SINCÉRITÉ
      </h2>
      <p>
        La sincérité ne doit pas être confondue avec la Vérité. On peut tromper
        l’autre avec une fausse vérité dite «&nbsp;en toute sincérité&nbsp;».
        Être sincère, c’est parler et agir selon ce que l’on croit juste, même
        si l’on peut se tromper.
      </p>
      <p>
        En judo, la sincérité s’applique à soi-même et aux autres&nbsp;: être
        sincèrement à l’entraînement, dans l’effort, dans la progression. Quand
        on se rend compte qu’on s’est trompé sur un objectif ou un choix,
        l’honnêteté pousse à se corriger pour se rapprocher davantage de la
        vérité.
      </p>

      {/* MODESTIE */}
      <h2 className="mt-8 text-xl font-semibold text-slate-900">
        LA MODESTIE
      </h2>
      <p>
        La modestie se place naturellement derrière la sincérité. Ce n’est pas
        l’humilité excessive ou le dénigrement de soi, mais un{" "}
        <strong>frein à l’ego</strong>. La vraie modestie consiste à reconnaître
        ses défauts, mais aussi ses qualités, avec lucidité.
      </p>
      <p>
        Pour le judoka, elle permet de connaître ses limites sans s’y résigner&nbsp;:
        on accepte ce que l’on ne sait pas encore faire, puis on se met en
        mouvement pour progresser, sans vanité ni fausse modestie.
      </p>

      {/* CONTRÔLE DE SOI */}
      <h2 className="mt-8 text-xl font-semibold text-slate-900">
        LE CONTRÔLE DE SOI
      </h2>
      <p>
        Sur un tatami, le contrôle de soi est indispensable. Il s’appuie sur la{" "}
        <strong>maîtrise de soi</strong> et permet de garder son libre arbitre
        dans des situations de stress, de panique ou de danger.
      </p>
      <p>
        Le contrôle de soi n’est pas seulement un idéal moral, c’est aussi un
        véritable <strong>pouvoir mental</strong> à acquérir et à développer. Il
        évite les gestes dangereux, les réactions impulsives, et permet de
        rester juste dans l’action comme dans le jugement.
      </p>

      {/* RESPECT */}
      <h2 className="mt-8 text-xl font-semibold text-slate-900">LE RESPECT</h2>
      <p>
        Le mot &laquo;&nbsp;respect&nbsp;&raquo; est à la mode, mais on en
        oublie parfois la réciprocité. Réclamer le respect sans le donner soi-même
        n’a pas beaucoup de sens.
      </p>
      <p>
        Le respect implique un regard sans orgueil pour soi, ni mépris pour
        l’autre. On doit le manifester à son professeur, à ses partenaires, mais
        le professeur lui-même doit respecter ses élèves. Un Maître peut perdre
        son statut, mais s’il a su rester humain et juste, son respect restera
        intact aux yeux de ses anciens élèves.
      </p>
      <p>
        En judo, le respect se partage et se construit dans la durée.
      </p>

      {/* HONNEUR */}
      <h2 className="mt-8 text-xl font-semibold text-slate-900">L’HONNEUR</h2>
      <p>
        L’honneur, c’est la noblesse de l’âme&nbsp;: choisir une ligne de
        conduite que l’on juge juste, et s’y tenir, même lorsque la facilité
        incite à faire le contraire.
      </p>
      <p>
        Un combattant honorable conserve sa dignité même lorsque le résultat du
        combat ne lui est pas favorable. La défaite n’est pas une honte si
        l’on a tout donné avec loyauté, courage et respect.
      </p>
      <p>
        En judo, les règles obligent le vainqueur à respecter le vaincu. La
        véritable victoire, à terme, est double&nbsp;:{" "}
        <strong>sur l’adversaire et sur soi-même</strong>.
      </p>

      {/* AMITIÉ */}
      <h2 className="mt-8 text-xl font-semibold text-slate-900">L’AMITIÉ</h2>
      <p>
        «&nbsp;Qu’il est pauvre celui qui n’a pas d’ami.&nbsp;» L’amitié, c’est
        la connaissance des qualités et des défauts de l’autre, et l’acceptation
        de ce tout.
      </p>
      <p>
        Sur un tatami, on ne cherche pas à éviter la confrontation avec ses
        amis, au contraire. On se confronte pour progresser, et le combat se
        termine souvent par une accolade où se mêlent estime et affection.
      </p>
      <p>
        Dans les moments de doute ou de lassitude, la présence d’un ami sur le
        tatami est souvent le meilleur soutien pour continuer.
      </p>

      {/* CONCLUSION */}
      <p className="mt-10">
        Lorsqu’on examine ces différentes vertus, on constate qu’elles ont{" "}
        <strong>besoin les unes des autres</strong> pour exister pleinement. Si
        l’une disparaît, l’équilibre de l’ensemble se brise.
      </p>

      <p>
        Ce Code Moral est parfaitement adapté à la pratique des arts martiaux…
        mais pourquoi le laisser au vestiaire une fois sorti du dojo&nbsp;?
        Appliqué dans la vie de tous les jours, il peut apporter une{" "}
        <strong>qualité de relation</strong> et de comportement précieuse dans
        bien des domaines.
      </p>

      <p>
        On retrouve là l’esprit d’un célèbre philosophe et escrimeur japonais,
        <strong> Miyamoto MUSASHI</strong> (1584–1645), qui écrivait&nbsp;:
      </p>

      <p className="mt-4 italic">
        «&nbsp;Il n’existe rien à part toi-même qui puisse te rendre meilleur,
        plus fort, plus riche et plus intelligent. Tout réside en toi, tout
        existe. Ne cherche rien en dehors de toi-même.&nbsp;»
      </p>
    </ChronicleArticleLayout>
  );
}
