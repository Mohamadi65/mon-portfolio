"use client";

import type { Locale } from "@/lib/i18n-config";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

type Props = {
  dictionary: Record<string, string>;
  locale: Locale | string;
  page: "legal" | "privacy";
};

export default function LegalPageClient({ dictionary, page }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key;
  const baseKey = page === "legal" ? "legal" : "privacy";

  return (
    <div className="min-h-screen bg-slate-50 pt-[88px] text-slate-950">
      <Navbar t={t} />

      <main className="container-page py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="badge mb-6">{t(`${baseKey}.badge`)}</p>

          <h1 className="heading-lg text-slate-950">
            {t(`${baseKey}.title`)}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t(`${baseKey}.description`)}
          </p>

          <div className="mt-10 space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <section key={item} className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-950">
                  {t(`${baseKey}.section${item}.title`)}
                </h2>

                <p className="mt-3 whitespace-pre-line leading-7 text-slate-600">
                  {t(`${baseKey}.section${item}.text`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter t={t} />
    </div>
  );
}