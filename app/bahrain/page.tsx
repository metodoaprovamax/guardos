import type { Metadata } from "next";
import { BahrainLanding } from "@/components/bahrain/BahrainLanding";

export const metadata: Metadata = {
  title: "GuardOS · Bahrain",
  description:
    "GuardOS for the Bahrain wave-pool operation — rotations, fatigue, and coverage in real time.",
  alternates: {
    canonical: "/bahrain",
    languages: {
      en: "/bahrain",
      "pt-BR": "/pt/bahrain",
    },
  },
};

export default function BahrainHome() {
  return <BahrainLanding locale="en" />;
}
