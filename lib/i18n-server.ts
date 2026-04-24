import type { Locale } from "./i18n-config";

export async function getMessages(locale: Locale) {
  switch (locale) {
    case "fr":
      return (await import("./dictionaries/fr.json")).default;
    case "en":
      return (await import("./dictionaries/en.json")).default;

  }
}
