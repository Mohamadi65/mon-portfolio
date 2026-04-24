// components/season70/chronique/disparition-ichiro-abe-page-client.tsx
"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import ChronicleArticleLayout from "@/components/season70/chronicle-article-layout";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale;
};

export default function DisparitionIchiroAbePageClient({
  dictionary,
  locale,
}: Props) {
  const basePath =
    locale === "fr" ? "/special-70-ans" : `/${locale}/special-70-ans`;

  return (
    <ChronicleArticleLayout
      dictionary={dictionary}
      locale={locale}
      title="Disparition de Ichiro Abe"
      topImage={{
        src: "/images/special-70/7/1.jpg", // 👉 adapte le chemin si besoin
        alt: "Maître Ichiro ABE, 10e dan de judo",
        aspect: "4/5",
      }}
      intro={
        <>
          <p>
            Depuis le <strong>27 février 2022</strong>, le monde du judo est en
            deuil. <strong>Ichiro ABE</strong>, 10ᵉ dan, l’un des plus grands
            disciples de Jigoro Kano, s’est éteint à l’âge de 99 ans.
          </p>
          <p>
            Son parcours exceptionnel, en tant que sportif, enseignant et
            dirigeant international, a profondément marqué des générations de
            judokas au Japon, en France et dans de nombreux autres pays.
          </p>
        </>
      }
      prev={{
        href: `${basePath}/chronique-du-club/distinctions-dans-le-judo`,
      }}
      next={{
        href: `${basePath}/chronique-du-club/personnalites-marquantes`,
      }}
    >
      {/* Portrait avec légende */}
      <figure className="my-8 flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden bg-slate-200">
          <Image
            src="/images/special-70/7/1.jpg"
            alt="Maître Ichiro ABE, 10e dan"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <figcaption className="mt-2 text-sm text-slate-600 text-center">
          Maître ICHIRO ABE – 10ᵉ dan de judo
        </figcaption>
      </figure>

      <p>
        Sa vie entière est consacrée au judo&nbsp;: pratique, enseignement,
        formation des cadres, développement de la discipline à l’international.
        Il aura transmis son savoir et son exigence à un nombre incalculable de
        judokas, au Japon comme à l’étranger.
      </p>

      <p>
        Il apprécie particulièrement la manière dont les judokas français
        adoptent et font vivre son enseignement, et ne manquera pas de le faire
        savoir. Notre club ressentira directement cet héritage à travers
        plusieurs liens privilégiés.
      </p>

      <p>
        Après la Seconde Guerre mondiale, le Japon est occupé par les forces
        américaines. Les arts martiaux y sont perçus comme un vecteur possible
        d’esprit guerrier, et leur pratique est un temps interdite. Les dojos
        japonais doivent attendre avant de rouvrir pleinement.
      </p>

      <p>
        De ce fait, plusieurs grands maîtres quittent momentanément l’archipel
        pour venir en Europe, et en particulier en France. Maître{" "}
        <strong>Ichiro ABE</strong>, alors 6ᵉ dan, rejoint la région
        toulousaine, où il enseigne au dojo des frères Lasserre, le{" "}
        <em>Shudokan</em>.
      </p>

      <p>
        Monsieur <strong>André ADAM</strong>, fondateur en 1952 du judo club de
        Mazamet, avait commencé à s’entraîner quelques années auparavant à
        Castres. Mais dès 1951, chaque semaine, il prend la route de Toulouse
        pour suivre les cours de Maître ABE au Shudokan.
      </p>

      <p>
        Il reste souvent très tard sur place, dormant à même le tatami, avant de
        revenir au petit matin à Mazamet pour exercer son métier de
        kinésithérapeute. Tant que Maître Ichiro ABE reste à Toulouse, André
        Adam continue ce rythme éprouvant mais passionné.
      </p>

      <p>
        Le destin finit par séparer les deux hommes&nbsp;: Maître ABE est appelé
        à d’autres responsabilités en France puis à l’étranger. Les rencontres
        s’interrompent pendant plusieurs décennies.
      </p>

      <p>
        Leurs retrouvailles ont lieu à <strong>Réalmont</strong>, en 1996.
        Maître ABE gratifie alors les judokas tarnais d’une démonstration de{" "}
        <em>Goshin Jutsu no Kata</em>, avec Maître{" "}
        <strong>Jacques SEGUIN</strong> comme uke. Un moment inoubliable pour
        tous, et plus encore pour André Adam.
      </p>

      <p>
        Se présentant devant Maître ABE, celui-ci, très surpris de le revoir
        après plus de quarante ans, le salue d’un simple mais éloquent&nbsp;:
        <em>«&nbsp;Oh, Adam&nbsp;!&nbsp;»</em>. Les deux hommes sont
        visiblement très émus. De leur conversation, il ne restera que quelques
        bribes, mais le souvenir en restera gravé.
      </p>

      <p>
        J’ai moi-même pu échanger quelques secondes avec notre hôte japonais
        pour lui demander de signer le passeport d’un de nos judokas, trop
        intimidé pour le faire lui-même. Je regretterai longtemps d’avoir oublié
        le mien ce jour-là.
      </p>

      <p>
        L’amitié et l’estime réciproques entre Maître ABE et Maître SEGUIN,
        ainsi que leur immense amour du judo, nous permettront ensuite d’avoir
        régulièrement de ses nouvelles, notamment lors des voyages de Jacques
        Seguin au Japon.
      </p>

      <p>
        Il nous raconte leurs rencontres au <strong>Kodokan</strong>, le «&nbsp;
        Temple du Judo&nbsp;», ou dans des soirées plus intimes. Combien de
        fois avons-nous évoqué tout cela avec notre maître français, lorsqu’il
        vient nous faire profiter de son savoir-faire au{" "}
        <strong>63 rue des Cordes</strong> à Mazamet&nbsp;?
      </p>

      <p>
        Voici, très modestement, quelques-uns des souvenirs qui nous relient à
        ce grand monsieur venu du bout du monde, parvenu au{" "}
        <strong>10ᵉ dan</strong> en 2006. Pour nous, comme pour tant d’autres
        amoureux du judo, il restera un exemple absolu.
      </p>

      <p>
        Même s’il n’est plus parmi nous, <strong>Ichiro ABE</strong> demeurera
        vivant dans nos mémoires. Son exigence, son humilité et son attachement
        au véritable esprit du judo continueront d’inspirer judokas, enseignants
        et dirigeants.
      </p>

      <p className="mt-6 italic">
        Sa citation préférée résume parfaitement l’esprit de persévérance qui
        nous anime tous sur le tatami&nbsp;:
      </p>

      <p className="mt-2 text-center font-semibold">
        «&nbsp;Si tu es jeté six fois, relève-toi sept fois.&nbsp;»
      </p>
    </ChronicleArticleLayout>
  );
}
