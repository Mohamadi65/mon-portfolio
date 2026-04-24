"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Props = {
  t: (key: string) => string;
  slug: string;
};

const stacks: Record<string, string[]> = {
  "portfolio-multilingue": ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
  "dashboard-saas": ["Next.js", "Laravel", "MySQL", "REST API"],
  "site-vitrine-premium": ["Next.js", "Tailwind CSS", "SEO", "Responsive"],
};

const sections = ["context", "challenge", "solution", "result"];

export default function ProjectDetailContent({ t, slug }: Props) {
  const baseKey = `projectDetail.${slug}`;
  const stack = stacks[slug] ?? [];

  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.article
                key={section}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                viewport={{ once: true, margin: "-80px" }}
                className="card p-7 md:p-8"
              >
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {t(`${baseKey}.${section}.title`)}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {t(`${baseKey}.${section}.description`)}
                </p>
              </motion.article>
            ))}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <h3 className="font-bold text-slate-950">
                {t("projectDetail.sidebar.stack")}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-slate-950">
                {t("projectDetail.sidebar.highlights")}
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                    <span>{t(`${baseKey}.highlight${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}