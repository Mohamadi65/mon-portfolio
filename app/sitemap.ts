import type { MetadataRoute } from "next";

import { locales, defaultLocale } from "@/lib/i18n-config";
import { projectSlugs } from "@/components/projects/projects-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mohamadizongo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl.replace(/\/$/, "");

  const staticPages = [
    "",
    "/services",
    "/projects",
    "/about",
    "/contact",
    "/mentions-legales",
    "/politique-confidentialite",
  ];

  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page}`])
          ),
        },
      });
    }

    for (const slug of projectSlugs) {
      urls.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/projects/${slug}`])
          ),
        },
      });
    }
  }

  urls.push({
    url: `${baseUrl}/${defaultLocale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  });

  return urls;
}