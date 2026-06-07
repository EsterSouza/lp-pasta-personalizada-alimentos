import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white/70 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {/* Coluna Esquerda: Logo e Marca */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.webp"
                alt="Ana Roberta Logo"
                width={32}
                height={32}
                className="rounded-md object-cover border border-white/10 shadow-sm"
              />
              <span className="font-heading font-semibold text-lg tracking-wide text-white">
                Ana Roberta | Consultora Nutricionista
              </span>
            </div>
            <p className="font-sans text-sm text-white/50 max-w-sm leading-relaxed">
              Pasta Sanitária Personalizada para Serviços de Alimentação.
              Um serviço vinculado ao Hub TreinaVISA Serviços.
            </p>
          </div>

          {/* Coluna Direita: Contato */}
          <div className="flex flex-col md:items-end gap-3 font-sans text-sm">
            <span className="font-heading text-white font-medium text-base mb-1">Contato</span>
            <a
              href="mailto:alimentos@consultorasanitaria.com.br"
              className="hover:text-gold transition-colors"
            >
              alimentos@consultorasanitaria.com.br
            </a>
            <a
              href="https://wa.me/5521990313823"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              +55 21 99031-3823
            </a>
            <a
              href="https://instagram.com/aconsultora.nutri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              @aconsultora.nutri
            </a>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <span>
            © 2026 HUB TREINAVISA — Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/aconsultora.nutri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5521990313823"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
