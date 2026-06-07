"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trackInitiateCheckout } from "./pixel";

export default function CTAFinal() {
  const shouldReduceMotion = useReducedMotion();

  const handleCheckoutClick = () => {
    trackInitiateCheckout(497, "Pasta Digital - CTA Final");
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

  return (
    <section className="bg-bg-dark text-white py-20 border-b border-border/10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Título */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scrollReveal}
          className="font-heading text-3xl md:text-[40px] leading-[1.2] text-white font-semibold mb-6 max-w-2xl"
        >
          Regularize seu estabelecimento com quem entende da sua operação
        </motion.h2>

        {/* Corpo */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scrollReveal}
          className="font-sans text-[16px] md:text-[17px] leading-relaxed text-white/75 mb-8 max-w-[560px]"
        >
          Sua cozinha tem uma rotina específica. A fiscalização vai cobrar documentos
          que refletem essa rotina. A Pasta Sanitária Personalizada garante que você
          esteja preparado — sem retrabalho, sem erro, sem susto na hora da vistoria.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          className="mb-8"
        >
          <motion.a
            href="#planos"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-block bg-green-cta hover:bg-green-cta-hover text-white text-sm font-semibold px-8 py-4 rounded-[8px] shadow-sm transition-colors duration-200"
          >
            Quero minha pasta agora →
          </motion.a>
        </motion.div>

        {/* Selos Trust */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/50 text-xs font-sans font-medium"
        >
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 11-2-2h2a2 2 0 012 2" />
            </svg>
            1 revisão incluída
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Entrega digital e/ou física
          </span>
        </motion.div>
      </div>
    </section>
  );
}
