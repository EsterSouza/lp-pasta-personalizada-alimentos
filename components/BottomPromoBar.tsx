"use client";

import { useState, useEffect } from "react";

export default function BottomPromoBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-green-deep border-t border-gold/30 shadow-[0_-10px_30px_rgba(45,74,62,0.25)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Conteúdo da Barra (Clicável) */}
        <a
          href="#planos"
          className="flex-1 flex items-center justify-center text-center cursor-pointer select-none hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center justify-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5 text-white font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap">
              <svg className="hidden sm:block w-4 h-4 text-gold flex-shrink-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <strong className="text-gold font-extrabold uppercase text-[8px] sm:text-[10px] tracking-wider border border-gold/30 px-1.5 py-0.5 rounded mr-1">Frete Grátis</strong>
              para todo o Brasil nos planos físicos
            </span>
            <span className="hidden sm:inline text-white/20 text-xs">|</span>
            <span className="hidden sm:flex items-center gap-2 text-white font-sans text-xs md:text-sm font-semibold tracking-wide">
              <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Arquivos editáveis em <strong className="text-gold font-bold">Word</strong> + PDF na nuvem
            </span>
          </div>
        </a>

        {/* Botão de Fechar */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          aria-label="Fechar aviso"
          className="text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all p-1 flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
