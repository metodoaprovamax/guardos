"use client";

import { FairnessRanking } from "@/components/FairnessRanking";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Modules } from "@/components/Modules";
import { ProblemSection } from "@/components/ProblemSection";
import { Roadmap } from "@/components/Roadmap";
import { RotationExpress } from "@/components/RotationExpress";
import { RotationMap } from "@/components/RotationMap";
import { SiteSwitch } from "@/components/SiteSwitch";
import { SurflandProof } from "@/components/SurflandProof";
import { TrackingMessage } from "@/components/TrackingMessage";
import { BahrainHero } from "@/components/bahrain/BahrainHero";
import { getDictionary, type Locale } from "@/i18n";
import { I18nProvider } from "@/lib/i18n-context";
import { bahrainPlacements } from "@/lib/mapPlacements";
import type { PostId } from "@/data/demoSessions";

/** Chips shown above each lifeguard avatar on the Bahrain map */
const BAHRAIN_LG_LABELS: Partial<Record<PostId, string>> = {
  pier:  "LG1",
  p02:   "LG2",
  ct:    "LG3",
  p04:   "LG4",
  p05:   "LG5",
  p06:   "LG6",
  p03:   "LG7",
  p07:   "LG8",
  lobby: "INT",
};


export function BahrainLanding({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <I18nProvider locale={locale} t={t}>
      <div id="topo" className="min-w-0">
        <Header />
        <main>
          <BahrainHero />
          <ProblemSection />
          <section id="solucao" className="bg-aqua">
            <div className="mx-auto max-w-7xl px-4 py-[var(--space-section)] sm:px-6 lg:px-8">
              {/* Social proof banner — live client */}
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-ok/30 bg-ok/10 px-3 py-1.5">
                  <span className="live-dot" />
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-ok uppercase">
                    Em operação real
                  </span>
                </span>
                <span className="text-sm text-navy/60">
                  O GuardOS já está em uso na{" "}
                  <strong className="text-navy">Surfland Brasil</strong> —
                  gerenciando rodízios, fadiga e cobertura de postos em tempo real.
                </span>
              </div>

              <div className="mt-0 space-y-6">
                <RotationMap
                  mapSrc="/guardos/wave-pool-real.webp"
                  initialPlacements={bahrainPlacements}
                  codeLabels={BAHRAIN_LG_LABELS}
                  autoRotate
                  minimal
                />
                <TrackingMessage />
                <RotationExpress />
                <FairnessRanking />
              </div>
            </div>
          </section>
          <Modules />
          <SurflandProof />
          <Roadmap />
          <FinalCTA />
          <SiteSwitch current="bahrain" />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
