"use client";

import { useEffect, useState } from "react";
import { DemoNote } from "@/components/DemoNote";
import { PoolDiagram } from "@/components/PoolDiagram";
import { demoRotationData } from "@/data/demoRotationData";
import { useI18n } from "@/lib/i18n-context";

export function RotationMap() {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState(demoRotationData[0].id);

  // Auto-rotate sessions every 3 seconds to demonstrate the rotation feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = demoRotationData.findIndex((item) => item.id === currentId);
        const nextIndex = (currentIndex + 1) % demoRotationData.length;
        return demoRotationData[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const session =
    demoRotationData.find((item) => item.id === activeId) ?? demoRotationData[0];

  return (
    <div className="console-surface overflow-hidden rounded-[20px] border border-white/8 text-white">
      <div className="flex flex-col gap-5 border-b border-white/8 px-5 py-6 sm:px-6">
        <div>
          <p className="kicker text-cyan">{t.map.kicker}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
            {t.map.title}
          </h3>
          <p className="mt-1 text-sm text-white/55">{t.map.body}</p>
        </div>
      </div>

      <div className="p-5 lg:p-6">
        <PoolDiagram assignments={session.assignments} />
      </div>
      <div className="px-5 pb-4 sm:px-6">
        <DemoNote className="text-white/35" />
      </div>
    </div>
  );
}
