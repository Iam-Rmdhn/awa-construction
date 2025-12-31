"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/constants/translations";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

export default function LanguageSwitcher({ variant = "light" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Globe Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center
          w-10 h-10 rounded-full
          transition-all duration-300
          hover:scale-105 active:scale-95
          ${variant === "light" 
            ? "bg-white/10 hover:bg-white/20 text-white border border-white/20" 
            : "bg-black/10 hover:bg-black/20 text-black border border-black/20"
          }
        `}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute right-0 top-full mt-2
          min-w-[160px]
          bg-white/95 backdrop-blur-xl
          border border-white/20
          rounded-xl shadow-xl
          overflow-hidden
          transition-all duration-200 origin-top-right
          ${isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
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
                transition-all duration-200
                ${language === lang.code 
                  ? "bg-linear-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600" 
                  : "hover:bg-gray-100 text-gray-700"
                }
              `}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="flex-1 text-left text-sm font-medium">
                {lang.label}
              </span>
              {language === lang.code && (
                <Check className="w-4 h-4 text-cyan-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
