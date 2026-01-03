import { TRANSLATIONS, Language } from '@/constants/translations';

/**
 * @param language
 * @returns
 */
export function getInitialMessage(language: Language): string {
  return TRANSLATIONS[language].chatbot.initialMessage;
}

/**
 * @param language
 * @returns
 */
export function getGreetingResponseByTime(language: Language): string {
  const hour = new Date().getHours();
  const responses = TRANSLATIONS[language].chatbot.responses;

  if (hour >= 5 && hour < 12) {
    // Pagi (05:00 - 11:59)
    return responses.greetingMorning;
  } else if (hour >= 12 && hour < 18) {
    // Siang/Sore (12:00 - 17:59)
    return responses.greetingAfternoon;
  } else {
    // Malam (18:00 - 04:59)
    return responses.greetingEvening;
  }
}

/**
 * Get service prompt message
 * @param language - Bahasa yang dipilih user
 * @returns Service prompt dalam bahasa yang sesuai
 */
export function getServicePrompt(language: Language): string {
  return TRANSLATIONS[language].chatbot.responses.servicePrompt;
}

/**
  @param language 
  @returns 
 */
export function getServiceOptions(language: Language) {
  const options = TRANSLATIONS[language].chatbot.serviceOptions;

  return [
    {
      label: options.consultation,
      action: 'navigate' as const,
      value: '/consultation',
    },
    {
      label: options.construction,
      action: 'navigate' as const,
      value: '/construction',
    },
  ];
}

/**
 * Get default response untuk pertanyaan yang tidak dikenali
  @param language - Bahasa yang dipilih user
  @returns Default response dalam bahasa yang sesuai
 */
export function getDefaultResponse(language: Language): string {
  return TRANSLATIONS[language].chatbot.responses.defaultResponse;
}

/**
 * Get tooltip greeting berdasarkan waktu untuk hover state
  @param language - Bahasa yang dipilih user
  @returns Tooltip greeting dalam bahasa yang sesuai
 */
export function getTooltipGreeting(language: Language): string {
  const hour = new Date().getHours();
  const greetings = TRANSLATIONS[language].chatbot.greeting;

  if (hour >= 5 && hour < 12) {
    return greetings.morning;
  } else if (hour >= 12 && hour < 18) {
    return greetings.afternoon;
  } else {
    return greetings.evening;
  }
}

/**
 * Detect bahasa dari input message user
  @param message - Message dari user
  @returns Detected language (id, en, atau ja)
 */
export function detectMessageLanguage(message: string): Language {
  const lowerMessage = message.toLowerCase().trim();

  // Keywords untuk bahasa Indonesia
  const indonesianKeywords = [
    'halo',
    'hai',
    'selamat',
    'pagi',
    'siang',
    'sore',
    'malam',
    'apa',
    'layanan',
    'jasa',
    'bantu',
    'tolong',
  ];

  // Keywords untuk bahasa Inggris
  const englishKeywords = [
    'hello',
    'hi',
    'hey',
    'good',
    'morning',
    'afternoon',
    'evening',
    'night',
    'what',
    'service',
    'help',
    'please',
  ];

  // Keywords untuk bahasa Jepang
  const japaneseKeywords = ['こんにちは', 'おはよう', 'こんばんは', 'サービス', '助け', 'お願い'];

  // Check Japanese first (karena karakternya unique)
  const hasJapanese = japaneseKeywords.some((keyword) => lowerMessage.includes(keyword));
  if (hasJapanese) return 'ja';

  // Count matches untuk Indonesian dan English
  const indonesianMatches = indonesianKeywords.filter((keyword) =>
    lowerMessage.includes(keyword)
  ).length;

  const englishMatches = englishKeywords.filter((keyword) => lowerMessage.includes(keyword)).length;

  // Return bahasa dengan matches terbanyak
  if (indonesianMatches > englishMatches) return 'id';
  if (englishMatches > indonesianMatches) return 'en';

  return 'id';
}
