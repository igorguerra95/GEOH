import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData.ts';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 relative bg-[#070E1E] border-t border-white/[0.06] overflow-hidden">
      {/* Luz sutil */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Casos Clínicos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Histórias de <span className="gold-gradient-text">Recuperação e Autonomia</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            A satisfação e o retorno à vida ativa plena de quem confiou na precisão diagnóstica
            e no cuidado individualizado da Geoh Fisioterapia.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-3xl bg-[#0B192C]/80 backdrop-blur-xl border border-white/[0.08] p-7 sm:p-8 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Cabeçalho do Card com Estrelas e Ícone de Citação */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#D4AF37]/25 group-hover:text-[#D4AF37]/50 transition-colors" />
                </div>

                {/* Queixa & Tratamento */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#D4AF37] mb-4">
                  <span className="font-semibold">{testi.condition}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{testi.treatment}</span>
                </div>

                {/* Relato do Paciente */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{testi.story}"
                </p>
              </div>

              {/* Rodapé do Depoimento com Autor e Foto */}
              <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/50 shadow-md"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {testi.name}
                    </h4>
                    <span className="text-xs text-slate-400 block">
                      {testi.role}
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase font-mono text-[#D4AF37] block">
                    Tempo de Recuperação
                  </span>
                  <span className="text-xs font-semibold text-slate-300">
                    {testi.durationToRecovery}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faixa de Confiança */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#0B192C] via-[#102A45] to-[#0B192C] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white font-heading">
                Você também pode viver sem a limitação da dor.
              </div>
              <div className="text-xs text-slate-300">
                Agende sua avaliação diagnóstica presencial e inicie seu plano de recuperação.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
};
