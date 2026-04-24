"use client";

import ActivityCard from "@/components/ActivityCard"; // adapte le chemin si besoin

type HomeActivitiesProps = {
  t: (key: string) => string;
};

type ActivityDef = {
  slug: "judo" | "aikido" | "bjj";
  imageSrc: string;
  imageAlt: string;
};

const ACTIVITIES: ActivityDef[] = [
  {
    slug: "judo",
    imageSrc: "/images/activities/judo.png",
    imageAlt: "Pratique du judo",
  },
  {
    slug: "aikido",
    imageSrc: "/images/activities/aikido.png",
    imageAlt: "Pratique de l’aïkido",
  },
  {
    slug: "bjj",
    imageSrc: "/images/activities/jiu-jitsu-bresilien.png",
    imageAlt: "Pratique du jiu-jitsu brésilien",
  },
];

export function HomeActivities({ t }: HomeActivitiesProps) {
  // On prépare des objets déjà "traduits"
  const translatedActivities = ACTIVITIES.map((base) => {
    const keyBase = `home.activities.${base.slug}`;

    const titleKey = `${keyBase}.title`;
    const descKey = `${keyBase}.description`;

    const title = t(titleKey);
    const description = t(descKey);

    // Tu peux décommenter ça pour vérifier les clés en console :
    // console.log(base.slug, titleKey, "=>", title);
    // console.log(base.slug, descKey, "=>", description);

    return {
      ...base,
      title,
      description,
    };
  });

  return (
    <section className="bg-slate-50 py-12 dark:bg-slate-950" id="activities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {t("home.activities.kicker") || "Nos activités"}
          </p>
          <h2 className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-50">
            {t("home.activities.title") || "Nos activités"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-200">
            {t("home.activities.description") ||
              "Découvrez les disciplines proposées au sein du Judo Aïkido Mazamet : judo, aïkido, jiu-jitsu et plus encore."}
          </p>
        </header>

        {/* Grid of activities */}
        <div className="grid gap-6 md:grid-cols-3">
          {translatedActivities.map((activity) => (
            <ActivityCard
              key={activity.slug}
              title={activity.title}
              description={activity.description}
              imageSrc={activity.imageSrc}
              imageAlt={activity.imageAlt}
              href={`/activites/${activity.slug}`}
              readMoreLabel={t("activity.card.readMore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
