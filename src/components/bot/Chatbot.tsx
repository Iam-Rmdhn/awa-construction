"use client";

import React, { useState, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";
import MobileChatbot from "./MobileChatbot";

const greetings = [
  "Can I help You?",
  "Halo! Ada yang bisa saya bantu?",
  "AWA Bot Siap Membantumu",
  "Good day! What can I do for you?",
  "Welcome! I’m here to help with anything you need.",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show chatbot when scrolled past 20% of the viewport (Hero section)
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * greetings.length);
    } while (greetings[newIndex] === currentGreeting && greetings.length > 1);
    setCurrentGreeting(greetings[newIndex]);
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-end transition-all duration-500 ease-in-out ${
          isOpen ? "hidden md:flex" : "flex"
        } ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div
          className="group relative flex items-center"
          onMouseEnter={handleMouseEnter}
        >
          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-full mr-4 bg-gray-100 px-4 py-2 rounded-xl shadow-md text-sm font-nunito text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {currentGreeting}
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-100 transform rotate-45"></div>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 bg-[#00a0a0] rounded-full shadow-lg hover:bg-[#008080] transition-all text-white flex items-center justify-center"
          >
            <div className="relative w-8 h-8">
              <Bot
                size={32}
                className={`absolute top-0 left-0 transition-all duration-300 transform ${
                  isOpen
                    ? "opacity-0 rotate-90 scale-50"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={32}
                className={`absolute top-0 left-0 transition-all duration-300 transform ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-50"
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
            <div className="bg-[#00a0a0] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-full text-[#00a0a0]">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base font-unbounded">
                    AWA Assistant
                  </h3>
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5]">
              {/* Bot Message */}
              <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm">
                  <p className="text-sm text-gray-800 font-nunito">
                    Halo Aku AI Assistant AWA
                  </p>
                </div>
                <span className="text-[10px] text-gray-500 mt-1 ml-1 font-nunito">
                  01:01
                </span>
              </div>

              {/* User Message */}
              <div className="flex flex-col items-end self-end max-w-[85%] ml-auto">
                <div className="bg-[#00a0a0] text-white rounded-2xl rounded-tr-none p-3 shadow-sm">
                  <p className="text-sm font-nunito">Aku User Guys!</p>
                </div>
                <span className="text-[10px] text-gray-500 mt-1 mr-1 font-nunito">
                  01:02
                </span>
              </div>

              {/* Options Message */}
              <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm w-full">
                  <p className="text-sm text-gray-800 mb-2 font-nunito">
                    G nanya sumpah
                  </p>
                  <div className="flex flex-col gap-2">
                    <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors border border-gray-200 font-nunito">
                      Ya
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors border border-gray-200 font-nunito">
                      Tidak
                    </button>
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 mt-1 ml-1 font-nunito">
                  01:03
                </span>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Send a Message"
                  className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 font-nunito"
                />
                <button className="p-1.5 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">
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
