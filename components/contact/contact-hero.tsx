/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function ContactHero({ t }: any) {
  return (
    <div className="max-w-2xl">
      <p className="badge mb-4">{t("contact.badge")}</p>

      <h1 className="heading-md">
        {t("contact.title")}
      </h1>

      <p className="mt-4 text-slate-600">
        {t("contact.description")}
      </p>
    </div>
  );
}