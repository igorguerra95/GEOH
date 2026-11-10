import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Menu, X, Calendar, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data/mockData.ts';

interface NavbarProps {
  onOpenBooking: (specialty?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Sobre o Método', href: '#sobre' },
    { name: 'Triagem da Dor', href: '#triagem' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#duvidas' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060D1A]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logotipo da Marca */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] p-0.5 border border-[#D4AF37]/50 shadow-lg shadow-[#1E3A8A]/30 flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#060D1A] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-lg gold-gradient-text tracking-wider">
                    G
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                    Geoh Fisioterapia
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#1E3A8A]/40 text-[#D4AF37] border border-[#D4AF37]/25 font-semibold">
                    Clínica
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 tracking-wider">
                  Reabilitação Biomecânica & RPG
                </span>
              </div>
            </a>

            {/* Menu de Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors duration-200 tracking-tight relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-amber-200 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Ações Desktop */}
            <div className="hidden sm:flex items-center gap-3.5">
              <a
                href="#contato"
                onClick={(e) => handleLinkClick(e, '#contato')}
                className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{CLINIC_INFO.crefito}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl font-heading text-xs font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#060D1A]" />
                <span>Entrar em contato</span>
              </button>
            </div>

            {/* Botão Menu Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold gold-gradient-bg text-[#060D1A]"
              >
                Contato
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#060D1A]/98 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Navegação Clínica
                </span>
                <span className="text-xs text-slate-400">{CLINIC_INFO.crefito}</span>
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-200 hover:text-[#D4AF37] hover:bg-white/5 transition-all text-base font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-heading text-sm font-semibold uppercase tracking-wider text-[#060D1A] gold-gradient-bg shadow-lg shadow-[#D4AF37]/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneWhatsapp}?text=Olá,%20gostaria%20de%20informações%20sobre%20tratamentos%20na%20Geoh%20Fisioterapia.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-white/10"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>Atendimento via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
