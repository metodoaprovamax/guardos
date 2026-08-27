export type ProofMetric = {
  id: string;
  value: string | null;
  label: string;
};

export const proofData = {
  eyebrow: "Prova real",
  headline: "GuardOS já opera no Surfland Brasil.",
  body: "Garopaba/SC — o mesmo sistema apresentado aqui roda a operação diária de guarda-vidas.",
  imageSrc: "/images/surfland-real-aerial.webp",
  imageAlt: "Fotografia aérea da piscina de ondas da Surfland Brasil em Garopaba/SC",
  metrics: [
    {
      id: "months",
      value: "6",
      label: "meses em operação contínua",
    },
    {
      id: "guards",
      value: "24",
      label: "guarda-vidas gerenciados",
    },
    {
      id: "rotations",
      value: "5",
      label: "rodízios gerados por dia",
    },
  ] satisfies ProofMetric[],
  testimonial: {
    quote: "A verdadeira ameaça em uma piscina de ondas não está na água. Está na fadiga. O GuardOS foi criado para eliminar o improviso na beira da piscina e garantir que a equipe esteja sempre alerta e descansada quando cada segundo importa.",
    name: "Benjamin Orlando",
    role: "Coordenador de Segurança e Idealizador",
    organization: "Surfland Brasil",
  },
};
