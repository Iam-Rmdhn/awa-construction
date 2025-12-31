// Import constants from Greetings.ts
import {
  englishGreetingKeywords,
  indonesianGreetingKeywords,
  allGreetingKeywords,
  englishGreetingResponses,
  indonesianGreetingResponses,
  specialGreetingResponses,
} from "./Greetings";

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
export function detectLanguage(message: string): "id" | "en" {
  const lowerMessage = message.toLowerCase().trim();

  // Check for Indonesian keywords
  const hasIndonesian = indonesianGreetingKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );

  // Check for English keywords
  const hasEnglish = englishGreetingKeywords.some((keyword) =>
    lowerMessage.includes(keyword)
  );

  // If both are detected, prioritize based on the dominant language in the message
  if (hasIndonesian && hasEnglish) {
    // Count how many keywords match for each language
    const indonesianMatches = indonesianGreetingKeywords.filter((keyword) =>
      lowerMessage.includes(keyword)
    ).length;

    const englishMatches = englishGreetingKeywords.filter((keyword) =>
      lowerMessage.includes(keyword)
    ).length;

    // Return the language with more matches, default to Indonesian if equal
    return englishMatches > indonesianMatches ? "en" : "id";
  }

  // Bahasa Indo
  if (hasIndonesian) {
    return "id";
  }
  // Bahasa Inggris
  return "en";
}

/**
 * Deteksi bahasa
  @param message
  @returns
 */

export function getGreetingResponse(message: string = ""): string {
  const lowerMessage = message.toLowerCase().trim();
  const language = detectLanguage(message);
  const hour = new Date().getHours();

  // Cek sapaan khusus yang memerlukan respons spesifik
  for (const [greeting, responses] of Object.entries(
    specialGreetingResponses
  )) {
    if (lowerMessage.includes(greeting)) {
      return responses[language] || responses["id"];
    }
  }

  // Cek apakah pesan adalah sapaan untuk memberikan sapaan berdasarkan waktu
  const isGreetingMessage = englishGreetingKeywords.some(keyword =>
    lowerMessage.includes(keyword)
  ) || indonesianGreetingKeywords.some(keyword =>
    lowerMessage.includes(keyword)
  );

  if (isGreetingMessage) {
    // Buat sapaan berdasarkan waktu
    if (hour >= 5 && hour < 12) {
      // Pagi
      if (language === 'id') {
        return "Halo! Selamat pagi, selamat datang di AWA Construction. Ada yang bisa saya bantu?";
      } else {
        return "Hello! Good morning, welcome to AWA Construction. How can I assist you?";
      }
    } else if (hour >= 12 && hour < 15) {
      // Siang
      if (language === 'id') {
        return "Halo! Selamat siang, selamat datang di AWA Construction. Ada yang bisa saya bantu?";
      } else {
        return "Hello! Good afternoon, welcome to AWA Construction. How can I assist you?";
      }
    } else if (hour >= 15 && hour < 18) {
      // Sore
      if (language === 'id') {
        return "Halo! Selamat sore, selamat datang di AWA Construction. Ada yang bisa saya bantu?";
      } else {
        return "Hello! Good evening, welcome to AWA Construction. How can I assist you?";
      }
    } else {
      // Malam
      if (language === 'id') {
        return "Halo! Selamat malam, selamat datang di AWA Construction. Ada yang bisa saya bantu?";
      } else {
        return "Hello! Good evening, welcome to AWA Construction. How can I assist you?";
      }
    }
  }

  // Untuk pesan non-sapaan, kembalikan respons sapaan acak
  const greetingResponses =
    language === "id" ? indonesianGreetingResponses : englishGreetingResponses;

  // Kembalikan respons sapaan acak dalam bahasa yang terdeteksi
  const randomIndex = Math.floor(Math.random() * greetingResponses.length);
  return greetingResponses[randomIndex];
}

/**
 * Gets a timed greeting response based on the time of day and language
  @param language
  @returns
 */
export function getTimedGreetingResponse(language: "id" | "en" = "id"): string {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    // Morning
    greeting = language === "id" ? "Selamat pagi! " : "Good morning! ";
  } else if (hour >= 12 && hour < 15) {
    // Afternoon
    greeting = language === "id" ? "Selamat siang! " : "Good afternoon! ";
  } else if (hour >= 15 && hour < 18) {
    // Afternoon/Evening
    greeting = language === "id" ? "Selamat sore! " : "Good afternoon! ";
  } else {
    // Evening/Night
    greeting = language === "id" ? "Selamat malam! " : "Good evening! ";
  }

  if (language === "id") {
    return (
      greeting +
      "Saya AWA Bot, siap membantu Anda. Ada yang bisa saya bantu hari ini?"
    );
  } else {
    return (
      greeting + "I'm AWA Bot, ready to assist you. How can I help you today?"
    );
  }
}

/**
 * Sapaan bahasa tertentu
  @param language
  @returns
 */
export function getGreetingResponseByLanguage(language: "id" | "en"): string {
  const greetingResponses =
    language === "id" ? indonesianGreetingResponses : englishGreetingResponses;

  // Return a random greeting response in the specified language
  const randomIndex = Math.floor(Math.random() * greetingResponses.length);
  return greetingResponses[randomIndex];
}
