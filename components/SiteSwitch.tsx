"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";
import { siteHome, type LandingSite } from "@/lib/landing-site";
import { cn } from "@/lib/cn";

export function SiteSwitch({ current }: { current: LandingSite }) {
  const { locale } = useI18n();

  return (
    <section className="border-t border-navy/8 bg-[#f4f2ee]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-navy/40 uppercase">
          {locale === "pt" ? "Escolher operação" : "Choose operation"}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={siteHome(locale, "surfland")}
            className={cn(
              "min-w-[9.5rem] rounded-xl px-5 py-3 text-center text-sm font-semibold",
              current === "surfland"
                ? "bg-navy text-white"
                : "border border-navy/15 bg-white text-navy hover:border-cyan/40",
            )}
          >
            Surfland
          </Link>
          <Link
            href={siteHome(locale, "bahrain")}
            className={cn(
              "min-w-[9.5rem] rounded-xl px-5 py-3 text-center text-sm font-semibold",
              current === "bahrain"
                ? "bg-navy text-white"
                : "border border-navy/15 bg-white text-navy hover:border-cyan/40",
            )}
          >
            Bahrain
          </Link>
        </div>
      </div>
    </section>
  );
}
