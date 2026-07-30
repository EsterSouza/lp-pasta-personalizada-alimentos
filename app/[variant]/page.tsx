import { notFound } from "next/navigation";
import { experiment } from "@/experiment.config";
import { business } from "@/lib/content/business";
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

export function generateStaticParams() {
  return experiment.variants.map((v) => ({ variant: v.id }));
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;

  const validIds = experiment.variants.map((v) => v.id);
  if (!validIds.includes(variant)) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${business.url}/#product`,
    "name": "Pasta Sanitária Personalizada",
    "image": business.logo,
    "description": "Manual de Boas Práticas, POPs e planilhas operacionais 100% personalizados por nutricionista consultora especializada para evitar multas da Vigilância Sanitária.",
    "brand": {
      "@type": "Brand",
      "name": business.brand.name
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
          "url": `${business.url}/#planos`
        },
        {
          "@type": "Offer",
          "name": "Física P&B + Digital",
          "price": "697.00",
          "priceCurrency": "BRL",
          "url": `${business.url}/#planos`
        },
        {
          "@type": "Offer",
          "name": "Física Colorida + Digital",
          "price": "857.00",
          "priceCurrency": "BRL",
          "url": `${business.url}/#planos`
        }
      ]
    }
  };

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
      "addressCountry": business.address.country
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": business.brand.parent
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
        <Hero abVersion={variant} />
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
  );
}
