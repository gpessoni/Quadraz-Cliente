/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "Quadraz",
        siteDescription: "Reserve sua jogada em um clique!",
        siteKeywords:
            "Reserva esportiva Aluguel de quadras Agendamento esportivo Quadra online Esportes em tempo real Jogos esportivos Plataforma esportiva Marcação de partidas Praticidade esportiva Experiência esportiva Quadras de futebol Quadras de tênis Reserva rápida Comunidade esportiva Destino esportivo Inovação esportiva Quadras premium Jogue com facilidade Esportes em um clique Agenda esportiva",
        siteUrl: "quadraz.online",
        siteImagePreviewUrl: "/images/preview.jpeg",
        twitterHandle: "@your_handle"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
