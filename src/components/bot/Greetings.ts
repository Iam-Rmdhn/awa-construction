// Greeting keywords detection
export const englishGreetingKeywords = [
  // English greetings
  "hi",
  "hello",
  "hey",
  "good morning",
  "good afternoon",
  "good evening",
  "good night",
  "morning",
  "afternoon",
  "evening",
  "night",
];

export const indonesianGreetingKeywords = [
  // Indonesian greetings
  "halo",
  "hai",
  "pagi",
  "selamat pagi",
  "siang",
  "selamat siang",
  "sore",
  "selamat sore",
  "malam",
  "selamat malam",

  // Islamic greetings
  "assalamualaikum",
  "assalamu'alaikum",
  "salam",

  // Mixed greetings
  "halo saya ingin bertanya",
  "hai saya ingin bertanya",
  "saya ingin bertanya",
  "ada yang bisa dibantu",
  "bisa dibantu",
  "bantu saya",
];

// Combine all greeting keywords
export const allGreetingKeywords = [
  ...englishGreetingKeywords,
  ...indonesianGreetingKeywords,
];

// English greeting responses
export const englishGreetingResponses = [
  "Hello! Welcome to AWA Construction. How can I assist you today?",
  "Hi there! I'm AWA Bot, ready to help you. Do you have any questions or information you need?",
  "Welcome! I'm here to help you with information about our construction services.",
  "Hello! Thank you for contacting AWA Construction. How can I help you today?",
  "Welcome to AWA Construction! I'm ready to help you with any questions about our services.",
  "Hi! I'm AWA Bot, virtual assistant from AWA Construction. How can I assist you?",
  "Thank you for reaching out! I'm ready to help you with information related to our construction services.",
  "AWA Construction is here to help you! Do you have any questions about our services?",
];

// Indonesian greeting responses
export const indonesianGreetingResponses = [
  "Halo! Selamat datang di AWA Construction. Ada yang bisa saya bantu?",
  "Hi! Saya AWA Bot, siap membantu Anda. Ada pertanyaan atau informasi yang Anda butuhkan?",
  "Selamat datang! Saya siap membantu Anda dengan informasi tentang layanan konstruksi kami.",
  "Halo! Terima kasih telah menghubungi AWA Construction. Bagaimana saya bisa membantu Anda hari ini?",
  "Selamat datang di AWA Construction! Saya siap membantu Anda dengan segala pertanyaan seputar layanan kami.",
  "Hai! Saya AWA Bot, asisten virtual dari AWA Construction. Ada yang bisa saya bantu?",
  "Terima kasih sudah menghubungi kami! Saya siap membantu Anda dengan informasi terkait layanan konstruksi kami.",
  "AWA Construction siap membantu Anda! Ada pertanyaan seputar layanan kami?",
];

// Special greeting responses for specific greetings
export const specialGreetingResponses: { [key: string]: { [lang: string]: string } } =
  {
    assalamualaikum: {
      id: "Waalaikumsalam. Selamat datang di AWA Construction. Ada yang bisa saya bantu?",
      en: "Waalaikumsalam. Welcome to AWA Construction. How can I assist you today?",
    },
    "assalamu'alaikum": {
      id: "Waalaikumsalam. Selamat datang di AWA Construction. Ada yang bisa saya bantu?",
      en: "Waalaikumsalam. Welcome to AWA Construction. How can I assist you today?",
    },
    salam: {
      id: "Waalaikumsalam! Saya AWA Bot, siap membantu Anda. Ada yang bisa saya bantu hari ini?",
      en: "Waalaikumsalam! I'm AWA Bot, ready to assist you. How can I help you today?",
    },
  };
