"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { Language } from "@/constants/translations";
import { getInitialMessage } from "./TranslationBot";

export interface ChatMessage {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: string;
  options?: ChatOption[];
}

export interface ChatOption {
  label: string;
  action: "navigate" | "reply";
  value: string;
}

interface ChatHistoryContextType {
  messages: ChatMessage[];
  addMessage: (message: Omit<ChatMessage, "id" | "timestamp">) => void;
  clearHistory: () => void;
  initializeWithLanguage: (language: Language) => void;
}

const ChatHistoryContext = createContext<ChatHistoryContextType | undefined>(
  undefined
);

export function ChatHistoryProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content: "Halo Aku AI Assistant AWA",
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const addMessage = useCallback(
    (message: Omit<ChatMessage, "id" | "timestamp">) => {
      const newMessage: ChatMessage = {
        ...message,
        id: Date.now().toString(),
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, newMessage]);
    },
    []
  );

  const clearHistory = useCallback(() => {
    setMessages([
      {
        id: "1",
        type: "bot",
        content: "Halo Aku AI Assistant AWA",
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, []);

  const initializeWithLanguage = useCallback((language: Language) => {
    setMessages([
      {
        id: "1",
        type: "bot",
        content: getInitialMessage(language),
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  }, []);

  return (
    <ChatHistoryContext.Provider
      value={{ messages, addMessage, clearHistory, initializeWithLanguage }}
    >
      {children}
    </ChatHistoryContext.Provider>
  );
}

export function useChatHistory() {
  const context = useContext(ChatHistoryContext);
  if (context === undefined) {
    throw new Error("useChatHistory must be used within a ChatHistoryProvider");
  }
  return context;
}
