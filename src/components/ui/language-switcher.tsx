"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/constants/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("id")}
        className={`px-2 py-1 rounded text-xs font-bold transition-all ${
          language === "id"
            ? "bg-white text-black"
            : "text-white/70 hover:text-white"
        }`}
      >
        ID
      </button>
      <span className="text-white/30">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded text-xs font-bold transition-all ${
          language === "en"
            ? "bg-white text-black"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-white/30">|</span>
      <button
        onClick={() => setLanguage("ja")}
        className={`px-2 py-1 rounded text-xs font-bold transition-all ${
          language === "ja"
            ? "bg-white text-black"
            : "text-white/70 hover:text-white"
        }`}
      >
        JP
      </button>
    </div>
  );
}
