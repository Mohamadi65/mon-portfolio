"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { LanguageSelector } from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

type NavbarProps = {
  t: (key: string) => string;
};

type NavItem = {
  key: string;
  href: string;
};

const navItems: NavItem[] = [
  { key: "nav.home", href: "" },
  { key: "nav.services", href: "/services" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
];

function getLocaleFromPathname(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment === "en" ? "en" : "fr";
}

export function Navbar({ t }: NavbarProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);

  const getHref = (href: string) => `/${locale}${href}`;

  const isActive = (href: string) => {
    const hrefPath = getHref(href);

    if (href === "") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }

    return pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="flex min-w-[220px] flex-col leading-tight"
        >
          <span className="text-base font-bold text-slate-950">
            {t("brand.name")}
          </span>
          <span className="mt-1 text-xs text-slate-500">
            {t("brand.subtitle")}
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.key}
                href={getHref(item.href)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-w-[260px] items-center justify-end gap-3 lg:flex">
          <LanguageSelector />

          <Link
            href={`/${locale}/contact`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
          >
            <span className="text-white">{t("nav.cta")}</span>
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-slate-950 hover:bg-slate-100"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t("nav.openMenu")}</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] bg-white text-slate-950 sm:w-[360px]"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <Link href={`/${locale}`} className="font-bold text-slate-950">
                  {t("brand.name")}
                </Link>

                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-950 hover:bg-slate-100"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">{t("nav.closeMenu")}</span>
                  </Button>
                </SheetClose>
              </div>

              <div className="mt-6 space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <SheetClose asChild key={item.key}>
                      <Link
                        href={getHref(item.href)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                          active
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                        )}
                      >
                        {t(item.key)}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <LanguageSelector />
              </div>

              <div className="mt-6">
                <SheetClose asChild>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    <span className="text-white">{t("nav.cta")}</span>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}