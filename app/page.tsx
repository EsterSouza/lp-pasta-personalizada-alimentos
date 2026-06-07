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

  return (
    <>
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
