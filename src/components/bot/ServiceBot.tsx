'use client';

import { ChatOption } from './HistoryChatbot';
import { Language } from '@/constants/translations';
import {
  getServicePrompt,
  getServiceOptions as getTranslatedServiceOptions,
  getDefaultResponse as getTranslatedDefaultResponse,
} from './TranslationBot';

// Keywords pertanyaan service (multi-language support)
const serviceKeywords = [
  // Indonesian
  'service',
  'servis',
  'layanan',
  'apa saja',
  'tersedia',
  'yang ada',
  'jasa',
  'penawaran',
  'produk',
  'konstruksi',
  'konsultasi',
  'bantuan apa',
  'bisa bantu apa',
  'fitur',
  // English
  'services',
  'what do you offer',
  'what can you do',
  'available',
  'construction',
  'consultation',
  'help with',
  'offerings',
  'features',
  // Japanese
  'サービス',
  '何ができる',
  '提供',
  '建設',
  '相談',
];

export function detectServiceQuestion(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  return serviceKeywords.some((keyword) => lowerMessage.includes(keyword));
}

export function getServiceOptions(language: Language): ChatOption[] {
  return getTranslatedServiceOptions(language);
}

export function getServiceResponse(language: Language): string {
  return getServicePrompt(language);
}

// Response default jika tidak mendeteksi pertanyaan service
export function getDefaultResponse(language: Language): string {
  return getTranslatedDefaultResponse(language);
}
