// IDs de tracking por GRUPO (linha de negocio). Ver ../../CLAUDE.md e ../../../TRACKING.md.
// Separacao intencional — NAO consolidar Ester e Ana.

export const TRACKING_GROUPS = {
  ester: {
    label: "Ester",
    metaPixelId: "1573989199955202",
    googleAdsId: "AW-16927894187",
    ga4Id: null as string | null,
  },
  ana: {
    label: "Ana",
    metaPixelId: "1429926872242671",
    googleAdsId: "AW-18030262622",
    ga4Id: "G-L1SR8V2ECY",
  },
} as const

// Esta LP e do grupo Ana (linha de alimentos)
export const GROUP = TRACKING_GROUPS.ana
