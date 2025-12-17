"use client";

import { ChatOption } from "./HistoryChatbot";

// Keywords pertanyaan service
const serviceKeywords = [
  "service",
  "servis",
  "layanan",
  "apa saja",
  "tersedia",
  "yang ada",
  "jasa",
  "penawaran",
  "produk",
  "konstruksi",
  "konsultasi",
  "bantuan apa",
  "bisa bantu apa",
  "fitur",
];

export function detectServiceQuestion(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  return serviceKeywords.some((keyword) => lowerMessage.includes(keyword));
}

export function getServiceOptions(): ChatOption[] {
  return [
    {
      label: "Konsultasi",
      action: "navigate",
      value: "/konsultasi",
    },
    {
      label: "Layanan Konstruksi",
      action: "navigate",
      value: "/konstruksi",
    },
  ];
}

export function getServiceResponse(): string {
  return "Berikut adalah layanan yang tersedia di AWA Construction:";
}

// Response default jika tidak mendeteksi pertanyaan service
export function getDefaultResponse(): string {
  return "Terima kasih atas pertanyaannya. Apakah Anda ingin mengetahui layanan kami? Silakan ketik 'service' atau 'layanan' untuk melihat pilihan layanan yang tersedia.";
}
