"use client";

import React, { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/lib/i18n-config";

export type Dict = Record<string, string>;

type I18nContextValue = {
  t: (k: string) => string;
  locale: Locale;
};

const I18nCtx = createContext<I18nContextValue>({
  t: (k) => k,
  locale: "fr" as Locale, // valeur par défaut de secours
});

export function I18nProvider({
  messages,
  locale,
  children,
}: {
  messages: Dict;
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = useMemo(() => (k: string) => messages[k] ?? k, [messages]);
  const value = useMemo(() => ({ t, locale }), [t, locale]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useT() {
  return useContext(I18nCtx).t;
}
export function useLocale() {
  return useContext(I18nCtx).locale;
}
