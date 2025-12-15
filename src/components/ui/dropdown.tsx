"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Dropdown({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const selectedLabel =
    options.find(
      (opt) => opt.value === (value !== undefined ? value : selectedValue)
    )?.label || placeholder;

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3 py-3 bg-white border border-[#222831] rounded-lg text-left transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ADB5] cursor-pointer ${
          isOpen ? "border-[#00ADB5] ring-2 ring-[#00ADB5]" : ""
        }`}
      >
        <span
          className={`font-nunito text-base ${
            (value !== undefined ? value : selectedValue)
              ? "text-[#222831]"
              : "text-gray-500"
          }`}
        >
          {selectedLabel}
        </span>
        <ChevronDown
          size={20}
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Panel */}
      <div
        className={`absolute z-50 w-full mt-2 bg-white border border-[#222831] rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-2 px-2">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full px-5 py-4 text-left font-nunito text-base transition-all duration-200 cursor-pointer rounded-lg ${
                (value !== undefined ? value : selectedValue) === option.value
                  ? "bg-[#00ADB5] text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
