// src/components/Hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SkillsCarousel from "./SkillsCarousel";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-gradient-to-br from-black via-green-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-600/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto p-8 text-center md:text-left z-10 relative">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Disponível para projetos
            </span>
          </div>

          <h1 className="text-6xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent animate-slide-up">
            <span className="block lg:inline">WILKER</span>
            <span className="block lg:inline lg:ml-4 text-5xl md:text-5xl lg:text-7xl">
              MARTINS
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-white/80 mb-8 font-light animate-slide-up delay-200">
            DESENVOLVEDOR WEB
          </h2>

          <p className="text-lg md:text-xl lg:text-1xl text-white/70 mb-10 max-w-lg animate-slide-up delay-300">
            Transformando ideias em experiências digitais extraordinárias
            através de código limpo e design inovador.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
            <Link
              href="/curriculo.pdf"
              target="_blank"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="relative z-10">Baixar Currículo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="https://github.com/wilkermartins"
              target="_blank"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Ver Projetos
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Imagem com efeitos modernos */}
      <div className="absolute bottom-32 right-2 hidden lg:block z-1">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full blur-3xl scale-110"></div>
          <div className="relative">
            <Image
              src="/images/wilker.png"
              alt="Wilker Martins"
              width={440}
              height={440}
              className="rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Carrossel modernizado */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm">
        <SkillsCarousel />
      </div>
    </section>
  );
};

export default Hero;
