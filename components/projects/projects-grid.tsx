"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Lock } from "lucide-react";

import { projects } from "@/components/projects/projects-data";

type Props = {
  t: (key: string) => string;
  locale: string;
};

export default function ProjectsGrid({ t, locale }: Props) {
  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                <Image
                  src={project.image}
                  alt={t(`${project.key}.imageAlt`)}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
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

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-blue-700"
                  >
                    {t("projects.card.link")}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel={project.liveUrl.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
                    >
                      {t("projects.card.visit")}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}

                  {project.githubUrl ? (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-slate-950"
                    >
                      GitHub
                      <Github className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-400">
                      GitHub privé
                      <Lock className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}