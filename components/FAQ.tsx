"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const faqs: FAQItem[] = [
    {
      question: "A documentação é aceita pela Vigilância Sanitária?",
      answer: "Sim. Todos os documentos são elaborados com base nas normas federais — incluindo a RDC ANVISA 216/2004 e demais legislações aplicáveis — e adaptados às exigências estaduais e municipais do seu estabelecimento.",
    },
    {
      question: "O serviço vale para todo o Brasil?",
      answer: "Sim. Atendemos estabelecimentos em todos os estados e municípios do Brasil. Nossa equipe faz o levantamento das normas da Vigilância Sanitária local (estadual e municipal) para garantir que sua pasta atenda perfeitamente aos requisitos específicos da sua região.",
    },
    {
      question: "Posso editar os documentos depois de recebê-los?",
      answer: "Sim. Você recebe os arquivos em Word, editáveis, além da versão finalizada em PDF.",
    },
    {
      question: "E se eu precisar de algum ajuste?",
      answer: "Está incluída 1 revisão durante o processo de elaboração. Alterações solicitadas após a entrega final são cobradas separadamente.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Até 15 dias úteis após o preenchimento completo do formulário de diagnóstico.",
    },
    {
      question: "Como recebo a documentação?",
      answer: "Via Google Drive ou OneDrive, conforme sua preferência. Se contratou a pasta física, ela é enviada por transportadora (escolhida pelo melhor tempo de entrega) com frete grátis.",
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Pelo checkout seguro da Hotmart. Aceitamos cartão de crédito, PIX e boleto bancário.",
    },
  ];

  // Schema Markup JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-bg py-20 border-b border-border">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[720px] mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Dúvidas frequentes
          </span>
          <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] text-text-primary font-semibold">
            Perguntas frequentes
          </h2>
        </div>

        {/* Lista do Accordion */}
        <div className="border-t border-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-border">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base md:text-lg font-semibold text-text-primary group-hover:text-green-cta transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-green-cta w-6 h-6 flex items-center justify-center relative">
                    {/* Linha Horizontal */}
                    <span className="absolute w-4 h-[2px] bg-current" />
                    {/* Linha Vertical (gira e some quando aberto) */}
                    <motion.span
                      animate={isOpen ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute w-[2px] h-4 bg-current"
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 font-sans text-sm md:text-base leading-relaxed text-text-secondary">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
