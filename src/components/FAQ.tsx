import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, FileText, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../data/mockData.ts';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-24 sm:py-32 relative bg-[#060D1A] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparência e Esclarecimentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Tire suas principais dúvidas sobre nosso modelo de atendimento individualizado,
            reembolso de planos de saúde e protocolos clínicos.
          </p>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B192C] border-[#D4AF37]/50 shadow-xl shadow-black/40'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-[#060D1A] rotate-180'
                        : 'border-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Destaque para Reembolso de Convênios */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-[#D4AF37]/25 flex items-start gap-4">
          <FileText className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white block text-sm mb-1 font-heading">
              Facilidade no Reembolso do seu Plano de Saúde
            </strong>
            Nossa recepção fornece todos os documentos necessários: Recibo / Nota Fiscal Eletrônica com código de serviço de fisioterapia, laudo com evolução clínica e justificativa biomecânica para envio simplificado pelo aplicativo da sua operadora de saúde.
          </div>
        </div>
      </div>
    </section>
  );
};
