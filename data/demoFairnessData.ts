export type FairnessPriority = "ALTA" | "NORMAL";

export type FairnessEntry = {
  id: string;
  rank: number;
  label: string;
  posto1: number;
  posto2: number;
  posto3: number;
  posto4: number;
  rotationIndex: number;
  priority: FairnessPriority;
};

export const demoFairnessData: FairnessEntry[] = [
  {
    id: "lg1",
    rank: 1,
    label: "LG1",
    posto1: 12,
    posto2: 8,
    posto3: 10,
    posto4: 4,
    rotationIndex: 68,
    priority: "ALTA",
  },
  {
    id: "lg2",
    rank: 2,
    label: "LG2",
    posto1: 15,
    posto2: 14,
    posto3: 12,
    posto4: 6,
    rotationIndex: 92,
    priority: "NORMAL",
  },
  {
    id: "lg3",
    rank: 3,
    label: "LG3",
    posto1: 16,
    posto2: 15,
    posto3: 14,
    posto4: 8,
    rotationIndex: 100,
    priority: "NORMAL",
  },
  {
    id: "lg4",
    rank: 4,
    label: "LG4",
    posto1: 10,
    posto2: 6,
    posto3: 8,
    posto4: 2,
    rotationIndex: 54,
    priority: "ALTA",
  },
  {
    id: "lg5",
    rank: 5,
    label: "LG5",
    posto1: 14,
    posto2: 12,
    posto3: 10,
    posto4: 6,
    rotationIndex: 84,
    priority: "NORMAL",
  },
  {
    id: "lg6",
    rank: 6,
    label: "LG6",
    posto1: 11,
    posto2: 9,
    posto3: 7,
    posto4: 5,
    rotationIndex: 72,
    priority: "NORMAL",
  },
  {
    id: "lg7",
    rank: 7,
    label: "LG7",
    posto1: 13,
    posto2: 11,
    posto3: 9,
    posto4: 7,
    rotationIndex: 80,
    priority: "NORMAL",
  },
  {
    id: "lg8",
    rank: 8,
    label: "LG8",
    posto1: 9,
    posto2: 7,
    posto3: 5,
    posto4: 3,
    rotationIndex: 48,
    priority: "ALTA",
  },
];

export const fairnessTeamAverage = {
  shifts: 12.5,
  guidePercent: 9.5,
  rotationIndex: 75,
};

export const fairnessIndexScale = 100;

export function sortFairnessByPriority(entries: FairnessEntry[]) {
  return [...entries].sort((a, b) => {
    if (a.priority !== b.priority) return a.priority === "ALTA" ? -1 : 1;
    return a.rank - b.rank;
  });
}

export function fairnessRollup(entries: FairnessEntry[]) {
  return {
    high: entries.filter((entry) => entry.priority === "ALTA").length,
    avgShifts: fairnessTeamAverage.shifts,
    avgIndex: fairnessTeamAverage.rotationIndex,
    avgLead: fairnessTeamAverage.guidePercent,
  };
}
