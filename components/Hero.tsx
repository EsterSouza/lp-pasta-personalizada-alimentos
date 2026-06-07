"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trackInitiateCheckout } from "./pixel";

export default function Hero({ abVersion = "A" }: { abVersion?: string }) {
  const shouldReduceMotion = useReducedMotion();

  const handleCTASelection = () => {
    trackInitiateCheckout(0, "CTA Hero - Escolha de Planos");
  };

  const textVariants = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="relative bg-bg pt-[120px] pb-16 md:py-24 overflow-hidden border-b border-border">
      {/* aria-label placeholder */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Esquerdo: Copy e CTAs (55%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Badge */}
          <motion.div variants={textVariants} className="mb-6 flex flex-wrap gap-2">
            <span className="inline-block bg-gold-light text-gold font-sans text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-border">
              Pasta Sanitária Sob Medida
            </span>
            <span className="inline-block bg-green-light text-green-deep font-sans text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-green-cta/20">
              Frete Grátis + Arquivos Editáveis (Word)
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={textVariants}
            className="font-heading text-3xl md:text-5xl lg:text-[52px] leading-[1.15] text-text-primary mb-6 font-semibold"
          >
            {abVersion === "B" ? (
              <>
                Passe na Fiscalização da
                <br />
                <span className="text-green-cta font-bold">Vigilância Sanitária</span>
                <br />
                sem dor de cabeça.
              </>
            ) : (
              <>
                Sua Pasta Sanitária
                <br />
                <span className="text-green-cta font-bold">100% personalizada</span>
                <br />
                para a sua cozinha.
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={textVariants}
            className="font-sans text-[16px] md:text-[17px] leading-relaxed text-text-secondary mb-8 max-w-[520px]"
          >
            {abVersion === "B" ? (
              <>
                Tenha sua Pasta Sanitária completa e personalizada pronta para apresentar ao fiscal. Economize semanas de trabalho tentando criar ou adaptar modelos genéricos da internet. Receba arquivos editáveis em <strong>Word</strong> e PDF na nuvem, ou escolha a pasta física impressa com <strong>frete grátis</strong>.
              </>
            ) : (
              <>
                Evite multas da Vigilância Sanitária. Tenha o <strong>Manual de Boas Práticas, POPs e planilhas</strong> elaborados sob medida para o seu estabelecimento (Restaurantes, Deliveries, Padarias, Mercearias, Buffets, ILPIs e outros). Entregamos arquivos editáveis em <strong>Word</strong> e PDF na nuvem, além de opção de pasta física impressa com <strong>frete grátis</strong>.
              </>
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8 items-center"
          >
            <motion.a
              href="#planos"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 4px 15px rgba(26, 122, 74, 0.2)",
                  "0 10px 25px rgba(26, 122, 74, 0.45)",
                  "0 4px 15px rgba(26, 122, 74, 0.2)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto text-center bg-green-cta hover:bg-green-cta-hover text-white text-sm md:text-base font-extrabold px-8 py-4.5 rounded-[8px] transition-colors duration-200 uppercase tracking-wider shadow-md"
            >
              Quero minha pasta personalizada →
            </motion.a>
            <motion.a
              href="#como-funciona"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="w-full sm:w-auto text-center bg-bg-alt hover:bg-border text-text-primary text-sm font-semibold px-6 py-4.5 rounded-[8px] transition-colors border border-border"
            >
              Ver como funciona
            </motion.a>
          </motion.div>

          {/* Selos Trust */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-border w-full text-text-muted text-xs font-sans font-medium"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 11-2-2h2a2 2 0 012 2" />
              </svg>
              1 revisão incluída
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Prazo de 15 dias úteis
            </span>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Vídeo Demonstrativo em Formato Celular 9:16 (45%) */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-full min-h-[450px] lg:min-h-[550px]">
          {/* Linha vertical dourada decorativa (visível apenas no desktop) */}
          <div className="hidden lg:block absolute left-[-40px] top-1/2 -translate-y-1/2 w-[3px] h-[120px] bg-gold" />

          {/* Celular Mockup Frame */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[280px] sm:w-[290px] aspect-[9/16] rounded-[36px] border-[10px] border-green-deep bg-green-deep shadow-premium overflow-hidden group"
          >
            {/* Notch da câmera superior do celular */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-green-deep rounded-full z-20" />

            {/* Vídeo do produto em auto-loop silencioso */}
            <video
              src="https://cnd.consultorasanitaria.com.br/grava%C3%A7%C3%A3o%20de%20tela%20pasta%20personalizada.mp4"
              poster="/video-poster.jpg" // Imagem estática de preview
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover bg-gradient-to-tr from-green-light to-bg-alt relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
