"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function ParaQuemE() {
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

  const targets = [
    {
      title: "Restaurantes e lanchonetes",
      desc: "Documentação operacional completa para funcionamento e fiscalização.",
      image: "/restaurante.webp",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
          <path d="M7 2v4" />
          <path d="M21 15V2v0a5 5 0 00-5 5v3c0 2.2 1.8 4 4 4z" />
          <path d="M21 15v7M18 5v3M6 11v11" />
        </svg>
      ),
    },
    {
      title: "Padarias e confeitarias",
      desc: "Controle de processo documentado para produção própria.",
      image: "/padaria.webp",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16h16" />
          <path d="M12 9V5" />
          <path d="M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M22 21H2" />
        </svg>
      ),
    },
    {
      title: "Deliveries e dark kitchens",
      desc: "Documentação completa mesmo sem atendimento presencial ao cliente.",
      image: "/delivery.webp",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="17" r="3" />
          <circle cx="18" cy="17" r="3" />
          <path d="M6 14h6a2 2 0 0 1 2 2v1" />
          <path d="M18 14h-4" />
          <path d="M12 6h3.5L18 11v3" />
          <path d="M8 6h4v4H8z" />
        </svg>
      ),
    },
    {
      title: "Buffets e eventos",
      desc: "Controle de temperatura e produção em larga escala devidamente registrado.",
      image: "/buffet.webp",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Hospitais, clínicas e ILPIs",
      desc: "Exigências sanitárias rigorosas para cozinhas hospitalares, clínicas e lares de idosos (ILPI).",
      image: "/hospital.webp",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="15" y1="22" x2="15" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <path d="M8 6h2v2H8V6zm6 0h2v2h-2V6zm-6 5h2v2H8v-2zm6 0h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      title: "Mercearias e empórios",
      desc: "Controle operacional para áreas de fiambreria, rotisseria e mercearia com manipulação de alimentos.",
      image: "/mercearia.webp",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-bg-alt py-20 border-b border-border">
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
            Para quem é
          </span>
          <h2 className="font-heading text-3xl md:text-[40px] leading-[1.2] text-text-primary font-semibold">
            Este serviço foi feito para você?
          </h2>
        </motion.div>

        {/* Grid de Cards Estilo Netflix */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {targets.map((target, idx) => (
            <motion.div
              key={idx}
              variants={scrollReveal}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -4,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }
              }
              className="relative rounded-[12px] aspect-[4/3] overflow-hidden shadow-card group transition-all duration-300 border border-border bg-black flex flex-col justify-end"
            >
              {/* Imagem de Fundo */}
              <Image
                src={target.image}
                alt={target.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-65 group-hover:opacity-75"
              />
              {/* Gradiente Escuro Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 pointer-events-none" />

              {/* Conteúdo por cima */}
              <div className="relative p-6 z-10 flex flex-col items-start text-white">
                {/* Ícone */}
                <div className="w-8 h-8 rounded-md bg-gold/90 text-white flex items-center justify-center mb-4 shadow-sm">
                  {target.icon}
                </div>
                {/* Título */}
                <h3 className="font-heading text-lg font-bold text-white mb-2 leading-snug">
                  {target.title}
                </h3>
                {/* Descrição */}
                <p className="font-sans text-xs text-white/80 leading-relaxed max-w-[280px]">
                  {target.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
