/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function AboutContent({ t }: any) {
  return (
    <section className="container-page py-10">
      <div className="max-w-3xl space-y-6 text-slate-600 leading-7">
        <p>{t("about.content.p1")}</p>
        <p>{t("about.content.p2")}</p>
        <p>{t("about.content.p3")}</p>
      </div>
    </section>
  );
}