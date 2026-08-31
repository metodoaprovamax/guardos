export type OperatorMark = {
  id: string;
  name: string;
  logoSrc?: string;
  href?: string;
  comingSoon?: boolean;
};

export type PendingSlot = {
  id: string;
  pending: true;
};

export type ProofVoice = {
  id: string;
  name: string;
  organization: string;
  photoSrc: string;
};

export const proofData = {
  /** No photo slot — coordinator's real photo pending approval. */
  photoSrc: null as string | null,
  name: "Benjamin Orlando",
  organization: "Surfland Brasil",
} as const;

export const operators: Array<OperatorMark | PendingSlot> = [
  { id: "surfland", name: "Surfland Brasil" },
];

export const comingSoonOperators: OperatorMark[] = [
  {
    id: "garopaba",
    name: "Garopaba Baywatch",
    href: "/app/garopaba",
    comingSoon: true,
  },
];

export const voices: Array<ProofVoice | PendingSlot> = [
  {
    id: "benjamin",
    name: proofData.name,
    organization: proofData.organization,
    photoSrc: "", // real photo pending — use initials avatar
  },
  { id: "voice-2", pending: true },
];

export function isPending(
  item: OperatorMark | ProofVoice | PendingSlot,
): item is PendingSlot {
  return "pending" in item && item.pending === true;
}
