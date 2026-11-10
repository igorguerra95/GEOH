import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Send,
  PhoneCall,
  Clock,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { CLINIC_INFO, SPECIALTIES } from '../data/mockData.ts';
import { BookingSubmission } from '../types.ts';

interface ContactSectionProps {
  initialSpecialty?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSpecialty }) => {
  const [formData, setFormData] = useState<BookingSubmission>({
    nome: '',
    telefone: '',
    especialidade: initialSpecialty || 'Fisioterapia da Coluna & Hérnia de Disco',
    regiaoDor: 'Coluna Lombar & Quadril',
    periodo: 'Manhã (07h às 12h)',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*Solicitação de Agendamento - Geoh Fisioterapia*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Especialidade:* ${formData.especialidade}\n` +
      `*Região da Queixa:* ${formData.regiaoDor}\n` +
      `*Período Preferencial:* ${formData.periodo}\n` +
      `*Observações:* ${formData.mensagem || 'Gostaria de agendar minha avaliação clínica inicial.'}`
    );
    return `https://wa.me/${CLINIC_INFO.phoneWhatsapp}?text=${text}`;
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative bg-[#070E1E] border-t border-white/[0.06] overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1E3A8A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-[#D4AF37]/30 text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendamento de Avaliação Clínica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Dê o primeiro passo rumo à sua <br />
            <span className="gold-gradient-text">recuperação sem dor</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Preencha os campos abaixo para solicitar o seu horário em nosso consultório privativo.
            Nossa equipe entrará em contato para confirmar a disponibilidade ideal para sua rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coluna 1: Informações e Garantia de Cuidado (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#0B192C]/90 border border-white/[0.08] p-7 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                <span>Protocolo de Recepção Geoh</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">
                      Horário de Funcionamento
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {CLINIC_INFO.hours}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Horários com agendamento prévio individual.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">
                      Canal Direto de Triagem
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      Atendimento via WhatsApp
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Resposta rápida em horário comercial.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">
                      Privacidade & Ética
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {CLINIC_INFO.crefito}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Prontuário médico digital criptografado e estrita conformidade com a LGPD.
                    </div>
                  </div>
                </div>
              </div>

              {/* Aviso sobre a Infraestrutura (omitindo mapa conforme instrução) */}
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 leading-relaxed bg-[#060D1A]/50 p-4 rounded-xl border border-white/5">
                <span className="text-[#D4AF37] font-semibold block mb-1">
                  Ambiente de Alta Precisão:
                </span>
                {CLINIC_INFO.locationNotice}
              </div>
            </div>

            {/* Acesso Imediato ao WhatsApp */}
            <a
              href={`https://wa.me/${CLINIC_INFO.phoneWhatsapp}?text=Olá,%20gostaria%20de%20solicitar%20uma%20avaliação%20na%20Geoh%20Fisioterapia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-all text-emerald-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
                    Prefere falar agora?
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300">
                    Iniciar Conversa no WhatsApp
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                Online
              </span>
            </a>
          </div>

          {/* Coluna 2: Formulário de Agendamento Online (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0B192C]/95 border border-[#D4AF37]/35 p-7 sm:p-10 backdrop-blur-xl shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-2">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
                    Obrigado, <strong>{formData.nome}</strong>. Nosso especialista em agendamento
                    analisará suas informações e entrará em contato em breve para confirmar seu horário.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-lg cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4 text-[#060D1A]" />
                      <span>Agilizar pelo WhatsApp Agora</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
                    >
                      Enviar outro agendamento
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome Completo */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                        placeholder="Ex: Carlos Eduardo de Oliveira"
                        className="w-full px-4 py-3 rounded-xl bg-[#060D1A] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                      />
                    </div>

                    {/* Telefone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) =>
                          setFormData({ ...formData, telefone: e.target.value })
                        }
                        placeholder="Ex: (11) 98765-4321"
                        className="w-full px-4 py-3 rounded-xl bg-[#060D1A] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Especialidade de Interesse */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Especialidade de Interesse
                      </label>
                      <select
                        value={formData.especialidade}
                        onChange={(e) =>
                          setFormData({ ...formData, especialidade: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#060D1A] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                      >
                        {SPECIALTIES.map((spec) => (
                          <option key={spec.id} value={spec.title} className="bg-[#0B192C]">
                            {spec.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Região Anatômica da Dor */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Região Principal da Queixa
                      </label>
                      <select
                        value={formData.regiaoDor}
                        onChange={(e) =>
                          setFormData({ ...formData, regiaoDor: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#060D1A] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-sm transition-colors"
                      >
                        <option value="Coluna Lombar & Quadril" className="bg-[#0B192C]">Coluna Lombar & Quadril</option>
                        <option value="Coluna Cervical & Pescoço" className="bg-[#0B192C]">Coluna Cervical & Pescoço</option>
                        <option value="Joelhos ou Tornozelos" className="bg-[#0B192C]">Joelhos ou Tornozelos</option>
                        <option value="Ombros ou Manguito Rotador" className="bg-[#0B192C]">Ombros ou Manguito Rotador</option>
                        <option value="Postura Geral / RPG" className="bg-[#0B192C]">Postura Geral / RPG</option>
                        <option value="Pós-Operatório Cirúrgico" className="bg-[#0B192C]">Pós-Operatório Cirúrgico</option>
                      </select>
                    </div>
                  </div>

                  {/* Período Preferencial */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Período Preferencial de Atendimento
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        'Manhã (07h às 12h)',
                        'Tarde (12h às 18h)',
                        'Noite (18h às 21h)',
                      ].map((per) => (
                        <button
                          key={per}
                          type="button"
                          onClick={() => setFormData({ ...formData, periodo: per })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                            formData.periodo === per
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] font-semibold'
                              : 'bg-[#060D1A] border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {per}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Observações / Descrição Breve */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Histórico Breve ou Sintomas (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) =>
                        setFormData({ ...formData, mensagem: e.target.value })
                      }
                      placeholder="Ex: Sinto dor na lombar há 4 meses com irradiação para a coxa direita ao sentar."
                      className="w-full px-4 py-3 rounded-xl bg-[#060D1A] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Botão de Envio Obrigatório com o texto Entrar em contato */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-heading text-sm font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#060D1A] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-[#060D1A]" />
                        <span>Entrar em contato</span>
                        <Send className="w-4 h-4 text-[#060D1A]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Seus dados são confidenciais e protegidos pela ética médica.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
