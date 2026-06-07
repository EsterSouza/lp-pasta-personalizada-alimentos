"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { trackInitiateCheckout, getHotmartUrlWithUtms } from "./pixel";

export default function Video() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckoutClick = () => {
    trackInitiateCheckout(497, "Pasta Digital - Secao Video");
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
    <section id="video" className="bg-bg py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scrollReveal}
          className="text-center max-w-2xl mb-12"
        >
          <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest block mb-4">
            Veja por dentro
          </span>
          <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] text-text-primary font-semibold mb-4">
            Como é a Pasta Sanitária por dentro
          </h2>
          <p className="font-sans text-base leading-relaxed text-text-secondary">
            Assista à gravação de tela e conheça os documentos que fazem parte da sua pasta personalizada.
          </p>
        </motion.div>

        {/* Container do Video */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scrollReveal}
          className="w-full max-w-4xl aspect-[16/9] rounded-[10px] overflow-hidden relative shadow-premium border border-border bg-gradient-to-tr from-green-light to-bg-alt mb-12"
        >
          {/* Video Player */}
          <video
            src="https://cnd.consultorasanitaria.com.br/grava%C3%A7%C3%A3o%20de%20tela%20pasta%20personalizada.mp4"
            controls
            preload="metadata"
            className="w-full h-full object-cover bg-transparent"
          />

          {/* Dica visual de que o poster provisório está em gradiente */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/10">
            {/* Ícone de play decorativo no centro (nativos do browser assumirão o controle ao clicar) */}
            <div className="w-16 h-16 rounded-full bg-white/95 text-green-deep flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 pointer-events-none">
              <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* CTA abaixo do vídeo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
        >
          <motion.a
            href={mounted ? getHotmartUrlWithUtms("https://pay.hotmart.com/A106157606C?checkoutMode=10") : "https://pay.hotmart.com/A106157606C?checkoutMode=10"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCheckoutClick}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-block bg-green-cta hover:bg-green-cta-hover text-white text-sm font-semibold px-8 py-4 rounded-[8px] shadow-sm transition-colors duration-200"
          >
            Quero minha pasta personalizada →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
