// Import constants from Greetings.ts
import {
  englishGreetingKeywords,
  indonesianGreetingKeywords,
  japaneseGreetingKeywords,
  allGreetingKeywords,
  englishGreetingResponses,
  indonesianGreetingResponses,
  japaneseGreetingResponses,
  specialGreetingResponses,
} from './Greetings';
import { TRANSLATIONS, Language } from '@/constants/translations';
import { getGreetingResponseByTime } from './TranslationBot';

/**
 * Detects if a message is a greeting
  @param message
  @returns
 */
export function detectGreeting(message: string): boolean {
  const lowerMessage = message.toLowerCase().trim();

  return allGreetingKeywords.some((keyword) => lowerMessage.includes(keyword));
}

/**
 * Determines the language of the message based on keywords
  @param message
  @returns
 */
export function detectLanguage(message: string): Language {
  const lowerMessage = message.toLowerCase().trim();

  // Check for Japanese keywords first (karena karakternya unique)
  const hasJapanese = japaneseGreetingKeywords.some((keyword) => lowerMessage.includes(keyword));

  // Check for Indonesian keywords
  const hasIndonesian = indonesianGreetingKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );

  // Check for English keywords
  const hasEnglish = englishGreetingKeywords.some((keyword) => lowerMessage.includes(keyword));

  // Return Japanese if detected
  if (hasJapanese) {
    return 'ja';
  }

  // If both Indonesian and English are detected, prioritize based on the dominant language in the message
  if (hasIndonesian && hasEnglish) {
    // Count how many keywords match for each language
    const indonesianMatches = indonesianGreetingKeywords.filter((keyword) =>
      lowerMessage.includes(keyword)
    ).length;

    const englishMatches = englishGreetingKeywords.filter((keyword) =>
      lowerMessage.includes(keyword)
    ).length;

    // Return the language with more matches, default to Indonesian if equal
    return englishMatches > indonesianMatches ? 'en' : 'id';
  }

  // Bahasa Indo
  if (hasIndonesian) {
    return 'id';
  }

  // Bahasa Inggris
  if (hasEnglish) {
    return 'en';
  }

  // Default to Indonesian
  return 'id';
}

/**
 * Deteksi bahasa dan berikan response
  @param message
  @param currentLanguage - Bahasa yang saat ini dipilih user di website
  @returns
 */

export function getGreetingResponse(message: string = '', currentLanguage: Language): string {
  const lowerMessage = message.toLowerCase().trim();
  const detectedLanguage = detectLanguage(message);

  // Gunakan bahasa yang terdeteksi dari pesan, fallback ke bahasa website
  const language = detectedLanguage || currentLanguage;

  // Cek sapaan khusus yang memerlukan respons spesifik
  for (const [greeting, responses] of Object.entries(specialGreetingResponses)) {
    if (lowerMessage.includes(greeting)) {
      return responses[language] || responses['id'];
    }
  }

  // Cek apakah pesan adalah sapaan untuk memberikan sapaan berdasarkan waktu
  const isGreetingMessage =
    englishGreetingKeywords.some((keyword) => lowerMessage.includes(keyword)) ||
    indonesianGreetingKeywords.some((keyword) => lowerMessage.includes(keyword)) ||
    japaneseGreetingKeywords.some((keyword) => lowerMessage.includes(keyword));

  if (isGreetingMessage) {
    // Gunakan greeting berdasarkan waktu dari TranslationBot
    return getGreetingResponseByTime(language);
  }

  // Untuk pesan non-sapaan, kembalikan respons sapaan acak
  const greetingResponses =
    language === 'ja'
      ? japaneseGreetingResponses
      : language === 'en'
        ? englishGreetingResponses
        : indonesianGreetingResponses;

  // Kembalikan respons sapaan acak dalam bahasa yang terdeteksi
  const randomIndex = Math.floor(Math.random() * greetingResponses.length);
  return greetingResponses[randomIndex];
}

/**
 * Gets a timed greeting response based on the time of day and language
  @param language
  @returns
 */
export function getTimedGreetingResponse(language: Language = 'id'): string {
  const hour = new Date().getHours();
  const translations = TRANSLATIONS[language].chatbot.greeting;

  if (hour >= 5 && hour < 12) {
    // Morning
    return translations.morning;
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    return translations.afternoon;
  } else {
    // Evening/Night
    return translations.evening;
  }
}

/**
 * Sapaan bahasa tertentu
  @param language
  @returns
 */
export function getGreetingResponseByLanguage(language: Language): string {
  const greetingResponses =
    language === 'ja'
      ? japaneseGreetingResponses
      : language === 'en'
        ? englishGreetingResponses
        : indonesianGreetingResponses;

  // Return a random greeting response in the specified language
  const randomIndex = Math.floor(Math.random() * greetingResponses.length);
  return greetingResponses[randomIndex];
}
