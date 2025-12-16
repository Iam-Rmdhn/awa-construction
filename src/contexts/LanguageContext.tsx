"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, TRANSLATIONS } from '@/constants/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof TRANSLATIONS)[Language];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Indonesian based on user region or just 'id' as requested
  const [language, setLanguageState] = useState<Language>('id'); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Optional: Load from localStorage if persisted
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'id' || savedLang === 'ja')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = TRANSLATIONS[language];

  if (!mounted) {
    // Return with default language to avoid hydration mismatch, or a loader
    // For simplicity in this SSG/SSR setup, just render children with default (id) or null
    // But rendering children is safer for SEO and initial paint.
    // 'id' is default.
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
