export type FairnessPriority = "ALTA" | "NORMAL";

export type FairnessEntry = {
  id: string;
  rank: number;
  label: string;
  posts: number[];
  rotationIndex: number;
  priority: FairnessPriority;
};

export const demoFairnessData: FairnessEntry[] = [
  {
    id: "gva",
    rank: 1,
    label: "LG1",
    posts: [2, 1, 2, 1, 2, 1, 2, 1],
    rotationIndex: 68,
    priority: "ALTA",
  },
  {
    id: "gvb",
    rank: 2,
    label: "LG2",
    posts: [2, 2, 2, 2, 2, 2, 2, 1],
    rotationIndex: 92,
    priority: "NORMAL",
  },
  {
    id: "gvc",
    rank: 3,
    label: "LG3",
    posts: [2, 2, 2, 2, 2, 2, 2, 2],
    rotationIndex: 100,
    priority: "NORMAL",
  },
  {
    id: "gvd",
    rank: 4,
    label: "LG4",
    posts: [1, 2, 1, 2, 1, 1, 1, 1],
    rotationIndex: 54,
    priority: "ALTA",
  },
  {
    id: "gve",
    rank: 5,
    label: "LG5",
    posts: [2, 2, 1, 2, 2, 2, 2, 1],
    rotationIndex: 84,
    priority: "NORMAL",
  },
];

export const fairnessTeamAverage = {
  rotationIndex: 80,
};
