"use client";

import { useI18n } from "@/lib/i18n-context";

/** Renders initials in a styled circle — used when no approved photo is available. */
function InitialsAvatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-navy font-semibold text-white ${className ?? ""}`}
    >
      {initials}
    </span>
  );
}

export function SurflandProof() {
  const { t } = useI18n();

  return (
    <section id="prova" className="bg-[#f4f2ee]">
      <div className="mx-auto max-w-[42rem] px-4 py-[var(--space-section)] sm:px-6 lg:max-w-[46rem]">
        {/* Live badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ok/30 bg-ok/10 px-3 py-1">
          <span className="live-dot" />
          <span className="text-[11px] font-semibold tracking-[0.14em] text-ok uppercase">
            Em operação real · Surfland Brasil
          </span>
        </div>

        <h2 className="text-[1.85rem] font-semibold tracking-[-0.035em] text-navy sm:text-4xl">
          {t.proof.headline}
        </h2>

        <blockquote className="mt-8">
          <p className="text-lg leading-relaxed text-navy/70 sm:text-xl">
            {t.proof.quote}{" "}
            <span className="font-medium text-navy">{t.proof.emphasis}</span>
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <InitialsAvatar
              name={t.proof.name}
              className="h-20 w-20 text-2xl lg:h-[104px] lg:w-[104px] lg:text-3xl"
            />
            <div>
              <p className="text-base font-semibold text-navy">{t.proof.name}</p>
              <p className="mt-1 text-sm text-navy/55">
                {t.proof.role} · {t.proof.organization}
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
