'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import MobileChatbot from './MobileChatbot';
import { useChatHistory } from './HistoryChatbot';
import {
  detectServiceQuestion,
  getServiceOptions,
  getServiceResponse,
  getDefaultResponse,
} from './ServiceBot';
import { detectGreeting, getGreetingResponse } from './Logicbot';
import { getTooltipGreeting } from './TranslationBot';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Chatbot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const chatAreaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { messages, addMessage, initializeWithLanguage } = useChatHistory();

  // sapaan tooltip
  const currentGreeting = useMemo(() => getTooltipGreeting(language), [language]);

  // Saat ubah bahasa
  useEffect(() => {
    initializeWithLanguage(language);
  }, [language, initializeWithLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      type: 'user',
      content: inputValue,
    });

    // Cek sapaan
    if (detectGreeting(inputValue)) {
      setTimeout(() => {
        addMessage({
          type: 'bot',
          content: getGreetingResponse(inputValue, language),
        });
      }, 500);
    } else if (detectServiceQuestion(inputValue)) {
      setTimeout(() => {
        addMessage({
          type: 'bot',
          content: getServiceResponse(language),
          options: getServiceOptions(language),
        });
      }, 500);
    } else {
      // Default response
      setTimeout(() => {
        addMessage({
          type: 'bot',
          content: getDefaultResponse(language),
        });
      }, 500);
    }

    setInputValue('');
  };

  const handleOptionClick = (option: { action: string; value: string }) => {
    if (option.action === 'navigate') {
      router.push(option.value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-end transition-all duration-500 ease-in-out ${
          isOpen ? 'hidden md:flex' : 'flex'
        } ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="group relative flex items-center">
          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-full mr-4 bg-gray-100 px-4 py-2 rounded-xl shadow-md text-sm font-nunito text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {currentGreeting}
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-100 transform rotate-45"></div>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 bg-(--color-primary) rounded-full shadow-lg hover:bg-(--color-primary-hover) transition-all text-white flex items-center justify-center"
          >
            <div className="relative w-8 h-8">
              <Bot
                size={32}
                className={`absolute top-0 left-0 transition-all duration-300 transform ${
                  isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={32}
                className={`absolute top-0 left-0 transition-all duration-300 transform ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          {/* Mobile View */}
          <div className="md:hidden">
            <MobileChatbot onClose={() => setIsOpen(false)} />
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex fixed bottom-28 right-6 z-50 flex-col w-85 h-112 bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-10 fade-in duration-300">
            {/* Header */}
            <div className="bg-(--color-primary) p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-full text-(--color-primary)">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base font-unbounded">AWA Assistant</h3>
                  <p className="text-xs opacity-90 font-nunito">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div
              ref={chatAreaRef}
              data-lenis-prevent
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5] min-h-0 overscroll-contain"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${
                    message.type === 'user' ? 'items-end ml-auto' : 'items-start'
                  } max-w-[85%] ${message.type === 'user' ? 'ml-auto' : ''}`}
                >
                  <div
                    className={`${
                      message.type === 'user'
                        ? 'bg-(--color-primary) text-white rounded-2xl rounded-tr-none'
                        : 'bg-white border border-gray-200 rounded-2xl rounded-tl-none text-gray-800'
                    } p-3 shadow-sm ${message.options ? 'w-full' : ''}`}
                  >
                    <p className="text-sm font-nunito">{message.content}</p>
                    {message.options && (
                      <div className="flex flex-col gap-2 mt-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors border border-gray-200 font-nunito cursor-pointer"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-[10px] text-gray-500 mt-1 ${
                      message.type === 'user' ? 'mr-1' : 'ml-1'
                    } font-nunito`}
                  >
                    {message.timestamp}
                  </span>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
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
                  className="p-1.5 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
