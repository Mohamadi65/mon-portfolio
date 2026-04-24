"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  t: (key: string) => string;
  locale: string;
};

export default function Hero({ t, locale }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_32rem)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="container-page flex min-h-[calc(100vh-88px)] items-center py-20 lg:py-28">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="badge mb-6"
          >
            {t("homepage.hero.badge")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="heading-xl text-balance text-slate-950"
          >
            {t("homepage.hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 text-pretty"
          >
            {t("homepage.hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href={`/${locale}/projects`} className="btn-primary">
              {t("homepage.hero.primaryCta")}
            </Link>

            <Link href={`/${locale}/contact`} className="btn-secondary">
              {t("homepage.hero.secondaryCta")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-slate-500"
          >
            <span>{t("homepage.hero.point1")}</span>
            <span>•</span>
            <span>{t("homepage.hero.point2")}</span>
            <span>•</span>
            <span>{t("homepage.hero.point3")}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}