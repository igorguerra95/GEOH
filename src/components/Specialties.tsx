import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  Clock,
  Sparkles,
  ArrowUpRight,
  Activity,
  Layers,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { SPECIALTIES } from '../data/mockData.ts';
import { SpecialtyItem } from '../types.ts';

interface SpecialtiesProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialty }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [selectedItem, setSelectedItem] = useState<SpecialtyItem | null>(null);

  const categories = [
    { id: 'todas', label: 'Todas as Áreas' },
    { id: 'coluna', label: 'Coluna & Hérnia de Disco' },
    { id: 'postura', label: 'RPG & Pilates Clínico' },
    { id: 'esporte', label: 'Esporte & Alta Performance' },
    { id: 'regenerativa', label: 'Terapia Manual Regenerativa' },
  ];

  const filteredSpecialties =
    activeCategory === 'todas'
      ? SPECIALTIES
      : SPECIALTIES.filter((s) => s.category === activeCategory);

  return (
    <section id="especialidades" className="py-24 sm:py-32 relative bg-[#060D1A] overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1E3A8A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Alta Precisão Terapêutica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
              Especialidades Clínicas & <br />
              <span className="gold-gradient-text">Reabilitação Avançada</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Tratamentos fundamentados na biomecânica tecidual e na neurofisiologia da dor.
              Cada plano de intervenção é desenhado após testes clínicos rigorosos.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
              Atendimento 1:1 Individualizado
            </span>
            <div className="text-sm font-semibold text-white mt-1">
              Sem divisão de aparelhos com outros pacientes
            </div>
          </div>
        </div>

        {/* Filtros em Abas de Categoria */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'gold-gradient-bg text-[#060D1A] font-semibold shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Especialidades (12 colunas) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredSpecialties.map((spec, index) => (
              <motion.div
                key={spec.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative rounded-2xl bg-[#0B192C]/70 backdrop-blur-md border border-white/[0.08] hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Imagem de Topo com Overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-[#0A192F]">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />
                  
                  {/* Badge de Destaque */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#060D1A]/90 text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm backdrop-blur-sm">
                      {spec.badge}
                    </span>
                  </div>

                  {/* Duração Estimada */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="truncate">{spec.durationEstimated}</span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-heading mb-2.5">
                      {spec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {spec.shortDescription}
                    </p>

                    {/* Indicações Clínicas Principais */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.08]">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Indicações Clínicas:
                      </span>
                      {spec.indications.slice(0, 3).map((ind, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectSpecialty(spec.title)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all cursor-pointer"
                    >
                      <span>Entrar em contato</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#060D1A]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedItem(spec)}
                      className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors"
                      title="Ver detalhes do protocolo"
                      aria-label={`Ver detalhes de ${spec.title}`}
                    >
                      <Layers className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal de Detalhes da Especialidade */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0B192C] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {selectedItem.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading mt-1">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedItem.detailedDescription}
              </p>

              {/* Protocolo de Atendimento Geoh */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Destaques do Protocolo de Reabilitação:</span>
                </h4>
                <ul className="space-y-2">
                  {selectedItem.protocolHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Todas as Indicações */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Condições Tratadas com Eficácia:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedItem.indications.map((ind, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectSpecialty(title);
                  }}
                  className="flex-1 py-3 px-6 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-lg shadow-[#D4AF37]/25"
                >
                  Entrar em contato sobre esta especialidade
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="py-3 px-6 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/5 border border-white/10"
                >
                  Fechar Detalhes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
