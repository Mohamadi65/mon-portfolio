export const locales = ['fr','en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'fr';

export function detectLocaleFromAcceptLanguage(acceptLang?: string): Locale {
  if (!acceptLang) return defaultLocale;
  const s = acceptLang.toLowerCase();
  if (s.includes('fr')) return 'fr';
  if (s.includes('en')) return 'en';
  
  return defaultLocale;
}
