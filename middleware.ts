// Middleware A/B generico — NAO editar por variante. Dirigido por experiment.config.ts.
// Ver ../CONVENTIONS.md §1.2. Rewrite (URL fica "/"); split N-way ponderado; respeita ?v=.
// Markdown negotiation: Accept: text/markdown → retorna conteudo markdown para agentes IA.

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { experiment, VARIANT_IDS, pickVariant } from "./experiment.config"

// Conteudo markdown para agentes IA (mesmo de public/llms.txt).
// Precos/checkout aqui sao duplicacao assumida — fonte de verdade em lib/content/offers.ts.
const MARKDOWN_CONTENT = `# Consultora Sanitaria — Pasta Sanitaria Personalizada para Alimentacao

> Documentacao operacional sob medida (Manual de Boas Praticas, POPs e
> planilhas) para regularizar seu servico de alimentacao junto a Vigilancia
> Sanitaria. Por Ana Roberta, Consultora Nutricionista.

## Produto

- Nome: Pasta Sanitaria Personalizada para Servicos de Alimentacao
- Formato: Documentacao personalizada (digital e/ou fisica impressa)
- Entrega: ate 15 dias uteis apos preenchimento do formulario de diagnostico
- Entrega fisica: + 3 a 5 dias via transportadora, frete gratis
- Garantia: 7 dias, reembolso incondicional

### Planos

- Pasta Digital: R$ 497 (12x R$ 51,40)
  - Checkout: https://pay.hotmart.com/A106157606C?checkoutMode=10
  - Inclui: PDF + arquivos editaveis em Word, entrega via nuvem (Google Drive ou OneDrive)

- Fisica P&B + Digital: R$ 697 (12x R$ 72,09)
  - Checkout: https://pay.hotmart.com/A106162381P
  - Inclui: tudo do digital + impressao P&B profissional + pasta catalogo + frete gratis

- Fisica Colorida + Digital: R$ 857 (12x R$ 88,63)
  - Checkout: https://pay.hotmart.com/Q106162166E
  - Inclui: tudo do digital + impressao colorida premium + pasta catalogo + frete gratis

## O que e

Pasta Sanitaria Personalizada — Manual de Boas Praticas, POPs (Procedimentos
Operacionais Padronizados) e planilhas operacionais elaborados sob medida para
o estabelecimento do cliente por nutricionista consultora. Os documentos seguem
a RDC ANVISA 216/2004 e demais legislacoes aplicaveis, adaptados as exigencias
estaduais e municipais da regiao do cliente.

## Como funciona

1. Compra do plano — checkout online seguro via Hotmart (cartao, PIX ou boleto)
2. Preenchimento do formulario de diagnostico com dados do estabelecimento
3. Elaboracao — a nutricionista consultora monta a documentacao personalizada
4. Entrega digital em ate 15 dias uteis; fisica com frete gratis em 3-5 dias adicionais

## Publico-alvo

Restaurantes, padarias, deliveries, dark kitchens, buffets, mercearias,
hospitais, cozinhas industriais e qualquer servico de alimentacao sujeito
a fiscalizacao da Vigilancia Sanitaria. Valido para todo o Brasil.

## Autora

- Nome: Ana Roberta
- Titulo: Nutricionista Consultora
- Especialidade: Documentacao sanitaria para servicos de alimentacao
- Marca: Consultora Sanitaria (linha de alimentos)

## FAQ

### A documentacao e aceita pela Vigilancia Sanitaria?
Sim. Elaborada com base nas normas federais (RDC ANVISA 216/2004) e adaptada
as exigencias estaduais e municipais do estabelecimento.

### O servico vale para todo o Brasil?
Sim. A equipe faz o levantamento das normas locais para garantir que a pasta
atenda aos requisitos especificos da regiao.

### Posso editar os documentos depois?
Sim. Os arquivos sao entregues em Word (editaveis) alem da versao em PDF.

### E se eu precisar de ajuste?
1 revisao esta incluida durante o processo de elaboracao.

### Qual o prazo de entrega?
Ate 15 dias uteis apos o preenchimento do formulario de diagnostico.

### Como recebo a documentacao?
Via Google Drive ou OneDrive. Se contratou a pasta fisica, ela e enviada
por transportadora com frete gratis.

### Como funciona o pagamento?
Checkout seguro da Hotmart. Aceita cartao de credito, PIX e boleto bancario.

## Contato

- WhatsApp: https://wa.me/5521990313823
- Email: contato@consultorasanitaria.com.br
- Site: https://pasta-personalizada-alimentos.consultorasanitaria.com.br
- Empresa: HUB TREINAVISA SERVICOS LTDA
- CNPJ: 53.297.694/0001-37
- Endereco: Av. Embaixador Abelardo Bueno, 1, Sala 153-D, Ed. Lagoa,
  Rio de Janeiro, RJ, 22775-022, Brasil
`

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? ""
  if (accept.includes("text/markdown")) {
    return new NextResponse(MARKDOWN_CONTENT, {
      headers: { "Content-Type": "text/markdown; charset=utf-8" },
    })
  }

  const url = request.nextUrl
  const forced = url.searchParams.get("v")
  const envForced = process.env.FORCE_VARIANT
  const cookieVal = request.cookies.get(experiment.cookie)?.value

  let variant: string
  let setCookie = false

  if (forced && VARIANT_IDS.includes(forced)) {
    variant = forced
    setCookie = true // forca de QA tambem fixa o cookie
  } else if (envForced && VARIANT_IDS.includes(envForced)) {
    variant = envForced
  } else if (cookieVal && VARIANT_IDS.includes(cookieVal)) {
    variant = cookieVal
  } else {
    variant = pickVariant(Math.random())
    setCookie = true
  }

  const rewriteUrl = url.clone()
  rewriteUrl.pathname = `/${variant}` // preserva url.search (UTMs)

  const res = NextResponse.rewrite(rewriteUrl)
  if (setCookie) {
    res.cookies.set(experiment.cookie, variant, {
      maxAge: experiment.maxAgeDays * 24 * 60 * 60,
      path: "/",
    })
  }
  return res
}

export const config = { matcher: ["/"] }
