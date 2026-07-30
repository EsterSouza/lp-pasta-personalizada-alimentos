import { business } from "@/lib/content/business"
import { OFFER_LIST, PRICING } from "@/lib/content/offers"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BottomPromoBar from "@/components/BottomPromoBar"
import ClientesCarrossel from "@/components/ClientesCarrossel"
import Dor from "@/components/Dor"
import Solucao from "@/components/Solucao"
import ComoFunciona from "@/components/ComoFunciona"
import ParaQuemE from "@/components/ParaQuemE"
import Planos from "@/components/Planos"
import FAQ from "@/components/FAQ"
import CTAFinal from "@/components/CTAFinal"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function PastaLanding({ abVersion = "a" }: { abVersion?: string }) {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${business.url}/#product`,
    "name": "Pasta Sanitária Personalizada",
    "image": business.logo,
    "description": "Manual de Boas Práticas, POPs e planilhas operacionais 100% personalizados por nutricionista consultora especializada para evitar multas da Vigilância Sanitária.",
    "brand": {
      "@type": "Brand",
      "name": business.brand.name,
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": PRICING.currency,
      "lowPrice": PRICING.lowPrice,
      "highPrice": PRICING.highPrice,
      "offerCount": String(OFFER_LIST.length),
      "offers": OFFER_LIST.map((o) => ({
        "@type": "Offer",
        "name": o.name,
        "price": String(o.price) + ".00",
        "priceCurrency": PRICING.currency,
        "url": `${business.url}/#planos`,
      })),
    },
  }

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${business.url}/#business`,
    "name": business.brand.name,
    "image": business.logo,
    "url": business.url,
    "telephone": business.phone,
    "taxID": business.cnpj,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${business.address.street}, ${business.address.complement}`,
      "addressLocality": business.address.city,
      "addressRegion": business.address.state,
      "postalCode": business.address.postalCode,
      "addressCountry": business.address.country,
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": business.brand.parent,
    },
  }

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
        <Planos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomPromoBar />
    </>
  )
}
