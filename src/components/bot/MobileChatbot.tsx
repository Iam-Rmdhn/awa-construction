import React from "react";
import { X, Send, Bot } from "lucide-react";

interface MobileChatbotProps {
  onClose: () => void;
}

export default function MobileChatbot({ onClose }: MobileChatbotProps) {
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
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5]">
        {/* Bot Message */}
        <div className="flex flex-col items-start max-w-[80%]">
          <div className="bg-white border border-gray-300 rounded-2xl rounded-tl-none p-3 shadow-sm">
            <p className="text-sm text-gray-800 font-nunito">
              Halo Aku AI Assistant AWA
            </p>
          </div>
          <span className="text-[10px] text-gray-500 mt-1 ml-1 font-nunito">
            01:01
          </span>
        </div>

        {/* User Message */}
        <div className="flex flex-col items-end self-end max-w-[80%] ml-auto">
          <div className="bg-[#00a0a0] text-white rounded-2xl rounded-tr-none p-3 shadow-sm">
            <p className="text-sm font-nunito">Aku User Guys!</p>
          </div>
          <span className="text-[10px] text-gray-500 mt-1 mr-1 font-nunito">
            01:02
          </span>
        </div>

        {/* Options Message */}
        <div className="flex flex-col items-start max-w-[80%]">
          <div className="bg-white border border-gray-300 rounded-2xl rounded-tl-none p-3 shadow-sm w-full">
            <p className="text-sm text-gray-800 mb-2 font-nunito">
              G nanya sumpah
            </p>
            <div className="flex flex-col gap-2">
              <button className="w-full text-left px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors border border-gray-200 font-nunito">
                Ya
              </button>
              <button className="w-full text-left px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors border border-gray-200 font-nunito">
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
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3 border border-gray-300">
          <input
            type="text"
            placeholder="Send a Message"
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 font-nunito"
          />
          <button className="p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
