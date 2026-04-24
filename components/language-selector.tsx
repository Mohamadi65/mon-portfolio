"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/components/I18nProvider";

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
] as const;

function getLanguage(locale: string) {
  return languages.find((lang) => lang.code === locale) ?? languages[0];
}

function getCurrentLocale(pathname: string, fallbackLocale: string) {
  return pathname.match(/^\/(fr|en)/)?.[1] || fallbackLocale || "fr";
}

function nextPathWithLocale(pathname: string, target: string) {
  const match = pathname.match(/^\/(fr|en)(\/.*)?$/);

  if (match) {
    return `/${target}${match[2] || ""}`;
  }

  return pathname === "/" ? `/${target}` : `/${target}${pathname}`;
}

interface LanguageSelectorProps {
  iconOnly?: boolean;
}

export function LanguageSelector({ iconOnly = false }: LanguageSelectorProps) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const locale = useLocale();

  const [loading, setLoading] = useState(false);

  const currentLocale = getCurrentLocale(pathname, locale);
  const selectedLanguage = getLanguage(currentLocale);

  async function change(targetLocale: string) {
    if (targetLocale === selectedLanguage.code) return;

    setLoading(true);

    try {
      await fetch("/api/switch-locale", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          locale: targetLocale,
          returnTo: pathname,
        }),
      });
    } catch {
      // Le changement d'URL fonctionne même si l'API cookie n'existe pas.
    }

    const newPath = nextPathWithLocale(pathname, targetLocale);

    router.push(newPath);
    router.refresh();

    setLoading(false);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={loading}
          aria-label="Changer de langue"
          className="flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-slate-900 shadow-sm transition hover:bg-slate-100 hover:text-slate-950 disabled:opacity-60"
        >
          {iconOnly ? (
            <Globe className="h-4 w-4" />
          ) : (
            <>
              <span className="text-sm font-medium uppercase">
                {selectedLanguage.code}
              </span>
              <Globe className="h-4 w-4" />
            </>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-50 w-44 rounded-2xl border border-slate-200 bg-white p-2 text-slate-900 shadow-2xl"
      >
        {languages.map((lang) => {
          const isSelected = selectedLanguage.code === lang.code;

          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => change(lang.code)}
              className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-slate-700 outline-none transition hover:bg-slate-100 hover:text-slate-950 focus:bg-slate-100 focus:text-slate-950"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </div>

              {isSelected && <Check className="h-4 w-4 text-blue-600" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}