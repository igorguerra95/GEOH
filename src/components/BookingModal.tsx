import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle, ShieldCheck, PhoneCall, Send } from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES } from '../data/mockData.ts';
import { BookingSubmission } from '../types.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSpecialty?: string;
  preselectedCondition?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedSpecialty,
  preselectedCondition,
}) => {
  const [formData, setFormData] = useState<BookingSubmission>({
    nome: '',
    telefone: '',
    especialidade: preselectedSpecialty || SPECIALTIES[0].title,
    regiaoDor: preselectedCondition || 'Coluna Lombar & Quadril',
    periodo: 'Manhã (07h às 12h)',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*Agendamento Geoh Fisioterapia*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Especialidade:* ${formData.especialidade}\n` +
      `*Queixa:* ${formData.regiaoDor}\n` +
      `*Período:* ${formData.periodo}\n` +
      `*Observações:* ${formData.mensagem || 'Gostaria de confirmar minha avaliação inicial.'}`
    );
    return `https://wa.me/${CLINIC_INFO.phoneWhatsapp}?text=${text}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        className="relative w-full max-w-xl bg-[#0B192C] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading mb-2">
              Solicitação Enviada!
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Recebemos sua mensagem, <strong>{formData.nome}</strong>. Nosso especialista entrará
              em contato para validar o melhor horário para sua avaliação clínica individualizada.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-[#060D1A]" />
                <span>Confirmar via WhatsApp Agora</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                Atendimento 1:1 · Geoh Fisioterapia
              </span>
              <h3 className="text-2xl font-bold text-white font-heading mt-1">
                Agendamento de Avaliação
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Preencha seus dados para receber o contato do nosso setor de admissão clínica.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#060D1A] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  WhatsApp / Celular *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  placeholder="(11) 98765-4321"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#060D1A] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                    Especialidade
                  </label>
                  <select
                    value={formData.especialidade}
                    onChange={(e) => setFormData({ ...formData, especialidade: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#060D1A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  >
                    {SPECIALTIES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#0B192C]">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                    Região da Dor
                  </label>
                  <select
                    value={formData.regiaoDor}
                    onChange={(e) => setFormData({ ...formData, regiaoDor: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#060D1A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Coluna Lombar & Quadril" className="bg-[#0B192C]">Coluna Lombar & Quadril</option>
                    <option value="Coluna Cervical & Pescoço" className="bg-[#0B192C]">Coluna Cervical & Pescoço</option>
                    <option value="Joelhos ou Tornozelos" className="bg-[#0B192C]">Joelhos ou Tornozelos</option>
                    <option value="Ombros ou Escápulas" className="bg-[#0B192C]">Ombros ou Escápulas</option>
                    <option value="Postura Geral / RPG" className="bg-[#0B192C]">Postura Geral / RPG</option>
                    <option value="Pós-Cirúrgico" className="bg-[#0B192C]">Pós-Cirúrgico</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Período Preferencial
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Manhã', 'Tarde', 'Noite'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setFormData({ ...formData, periodo: p })}
                      className={`py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.periodo.includes(p)
                          ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                          : 'bg-[#060D1A] border-white/10 text-slate-400'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Mensagem Adicional (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Descreva brevemente sua queixa ou exames que possui"
                  className="w-full px-4 py-2 rounded-xl bg-[#060D1A] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-75"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-[#060D1A] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#060D1A]" />
                    <span>Entrar em contato</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Atendimento presencial exclusivo com hora marcada.</span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
