"use client";

import { motion } from "framer-motion";
import { Code2, Gauge, Globe2, LayoutTemplate } from "lucide-react";

type Props = {
  t: (key: string) => string;
};

const services = [
  {
    key: "services.items.websites",
    icon: LayoutTemplate,
  },
  {
    key: "services.items.apps",
    icon: Code2,
  },
  {
    key: "services.items.optimization",
    icon: Gauge,
  },
  {
    key: "services.items.multilingual",
    icon: Globe2,
  },
];

export default function ServicesList({ t }: Props) {
  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                viewport={{ once: true, margin: "-80px" }}
                className="card card-hover p-7 md:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {t(`${service.key}.title`)}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {t(`${service.key}.description`)}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    {t("services.includes")}
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>• {t(`${service.key}.point1`)}</li>
                    <li>• {t(`${service.key}.point2`)}</li>
                    <li>• {t(`${service.key}.point3`)}</li>
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}