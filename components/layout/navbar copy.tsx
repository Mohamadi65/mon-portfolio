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
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  const getHref = (href: string) => `/${locale}${href}`;

  const isActive = (href: string) => {
    const localizedHref = getHref(href);

    if (href === "") {
      return pathname === `/${locale}`;
    }

    return pathname.startsWith(localizedHref);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex flex-col leading-tight">
          <span className="text-base font-bold text-slate-950">
            {t("brand.name")}
          </span>
          <span className="text-xs text-slate-500">
            {t("brand.subtitle")}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={getHref(item.href)}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-blue-700"
                  : "text-slate-700 hover:text-blue-700"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector />

          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t("nav.openMenu")}</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85%] sm:w-[360px]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <Link href={`/${locale}`} className="font-bold">
                  {t("brand.name")}
                </Link>

                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">{t("nav.closeMenu")}</span>
                  </Button>
                </SheetClose>
              </div>

              <div className="mt-6 space-y-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.key}>
                    <Link
                      href={getHref(item.href)}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-sm font-medium",
                        isActive(item.href)
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <LanguageSelector />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}