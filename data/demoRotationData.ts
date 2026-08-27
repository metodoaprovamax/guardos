export type PostId =
  | "pier"
  | "p01"
  | "p02"
  | "p03"
  | "p04"
  | "p05"
  | "p06"
  | "ct"
  | "lobby";

export type GuardAssignment = {
  initials: string;
  name: string;
};

export type RotationPost = {
  id: PostId;
  label: string;
  x: number;
  y: number;
};

export type SessionKind = "history" | "live" | "next";

export type RotationSession = {
  id: number;
  kind: SessionKind;
  label: string;
  time: string;
  team: string;
  covered: number;
  total: number;
  note?: string;
  assignments: Record<PostId, GuardAssignment>;
};

export const rotationPosts: RotationPost[] = [
  { id: "pier", label: "PIER", x: 36, y: 28 },
  { id: "p02", label: "02", x: 15, y: 25 },
  { id: "p03", label: "03", x: 31, y: 60 },
  { id: "p04", label: "04", x: 35, y: 17 },
  { id: "p05", label: "05", x: 53, y: 44 },
  { id: "p06", label: "06", x: 74, y: 32 },
];

export const demoRotationData: RotationSession[] = [
  {
    id: 1,
    kind: "history",
    label: "Sessão 01",
    time: "09:00 → 10:30",
    team: "Equipe A",
    covered: 8,
    total: 8,
    note: "Abertura · café 09:00",
    assignments: {
      pier: { initials: "LS", name: "LS" },
      p01: { initials: "MR", name: "MR" },
      p02: { initials: "JP", name: "JP" },
      p03: { initials: "TZ", name: "TZ" },
      p04: { initials: "RC", name: "RC" },
      p05: { initials: "AA", name: "AA" },
      p06: { initials: "BN", name: "BN" },
      ct: { initials: "AR", name: "AR" },
      lobby: { initials: "—", name: "Intervalo" },
    },
  },
  {
    id: 2,
    kind: "live",
    label: "Sessão 02",
    time: "10:30 → 12:00",
    team: "Equipe A",
    covered: 8,
    total: 8,
    note: "Intervalos escalonados",
    assignments: {
      pier: { initials: "MR", name: "MR" },
      p01: { initials: "LS", name: "LS" },
      p02: { initials: "TZ", name: "TZ" },
      p03: { initials: "JP", name: "JP" },
      p04: { initials: "AA", name: "AA" },
      p05: { initials: "RC", name: "RC" },
      p06: { initials: "AR", name: "AR" },
      ct: { initials: "BN", name: "BN" },
      lobby: { initials: "—", name: "Almoço" },
    },
  },
  {
    id: 3,
    kind: "next",
    label: "Sessão 03",
    time: "13:30 → 15:00",
    team: "Equipe A",
    covered: 8,
    total: 8,
    note: "Retorno do almoço",
    assignments: {
      pier: { initials: "JP", name: "JP" },
      p01: { initials: "AA", name: "AA" },
      p02: { initials: "MR", name: "MR" },
      p03: { initials: "RC", name: "RC" },
      p04: { initials: "TZ", name: "TZ" },
      p05: { initials: "BN", name: "BN" },
      p06: { initials: "LS", name: "LS" },
      ct: { initials: "AR", name: "AR" },
      lobby: { initials: "—", name: "Intervalo" },
    },
  },
];
