/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function ContactInfos({ t }: any) {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="font-semibold text-slate-950">
          {t("contact.info.title")}
        </h3>

        <p className="mt-3 text-sm text-slate-600">
          {t("contact.info.description")}
        </p>
      </div>

      <div className="card p-6 space-y-3 text-sm text-slate-600">
        <p><strong>{t("contact.info.name")}:</strong> Mohamadi Zongo</p>
        <p><strong>SIREN:</strong> 928 939 529</p>
        <p><strong>Activité:</strong> Programmation informatique</p>
        <p><strong>Email:</strong> freelancemohamadi65@gmail.com</p>
      </div>
    </div>
  );
}