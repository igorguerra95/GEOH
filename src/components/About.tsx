import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Compass,
} from 'lucide-react';
import { METHOD_PILLARS, CLINIC_INFO } from '../data/mockData.ts';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative bg-[#070E1E] border-t border-white/[0.06] overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bloco 1: A Clínica e a Formação Acadêmica de Excelência */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Coluna Visual e Credenciais */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Moldura com Hairline Dourada */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#D4AF37]/40 via-white/10 to-[#1E3A8A]/40 shadow-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-[#0A192F]">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                    alt="Corpo Clínico e Laboratório de Reabilitação Geoh Fisioterapia"
                    className="w-full h-[480px] object-cover object-top filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-transparent" />

                  {/* Tarja de Registro Ético CREFITO */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#060D1A]/90 backdrop-blur-md border border-[#D4AF37]/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white font-heading">
                          Dr. George "Geoh" & Corpo Clínico
                        </div>
                        <div className="text-[11px] text-[#D4AF37]">
                          Fisioterapia Especializada e Reabilitação
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-400 block">
                          REGISTRO PROFISSIONAL
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-200">
                          {CLINIC_INFO.crefito}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selos de Formação Flutuantes */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Especialização & Mestrado</div>
                    <div className="text-[11px] text-slate-400">Biomecânica Clínica</div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Certificação Internacional</div>
                    <div className="text-[11px] text-slate-400">Maitland, RPG & Mulligan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Institucional / Texto */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Rigores Científicos e Tradição Clínica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading mb-6">
              A ciência do movimento a serviço da sua{' '}
              <span className="gold-gradient-text">liberdade definitiva</span>.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                A <strong>Geoh Fisioterapia</strong> nasceu da convicção de que o corpo humano não
                deve ser submetido a protocolos genéricos ou a tratamentos impessoais. Em um cenário
                onde clínicas convencionais costumam atender múltiplos pacientes simultaneamente, nossa
                prática é orientada pelo princípio inegociável da <strong>atenção integral 1:1</strong>.
              </p>
              <p>
                Nossa direção clínica combina sólida formação acadêmica nos mais prestigiados centros
                universitários de saúde do país com títulos de pós-graduação em Biomecânica da Coluna,
                Fisioterapia Ortopédica e Medicina Regenerativa do Movimento.
              </p>
              <p>
                Aplicamos com precisão cirúrgica os métodos que revolucionaram a fisioterapia mundial:
                o <em>Conceito Maitland de Terapia Manual</em> (Austrália), o <em>Método Souchard de Reeducação Postural Global</em> (França)
                e o <em>Conceito Mulligan de Mobilização com Movimento</em> (Nova Zelândia).
              </p>
            </div>

            {/* Diferenciais da Estrutura */}
            <div className="p-6 rounded-2xl bg-[#0B192C]/80 border border-white/10 mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Padrão Institucional e Infraestrutura Privativa</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Salas privativas climatizadas e acusticamente tratadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Aparelhos de Pilates Terapêutico originais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Estacionamento exclusivo e acessibilidade total</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Prontuário com emissão de nota para reembolso de convênio</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-xl hover:shadow-[#D4AF37]/30 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#060D1A]" />
              <span>Entrar em contato para consulta</span>
              <ArrowRight className="w-4 h-4 text-[#060D1A]" />
            </button>
          </div>
        </div>

        {/* Bloco 2: A Metodologia Geoh em 4 Fases (O Método) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Nosso Método Proprietário</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              O Método Geoh de Reconstrução Biomecânica
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Quatro etapas sinérgicas desenhadas para curar a raiz da lesão e conferir blindagem articular definitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHOD_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-2xl bg-[#0B192C]/70 backdrop-blur-md p-6 border border-white/[0.08] hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl font-bold gold-gradient-text tracking-tight font-mono">
                      {pillar.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors">
                      <Microscope className="w-4 h-4" />
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h4 className="text-lg font-bold text-white font-heading mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {pillar.details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
