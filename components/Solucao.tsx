"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Solucao() {
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

  const documentos = [
    "Manual de Boas Práticas de Fabricação e Manipulação de Alimentos",
    "Procedimentos Operacionais Padronizados (POPs) para a sua rotina",
    "Planilhas de controle de temperatura, cocção e resfriamento",
    "Planilhas de rastreabilidade, recebimento e controle de validade",
    "Registros de higienização de instalações, equipamentos e reservatórios",
    "Registros de treinamentos e controle de saúde dos manipuladores",
    "Memorial descritivo da estrutura física e organograma",
  ];

  return (
    <section id="solucao" className="bg-bg py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Lado Esquerdo: Textos e Lista (7 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scrollReveal}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-4">
              A solução
            </span>
            <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] text-text-primary mb-4 font-semibold">
              A Pasta Sanitária Personalizada para Serviços de Alimentação
            </h2>
            <p className="font-sans text-lg text-green-deep font-medium mb-6">
              Toda a documentação operacional elaborada sob medida por nutricionista consultora especializada em vigilância sanitária.
            </p>
            <p className="font-sans text-base leading-relaxed text-text-secondary mb-8">
              Você preenche o formulário de diagnóstico com os dados do seu estabelecimento.
              A gente faz o resto. Com base no seu perfil, porte, cardápio e fluxo de
              produção, elaboramos documentos que refletem a realidade da sua cozinha —
              não de uma cozinha genérica.
            </p>

            {/* Lista de Documentos em 2 Colunas */}
            <div className="w-full">
              <h4 className="font-heading text-lg font-semibold text-text-primary mb-5">
                O que faz parte da sua Pasta Sanitária:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {documentos.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-[14px] text-text-secondary leading-normal font-sans">
                    <span className="flex-shrink-0 mt-0.5 text-green-cta">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Lado Direito: Bio da Consultora (5 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={scrollReveal}
            className="lg:col-span-5 w-full"
          >
            <div className="border border-border bg-green-light rounded-[12px] p-6 shadow-card flex flex-col gap-6">
              {/* Foto Retangular Grande */}
              <div className="relative w-full aspect-[3/4] rounded-[8px] bg-green-deep border border-gold/20 overflow-hidden shadow-sm">
                <Image
                  src="/foto-da-ana.webp"
                  alt="Ana Roberta | Consultora Nutricionista"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Informações da Bio */}
              <div className="flex flex-col">
                <h4 className="font-heading text-lg font-bold text-text-primary mb-1">
                  Ana Roberta | Consultora Nutricionista
                </h4>
                <p className="font-sans text-[11px] font-bold text-gold uppercase tracking-wider mb-3">
                  Nutricionista & Consultora Técnica
                </p>
                <p className="font-sans text-sm leading-relaxed text-text-secondary">
                  Ana Roberta é nutricionista e consultora especializada em vigilância sanitária. Atua assessorando estabelecimentos na conformidade com as normas da ANVISA, legislações federais, estaduais e municipais, garantindo processos seguros e eficientes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
