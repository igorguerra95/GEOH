import React from 'react';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES } from '../data/mockData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040812] border-t border-white/[0.08] text-slate-400 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Coluna da Marca (4 colunas) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] p-0.5 border border-[#D4AF37]/50 flex items-center justify-center">
                <div className="w-full h-full bg-[#060D1A] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-lg gold-gradient-text">G</span>
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Geoh Fisioterapia
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Laboratório clínico de alta precisão em reabilitação biomecânica, descompressão articular,
              RPG e pilates terapêutico. Atendimento individualizado 1:1 focado na causa raiz da dor.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-mono">{CLINIC_INFO.crefito}</span>
            </div>
          </div>

          {/* Coluna de Especialidades (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Especialidades Clínicas
            </h4>
            <ul className="space-y-2 text-xs">
              {SPECIALTIES.map((spec) => (
                <li key={spec.id}>
                  <a
                    href="#especialidades"
                    className="hover:text-[#D4AF37] transition-colors block py-0.5"
                  >
                    {spec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna de Links Rápidos (2 colunas) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">
                  O Método Geoh
                </a>
              </li>
              <li>
                <a href="#triagem" className="hover:text-[#D4AF37] transition-colors">
                  Triagem da Dor
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#D4AF37] transition-colors">
                  Casos de Sucesso
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-[#D4AF37] transition-colors">
                  Reembolso & Convênios
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">
                  Agendar Avaliação
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna de Atendimento e Ética (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Atendimento Privativo
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {CLINIC_INFO.hours}
            </p>
            <p className="text-xs text-slate-400">
              Consultórios individuais com higienização estrita e hora marcada.
            </p>
            <div className="pt-2">
              <a
                href="#contato"
                className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline"
              >
                Solicitar contato da recepção →
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior: Aviso Ético Profissional e Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="max-w-2xl text-center md:text-left leading-relaxed">
            <p className="mb-2">
              <strong>Nota Ética de Conformidade:</strong> O conteúdo deste site é estritamente informativo e não substitui a consulta de avaliação cinético-funcional presencial. Prática em total consonância com as diretrizes do COFFITO/CREFITO.
            </p>
            <p>
              © {new Date().getFullYear()} Geoh Fisioterapia. Todos os direitos reservados.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
