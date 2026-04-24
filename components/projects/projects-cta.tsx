"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  t: (key: string) => string;
  locale: string;
};

export default function ProjectsCta({ t, locale }: Props) {
  return (
    <section className="bg-slate-50 py-14 lg:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300">
              {t("projects.cta.badge")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              {t("projects.cta.title")}
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              {t("projects.cta.description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                {t("projects.cta.primaryCta")}
              </Link>

              <Link
                href={`/${locale}/services`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {t("projects.cta.secondaryCta")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}