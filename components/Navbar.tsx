"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Esquerda: Logo e Nome */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.webp"
            alt="Ana Roberta Logo"
            width={32}
            height={32}
            className="rounded-md object-cover border border-border shadow-sm"
          />
          <span className="font-heading font-semibold text-base md:text-lg tracking-wide text-text-primary group-hover:text-green-cta transition-colors">
            Ana Roberta | Consultora Nutricionista
          </span>
        </a>

        {/* Centro (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-green-cta text-sm font-medium transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Direita (Desktop) */}
        <div className="hidden md:block">
          <motion.a
            href="#planos"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-block bg-green-cta hover:bg-green-cta-hover text-white text-xs font-semibold px-5 py-2.5 rounded-[8px] transition-colors uppercase tracking-wider font-sans"
          >
            Quero minha pasta
          </motion.a>
        </div>

        {/* Mobile Hamburguer Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu de navegação"
            className="text-text-primary hover:text-green-cta focus:outline-none p-1.5"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-text-secondary hover:text-green-cta text-base font-semibold py-1 transition-colors font-sans"
                >
                  {link.label}
                </a>
              ))}
              <motion.a
                href="#planos"
                onClick={handleLinkClick}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full text-center bg-green-cta hover:bg-green-cta-hover text-white text-sm font-semibold py-3 rounded-[8px] transition-colors uppercase tracking-wider font-sans block"
              >
                Quero minha pasta
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
