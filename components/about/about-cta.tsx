/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";

export default function AboutCta({ t, locale }: any) {
  return (
    <section className="container-page py-16">
      <div className="rounded-3xl bg-slate-950 p-10 text-white">
        <h2 className="text-3xl font-bold">
          {t("about.cta.title")}
        </h2>

        <p className="mt-4 text-slate-300">
          {t("about.cta.description")}
        </p>

        <Link
          href={`/${locale}/contact`}
          className="btn-primary mt-6 inline-flex"
        >
          {t("about.cta.button")}
        </Link>
      </div>
    </section>
  );
}