import { headers, cookies } from "next/headers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BottomPromoBar from "@/components/BottomPromoBar";
import ClientesCarrossel from "@/components/ClientesCarrossel";
import Dor from "@/components/Dor";
import Solucao from "@/components/Solucao";
import ComoFunciona from "@/components/ComoFunciona";
import ParaQuemE from "@/components/ParaQuemE";
import Planos from "@/components/Planos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function Home() {
  const headersList = await headers();
  const cookiesList = await cookies();
  
  // Obter a versão A/B do header (primeiro acesso) ou do cookie (acessos subsequentes)
  const abVersion = headersList.get("x-ab-test-version") || cookiesList.get("ab-test-version")?.value || "A";

  // Schema Markup JSON-LD para indexador do Google e motores de busca IA (GEO)
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br/#product",
    "name": "Pasta Sanitária Personalizada",
    "image": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br/logo.webp",
    "description": "Manual de Boas Práticas, POPs e planilhas operacionais 100% personalizados por nutricionista consultora especializada para evitar multas da Vigilância Sanitária.",
    "brand": {
      "@type": "Brand",
      "name": "Ana Roberta | Consultora Nutricionista"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "497.00",
      "highPrice": "857.00",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Pasta Digital",
          "price": "497.00",
          "priceCurrency": "BRL",
          "url": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br/#planos"
        },
        {
          "@type": "Offer",
          "name": "Física P&B + Digital",
          "price": "697.00",
          "priceCurrency": "BRL",
          "url": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br/#planos"
        },
        {
          "@type": "Offer",
          "name": "Física Colorida + Digital",
          "price": "857.00",
          "priceCurrency": "BRL",
          "url": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br/#planos"
        }
      ]
    }
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br/#business",
    "name": "Ana Roberta | Consultora Nutricionista",
    "image": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br/logo.webp",
    "url": "https://pasta-sanitaria-alimentos.consultorasanitaria.com.br",
    "telephone": "+5521990313823",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "HUB TreinaVISA"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productJsonLd, businessJsonLd]),
        }}
      />
      <Navbar />
      <main>
        <Hero abVersion={abVersion} />
        <ClientesCarrossel />
        <Dor />
        <Solucao />
        <ComoFunciona />
        <ParaQuemE />
        <Planos abVersion={abVersion} />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomPromoBar />
    </>
  );
}
