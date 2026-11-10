import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  AlertCircle,
  CheckCircle,
  Calendar,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
} from 'lucide-react';
import { SYMPTOM_TRIAGE } from '../data/mockData.ts';

interface InteractiveAssessmentProps {
  onSelectCondition: (conditionName: string, specialtyName: string) => void;
}

export const InteractiveAssessment: React.FC<InteractiveAssessmentProps> = ({
  onSelectCondition,
}) => {
  const [selectedId, setSelectedId] = useState<string>(SYMPTOM_TRIAGE[0].id);

  const activeSymptom =
    SYMPTOM_TRIAGE.find((s) => s.id === selectedId) || SYMPTOM_TRIAGE[0];

  return (
    <section id="triagem" className="py-24 sm:py-32 relative bg-[#060D1A] overflow-hidden">
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Triagem Sintomática Orientada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Onde você sente dor hoje?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Selecione a região anatômica abaixo para compreender os mecanismos biomecânicos
            envolvidos e descobrir o plano terapêutico Geoh mais indicado.
          </p>
        </div>

        {/* Seleção de Regiões Anatômicas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {SYMPTOM_TRIAGE.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B192C] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/15'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#D4AF37]/30 to-transparent pointer-events-none" />
                )}
                <div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                      isSelected ? 'text-[#D4AF37]' : 'text-slate-400'
                    }`}
                  >
                    {item.region}
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white font-heading">
                    {item.label}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs">
                  <span
                    className={`font-medium ${
                      isSelected ? 'text-[#D4AF37]' : 'text-slate-400'
                    }`}
                  >
                    {isSelected ? 'Analisando' : 'Ver hipótese clínica'}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#D4AF37]' : 'text-slate-500'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Card de Análise da Queixa Selecionada */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSymptom.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-gradient-to-br from-[#0B192C]/95 to-[#070E1E]/95 border border-[#D4AF37]/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Coluna de Diagnóstico e Sintomas */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-[#1E3A8A]/40 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                      Região: {activeSymptom.region}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                      {activeSymptom.label}
                    </h3>
                  </div>
                </div>

                {/* Causas Comuns */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Causas Mecânicas Frequentes:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSymptom.frequentCauses.map((cause, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/5"
                      >
                        • {cause}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manifestações Clínicas Típicas */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <span>Sinais de Alerta e Manifestações:</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {activeSymptom.clinicalSymptoms.map((sym, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coluna da Conduta Geoh e CTA */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#060D1A]/90 border border-white/10 p-6 sm:p-7 shadow-inner">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                    Abordagem Terapêutica Geoh
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading mb-3">
                    Como Tratamos Esta Condição:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {activeSymptom.geohApproach}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-[#D4AF37]/30 mb-6">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">
                      Especialidade Indicada:
                    </span>
                    <span className="text-sm font-bold text-[#D4AF37]">
                      {activeSymptom.recommendedSpecialty}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onSelectCondition(
                        activeSymptom.label,
                        activeSymptom.recommendedSpecialty
                      )
                    }
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/45 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#060D1A]" />
                    <span>Entrar em contato para este tratamento</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
