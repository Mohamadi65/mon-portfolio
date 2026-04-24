/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";

const values = ["clarity", "performance", "simplicity"];

export default function AboutValues({ t }: any) {
  return (
    <section className="container-page py-14">
      <h2 className="heading-md mb-10">{t("about.values.title")}</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card p-6"
          >
            <h3 className="font-bold text-lg text-slate-950">
              {t(`about.values.${v}.title`)}
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              {t(`about.values.${v}.description`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}