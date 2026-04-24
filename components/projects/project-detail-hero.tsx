"use client";

import { motion } from "framer-motion";

type Props = {
  t: (key: string) => string;
  slug: string;
};

export default function ProjectDetailHero({ t, slug }: Props) {
  const baseKey = `projectDetail.${slug}`;

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
            {t(`${baseKey}.badge`)}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="heading-xl text-balance text-slate-950"
          >
            {t(`${baseKey}.title`)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            {t(`${baseKey}.description`)}
          </motion.p>
        </div>
      </div>
    </section>
  );
}