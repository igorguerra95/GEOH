import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Sparkles,
  Award,
  ChevronDown,
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_STATS } from '../data/mockData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden navy-gradient-hero"
    >
      {/* Background Decorativo Geométrico e Iluminação Sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-[#1E3A8A]/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
        {/* Grade de linhas tênues (hairline grid) */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Conteúdo (7 colunas no desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Pill Badge Superior */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#D4AF37]/35 shadow-inner backdrop-blur-md mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase gold-gradient-text">
                Fisioterapia Clínica Especializada · Atendimento 1:1
              </span>
            </motion.div>

            {/* Headline Principal Dramático (clamp 48-96px) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-bold leading-[1.05] tracking-[-0.035em] text-white mb-6 font-heading"
            >
              Restauração <br className="hidden sm:inline" />
              biomecânica de <br className="hidden sm:inline" />
              <span className="gold-gradient-text">precisão</span> para o seu corpo.
            </motion.h1>

            {/* Subheadline Magnético e Formal */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8 tracking-normal"
            >
              Recupere a liberdade dos seus movimentos sem intervenções cirúrgicas invasivas.
              Tratamento individualizado para hérnias de disco, dores articulares e desvios
              posturais com fundamentação em medicina regenerativa e fisioterapia baseada em evidências.
            </motion.p>

            {/* CTAs de Conversão e Confirmação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading text-sm font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#060D1A]" />
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 text-[#060D1A] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-heading text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 transition-all cursor-pointer"
              >
                <span>Conhecer Especialidades</span>
              </a>
            </motion.div>

            {/* Credenciais em Linha (Micro-detalhes) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs text-slate-400 pt-6 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Atendimento exclusivo 1:1</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Prontuário para reembolso</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Diagnóstico cinético 3D</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna Visual Assimétrica (5 colunas no desktop) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Moldura Externa com Gradiente Dourado Hairline */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#D4AF37]/40 via-white/10 to-[#1E3A8A]/30 shadow-2xl shadow-black/80">
                <div className="relative rounded-[22px] overflow-hidden bg-[#0A192F]">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
                    alt="Avaliação Biomecânica da Coluna Vertebral na Geoh Fisioterapia"
                    className="w-full h-[440px] sm:h-[500px] object-cover object-center filter brightness-95 contrast-105"
                  />
                  {/* Gradiente de Fusão Inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/20 to-transparent" />

                  {/* Informação sobreposta na foto */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#060D1A]/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-xs font-semibold text-white uppercase tracking-wider font-heading">
                          Análise Cinética Ativa
                        </span>
                      </div>
                      <span className="text-[10px] text-[#D4AF37] font-mono font-bold bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                        98.4% EFICÁCIA
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Descompressão segmentar não-cirúrgica e reprogramação neuromuscular funcional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Flutuante 1: Avaliação de Estabilidade Articular */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-6 -left-6 sm:-left-8 p-3.5 sm:p-4 rounded-2xl bg-[#0B192C]/90 backdrop-blur-xl border border-[#D4AF37]/30 shadow-2xl hidden sm:flex items-center gap-3.5 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/50 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-heading">
                    Padrão de Excelência
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Certificações Maitland & Souchard RPG
                  </div>
                </div>
              </motion.div>

              {/* Card Flutuante 2: Sem Cirurgia */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 p-3.5 sm:p-4 rounded-2xl bg-[#0B192C]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-3 max-w-[230px]"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-heading">
                    Retorno Sem Dor
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Planos focados na causa raiz biomecânica
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Barra de Estatísticas Clínicas (Grid de 4 colunas com números grandes) */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CLINIC_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading gold-gradient-text tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1 tracking-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de Rolagem Suave */}
      <div className="mt-8 flex justify-center">
        <a
          href="#especialidades"
          className="text-slate-500 hover:text-[#D4AF37] transition-colors flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest"
          aria-label="Rolar para a seção Especialidades"
        >
          <span>Especialidades</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </a>
      </div>
    </section>
  );
};
