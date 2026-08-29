import type { Locale } from "@/i18n";

export type LandingSite = "surfland" | "bahrain";

export function siteHome(locale: Locale, site: LandingSite) {
  if (site === "bahrain") return locale === "pt" ? "/pt/bahrain" : "/bahrain";
  return locale === "pt" ? "/pt" : "/";
}

export function siteFromPath(pathname: string): LandingSite {
  return pathname.includes("/bahrain") ? "bahrain" : "surfland";
}
