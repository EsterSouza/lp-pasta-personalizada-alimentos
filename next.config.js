/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Permitir carregamento de imagens locais ou dominios se necessario
    unoptimized: true, // Garante que funcione no deploy da Vercel sem problemas de cota de otimização
  },
};

module.exports = nextConfig;
