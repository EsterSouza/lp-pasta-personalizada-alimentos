"use client";

import Image from "next/image";

export default function ClientesCarrossel() {
  const logos = [
    { src: "/logo-casabranca.webp", alt: "Casa Branca Residencial Sênior" },
    { src: "/logo-cliger.webp", alt: "Cliger Clínica Geriátrica" },
    { src: "/logo-redesenior.webp", alt: "Rede Sênior" },
    { src: "/logo-laridosos.webp", alt: "Lar dos Idosos MFS" },
    { src: "/logo-analiafranco.webp", alt: "Pousada Anália Franco" },
    { src: "/logo-santaveg.webp", alt: "Santa Veg" },
    { src: "/logo-santafit.webp", alt: "Santa Fit" },
    { src: "/logo-mandiocacarioca.webp", alt: "Mandioca Carioca" },
    { src: "/logo-quadradoburguer.webp", alt: "Quadrado Burguer" },
    { src: "/logo-bocadillo.webp", alt: "Bocadillo Salgaderia" },
    { src: "/logo-santaguloseima.webp", alt: "Santa Guloseima" },
  ];

  // Duplicar para criar um loop contínuo perfeito
  const doubledLogos = [...logos, ...logos];

  return (
    <div className="bg-bg-alt border-y border-border py-8 overflow-hidden relative w-full">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="font-sans text-[11px] font-bold text-text-secondary uppercase tracking-widest">
          Empresas e Estabelecimentos que confiam na nossa regularização
        </p>
      </div>

      {/* Marquee Wrapper com gradiente de desbotamento nas laterais */}
      <div className="flex w-full overflow-hidden relative mask-gradient">
        <div className="flex gap-8 md:gap-16 items-center animate-marquee whitespace-nowrap min-w-full">
          {doubledLogos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center h-12 w-28 md:w-32 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 relative"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                fill
                sizes="(max-width: 768px) 120px, 150px"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Estilos inline para animação e máscara do marquee */}
        <style dangerouslySetInnerHTML={{ __html: `
          .mask-gradient {
            mask-image: linear-gradient(
              to right,
              transparent,
              black 15%,
              black 85%,
              transparent
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 15%,
              black 85%,
              transparent
            );
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 15s linear infinite;
          }
          @media (min-width: 768px) {
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          }
        `}} />
      </div>
    </div>
  );
}
