import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData.ts';

export const WhatsAppButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneWhatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de informações sobre o atendimento individualizado e agendar uma avaliação clínica na Geoh Fisioterapia.'
  )}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip elegante */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B192C]/95 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-md transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <div className="text-left">
          <div className="text-xs font-bold text-white font-heading">
            Atendimento Online
          </div>
          <div className="text-[10px] text-slate-300">
            Fale diretamente com nossa recepção
          </div>
        </div>
      </div>

      {/* Botão de Ação com Pulso Discreto */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group w-14 h-14 rounded-2xl bg-gradient-to-br from-[#128C7E] to-[#075E54] border border-[#25D366]/40 flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 animate-gold-pulse cursor-pointer"
        aria-label="Iniciar conversa no WhatsApp da Geoh Fisioterapia"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/20 transition-transform group-hover:scale-110" />

        {/* Ponto indicador de status ativo */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4AF37] border-2 border-[#060D1A]" />
        </span>
      </a>
    </aside>
  );
};
