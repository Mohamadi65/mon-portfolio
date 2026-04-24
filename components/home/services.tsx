"use client";

import { motion } from "framer-motion";
import { Code2, Gauge, LayoutTemplate } from "lucide-react";

type Props = {
  t: (key: string) => string;
};

const services = [
  {
    key: "homepage.services.websites",
    icon: LayoutTemplate,
  },
  {
    key: "homepage.services.apps",
    icon: Code2,
  },
  {
    key: "homepage.services.optimization",
    icon: Gauge,
  },
];

export default function Services({ t }: Props) {
  return (
    <section className="bg-slate-50 py-2 lg:py-0">
      <div className="container-page">
        <div className="mb-10 max-w-2xl">
          <p className="badge mb-4">{t("homepage.services.badge")}</p>

          <h2 className="heading-md text-balance text-slate-950">
            {t("homepage.services.title")}
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {t("homepage.services.description")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-80px" }}
                className="card card-hover p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold text-slate-950">
                  {t(`${service.key}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {t(`${service.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}