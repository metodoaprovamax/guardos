import type { Locale } from "@/i18n";

export const bahrainCopy = {
  en: {
    titleA: "The real threat",
    titleB: "is in the fatigue.",
    body: "In the office, the spreadsheet or whiteboards seemed perfect. But pool-side, under the hot sun and water glare, fatigue sets in and zone blindness happens. GuardOS automates safety rotations and monitors lifeguard physical fatigue in real time.",
    tracking:
      "Because when a swimmer goes under, the crucial seconds of response time determine everything.",
    imageAlt: "Aerial view of a wave-pool operation",
  },
  pt: {
    titleA: "A verdadeira ameaça",
    titleB: "está na fadiga.",
    body: "No escritório, a planilha ou o quadro branco de escalas pareciam perfeitos. Mas na beira da piscina, sob o sol forte e reflexo da água, a fadiga se instala e a cegueira de zona acontece. O GuardOS automatiza rodízios e monitora a fadiga física em tempo real.",
    tracking:
      "Porque quando um banhista afunda, os segundos cruciais de tempo de resposta determinam tudo.",
    imageAlt: "Vista aérea de uma operação de piscina de ondas",
  },
} as const;

export function bahrainText(locale: Locale) {
  return bahrainCopy[locale];
}
