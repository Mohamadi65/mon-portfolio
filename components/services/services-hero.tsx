"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  t: (key: string) => string;
  locale: string;
};

export default function ServicesHero({ t, locale }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="container-page py-16 lg:py-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="badge mb-6"
          >
            {t("services.hero.badge")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="heading-xl text-balance text-slate-950"
          >
            {t("services.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            {t("services.hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t("services.hero.primaryCta")}
            </Link>

            <Link href={`/${locale}/projects`} className="btn-secondary">
              {t("services.hero.secondaryCta")}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}