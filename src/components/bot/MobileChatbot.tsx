"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import { useRouter } from "next/navigation";
import { useChatHistory } from "./HistoryChatbot";
import {
  detectServiceQuestion,
  getServiceOptions,
  getServiceResponse,
  getDefaultResponse,
} from "./ServiceBot";

interface MobileChatbotProps {
  onClose: () => void;
}

export default function MobileChatbot({ onClose }: MobileChatbotProps) {
  const [inputValue, setInputValue] = useState("");
  const chatAreaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { messages, addMessage } = useChatHistory();

  // Auto scroll to bottom when new message added
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    addMessage({
      type: "user",
      content: inputValue,
    });

    // Check if it's a service question
    if (detectServiceQuestion(inputValue)) {
      // Add bot response with options
      setTimeout(() => {
        addMessage({
          type: "bot",
          content: getServiceResponse(),
          options: getServiceOptions(),
        });
      }, 500);
    } else {
      // Default response
      setTimeout(() => {
        addMessage({
          type: "bot",
          content: getDefaultResponse(),
        });
      }, 500);
    }

    setInputValue("");
  };

  const handleOptionClick = (option: { action: string; value: string }) => {
    if (option.action === "navigate") {
      router.push(option.value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 z-60 bg-gray-50 flex flex-col animate-in slide-in-from-bottom duration-300">
      {/* Header */}
      <div className="bg-[#00a0a0] p-4 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full text-[#00a0a0]">
            <Bot size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg font-unbounded">AWA Assistant</h3>
            <p className="text-xs opacity-90 font-nunito">Online</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Chat Area */}
      <div
        ref={chatAreaRef}
        data-lenis-prevent
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5] overscroll-contain"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${
              message.type === "user" ? "items-end ml-auto" : "items-start"
            } max-w-[80%] ${message.type === "user" ? "ml-auto" : ""}`}
          >
            <div
              className={`${
                message.type === "user"
                  ? "bg-[#00a0a0] text-white rounded-2xl rounded-tr-none"
                  : "bg-white border border-gray-300 rounded-2xl rounded-tl-none text-gray-800"
              } p-3 shadow-sm ${message.options ? "w-full" : ""}`}
            >
              <p className="text-sm font-nunito">{message.content}</p>
              {message.options && (
                <div className="flex flex-col gap-2 mt-2">
                  {message.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="w-full text-left px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors border border-gray-200 font-nunito"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span
              className={`text-[10px] text-gray-500 mt-1 ${
                message.type === "user" ? "mr-1" : "ml-1"
              } font-nunito`}
            >
              {message.timestamp}
            </span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3 border border-gray-300">
          <input
            type="text"
            placeholder="Send a Message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 font-nunito"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
