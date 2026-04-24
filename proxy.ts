// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  detectLocaleFromAcceptLanguage,
  locales,
  defaultLocale,
} from "@/lib/i18n-config";

function hasLocalePrefix(pathname: string) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return locales.includes(firstSegment as (typeof locales)[number]);
}

function chooseLocale(req: NextRequest) {
  const cookieLocale = req.cookies.get("locale")?.value;

  if (
    cookieLocale &&
    (locales as readonly string[]).includes(cookieLocale)
  ) {
    return cookieLocale;
  }

  return (
    detectLocaleFromAcceptLanguage(
      req.headers.get("accept-language") || undefined
    ) ?? defaultLocale
  );
}

function shouldIgnorePath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico" ||
    pathname === "/site.webmanifest"
  );
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (shouldIgnorePath(pathname)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  const locale = chooseLocale(req);

  if (!req.cookies.get("locale")?.value) {
    response.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  if (!hasLocalePrefix(pathname)) {
    const url = req.nextUrl.clone();

    url.pathname =
      pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    const redirectResponse = NextResponse.redirect(url);

    redirectResponse.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });

    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};