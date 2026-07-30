# lp-pasta-personalizada-alimentos — Landing Page (linha da Ana)

> Doc de orientação para o agente desta LP. Convenções **obrigatórias** (resumo; detalhe em
> [`../CONVENTIONS.md`](../CONVENTIONS.md) e [`../TRACKING.md`](../TRACKING.md)).

## Grupo de tracking: **ANA**
- Meta Pixel `1429926872242671` · Google Ads `AW-18030262622` · GA4 `G-L1SR8V2ECY`. Slug: `alimentos`.

## Convenções (obrigatórias — resumo)
- **A/B multivariante:** `experiment.config.ts` → middleware genérico N-way (rewrite, URL `/`) → `app/[variant]`.
- **Conteúdo sem duplicação:** seções em `components/sections/`, dados em `lib/content/`.
- **Imagens:** só `.webp` (SVG mantém); pre-commit hook (`../_tooling/`). `images.unoptimized: true`; `vercel.json` cache imutável.
- **next.config:** remover `ignoreBuildErrors`/`eslint.ignoreDuringBuilds`; manter `images.unoptimized: true`.
- **Tracking:** via `lib/tracking.ts`. Checkout → **`sck=alimentos|<variante>`** (pipe, sem `_`, ≤30 chars);
  origem paga nos UTMs; `src` não no checkout; variante em `ab_variant`; proibido variante em `utm_content`.
- **Sem GTM:** `gtag`/`fbq` direto. **Meta IA:** `<meta name="llms:description">`. **Identidade:** `lib/content/business.ts`.
- **Commits / deploy Vercel (aprendido na `lp-vistoria`):** o commit **precisa** sair como
  `EsterSouza <esterposte@hotmail.com>` — senão a **Vercel bloqueia o deploy** (a identidade Git tem
  que bater com a conta conectada). Push via alias SSH `github.com-github2`. Imagem em `public/`:
  `.webp` **real**, **nunca symlink** (quebra o build). Não subir major de framework às cegas — a
  vistoria fixou **Next 15.2.8** após CVE de RSC. Detalhe em [`../CONVENTIONS.md`](../CONVENTIONS.md) §2.1.

## Pendências para o agente atualizar
- **Git identity do repo (unset hoje):** setar `user.name`/`user.email` = conta da Ester
  (`EsterSouza <esterposte@hotmail.com>`) antes de commitar — senão a Vercel recusa o deploy.
- **Unificar o A/B:** hoje é header-based (`x-ab-test-version` → prop `abVersion`), **sem rotas** →
  migrar p/ `experiment.config.ts` + rota `app/[variant]`. **Remover o `api/ab.js` órfão** (cookie
  `ab-variant`, redireciona p/ `/a/ /b/` inexistentes) e o fluxo estático legado (`b/index.html`).
- **Produtos divergentes:** o app vende `A106157606C`/`A106162381P`/`Q106162166E`; o `b/index.html`
  legado vende `H104875140X` (outro produto). Unificar no catálogo do app.
- **Tracking:** unir `components/pixel.ts` no `lib/tracking.ts`. Hoje usa `src=...|ab_A/B` no `pay`
  (off-spec) e `ab_version` → migrar p/ **`sck=alimentos|<variante>`** e `ab_variant`. Padronizar o
  evento de conversão (app conta `begin_checkout`; estático conta `conversion` — divergem).
- **Imagens:** limpar os ~22 rasters gigantes soltos na raiz (`hero.png` 5,7 MB, `BLOCO A SOLUÇÃO.png`
  5,7 MB, screencaptures 3–5 MB — lixo do HTML antigo) e `*.html.old`/`v3_build.py`; converter `public/`
  p/ WebP (o app já referencia `.webp`); instalar hook.
- **next.config** (hoje CommonJS `next.config.js`, `unoptimized:true`): manter `unoptimized` + rigor.
- **`vercel.json`:** já tem cache imutável ✅ (referência para as outras).
