/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";

export default function AboutHero({ t }: any) {
  return (
    <section className="container-page py-16 lg:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="heading-xl"
      >
        {t("about.hero.title")}
      </motion.h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        {t("about.hero.description")}
      </p>
    </section>
  );
}