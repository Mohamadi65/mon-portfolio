"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  t: (key: string) => string;
  locale: string;
};

const projects = [
  {
    key: "projects.items.portfolio",
    slug: "portfolio-multilingue",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
  },
  {
    key: "projects.items.saas",
    slug: "dashboard-saas",
    stack: ["Next.js", "Laravel", "MySQL", "API REST"],
  },
  {
    key: "projects.items.showcase",
    slug: "site-vitrine-premium",
    stack: ["Next.js", "SEO", "Tailwind CSS"],
  },
];

export default function ProjectsGrid({ t, locale }: Props) {
  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-80px" }}
              className="card card-hover overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_20rem)]" />
                <div className="absolute inset-x-6 top-8 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur">
                  <div className="h-3 w-24 rounded-full bg-slate-200" />
                  <div className="mt-5 space-y-3">
                    <div className="h-4 w-full rounded-full bg-slate-200" />
                    <div className="h-4 w-4/5 rounded-full bg-slate-200" />
                    <div className="h-4 w-2/3 rounded-full bg-slate-200" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-700">
                  {t(`${project.key}.type`)}
                </p>

                <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                  {t(`${project.key}.title`)}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {t(`${project.key}.description`)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-blue-700"
                >
                  {t("projects.card.link")}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}