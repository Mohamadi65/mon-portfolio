"use client";

import { motion } from "framer-motion";

type Props = {
  t: (key: string) => string;
};

const stack = [
  "Next.js",
  "React",
  "Laravel",
  "TypeScript",
  "Tailwind CSS",
  "MySQL",
  "REST API",
  "SEO",
  "i18n",
];

export default function Stack({ t }: Props) {
  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="container-page">
        <div className="card overflow-hidden p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="badge mb-4">{t("homepage.stack.badge")}</p>

            <h2 className="heading-md text-slate-950">
              {t("homepage.stack.title")}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {t("homepage.stack.description")}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}