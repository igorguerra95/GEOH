import React from 'react';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  badge: string;
  category: 'coluna' | 'esporte' | 'postura' | 'regenerativa';
  shortDescription: string;
  detailedDescription: string;
  indications: string[];
  protocolHighlights: string[];
  durationEstimated: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  condition: string;
  treatment: string;
  story: string;
  rating: number;
  image: string;
  durationToRecovery: string;
}

export interface MethodPillar {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SymptomAssessment {
  id: string;
  region: string;
  label: string;
  frequentCauses: string[];
  clinicalSymptoms: string[];
  geohApproach: string;
  recommendedSpecialty: string;
}

export interface BookingSubmission {
  nome: string;
  telefone: string;
  especialidade: string;
  regiaoDor: string;
  periodo: string;
  mensagem: string;
}
