# lp-pasta-personalizada-alimentos — Pasta Sanitaria Personalizada (Alimentacao)

Landing page da **Consultora Sanitaria** (linha da Ana) para a **Pasta Sanitaria Personalizada
para Servicos de Alimentacao**: documentacao operacional sob medida (Manual de Boas Praticas,
POPs e planilhas) elaborada por nutricionista consultora.

- **Stack:** Next.js 15 (App Router) · React 19 · Tailwind v4 · framer-motion · deploy **Vercel**
- **Fontes:** Outfit (heading) + DM Sans (corpo)
- **Dominio:** `https://pasta-personalizada-alimentos.consultorasanitaria.com.br`
- **Tracking (grupo Ana):** Meta `1429926872242671` · Google Ads `AW-18030262622` · GA4 `G-L1SR8V2ECY` (sem GTM)
- **Produtos Hotmart:**
  - Digital `A106157606C` — R$ 497 (12x R$ 51,40)
  - Fisica P&B `A106162381P` — R$ 697 (12x R$ 72,09)
  - Fisica Colorida `Q106162166E` — R$ 857 (12x R$ 88,63)

## Rodando local

```bash
bun install
bun run dev
# http://localhost:3000  (use ?v=a / ?v=b para forcar a variante)
```

Para o build de producao: `bun run build`.

## Teste A/B

`experiment.config.ts` e a fonte de verdade (a/b 50/50, campea `a`). As variantes ficam em
`app/[variant]/variants/a.tsx` e `b.tsx`, composicoes finas do componente compartilhado
`components/PastaLanding.tsx` com a prop `abVersion`.

Middleware sorteia e fixa no cookie `ab-alimentos`. `?v=a|b` forca em QA.

## Tracking / checkout

Tudo por **`lib/tracking.ts`**: checkout com `sck=alimentos|<variante>` (atribuicao na aba SCK do
Dashboard de Origem de Vendas da Hotmart; pipe, sem `_`, <=30 chars) + UTMs de origem. Tags
`gtag`/`fbq` direto (sem GTM); pixel/Ads em `lib/content/tracking-ids.ts`. **Nunca** hardcodar
checkout fora de `lib/content/offers.ts`.

## Imagens

So `.webp` em `public/` (servidas direto; `images.unoptimized`). Pre-commit hook converte
rasters automaticamente via `scripts/to-webp.mjs` + lint-staged.

## Commits

Todo commit deste repo deve usar a conta da **Ester** — `EsterSouza <esterposte@hotmail.com>` —
senao a Vercel bloqueia o deploy. Push via alias SSH `github.com-github2`.

---
Convencoes do portfolio: `../CONVENTIONS.md` · Estado/decisoes: `CLAUDE.md`.
