// components/home/home-events.tsx
"use client"

import Link from "next/link"

import type { HomepageEvent } from "@/lib/types.homepage"
import { EventCard } from "@/components/events/event-card"

type HomeEventsProps = {
  events: HomepageEvent[]
  t: (key: string) => string
}

export function HomeEvents({ events, t }: HomeEventsProps) {
  // On limite à 3 événements sur la home
  const visibleEvents = events.slice(0, 3)

  return (
    <section className="bg-slate-50 py-10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t("event.breadcrumb.list") || "Événements"}
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-50">
              {t("event.list.title") || "Nos événements"}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-200">
              {t("event.list.description") ||
                "Découvrez les rendez-vous du Judo Aïkido Mazamet."}
            </p>
          </div>

          <Link
            href="/evenements"
            className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
          >
            {t("home.events.viewAll") || "Voir tous les événements"}
          </Link>
        </div>

        {/* Grille d’événements */}
        {visibleEvents.length === 0 ? (
          <div className="flex items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300">
            {t("event.empty") || "Aucun événement à venir pour le moment."}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleEvents.map((e) => (
              <EventCard
                key={e.id}
                event={e}
                t={t}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
