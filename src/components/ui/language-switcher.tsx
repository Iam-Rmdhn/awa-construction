'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/constants/translations';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
}

const languages: LanguageOption[] = [
  { code: 'id', label: 'Indonesia', shortLabel: 'ID' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'ja', label: '日本語', shortLabel: 'JP' },
];

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
  displayMode?: 'buttons' | 'icon';
}

export default function LanguageSwitcher({
  variant = 'light',
  displayMode = 'buttons',
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (displayMode === 'icon') {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center
            w-10 h-10 rounded-full
            transition-all duration-300
            hover:scale-105 active:scale-95
            ${
              variant === 'light'
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                : 'bg-black/10 hover:bg-black/20 text-black border border-black/20'
            }
          `}
          aria-label="Select language"
          aria-expanded={isOpen}
        >
          <Globe className="w-5 h-5" />
        </button>

        <div
          className={`
            absolute right-0 top-full mt-2
            min-w-[140px]
            bg-white/95 backdrop-blur-xl
            border border-gray-200
            rounded-xl shadow-xl
            overflow-hidden
            transition-all duration-200 origin-top-right
            ${
              isOpen
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }
          `}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5
                  transition-all duration-200 text-left
                  ${
                    language === lang.code
                      ? 'bg-(--color-secondary)/20 text-(--color-secondary) font-bold'
                      : 'hover:bg-gray-100 text-gray-700'
                  }
                `}
              >
                <span className="text-sm font-medium">{lang.shortLabel}</span>
                <span className="flex-1 text-sm">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSelect(lang.code)}
          className={`
            px-3 py-1.5 rounded-full text-sm font-bold
            transition-all duration-300
            ${
              language === lang.code
                ? 'bg-(--color-secondary) text-white'
                : variant === 'light'
                  ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  : 'bg-black/10 text-black hover:bg-black/20 border border-black/20'
            }
          `}
          aria-label={`Switch to ${lang.shortLabel}`}
        >
          {lang.shortLabel}
        </button>
      ))}
    </div>
  );
}
