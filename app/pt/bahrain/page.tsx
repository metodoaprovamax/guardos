import type { Metadata } from "next";
import { BahrainLanding } from "@/components/bahrain/BahrainLanding";

export const metadata: Metadata = {
  title: "GuardOS · Bahrain",
  description:
    "GuardOS para a operação de piscina de ondas no Bahrain — rodízio, fadiga e cobertura em tempo real.",
  alternates: {
    canonical: "/pt/bahrain",
    languages: {
      en: "/bahrain",
      "pt-BR": "/pt/bahrain",
    },
  },
};

export default function PortugueseBahrainHome() {
  return <BahrainLanding locale="pt" />;
}
