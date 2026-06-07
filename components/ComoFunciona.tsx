"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ComoFunciona() {
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

  const steps = [
    {
      number: "01",
      title: "Compra",
      description: "Escolha seu plano e finalize pelo checkout seguro da Hotmart.",
    },
    {
      number: "02",
      title: "Formulário de diagnóstico",
      description: "Você recebe o link do formulário e preenche com os dados do seu estabelecimento: estrutura física, cardápio, equipe e processos.",
    },
    {
      number: "03",
      title: "Elaboração personalizada",
      description: "Nossa equipe elabora toda a documentação com base nas suas respostas e nas normas sanitárias aplicáveis ao seu município e estado.",
    },
    {
      number: "04",
      title: "Período de apreciação e revisão",
      description: "Você recebe uma prévia de toda a documentação elaborada para analisar junto com a consultora. Realizamos os ajustes necessários para garantir 100% de adequação.",
    },
    {
      number: "05",
      title: "Entrega digital e/ou física",
      description: "Você recebe a pasta completa em arquivos editáveis (Word) e PDF organizados na nuvem. Se escolheu a versão impressa, ela chega em seu endereço com frete grátis.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-bg-dark text-white py-20 border-b border-border">
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
            Como funciona
          </span>
          <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] text-white font-semibold">
            Do formulário à pasta pronta em 5 etapas
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Linha Conectora Dourada (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-12 right-12 h-[2px] border-t border-dashed border-gold/30 z-0" />

          {/* Grid de Etapas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -32 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="flex flex-col items-start"
              >
                {/* Indicador Numérico */}
                <div className="font-heading text-5xl md:text-6xl font-bold text-gold mb-6 bg-bg-dark pr-4">
                  {step.number}
                </div>
                {/* Conteúdo */}
                <h3 className="font-heading text-lg md:text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-[14px] leading-relaxed text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Botão CTA da seção Como Funciona */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          className="text-center mt-16 flex justify-center"
        >
          <motion.a
            href="#planos"
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="inline-block bg-gold hover:bg-gold-light text-white text-sm md:text-base font-extrabold px-8 py-4.5 rounded-[8px] transition-colors duration-200 uppercase tracking-wider font-sans shadow-md"
          >
            Quero minha pasta personalizada
          </motion.a>
        </motion.div>

        {/* Nota Rodapé */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="font-sans text-xs md:text-sm text-gold-light/70 tracking-wide">
            Prazo: até 15 dias úteis após o preenchimento do formulário. Você tem direito a 1 revisão durante o processo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
