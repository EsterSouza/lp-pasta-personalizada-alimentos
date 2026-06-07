"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { trackInitiateCheckout, getHotmartUrlWithUtms } from "./pixel";

export default function Planos({ abVersion = "A" }: { abVersion?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlanClick = (value: number, name: string) => {
    trackInitiateCheckout(value, name);
  };

  const scrollReveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const planos = [
    {
      id: "digital",
      name: "Pasta Digital",
      highlight: false,
      priceCashFormatted: "ou R$ 497,00 à vista",
      installmentText: "12x de R$ 51,40",
      url: "https://pay.hotmart.com/A106157606C?checkoutMode=10",
      features: [
        "Todos os documentos em PDF",
        "Arquivos 100% editáveis em Word",
        "Entrega via nuvem (Google Drive ou OneDrive)",
        "Personalizado com os dados do seu estabelecimento",
        "Prazo: até 15 dias úteis",
      ],
      ctaText: "Quero a Pasta Digital",
    },
    {
      id: "pb",
      name: "Física P&B + Digital",
      highlight: true,
      priceCashFormatted: "ou R$ 697,00 à vista",
      installmentText: "12x de R$ 72,09",
      url: "https://pay.hotmart.com/A106162381P",
      features: [
        "Todos os documentos em PDF",
        "Arquivos 100% editáveis em Word",
        "Entrega via nuvem (Google Drive ou OneDrive)",
        "Personalizado com os dados do seu estabelecimento",
        "Impressão P&B profissional",
        "Pasta catálogo inclusa",
        "Frete grátis para todo o Brasil",
        "Prazo: até 15 dias úteis + 3 a 5 dias de entrega",
      ],
      ctaText: "Quero a Pasta Física P&B",
    },
    {
      id: "colorida",
      name: "Física Colorida + Digital",
      highlight: false,
      priceCashFormatted: "ou R$ 857,00 à vista",
      installmentText: "12x de R$ 88,63",
      url: "https://pay.hotmart.com/Q106162166E",
      features: [
        "Todos os documentos em PDF",
        "Arquivos 100% editáveis em Word",
        "Entrega via nuvem (Google Drive ou OneDrive)",
        "Personalizado com os dados do seu estabelecimento",
        "Impressão colorida premium",
        "Pasta catálogo inclusa",
        "Frete grátis para todo o Brasil",
        "Prazo: até 15 dias úteis + 3 a 5 dias de entrega",
        "Máximo de profissionalismo na apresentação",
      ],
      ctaText: "Quero a Pasta Colorida",
    },
  ];

  return (
    <section id="planos" className="bg-bg-alt py-20 border-b border-border">
      {/* aria-label placeholder */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scrollReveal}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Planos
          </span>
          <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] text-text-primary font-semibold">
            Escolha como quer receber sua Pasta Sanitária
          </h2>
        </motion.div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">
          {planos.map((plano) => {
            return (
              <motion.div
                key={plano.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative bg-bg rounded-[12px] p-8 flex flex-col justify-between border ${
                  plano.highlight
                    ? "border-green-cta lg:scale-[1.04] z-10"
                    : "border-border"
                }`}
                style={
                  plano.highlight
                    ? {
                        boxShadow: "0 20px 50px rgba(26, 122, 74, 0.12)",
                      }
                    : {
                        boxShadow: "0 10px 30px rgba(45, 74, 62, 0.04)",
                      }
                }
              >
                {/* Badge de Destaque */}
                {plano.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white font-sans text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                    Mais popular
                  </span>
                )}

                <div>
                  {/* Nome do Plano */}
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-4 text-center">
                    {plano.name}
                  </h3>

                  {/* Preços - Parcelado em destaque grande, à vista pequeno */}
                  <div className="text-center mb-6 py-4 border-b border-border">
                    <div className="font-heading text-[32px] md:text-[36px] font-extrabold text-green-cta leading-none mb-2">
                      {plano.installmentText}
                    </div>
                    <div className="font-sans text-sm md:text-base text-text-secondary font-medium mt-1">
                      {plano.priceCashFormatted}
                    </div>
                  </div>

                  {/* Lista de Features */}
                  <ul className="space-y-3.5 mb-8">
                    {plano.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-text-secondary leading-normal font-sans"
                      >
                        <span className="text-green-cta flex-shrink-0 mt-0.5">•</span>
                        <span dangerouslySetInnerHTML={{
                          __html: feature
                            .replace("PDF", "<strong>PDF</strong>")
                            .replace("Word", "<strong>Word</strong>")
                            .replace("Frete grátis", "<strong class='text-green-deep'>Frete grátis</strong>")
                            .replace("Impressão P&B profissional", "<strong>Impressão P&B profissional</strong>")
                            .replace("Impressão colorida premium", "<strong>Impressão colorida premium</strong>")
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão de Compra - Dourado e destacado para todos */}
                <div>
                  <motion.a
                    href={mounted ? getHotmartUrlWithUtms(plano.url) : plano.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePlanClick(plano.id === "digital" ? 497 : plano.id === "pb" ? 697 : 857, plano.name)}
                    animate={plano.highlight && !shouldReduceMotion ? {
                      scale: [1, 1.03, 1],
                      boxShadow: [
                        "0 4px 10px rgba(196, 137, 58, 0.2)",
                        "0 8px 20px rgba(196, 137, 58, 0.4)",
                        "0 4px 10px rgba(196, 137, 58, 0.2)"
                      ]
                    } : {}}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center bg-gold hover:bg-[#b0782f] text-white text-xs md:text-sm font-bold py-4 rounded-[8px] uppercase tracking-wider transition-colors duration-200 shadow-sm"
                  >
                    {plano.ctaText}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco de Garantia de 7 Dias */}
        <div className="max-w-3xl mx-auto bg-green-light border border-gold/30 rounded-[12px] p-6 mb-12 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-base font-bold text-text-primary mb-1">
              Garantia Incondicional de 7 Dias
            </h4>
            <p className="font-sans text-xs md:text-sm text-text-secondary leading-relaxed">
              Fique 100% satisfeito ou peça seu dinheiro de volta. Se por qualquer motivo você achar que a Pasta Sanitária Personalizada não atende às necessidades do seu estabelecimento, basta solicitar o reembolso em até 7 dias após a compra. Sem burocracia.
            </p>
          </div>
        </div>

        {/* Selos de Garantia / Segurança - Sem emoticons */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-text-muted text-xs font-sans font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Checkout seguro pela Hotmart
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Acesso vitalício
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            1 revisão incluída
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Entrega digital e/ou física
          </span>
        </div>
      </div>
    </section>
  );
}
