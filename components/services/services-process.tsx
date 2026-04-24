"use client";

import { motion } from "framer-motion";

type Props = {
  t: (key: string) => string;
};

const steps = [
  "services.process.step1",
  "services.process.step2",
  "services.process.step3",
  "services.process.step4",
];

export default function ServicesProcess({ t }: Props) {
  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="badge mb-4">{t("services.process.badge")}</p>
          <h2 className="heading-md text-slate-950">
            {t("services.process.title")}
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            {t("services.process.description")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <span className="text-sm font-bold text-blue-700">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-bold text-slate-950">
                {t(`${step}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t(`${step}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}