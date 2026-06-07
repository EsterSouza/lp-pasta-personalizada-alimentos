"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Dor() {
  const shouldReduceMotion = useReducedMotion();

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

  const cards = [
    {
      title: "Risco de autuação",
      text: "Documentação genérica é um dos principais motivos de autuação. O fiscal percebe quando o documento não foi feito para aquele estabelecimento.",
    },
    {
      title: "Horas perdidas sem resultado",
      text: "Adaptar template é mais difícil do que parece. E depois de tudo, você ainda não tem certeza se está correto.",
    },
    {
      title: "Exigências locais ignoradas",
      text: "Cada município tem normas específicas. Um modelo da internet não vai cobrir o que a VISA local exige da sua operação.",
    },
  ];

  return (
    <section id="sobre" className="bg-bg-alt py-20 border-b border-border">
      {/* aria-label placeholder */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção em Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Lado Esquerdo: Textos (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scrollReveal}
            className="lg:col-span-7"
          >
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-4">
              O problema
            </span>
            <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] text-text-primary mb-6 font-semibold">
              Você está usando modelo genérico da internet na sua documentação?
            </h2>
            <div className="font-sans text-base md:text-lg text-text-secondary leading-relaxed space-y-4">
              <p>
                Modelos prontos parecem uma solução rápida. Mas na hora da fiscalização,
                documentos que não refletem a realidade da sua operação se tornam
                o maior risco do seu negócio.
              </p>
              <p className="font-medium text-green-deep">
                Quando um fiscal entra na sua cozinha e pede o Manual de Boas Práticas,
                ele vai comparar o que está escrito com o que está vendo.
                Se não bater, você está exposto.
              </p>
            </div>
          </motion.div>

          {/* Lado Direito: POP Genérico Mockup com X Vermelho (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scrollReveal}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] aspect-[1/1.3] bg-white border border-red-500/30 rounded-lg p-6 shadow-card rotate-[-2deg] overflow-hidden group">
              {/* Fake Document Lines */}
              <div className="w-2/3 h-4 bg-gray-200 rounded mb-4" />
              <div className="w-full h-8 bg-gray-50 rounded mb-6 flex items-center px-3 text-[9px] text-gray-400 font-mono border border-gray-150">
                POP - HIGIENIZAÇÃO DE COZINHA (GENÉRICO)
              </div>
              <div className="space-y-2.5 mb-6">
                <div className="w-full h-2 bg-gray-150 rounded" />
                <div className="w-11/12 h-2 bg-gray-150 rounded" />
                <div className="w-4/5 h-2 bg-gray-150 rounded" />
                <div className="w-full h-2 bg-gray-150 rounded" />
                <div className="w-3/4 h-2 bg-gray-100 rounded" />
                <div className="w-5/6 h-2 bg-gray-100 rounded" />
              </div>
              
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-[8px] text-gray-400 font-mono">
                <span>Assinatura: [Em branco]</span>
                <span>Fórmula: Genérica</span>
              </div>

              {/* Marca D'água "MODELO PRONTO" */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <span className="text-red-500/[0.04] text-[40px] font-black uppercase tracking-wider rotate-[-25deg] text-center w-full leading-none">
                  MODELO PRONTO
                </span>
              </div>

              {/* Big Red X Overlay */}
              <div className="absolute inset-0 bg-red-500/5 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  className="w-28 h-28 text-red-500 flex items-center justify-center"
                >
                  <svg className="w-full h-full filter drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
              </div>

              {/* Red Badge "ERRO GRAVE" */}
              <div className="absolute top-4 right-4 bg-red-600 text-white font-sans text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm rotate-[10deg]">
                Modelo Genérico
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid de Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={scrollReveal}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -4,
                      boxShadow: "0 12px 40px rgba(45,74,62,0.1)",
                    }
              }
              className="bg-bg border-l-4 border-gold rounded-[10px] p-8 shadow-card transition-all duration-200"
            >
              <h3 className="font-heading text-lg md:text-xl font-semibold text-text-primary mb-4">
                {card.title}
              </h3>
              <p className="font-sans text-sm md:text-[15px] leading-relaxed text-text-secondary">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
