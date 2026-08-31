import { mapPosts, type PostId } from "@/data/demoSessions";

export type PostPlacement = {
  x: number;
  y: number;
  onMap: boolean;
};

export type PlacementMap = Record<PostId, PostPlacement>;

/** Posts that are hidden from the map by default. */
const HIDDEN_BY_DEFAULT = new Set<PostId>(["p01"]);

export function defaultPlacements(): PlacementMap {
  return Object.fromEntries(
    mapPosts.map((post) => [
      post.id,
      { x: post.x, y: post.y, onMap: !HIDDEN_BY_DEFAULT.has(post.id) },
    ]),
  ) as PlacementMap;
}

/**
 * Placements calibrated for the Bahrain wave-pool-real.webp aerial photo.
 * Positions match the reference screenshot red dots.
 *   pier  → topo-esquerda — ponta do pier/máquina de ondas
 *   p02   → topo-centro
 *   ct    → esquerda — torre de controle
 *   p04   → topo-direita
 *   p05   → direita — área verde
 *   p06   → centro-direita
 *   p03   → baixo-centro — praia
 *   p07   → baixo-direita
 *   p01   → borda esquerda da piscina (ponto vermelho esquerdo)
 *   lobby → descanso / intervalo (ponto vermelho inferior)
 */
export function bahrainPlacements(): PlacementMap {
  const overrides: Partial<Record<PostId, { x: number; y: number; onMap: boolean }>> = {
    pier:  { x: 73, y: 30, onMap: true  }, // LG1 — centro-direita
    ct:    { x: 46, y: 64, onMap: true  }, // LG3 — centro-inferior
    p04:   { x: 69, y: 50, onMap: true  }, // LG4 — centro-direita inferior
    p07:   { x: 34, y:  8, onMap: true  }, // LG8 — topo centro-esquerda
    p05:   { x: 10, y: 14, onMap: true  }, // LG5 — topo esquerda
    p06:   { x: 27, y: 52, onMap: true  }, // LG6 — esquerda inferior
    p03:   { x: 47, y: 36, onMap: true  }, // LG7 — centro (ponta da passarela)
    p02:   { x: 37, y: 22, onMap: true  }, // LG2 — topo centro (ponte/passarela)
    p01:   { x: 26, y: 38, onMap: false }, // reserva (off-map)
    lobby: { x:  6, y: 87, onMap: false }, // INT (descanso fora do mapa)
  };
  return Object.fromEntries(
    mapPosts.map((post) => {
      const override = overrides[post.id];
      return [post.id, override ?? { x: post.x, y: post.y, onMap: true }];
    }),
  ) as PlacementMap;
}

export function clampMapPercent(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function clientToMapPercent(
  clientX: number,
  clientY: number,
  rect: DOMRect,
) {
  if (rect.width === 0 || rect.height === 0) return null;
  return {
    x: clampMapPercent(((clientX - rect.left) / rect.width) * 100, 6, 94),
    y: clampMapPercent(((clientY - rect.top) / rect.height) * 100, 10, 90),
  };
}
