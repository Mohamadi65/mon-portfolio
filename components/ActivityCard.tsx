"use client";

import Image from "next/image";
import Link from "next/link";

type ActivityCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  readMoreLabel?: string;
};

export default function ActivityCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  readMoreLabel = "En savoir plus",
}: ActivityCardProps) {
  const CardInner = (
    <div className="relative h-[280px] overflow-hidden rounded-3xl bg-slate-950 shadow-md">
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Contenu texte collé en bas */}
      <div className="absolute inset-x-0 bottom-4 px-6 flex flex-col items-start">
        {/* Titre : collé en bas au repos */}
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        {/* Bloc description + CTA : hauteur 0 au repos, se déplie au hover (desktop) */}
        <div
          className="
            hidden md:block
            overflow-hidden
            max-h-0
            opacity-0 translate-y-3
            transition-all duration-500 ease-out
            group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0
          "
        >
          <p className="mt-2 text-sm text-slate-100 line-clamp-3">
            {description}
          </p>

          {href && (
            <span className="mt-4 inline-block text-sm font-medium text-sky-300">
              {readMoreLabel} →
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {CardInner}
      </Link>
    );
  }

  return <div className="group">{CardInner}</div>;
}
