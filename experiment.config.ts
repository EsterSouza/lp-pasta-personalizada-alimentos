// Config do experimento A/B — UNICA fonte de verdade. Ver CLAUDE.md / ../CONVENTIONS.md §1.
//
// Adicionar variante = +1 linha aqui. Promover campea = trocar `champion`. Apagar = remover a linha.

export const experiment = {
  cookie: "ab-alimentos",
  maxAgeDays: 30,
  champion: "a",
  variants: [
    { id: "a", weight: 50 },
    { id: "b", weight: 50 },
  ],
} as const

export const VARIANT_IDS: string[] = experiment.variants.map((v) => v.id)

// sorteio ponderado N-way — deterministico dado um numero em [0,1)
export function pickVariant(rand: number): string {
  const total = experiment.variants.reduce((s, v) => s + v.weight, 0)
  let acc = 0
  for (const v of experiment.variants) {
    acc += v.weight / total
    if (rand < acc) return v.id
  }
  return experiment.champion
}
