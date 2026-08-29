"use client";

import type { GuardAssignment, PostId } from "@/data/demoRotationData";
import { rotationPosts } from "@/data/demoRotationData";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/cn";

const ALL_GUARDS = [
  { initials: "LS", name: "Leonardo Souza" },
  { initials: "MR", name: "Marcos Ribeiro" },
  { initials: "JP", name: "João Pedro" },
  { initials: "TZ", name: "Thiago Zani" },
  { initials: "RC", name: "Rafael Costa" },
  { initials: "AA", name: "Ana Alves" },
  { initials: "BN", name: "Bruno Nunes" },
  { initials: "AR", name: "Amanda Reis" },
];

const GUARD_TO_LG: Record<string, string> = {
  LS: "LG1",
  MR: "LG2",
  JP: "LG3",
  TZ: "LG4",
  RC: "LG5",
  AA: "LG6",
  BN: "LG7",
  AR: "LG8",
};

export function PoolDiagram({
  assignments,
  compact = false,
}: {
  assignments: Record<PostId, GuardAssignment>;
  compact?: boolean;
}) {
  const { t } = useI18n();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-[#0a2c36] w-full aspect-[16/9]",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/guardos/wave-pool-real.webp"
        alt="Mapa da piscina de ondas real"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* 1. Static Post Labels (Empty slots on the map) */}
      {rotationPosts.map((post) => (
        <div
          key={`label-${post.id}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ left: `${post.x}%`, top: `${post.y}%` }}
        >
          <div
            className={cn(
              "mx-auto rounded-full border border-white/20 bg-black/40",
              compact ? "h-7 w-7" : "h-8 w-8 sm:h-9 sm:w-9",
            )}
          />
          <p
            className={cn(
              "mt-1 font-semibold tracking-[0.14em] text-white/50",
              compact ? "text-[8px]" : "text-[9px]",
            )}
          >
            {post.label}
          </p>
        </div>
      ))}

      {/* 2. Dynamic Moving Lifeguards (Avatars that slide to assigned posts) */}
      {ALL_GUARDS.map((guard) => {
        // Find if this guard is assigned to any post in current session
        const assignedPostId = (Object.keys(assignments) as PostId[]).find(
          (key) => assignments[key].initials === guard.initials
        );
        
        // Find if the post is in the visible rotationPosts list
        const post = rotationPosts.find((p) => p.id === assignedPostId);
        
        // Coords: post coords if active/visible, otherwise slide to rest area
        const x = post ? post.x : 50;
        const y = post ? post.y : 90;
        const isOnDuty = !!post;

        const femaleInitials = ["AA", "AR"];
        const isFemale = femaleInitials.includes(guard.initials);
        const avatarUrl = isFemale ? "/images/avatar-f.jpg" : "/images/avatar-m.jpg";

        return (
          <div
            key={guard.initials}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-[800ms] ease-in-out z-20"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className={cn(
                "mx-auto grid place-items-center rounded-full border font-semibold text-white transition-all duration-300 overflow-hidden",
                compact
                  ? "h-7 w-7 text-[9px]"
                  : "h-8 w-8 text-[10px] sm:h-9 sm:w-9 sm:text-[11px]",
                !isOnDuty
                  ? "border-white/10 bg-white/5 opacity-40 scale-75"
                  : "border-cyan bg-[#0c2744] shadow-[0_0_12px_rgba(0,168,181,0.4)] ring-2 ring-cyan/20",
              )}
            >
              <img
                src={avatarUrl}
                alt={guard.initials}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-[9px] font-bold text-white/80 mt-0.5">
              {GUARD_TO_LG[guard.initials] || guard.initials}
            </p>
          </div>
        );
      })}

      {/* Rest Zone Label at bottom */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
        <span className="rounded-full bg-black/55 border border-white/10 px-2.5 py-0.5 text-[8px] font-semibold tracking-wider text-white/50 uppercase backdrop-blur-sm">
          Intervalo / Apoio
        </span>
      </div>
    </div>
  );
}
