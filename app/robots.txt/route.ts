export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /a
Disallow: /b

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Disallow: /

Sitemap: https://pasta-personalizada-alimentos.consultorasanitaria.com.br/sitemap.xml

# Conteudo estruturado para agentes IA
# https://llmstxt.org
LLMs-Txt: https://pasta-personalizada-alimentos.consultorasanitaria.com.br/llms.txt

# Content Signals — declaracao de preferencias de uso de conteudo por IA
# Spec: https://contentsignals.org / IETF Draft
Content-Signal: ai-train=no, search=yes, ai-input=yes
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
