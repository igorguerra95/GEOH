import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Specialties } from './components/Specialties.tsx';
import { About } from './components/About.tsx';
import { InteractiveAssessment } from './components/InteractiveAssessment.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FAQ } from './components/FAQ.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { BookingModal } from './components/BookingModal.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [modalSpecialty, setModalSpecialty] = useState<string | undefined>(undefined);
  const [modalCondition, setModalCondition] = useState<string | undefined>(undefined);

  const handleOpenBooking = (specialty?: string, condition?: string) => {
    setModalSpecialty(specialty);
    setModalCondition(condition);
    setIsBookingOpen(true);
  };

  const handleSelectSpecialty = (specialtyTitle: string) => {
    // Rola suavemente até o contato ou abre o modal preenchido
    setModalSpecialty(specialtyTitle);
    setIsBookingOpen(true);
  };

  const handleSelectCondition = (conditionLabel: string, specialtyName: string) => {
    setModalCondition(conditionLabel);
    setModalSpecialty(specialtyName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-white antialiased">
      {/* Barra de Navegação Fixa */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 1. Início (Hero com foco em recuperação e biomecânica) */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Especialidades (RPG, Pilates Clínico, Reabilitação, Coluna) */}
        <Specialties onSelectSpecialty={handleSelectSpecialty} />

        {/* 3. Sobre (Formação acadêmica e O Método Geoh em 4 fases) */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* Módulo Interativo de Triagem de Dor */}
        <InteractiveAssessment onSelectCondition={handleSelectCondition} />

        {/* 4. Depoimentos (Casos Reais de Recuperação) */}
        <Testimonials onOpenBooking={() => handleOpenBooking()} />

        {/* Perguntas Frequentes & Reembolso */}
        <FAQ />

        {/* 5. Contato (Formulário completo de agendamento online) */}
        <ContactSection initialSpecialty={modalSpecialty} />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Modal Interativo de Agendamento Rápido */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedSpecialty={modalSpecialty}
        preselectedCondition={modalCondition}
      />
    </div>
  );
}
