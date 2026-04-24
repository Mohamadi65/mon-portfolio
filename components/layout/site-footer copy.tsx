"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteFooterProps = {
  t: (key: string) => string;
};

function getLocaleFromPathname(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment === "en" ? "en" : "fr";
}

export function SiteFooter({ t }: SiteFooterProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  const getHref = (href: string) => `/${locale}${href}`;

  return (
    <footer className="mt-20 bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-slate-800 pb-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white">
              {t("brand.name")}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              {t("footer.navigation")}
            </h4>

            <div className="mt-4 space-y-2 text-sm">
              <Link href={getHref("/services")} className="block hover:text-white">
                {t("nav.services")}
              </Link>
              <Link href={getHref("/projects")} className="block hover:text-white">
                {t("nav.projects")}
              </Link>
              <Link href={getHref("/about")} className="block hover:text-white">
                {t("nav.about")}
              </Link>
              <Link href={getHref("/contact")} className="block hover:text-white">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              {t("footer.contact")}
            </h4>

            <div className="mt-4 space-y-2 text-sm">
              <a
                href="mailto:contact@example.com"
                className="block hover:text-white"
              >
                contact@example.com
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t("brand.name")}.{" "}
            {t("footer.copyright")}
          </p>

          <div className="flex gap-4">
            <Link href={getHref("/mentions-legales")} className="hover:text-slate-300">
              {t("footer.legal")}
            </Link>
            <Link
              href={getHref("/politique-confidentialite")}
              className="hover:text-slate-300"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}